import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {  Route, Switch } from 'react-router-dom';
import SignUp from './components/SignupForm/Signup';
import SignInSide from './components/SignInSide/SignInSide';
import HomePage from './Pages/HomePage/HomePage'
import userService from './utils/userService'
import Watchlist from './Pages/Watchlist/Watchlist';

// import  PropTypes from ‘prop-types’

class App extends Component {
  constructor() {
    super();
    this.state = {
      signupname: '',
      signupemail: '',
      signuppassword: '',
      loginemail:'',
      loginpassword:'',
      watchlist: [],
      message: '',
      symbol: null,
      quote: '',
      news:[],
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };

  }
 
  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  handleLogout = () => {
    console.log("clicked");
    userService.logout();
    this.setState({ user: null });
  }

  handleChange = (e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }
 
  handleUpdateQuote = (quote) => {
    this.setState({ quote });
  }

  handleUpdateNews = (news) => {
    this.setState({news});
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path='/' render={() => 
              <HomePage user={this.state.user}
                handleLogout={this.handleLogout}
                handleChange={this.handleChange}
                handleSearch={this.handleSearch}
                handleUpdateQuote={this.handleUpdateQuote}
                handleUpdateNews = {this.handleUpdateNews}
                symbol = {this.state.symbol}
                quote = {this.state.quote}
                news = {this.state.news}
              />
            }/>
            <Route exact path='/signup' render={({ history }) => 
              <SignUp history={history} 
                handleChange={this.handleChange} 
                name={this.state.signupname} 
                email={this.state.signupemail} 
                password={this.state.signuppassword} 
              />
            }/>
            <Route exact path='/login' render={({ history }) => 
              <SignInSide history={history} 
              handleChange={this.handleChange} 
              email={this.state.loginemail} 
              password={this.state.loginpassword} 
              handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
            <Route exact path='/watchlist' render={({ history }) => 
              <Watchlist user={this.state.user}/>
            }/>
          </Switch>
      </div>
    )
  }
}

export default App;
