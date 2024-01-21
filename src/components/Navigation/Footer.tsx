"use client";
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="w-11/12  border-t-[2px] font-semibold text-white border-[white]/[0.1] flex mt-1 justify-center items-center py-4">
        <p className="text-center">
          Build with{" "}
          <Link
            href="https://tesseract.projectnaptha.com/"
            className="text-orange-400 underline"
          >
            tesseract.js
          </Link>{" "}
          by Himanshu
        </p>
      </div>
    </div>
  );
}

export default Footer;
