import React from "react";
import  "./style/User.css";
export default function User({ phone, email, name, id, incrementAge, age }) {
  const handleClick = (e) => {
    // console.log(e);
    incrementAge(id);
  };

  return (
    <>
      <hr />
      <div>USER ID : {id}</div>
      <div>USER Name :{name}</div>
      <div>USER Phone :{email}</div>
      <div>USER Email : {phone}</div>
      <div>USER Age : {age}</div>
      <button className="btn" onClick={handleClick}>
        +
      </button>
    </>
  );
}

User.defaultProps = {
  age: 17,
};


