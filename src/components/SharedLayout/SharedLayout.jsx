import css from '../SharedLayout/SharedLayout.module.css';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { logOutRequest } from 'redux/auth/operations';

import { Loader } from 'components/Loader/Loader';
import { NavLink } from 'react-router-dom';

import { selectIsLoggedIn, selectUserData } from 'redux/auth/selectors';

export const SharedLayout = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);
  const handleLogOut = () => {
    dispatch(logOutRequest());
  };

  return (
    <div>
      <header>
        <NavLink className={css.home} to={'/'}>
          HOME
        </NavLink>
        <nav>
          {isLoggedIn ? (
            <div>
              <NavLink className={css.home} to={'/contacts'}>
                CONTACTS
              </NavLink>
              <span className={css.user}>HELLO, {userData.name}!</span>
              <button
                className={css.button}
                type="button"
                onClick={handleLogOut}
              >
                Log out
              </button>
            </div>
          ) : (
            <div className={css.div}>
              <NavLink className={css.register} to={'/login'}>
                LOGIN
              </NavLink>
              <NavLink className={css.register} to={'/register'}>
                SIGN UP
              </NavLink>
            </div>
          )}
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
