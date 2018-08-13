import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

class App extends Component {
  render() {
    return (
        <Provider>
            <div className="App">
                <Header ></Header>
                <div className="container">
                    <Contacts />
                </div>
            </div>
        </Provider>
    );
  }
}

export default App;
