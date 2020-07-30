import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {  Route, Switch, Redirect } from 'react-router-dom';
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
      loginemail:'',
      loginpassword:'',
      watchlist: [],
      message: '',
      user: null,
      symbol: null,
      quote: '',
      // Initialize user if there's a token, otherwise null
      // user: userService.getUser()
    };

  }
 
  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  handleLogout = () => {
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


 
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div class="App">
          <Switch>
            <Route exact path='/' render={() => 
              <HomePage user={this.state.user}
                handleLogout={this.handleLogout}
                handleChange={this.handleChange}
                handleSearch={this.handleSearch}
                handleUpdateQuote={this.handleUpdateQuote}
                symbol = {this.state.symbol}
                quote = {this.state.quote}
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
              this.state.user ? 
              <HomePage symbol={this.state.symbol}  handleChange={this.handleChange} />
              :
              <Redirect to='/login'/>
            }/>
          </Switch>
      </div>
    )
  }
}

export default App;
