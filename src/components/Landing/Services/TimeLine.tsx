"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Wrapper from "@/components/Container/Wrapper";
import { Button, buttonVariants } from "@/components/ui/button";

const TimeLine = () => {
  return (
    <div className=" flex flex-col justify-center">
      <div className="py-1 sm:max-w-6xl sm:mx-auto w-full px-2 sm:px-0">
        <div className="relative text-gray-700 antialiased text-sm font-semibold">
          {/* <!-- Vertical bar running through middle --> */}
          <div className="hidden sm:block w-1 bg-yellow-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

          {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
          <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex justify-start w-full mx-auto items-center">
                <div className="w-full sm:w-1/2 sm:pr-8">
                  <div className="p-4 bg-white rounded-2xl shadow border">
                    <h1 className="text-xl text-primary underline mb-3 font-semibold">
                      Customer Analytics
                    </h1>
                    <p className="text-muted-foreground text-sm font-normal">
                      Get access to our team of data experts to keep driving
                      your analytics program forward. Our data engineers secure
                      your analytics assets by guiding your transition to the
                      cloud.
                    </p>
                    <div className="text-muted-foreground text-sm font-normal mt-3">
                      <p>
                        {" "}
                        <span className="font-semibold text-lg">1.</span>{" "}
                        Conversation Rate Modeling
                      </p>
                      <p>
                        {" "}
                        <span className="font-semibold text-lg">2.</span>{" "}
                        Customer Lifetime value
                      </p>
                      <p>
                        {" "}
                        <span className="font-semibold text-lg">3.</span>{" "}
                        Customer Churn Prediction
                      </p>
                    </div>
                    <Button
                      variant={"outline"}
                      className="border-primary text-primary mt-3 hover:border-primary-secondary hover:text-primary-secondary transition-all"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
              <div className="rounded-full bg-yellow-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
          <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex justify-end w-full mx-auto items-center">
                <div className="w-full sm:w-1/2 sm:pl-8">
                  <div className="p-4 bg-white rounded-2xl shadow border">
                    <h1 className="text-xl text-primary underline mb-3 font-semibold">
                      Retail Analytics
                    </h1>
                    <p className="text-muted-foreground text-sm font-normal">
                      Get access to our team of data experts to keep driving
                      your analytics program forward. Our data engineers secure
                      your analytics assets by guiding your transition to the
                      cloud.
                    </p>
                    <div className="text-muted-foreground text-sm font-normal mt-3">
                      <p>
                        {" "}
                        <span className="font-semibold text-lg">1.</span>{" "}
                        Conversation Rate Modeling
                      </p>
                      <p>
                        {" "}
                        <span className="font-semibold text-lg">2.</span>{" "}
                        Customer Lifetime value
                      </p>
                      <p>
                        {" "}
                        <span className="font-semibold text-lg">3.</span>{" "}
                        Customer Churn Prediction
                      </p>
                    </div>
                    <Button
                      variant={"outline"}
                      className="border-primary text-primary mt-3 hover:border-primary-secondary hover:text-primary-secondary transition-all"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
              <div className="rounded-full bg-yellow-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
          <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex justify-start w-full mx-auto items-center">
                <div className="w-full sm:w-1/2 sm:pr-8">
                  <div className="p-4 bg-white rounded-2xl shadow border">
                    <h1 className="text-xl text-primary underline mb-3 font-semibold">
                      Pricing Analytics
                    </h1>
                    <p className="text-muted-foreground text-sm font-normal">
                      Get access to our team of data experts to keep driving
                      your analytics program forward. Our data engineers secure
                      your analytics assets by guiding your transition to the
                      cloud.
                    </p>
                    <div className="text-muted-foreground text-sm font-normal mt-3">
                      <p>
                        {" "}
                        <span className="font-semibold text-lg">1.</span>{" "}
                        Conversation Rate Modeling
                      </p>
                      <p>
                        {" "}
                        <span className="font-semibold text-lg">2.</span>{" "}
                        Customer Lifetime value
                      </p>
                      <p>
                        {" "}
                        <span className="font-semibold text-lg">3.</span>{" "}
                        Customer Churn Prediction
                      </p>
                    </div>
                    <Button
                      variant={"outline"}
                      className="border-primary text-primary mt-3 hover:border-primary-secondary hover:text-primary-secondary transition-all"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
              <div className="rounded-full bg-yellow-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
