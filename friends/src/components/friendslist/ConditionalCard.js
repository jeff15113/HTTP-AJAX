import React from "react";
import AddFriend from "./addFriend";
import FriendForm from "./FriendForm";

const ConditionalCard = props => {
  if (props.adding) return <FriendForm />;
  else return <AddFriend add={props.add} addFriend={props.addFriend} />;
};

export default ConditionalCard;
