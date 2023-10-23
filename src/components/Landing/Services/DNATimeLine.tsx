"use client";
import Wrapper from "@/components/Container/Wrapper";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DNATimeLine = () => {
  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonVariants = {
    // hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
    delay: 100,
    threshold: 0.5,
  });

  const [ref1, inView1] = useInView({
    triggerOnce: false,
    delay: 100,
    threshold: 0.7,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    delay: 100,
    threshold: 0.7,
  });
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
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full animate-pulse ring-emerald-300 shrink-0">
              <svg
                className="w-2.5 h-2.5 text-primary"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <svg
                  className="w-2.5 h-2.5 text-primary "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <motion.div variants={textVariants}>
            <Card className="mt-3 sm:pr-8 p-4 mr-3 mb-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Customer Analytics
              </h3>
              <motion.p
                variants={textVariants}
                className="font-normal text-muted-foreground text-sm"
              >
                Get access to our team of data experts to keep driving your
                analytics program forward. Our data engineers secure your
                analytics assets by guiding your transition to the cloud.
              </motion.p>
              <div className="flex w-full flex-wrap justify-between gap-y-2">
                <motion.p
                  variants={textVariants}
                  className="w-full sm:w-1/2 text-primary text-sm"
                >
                  <span className="font-semibold text-lg">1.</span> Conversation
                  Rate Modeling
                </motion.p>
                <motion.p
                  variants={textVariants}
                  className="w-full sm:w-1/2 text-primary text-sm"
                >
                  <span className="font-semibold text-lg">2.</span> Customer
                  Lifetime value
                </motion.p>
                <motion.p
                  variants={textVariants}
                  className="w-full sm:w-1/2 text-primary text-sm"
                >
                  <span className="font-semibold text-lg">3.</span> Customer
                  Churn Prediction
                </motion.p>
                <motion.div variants={buttonVariants}>
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
              </div>
            </Card>
          </motion.div>
        </motion.li>
        <motion.li
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={cardVariants}
          className="relative mb-6 sm:mb-0"
        >
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full animate-pulse ring-emerald-300 shrink-0">
              <svg
                className="w-2.5 h-2.5 text-primary"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <svg
                  className="w-2.5 h-2.5 text-primary "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <motion.div variants={textVariants}>
            <Card className="mt-3 sm:pr-8 p-4 mr-3 mb-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Customer Analytics
              </h3>
              <motion.p
                variants={textVariants}
                className="font-normal text-muted-foreground text-sm"
              >
                Get access to our team of data experts to keep driving your
                analytics program forward. Our data engineers secure your
                analytics assets by guiding your transition to the cloud.
              </motion.p>
              <div className="flex w-full flex-wrap justify-between gap-y-2">
                <motion.p
                  variants={textVariants}
                  className="w-full sm:w-1/2 text-primary text-sm"
                >
                  <span className="font-semibold text-lg">1.</span> Conversation
                  Rate Modeling
                </motion.p>
                <motion.p
                  variants={textVariants}
                  className="w-full sm:w-1/2 text-primary text-sm"
                >
                  <span className="font-semibold text-lg">2.</span> Customer
                  Lifetime value
                </motion.p>
                <motion.p
                  variants={textVariants}
                  className="w-full sm:w-1/2 text-primary text-sm"
                >
                  <span className="font-semibold text-lg">3.</span> Customer
                  Churn Prediction
                </motion.p>
                <motion.div variants={buttonVariants}>
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
              </div>
            </Card>
          </motion.div>
        </motion.li>
        <motion.li
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={cardVariants}
          className="relative mb-6 sm:mb-0"
        >
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full animate-pulse ring-emerald-300 shrink-0">
              <svg
                className="w-2.5 h-2.5 text-primary"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <svg
                  className="w-2.5 h-2.5 text-primary "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <motion.div variants={textVariants}>
            <Card className="mt-3 sm:pr-8 p-4 mr-3 mb-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Customer Analytics
              </h3>
              <motion.p
                variants={textVariants}
                className="font-normal text-muted-foreground text-sm"
              >
                Get access to our team of data experts to keep driving your
                analytics program forward. Our data engineers secure your
                analytics assets by guiding your transition to the cloud.
              </motion.p>
              <div className="flex w-full flex-wrap justify-between gap-y-2">
                <motion.p
                  variants={textVariants}
                  className="w-full sm:w-1/2 text-primary text-sm"
                >
                  <span className="font-semibold text-lg">1.</span> Conversation
                  Rate Modeling
                </motion.p>
                <motion.p
                  variants={textVariants}
                  className="w-full sm:w-1/2 text-primary text-sm"
                >
                  <span className="font-semibold text-lg">2.</span> Customer
                  Lifetime value
                </motion.p>
                <motion.p
                  variants={textVariants}
                  className="w-full sm:w-1/2 text-primary text-sm"
                >
                  <span className="font-semibold text-lg">3.</span> Customer
                  Churn Prediction
                </motion.p>
                <motion.div variants={buttonVariants}>
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
              </div>
            </Card>
          </motion.div>
        </motion.li>
      </ol>
    </Wrapper>
    // <Wrapper>
    //   <ol className="items-center sm:flex">
    //     <li className="relative mb-6 sm:mb-0">
    //       <div className="flex items-center">
    //         <div className="z-10 flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full animate-pulse ring-emerald-300 shrink-0">
    //           <svg
    //             className="w-2.5 h-2.5 text-primary "
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //           >
    //             <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
    //           </svg>
    //         </div>
    //         <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
    //       </div>
    //       <Card className="mt-3 sm:pr-8 p-4 mr-3 mb-3">
    //         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
    //           Customer Analytics
    //         </h3>

    //         <p className="font-normal text-muted-foreground text-sm">
    //           Get access to our team of data experts to keep driving your
    //           analytics program forward. Our data engineers secure your
    //           analytics assets by guiding your transition to the cloud.
    //         </p>
    //         <div className="flex w-full flex-wrap justify-between gap-y-2">
    //           <p className="w-full sm:w-1/2 text-primary text-sm">
    //             <span className="font-semibold text-lg">1.</span> Conversation
    //             Rate Modeling
    //           </p>
    //           <p className="w-full sm:w-1/2 text-primary text-sm">
    //             <span className="font-semibold text-lg">2.</span> Customer
    //             Lifetime value
    //           </p>
    //           <p className="w-full sm:w-1/2 text-primary text-sm">
    //             <span className="font-semibold text-lg">3.</span> Customer Churn
    //             Prediction
    //           </p>
    //           <div>
    //             <Button variant={"outline"} className="mt-2">
    //               Learn more{" "}
    //               <svg
    //                 className="w-3 h-3 ml-2"
    //                 aria-hidden="true"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 14 10"
    //               >
    //                 <path
    //                   stroke="currentColor"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M1 5h12m0 0L9 1m4 4L9 9"
    //                 />
    //               </svg>
    //             </Button>
    //           </div>
    //         </div>
    //       </Card>
    //     </li>
    //     <li className="relative mb-6 sm:mb-0">
    //       <div className="flex items-center">
    //         <div className="z-10 flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full animate-pulse ring-emerald-300 shrink-0">
    //           <svg
    //             className="w-2.5 h-2.5 text-primary "
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //           >
    //             <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
    //           </svg>
    //         </div>
    //         <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
    //       </div>
    //       <Card className="mt-3 sm:pr-8 p-4 mr-3 mb-3">
    //         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
    //           Operational Analytics
    //         </h3>

    //         <p className="font-normal text-muted-foreground text-sm">
    //           Get access to our team of data experts to keep driving your
    //           analytics program forward. Our data engineers secure your
    //           analytics assets by guiding your transition to the cloud.
    //         </p>
    //         <div className="flex w-full flex-wrap justify-between gap-y-2">
    //           <p className="w-full sm:w-1/2 text-primary text-sm">
    //             <span className="font-semibold text-lg">1.</span> Conversation
    //             Rate Modeling
    //           </p>
    //           <p className="w-full sm:w-1/2 text-primary text-sm">
    //             <span className="font-semibold text-lg">2.</span> Customer
    //             Lifetime value
    //           </p>
    //           <p className="w-full sm:w-1/2 text-primary text-sm">
    //             <span className="font-semibold text-lg">3.</span> Customer Churn
    //             Prediction
    //           </p>
    //           <Button variant={"outline"} className="mt-2">
    //             Learn more{" "}
    //             <svg
    //               className="w-3 h-3 ml-2"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 14 10"
    //             >
    //               <path
    //                 stroke="currentColor"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M1 5h12m0 0L9 1m4 4L9 9"
    //               />
    //             </svg>
    //           </Button>
    //         </div>
    //       </Card>
    //     </li>
    //     <li className="relative mb-6 sm:mb-0">
    //       <div className="flex items-center">
    //         <div className="z-10 flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full animate-pulse ring-emerald-300 shrink-0">
    //           <svg
    //             className="w-2.5 h-2.5 text-primary "
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //           >
    //             <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
    //           </svg>
    //         </div>
    //         <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
    //       </div>
    //       <Card className="mt-3 sm:pr-8 p-4 mr-3 mb-3">
    //         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
    //           Pricing Analytics
    //         </h3>

    //         <p className="font-normal text-muted-foreground text-sm">
    //           Get access to our team of data experts to keep driving your
    //           analytics program forward. Our data engineers secure your
    //           analytics assets by guiding your transition to the cloud.
    //         </p>
    //         <div className="flex w-full flex-wrap justify-between gap-y-2">
    //           <p className="w-full sm:w-1/2 text-primary text-sm">
    //             <span className="font-semibold text-lg">1.</span> Conversation
    //             Rate Modeling
    //           </p>
    //           <p className="w-full sm:w-1/2 text-primary text-sm">
    //             <span className="font-semibold text-lg">2.</span> Customer
    //             Lifetime value
    //           </p>
    //           <p className="w-full sm:w-1/2 text-primary text-sm">
    //             <span className="font-semibold text-lg">3.</span> Customer Churn
    //             Prediction
    //           </p>
    //           <Button variant={"outline"} className="mt-2">
    //             Learn more{" "}
    //             <svg
    //               className="w-3 h-3 ml-2"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 14 10"
    //             >
    //               <path
    //                 stroke="currentColor"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M1 5h12m0 0L9 1m4 4L9 9"
    //               />
    //             </svg>
    //           </Button>
    //         </div>
    //       </Card>
    //     </li>
    //   </ol>
    // </Wrapper>
  );
};

export default DNATimeLine;
