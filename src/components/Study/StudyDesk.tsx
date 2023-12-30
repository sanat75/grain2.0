import React from "react";
import Wrapper from "../Container/Wrapper";
import Image from "next/image";
import { Casetudy } from "@/utils/Data/Casetudy";

const StudyDesk = () => {
  return (
    <div className="hidden py-1 sm:max-w-7xl sm:mx-auto w-full px-2 sm:px-0 sm:flex min-h-[400px] justify-center flex-wrap items-center overflow-hidden gap-10 mt-10">
      {Casetudy.map((item) => (
        <div className="card border shadow-xl" key={item.id}>
          <div className="imgbox">
            <Image
              width={100}
              height={100}
              alt="study desk"
              className="cardImage"
              src={item.image}
            />
          </div>

          <div className="content p-3">
            <h2 className="text-primary font-bold ">{item.title}</h2>
            <div className="w-3/5 bg-primary-secondary h-[2px] my-4"></div>
            <p className="text-gray-600">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudyDesk;
