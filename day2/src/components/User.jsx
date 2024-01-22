import React from "react";

export default function User(props) {
  return (
    <div>
      <div>ID : {props.id}</div>
      <div>User name : {props.nm}</div>
    </div>
  );
}
