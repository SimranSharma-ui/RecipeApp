import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 

const Home = () => {
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fw800/background/20240328/pngtree-healthy-thai-food-recipes-concept-image_15645273.jpg')" }}>
     
      <div className="absolute inset-0 flex items-center justify-center z-10 text-center">
        <Slider {...sliderSettings} className="w-full max-w-3xl">
          <div className="bg-black bg-opacity-50 p-8 rounded-lg">
            <h2 className="text-white text-3xl md:text-5xl font-bold text-shadow">Discover Delicious Recipes</h2>
          </div>
          <div className="bg-black bg-opacity-50 p-8 rounded-lg">
            <h2 className="text-white text-3xl md:text-5xl font-bold text-shadow">Healthy & Tasty Meals</h2>
          </div>
          <div className="bg-black bg-opacity-50 p-8 rounded-lg">
            <h2 className="text-white text-3xl md:text-5xl font-bold text-shadow">Explore New Ingredients</h2>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
