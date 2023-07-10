// "use client";
import React from "react";
import Accordian from "./Accordian";
import Image from "next/image";
import smilingPatient from "@/public/images/woman-dentist-patient.jpg";
// import { motion } from "framer-motion";

type Props = {};

// const variants = {
//   initial: {
//     opacity: 0,
//   },
//   animate: {
//     opacity: 1,
//   },
// };

// const transition = { ease: "easeInOut", duration: 1 };

function FaqSection({}: Props) {
  return (
    <div className="bg-black w-full pt-32 lg:pt-10 pb-10 lg:pb-0 ">
      {/* Text & FAQ */}
      <div className="lg:max-w-6xl xl:mx-auto flex flex-col md:flex-row items-center md:justify-center ">
        <div
          // variants={variants}
          // initial="initial"
          // whileInView="animate"
          // transition={transition}
          // viewport={{ once: true }}
          className="w-full px-5 "
        >
          <h2 className="text-4xl font-medium lg:text-5xl text-slate-100 lg:max-w-md">
            Frequently Asked Questions for a Healthy Smile.
          </h2>
          <h3 className="text-lg lg:text-lg mt-2 lg:mt-4 text-blue-200 lg:max-w-lg">
            Find solutions to your dental concerns with our comprehensive FAQ
            section, or Contact Us for more detailed information!
          </h3>
          <Accordian />
        </div>

        {/* Image */}
        <div className="h-screen md:h-[50vh] lg:h-screen w-full  flex justify-start items-center px-5">
          <div
            // variants={variants}
            // initial="initial"
            // whileInView="animate"
            // transition={transition}
            // viewport={{ once: true }}
            className="h-[80%] border-2 border-blue-400 shadow-lg w-full relative rounded-l-3xl rounded-tr-3xl overflow-hidden"
          >
            <Image
              src={smilingPatient}
              fill
              alt="smiling dental patient"
              style={{ objectFit: "cover" }}
              className="p-2 rounded-l-3xl rounded-tr-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
