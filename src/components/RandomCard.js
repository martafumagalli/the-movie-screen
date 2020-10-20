import React from 'react';
import {
  Card, CardImg, CardTitle, CardBody
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function Text(props) {
  const { movieId, moviePoster, movieName } = props;
  return (
    <div className="container randomcardcontainer">
      <Card className="randommoviecard mx-auto">
        <Link to={`/movie-details/${movieId}`}>
          <CardImg className="cardimage" top width="100%" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${moviePoster}`} alt="Card " />
        </Link>
        <CardBody>
          <CardTitle className="blush randommoviename">{movieName}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
}

export default Text;

Text.propTypes = {
  movieId: PropTypes.number,
  moviePoster: PropTypes.string.isRequired,
  movieName: PropTypes.string.isRequired
};

Text.defaultProps = {
  movieId: null,
};
