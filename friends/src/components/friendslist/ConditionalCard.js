import React from "react";
import AddFriend from "./addFriend";
import FriendForm from "./FriendForm";

const ConditionalCard = props => {
  if (props.adding) return <FriendForm addFriend={props.addFriend} handleChanges={props.handleChanges} />;
  else return <AddFriend add={props.add} />;
};

export default ConditionalCard;
