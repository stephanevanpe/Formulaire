import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormEmployee from './FormEmployee';
import FilmPrefere from './FilmPrefere';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <body>
          <div>
          <FormEmployee/>
          </div>
          <div>
          <FilmPrefere/>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
