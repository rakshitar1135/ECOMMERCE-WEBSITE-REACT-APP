import React, { useContext, Suspense, useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import Header from './Header/Header';
// import Home from './pages/Home';
// import Store from './pages/Store';
// import About from './pages/About';
// import Login from './pages/Login';
// import ContactUs from './pages/ContactUs';
import Footer from './Footer/Footer';
// import ProductDetail from './pages/ProductDetail';
import { ShowCartContextProvider } from './Store/ShowCartContext';
import { ProductContextProvider} from './Store/ProductContext'
import loginContext from './Store/LoginContext';
import LoadingSpinner from './UI/LoadingSpinner';
import cartContext from './Store/CartContext';

const Home = React.lazy(() => import('./Pages/Home'));
const Store = React.lazy(() => import('./Pages/Store'));
const About = React.lazy(() => import('./Pages/About'));
const Login = React.lazy(() => import('./Pages/Login'));
const ContactUs = React.lazy(() => import('./Pages/ContactUs'));
const ProductDetail = React.lazy(() => import('./Pages/ProductDetail'));

function App() {
  const loginCtx = useContext(loginContext);
  const cartCtx = useContext(cartContext);

  const {loginCartHandler} = cartCtx;
  const {isloggedIn} = loginCtx;

  // fetching cart data on refresh
  useEffect(() => {
    if (isloggedIn) {
      console.log('called');
      loginCartHandler();
    }
  }, [loginCartHandler, isloggedIn]);

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
    <Suspense fallback={<LoadingSpinner />}>
      <ShowCartContextProvider>
        <Header />
      </ShowCartContextProvider>

      <Route path='/' exact>
        <Redirect to='/home' />
      </Route>

      <Route path='/home'>
        <Home />
      </Route>

      <Switch>
        <ProductContextProvider>
          <ShowCartContextProvider>
            <Route path='/product' exact>
              {loginCtx.isloggedIn && <Store productList={productsArr} />}
              {!loginCtx.isloggedIn && <Redirect to='/login' />}
            </Route>
          </ShowCartContextProvider>

          <Route path='/product/:productId'>
            {loginCtx.isloggedIn && <ProductDetail />}
            {!loginCtx.isloggedIn && <Redirect to='/login' />}
          </Route>
        </ProductContextProvider>
      </Switch>

      <Route path='/about'>
        <About />
      </Route>

      <Route path='/contact'>
        <ContactUs />
      </Route>

      <Route path='/login'>
        {!loginCtx.isloggedIn && <Login />}
        {loginCtx.isloggedIn && <Redirect to='/home' />}
      </Route>

      <Footer />
    </Suspense>
  );
}

export default App;