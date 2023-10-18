import React from "react";
import Wrapper from "../Container/Wrapper";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className="min-h-[350px] md:min-h-[550px] w-full flex flex-col justify-center items-center md:flex-row md:justify-between px-4 bg-gradient-emerald">
      <div className="w-full max-w-screen-xl px-2.5 md:px-12 flex justify-between items-center">
        <div className="font-bold  text-center md:text-start md:w-1/2">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-extrabold text-white">
            <h1>
              WE TRANSFORM{" "}
              <span className="bg-clip-text bg-gradient-to-r text-black">
                ORGANIZATIONS.
              </span>{" "}
            </h1>
          </div>
          <div className="text-zinc-100 text-xs md:text-sm font-normal pt-14">
            At GRAIN ANALYTICS, we pride ourselves in being there every step of
            the way. Our service portfolio ensures we can tackle any project,
            from strategy to implementation – we have seen it all. We have a
            simple formula to help you win: define the goal, find the gaps, then
            match you with the right people, processes, and tools to get there –
            coaching you the entire way.
          </div>
          <div className="w-full flex justify-end pt-4">
            <Button
              variant={"outline"}
              className="text-white flex gap-2 items-center hover:scale-105 transition-all"
            >
              <span>Work With us</span>
              <span>
                <ArrowRight />
              </span>
            </Button>
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2 h-full justify-end items-center">
          <Image
            alt="growth image"
            src={"/assets/images/growth.svg"}
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
