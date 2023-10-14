import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-full w-full flex flex-col-reverse justify-center items-center md:flex-row md:justify-between px-4">
      <div className="w-full h-full  md:w-1/2">
        <div className="font-bold pt-10 md:pt-32 text-center md:text-start space-y-5">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl space-y-5 font-extrabold">
            <h1>
              Revitalizing Data Insights with{" "}
              <span className="bg-clip-text bg-gradient-to-r text-primary">
                Innovation.
              </span>{" "}
            </h1>
          </div>
          <div className="text-sm md:text-xl font-light text-zinc-600">
            Pioneering the Age of Data Science and AI Advancements.
          </div>
          <div className="text-zinc-600 text-xs md:text-sm font-normal">
            We assist organizations in harnessing their data potential by
            combining strategic insight with development proficiency.
          </div>
          <div>
            <Link href={"/signin"}>
              <Button className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-full  md:w-1/2 relative">
        <div className="font-bold items-center md:pt-32 flex justify-center space-y-5">
          <Image
            src={"/assets/images/Metrics.svg"}
            alt="analytics gif"
            width={100}
            height={100}
            className="w-96 h-96 md:w-full md:h-full  "
          />
          <div className="absolute -z-20 w-[60%] h-[60%] rounded-full green__gradient bottom-40" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
