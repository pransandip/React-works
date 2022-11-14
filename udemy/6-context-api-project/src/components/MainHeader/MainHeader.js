import React, { useContext } from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import AuthContext from '../../store/auth-context';

const MainHeader = (props) => {
  const ctx = useContext(AuthContext)
  return (
    <header className={classes['main-header']}>
      {!!!ctx.isLoggedIn ? <h1>Login Page</h1> : <h1>Home Page</h1>}
      <Navigation />
    </header>
  );
};

export default MainHeader;
