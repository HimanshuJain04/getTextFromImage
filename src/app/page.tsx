"use client";

import { FaImage } from "react-icons/fa6";
import React, { useRef, useState } from "react";
import convertToText from "@/lib/convertor";

export default function Home() {
  const inputRef: any = useRef(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Array<string>>([]);

  const selectImage = () => {
    inputRef.current?.click();
  };

  const convertor = async (url: string) => {
    try {
      setLoading(true);
      const result = await convertToText(url);

      const copyData = data;
      copyData.unshift(result);
      setData(copyData);
    } catch (err) {
      console.log("Error When Converting");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center my-20 min-h-screen items-center w-full">
      <div className="flex flex-col mt-10 gap-10 justify-start items-center w-11/12">
        {/* heading */}
        <div>
          <p className="text-6xl text-white font-extrabold ">
            Build With{" "}
            <span className="bg-gradient-to-r from-blue-500 via-green-500 bg-clip-text text-transparent to-indigo-400">
              Tesseract Js
            </span>
          </p>
        </div>

        {/* image section */}
        <div onClick={selectImage} className="w-full">
          <div className="bg-[white]/[0.15] cursor-pointer rounded-2xl w-full gap-5 h-[400px] flex-col flex justify-center items-center">
            <p className="text-3xl text-[white]/[0.3] font-bold">
              {loading ? "Processing...." : "Browse or Drop Your Image Here "}
            </p>
            <input
              type="file"
              required
              hidden
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.files) {
                  const url: string = URL.createObjectURL(e.target.files[0]);
                  convertor(url);
                }
              }}
              ref={inputRef}
            />
            <div className="text-[150px]">
              <FaImage className={`${loading ? "animate-ping" : ""}`} />
            </div>
          </div>
        </div>

        {/* results */}
        <div className="w-full mt-20 flex flex-col gap-10">
          {data?.map((data, index) => (
            <div
              key={data}
              className="text-start text-white w-full flex flex-col gap-3"
            >
              {/* date and button */}
              <div className="flex justify-between px-5 py-2 items-center w-full">
                <p className="text-xl">
                  <span>({index + 1}) </span>
                  {new Date().toUTCString()}
                </p>
                <button className="bg-white px-7 hover:bg-[white]/[0.8] transition-all duration-300 ease-in-out py-3 text-black font-semibold rounded-xl">
                  Copy
                </button>
              </div>

              <div className="bg-[white]/[0.15] rounded-2xl overflow-hidden">
                <textarea
                  defaultValue={data}
                  className="w-full p-5 outline-none rounded-2xl overflow-auto bg-transparent resize-none max-h-[400px] min-h-[400px]"
                ></textarea>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
