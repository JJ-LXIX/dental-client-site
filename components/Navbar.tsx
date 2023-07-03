import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="w-full flex items-center justify-center z-50">
      <div className=" z-50 fixed top-5 mx-auto my-0 w-[90%] bg-white rounded-3xl border-black border-2 h-[4rem] md:h-[5rem] md:w-[80%]"></div>
    </div>
  );
}

export default Navbar;
