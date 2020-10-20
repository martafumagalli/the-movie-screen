import React from 'react';
import {
  Card, CardImg, Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function WatchLaterList(props) {
  const { movies, ajoutWatchLater } = props;
  return (
    <div className="container">
      <h3>Your Movies to Watch Later</h3>
      <Row>
        {movies.map(
          movie => (
            <Col lg="3" md="4" sm="6" xs="6" key={movie.id}>
              <Card className="mb-5 mt-3 card-essai">
                <Link to={`/movie-details/${movie.id}`}>
                  <CardImg width="100px" top src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt="Card image cap" />
                </Link>
                <button type="button" onClick={() => ajoutWatchLater(movie.id)} className="btn my-btn btn-block font">
                  Delete From Watch Later
                </button>
              </Card>
            </Col>
          )
        )}
      </Row>
    </div>
  );
}

export default WatchLaterList;

WatchLaterList.propTypes = {
  ajoutWatchLater: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired
    })
  ).isRequired
};
