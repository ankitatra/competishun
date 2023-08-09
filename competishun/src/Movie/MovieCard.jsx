import React from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorites, addToWatchlist } from '../Redux/action';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(addToFavorites(movie));
  };

  const handleWatchlist = () => {
    dispatch(addToWatchlist(movie));
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
        <p className="text-gray-600 mb-2">{movie.genre_ids[0]}</p>
        <button
          onClick={handleFavorite}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
        >
          Add to Favorites
        </button>
        <button
          onClick={handleWatchlist}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
        >
          Add to Watchlist
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
