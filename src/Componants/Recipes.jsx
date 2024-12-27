import React, { useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "../Componants/Shimmer";
import { Link } from "react-router-dom";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(8);

  const IndexOfLastItem = currentPage * itemPerPage;
  const IndexOfFirstItem = IndexOfLastItem - itemPerPage;
  const CurrentItem = recipes?.slice(IndexOfFirstItem, IndexOfLastItem);
  const TotalPages = Math.ceil(recipes.length / itemPerPage);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/recipes?limit=0");
      const data = response.data.recipes;
      setRecipes(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const filteredRecipeData = CurrentItem.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <Shimmer />
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="flex justify-center mb-8 drop-shadow-lg">
            <input
              type="text"
              placeholder="Search your favorite Recipe...."
              className="border border-gray-300 rounded-lg p-2 w-1/2 md:w-1/4"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredRecipeData.map((elements) => (
              <div
                key={elements.id}
                className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                <Link to={`/DetailRecipes/${elements.id}`}>
                  <img
                    src={elements.image}
                    alt={elements.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <h1 className="text-2xl font-semibold text-gray-800">
                    {elements.name}
                  </h1>
                  <h2 className="text-xl font-thin text-gray-600">
                    {elements.cuisine}
                  </h2>
                  <h3 className="text-xl font-thin text-gray-600">
                    Rating: {elements.rating}
                  </h3>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center items-center space-x-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out"
            >
              Previous
            </button>

            {Array.from({ length: TotalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`py-2 px-4 rounded-lg ${
                  currentPage === index + 1
                    ? "bg-teal-500 text-white"
                    : "bg-white text-gray-800 hover:bg-teal-500 hover:text-white"
                } transition duration-300 ease-in-out`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, TotalPages))
              }
              disabled={currentPage === TotalPages}
              className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Recipes;
