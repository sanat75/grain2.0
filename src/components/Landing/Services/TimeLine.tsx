"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Wrapper from "@/components/Container/Wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";

// ! suttle animation
const animationVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const TimeLine = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const Router = useRouter();
  return (
    <motion.div
      className="flex flex-col justify-center"
      variants={animationVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
    >
      <div className="py-1 sm:max-w-6xl sm:mx-auto w-full px-2 sm:px-0">
        <div className="relative text-gray-700  antialiased text-sm font-semibold">
          <div className="hidden sm:block w-1 bg-yellow-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

          {/* Left section */}
          <motion.div
            className="mt-6 sm:mt-0 sm:mb-12"
            variants={animationVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
          >
            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex justify-start w-full mx-auto items-center">
                <div className="w-full sm:w-1/2 sm:pr-8">
                  <motion.div
                    className="p-4 transition-all fade-in-60 hover:bg-primary rounded-2xl shadow border bg-[#071C33]"
                    variants={animationVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    ref={ref}
                  >
                    <h1 className="text-xl text-white underline mb-3 font-semibold">
                      Customer Analytics
                    </h1>
                    <p className="text-white text-sm font-normal">
                      Get access to our team of data experts to keep driving
                      your analytics program forward. Our data engineers secure
                      your analytics assets by guiding your transition to the
                      cloud.
                    </p>
                    <div className="text-white text-sm font-normal mt-3">
                      <p>
                        <span className="font-semibold text-lg">1.</span>{" "}
                        Conversation Rate Modeling
                      </p>
                      <p>
                        <span className="font-semibold text-lg">2.</span>{" "}
                        Customer Lifetime value
                      </p>
                      <p>
                        <span className="font-semibold text-lg">3.</span>{" "}
                        Customer Churn Prediction
                      </p>
                    </div>
                    <Button
                      onClick={() => Router.push("/services/customeranalytics")}
                      variant={"outline"}
                      className="border text-white mt-3 hover:border-primary-secondary hover:bg-primary-secondary hover:text-white-secondary transition-all "
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </div>
              </div>
              <div className="rounded-full bg-yellow-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                <ChevronDown className="text-white" />
              </div>
            </div>
          </motion.div>

          {/* Right section */}
          <motion.div
            className="mt-10 sm:mt-0 sm:mb-12"
            variants={animationVariants}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            ref={ref1}
          >
            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex justify-end w-full mx-auto items-center">
                <div className="w-full sm:w-1/2 sm:pl-8">
                  <motion.div
                    className="p-4 bg-primary-secondary rounded-2xl shadow border"
                    variants={animationVariants}
                    initial="hidden"
                    animate={inView1 ? "visible" : "hidden"}
                    ref={ref}
                  >
                    <h1 className="text-xl text-white underline mb-3 font-semibold">
                      Retail Analytics
                    </h1>
                    <p className="text-white text-sm font-normal">
                      Get access to our team of data experts to keep driving
                      your analytics program forward. Our data engineers secure
                      your analytics assets by guiding your transition to the
                      cloud.
                    </p>
                    <div className="text-white text-sm font-normal mt-3">
                      <p>
                        <span className="font-semibold text-lg">1.</span>{" "}
                        Conversation Rate Modeling
                      </p>
                      <p>
                        <span className="font-semibold text-lg">2.</span>{" "}
                        Customer Lifetime value
                      </p>
                      <p>
                        <span className="font-semibold text-lg">3.</span>{" "}
                        Customer Churn Prediction
                      </p>
                    </div>
                    <Button
                      onClick={() => Router.push("/services/retailanalytics")}
                      variant={"outline"}
                      className="border text-white mt-3 hover:border-primary-secondary hover:bg-primary hover:text-white-secondary transition-all "
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </div>
              </div>
              <div className="rounded-full bg-yellow-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                <ChevronDown className="text-white" />
              </div>
            </div>
          </motion.div>

          {/* Left section */}
          <motion.div
            className="mt-10 sm:mt-0 sm:mb-12"
            variants={animationVariants}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            ref={ref2}
          >
            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex justify-start w-full mx-auto items-center">
                <div className="w-full sm:w-1/2 sm:pr-8">
                  <motion.div
                    className="p-4 transition-all fade-in-60 hover:bg-primary rounded-2xl shadow border bg-[#071C33]"
                    variants={animationVariants}
                    initial="hidden"
                    animate={inView2 ? "visible" : "hidden"}
                    ref={ref2}
                  >
                    <h1 className="text-xl text-white underline mb-3 font-semibold">
                      Pricing Analytics
                    </h1>
                    <p className="text-white text-sm font-normal">
                      Get access to our team of data experts to keep driving
                      your analytics program forward. Our data engineers secure
                      your analytics assets by guiding your transition to the
                      cloud.
                    </p>
                    <div className="text-white text-sm font-normal mt-3">
                      <p>
                        <span className="font-semibold text-lg">1.</span>{" "}
                        Conversation Rate Modeling
                      </p>
                      <p>
                        <span className="font-semibold text-lg">2.</span>{" "}
                        Customer Lifetime value
                      </p>
                      <p>
                        <span className="font-semibold text-lg">3.</span>{" "}
                        Customer Churn Prediction
                      </p>
                    </div>
                    <Button
                      onClick={() => Router.push("/services/pricinganalytics")}
                      variant={"outline"}
                      className="border text-white mt-3 hover:border-primary-secondary hover:bg-primary-secondary hover:text-white-secondary transition-all "
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </div>
              </div>
              <div className="rounded-full bg-yellow-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                <ChevronDown className="text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimeLine;
