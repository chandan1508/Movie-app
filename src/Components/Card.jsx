import React from "react";

const Card = ({ data }) => {
  console.log(data);

  return (

    <div className="cardContainer">
      {data.map((item) => {

        return (
          <div className="card" key={item.id}>
            <img src={`/${item.image}`}  />
            <div className="content">
              <a
                className="title"
                onClick={() => window.open(item.imdb_url, "_blank")}
                style={{ cursor: "pointer" }}
              >
                {item.movie}
              </a>
              <p>Rating: {item.rating}</p>
              <button onClick={() => window.open(item.imdb_url, "_blank")}>
                Know More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
