import { Star } from "lucide-react";
import React from "react";

type Props = {};

function Stars({}: Props) {
  return (
    <div className="flex items-center mb-4 text-yellow-300">
      <Star fill="gold" />
      <Star fill="gold" />
      <Star fill="gold" />
      <Star fill="gold" />
      <Star fill="gold" />
    </div>
  );
}

export default Stars;
