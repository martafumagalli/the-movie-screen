import React from 'react';
import {
  Card, CardImg, Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FavoriteList = ({ movies, ajoutFav }) => (
  <div className="container">
    <h3>Your Favorites Movies</h3>
    <Row>
      {
        movies.map(
          movie => (
            <Col lg="3" md="4" sm="6" xs="6" className="trendscol mb-5" key={movie.id}>
              <Card className="mb-5 mt-5 card-essai">
                <Link to={`/movie-details/${movie.id}`}>
                  <CardImg width="100px" top src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt="Card image cap" />
                </Link>
                <button type="button" onClick={() => ajoutFav(movie.id)} className="btn my-btn btn-block font">
                  Delete From My Favorites
                </button>
              </Card>
            </Col>
          )
        )
      }
    </Row>
  </div>
);

export default FavoriteList;

FavoriteList.propTypes = {
  ajoutFav: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired
};
