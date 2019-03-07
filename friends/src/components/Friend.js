import React from "react";

const Friend = props => {
  return (
    <div className="friend">
      <li>
        <b>Name: </b>
        {props.friend.name}
      </li>
      <li>
        <b>id: </b>
        {props.friend.id}
      </li>
      <li>
        <b>Age: </b>
        {props.friend.age}
      </li>
      <li>
        <b>Email: </b>
        {props.friend.email}
      </li>
    </div>
  );
};

export default Friend;
