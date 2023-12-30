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
        <Badge className="mx-auto mb-4 flex max-w-fit items-center rounded-sm  justify-center space-x-2 overflow-hidden border  px-7 py-2 shadow-md backdrop-blur transition-all">
          <p className="text-sm font-semibold text-white">Pricing Analytics</p>
        </Badge>
        <h1 className="max-w-4xl text-3xl font-bold md:text-6xl lg:text-7xl">
          Economic Rollercoaster: Riding the Waves of Uncertainty with Price
          Agility
        </h1>
        <p className="mt-5 max-w-prose dark:text-gray-400 text-gray-600  sm:text-lg">
          We deliver customized pricing software tools and solutions, to help
          organizations achieve a payback of at least 10:1 on their investment.
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
              Pricing Strategy &amp; Operations Diagnostics
            </span>
            <div className="flex flex-col space-y-2 border-l-4  py-2 pl-4 md:border-l-0 border-primary  md:pb-0 md:pl-0 md:pt-4">
              {/* <span className="text-md font-semibold">
                Complete your marketing measurement and optimize budget
              </span> */}
              <span className="mt-2 dark:text-gray-400 text-gray-600">
                The Pricing Strategy and Operations Diagnostic is an independent
                assessment of your current pricing practices that identifies
                margin risks and earnings opportunities via a series of quick
                wins and longer-term strategic initiatives. A typical diagnostic
                duration is 4-6 weeks. The Diagnostic enables companies to
                identify their current pricing maturity, areas of weakness, and
                strategic areas of focus.
              </span>
            </div>
          </li>
          <li className="md:flex-1 bg-primary/10 p-8 rounded-lg shadow-none border-none">
            <span className="text-xl font-medium text-primary">
              Value-Based Algorithmic Price Optimisation
            </span>
            <div className="flex flex-col space-y-2 border-l-4  py-2 pl-4 md:border-l-0 border-primary  md:pb-0 md:pl-0 md:pt-4">
              {/* <span className="text-md font-semibold">
                Predict ROAS early to focus on high-value audiences
              </span> */}
              <span className="mt-2 dark:text-gray-400 text-gray-600">
                Value-based algorithmic price optimisation is a sophisticated
                approach to pricing that will address these key challenges and
                deliver between $2.0M and $9.0M for every $100M of revenue
                optimised. Incremental EBITDA is generated using a combination
                of data science, statistics, and qualitative data sets. This
                level of detail identifies pricing power at a material line item
                or SKU level across an extensive range of products and unique
                customers. Immediate margin expansion and earnings growth can be
                realised within 8 -12 weeks.
              </span>
            </div>
          </li>
        </ol>
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0 p-4">
          <li className="md:flex-1 bg-primary/10 p-8 rounded-lg shadow-none border-none">
            <span className="text-xl font-medium text-primary">
              Customer and Product Segmentation
            </span>
            <div className="flex flex-col space-y-2 border-l-4  py-2 pl-4 md:border-l-0 border-primary  md:pb-0 md:pl-0 md:pt-4">
              {/* <span className="text-md font-semibold">
                Boost campaigns with predictive analytics
              </span> */}
              <span className="mt-2 dark:text-gray-400 text-gray-600">
                Build customer and product segments based on similarity in
                pricing behavior and pricing power. With data-driven
                micro-segmentation, your organization can analyze margins by
                customer or product segment. Set target margins by micro-segment
                for every customer and every product and measure the impact
                across the entire portfolio of products.
              </span>
            </div>
          </li>
          <li className="md:flex-1 bg-primary/10 p-8 rounded-lg shadow-none border-none">
            <span className="text-xl font-medium text-primary">
              Pricing Performance Monitoring
            </span>
            <div className="flex flex-col space-y-2 border-l-4  py-2 pl-4 md:border-l-0 border-primary  md:pb-0 md:pl-0 md:pt-4">
              {/* <span className="text-md font-semibold">
                Keep your customers engaged for the long haul
              </span> */}
              <span className="mt-2 dark:text-gray-400 text-gray-600">
                Best-in-class pricing processes with clear pricing metrics and
                visibility into the effectiveness of pricing decisions. Tailored
                intelligence dashboards combine our pricing expertise with your
                key business needs to deliver insights on your overall pricing
                strategy. Our Performance Monitor Tools can be created to view
                by customer/product segment, functional area or even by sales
                rep.
              </span>
            </div>
          </li>
        </ol>
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0 p-4">
          <li className="md:flex-1 bg-primary/10 p-8 rounded-lg shadow-none border-none">
            <span className="text-xl font-medium text-primary">
              Value-Based Sales &amp; Negotiation Strategy Workshops
            </span>
            <div className="flex flex-col space-y-2 border-l-4  py-2 pl-4 md:border-l-0 border-primary  md:pb-0 md:pl-0 md:pt-4">
              {/* <span className="text-md font-semibold">
                Prioritize the right leads with predictions and watch revenue
                rise
              </span> */}
              <span className="mt-2 dark:text-gray-400 text-gray-600">
                A Value-Based Sales &amp; Negotiation Strategy Workshop is a
                fast, cost- effective way to bring teams together to create a
                shared understanding of value. A workshop will enable teams to
                develop new marketing, pricing, sales, and negotiation
                approaches and reduce the margin risks of cost-plus pricing,
                commodity mindsets, or discounting to win or retain business.The
                workshop program can run as a half-day, one-day or comprehensive
                two- day program.
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
