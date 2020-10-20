import React, { Component } from 'react';
import axios from 'axios';
import Text from './RandomCard';
import Buttons from './RandomButton';

class MovieGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster_path: '',
      id: null,
    };
    this.newMovie = this.newMovie.bind(this);
  }

  componentDidMount() {
    this.newMovie();
  }

  newMovie() {
    const filesize = 356;
    const pageNumber = (Math.floor(Math.random() * filesize));
    const movieNumber = (Math.floor(Math.random() * 20));
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=6839ebece0568da454bfdb445830df32&language=en-US&page=${pageNumber}`)
      .then(response => response.data)
      .then(data => this.setState({
        title: data.results[movieNumber].title,
        poster_path: data.results[movieNumber].poster_path,
        id: data.results[movieNumber].id
      }));
  }

  render() {
    const { title, poster_path, id } = this.state;
    return (
      <div id="quote-box" className="">
        <Buttons
          handlenewMovie={this.newMovie}
          movieName={title}
          moviePoster={poster_path}
          movieId={id}
        />
        <h3>You could Watch: </h3>
        <Text movieName={title} moviePoster={poster_path} movieId={id} />
      </div>
    );
  }
}

export default MovieGenerator;
