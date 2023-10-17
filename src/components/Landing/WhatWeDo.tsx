import React from "react";
import { Card, CardFooter } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

const WhatWeDo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <Card className="bg-primary rounded-none border-none px-8 h-full flex items-center ">
        <ol className="flex gap-y-7 text-lg text-white font-semibold flex-col justify-center">
          <li>
            <span className="">1. </span>
            Translate your analytics initiatives into a well-designed plan of
            action.
          </li>
          <li>
            <span className="">2. </span>
            Ensure your analytics ecosystem is running at its full potential.
          </li>
          <li>
            <span className="">3. </span>
            Get certified on your favourite technologies through an official
            training partner.
          </li>
          <li>
            <span className="">4. </span>
            Learn the skills & tools you need in today&apos;s vast data
            environment.
          </li>

          <li>
            <span className="">5. </span>Easily navigate your licensing
            structure and renewals.
          </li>
        </ol>
      </Card>
      <Card className=" rounded-none border-none flex justify-center items-center">
        <div className="w-full h-full relative">
          <h1 className="text-center py-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl space-y-5 font-extrabold">
            <span className="bg-clip-text bg-gradient-to-r text-primary">
              ADVISORY SERVICES
            </span>
          </h1>
          <div className="font-bold items-center flex justify-center">
            <Image
              src={"/assets/images/report.svg"}
              alt="analytics gif"
              width={100}
              height={100}
              className="w-80 h-80 md:w-full md:h-full"
            />
            <div className="absolute -z-20 w-[60%] h-[60%] rounded-full green__gradient bottom-40" />
          </div>
        </div>
      </Card>
      <Card className=" rounded-none border-none  flex justify-center items-center">
        <div className="w-full h-full  relative">
          <h1 className="text-center py-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl space-y-5 font-extrabold">
            <span className="bg-clip-text bg-gradient-to-r text-primary">
              DEVELOPMENT SERVICES
            </span>
          </h1>

          <div className="font-bold items-center flex justify-center">
            <Image
              src={"/assets/images/Statistics.svg"}
              alt="analytics gif"
              width={100}
              height={100}
              className="w-80 h-80 md:w-full md:h-full"
            />
            <div className="absolute -z-20 w-[60%] h-[60%] rounded-full green__gradient bottom-40" />
          </div>
        </div>
      </Card>
      <Card className="bg-primary rounded-none border-none px-8 h-full flex justify-center flex-col">
        <ol className="flex gap-y-7 text-lg text-white font-semibold flex-col justify-center">
          <li>
            <span className="">1. </span>
            Deploy and Implement using proven models and modern architecture.
          </li>
          <li>
            <span className="">2. </span>
            Get access to our team of data experts to keep driving your
            analytics program forward.
          </li>
          <li>
            <span className="">3. </span>
            Our data engineers secure your analytics assets by guiding your
            transition to the cloud.
          </li>
          <li>
            <span className="">4. </span>
            Maintain your analytics environment by keeping up with software
            updates and patches.
          </li>

          <li>
            <span className="">5. </span>Easily navigate your licensing
            structure and renewals.
          </li>
        </ol>
      </Card>
    </div>
  );
};

export default WhatWeDo;
