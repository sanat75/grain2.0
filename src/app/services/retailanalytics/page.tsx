import Wrapper from "@/components/Container/Wrapper";
import Footer from "@/components/Footer/Footer";
import Brands from "@/components/Landing/Brands";
import Header from "@/components/Navigation/Header";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  "/assets/images/techtools/getintouch.svg",
  "/assets/images/techtools/aws.svg",
  "/assets/images/techtools/azure.svg",
  "/assets/images/techtools/databricks.svg",
  "/assets/images/techtools/meta.svg",
  "/assets/images/techtools/getintouch.svg",
  "/assets/images/techtools/aws.svg",
  "/assets/images/techtools/azure.svg",
  "/assets/images/techtools/databricks.svg",
  "/assets/images/techtools/meta.svg",
];
const page = () => {
  return (
    <>
      <Wrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <h1 className="max-w-4xl text-3xl font-bold md:text-6xl lg:text-7xl">
          Demand Forecasting
        </h1>
        <p className="mt-5 max-w-prose dark:text-gray-400 text-gray-600  sm:text-lg">
          Predict future consumer demand for everything you sell. Get insight
          into the factors that drive demand. Inform data-driven decisions
          across the business, including sales, finance, marketing, and
          production. Improve inventory levels, reduce costs, and deliver
          products efficiently to make customers happy.
        </p>

        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          target="_blank"
          href={"https://calendly.com/grainanalytics1/30min"}
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
              <Card className=" -m-2  lgnonem-none-4 shadow-none border-none lg:p-16 p-4 md:p-8">
                <Image
                  alt="preview of the upload page"
                  src="/assets/images/Pricing/pricing1.png"
                  width={1364}
                  height={866}
                  quality={100}
                  className="object-cover rounded-sm"
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
      <div className="mx-auto mb-32 mt-10 max-w-5xl sm:mt-56">
        {/* steps */}
        <ol className=" space-y-4  md:flex md:space-x-12 md:space-y-0 p-4">
          <li className="md:flex-1  p-8 rounded-lg shadow-none border-none">
            <span className="text-xl font-medium text-primary">
              Plan for Consumer Demand
            </span>
            <div className="flex flex-col space-y-2 border-l-4  py-2 pl-4 md:border-l-0 border-primary  md:pb-0 md:pl-0 md:pt-4">
              {/* <span className="text-md font-semibold">
                Complete your marketing measurement and optimize budget
              </span> */}
              <span className="mt-2 dark:text-gray-400 text-gray-600">
                Foresee consumer demand with trustworthy forecasts of sales,
                orders, shipments, or other volume metrics. Enrich datasets with
                external data on market trends. Gain accurate predictive
                insights into what influences buyer behavior.
              </span>
            </div>
          </li>
          <li className="md:flex-1  p-8 rounded-lg shadow-none border-none">
            <span className="text-xl font-medium text-primary">
              Make Hyper-Granular Predictions
            </span>
            <div className="flex flex-col space-y-2 border-l-4  py-2 pl-4 md:border-l-0 border-primary  md:pb-0 md:pl-0 md:pt-4">
              {/* <span className="text-md font-semibold">
                Predict ROAS early to focus on high-value audiences
              </span> */}
              <span className="mt-2 dark:text-gray-400 text-gray-600">
                Predict demand at the level of granularity that fits your
                business need: SKU, Store + SKU, or the aggregation that works
                best for you. Immediately see which products customers want —
                and how and where to stock them — over a 30-, 45-, or 180-day
                period
              </span>
            </div>
          </li>
        </ol>
        <ol className=" space-y-4  md:flex md:space-x-12 md:space-y-0 p-4">
          <li className="md:flex-1  p-8 rounded-lg shadow-none border-none">
            <span className="text-xl font-medium text-primary">
              Forecast Sales and Cash Flow
            </span>
            <div className="flex flex-col space-y-2 border-l-4  py-2 pl-4 md:border-l-0 border-primary  md:pb-0 md:pl-0 md:pt-4">
              {/* <span className="text-md font-semibold">
                Boost campaigns with predictive analytics
              </span> */}
              <span className="mt-2 dark:text-gray-400 text-gray-600">
                Predict sales trends and understand their impact on cash flow.
                Better align resources across the business to meet customer
                expectations and revenue goals with demand forecasting.
              </span>
            </div>
          </li>
          <li className="md:flex-1  p-8 rounded-lg shadow-none border-none">
            <span className="text-xl font-medium text-primary">
              Drive Customer Experience
            </span>
            <div className="flex flex-col space-y-2 border-l-4  py-2 pl-4 md:border-l-0 border-primary  md:pb-0 md:pl-0 md:pt-4">
              {/* <span className="text-md font-semibold">
                Keep your customers engaged for the long haul
              </span> */}
              <span className="mt-2 dark:text-gray-400 text-gray-600">
                Provide an excellent customer experience with the right products
                and resources at the right time. Improve CSAT and your bottom
                line with predictive analytics.
              </span>
            </div>
          </li>
        </ol>
        <ol className=" space-y-4  md:flex md:space-x-12 md:space-y-0 p-4">
          <li className="md:flex-1  p-8 rounded-lg shadow-none border-none">
            <span className="text-xl font-medium text-primary">
              Manage Inventory and Reduce Overstock
            </span>
            <div className="flex flex-col space-y-2 border-l-4  py-2 pl-4 md:border-l-0 border-primary  md:pb-0 md:pl-0 md:pt-4">
              {/* <span className="text-md font-semibold">
                Prioritize the right leads with predictions and watch revenue
                rise
              </span> */}
              <span className="mt-2 dark:text-gray-400 text-gray-600">
                Prevent overstocking or stockouts, optimizing inventory levels
                for improved operational efficiency. Reduce inventory holding
                costs by as much as 20%. Reduce supply lead time, lower reverse
                logistics costs, and increase sales with better product
                availability.
              </span>
            </div>
          </li>
          <li className="md:flex-1  p-8 rounded-lg shadow-none border-none">
            <span className="text-xl font-medium text-primary">
              Automate Integrations for Seamless Forecasts
            </span>
            <div className="flex flex-col space-y-2 border-l-4  py-2 pl-4 md:border-l-0 border-primary  md:pb-0 md:pl-0 md:pt-4">
              {/* <span className="text-md font-semibold">
                Prioritize the right leads with predictions and watch revenue
                rise
              </span> */}
              <span className="mt-2 dark:text-gray-400 text-gray-600">
                Eliminate manual data ingestion and preparation processes.
                Automate the entire data workflow, from ingestion to your ERP,
                with seamless connections to and from Pecan.
              </span>
            </div>
          </li>
        </ol>
      </div>
    </>
  );
};

export default page;
