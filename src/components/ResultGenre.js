import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import GenreCard from './GenreCard';

class ResultGenre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      currentPage: '',
    };
    this.getInfo = this.getInfo.bind(this);
    this.btnClick = this.btnClick.bind(this);
  }

  componentDidMount() {
    this.getInfo();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.genre !== this.props.match.params.genre) {
      this.getInfo();
    }
  }

  getInfo(page) {
    const genre = this.props.match.params.genre;
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=6839ebece0568da454bfdb445830df32&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre}`)
      .then(response => response.data)
      .then(data => this.setState({ results: data.results, currentPage: data.page }));
  }

  btnClick(event) {
    const page = event.target.value;
    this.getInfo(page);
  }

  render() {
    const { results, currentPage } = this.state;
    return (
      <Container className="trendsportfolio">
        <Row className="p-2">
          {results.map((movie, index) => (
            <Col lg="3" md="4" sm="6" xs="6" className="trendscol" key={movie.id}>
              <GenreCard {...index} {...movie} />
            </Col>
          ))}
        </Row>
        {currentPage}
      </Container>
    );
  }
}

export default ResultGenre;
