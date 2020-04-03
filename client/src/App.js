import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/signin-signup/signin-signup.component';
import Checkout from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectores';

import './App.css';

class App extends React.Component {
  unSubscribeFromAuth = null;
  unSubscribeFromSnapshot = null;

  componentDidMount() {
    // const { setCurrentUser } = this.props;

    // this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     this.unSubscribeFromSnapshot = userRef.onSnapshot(snapShot =>
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       })
    //     );
    //   } else {
    //     setCurrentUser(userAuth);
    //   }
    // }
    // )
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth && this.unSubscribeFromAuth();
    this.unSubscribeFromSnapshot && this.unSubscribeFromSnapshot();
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => (this.props.currentUser ? <Redirect to='/' /> : <SignInSignUp />)} />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);