import React from 'react';
import PropTypes from 'prop-types';

function DisplayedMessage(props) {
  const {
    name,
    email,
    comment,
    id,
    isNew,
    deleteMessage
  } = props;

  if (name) {
    return (
      <div className="card my-4">
        <div className="card-header">
          {isNew === true ? (
            <input
              style={{ float: 'right' }}
              type="button"
              value="X"
              onClick={deleteMessage}
              id={id}
            />
          ) : null}
          <h4 className="mt-2">{name}</h4>
          <h6 className="text-secondary">{email}</h6>
        </div>
        <div>
          <div className="card-body text-dark">
            <div>{comment}</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div />
  );
}

export default DisplayedMessage;

DisplayedMessage.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isNew: PropTypes.bool.isRequired,
  deleteMessage: PropTypes.func.isRequired
};
