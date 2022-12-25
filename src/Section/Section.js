import React, { useState } from 'react';

import classes from './Section.module.css';
import MusicAlbums from '../MusicAlbums/MusicAlbum';
import Cart from '../Cart/Cart';

const Section = (props) => {
  const [showCartItem, setShowCartItem] = useState(false);

  const cartItemHandler = () => {
    setShowCartItem(true);
  };

  return (
    <section className={classes.section}>
      <h1>The Generics</h1>
      <MusicAlbums productList={props.productList} />
      {showCartItem && <Cart />}
      <button className={classes.button} onClick={cartItemHandler}>See the cart</button>
    </section>
  );
};

export default Section;