import React from 'react';
import PropTypes from 'prop-types';
import './MovieDetail.css';

function MovieDetail({ year, title, summary, poster, genres }) {
  return (
    <div className="movie-detail">
      <div className="movieDetail__image">
        <img src={poster} alt={title} title={title}></img>
      </div>
      <div className="movieDetail__data">
        <h3 className="movieDetail__title">{title}</h3>
        <h5 className="movieDetail__year">{year}</h5>
        <ul className="movieDetail__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default MovieDetail;
