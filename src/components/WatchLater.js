import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import WatchLaterList from './WatchLaterList';

class WatchLater extends Component {
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
    const { watchL } = this.props;
    const requests = watchL.map(favorite => axios
      .get(`https://api.themoviedb.org/3/movie/${favorite}?api_key=6839ebece0568da454bfdb445830df32&language=en-US`)
      .then(response => response.data));
    Promise.all(requests)
      .then((movies) => this.setState({ movies }));
  }

  render() {
    const { ajoutWatchLater, watchL } = this.props;
    const { movies } = this.state;
    return (
      <div>
        <WatchLaterList
          ajoutWatchLater={ajoutWatchLater}
          movies={movies.filter(movie => watchL.includes(movie.id))}
        />
      </div>
    );
  }
}

export default WatchLater;

WatchLater.propTypes = {
  ajoutWatchLater: PropTypes.func.isRequired,
  watchL: PropTypes.arrayOf(PropTypes.number).isRequired
};
