import React, { useState, useContext } from 'react';

import classes from './HeaderCartButton.module.css';
import Cart from '../Cart/Cart';
import cartContext from '../Store/CartContext';

const HeaderCartButton = () => {

  const cartCtx = useContext(cartContext);

  let cartQuantity = 0;

  cartCtx.item.forEach((item) => {
    cartQuantity += item.quantity;
  })

  const [showCartItem, setShowCartItem] = useState(false);

  const cartItemHandler = () => {
    setShowCartItem(true);
  }

  return (
    <React.Fragment>
      <button className={classes.button} onClick={cartItemHandler}>
        <span>Cart</span>
        <span>{cartQuantity}</span>
      </button>
      {showCartItem && <Cart />}
    </React.Fragment>
  );
};

export default HeaderCartButton;