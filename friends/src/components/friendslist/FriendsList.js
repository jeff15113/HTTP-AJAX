import React from "react";
import Friend from "./friend";
import ConditionalCard from "./ConditionalCard";
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
      <ConditionalCard
        add={props.add}
        adding={props.adding}
        addFriend={props.addFriend}
      />
    </div>
  );
};

export default FriendsList;
