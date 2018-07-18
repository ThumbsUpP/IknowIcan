import React, { Component } from 'react';
import './App.css';
import * as actionTypes from "./store/actions/auth";
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Auth from './containers/Auth/Auth';
import Home from './containers/Home/Home';
import Logout from './containers/Logout/Logout';
import Favorite from './containers/Favorite/Favorite'

class App extends Component {
  state = {
    state: null
  }

  componentDidMount() {
    this.props.onTryAutoSignup() 
    //console.log(this.props);
    
  }
  
  render() {

    let routes = (
      <Switch>
          <Route exact path="/home" render={() => <Home history={this.props.history}/>}/>
          <Route exact path="/" render={() => <Auth />} />
          <Route exact path="/logout" component={Logout} />
          {/* <Route exact path="/:id" component={Favorite} /> */}
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
