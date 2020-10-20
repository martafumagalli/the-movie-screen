import React from 'react';
import PropTypes from 'prop-types';
import { ModalHeader, ModalBody } from 'reactstrap';
import './DetailsMovieCard.css';

function ActorDetails(props) {
  const {
    name,
    birthday,
    place_of_birth,
    biography,
    profile_path,
    handleClick
  } = props;

  if (!name || !birthday || !place_of_birth || !biography || !profile_path) {
    return (
      <div>
        <ModalHeader>{name}</ModalHeader>
        <ModalBody className="m-2" onClick={handleClick}>
          <div>No information available</div>
        </ModalBody>
      </div>
    );
  }
  return (
    <div>
      <ModalHeader>{name}</ModalHeader>
      <ModalBody className="m-2" onClick={handleClick}>
        <img
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${profile_path}`}
          className="my-actor-profile-img mr-4 mb-4"
          alt=""
        />
        <p>
          Birthday:
          {' '}
          <span className="font-weight-bold">{birthday}</span>
        </p>
        <p className="pb-2">
          Place of birth:
          {' '}
          <span className="font-weight-bold">{place_of_birth}</span>
        </p>
        <div>{biography}</div>
      </ModalBody>
    </div>
  );
}

export default ActorDetails;

ActorDetails.propTypes = {
  name: PropTypes.string,
  birthday: PropTypes.string,
  place_of_birth: PropTypes.string,
  biography: PropTypes.string,
  profile_path: PropTypes.string,
  handleClick: PropTypes.func
};

ActorDetails.defaultProps = {
  name: '',
  birthday: '',
  place_of_birth: '',
  biography: '',
  profile_path: '',
  handleClick: () => {},
};
