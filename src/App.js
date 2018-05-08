import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/atoms/Button'
import Counter from './components/atoms/Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button>Child Node Hello!</Button>
        <Counter btnName='Up!' initialValue={1}/>
        <Counter btnName='Higher Up!' initialValue={10}/>
        <Counter btnName='So High Up!' initialValue={100}/>
      </div>
    );
  }
}

export default App;
