"use client";
import "./HeroSection.css";
import Image from "next/image";
import DentalHero from "@/public/images/dental-hero.jpg";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
type Props = {};

function HeroSection({}: Props) {
  let { scrollY } = useScroll();
  let y = useTransform(scrollY, [0, 500], ["0%", "-20%"]);
  let scale = useTransform(scrollY, [0, 500], ["100%", "110%"]);

  return (
    <div className="min-h-screen lg:min-h-[110vh] pb-[10rem]  bg-black w-full hero__section relative overflow-hidden  ">
      <div className="one absolute blur-3xl w-[10rem] h-[10rem] lg:w-[25rem] lg:h-[25rem] bg-red-500/30 rounded-full  left-[30%]"></div>
      <div className="two absolute blur-3xl w-[10rem] h-[10rem] lg:w-[25rem] lg:h-[25rem] bg-purple-300/30 rounded-full  left-[30%] bottom-[5%]"></div>
      <div className="three absolute blur-3xl w-[10rem] h-[10rem] lg:w-[25rem] lg:h-[25rem] bg-sky-300/30 rounded-full  left-[30%] bottom-[5%]"></div>

      {/* <div className="absolute z-10 inset-0 bg-black/20"></div> */}
      {/* Hero Content */}
      <div className="absolute z-20 inset-0 flex flex-col md:flex-row md:mx-auto lg:w-[75%]">
        {/* Left /Top */}
        <div className="w-full h-screen  flex justify-center items-center">
          <div className="h-[95%] w-full md:w-[90%] 2xl:w-full flex flex-col justify-end  md:justify-center md:items-center space-y-5 md:space-y-10 lg:space-y-10">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl  text-center md:text-left">
              Creating Healthy Smiles: Dentica, Your Trusted Dental Experts
            </h1>
            <h3 className="text-gray-100 text-xl md:text-2xl lg:text-3xl xl:text-4xl  font-light text-center md:text-left">
              Discover Personalized Dental Solutions for Your Needs
            </h3>
          </div>
        </div>

        {/* Right/Bottom */}
        <div className=" w-full z-20 h-screen flex justify-center items-center lg:mt-14">
          <motion.div
            style={{ y, scale }}
            className="w-[90%] h-[90%] md:h-[60%] lg:h-[80%] lg:w-[90%] xl:w-[80%] border-2 border-white  rounded-t-full overflow-hidden  relative"
          >
            <Image
              src={DentalHero}
              fill
              alt="Image of a dental patient smiling"
              style={{ objectFit: "cover" }}
              className="p-2 rounded-t-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
