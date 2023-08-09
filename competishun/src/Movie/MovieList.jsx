// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchMovies } from '../Redux/action';
// import MovieCard from './MovieCard';
// import { StickyNavbar } from './MovieHome';

// const MovieList = () => {
//   const movies = useSelector(state => state.movies);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchMovies());
//   }, [dispatch]);

//   return (
   
//     <div>
//       <StickyNavbar/>
//       <h2>Movies</h2>
//       {movies.map((movie) => (
//         <MovieCard key={movie.id} movie={movie} />
//       ))}
//     </div>
//   );
// };

// export default MovieList;


import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../Redux/action';
import MovieCard from './MovieCard';
import { StickyNavbar } from './MovieHome';

const MovieList = () => {
  const movies = useSelector(state => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <StickyNavbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

