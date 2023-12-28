import Wrapper from "@/components/Container/Wrapper";
import Footer from "@/components/Footer/Footer";
import Brands from "@/components/Landing/Brands";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React from "react";
const TechTools = [
  "/assets/images/techtools/getintouch.svg",
  "/assets/images/techtools/aws.svg",
  "/assets/images/techtools/azure.svg",
  "/assets/images/techtools/databricks.svg",
  "/assets/images/techtools/meta.svg",
  "/assets/images/techtools/tiktok.svg",
  "/assets/images/techtools/getintouch.svg",
  "/assets/images/techtools/aws.svg",
  "/assets/images/techtools/azure.svg",
  "/assets/images/techtools/databricks.svg",
  "/assets/images/techtools/meta.svg",
  "/assets/images/techtools/tiktok.svg",
  "/assets/images/techtools/getintouch.svg",
  "/assets/images/techtools/aws.svg",
  "/assets/images/techtools/azure.svg",
  "/assets/images/techtools/databricks.svg",
  "/assets/images/techtools/meta.svg",
  "/assets/images/techtools/tiktok.svg",
];
const page = () => {
  return (
    <>
      <Wrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <Badge className="mx-auto mb-4 flex max-w-fit items-center rounded-sm  justify-center space-x-2 overflow-hidden border  px-7 py-2 shadow-md backdrop-blur transition-all">
          <p className="text-sm font-semibold text-white">Customer Analytics</p>
        </Badge>
        <h1 className="max-w-4xl text-3xl font-bold md:text-6xl lg:text-7xl">
          Optimize your business by predicting customers&apos; future with AI
        </h1>
        <p className="mt-5 max-w-prose dark:text-gray-400 text-gray-600  sm:text-lg">
          Our proven AI and ML provides actionable predictions of customer
          activity, proven to guide business decisions for better results. Fast,
          simple integration with your existing tech.
        </p>

        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          href="/sign-up"
        >
          Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Wrapper>
      <div className=" md:p-10 py-10 px-3 text-center  ">
        <h1 className="text-xl font-extrabold  text-primary uppercase">
          Supporting the largest tech and data platforms
        </h1>
        {/* <p className="text-sm text-gray-600">
            Our approach starts with understanding your data evolution stage.
          </p> */}
      </div>

      <Brands Logos={TechTools} />
      <div>
        <div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              <Card className="bg-primary/10 -m-2 rounded-xl lgnonem-none-4 lg:rounded-2xl lg:p-16 p-4 md:p-8">
                <Image
                  alt="preview of the upload page"
                  src="/assets/images/analyitics_background.png"
                  width={1364}
                  height={866}
                  quality={100}
                />
              </Card>
            </div>
          </div>
          <div className="relative isolate">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            ></div>
          </div>
        </div>
      </div>
      {/* Feature section */}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        {/* steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0 p-4">
          <li className="md:flex-1 bg-primary/10 p-8 rounded-lg shadow-none border-none">
            <span className="text-xl font-medium text-primary">
              Marketing Mix Modelling
            </span>
            <div className="flex flex-col space-y-2 border-l-4  py-2 pl-4 md:border-l-0 border-primary  md:pb-0 md:pl-0 md:pt-4">
              <span className="text-md font-semibold">
                Complete your marketing measurement and optimize budget
              </span>
              <span className="mt-2 dark:text-gray-400 text-gray-600">
                Predict your channels performance so you can refine your channel
                mix and budget allocation. Know which channels will drive the
                highest future value and take immediate action. Grains
                action-oriented MMM solution makes it easy to improve results.
              </span>
            </div>
          </li>
          <li className="md:flex-1 bg-primary/10 p-8 rounded-lg shadow-none border-none">
            <span className="text-xl font-medium text-primary">
              Predictive Campaign ROAS
            </span>
            <div className="flex flex-col space-y-2 border-l-4  py-2 pl-4 md:border-l-0 border-primary  md:pb-0 md:pl-0 md:pt-4">
              <span className="text-md font-semibold">
                Predict ROAS early to focus on high-value audiences
              </span>
              <span className="mt-2 dark:text-gray-400 text-gray-600">
                Discover a campaign&apos;s total value and likely return on ad
                spend (ROAS) early by predicting and aggregating customer
                lifetime value.  Invest more in campaigns that will drive
                long-term value, and avoid over-investing in those that
                don&apos;t produce high-value customers.
              </span>
            </div>
          </li>
        </ol>
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0 p-4">
          <li className="md:flex-1 bg-primary/10 p-8 rounded-lg shadow-none border-none">
            <span className="text-xl font-medium text-primary">
              Campaign Optimization
            </span>
            <div className="flex flex-col space-y-2 border-l-4  py-2 pl-4 md:border-l-0 border-primary  md:pb-0 md:pl-0 md:pt-4">
              <span className="text-md font-semibold">
                Boost campaigns with predictive analytics
              </span>
              <span className="mt-2 dark:text-gray-400 text-gray-600">
                Maximize campaign results with the power of machine learning.
                Transform your optimization strategy with AI-driven predictive
                events fueled by rich user and engagement data. Gain greater
                control over your campaign outcomes, and achieve your targets
                with confidence.
              </span>
            </div>
          </li>
          <li className="md:flex-1 bg-primary/10 p-8 rounded-lg shadow-none border-none">
            <span className="text-xl font-medium text-primary">
              Customer Churn
            </span>
            <div className="flex flex-col space-y-2 border-l-4  py-2 pl-4 md:border-l-0 border-primary  md:pb-0 md:pl-0 md:pt-4">
              <span className="text-md font-semibold">
                Keep your customers engaged for the long haul
              </span>
              <span className="mt-2 dark:text-gray-400 text-gray-600">
                Identify which of your customers are most likely to churn. Use
                predictions to proactively improve retention and drive customer
                lifetime value. Boost your retention campaigns through rapid
                experimentation, increased success rates, and enhanced ROI. Feed
                predictions directly into your CRM, marketing automation, and
                other systems of record to activate campaigns and drive ROI.
              </span>
            </div>
          </li>
        </ol>
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0 p-4">
          <li className="md:flex-1 bg-primary/10 p-8 rounded-lg shadow-none border-none">
            <span className="text-xl font-medium text-primary">
              Lead Scoring
            </span>
            <div className="flex flex-col space-y-2 border-l-4  py-2 pl-4 md:border-l-0 border-primary  md:pb-0 md:pl-0 md:pt-4">
              <span className="text-md font-semibold">
                Prioritize the right leads with predictions and watch revenue
                rise
              </span>
              <span className="mt-2 dark:text-gray-400 text-gray-600">
                Feed AI-generated predictions directly into your CRM so teams
                can prioritize deals most likely to close. Don&apos;t waste time
                and money on leads that won&apos;t go anywhere. With scores at
                their fingertips, your revenue teams will work more efficiently
                than ever.
              </span>
            </div>
          </li>
        </ol>
        {/* <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <Card className="bg-primary/10 -m-2 rounded-xl lgnonem-none-4 lg:rounded-2xl lg:p-16 p-4 md:p-8">
              <Image
                alt="preview of the upload page"
                src="/assets/images/analyitics_background.png"
                width={1419}
                height={732}
                quality={100}
              />
            </Card>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default page;
