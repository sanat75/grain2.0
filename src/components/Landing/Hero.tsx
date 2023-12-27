"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Wrapper from "../Container/Wrapper";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const textVariants = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="h-full w-full flex items-center flex-row justify-between bg-primary"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="relative w-full h-full ">
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          variants={imageVariants}
          className="object-cover w-full h-full "
        >
          {/* <Image
            alt="analytics background image"
            src={"/assets/Hero/main-1.png"}
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
          /> */}
          <video autoPlay loop muted className="object-cover w-full h-full ">
            <source src="/assets/videos/home-screen.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>

      <Wrapper className="absolute">
        <motion.div
          variants={textVariants}
          className="font-bold pt-10 md:pt-32 space-y-5  "
        >
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl space-y-5 font-extrabold text-white">
            <h1>
              Revitalizing Data Insights with{" "}
              <span className="text-primary">Innovation.</span>{" "}
            </h1>
          </div>
          <div className="text-sm md:text-lg font-medium text-white">
            <p> Pioneering the Age of Data Science and AI Advancements.</p>
            <p>
              We assist organizations in harnessing their data potential by
              combining strategic insight with development proficiency.
            </p>
          </div>
          <div>
            <Link href={"/contact"}>
              <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <Button className="md:text-lg p-4 text-white md:p-6 font-semibold flex gap-2 hover:scale-105 transition-all">
                  <span>Book a demo</span>
                  <span>
                    <ArrowRight />
                  </span>
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </Wrapper>
    </motion.div>
  );
};

export default Hero;
