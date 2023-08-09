// import React from 'react';
// import { useSelector } from 'react-redux';
// import MovieCard from './MovieCard';

// const Favorites = () => {
//   const favoriteMovies = useSelector(state => state.favorites);

//   return (
//     <div>
//       <h2>Favorites</h2>
//       {favoriteMovies.map((movie) => (
//         <MovieCard key={movie.id} movie={movie} />
//       ))}
//     </div>
//   );
// };

// export default Favorites;

import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const Favorites = () => {
  const favoriteMovies = useSelector(state => state.favorites);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Favorites</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favoriteMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
