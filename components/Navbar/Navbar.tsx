"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./Navbar.css";

type Props = {};

function Navbar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <div className="w-full flex  items-center justify-center z-50">
      <div className="bg-white px-6 flex justify-between items-center z-50 fixed top-5 mx-auto my-0 w-[90%]  rounded-full navbar h-[4rem] md:h-[5rem] lg:h-[5.5rem] md:w-[80%]">
    </div>
  );
}

export default Navbar;
