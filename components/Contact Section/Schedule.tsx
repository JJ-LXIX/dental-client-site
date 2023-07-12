import React from "react";

type Props = {};

function Schedule({}: Props) {
  return (
    <div className="w-[90%] rounded-br-3xl rounded-l-3xl py-4 bg-zinc-900 h-[90vh] md:h-[50vh] lg:h-[30rem] lg:w-[90%] space-y-2 z-20 flex flex-col justify-around items-center">
      <h2 className="text-2xl font-medium lg:text-3xl text-white">Schedule</h2>
      {/* Days boxes */}
      <div className="bg-zinc-700 h-12 md:h-14 lg:h-10  rounded-lg w-[90%] flex justify-between items-center px-4">
        <p className="text-zinc-200 lg:text-sm">Monday</p>
        <p className="text-zinc-200 lg:text-sm">08:00 - 20:00</p>
      </div>
      <div className="bg-zinc-700 h-12 md:h-14 lg:h-10  rounded-lg w-[90%] flex justify-between items-center px-4">
        <p className="text-zinc-200 lg:text-sm">Tuesday</p>
        <p className="text-zinc-200 lg:text-sm">08:00 - 20:00</p>
      </div>
      <div className="bg-zinc-700 h-12 md:h-14 lg:h-10  rounded-lg w-[90%] flex justify-between items-center px-4">
        <p className="text-zinc-200 lg:text-sm">Wednesday</p>
        <p className="text-zinc-200 lg:text-sm">08:00 - 20:00</p>
      </div>
      <div className="bg-zinc-700 h-12 md:h-14 lg:h-10  rounded-lg w-[90%] flex justify-between items-center px-4">
        <p className="text-zinc-200 lg:text-sm">Thursday</p>
        <p className="text-zinc-200 lg:text-sm">08:00 - 20:00</p>
      </div>
      <div className="bg-zinc-700 h-12 md:h-14 lg:h-10  rounded-lg w-[90%] flex justify-between items-center px-4">
        <p className="text-zinc-200 lg:text-sm">Friday</p>
        <p className="text-zinc-200 lg:text-sm">08:00 - 20:00</p>
      </div>
      <div className="bg-zinc-700 h-12 md:h-14 lg:h-10  rounded-lg w-[90%] flex justify-between items-center px-4">
        <p className="text-zinc-200 lg:text-sm">Saturday</p>
        <p className="text-zinc-200 lg:text-sm">08:00 - 20:00</p>
      </div>
      <div className="bg-zinc-700 h-12 md:h-14 lg:h-10  rounded-lg w-[90%] flex justify-between items-center px-4">
        <p className="text-zinc-200 lg:text-sm">Sunday</p>
        <p className="text-zinc-200 lg:text-sm">08:00 - 20:00</p>
      </div>
      {/* CTA Button */}

      <a href="/#contact" className="h-14 lg:h-12 rounded-lg w-[90%]">
        <button className="bg-sky-800 h-full rounded-lg w-full text-center text-white font-semibold text-base active:scale-90 ring-transparent hover:bg-sky-700 hover:scale-105 transition-all duration-300">
          MAKE AN APPOINTMENT
        </button>
      </a>
    </div>
  );
}

export default Schedule;
