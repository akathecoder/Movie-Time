import React from "react";
import "../styles/MovieCard.css";

function MovieCard(props) {
  return (
    <div className="card">
      <div
        href={props.link}
        className="poster-wrapper"
        title={props.title}
      >
        <a
          href={props.link}
          className="poster-wrapper"
          title={props.title}
        >
          <img
            src={props.img}
            alt={props.title}
            className="poster"
          />
        </a>
      </div>

      <a
        className="title"
        href={props.link}
        title={props.title}
      >
        {props.title}
      </a>

      <h6 className="year">{props.year}</h6>
    </div>
  );
}

export default MovieCard;
