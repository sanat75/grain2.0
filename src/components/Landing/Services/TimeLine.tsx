"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Wrapper from "@/components/Container/Wrapper";
import { Button, buttonVariants } from "@/components/ui/button";

const TimeLine = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    delay: 0.5,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };
  const buttonVariant = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5, // Add a delay for the button animation
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <Wrapper>
      <ol className="relative border-l mb-10">
        <li className="mb-10 ml-4 py-3" ref={ref}>
          <motion.div
            className="absolute  mt-2 -left-3 border gray-900  z-10 flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full ring-0 animate-pulse ring-emerald-300  sm:ring-8  shrink-0"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
          >
            <svg
              className="w-2.5 h-2.5 text-primary dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </motion.div>
          <motion.h3
            className="text-lg font-semibold text-gray-900 dark:text-white ml-2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
          >
            Customer Analytics
          </motion.h3>
          <motion.p
            className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
          >
            Get access to our team of data experts to keep driving your
            analytics program forward. Our data engineers secure your analytics
            assets by guiding your transition to the cloud.
          </motion.p>
          <div className="flex w-full flex-wrap justify-between gap-y-2">
            <motion.p
              className="w-1/2 text-primary text-sm"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
            >
              <span className="font-semibold text-lg">1.</span> Conversation
              Rate Modeling
            </motion.p>
            <motion.p
              className="w-1/2 text-primary text-sm"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
            >
              <span className="font-semibold text-lg">2.</span> Customer
              Lifetime value
            </motion.p>
            <motion.p
              className="w-1/2 text-primary text-sm"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
            >
              <span className="font-semibold text-lg">3.</span> Customer Churn
              Prediction
            </motion.p>
          </div>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={buttonVariant}
          >
            <Button variant={"outline"} className="mt-2">
              Learn more{" "}
              <svg
                className="w-3 h-3 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Button>
          </motion.div>
        </li>
        <li className="mb-10 ml-4 py-3" ref={ref}>
          <motion.div
            className="absolute  mt-2 -left-3 border gray-900  z-10 flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full ring-0 animate-pulse ring-emerald-300  sm:ring-8  shrink-0"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
          >
            <svg
              className="w-2.5 h-2.5 text-primary dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </motion.div>
          <motion.h3
            className="text-lg font-semibold text-gray-900 dark:text-white ml-2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
          >
            Operational Analytics
          </motion.h3>
          <motion.p
            className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
          >
            Get access to our team of data experts to keep driving your
            analytics program forward. Our data engineers secure your analytics
            assets by guiding your transition to the cloud.
          </motion.p>
          <div className="flex w-full flex-wrap justify-between gap-y-2">
            <motion.p
              className="w-1/2 text-primary text-sm"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
            >
              <span className="font-semibold text-lg">1.</span> Conversation
              Rate Modeling
            </motion.p>
            <motion.p
              className="w-1/2 text-primary text-sm"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
            >
              <span className="font-semibold text-lg">2.</span> Customer
              Lifetime value
            </motion.p>
            <motion.p
              className="w-1/2 text-primary text-sm"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
            >
              <span className="font-semibold text-lg">3.</span> Customer Churn
              Prediction
            </motion.p>
          </div>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={buttonVariant}
          >
            <Button variant={"outline"} className="mt-2">
              Learn more{" "}
              <svg
                className="w-3 h-3 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Button>
          </motion.div>
        </li>
        <li className="mb-10 ml-4 py-3" ref={ref}>
          <motion.div
            className="absolute  mt-2 -left-3 border gray-900  z-10 flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full ring-0 animate-pulse ring-emerald-300  sm:ring-8  shrink-0"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
          >
            <svg
              className="w-2.5 h-2.5 text-primary dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </motion.div>
          <motion.h3
            className="text-lg font-semibold text-gray-900 dark:text-white ml-2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
          >
            Pricing Analytics
          </motion.h3>
          <motion.p
            className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
          >
            Our data engineers secure your analytics assets by guiding your
            transition to the cloud. Our data engineers secure your analytics
            assets by guiding your transition to the cloud.
          </motion.p>
          <div className="flex w-full flex-wrap justify-between gap-y-2">
            <motion.p
              className="w-1/2 text-primary text-sm"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
            >
              <span className="font-semibold text-lg">1.</span> Conversation
              Rate Modeling
            </motion.p>
            <motion.p
              className="w-1/2 text-primary text-sm"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
            >
              <span className="font-semibold text-lg">2.</span> Customer
              Lifetime value
            </motion.p>
            <motion.p
              className="w-full sm:w-1/2 md:w-1/3 text-primary text-sm"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
            >
              <span className="font-semibold text-lg">3.</span> Customer Churn
              Prediction
            </motion.p>
          </div>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={buttonVariant}
          >
            <Button variant={"outline"} className="mt-2">
              Learn more{" "}
              <svg
                className="w-3 h-3 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Button>
          </motion.div>
        </li>
        {/* Repeat the same pattern for other list items */}
      </ol>
    </Wrapper>
  );
};

export default TimeLine;
