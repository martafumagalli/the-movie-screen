import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import ActorCards from './ActorCards';
import './components.css';

function slicing(arr) {
  const size = 1;
  const finalarr = [];
  for (let i = 0; i < 4; i += size) {
    finalarr.push(arr.slice(i, i + size));
  }
  return finalarr;
}

export default class ActorDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actors: []
    };
    this.getActors = this.getActors.bind(this);
  }

  componentDidMount() {
    this.getActors();
  }

  getActors() {
    axios.get('https://api.themoviedb.org/3/person/popular?api_key=6839ebece0568da454bfdb445830df32&language=en-US&page=1')
      .then(response => response.data)
      .then(data => this.setState({ actors: data.results }));
  }

  render() {
    const { actors } = this.state;
    const slide = slicing(actors);

    return (
      <div className="container actordeckcontainer">
        <Row className="p-2">
          {slide.map((actor, i) => (
            <Col lg="3" md="4" sm="6" xs="6" key={i}>
              <ActorCards actor={actor} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
