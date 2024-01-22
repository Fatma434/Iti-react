import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "./User";
import AddUser from "./AddUser";
import { v4 as uuid } from "uuid";
import { CircularProgress } from "@mui/material";
import "./style/Users.css";
export default function Users() {
  const [users, setUsers] = useState(null);
  //component did mount
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const incrementAge = (id) => {
    setUsers((oldState) => {
      return oldState.map((user) => {
        return user.id === id
          ? { ...user, age: !user.age ? 18 : +user.age + 1 }
          : user;
      });
    });
  };

  const addUser = (user) => {
    setUsers((oldState) => [{ ...user, id: uuid() }, ...oldState]);
  };

  return (
    <>
      <AddUser addUser={addUser} />
      {!users ? (
        <CircularProgress />
      ) : (
        users?.map((e) => {
          return (
            <>
              <User key={e.id} {...e} incrementAge={incrementAge} />
            </>
          );
        })
      )}
    </>
  );
}
