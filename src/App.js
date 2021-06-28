import React from 'react';

// importing the components
import Header from './components/header/header';
import Home from './components/home/home';
import Cart from './components/cart/cart';
import Login from './components/login/login';

// importing the routing packages
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div>
    <Header></Header>
    <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/cart' component={Cart}></Route>
    <Route exact path='/account' component={Login}></Route>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
