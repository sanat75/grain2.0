import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center md:flex-row md:justify-between px-4">
      <div className="w-full h-full md:w-1/2">
        <div className="font-bold pt-10 md:pt-32 text-center md:text-start space-y-5 ">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl space-y-5 font-extrabold">
            <h1>
              WE TRANSFORM{" "}
              <span className="bg-clip-text bg-gradient-to-r text-primary">
                ORGANIZATIONS.
              </span>{" "}
            </h1>
          </div>

          <div className="text-zinc-600 text-xs md:text-sm font-normal">
            At GRAIN ANALYTICS, we pride ourselves in being there every step of
            the way. Our service portfolio ensures we can tackle any project,
            from strategy to implementation – we have seen it all. We have a
            simple formula to help you win: define the goal, find the gaps, then
            match you with the right people, processes, and tools to get there –
            coaching you the entire way.
          </div>
        </div>
      </div>
      <div className="w-full h-full  md:w-1/2 relative">
        <div className="font-bold items-center md:pt-32 flex justify-center space-y-5">
          <Image
            src={"/assets/images/Growth-analytics.svg"}
            alt="analytics gif"
            width={100}
            height={100}
            className="w-80 h-80 md:w-full md:h-full"
          />
          <div className="absolute -z-20 w-[60%] h-[60%] rounded-full green__gradient bottom-40" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
