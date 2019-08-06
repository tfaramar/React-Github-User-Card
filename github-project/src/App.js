import React from 'react';
import axios from 'axios';

import './App.css';



class App extends React.Component {

  constructor() {
    console.log("CONSTRUCTOR INVOKED");
    super();
    this.state = {
      user: userData
    };
  }

  // componentDidMount(){

  // }

  render(){
    console.log("RENDER INVOKED")
    return (
      <div className="App">
        <h1>All About This GitHub</h1>
        
      </div>
    );
  }
  

}


export default App;
