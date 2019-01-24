import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import FriendsList from "./components/friendslist/FriendsList";
import Header from "./components/header/Header";
class App extends Component {
  state = { friends: [], error: "" };
  componentDidMount() {
    Axios.get(`http://192.168.1.246:5000/friends`)
      .then(data => {
        this.setState({ friends: [...data.data] });
      })
      .catch(message => console.log(message));
  }

  removeFriend = (e, id) => {
    e.persist();
    console.log(id);
    Axios.delete(`http://192.168.1.246:5000/friends/${id}`);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <FriendsList
          friendslist={this.state.friends}
          removeFriend={this.removeFriend}
        />
      </div>
    );
  }
}

export default App;
