import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/signin-signup/signin-signup.component';

import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;
  unSubscribeFromSnapshot = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          this.unSubscribeFromSnapshot = userRef.onSnapshot(snapShot => 
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            })
          );
        } else {
          this.setState({ currentUser: userAuth });
        }
      }
    )
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth && this.unSubscribeFromAuth();
    this.unSubscribeFromSnapshot && this.unSubscribeFromSnapshot();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </>
    );
  }
}

export default App;
