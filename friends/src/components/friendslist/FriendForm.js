import React from "react";

const FriendForm = props => {
  return (
    <div className="friendcard">
      <form onSubmit={props.addFriend} method="post">
        <h4 className="add">
          <input onChange={props.handleChanges} name="name" type="text" placeholder="name" />
        </h4>
        <input onChange={props.handleChanges} name="age" type="text" placeholder="age" />
        <input onChange={props.handleChanges} name="email" type="text" placeholder="email" />
        <button type="submit" />
      </form>
    </div>
  );
};

export default FriendForm;
