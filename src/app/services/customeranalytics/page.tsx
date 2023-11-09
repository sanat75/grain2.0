import Wrapper from "@/components/Container/Wrapper";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Navigation/Header";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <div className="w-full h-80 flex justify-center items-center text-white font-bold bg-primary-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        Customer Analytics
      </div>
      <div className="min-h-[350px] md:min-h-[550px] w-full flex flex-col justify-center items-center md:flex-row md:justify-between px-4">
        <Wrapper className="w-full max-w-screen-xl px-2.5 md:px-12 flex flex-col-reverse sm:flex-row justify-between items-center">
          <div className="font-bold  md:text-start md:w-1/2 md:p-8">
            <div className="text-lg  font-extrabold  mt-10 sm:mt-0">
              <h1>
                Forecasting impacts critical business areas, including labor
                budgets, customer service, promotions and employee schedules.
                When the forecast is off, it affects your store managers’
                ability to adhere to plans and budgets and can impact
                productivity, service and sales. Real-time forecast accuracy is
                not only critical—it is imperative.
              </h1>
            </div>
            <div className="text-zinc-600 text-md font-normal pt-14">
              The best forecasting provides incredible accuracy that is
              consistently reliable over time. This requires an intelligent
              system that analyzes and accounts for metrics like sales, SKU, and
              individual and consolidated UPCs to support granular forecasting
              across the retail chain. Our Forecasting solution delivers all of
              this—automatically.
            </div>
          </div>
          <div className="flex w-full mt-10 sm:mt-0 sm:w-1/2 h-full justify-end items-center">
            <Image
              alt="growth image"
              src={"/assets/images/analyitics_background.jpg"}
              className="rounded-md shadow-lg w-full h"
              width={500}
              height={100}
            />
          </div>
        </Wrapper>
      </div>
      <div className="min-h-[350px] md:min-h-[550px] w-full flex flex-col justify-center items-center md:flex-row md:justify-between px-4">
        <Wrapper className="w-full max-w-screen-xl px-2.5 md:px-12 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex w-full mt-10 sm:mt-0 sm:w-1/2 h-full justify-end items-center">
            <Image
              alt="growth image"
              src={"/assets/images/analytics_background.jpg"}
              className="rounded-md shadow-lg w-full h"
              width={500}
              height={100}
            />
          </div>
          <div className="font-bold  md:text-start md:w-1/2 md:p-8">
            <div className="text-lg  font-extrabold  mt-10 sm:mt-0">
              <h1>Just the highlights: Why Logile Forecasting?</h1>
            </div>
            <div className="text-zinc-600 text-md font-normal pt-14">
              <li>
                The industry best forecast accuracy: 95% on daily items and
                sales for all but the smallest departments
              </li>
              <li>
                AI-driven, machine-learning forecasting using dozens of
                industry-leading and Logile-proprietary algorithms to forecast
                every metric
              </li>
              <li>
                Event/data tagging and cross-comprehensive forecast granularity
                at the 15-minute, task level
              </li>
              <li>Continuous reforecasting</li>
              <li>
                Forecast accuracy improvements of 15-25% for your business
              </li>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="min-h-[350px] md:min-h-[550px] w-full flex flex-col justify-center items-center md:flex-row md:justify-between px-4">
        <Wrapper className="w-full max-w-screen-xl px-2.5 md:px-12 flex flex-col-reverse sm:flex-row justify-between items-center">
          <div className="font-bold  md:text-start md:w-1/2 md:p-8">
            <div className="text-lg  font-extrabold  mt-10 sm:mt-0">
              <h1>
                Get the power of unparalleled AI and self-learning automation
              </h1>
            </div>
            <div className="text-zinc-600 text-md font-normal pt-14">
              <p>
                Extremely accurate, reliable forecast delivered in a completely
                automated workflow requiring little or no manual intervention
              </p>
              <li>
                Goes well beyond methods like moving averages and exponential
                smoothing and includes recent advances in statistical learning
                and pattern recognition
              </li>
              <li>
                AI-driven, machine-learning forecasting using dozens of
                industry-leading and Logile-proprietary algorithms to forecast
                every metric
              </li>
              <li>
                Self-learning AI constantly reviews and changes algorithms as
                needed over time for each element in each store, based on what
                is proven to be the most accurate and reliable method
              </li>
              <li>
                Each forecast metric in each store may use a different algorithm
                based on statistical accuracy in individual stores
              </li>
              <li>
                Enables precision scheduling that delivers your service and
                queuing standards with minimal waste
              </li>
              <li>
                Allows use of sister-store data for new or remodeled stores if
                needed
              </li>
              <li>
                Unique forecasting approach can be shared across your different
                departments and loyalty marketing to understand customer and
                item volumes by time of day—as forecasted from department
                interval POS data
              </li>
            </div>
          </div>
          <div className="flex w-full mt-10 sm:mt-0 sm:w-1/2 h-full justify-end items-center">
            <Image
              alt="growth image"
              src={"/assets/images/analyitics_background.jpg"}
              className="rounded-md shadow-lg w-full h"
              width={500}
              height={100}
            />
          </div>
        </Wrapper>
      </div>
      <div className="min-h-[350px] md:min-h-[550px] w-full flex flex-col justify-center items-center md:flex-row md:justify-between px-4">
        <Wrapper className="w-full max-w-screen-xl px-2.5 md:px-12 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex w-full mt-10 sm:mt-0 sm:w-1/2 h-full justify-end items-center">
            <Image
              alt="growth image"
              src={"/assets/images/analyitics_background.jpg"}
              className="rounded-md shadow-lg w-full h"
              width={500}
              height={100}
            />
          </div>
          <div className="font-bold  md:text-start md:w-1/2 md:p-8">
            <div className="text-lg  font-extrabold  mt-10 sm:mt-0">
              <h1>Better capabilities for better results</h1>
            </div>
            <div className="text-zinc-600 text-md font-normal pt-14">
              Benefit from extensive data/event tagging to appropriately
              influence selection of specific history for enhanced accuracy. You
              can programmatically automate data tagging for weather specific to
              each stores zip code, and leverage detailed promotional tagging
              for enhanced UPC-level forecasting. Gain renewed advantage at your
              front end. Customize queueing service standards by day and time of
              day or for not busy, busy or extremely busy times in your
              forecast. And with detailed POS volume data, you are enabled to
              accurately forecast express, regular and self-checkout volumes for
              dynamic, interval-specific use of store-specific labor standards
              for item processing and tendering by method. Optimize throughput,
              shorten customer queues, and improve customer satisfaction through
              better scheduling. If your current system misses the mark on peak
              express volumes like busy lunch rushes, you will see the positive
              difference in Logiles approach.
            </div>
          </div>
        </Wrapper>
      </div>
      <Footer />
    </div>
  );
};

export default page;
