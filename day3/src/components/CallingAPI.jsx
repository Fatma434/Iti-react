import axios from "axios";
import React, { useEffect, useState } from "react";
import Usr from "./Usr";
export default function CallingAPI() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        console.log(data);
        setData(data);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // if (loading) {
  //   return <h1>Loadinnnnng...........</h1>;
  // }

  return (
    <>
      <h1>Data From API</h1>
      <pre>
        {loading ? (
          <h1>Loadinnnnng...........</h1>
        ) : (
          data?.map((e) => {
            // console.log(e);
            return <Usr key={e.id} {...e} />;
          })
        )}
      </pre>
    </>
  );
}
