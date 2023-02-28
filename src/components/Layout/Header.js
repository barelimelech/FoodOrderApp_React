import React from 'react';

import mealsImg from '../../assets/meals3.png';
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>FoodOrderApp</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt='A table full of delicious food!'/>
        </div>
    </React.Fragment>
  )
};

export default Header;