import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import SignUpFormModal from './SignUpFormModal';
import LoginFormModal from './LogInFormModal';

const NavBar = ({ sessionUser, authenticated }) => {
  return (
    <nav>
      <div>
        <NavLink to='/' exact={true} activeClassName='active'>
          Home
        </NavLink>
      </div>
      <div>
        {!authenticated ?
          <>
            <LoginFormModal />
            <SignUpFormModal />
          </>
          :

          <>
            <div>
              <NavLink to='/profile' activeClassName='active'>
                <h1>Profile</h1>
              </NavLink>
            </div>
            <LogoutButton />
          </>
        }
      </div>
    </nav>
  );
}

export default NavBar;
