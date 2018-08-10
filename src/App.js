import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <h1 className="App-title">Welcome to React</h1>
            <Link to="/">Home</Link> <Link to="/post/">Post</Link>
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/post/:id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
