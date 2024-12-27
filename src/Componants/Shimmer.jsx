
import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-col space-y-4">
     
      <div className="w-full h-64 bg-gray-300 animate-pulse rounded-lg" />
      
   
      <div className="w-full h-6 bg-gray-300 animate-pulse rounded"></div>
      <div className="w-2/3 h-6 bg-gray-300 animate-pulse rounded"></div>
      <div className="w-1/2 h-6 bg-gray-300 animate-pulse rounded"></div>
    </div>
  );
};

export default Shimmer;
