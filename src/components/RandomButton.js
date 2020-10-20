import React from 'react';
import PropTypes from 'prop-types';

function Buttons(props) {
  const { handlenewMovie } = props;
  return (
    <div className="buttons">
      <button type="button" id="new-movie" className="btn btn-danger" onClick={handlenewMovie}>I Feel Lucky</button>
    </div>
  );
}

export default Buttons;

Buttons.propTypes = {
  handlenewMovie: PropTypes.func.isRequired
};
