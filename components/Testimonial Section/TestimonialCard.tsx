import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Stars from "./Stars";
import { Quote } from "lucide-react";

type Props = { number: number };

function TestimonialCard({ number }: Props) {
  return (
    <div
      className={`testimonial__card mt-20 shadow-[5px_10px_10px_0px] h-[23rem] w-[13rem] md:min-h-[28rem] md:w-[28rem]  lg:w-[20rem]   rounded-3xl px-3 py-3 md:px-6 md:py-14 border-4 flex flex-col items-center justify-around
    ${
      number === 1
        ? "border-red-200 shadow-red-400"
        : number === 2
        ? "border-yellow-200 shadow-yellow-400"
        : number === 3
        ? "border-blue-200 shadow-blue-400"
        : number === 4
        ? "border-green-200 shadow-green-400"
        : "border-purple-200 shadow-purple-400"
    } 
    `}
    >
      <Avatar className="w-20 h-20 md:w-40 md:h-40 mb-2 lg:w-32 lg:h-32">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <Stars />
      <h3 className="md:text-2xl font-semibold">Name of Person</h3>
      {/* Quotes */}

      <h3 className="text-sm md:text-xl md:font-medium text-center text-zinc-300">
        <span>
          <Quote
            className="rotate-180 ml-2 md:ml-0 h-4 w-4 md:h-6 md:w-6 text-transparent"
            fill="orange"
          />
        </span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat esse
        possimus quisquam distinctio eum modi perferendis aliquam voluptatum nam
        alias?
      </h3>
    </div>
  );
}

export default TestimonialCard;
