import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import dentistImage from "@/public/images/dentist_image.jpg";

type Props = {};

function TeamCard({}: Props) {
  return (
    <div className="h-[20rem] w-[80%] md:w-[90%] md:h-[25rem] lg:h-[22rem] relative group shadow-md shadow-black/50 overflow-hidden rounded-xl border-2 border-green-300">
      <div className="absolute  inset-0  ">
        <Image
          src={dentistImage}
          fill
          alt="dental work"
          style={{ objectFit: "cover" }}
          className="p-2 rounded-xl"
        />
      </div>
      <div className="absolute  inset-0 z-2 bg-gradient-to-b from-transparent from-60% to-black/80 group-hover:bg-black/90 transition-all duration-300"></div>
      <div className="cursor-default">
        <h3 className="z-10 text-white font-semibold absolute bottom-12 left-3 lg:left-4 md:text-xl lg:text-lg group-hover:bottom-[13rem]  transition-all duration-300">
          Dentist Name
        </h3>
        <h3 className="z-10 text-gray-100/90  absolute bottom-5 left-3 lg:left-4 md:text-xl  lg:text-lg group-hover:bottom-[11rem]  transition-all duration-300">
          Specialization
        </h3>
        <h3 className="opacity-0 group-hover:opacity-100 transition-all font-light duration-300 z-10 md:text-lg lg:leading-tight text-white/70  absolute -bottom-10 group-hover:bottom-5 left-3 lg:left-4">
          Dentist Details Lorem, ipsum dolor sit amet consectetur adipisicing
          elit Lorem ipsum dolor sit amet consectetur.
        </h3>
      </div>
    </div>
  );
}

export default TeamCard;
