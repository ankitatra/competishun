export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const addToFavorites = (movie) => ({
  type: ADD_TO_FAVORITES,
  payload: movie,
});

export const addToWatchlist = (movie) => ({
  type: ADD_TO_WATCHLIST,
  payload: movie,
});

export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4046cb2471cf2f9d814c29556ebe2bcd'); // Replace with your API endpoint
    const data = await response.json();
    console.log("data",data)
    dispatch(fetchMoviesSuccess(data.results));
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};
