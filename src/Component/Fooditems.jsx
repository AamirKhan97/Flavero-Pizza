import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "./FoodData";

const Fooditems = () => {
  return (
    <>
      <div className="py-2 mx-3 flex justify-center flex-wrap gap-10 lg:justify-start">
        {FoodData.map((food) => {
          return (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              description={food.desc}
              rating={food.rating}
              image={food.img}
            />
          );
        })}
      </div>
    </>
  );
};

export default Fooditems;
