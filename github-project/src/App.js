import React from 'react';
import axios from 'axios';

import './App.css';
import UserCard from './components/UserCard.js';
import FollowersList from './components/FollowersList.js';



class App extends React.Component {

  constructor() {
    console.log("CONSTRUCTOR INVOKED");
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount(){
    this.fetchUser();
    this.fetchFollowers();
  }

  fetchUser = () => {
    axios.get(`https://api.github.com/users/tfaramar`)
      .then(res => {
        this.setState({
          user: res.data
        })
        console.log(this.state.user);
      })
      .catch(error => console.log(error))
  }

  fetchFollowers = () => {
    axios.get(`https://api.github.com/users/tfaramar/followers`)
      .then(res => {
        this.setState({
          followers: res.data
        })
        console.log(this.state.followers);
      })

  }

  render(){
    console.log("RENDER INVOKED")
    return (
      <div className="App">
        <UserCard user={this.state.user} />
        <FollowersList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
