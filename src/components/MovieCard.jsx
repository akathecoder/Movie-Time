import React from "react";
import "../styles/MovieCard.css";

function MovieCard(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.title} className="poster" />
      <h3 className="title">{props.title}</h3>
      <h6 className="year">{props.year}</h6>
    </div>
  );
}

export default MovieCard;
