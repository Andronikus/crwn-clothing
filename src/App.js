import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const ShopHats = () => (
  <div>
    <h1>Shop Hats</h1>
  </div>
)

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop/hats' component={ShopHats}/>
    </Switch>
  );
}

export default App;
