import React from "react";

const addFriend = props => {
  return (
    <div className="friendcard">
      <form onSubmit={props.addFriend} method="post">
        <h4 className="add">
          <input type="text" placeholder="name" />
        </h4>
        <input type="text" placeholder="age" />
        <input type="text" placeholder="email" />
        <button type="submit" />
      </form>
    </div>
  );
};

export default addFriend;
