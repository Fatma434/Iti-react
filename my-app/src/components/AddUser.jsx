import React, { useState } from "react";
import sayed from "./style/AddUser.module.css";
export default function AddUser({ addUser }) {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "e@aa.com",
    phone: "01010987",
  });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(event.target[0].value);
  //   console.log(event.target[1].value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(user);
  };

  const handlechange = (event) => {
    const { name, value } = event.target;
    setUser((oldState) => ({ ...oldState, [name]: value }));
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          Name :{" "}
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handlechange}
          />
          
          age :{" "}
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handlechange}
          />
          
          <input className={sayed.btn} type="submit" />
        </form>
      </div>
    </>
  );
}