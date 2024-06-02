import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../Slices/Slice";

const FoodCard = ({ id, name, price, description, rating, image }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="font-bold w-[250px] p-5 bg-white flex flex-col gap-2 rounded-lg mr-2">
        <img
          src={image}
          alt=""
          className="w-auto h-[150px] hover:scale-110 transition-all duration-500 ease-in-out cursor-grab"
        />
        <div className="flex justify-between">
          <h2>{name.slice(0,11)}</h2>
          <span className="text-green-500">₹ {price}</span>
        </div>
        <p className="text-sm font-normal ">{description.slice(0, 40)}...</p>
        <div className="flex justify-between">
          <span className="flex justify-center items-center">
            <FaStar className="mr-2 text-yellow-400" />
            {rating}
          </span>
          <button
            onClick={() => {
              dispatch(addToCart({ id, name, price, rating, image, qty: 1 }));
            }}
            className="p-2 text-white bg-green-600 hover:bg-white hover:text-green-500 hover:border border-green-500 rounded-lg text-sm"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
