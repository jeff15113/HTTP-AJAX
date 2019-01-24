import React from "react";
import Friend from "./friend";
const FriendsList = props => {
  return (
    <div className="friendslist">
      {props.friendslist.map(data => (
        <Friend
          key={data.id}
          id={data.id}
          friend={data}
          removeFriend={props.removeFriend}
        />
      ))}
    </div>
  );
};

export default FriendsList;
