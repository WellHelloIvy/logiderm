import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import SignUpFormModal from './SignUpFormModal';
import LoginFormModal from './LoginFormModal';
import CategoriesDropdown from './CategoriesDropdown';
import Search from './Search';

const NavBar = ({ sessionUser, authenticated }) => {
  const history = useHistory()

  const [renderCategoriesDropdown, setRenderCategoriesDropdown] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [renderSearchDropdown, setRenderSearchDropdown] = useState(false);

  useEffect(() => {
    if (!searchQuery.length) return setRenderSearchDropdown(false)
    setRenderSearchDropdown(true)
  }, [searchQuery]);

  const handleSearchClick = () => {
    if (searchQuery.length) {
      setRenderSearchDropdown(true)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!searchQuery.length) return;

    setRenderSearchDropdown(false);

    const query = searchQuery
    setSearchQuery('')

    history.push(`/search?q=${query}`)
  }

  const labels = useSelector(state => state.labels);
  const categoriesArr = labels?.categories;
  const categoryEntries = Object.entries(categoriesArr);


  const handleMenuClick = () => {
    setRenderCategoriesDropdown(true)
  }
  return (
    <nav>
      <div>
        <NavLink to='/' exact={true} activeClassName='active'>
          Home
        </NavLink>
      </div>
      <div>
        <button onClick={handleMenuClick}>Categories</button>
        {renderCategoriesDropdown &&
          <CategoriesDropdown categoryEntries={categoryEntries} setRenderCategoriesDropdown={setRenderCategoriesDropdown} />
        }
      </div>
      <div onClick={e => e.stopPropagation()}>
        <form onSubmit={submitHandler}>
          <input placeholder='Search' onClick={handleSearchClick} value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          {renderSearchDropdown &&
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} setRenderSearchDropdown={setRenderSearchDropdown} />
          }
        </form>
      </div>
      {!authenticated ?
        <>
          <LoginFormModal />
          <SignUpFormModal />
        </>
        :
        <>
          <span>{`Welcome, ${sessionUser?.firstName}`}</span>
          <div>
            <NavLink to='/profile' activeClassName='active'>
              Profile
            </NavLink>
          </div>
          <LogoutButton />
        </>
      }
    </nav>
  );
}

export default NavBar;
