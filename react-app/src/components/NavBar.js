import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import SignUpFormModal from './SignUpFormModal';
import LoginFormModal from './LoginFormModal';

const NavBar = ({ sessionUser, authenticated }) => {
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
              <NavLink to='/categories/:categoryId' activeClassName='active'>
                VVV Category Dropdown
              </NavLink>
            </div>
            <div>
              <p>Search Input Here</p>
            </div>
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
