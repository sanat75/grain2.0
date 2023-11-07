"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image from "next/image";
import { Button } from "../ui/button";
interface WhatWeDoDetailCardProps {
  color?: string;
  list: string[];
}
const ADVISORYLIST = [
  "Deploy and Implement using proven models and modern architecture.",
  "Get access to our team of data experts to keep driving your analytics program forward.",
  "Our data engineers secure your analytics assets by guiding your transition to the cloud.",
  "Maintain your analytics environment by keeping up with software updates and patches.",
  "Easily navigate your licensing structure and renewals.",
  "font-boldEasily navigate your licensing structure and renewals.",
];

const IMPLEMENTATIONLIST = [
  "Deploy and Implement using proven models and modern architecture.",
  "Get access to our team of data experts to keep driving your analytics program forward.",
  "Our data engineers secure your analytics assets by guiding your transition to the cloud.",
  "Maintain your analytics environment by keeping up with software updates and patches.",
  "Easily navigate your licensing structure and renewals.",
  "font-boldEasily navigate your licensing structure and renewals.",
];
const WhatWeDoDetailCard = ({ list, color }: WhatWeDoDetailCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const listItemVariants = {
    hidden: {
      opacity: 0,
      y: 20, // Add some initial y-offset for a smooth entrance
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5, // Add a delay to the button animation
        duration: 0.5,
      },
    },
  };

  return (
    <div
      className={` ${color} rounded-none border-none px-8 w-full md-w-1/2 py-4 min-h-[650px] flex justify-center flex-col`}
    >
      <motion.ol
        className="grid grid-col-1 md:grid-cols-3 gap-8"
        ref={ref}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }} // Adjust the stagger duration
      >
        {list.map((item, index) => (
          <motion.li
            key={index}
            variants={listItemVariants}
            className="flex flex-col text-white text-sm"
          >
            <span className="text-xl font-bold">{index + 1}. </span>
            {item}
          </motion.li>
        ))}
      </motion.ol>
      <motion.div
        variants={buttonVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Button variant={"outline"} className="w-44 mt-20 text-white rounded">
          LEARN MORE
        </Button>
      </motion.div>
    </div>
  );
};
const WhatWeDo = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const listVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <div className="w-full flex flex-col md:flex-row-reverse">
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={listVariants}
          className="w-full md:w-1/2 h-[300px] md:min-h-[650px] rounded-none border-none flex justify-center items-center"
        >
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
        </motion.div>
        <WhatWeDoDetailCard list={ADVISORYLIST} color="bg-gradient-emerald" />
      </div>
      <div className="w-full flex flex-col md:flex-row">
        <motion.div
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={listVariants}
          className="w-full md:w-1/2 h-[300px] md:min-h-[650px] rounded-none border-none flex justify-center items-center"
        >
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
            DEVELOPMENT SERVICES
          </div>
        </motion.div>
        <WhatWeDoDetailCard
          list={IMPLEMENTATIONLIST}
          color="bg-primary-secondary"
        />
      </div>
    </>
  );
};

export default WhatWeDo;
