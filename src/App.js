import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

const links = ['home', 'buddhism and psychology', 'freud in china', 'papers', 'cv', 'about']
class App extends Component {
  state = {
    activePage: 'freud in china'
  }

  render() {
    return (
      <Header
        links={links}
        activePage={this.state.activePage}
      />
    );
  }
}

export default App;
