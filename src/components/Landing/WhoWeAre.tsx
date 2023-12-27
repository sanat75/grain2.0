"use client";
import React from "react";

import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Wrapper from "../Container/Wrapper";

const WhoWeAre = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, type: "spring", bounce: 0.5 },
    },
  };

  // Trigger the animation when inView becomes true
  if (inView) {
    controls.start("visible");
  }

  return (
    <Wrapper>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={animationVariants}
        className="min-h-[320px] md:min-h-[650px] mt-8 sm:mt-0 w-full flex flex-col justify-center items-center md:flex-row md:justify-between px-4"
      >
        <div className="w-full max-w-screen-xl  flex justify-between  items-center">
          <div className="font-bold text-center md:text-start md:w-1/2">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
              <h1>
                WE TRANSFORM{" "}
                <span className="bg-clip-text bg-gradient-to-r text-primary">
                  ORGANIZATIONS.
                </span>{" "}
              </h1>
            </div>
            <div className="text-zinc-600 text-sm md:text-sm font-normal pt-4 md:pt-14">
              At GRAIN ANALYTICS, we pride ourselves in being there every step
              of the way. Our service portfolio ensures we can tackle any
              project, from strategy to implementation – we have seen it all. We
              have a simple formula to help you win: define the goal, find the
              gaps, then match you with the right people, processes, and tools
              to get there – coaching you the entire way.
            </div>
            {/* <div className="w-full flex pt-4 justify-center sm:justify-start">
              <Button className="text-white bg-primary-secondary flex gap-2 items-center hover:scale-105 transition-all">
                <span>Work With us</span>
                <span>
                  <ArrowRight />
                </span>
              </Button>
            </div> */}
          </div>
          <div className="hidden md:flex md:w-1/2 h-full justify-end items-center">
            <Image
              alt="growth image"
              src={"/assets/images/report.jpg"}
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
