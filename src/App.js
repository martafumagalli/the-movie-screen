import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Favorite from './components/Favorite';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Search from './components/Search';
import WatchLater from './components/WatchLater';
import RandomPage from './components/RandomPage';
import MovieDetails from './components/MovieDetails';
import Homepage from './components/Homepage';
import ResultGenre from './components/ResultGenre';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    const watchL = JSON.parse(localStorage.getItem('watchLater'));
    const favorites = JSON.parse(localStorage.getItem('favoris'));
    this.state = {
      watchL: watchL || [],
      favorites: favorites || []
    };

    this.ajoutFav = this.ajoutFav.bind(this);
    this.ajoutWatchLater = this.ajoutWatchLater.bind(this);
  }

  ajoutWatchLater(id) {
    const { watchL } = this.state;
    const newWatchL = [...watchL];
    if (watchL.indexOf(id) >= 0) {
      newWatchL.splice(watchL.indexOf(id), 1);
      this.setState({ watchL: newWatchL }, () => localStorage.setItem('watchLater', JSON.stringify(watchL)));
    } else {
      newWatchL.push(id);
      this.setState({ watchL: newWatchL }, () => localStorage.setItem('watchLater', JSON.stringify(watchL)));
    }
  }

  ajoutFav(id) {
    const { favorites } = this.state;
    const newFavorites = [...favorites];
    if (favorites.indexOf(id) >= 0) {
      newFavorites.splice(favorites.indexOf(id), 1);
      this.setState({ favorites: newFavorites }, () => localStorage.setItem('favoris', JSON.stringify(favorites)));
    } else {
      newFavorites.push(id);
      this.setState({ favorites: newFavorites }, () => localStorage.setItem('favoris', JSON.stringify(favorites)));
    }
  }

  render() {
    const { favorites, watchL } = this.state;
    return (

      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Route path="/" exact component={Homepage} />
        <Route path="/genre/:genre" component={ResultGenre} />
        <Route path="/search" component={Search} />
        <Route path="/movie-details/:id" render={(props) => <MovieDetails {...props} ajoutFav={this.ajoutFav} ajoutWatchLater={this.ajoutWatchLater} />} />
        <Route path="/favorites" render={(props) => <Favorite {...props} favorites={favorites} ajoutFav={this.ajoutFav} />} />
        <Route path="/watch-later" render={(props) => <WatchLater {...props} watchL={watchL} ajoutWatchLater={this.ajoutWatchLater} />} />
        <Route path="/i-feel-lucky" component={RandomPage} />
        <footer className="foot">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
