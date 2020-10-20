import React from 'react';
import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function UpcomingCard(props) {
  const { movie } = props;
  return (
    <div className="container">
      {movie.map(({ poster_path, id }) => (
        <Link to={`/movie-details/${id}`} key={id}>
          <Card className="moviecard">
            <CardImg className="cardimage" top width="100%" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`} alt="Card " />
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default UpcomingCard;

UpcomingCard.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired
};
