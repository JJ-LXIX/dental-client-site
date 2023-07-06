import React from "react";
import Accordian from "./Accordian";
import Image from "next/image";
import smilingPatient from "@/public/images/woman-dentist-patient.jpg";

type Props = {};

function FaqSection({}: Props) {
  return (
    <div className="w-full mt-32 lg:mt-10 mb-10 lg:mb-0 lg:pl-10 flex flex-col md:flex-row items-center md:justify-center lg:max-w-6xl xl:mx-auto">
      {/* Text & FAQ */}
      <div className="w-full px-5">
        <h2 className="text-4xl font-medium lg:text-5xl text-slate-800 lg:max-w-md">
          Frequently Asked Questions for a Healthy Smile.
        </h2>
        <h3 className="text-lg lg:text-lg mt-2 lg:mt-4 text-blue-950 lg:max-w-lg">
          Find solutions to your dental concerns with our comprehensive FAQ
          section, or Contact Us for more detailed information!
        </h3>
        <Accordian />
      </div>

      {/* Image */}
      <div className="h-screen md:h-[50vh] lg:h-screen w-full  flex justify-start items-center px-5">
        <div className="h-[80%] shadow-lg bg-yellow-100 w-full relative rounded-l-3xl rounded-tr-3xl overflow-hidden">
          <Image
            src={smilingPatient}
            fill
            alt="smiling dental patient"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
