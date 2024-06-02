import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import ItemCard from "./ItemCard";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Cart = () => {
  const [cartActive, setCartActive] = useState(true);
  const cartData = useSelector((state) => state.cart.cart)

  return (
    <>
      <div
        className={
          cartActive
            ? "fixed right-2 bottom-3 h-[40px] w-[40px] bg-white rounded-lg flex justify-center items-center transition-all ease-in"
            : "fixed right-2 top-2 w-full lg:w-[40vh] p-2 rounded-sm bg-white h-full transition-all ease-in-out"
        }
      >
        <div className="flex justify-between items-center">
          <span
            className={
              cartActive ? "hidden" : "text-xl font-bold text-gray-800"
            }
          >
            My Order's
          </span>
          <button
            onClick={() => setCartActive(!cartActive)}
            className="border border-gray-300 p-1 rounded-md"
          >
            {cartActive ? (
              <span className="h-[18px] w-[18px] rounded-md bg-white  text-sm absolute top-0 text-green-500">
                {cartData.length}
              </span>
            ) : null}
            {cartActive ? <FaShoppingCart /> : <IoClose />}
          </button>
        </div>
        <ItemCard cart={cartActive} />
        <div className={cartActive ? "hidden" : "absolute bottom-5 w-[100%]"}>
          <h3 className="mb-1">Items : </h3>
          <h3 className="mb-1">Total Amount : </h3>
          <hr />
          <button className="bg-green-500 font-bold px-3 text-white py-1 rounded-lg w-[93%] mt-2">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
