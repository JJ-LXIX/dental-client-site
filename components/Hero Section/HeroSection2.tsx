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
  let scale = useTransform(scrollY, [0, 500], ["100%", "130%"]);

  return (
    <div className="min-h-screen lg:min-h-[150vh] pb-[10rem]  bg-black w-full hero__section relative overflow-hidden  ">
      <div className="one absolute blur-3xl w-[10rem] h-[10rem] lg:w-[35rem] lg:h-[35rem] bg-red-500/50 rounded-full  left-[30%]"></div>
      <div className="two absolute blur-3xl w-[10rem] h-[10rem] lg:w-[35rem] lg:h-[35rem] bg-purple-500/50 rounded-full  left-[30%] bottom-[20%]"></div>
      <div className="three absolute blur-3xl w-[10rem] h-[10rem] lg:w-[35rem] lg:h-[35rem] bg-sky-500/50 rounded-full  left-[40%] bottom-[15%]"></div>

      {/* <div className="absolute z-10 inset-0 bg-black/20"></div> */}
      {/* Hero Content */}
      <div className="absolute z-20 inset-0 flex flex-col w-[90%] mx-auto lg:w-[75%]">
        {/*Text*/}
        <div className="w-full h-[85%] lg:h-[35%] md:h-[50%] md:pt-40 lg:pt-36 tracking-tighter pb-5 lg:pb-0 flex justify-center items-center ">
          <div className="h-full w-full md:w-[90%] md:h-auto  2xl:w-full flex flex-col justify-end  md:justify-center md:items-center space-y-5 md:space-y-10 lg:space-y-10">
            <h1 className="text-white text-3xl md:text-6xl lg:text-5xl xl:text-6xl  text-center  xl:max-w-4xl">
              Creating Healthy Smiles: Dentica, Your Trusted Dental Experts
            </h1>
            <h3 className="text-gray-100 text-xl md:text-4xl lg:text-3xl xl:text-4xl  font-light text-center  xl:max-w-3xl">
              Discover Personalized Dental Solutions for Your Needs
            </h3>
          </div>
        </div>

        {/*Image*/}
        <div className="w-full z-20 h-screen flex justify-center items-center ">
          <motion.div
            style={{ y, scale }}
            className="w-[80%] h-[90%] md:h-[90%] lg:h-[90%] lg:w-[90%] xl:w-[50%] border-2 border-white  rounded-t-full overflow-hidden  relative"
          >
            <Image
              src={DentalHero}
              fill
              alt="Image of a dental patient smiling"
              style={{ objectFit: "cover" }}
              className="p-2 rounded-t-full"
              priority={true}
              placeholder="blur"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
