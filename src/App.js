import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header ></Header>
          <div className="container">
              <Contacts />
          </div>
      </div>
    );
  }
}

export default App;
