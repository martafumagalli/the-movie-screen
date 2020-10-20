import React from 'react';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';

function Player(props) {
  function onReady(event) {
    event.target.pauseVideo();
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }
  };

  const { trailer } = props;

  if (!trailer) {
    return (<h4>Sorry, No Trailer Yet</h4>);
  }
  return (
    <YouTube
      className="videoplayer"
      videoId={trailer.key}
      opts={opts}
      onReady={onReady}
    />
  );
}

export default Player;

Player.propTypes = {
  trailer: PropTypes.shape({
    id: PropTypes.string,
    iso_639_1: PropTypes.string,
    iso_3166_1: PropTypes.string,
    key: PropTypes.string,
    name: PropTypes.string,
    site: PropTypes.string,
    size: PropTypes.number,
    type: PropTypes.string,
  }),
};

Player.defaultProps = {
  trailer: PropTypes.shape({
    id: '',
    iso_639_1: '',
    iso_3166_1: '',
    key: '',
    name: '',
    site: '',
    size: '',
    type: '',
  }),
};
