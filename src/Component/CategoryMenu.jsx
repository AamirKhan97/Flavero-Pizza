import React from "react";

const CategoryMenu = () => {
  return (
    <>
      <div className="py-2 mx-3">
        <h3 className="text-xl font-semibold">Find the delicious food !...</h3>
        <div className="mt-5 flex gap-3 flex-wrap">
          <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">
            All
          </button>
          <button className="px-3 py-2  bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">
            BreakFast
          </button>
          <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">
            Lunch
          </button>
          <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">
            Snacks
          </button>
          <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">
            Dinner
          </button>
        </div>
      </div>
    </>
  );
};

export default CategoryMenu;
