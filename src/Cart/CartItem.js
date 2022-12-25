
import React, {useContext} from 'react';

import classes from './CartItem.module.css';
import Button from '../UI/Button';
import cartContext from '../Store/CartContext';

const CartItem = (props) => {

  const cartCtx = useContext(cartContext);

  const removeCartItemHandler = (title) => {
    cartCtx.removeItem(title);
  }

  return (
    <React.Fragment>
      <div className={classes.div}>
        <img scr={props.item.imageUrl} alt='Music Album' />
        <span>{props.item.title}</span>
        <span>${props.item.price}</span>
        <span>{props.item.quantity}</span>
        <Button title='REMOVE' onClick={removeCartItemHandler.bind(null, props.item.title)}/>
      </div>
    </React.Fragment>
  );
};

export default CartItem;