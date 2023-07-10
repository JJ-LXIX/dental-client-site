import React from "react";
import "./TestimonialSection.css";
import TestimonialCard from "./TestimonialCard";
type Props = {};

function TestimonialSection({}: Props) {
  return (
    <div className="md:pb-[10rem] bg-black">
      <div className="relative w-full h-[32rem] md:min-h-[40rem]   overflow-hidden">
        <div className="flex absolute left-0 animate">
          <div className="flex w-[50%] justify-around">
            <TestimonialCard number={1} />
            <TestimonialCard number={2} />
            <TestimonialCard number={3} />
            <TestimonialCard number={4} />
            <TestimonialCard number={5} />
          </div>
          <div className="flex w-[50%] justify-around">
            <TestimonialCard number={1} />
            <TestimonialCard number={2} />
            <TestimonialCard number={3} />
            <TestimonialCard number={4} />
            <TestimonialCard number={5} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
