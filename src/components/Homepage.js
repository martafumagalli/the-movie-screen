import React from 'react';
import Trends from './Portfolio';
import TheaterSlider from './TheaterSlider';
import UpcomingSlider from './UpcomingSlider';
import ActorDeck from './ActorDeck';
import './details/DetailsMovieCard.css';

function Homepage() {
  return (
    <div className="Homepage">
      <h2>In Theaters</h2>
      <TheaterSlider />
      <h2>Trends</h2>
      <Trends />
      <h2>Upcoming Movies</h2>
      <UpcomingSlider />
      <h2>Popular Actors</h2>
      <ActorDeck />
    </div>
  );
}

export default Homepage;
