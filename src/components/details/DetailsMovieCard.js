import React from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';

function DetailsMovieCard(props) {
  const {
    poster_path,
    title,
    overview,
    release_date,
    status,
    vote_average,
    genres,
    directing,
    id,
    ajoutFav,
    ajoutWatchLater
  } = props;

  return (
    <div>
      <div className="container detailcontainer">
        <div className="row">
          <div className="col ml-5">
            <h2>{title}</h2>
          </div>
        </div>
      </div>
      <div className="detailcard card">
        <div className="row no-gutters m-3">
          <div className="col-md-4 col-lg-6">
            {!poster_path ? (
              <img
                src={`https://via.placeholder.com/514x771?text=${title}`}
                className="card-img my-card-img"
                alt="Poster"
              />
            )
              : (
                <img
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`}
                  className="card-img my-card-img"
                  alt="Poster"
                />
              )
            }
          </div>
          <div className="col-md-8 col-lg-6 px-2">
            <div className="card-body my-card-body p-0 pl-lg-3 d-flex flex-column">
              <p className="blush">
                Genres:
                {' '}
                {genres.map((genre, i) => (
                  <span className="my-genre p-2 white" key={i}>{genre.name}</span>
                ))}
              </p>
              <p className="blush">
                Directed by:
                {' '}
                {!directing ? <span className="font-weight-bold white">Unknown</span>
                  : <span className="font-weight-bold white">{directing.name}</span> }
              </p>
              <p className="blush">
                Status :
                {' '}
                <span className="font-weight-bold white">{status}</span>
              </p>

              <p className="card-text blush">

                Release date:
                {' '}
                <span className="font-weight-bold white">{release_date}</span>
              </p>
              <p className="card-text py-4 pb-1 my-overview white">{overview}</p>
              <div className="my-3 mt-auto blush">
                Vote:
                {' '}
                <span className="font-weight-bold white">{vote_average}</span>
                <div>
                  <StarRatingComponent
                    name="rate2"
                    editing={false}
                    renderStarIcon={() => <span>&#9733;</span>}
                    starCount={10}
                    value={vote_average}
                  />
                </div>
              </div>
              <button type="button" onClick={() => ajoutFav(id)} className="btn buttonfont my-btn btn-block">
                <span className="white">Add To My Favorites</span>
              </button>
              <button type="button" onClick={() => ajoutWatchLater(id)} className="btn buttonfont my-btn btn-block mb-2">
                <span className="white">Add To watch Later</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsMovieCard;

DetailsMovieCard.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  status: PropTypes.string,
  vote_average: PropTypes.number,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  ),
  directing: PropTypes.shape({
    credit_id: PropTypes.string,
    department: PropTypes.string,
    gendere: PropTypes.number,
    id: PropTypes.number,
    job: PropTypes.string,
    name: PropTypes.string,
    profile_path: PropTypes.string,
  }),
  id: PropTypes.number,
  ajoutFav: PropTypes.func,
  ajoutWatchLater: PropTypes.func
};

DetailsMovieCard.defaultProps = {
  poster_path: '',
  title: '',
  overview: '',
  release_date: '',
  status: '',
  vote_average: null,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: ''
    }),
  ),
  directing: PropTypes.shape({
    credit_id: '',
    department: '',
    job: '',
    name: '',
    profile_path: '',
  }),
  id: null,
  ajoutFav: () => {},
  ajoutWatchLater: () => {}
};
