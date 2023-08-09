// import React from 'react';
// import { useSelector } from 'react-redux'; // Import useSelector from react-redux
// import { useParams } from 'react-router-dom';

// const MovieDetail = () => {
//   const { id } = useParams();
//   console.log(id)

//   const movies = useSelector(state => state.movies);
//   console.log(movies)
//   const movie=movies.filter((e,i)=>{
//     return e.id==id
//   })
//   console.log(movie)
//   // Handle case where movie is not found
//   if (!movie) {
//     return <div>Movie not found</div>;
//   }

//   return (
//     <div>
//      <img src={`https://image.tmdb.org/t/p/original/${movie[0].poster_path}`} alt={movie.name} />
//       <h2>{movie[0].title}</h2>
//       <p>Release Date: {movie[0].release_date}</p>
//       <p>Genre: {movie[0].genre_ids[0]}</p>
//       <p>{movie[0].overview}</p>
//       {/* Display more movie details */}
//     </div>
//   );
// };

// export default MovieDetail;

import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const movies = useSelector((state) => state.movies);
  console.log(movies);
  const movie = movies.filter((e) => e.id == id);
  console.log(movie);
  // Handle case where movie is not found
  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie[0].poster_path}`}
              alt={movie.title}
              className="w-full rounded-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-2xl font-semibold mb-4">{movie[0].title}</h2>
            <p className="text-gray-600 mb-2">
              Release Date: {movie[0].release_date}
            </p>
            <p className="text-gray-600 mb-4">Genre: {movie[0].genre_ids[0]}</p>
            <p className="text-gray-700"> Descreption: {movie[0].overview}</p>
            <button
              onClick={() => alert("Movie is Playing")}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
