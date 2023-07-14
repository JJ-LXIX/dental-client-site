"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./Navbar.css";
import { Phone } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

type Props = {};

function Navbar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  // const [navbar, setNavbar] = useState(false);

  // const { scrollY } = useScroll();

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   if (latest > 799) {
  //     setNavbar(true);
  //   } else if (latest < 800) {
  //     setNavbar(false);
  //   }
  // });

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full transition ease transform duration-300 bg-white `;

  return (
    <div className="w-full flex  items-center justify-center z-50">
      <div className="bg-black text-white border-2 transition-all duration-300 px-6 flex justify-between items-center z-50 fixed top-5 mx-auto my-0 w-[90%]  rounded-full navbar h-[4rem] md:h-[5rem] lg:h-[5.5rem] md:w-[80%]">
        <Link
          href="/"
          onClick={() => {
            if (isOpen) {
              setIsOpen(!isOpen);
            }
          }}
        >
          <div className="font-bold text-xl">LOGO</div>
        </Link>

        <div className="hidden lg:flex justify-around items-center lg:w-[50%] xl:w-[40%] 2xl:w-[30%]">
          <Link
            href="/about"
            className="text-xl font-bold  hover:text-purple-600 transition-all duration-300"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-xl font-bold  hover:text-purple-600 transition-all duration-300"
          >
            Services
          </Link>
          <a href="/#contact" className="text-xl">
            <button className="cssbuttons-io">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Contact Us
              </span>
            </button>
          </a>
        </div>

        <a
          href="tel: 7899896869"
          className="lg:hidden w-28 px-2 py-[.5rem] font-semibold rounded-xl border-2 border-white flex items-center justify-around active:scale-95 transition-all duration-300"
        >
          <Phone />
          Call Us
        </a>

        <button
          aria-label="navigation dropdown icon"
          className="lg:hidden flex flex-col h-12 w-12 rounded justify-center items-center group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "rotate-45 translate-y-3" : ""
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : ""}`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "-rotate-45 -translate-y-3" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile slide down nav */}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-black z-40 fixed inset-0 flex flex-col items-center pt-44 space-y-10"
          >
            <Link
              href="/"
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl text-white  font-bold  hover:text-purple-600 transition-all duration-300"
            >
              <h2>- Home -</h2>
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl text-white  font-bold  hover:text-purple-600 transition-all duration-300"
            >
              <h2>- About -</h2>
            </Link>
            <Link
              href="/services"
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl text-white  font-bold  hover:text-purple-600 transition-all duration-300"
            >
              <h2>- Services -</h2>
            </Link>
            <a
              href="/#contact"
              className="text-xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              <button className="cssbuttons-io">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Contact Us
                </span>
              </button>
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
