import React from 'react';
import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PortfolioCard = (props) => {
  const { movie } = props;
  return (
    <div>
      {
        movie.map(({ title, poster_path, id }) => (
          <Link to={`/movie-details/${id}`} key={id}>
            <Card key={id} className="moviecard">
              <CardImg className="cardimage" top width="100%" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`} alt={title} />
            </Card>
          </Link>
        ))
      }
    </div>
  );
};

export default PortfolioCard;

PortfolioCard.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired
};
