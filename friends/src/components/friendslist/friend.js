import React from "react";

const friend = props => {
  return (
    <div className="friendcard">
      <div
        onClick={e => props.removeFriend(e, props.id)}
        className="closebtn"
      />
      <h4>{props.friend.name}</h4>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
    </div>
  );
};

export default friend;
