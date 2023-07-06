import React from "react";
import Accordian from "./Accordian";

type Props = {};

function FaqSection({}: Props) {
  return (
    <div className="w-full mt-32 lg:mt-10 mb-10 lg:mb-0 lg:pl-10 flex flex-col md:flex-row items-center md:justify-center lg:max-w-6xl xl:mx-auto">
      {/* Text & FAQ */}
      <div className="w-full px-5">
        <h2 className="text-4xl font-medium lg:text-4xl text-slate-800 lg:max-w-md">
          Get online access to ask the doctor 24/7.
        </h2>
        <h3 className="text-lg lg:text-lg mt-2 lg:mt-4 text-blue-950 lg:max-w-lg">
          Have a health concern? Get 24/7 online access to ask a doctor and get
          the answers you need, anytime, anywhere.
        </h3>
        <Accordian />
      </div>

      {/* Image */}
      <div className="h-screen md:h-[50vh] lg:h-screen w-full  flex justify-start items-center px-5">
        <div className="h-[80%] bg-yellow-100 w-full"></div>
      </div>
    </div>
  );
}

export default FaqSection;
