import React from 'react';
import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function GenreCard(props) {
  const { id, title, poster_path } = props;
  return (
    <Link to={`/movie-details/${id}`}>
      <Card key={id} className="moviecard">
        {!poster_path
          ? <CardImg className="cardimage" top width="100%" src={`https://via.placeholder.com/249x373?text=${title}`} alt={title} />
          : <CardImg className="cardimage" top width="100%" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`} alt={title} />
        }
      </Card>
    </Link>
  );
}

export default GenreCard;

GenreCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired
};
