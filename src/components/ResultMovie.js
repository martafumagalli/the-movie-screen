import React from 'react';
import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function ResultMovie(props) {
  const { movie } = props;
  return (
    <Link to={`/movie-details/${movie.id}`}>
      <Card key={movie.id} className="moviecard">
        {!movie.poster_path
          ? <CardImg className="cardimage" top width="100%" src={`https://via.placeholder.com/249x373?text=${movie.title}`} alt={movie.title} />
          : <CardImg className="cardimage" top width="100%" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt={movie.title} />
      }
      </Card>
    </Link>
  );
}

export default ResultMovie;

ResultMovie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired
  }).isRequired
};
