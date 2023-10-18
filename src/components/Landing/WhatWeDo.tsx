import React from "react";
import { Card, CardFooter } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

const WhatWeDo = () => {
  return (
    <>
      <div className="w-full flex flex-col-reverse md:flex-row">
        <Card className="bg-gradient-emerald rounded-none border-none px-8 w-full md:w-1/2 py-4 min-h-[650px] flex justify-center flex-col">
          <ol className="grid grid-col-1 md:grid-cols-3 gap-8">
            <li className="flex flex-col text-white text-sm">
              <span className="text-xl font-bold">1. </span>
              Deploy and Implement using proven models and modern architecture.
            </li>
            <li className="flex flex-col text-white text-sm">
              <span className="text-xl font-bold">2. </span>
              Get access to our team of data experts to keep driving your
              analytics program forward.
            </li>
            <li className="flex flex-col text-white text-sm">
              <span className="text-xl font-bold">3. </span>
              Our data engineers secure your analytics assets by guiding your
              transition to the cloud.
            </li>
            <li className="flex flex-col text-white text-sm">
              <span className="text-xl font-bold">4. </span>
              Maintain your analytics environment by keeping up with software
              updates and patches.
            </li>

            <li className="flex flex-col text-white text-sm">
              <span className="text-xl">5. </span> font-boldEasily navigate your
              licensing structure and renewals.
            </li>
          </ol>
          <Button variant={"outline"} className="w-44 mt-20 text-white rounded">
            LEARN MORE
          </Button>
        </Card>
        <Card className="w-full md:w-1/2 h-[300px] md:min-h-[650px] rounded-none border-none flex justify-center items-center">
          <div className="w-full h-full relative">
            <Image
              src={"/assets/WhatWeDo/do1.png"}
              alt="analytics"
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute  text-3xl sm:text-4xl md:text-5xl lg:text-6xl space-y-5 font-extrabold text-white border-white border-4">
            ADVISORY SERVICES
          </div>
        </Card>
      </div>
      <div className="w-full flex flex-col md:flex-row">
        <Card className="w-full md:w-1/2 h-[300px] md:min-h-[650px] rounded-none border-none flex justify-center items-center">
          <div className="w-full h-full relative">
            <Image
              src={"/assets/WhatWeDo/do2.png"}
              alt="analytics"
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute  text-3xl sm:text-4xl md:text-5xl lg:text-6xl space-y-5 font-extrabold text-white border-white border-4">
            ADVISORY SERVICES
          </div>
        </Card>
        <Card className="bg-primary-secondary rounded-none border-none px-8 w-full md:w-1/2 py-4 min-h-[650px] flex justify-center flex-col">
          <ol className="grid grid-col-1 md:grid-cols-3 gap-8">
            <li className="flex flex-col text-white text-sm">
              <span className="text-xl font-bold">1. </span>
              Deploy and Implement using proven models and modern architecture.
            </li>
            <li className="flex flex-col text-white text-sm">
              <span className="text-xl font-bold">2. </span>
              Get access to our team of data experts to keep driving your
              analytics program forward.
            </li>
            <li className="flex flex-col text-white text-sm">
              <span className="text-xl font-bold">3. </span>
              Our data engineers secure your analytics assets by guiding your
              transition to the cloud.
            </li>
            <li className="flex flex-col text-white text-sm">
              <span className="text-xl font-bold">4. </span>
              Maintain your analytics environment by keeping up with software
              updates and patches.
            </li>

            <li className="flex flex-col text-white text-sm">
              <span className="text-xl">5. </span> font-boldEasily navigate your
              licensing structure and renewals.
            </li>
          </ol>
          <Button variant={"outline"} className="w-44 mt-20 text-white rounded">
            LEARN MORE
          </Button>
        </Card>
      </div>
    </>
  );
};

export default WhatWeDo;
