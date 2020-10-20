import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import DetailsMovieCard from './details/DetailsMovieCard';
import CastingCard from './details/Casting';
import AddComment from './details/AddComment';
import './details/DetailsMovieCard.css';
import Player from './details/Youtubeplayer';
import Reviews from './details/Reviews';


class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      reviews: [],
      casting: [],
      genres: [],
      directing: {},
      trailer: {},
    };
    this.getMovieDetail = this.getMovieDetail.bind(this);
    this.getMovieReview = this.getMovieReview.bind(this);
    this.getMovieCast = this.getMovieCast.bind(this);
    this.getTrailer = this.getTrailer.bind(this);
  }

  componentDidMount() {
    this.getMovieCast();
    this.getMovieDetail();
    this.getMovieReview();
    this.getTrailer();
  }

  getMovieDetail() {
    const { match } = this.props;
    const movieid = match.params.id;
    const movieurl = `https://api.themoviedb.org/3/movie/${movieid}?api_key=6839ebece0568da454bfdb445830df32&language=en-US`;
    axios.get(movieurl)
      .then(response => response.data)
      .then(data => this.setState({
        movie: data, genres: data.genres
      }));
  }

  getMovieReview() {
    const { match } = this.props;
    const movieid = match.params.id;
    const reviewurl = `https://api.themoviedb.org/3/movie/${movieid}/reviews?api_key=6839ebece0568da454bfdb445830df32`;
    axios.get(reviewurl)
      .then(response => response.data)
      .then(data => this.setState({
        reviews: data.results.slice(0, 4)
      }));
  }

  getMovieCast() {
    const { match } = this.props;
    const movieid = match.params.id;
    const casturl = `https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=6839ebece0568da454bfdb445830df32`;
    axios.get(casturl)
      .then(response => response.data)
      .then(data => this.setState({
        casting: data.cast.slice(0, 5),
        directing: data.crew.find(person => person.job === 'Director')
      }));
  }

  getTrailer() {
    const { match } = this.props;
    const movieid = match.params.id;
    const trailerurl = `https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=6839ebece0568da454bfdb445830df32&language=en-US`;
    axios.get(trailerurl)
      .then(response => response.data)
      .then(data => this.setState({
        trailer: data.results.find(video => video.type === 'Trailer' || 'Clip' || 'Teaser')
      }));
  }

  empty() {
    const { review, reviews } = this.state;
    if (review) {
      return ('Sorry, No Reviews Yet');
    }
    return <Reviews reviews={reviews} />;
  }


  render() {
    const { ajoutFav, ajoutWatchLater } = this.props;
    const {
      movie, directing, reviews, casting, trailer, genres
    } = this.state;

    return (
      <div className="container">
        <DetailsMovieCard
          {...movie}
          ajoutFav={ajoutFav}
          ajoutWatchLater={ajoutWatchLater}
          genres={genres}
          directing={directing}
        />
        <h2>Reviews</h2>
        <Reviews reviews={reviews} />
        <h2>Cast</h2>
        <CastingCard casting={casting} />
        <h2>Trailer</h2>
        <Player trailer={trailer} />
        <AddComment movieId={movie.id} />
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  ajoutFav: PropTypes.func.isRequired,
  ajoutWatchLater: PropTypes.func.isRequired,
  trailer: PropTypes.func
};

MovieDetails.defaultProps = {
  trailer() {},
};
