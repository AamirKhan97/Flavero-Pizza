import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-col lg:flex-row justify-between items-center py-2 mx-3 mb-5 ">
        <div>
          <h3 className="text-xl font-bold text-gray-600">{new Date().toUTCString().slice(0, 16)}</h3>
          <h1 className="text-2xl font-bold">Flavoro Foods</h1>
        </div>
        <div>
          <input
            type="search"
            name="search"
            placeholder="Search Here"
            autoComplete="off"
            className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
            // onChange={}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
