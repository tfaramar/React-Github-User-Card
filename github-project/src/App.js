import React from 'react';
import axios from 'axios';

import './App.css';



class App extends React.Component {

  constructor() {
    console.log("CONSTRUCTOR INVOKED");
    super();
    this.state = {
      user: {}
    };
  }

  componentDidMount(){
    this.fetchUser();
  }

  fetchUser = () => {
    axios.get(`https://api.github.com/users/tfaramar`)
    .then(res => {
      this.setState({
        user: res.data
      })
    })
    .catch(error => console.log(error))
  }

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
