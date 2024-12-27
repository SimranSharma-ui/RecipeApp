import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
      const data = response.data;
      console.log(data);
      setRecipe(data);
    };
    fetchData();
  }, [id]);

  if (!recipe) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-xl text-gray-700">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="bg-white shadow-xl rounded-xl overflow-hidden p-6">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 pr-0 md:pr-6">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-96 object-cover rounded-lg shadow-md transform transition duration-500 hover:scale-105"
            />
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <h1 className="text-4xl font-bold text-gray-800">{recipe.name}</h1>
            <h2 className="text-xl font-medium text-gray-600 mt-2">
              {recipe.cuisine}
            </h2>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Ingredients
              </h3>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                {Array.isArray(recipe.ingredients) ? (
                  recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-lg">
                      {ingredient}
                    </li>
                  ))
                ) : (
                  <li className="text-lg">{recipe.ingredients}</li>
                )}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Instructions
              </h3>
              <p className="mt-2 text-gray-700 text-lg">
                {recipe.instructions}
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-gray-800">
                  Servings
                </h4>
                <p className="text-gray-600">{recipe.servings} servings</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-gray-800">
                  Difficulty
                </h4>
                <p className="text-gray-600">{recipe.difficulty}</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-gray-800">
                  Nutritional Information
                </h4>
                <p className="text-gray-600">
                  <strong>Calories:</strong>{" "}
                  {recipe.caloriesPerServing} kcal <br />
                 
                </p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-gray-800">
                  Tags
                </h4>
                <ul className="list-disc pl-5 text-gray-600">
                  {recipe.tags?.map((tool, index) => (
                    <li key={index}>{tool}</li>
                  ))}
                </ul>
              </div>
            </div>


            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-gray-800">
                  Preparation Time
                </h4>
                <p className="text-gray-600">
                  {recipe.prepTimeMinutes} minutes
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-gray-800">
                  Cooking Time
                </h4>
                <p className="text-gray-600">
                  {recipe.cookTimeMinutes} minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRecipe;
