import Text from './Text'
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Text greeting={" Welcome to robo friends website"}/>
      </div>
    );
  }
}

export default App;
