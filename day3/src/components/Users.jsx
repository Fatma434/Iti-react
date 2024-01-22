import React from "react";
import User from "./User";
import { v4 as uuid } from "uuid";
export default function Users() {
  const arr = [
    { id: uuid(), nm: "ahmed" },
    { id: uuid(), nm: "karem" },
    { id: uuid(), nm: "toqa" },
    { id: uuid(), nm: "fatma" },
    { id: uuid(), nm: "rana" },
    { id: uuid(), nm: "saif" },
  ];
  return (
    <>
      {arr.map((e) => {
        return <User key={e.id} id={e.id} nm={e.nm} />;
        // return <User key={e.id} {...e} />;
      })}
    </>
  );
}

//TODO app
