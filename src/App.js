import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './components/SignupForm/Signup';
import SignInSide from './components/SignInSide/SignInSide';
import HomePage from './Pages/HomePage/HomePage'

class App extends Component {
  constructor() {
    super();
    this.state = {

      watchlist: [],
      // Initialize user if there's a token, otherwise null
      // user: userService.getUser()
    };

  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => 
              <HomePage
              />
            }/>
            <Route exact path='/signup' render={() => 
              <SignUp
              />
            }/>
            <Route exact path='/login' render={() => 
              <SignInSide
              />
            }/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
