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


export const setRecipes = (recipes) => ({
  type: 'SET_RECIPES',
  payload: recipes,
});

const ID="234a6f6e"
const key ="23e6be1a35a33cdbf459b3bb255c231d"
export const fetchRecipes = (query) => async (dispatch) => {
  try {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${ID}&app_key=${key}`);
    const data = await response.json();
    // console.log(data.hits[0].recipe.image)
    dispatch(setRecipes(data.hits));
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
};

export const fetchRecipesByDiet = (diet) => async (dispatch) => {
  try {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${diet}&app_id=${ID}&app_key=${key}`);
    const data = await response.json();
    console.log(data)
    dispatch(setRecipes(data.hits));
  } catch (error) {
    console.error('Error fetching recipes by diet:', error);
  }
};

export const fetchRecipesByCalories = (calories) => async (dispatch) => {
  try {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&calories=${calories}&app_id=${ID}&app_key=${key}`);
    const data = await response.json();
   
    dispatch(setRecipes(data.hits));
  } catch (error) {
    console.error('Error fetching recipes by calories:', error);
  }
};
