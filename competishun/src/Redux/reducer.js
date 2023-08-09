// reducers/moviesReducer.js

import { combineReducers } from 'redux';
import { FETCH_MOVIES_SUCCESS, ADD_TO_FAVORITES, ADD_TO_WATCHLIST } from './action';

const movies = (state = [], action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const favorites = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...state, action.payload];
    default:
      return state;
  }
};

const watchlist = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      return [...state, action.payload];
    default:
      return state;
  }
};
const initialState = {
  recipes: [],
};

const recipes = (state = [], action) => {
  console.log(action.type,"paylod")
  switch (action.type) {
    case 'SET_RECIPES':
      return { ...state, recipes: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  movies,
  favorites,
  watchlist,
  recipes
});
