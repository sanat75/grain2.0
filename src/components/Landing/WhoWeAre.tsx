"use client";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

import Wrapper from "../Container/Wrapper";

const WhoWeAre = () => {
  return (
    <Wrapper>
      <motion.div
        initial="hidden"
        className="min-h-[220px] md:min-h-[650px] mt-8 sm:mt-0 w-full flex flex-col justify-center items-center md:flex-row md:justify-between px-4"
      >
        <div className="w-full max-w-screen-xl  flex justify-between  items-center">
          <div className="font-bold md:text-start md:w-1/2">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
              <h1>
                WE TRANSFORM{" "}
                <span className="bg-clip-text bg-gradient-to-r text-primary">
                  ORGANIZATIONS.
                </span>{" "}
              </h1>
            </div>
            <div className="text-zinc-600 text-sm md:text-sm font-normal pt-4 md:pt-8">
              At GRAIN ANALYTICS, we pride ourselves in being there every step
              of the way. We have a simple formula to help you win: define the
              goal, find the gaps, then match you with the right people,
              processes, and tools to get there – coaching you the entire way.
            </div>
          </div>
          <div className="hidden md:flex md:w-1/2 h-full justify-end items-center">
            <Image
              alt="growth image"
              src={"/assets/images/graincomman.avif"}
              width={500}
              height={500}
            />
          </div>
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default WhoWeAre;
