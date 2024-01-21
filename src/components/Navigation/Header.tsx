import Link from "next/link";
import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";

function Header() {
  return (
    <div className="flex justify-center static top-0 items-center">
      <div className="w-11/12 flex mt-2 justify-between items-center py-3">
        <div>
          <Link
            href="/"
            className="text-3xl font-sans font-extrabold text-white"
          >
            Get Text
          </Link>
        </div>

        <div>
          <Link
            href="/github"
            className="text-xl px-4 py-2 flex justify-center items-center gap-1 bg-white rounded-lg font-bold text-black"
          >
            <p>Github</p>
            <ImArrowUpRight2 />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
