import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import FriendsList from "./components/friendslist/FriendsList";
import Header from "./components/header/Header";
class App extends Component {
  state = {
    friends: [],
    error: "",
    adding: 0,
    friend: [{ name: "test", age: 99, email: "test@test.com" }]
  };

  componentDidMount() {
    Axios.get(`https://testsite.akiradj.com/friends`)
      .then(data => {
        this.setState({ friends: [...data.data] });
      })
      .catch(message => console.log(message));
  }

  removeFriend = (e, id) => {
    e.persist();
    console.log(id);
    Axios.delete(`https://testsite.akiradj.com/friends/${id}`).then(data => {
      this.setState({ friends: [...data.data] }).catch(err => {
        console.log(err);
      });
    });
  };

  add = () => {
    this.setState({ adding: 1 });
  };

  addFriend = e => {
    e.preventDefault();
    console.log("done");
    Axios.post(`https://testsite.akiradj.com/friends`, this.state.friend)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <FriendsList
          addFriend={this.addFriend}
          friendslist={this.state.friends}
          removeFriend={this.removeFriend}
          adding={this.state.adding}
          add={this.add}
        />
      </div>
    );
  }
}

export default App;
