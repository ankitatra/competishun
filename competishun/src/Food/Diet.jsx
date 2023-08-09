import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipesByDiet } from '../Redux/action';
import { StickyNavbar } from './Foodnavbar';

const DietScreen = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.recipes);

  const [selectedDiet, setSelectedDiet] = useState('');

  const handleSearch = () => {
    if (selectedDiet) {
      dispatch(fetchRecipesByDiet(selectedDiet));
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
         <StickyNavbar/>
      <h1 className="text-2xl font-semibold mb-4 mt-6">Diet Screen</h1>
      <div className="mb-4">
        <select
          className="p-2 border rounded-lg"
          value={selectedDiet}
          onChange={(e) => setSelectedDiet(e.target.value)}
        >
          <option value="">Select Diet</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          {/* Add more diet options here */}
        </select>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes !== undefined &&
          recipes.map((recipe) => (
            <li key={recipe.recipe.uri} className="bg-white rounded-lg shadow">
              <img
                className="h-32 w-full object-cover rounded-t-lg"
                src={recipe.recipe.image}
                alt={recipe.recipe.label}
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">
                  {recipe.recipe.label}
                </h2>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DietScreen;
