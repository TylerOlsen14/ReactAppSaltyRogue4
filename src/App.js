import React, { Component } from 'react';
// import Navbar from './components/Navbar'
import logo from './logo.jpg';
import './App.css';
import Form from './components/Form'

class App extends Component {
  getProperty = (e) => {
    const propertyName = e.target.elements.propertyName.value
    e.preventDefault();
    console.log(propertyName)
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1 className="App-title">Property Search</h1>
      </header>
      {/* <Navbar /> */}
      <Form getProperty={this.getProperty} />
      </div>
    );
  }
}

export default App;
