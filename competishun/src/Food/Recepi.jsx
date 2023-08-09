// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchRecipes } from "../Redux/action";

// const RecipeScreen = () => {
//   const dispatch = useDispatch();
//   const recipes = useSelector((state) => state.recipes.recipes
//   );
//   console.log("recepi", recipes);
//   useEffect(() => {
//     dispatch(fetchRecipes("indian"));
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Recipe Screen</h1>
//       <ul>
//         {recipes.map((recipe) => (
//           <li key={recipe.recipe.uri}>
//             <p> fat :{recipe.recipe.totalNutrients.FAT.quantity}</p>
//             <h2>{recipe.recipe.label}</h2>
//             <img src={recipe.recipe.image} alt={recipe.recipe.label} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RecipeScreen;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../Redux/action";
import { StickyNavbar } from "./Foodnavbar";

const RecipeScreen = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.recipes);
  
  useEffect(() => {
    dispatch(fetchRecipes("indian"));
  }, [dispatch]);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
        <StickyNavbar/>
      <h1 className="text-2xl font-semibold mb-4 mt-5">Recipe Screen</h1>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes!=undefined && recipes.map((recipe) => (
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
              <p className="text-gray-600">
                Fat: {recipe.recipe.totalNutrients.FAT.quantity}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeScreen;

