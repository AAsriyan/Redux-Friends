import React from "react";
import Friend from "./Friend";

const FriendsList = props => {
  return (
    <div>
      <ul className="friend-card">
        {props.friends.map(friend => {
          return <Friend key={friend.id} friend={friend} />;
        })}
      </ul>
    </div>
  );
};

export default FriendsList;
