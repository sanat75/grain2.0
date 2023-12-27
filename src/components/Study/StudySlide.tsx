"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Casetudy } from "@/utils/Data/Casetudy";
import Image from "next/image";

const StudySlide = () => {
  const [currentItem, setCurrentItem] = useState(0);

  const nextItem = () => {
    setCurrentItem((prev) => (prev + 1) % Casetudy.length);
  };

  const prevItem = () => {
    setCurrentItem(
      (prevItem) => (prevItem - 1 + Casetudy.length) % Casetudy.length
    );
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentItem(slideIndex);
  };

  return (
    <div className="max-w-5xl h-[700px] w-full m-auto py-16 px-4 relative group">
      {Casetudy.map((item, index) => (
        <div
          key={index}
          className={`${
            currentItem === index
              ? "w-full h-full flex flex-col items-center justify-center transition-all duration-500 ease-in-out  bg-white shadow-2xl border px-3 md:p-10 rounded-3xl slide-fade active"
              : "hidden"
          }`}
        >
          <div className="w-full h-2/5 flex justify-evenly  flex-col">
            <Image
              src={item.image}
              alt={item.title}
              width={100}
              height={100}
              className="p-4 w-full h-48 object-fill rounded-lg grayscale-0"
            />
            <h1 className="text-lg px-4 font-bold md:px-0 text-black">
              {item.title}
            </h1>
            <h1 className="text-lg px-4 md:px-0 text-black">{item.type}</h1>
          </div>
          <div className=" md:p-10 rounded-3xl  h-1/2 px-4 py-1">
            <p className="hidden md:block">{item.content}</p>
            <p className="md:hidden mt-4">{item.content}</p>
          </div>
        </div>
      ))}
      <div className="sm:hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 left-0 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevItem} size={30} />
      </div>

      <div className="sm:hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 right-0 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextItem} size={30} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {Casetudy.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              slideIndex === currentItem ? "text-primary" : "text-black"
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudySlide;
