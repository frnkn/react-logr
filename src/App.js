import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LogerListing from './components/LogrListing';

const the_items = [
  {'the_id': 1, 'text': "Hello World 1", "tags": ["todo", "new"]},
  {'the_id': 2, 'text': "Hello World 2", "tags": ["todo", "new"]},
  {'the_id': 3, 'text': "Hello World 3", "tags": ["todo", "new"]}
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Hello Start"/>
        <LogerListing items={the_items} />
        <Footer />
      </div>
      
    );
  }
}

export default App;
