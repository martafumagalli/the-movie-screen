import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import './components.css';
import PortfolioCard from './PortfolioCard';

function cutting(arr) {
  const size = 1;
  const finalarr = [];
  for (let i = 0; i < 12; i += size) {
    finalarr.push(arr.slice(i, i + size));
  }
  return finalarr;
}

class Trends extends Component {
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
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6839ebece0568da454bfdb445830df32&language=en-US&page=1')
      .then(response => response.data)
      .then(data => this.setState({ movies: data.results }));
  }

  render() {
    const { movies } = this.state;
    const cut = cutting(movies);

    return (
      <Container className="trendsportfolio">
        <Row className="p-2">
          {cut.map((movie, index) => (
            <Col key={index} lg="3" md="4" sm="6" xs="6" className="trendscol">
              <PortfolioCard movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Trends;
