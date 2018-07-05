import React, { Component } from 'react';
import './App.css';
//import axios from './axios';
import Auth from './containers/Auth/Auth';

import Home from './containers/Home/Home';
import Logout from './containers/Logout/Logout';
import * as actionTypes from "./store/actions/auth";
import { connect } from 'react-redux';

//import { slide as Menu } from 'react-burger-menu';
import { Route, Switch, Redirect, Link, withRouter } from "react-router-dom";



class App extends Component {
  render() {

    let routes = (
      <Switch>
          <Route exact path="/home" render={() => <Home/>}/>
          <Route exact path="/" render={() => <Auth />} />
          <Route exact path="/logout" component={Logout} />
          <Redirect to="/" />
      </Switch>)
      
    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onTryAutoSignup: () => dispatch(actionTypes.authCheckState())
  }
}

const mapStateToProps = (state) => {
  return {
      token: state.auth_reducer.token,
      userId: state.auth_reducer.userId,
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
