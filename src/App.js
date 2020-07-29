import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {  Route, Switch } from 'react-router-dom';
import SignUp from './components/SignupForm/Signup';
import SignInSide from './components/SignInSide/SignInSide';
import HomePage from './Pages/HomePage/HomePage'
import userService from './utils/userService'

// import  PropTypes from ‘prop-types’

class App extends Component {
  constructor() {
    super();
    this.state = {
      signupname: '',
      signupemail: '',
      signuppassword: '',
      loginname:'',
      loginpassword:'',
      watchlist: [],
      message: '',
      // Initialize user if there's a token, otherwise null
      // user: userService.getUser()
    };

  }
  


  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  handleChange = (e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await userService.signup({name:this.state.signupname,email:this.state.signupemail,password:this.state.password});
  //     // Let <App> know a user has signed up!
  //     // Successfully signed up - show GamePage
  //   } catch (err) {
  //     // Invalid user data (probably duplicate email)
  //     this.updateMessage(err.message);
  //   }
  // }


  handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      // Let <App> know a user has signed up!
      this.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <div class="App">
          <Switch>
            <Route exact path='/' render={() => 
              <HomePage
              />
            }/>
            <Route exact path='/signup' render={({ history }) => 
              <SignUp history={history} handleChange={this.handleChange} name={this.state.signupname} email={this.state.signupemail} password={this.state.signuppassword} 
              />
            }/>
            <Route exact path='/login' render={({ history }) => 
              <SignInSide history={history} handleChange={this.handleChange} email={this.state.loginemail} password={this.state.loginpassword} 
              />
            }/>
          </Switch>
      </div>
    )
  }
}

export default App;
