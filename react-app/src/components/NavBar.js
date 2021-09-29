import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import SignUpFormModal from './SignUpFormModal';
import LoginFormModal from './LoginFormModal';
import CategoriesDropdown from './CategoriesDropdown';
import Search from './Search/Search';
import { useDispatch } from 'react-redux';
import { demo } from '../store/session';

const NavBar = ({ sessionUser, authenticated }) => {
  const history = useHistory()
  const dispatch = useDispatch();

  const [renderCategoriesDropdown, setRenderCategoriesDropdown] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [renderSearchDropdown, setRenderSearchDropdown] = useState(false);

  useEffect(() => {
    if (!searchQuery.length) return setRenderSearchDropdown(false)
    setRenderSearchDropdown(true)
  }, [searchQuery]);

  const handleSearchClick = () => {
    setRenderCategoriesDropdown(false)
    if (searchQuery.length) {
      setRenderSearchDropdown(true)
    }
  }

  const searchSubmitHandler = (e) => {
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


  const handleCategoriesClick = () => {
    setRenderSearchDropdown(false)
    setRenderCategoriesDropdown(true)
  }

  const handleNavClick = () => {
    setRenderSearchDropdown(false)
    setRenderCategoriesDropdown(false)
  }

  const handleDemo = () => {
    setRenderSearchDropdown(false)
    setRenderCategoriesDropdown(false)
    dispatch(demo(1))
    history.push('/')
  }

  return (
    <nav>
      <div>
        <NavLink onClick={handleNavClick} to='/' exact={true} activeClassName='active'>
          Home
        </NavLink>
      </div>
      <div>
        <button onClick={handleCategoriesClick}>Categories</button>
        {renderCategoriesDropdown &&
          <CategoriesDropdown categoryEntries={categoryEntries} setRenderCategoriesDropdown={setRenderCategoriesDropdown}  />
        }
      </div>
      <div onClick={e => e.stopPropagation()}>
        <form onSubmit={searchSubmitHandler}>
          <input placeholder='Search' onClick={handleSearchClick} value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          {renderSearchDropdown &&
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} setRenderSearchDropdown={setRenderSearchDropdown} />
          }
        </form>
      </div>
      {!authenticated ?
        <>
          <LoginFormModal onClick={handleNavClick} />
          <SignUpFormModal onClick={handleNavClick} />
          <button onClick={handleDemo}>Demo</button>
        </>
        :
        <>
          <span>{`Welcome, ${sessionUser?.firstName}`}</span>
          <div>
            <NavLink onClick={handleNavClick} to='/profile' activeClassName='active'>
              Profile
            </NavLink>
          </div>
          <LogoutButton onClick={handleNavClick} />
        </>
      }
    </nav>
  );
}

export default NavBar;
