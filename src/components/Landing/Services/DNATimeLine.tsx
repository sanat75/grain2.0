"use client";
import Wrapper from "@/components/Container/Wrapper";
import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { DotIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const DNATimeLine = () => {
  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  const cardVariants1 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const buttonVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    delay: 100,
    threshold: 0.5,
  });

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    delay: 100,
    threshold: 0.7,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    delay: 100,
    threshold: 0.7,
  });
  const Router = useRouter();
  return (
    <Wrapper>
      <ol className="items-center sm:flex overflow-hidden">
        <motion.li
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
          className="relative mb-6 sm:mb-0"
        >
          {/* <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full animate-pulse ring-emerald-300 shrink-0">
              <DotIcon className="text-primary h-6 w-6" />
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div> */}
          <motion.div variants={textVariants}>
            <div className="border mt-3 sm:pr-8 p-4 mr-3 mb-3 rounded-2xl bg-primary-secondary">
              <h3 className="text-2xl my-2 font-semibold text-primary">
                Customer Analytics
              </h3>
              <motion.p
                variants={textVariants}
                className="font-normal text-white text-sm "
              >
                Get access to our team of data experts to keep driving your
                analytics program forward. Our data engineers secure your
                analytics assets by guiding your transition to the cloud.
              </motion.p>
              <div className="flex w-full flex-wrap justify-between gap-y-2">
                <motion.div variants={buttonVariants}>
                  <Button
                    variant={"outline"}
                    className="mt-5 border-primary text-primary hover:bg-primary hover:text-white transition-all ease-in-out"
                  >
                    <svg
                      className="w-3 h-3"
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
              </div>
            </div>
          </motion.div>
        </motion.li>
        <motion.li
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={cardVariants1}
          className="relative mb-6 sm:mb-0"
        >
          {/* <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full animate-pulse ring-emerald-300 shrink-0">
              <DotIcon className="text-primary h-6 w-6" />
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div> */}
          <motion.div variants={textVariants}>
            <div className="border mt-3 sm:pr-8 p-4 mr-3 mb-3 rounded-2xl bg-blue-950">
              <h3 className="text-2xl my-2 font-semibold text-primary-secondary">
                Retail Analytics
              </h3>
              <motion.p
                variants={textVariants}
                className="font-normal text-white text-sm"
              >
                Get access to our team of data experts to keep driving your
                analytics program forward. Our data engineers secure your
                analytics assets by guiding your transition to the cloud.
              </motion.p>
              <div className="flex w-full flex-wrap justify-between gap-y-2">
                <motion.div variants={buttonVariants}>
                  <Button
                    variant={"outline"}
                    className="mt-5 border-primary text-primary hover:bg-primary hover:text-white transition-all ease-in-out"
                    onClick={() => Router.push("/services/retailanalytics")}
                  >
                    <svg
                      className="w-3 h-3"
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
              </div>
            </div>
          </motion.div>
        </motion.li>
        <motion.li
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={cardVariants}
          className="relative mb-6 sm:mb-0"
        >
          {/* <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full animate-pulse ring-emerald-300 shrink-0">
              <DotIcon className="text-primary h-6 w-6" />
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div> */}
          <motion.div variants={textVariants}>
            <div className="border mt-3 sm:pr-8 p-4 mr-3 mb-3 rounded-2xl bg-primary-secondary">
              <h3 className="text-2xl my-2 font-semibold text-primary">
                Customer Analytics
              </h3>
              <motion.p
                variants={textVariants}
                className="font-normal text-white text-sm"
              >
                Get access to our team of data experts to keep driving your
                analytics program forward. Our data engineers secure your
                analytics assets by guiding your transition to the cloud.
              </motion.p>
              <div className="flex w-full flex-wrap justify-between gap-y-2">
                <motion.div variants={buttonVariants}>
                  <Button
                    variant={"outline"}
                    className="mt-5 border-primary text-primary hover:bg-primary hover:text-white transition-all ease-in-out"
                  >
                    <svg
                      className="w-3 h-3"
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
              </div>
            </div>
          </motion.div>
        </motion.li>
      </ol>
    </Wrapper>
  );
};

export default DNATimeLine;
