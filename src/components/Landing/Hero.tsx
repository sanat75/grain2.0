"use client";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Wrapper from "../Container/Wrapper";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
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

  useEffect(() => {
    // Ensure that the videoRef is defined before accessing its properties
    if (videoRef.current) {
      // Add an event listener to handle cases where the user interacts with the video before the timeout
      const handleUserInteraction = () => {
        videoRef.current?.play().catch((error) => {
          // Handle autoplay error (e.g., due to user interaction requirements)
          console.error("Autoplay error:", error);
        });

        // Remove the event listener once the video starts playing
        document.removeEventListener("click", handleUserInteraction);
      };

      // Delayed autoplay after 2 seconds
      const timeoutId = setTimeout(() => {
        // Attempt to play the video
        videoRef.current?.play().catch((error) => {
          // Handle autoplay error (e.g., due to user interaction requirements)
          console.error("Autoplay error:", error);

          // Add an event listener for user interaction (e.g., click) to play the video
          document.addEventListener("click", handleUserInteraction);
        });
      }, 2000);

      // Clear the timeout and remove the event listener on component unmount
      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener("click", handleUserInteraction);
      };
    }
  }, []);
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
          <video
            ref={videoRef}
            poster="/assets/videos/home-screen.png"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="/assets/videos/home-screen.webm" type="video/webm" />
            <source
              src="https://utfs.io/f/7fd3ed86-8251-4e01-bbfb-e4532cc4902a-rpwk4m.webm"
              type="video/webm"
            />
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
            <Link
              target="_blank"
              href={"https://calendly.com/grainanalytics1/30min"}
            >
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
