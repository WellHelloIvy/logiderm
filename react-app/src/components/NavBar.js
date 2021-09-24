import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import SignUpFormModal from './SignUpFormModal';
import LoginFormModal from './LoginFormModal';
import CategoriesDropdown from './CategoriesDropdown';

const NavBar = ({ sessionUser, authenticated }) => {

  const [renderCategoriesDropdown, setRenderCategoriesDropdown] = useState(false);

  const handleClick = () => {
    setRenderCategoriesDropdown(true)
  }
  return (
    <nav>
      <div>
        <NavLink to='/' exact={true} activeClassName='active'>
          Home
        </NavLink>
      </div>
        {!authenticated ?
          <>
            <div>
              <p>Search Input Here</p>
            </div>
            <LoginFormModal />
            <SignUpFormModal />
          </>
          :
          <>
            <div>
              <button onClick={handleClick}>Not a Dropdown (apparently)</button>
              {renderCategoriesDropdown &&
               <CategoriesDropdown setRenderCategoriesDropdown={setRenderCategoriesDropdown}/>
              }
            </div>
            <p>Search Input Here</p>
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
