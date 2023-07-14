"use client";
import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import { motion } from "framer-motion";

type Props = {};

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const transition = { ease: "easeOut", duration: 0.3 };

function TeamSection({}: Props) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);
  if (isMobile)
    return (
      <div className="bg-black">
        <div className="w-full px-2 lg:max-w-4xl xl:max-w-5xl mx-auto py-20 lg:space-y-10">
          {/* Text */}
          <div className="space-y-2">
            <h2 className="text-center text-white text-4xl lg:text-5xl font-medium">
              Our Expert Team
            </h2>
            <h3 className="text-center text-lg text-zinc-300">
              Our experienced team at Dentica is dedicated to providing
              high-quality service and personalized care to each of our clients.
            </h3>
          </div>
          {/* Dentist Images */}
          <div className="flex flex-col space-y-5 items-center mt-4 md:space-y-0 md:gap-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:justify-items-center md:items-center">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </div>
    );
  return (
    <div className="bg-black">
      <div className="w-full px-2 lg:max-w-4xl xl:max-w-5xl mx-auto py-20 lg:space-y-10">
        {/* Text */}
        <div className="space-y-2">
          <motion.h2
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ ...transition }}
            className="text-center text-white text-4xl lg:text-5xl font-medium"
          >
            Our Expert Team
          </motion.h2>
          <motion.h3
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.6, ...transition }}
            className="text-center text-lg text-zinc-300"
          >
            Our experienced team at Dentica is dedicated to providing
            high-quality service and personalized care to each of our clients.
          </motion.h3>
        </div>
        {/* Dentist Images */}
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delay: 0.3, ...transition }}
          className="flex flex-col space-y-5 items-center mt-4 md:space-y-0 md:gap-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:justify-items-center md:items-center"
        >
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </motion.div>
      </div>
    </div>
  );
}

export default TeamSection;
