import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import FavoriteList from './FavoriteList';

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
    this.getMovies = this.getMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    const { favorites } = this.props;
    const requests = favorites.map(favorite => axios
      .get(`https://api.themoviedb.org/3/movie/${favorite}?api_key=6839ebece0568da454bfdb445830df32&language=en-US`)
      .then(response => response.data));
    Promise.all(requests)
      .then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    const { ajoutFav, favorites } = this.props;
    return (
      <div>
        <FavoriteList
          ajoutFav={ajoutFav}
          movies={movies.filter(movie => favorites.includes(movie.id))}
        />
      </div>
    );
  }
}

export default Favorite;

Favorite.propTypes = {
  ajoutFav: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.number).isRequired
};
