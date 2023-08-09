import React from "react";
import Home from "../Pages/Home";

import { AuthContextProvider } from "../Context/AuthContext";
import Signin from "../Pages/Signin";
import Ptotected from "../Components/Ptotected";
import Account from "../Pages/Account";
import { Route, Routes } from "react-router-dom";
import { NavbarDefault } from "../Pages/Dashboard";
import Favorites from "../Movie/Favorites";
import Watchlist from "../Movie/Watchlist";
import MovieDetail from "../Movie/MovieDetail";
import MovieList from "../Movie/MovieList";
import RecipeScreen from "../Food/Recepi";
import CalorieScreen from "../Food/Calorie";
import DietScreen from "../Food/Diet";

const AllRoutes = () => {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/account"
            element={
              <Ptotected>
                <Account />
              </Ptotected>
            }
          />
          <Route path="/" element={<NavbarDefault />} />
          <Route
            path="/movie/:id"
            element={
              <Ptotected>
                <MovieDetail />
              </Ptotected>
            }
          />
          <Route
            path="/watchlist"
            element={
              <Ptotected>
                <Watchlist />
              </Ptotected>
            }
          />
          <Route path="/movie" element={<MovieList />} />
          <Route
            path="/favourits"
            element={
              <Ptotected>
                <Favorites />
              </Ptotected>
            }
          />
          <Route exact path="/recipe" element={<RecipeScreen/>} />
          <Route path="/calorie" element={ <Ptotected><CalorieScreen/></Ptotected>} />
          <Route path="/diet" element={<Ptotected><DietScreen/></Ptotected>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default AllRoutes;
