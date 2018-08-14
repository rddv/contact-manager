import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Spinner from './components/Spinner';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './App.css';

class App extends Component {
  render() {
    return (
        <Provider>
            <Router basename={process.env.PUBLIC_URL}>
                <div className="App">
                    <Header/>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Contacts}/>
                            <Route path="/contact/add" component={AddContact}/>
                            <Route path="/contact/edit/:id" component={EditContact}/>
                            <Route path="/about" component={About}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                    <Spinner />
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
