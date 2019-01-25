import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import FriendsList from "./components/friendslist/FriendsList";
import Header from "./components/header/Header";

const newFriend = {
  name: '',
  age: '',
  email: ''
}

class App extends Component {
  state = {
    friends: [],
    error: "",
    adding: 0,
    //friend: [{ name: "test", age: 99, email: "test@test.com" }]
    friend: newFriend
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
        this.setState({ friends: res.data, friend: newFriend, adding: 0 });
      })
      .catch(err => console.log(err));
  };

  handleChanges = e => {
    e.persist();
    this.setState(prevState => {
      return {
        friend: {
          ...prevState.friend,
          [e.target.name]: e.target.value
        }
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <FriendsList
          handleChanges={this.handleChanges}
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
