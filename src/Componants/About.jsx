import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { MdFoodBank } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";

const About = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover text-white bg-center font-serif"
      style={{
        backgroundImage:
          "url('https://as1.ftcdn.net/v2/jpg/07/56/46/90/1000_F_756469075_DU8FRMdOsrRQQsgKzBERBEfSFUyr10Pt.jpg')",
      }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50 p-4 rounded-xl">
        <div className="text-center w-full sm:max-w-4xl px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-6">
            Who We Are
          </h1>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-12">
           
            <div className="flex flex-col sm:w-1/2 mb-6 sm:mb-0 text-left">
              <h2 className="text-3xl font-semibold text-yellow-300 mb-4">
                Discover, Cook, Thrive: Your Culinary Adventure Awaits!
              </h2>
              <p className="text-lg sm:text-xl font-semibold mb-6 text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="flex items-center mb-6 hover:bg-yellow-400 p-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                <div className="w-12 h-12 flex justify-center items-center  mr-4">
                  <img src="src\assets\doctor.png" alt="Doctor"/>
                </div>
                <h1 className="text-lg sm:text-xl font-semibold">High Nutritional Expertise</h1>
              </div>
              <div className="flex items-center mb-6 hover:bg-yellow-400 p-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              <div className="w-12 h-12 flex justify-center items-center  mr-4">
              <img src="src\assets\recipe.png" alt="Doctor"/>
                </div>
                <span className="text-lg sm:text-xl">Healthy and Delicious Recipes</span>
              </div>
              <div className="flex items-center mb-6 hover:bg-yellow-400 p-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              <div className="w-12 h-12 flex justify-center items-center  mr-4">
              <img src="src\assets\mortarboard.png" alt="Doctor"/>
                </div>
                <span className="text-lg sm:text-xl">Interactive Cooking Classes</span>
              </div>
            </div>

            {/* Right Column (Image Section) */}
            <div className="sm:w-1/2 w-full p-6 rounded-lg shadow-xl">
              <img
                src="https://theme.creativemox.com/cookkit/wp-content/uploads/sites/10/2024/01/img_2.png"
                className="w-full h-full object-contain rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105"
                alt="Culinary Adventure"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
