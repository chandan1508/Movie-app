import React, { useEffect, useState } from "react";
import Card from "./Card";

const Moviesapp = () => {
  const [Data, setData] = useState(null);

  const getData = async () => {
    const response = await fetch(
      `https://dummyapi.online/api/movies`
    );
    const jsonData = await response.json();
   
    setData(jsonData);
  };

  useEffect(() =>{
    getData();
  }, [])

  return (
    <div>
      <nav>
        <div>
          <h1>Movies</h1>
        </div>
      </nav>

      <div>
        <p className="head">Stay Update with new Movies</p>
      </div>

      <div>{Data ? <Card data={Data} /> : null}</div>
    </div>
  );
};

export default Moviesapp;
