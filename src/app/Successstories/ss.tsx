import Image from "next/image";
import React from "react";

const StudyMob = () => {
  return (
    <div className="sm:hidden py-1 sm:max-w-7xl sm:mx-auto w-full px-2 sm:px-0 flex min-h-[400px] justify-center items-center overflow-hidden">
      <div className="card border shadow-xl">
        <div className="imgbox">
          <Image
            width={100}
            height={100}
            src="/assets/images/retailanalytics/retailanalytics_background.jpg"
            alt="study desk"
            className="cardImage"
          />
        </div>

        <div className="content p-3">
          <h2 className="text-primary font-bold ">Just the highlights</h2>
          <div className="w-3/5 bg-primary-secondary h-[2px] my-4"></div>
          <p>
            The industry best forecast accuracy: 95% on daily items and sales
            for all but the smallest departments
          </p>
          <p>
            AI-driven, machine-learning forecasting using dozens of
            industry-leading and Logile-proprietary algorithms to forecast every
            metric
          </p>
          <p>
            Event/data tagging and cross-comprehensive forecast granularity at
            the 15-minute, task level
          </p>
          <p>Continuous reforecasting</p>
          <p>Forecast accuracy improvements of 15-25% for your business</p>
        </div>
      </div>
    </div>
  );
};

export default StudyMob;
