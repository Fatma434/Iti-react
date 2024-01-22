import React from "react";

export default function Usr(e) {
  return (
    <>
      <div>Name : {e.name}</div>
      <div>Email : {e.email}</div>
      <div>Phone : {e.phone}</div>
      <hr />
    </>
  );
}
