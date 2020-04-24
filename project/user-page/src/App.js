import React, { Component } from 'react'
// remove comment tag and show console warning message 
//import logo from './logo.svg';
import './App.css';
  
import Navbar from './components/Navbar'
//short cut imp
import AddUser from './components/AddUser'

import Users from './components/Users'

import Test from './components/Test'

class App extends Component {

 


  render()
  {
      return (
        <div className = "container"> {/*  already class name container  //className="App"*/}
          <Test test = "trial"/>
          <Navbar title = "User App"/>
          <AddUser/>

          <Users/>


        </div>

      )

  }
}

export default App;
