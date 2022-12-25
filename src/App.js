import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import './App.css';
import Header from './Header/Header';
import Home from './Pages/Home';
import Store from './Pages/Store';
import About from './Pages/About';
import Footer from './Footer/Footer';

function App() {
  const productsArr = [
    {
      title: 'Colors',
      price: 100,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },

    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },

    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },

    {
      title: 'Blue Color',
      price: 100,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
  ];

  return (
    <React.Fragment>
      <Header />

      <Route path=''>
        <Redirect to='/home' />
      </Route>

      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/store'>
        <Store productList={productsArr} />
      </Route>
      <Route path='/about'>
        <About />
      </Route>

      <Footer />
    </React.Fragment>
  );
}

export default App;