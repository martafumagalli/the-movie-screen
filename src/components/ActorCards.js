import React, { Component } from 'react';
import {
  Card, CardImg, CardTitle, CardBody, Modal
} from 'reactstrap';
import './components.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import ActorDetails from './details/ActorDetails';

class ActorCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  fetchData(id) {
    const actorUrl = `https://api.themoviedb.org/3/person/${id}?api_key=6839ebece0568da454bfdb445830df32&language=en-US`;
    axios
      .get(actorUrl)
      .then(response => response.data)
      .then(data => this.setState({
        actorDet: data
      }));
  }

  toggle(id) {
    this.fetchData(id);
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const { actorDet, modal } = this.state;
    const { actor } = this.props;
    return (
      <div>
        <div>
          {actor.map(({ name, profile_path, id }) => (
            <Card key={id} className="actorcard">
              <CardImg className="cardimage" top width="100%" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${profile_path}`} alt="Card " onClick={() => this.toggle(id)} />
              <CardBody>
                <CardTitle className="actorname">{name}</CardTitle>
              </CardBody>
            </Card>
          ))}
        </div>
        <Modal
          isOpen={modal}
          toggle={this.toggle}
        >
          <ActorDetails {...actorDet} />
        </Modal>
      </div>
    );
  }
}

export default ActorCards;

ActorCards.propTypes = {
  actor: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired
};
