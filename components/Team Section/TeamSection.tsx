import React from "react";
import TeamCard from "./TeamCard";

type Props = {};

function TeamSection({}: Props) {
  return (
    <div>
      <div className="w-full px-2 lg:max-w-4xl xl:max-w-5xl mx-auto my-10 lg:space-y-10">
        {/* Text */}
        <div className="space-y-2">
          <h2 className="text-center text-4xl lg:text-5xl font-medium">
            Our Expert Team
          </h2>
          <h3 className="text-center text-lg text-slate-700">
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
}

export default TeamSection;
