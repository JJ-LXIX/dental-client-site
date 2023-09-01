"use client";
import DentalWork from "@/public/images/dentist-work.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  number: number;
};

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

function WorkCard({ number }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);
  if (isMobile)
    return (
      <div className="h-[18rem] md:h-[25rem] w-[90%] relative group shadow-xl overflow-hidden rounded-2xl border-white border-2">
        <Image
          src={DentalWork}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="dental work"
          style={{ objectFit: "cover" }}
          className="p-2 rounded-2xl"
          placeholder="blur"
        />

        <div className="absolute inset-0 z-2 bg-gradient-to-b from-transparent from-60% to-black group-hover:bg-black/90 transition-all duration-300"></div>
        <div className="cursor-default">
          <h3 className="z-10 text-white font-bold absolute bottom-5 left-3 lg:left-5 md:text-3xl group-hover:bottom-[13rem]  transition-all duration-300">
            Treatment Name
          </h3>
          <h3 className="opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 md:text-xl text-white/70  absolute -bottom-10 group-hover:bottom-5 left-3 lg:left-5">
            Treatment details Lorem, ipsum dolor sit amet consectetur
            adipisicing elit Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
      </div>
    );
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      transition={{ delay: 0.1 * number }}
      viewport={{ once: true }}
      className="h-[18rem] md:h-[25rem] w-[90%] relative group shadow-xl overflow-hidden rounded-2xl border-white border-2"
    >
      <div className="absolute inset-0 overflow-hidden p-2">
        <Image
          src={DentalWork}
          fill
          alt="dental work"
          style={{ objectFit: "cover" }}
          className="p-2 rounded-2xl"
          placeholder="blur"
        />
      </div>
      <div className="absolute inset-0 z-2 bg-gradient-to-b from-transparent from-60% to-black group-hover:bg-black/90 transition-all duration-300"></div>
      <div className="cursor-default">
        <h3 className="z-10 text-white font-bold absolute bottom-5 left-3 lg:left-5 md:text-3xl group-hover:bottom-[13rem]  transition-all duration-300">
          Treatment Name
        </h3>
        <h3 className="opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 md:text-xl text-white/70  absolute -bottom-10 group-hover:bottom-5 left-3 lg:left-5">
          Treatment details Lorem, ipsum dolor sit amet consectetur adipisicing
          elit Lorem ipsum dolor sit amet consectetur.
        </h3>
      </div>
    </motion.div>
  );
}

export default WorkCard;
