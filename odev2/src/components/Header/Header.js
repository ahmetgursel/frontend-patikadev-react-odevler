import React from 'react';
import classes from './Header.module.css';

function Header() {
  return (
    <div>
      <h1 className={classes.header}>todos</h1>
    </div>
  );
}

export default Header;
