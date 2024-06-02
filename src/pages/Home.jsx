import React from "react";
import Navbar from "../Component/Navbar";
import CategoryMenu from "../Component/CategoryMenu";
import Fooditems from "../Component/Fooditems";
import Cart from "../Component/Cart";

const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <Fooditems />
      <Cart />
    </>
  );
};

export default Home;
