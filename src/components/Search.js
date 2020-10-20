import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import ResultMovie from './ResultMovie';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
    this.getInfo = this.getInfo.bind(this);
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
  }

  getInfo(searchTerm) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6839ebece0568da454bfdb445830df32&language=en-US&query=${searchTerm}&page=1&include_adult=true`)
      .then(response => response.data)
      .then(data => this.setState({ results: data.results.slice(0, 50) }));
  }

  searchChangeHandler(event) {
    const searchTerm = event.target.value;
    this.getInfo(searchTerm);
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <h3>What Are You Looking For?</h3>
          <input
            className="searchbar"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id="title"
            name="title"
            onChange={this.searchChangeHandler}
          />
        </form>
        <div className="container">
          <Row className="p-2">
            {results.map((movie) => (
              <Col lg="3" md="4" sm="6" xs="6" className="trendscol" key={movie.id}>
                <ResultMovie key={movie.id} movie={movie} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

export default Search;
