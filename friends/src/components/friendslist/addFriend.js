import React from "react";

const addFriend = props => {
  return (
    <div onClick={props.add} className="friendcard">
      <h4 className="add">Add Friend</h4>
      <div className="plus">&#43;</div>
    </div>
  );
};

export default addFriend;
