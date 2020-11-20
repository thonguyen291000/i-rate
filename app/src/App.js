import React, { Component } from "react";
import {BrowserRouter, Switch, Redirect, Route} from "react-router-dom";
import "./App.css";
// MUI
import { withStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
// Components
import Login from "./pages/Login";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Nav from "./components/Navigation/Nav";
// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';
// Middleware
import axios from 'axios';
import jwtDecode from 'jwt-decode';

// Set base url to connect API
axios.defaults.baseURL= "https://app-irate.herokuapp.com/";

// Token
const token = localStorage.FBidToken;
if(token){
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()){
    store.dispatch(logoutUser());
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData(localStorage.userId));
  }
}

// Css-in-react
const styles = (theme) => ({
  root: {
    display: "flex",
    overflow: "hidden"
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "rgba(0, 0, 0.08, 0.08)",

  },
  // Add more when screen down 960
  [theme.breakpoints.down('sm')]: {
    content: {
      flexGrow: 1,

      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -240,
    },
    // Content should longer or shorter
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }
  }
});

class App extends Component {
  
  state = {
    // open to assign to contentShift => false mean drawer close and then main content longer
    open: false,
    // Get from login
    login: false 
  }
  componentDidMount() {
    // Check condition to re-render when login or logout
    if(localStorage.FBidToken === undefined) {
      this.setState({
        ...this.state,
        login: false
      });
    } else {
      this.setState({
        ...this.state,
        login: true
      });
    }
  }

  render() {
    const {classes} = this.props;

    return (
      <Provider store={store}>
        <BrowserRouter>
        {this.state.login ? (
          <> 
            <div className={classes.root}>
              {/* Assign this to setState in Nav => render 2 times*/}
              <Nav app={this}/>
              <main  className={clsx(classes.content, {
                [classes.contentShift]: this.state.open,
              })}>
                <div className={classes.toolbar} />
                  <Switch>
                    <Redirect exact path="/" to="/home"/>
                    <Redirect exact path="/login" to="/home"/>
                    <Route path="/home" exact component={(props) => <Home app={this} history={props.history}/>}/>
                    <Route path="/restaurants" exact component={(props) => <Restaurants app={this} history={props.history}/>}/>
                  </Switch>
              </main>
            </div>
          </>
        ) : (
          <>
            <Redirect exact path="/" to="/login"/>
            <Route path="/login" exact render={(...props) => <Login login={this}/>} />
            {/* <Route path="/test" exact render={(...props) => <AutocompleteAddress/>} /> */}
          </>
        )}
        </BrowserRouter>
      </Provider> 
    )
  }
}

export default withStyles(styles)(App);
