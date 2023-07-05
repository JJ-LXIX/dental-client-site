import { ArrowUpRightSquare } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Link href="/">
        <div className="flex">
          <h2 className=" px-2 lg:text-6xl">
            404 Page Not found. Click on Text to go back
          </h2>
          <ArrowUpRightSquare />
        </div>
      </Link>
    </div>
  );
}
