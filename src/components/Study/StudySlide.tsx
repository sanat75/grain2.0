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
    <div className="max-w-5xl h-[475px] w-full m-auto py-16 px-4 relative group">
      {Casetudy.map((item, index) => (
        <div
          key={index}
          className={`${
            currentItem === index
              ? "w-full h-full flex flex-col items-center justify-center transition-all duration-500 ease-in-out bg-primary-secondary/10 px-3 md:p-10 rounded-3xl slide-fade active"
              : "hidden"
          }`}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={100}
            height={100}
            className="p-4 w-32 h-32"
          />
          <h1 className="text-center text-xl font-bold px-10 md:px-0 text-black">
            {item.title}
          </h1>
          <div className=" md:p-10 rounded-3xl">
            {/* in small screen show only 30 word  */}

            <p className="hidden md:block">{item.content}</p>
            <p className="md:hidden text-center mt-4">
              {item.content.slice(0, 130)}...
            </p>
          </div>
        </div>
      ))}
      <div className="sm:hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevItem} size={30} />
      </div>

      <div className="sm:hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
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
