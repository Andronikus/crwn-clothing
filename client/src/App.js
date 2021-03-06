import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";

import Header from "./components/header/header.component";

import { checkUserAuthenticated } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectores";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInSignUp = lazy(() =>
  import("./pages/signin-signup/signin-signup.component")
);
const Checkout = lazy(() => import("./pages/checkout/checkout.component"));

const Layout = styled.div`
  width: 100vw;
  padding: 20px 60px;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
`;

const App = ({ checkUserAuthenticated, currentUser }) => {
  useEffect(() => {
    checkUserAuthenticated();
  }, [checkUserAuthenticated]);

  return (
    <Layout>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInSignUp />
              }
            />
            <Route exact path="/checkout" component={Checkout} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkUserAuthenticated: () => dispatch(checkUserAuthenticated()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
