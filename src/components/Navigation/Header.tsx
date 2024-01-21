"use client";

import Link from "next/link";
import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";

function Header() {
  return (
    <div className="flex justify-center fixed top-0 backdrop-blur-lg w-full items-center">
      <div className="w-11/12 border-b-[2px] border-[white]/[0.1] flex mt-1 justify-between items-center py-4">
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
            href="https://github.com/HimanshuJain04/getTextFromImage"
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
