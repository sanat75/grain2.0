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
          <motion.div variants={textVariants}>
            <div className="border mt-3 sm:pr-8 p-4 mr-3 mb-3 rounded-2xl bg-primary-secondary">
              <h3 className="text-2xl my-2 font-semibold text-primary">
                Customer Analytics
              </h3>
              <motion.p
                variants={textVariants}
                className="font-normal text-white text-sm "
              >
                Our proven AI and ML provide actionable predictions of customer
                activity, proven to guide business decisions for better results.
                Build optimized user acquisition and retention strategies
                through advanced knowledge of user behavior and preise
                targeting.
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
          <motion.div variants={textVariants}>
            <div className="border mt-3 sm:pr-8 p-4 mr-3 mb-3 rounded-2xl bg-blue-950">
              <h3 className="text-2xl my-2 font-semibold text-primary-secondary">
                Supply Chain Analytics
              </h3>
              <motion.p
                variants={textVariants}
                className="font-normal text-white text-sm"
              >
                Predict future consumer demand for everything you sell. Get
                insight into the factors that drive demand. Inform data- driven
                decisions across the business, including sales, finance,
                marketing, and production. Improve inventory levels, reduce
                costs, and deliver products efficiently to make customers happy.
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
          <motion.div variants={textVariants}>
            <div className="border mt-3 sm:pr-8 p-4 mr-3 mb-3 rounded-2xl bg-primary-secondary">
              <h3 className="text-2xl my-2 font-semibold text-primary">
                Pricing Analytics
              </h3>
              <motion.p
                variants={textVariants}
                className="font-normal text-white text-sm"
              >
                Complex analytics applied to comprehensive data generate the
                right roadmap to improve the top line, margins, market share,
                and customer experience. Bring together real-time insights from
                your e-commerce site, customer data, competitive research, and
                more.
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
