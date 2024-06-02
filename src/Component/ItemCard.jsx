import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Slices/Slice";

const ItemCard = (props) => {
  const CartToggle = props.cart;
  console.log("CartToggle", CartToggle);
  const cartItems = useSelector((state) => state.cart.cart);
  console.log("cartItems", cartItems);
  const dispatch = useDispatch();

  return (
    <>
      {cartItems && cartItems.length > 0 ? (
        <>
          {cartItems.map((data, index) => {
            return (
              <div
                className={
                  CartToggle
                    ? "hidden"
                    : "flex  gap-2 shadow-md rounded-lg p-2 mb-1"
                }
                key={index}
              >
                <MdDelete
                  onClick={() =>
                    dispatch(
                      removeFromCart(
                        data.id,
                        data.name,
                        data.image,
                        data.price,
                        data.qty
                      )
                    )
                  }
                  className="absolute right-7 cursor-pointer text-gray-600 hover:text-red-500 transition-all ease-in"
                />
                <img src={data?.image} alt="" className="w-[50px] h-[50px]" />
                <div className="flex justify-between flex-col">
                  <h2 className="font-bold text-gray-800">{data?.name}</h2>
                  <div className="flex  justify-between items-center gap-2">
                    <span className="text-green-500 font-bold">
                      ₹ {data?.price}
                    </span>
                    <div className="flex justify-center items-center gap-2  absolute right-7">
                      <FaMinus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
                      <span>{data?.qty}</span>
                      <FaPlus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <span
            className={CartToggle ? "hidden" : "text-xl font-bold text-red-500"}
          >
            No Order's Yet
          </span>
        </div>
      )}
    </>
  );
};

export default ItemCard;
