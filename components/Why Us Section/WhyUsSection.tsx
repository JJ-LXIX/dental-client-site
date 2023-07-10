"use client";
import Image from "next/image";
import React from "react";
import SmilingWoman from "@/public/images/whyUs.jpg";
import CardComponent from "./CardComponent";
import { motion } from "framer-motion";

type Props = {};

const variants1 = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const variants2 = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const transition = { ease: "easeInOut", duration: 0.6 };

function WhyUsSection({}: Props) {
  return (
    <div className="w-full bg-black text-white flex items-center py-14 lg:py-20  lg:min-h-screen">
      <div className="w-full flex justify-center ">
        {/* Adjust width of container */}
        <div className="w-full lg:max-w-6xl flex flex-col md:flex-row ">
          {/* Left Side */}
          <div className="h-[55svh] md:h-auto w-full flex justify-center items-center md:items-start md:mt-[5rem] lg:mt-0">
            <motion.div
              variants={variants1}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ ...transition }}
              className="overflow-hidden border-2 border-white relative h-[90%] w-[65%] md:h-[60%] lg:h-[100%] lg:w-[65%]  rounded-tl-[5rem] rounded-r-[5rem]"
            >
              <Image
                src={SmilingWoman}
                style={{ objectFit: "cover" }}
                fill
                alt="Image of a woman smiling"
                className="p-2 rounded-tl-[5rem] rounded-r-[5rem]"
              />
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="md:min-h-[70svh] w-full flex items-center ">
            <motion.div
              variants={variants2}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ ...transition }}
              className=" w-full p-4"
            >
              <motion.h2
                variants={variants2}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.4, ...transition }}
                className="text-4xl font-medium lg:text-5xl lg:max-w-[90%]"
              >
                Why You Should Choose Our Dental Service?
              </motion.h2>
              <motion.h3
                variants={variants2}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.8, ...transition }}
                className="mt-4 md:max-w-[90%] text-white"
              >
                Discover why our dental service stands out from the rest. From
                our experienced team to our state-of-the-art equipment, we
                provide exceptional care for all your dental needs.
              </motion.h3>

              {/* Cards */}
              <motion.div
                variants={variants2}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 1.2, ...transition }}
              >
                <div className="md:w-[90%] min-h-[6rem] my-6 border border-zinc-200/70 rounded-3xl ">
                  <CardComponent number={0} />
                </div>
                <div className="md:w-[90%] min-h-[6rem] my-6 border border-zinc-200/70 rounded-3xl ">
                  <CardComponent number={1} />
                </div>
                <div className="md:w-[90%] min-h-[6rem] my-6 border border-zinc-200/70 rounded-3xl ">
                  <CardComponent number={2} />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUsSection;
