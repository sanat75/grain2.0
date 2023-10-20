import React from "react";
import { Button } from "../ui/button";
import { Card, CardTitle } from "../ui/card";
import Image from "next/image";

const OurDNA = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row flex-wrap ">
        <Card className="w-full md:w-1/2 h-[300px] md:min-h-[650px] rounded-none border-none flex justify-center items-center">
          <div className="w-full h-full relative">
            <Image
              src={"/assets/images/analytics_background.jpg"}
              alt="analytics"
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute  text-3xl sm:text-4xl md:text-5xl lg:text-6xl space-y-5 font-extrabold text-white border-white border-4">
            OUR SERVICES
          </div>
        </Card>
        <Card className=" rounded-none border-none px-8 w-full md:w-1/2 py-4 min-h-[400px] sm:min-h-[650px] flex sm:justify-evenly  flex-col hover:shadow-lg ">
          <div className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl space-y-5 font-extrabold py-2">
            <h1>
              <span className="bg-clip-text bg-gradient-to-r text-primary">
                Customer Analytics
              </span>
            </h1>
          </div>
          <ol className="grid grid-col-1 md:grid-cols-2 gap-8">
            <li className="flex flex-col  text-sm bg-secondary p-2 text-center sm:text-start sm:p-3 rounded-lg gap-2">
              <span className="text-xl font-bold py-2 text-primary-secondary">
                1. Conversation Rate Modeling
              </span>
              <p>
                Deploy and Implement using proven models and modern
                architecture.
              </p>

              <div className="w-full flex justify-center sm:justify-start">
                <Button
                  variant={"outline"}
                  className="px-4 py-2 w-32 border-primary text-primary mt-2 hover:bg-primary hover:text-secondary"
                >
                  Learn More
                </Button>
              </div>
            </li>
            <li className="flex flex-col  text-sm bg-secondary p-2 text-center sm:text-start sm:p-3 rounded-lg gap-2">
              <span className="text-xl font-bold py-2 text-primary-secondary">
                2. Customer Lifetime value
              </span>
              <p>
                {" "}
                Get access to our team of data experts to keep driving your
                analytics program forward.
              </p>
              <div className="w-full flex justify-center sm:justify-start">
                <Button
                  variant={"outline"}
                  className="px-4 py-2 w-32 border-primary text-primary mt-2 hover:bg-primary hover:text-secondary"
                >
                  Learn More
                </Button>
              </div>
            </li>

            <li className="flex flex-col  text-sm bg-secondary p-2 text-center sm:text-start sm:p-3 rounded-lg gap-2">
              <span className="text-xl font-bold py-2 text-primary-secondary">
                3. Customer Churn Prediction
              </span>
              <p>
                Our data engineers secure your analytics assets by guiding your
                transition to the cloud.
              </p>
              <div className="w-full flex justify-center sm:justify-start">
                <Button
                  variant={"outline"}
                  className="px-4 py-2 w-32 border-primary text-primary mt-2 hover:bg-primary hover:text-secondary"
                >
                  Learn More
                </Button>
              </div>
            </li>
          </ol>
        </Card>
      </div>
      <div className="w-full flex flex-col-reverse md:flex-row flex-wrap ">
        <Card className=" rounded-none border-none px-8 w-full md:w-1/2 py-4 min-h-[400px] sm:min-h-[650px] flex sm:justify-evenly  flex-col hover:shadow-lg ">
          <div className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl space-y-5 font-extrabold py-2">
            <h1>
              <span className="bg-clip-text bg-gradient-to-r text-primary">
                Operational Analytics
              </span>
            </h1>
          </div>
          <ol className="grid grid-col-1 md:grid-cols-2 gap-8">
            <li className="flex flex-col  text-sm bg-secondary p-2 text-center sm:text-start sm:p-3 rounded-lg gap-2">
              <span className="text-xl font-bold py-2 text-primary-secondary">
                1. Conversation Rate Modeling
              </span>
              <p>
                Deploy and Implement using proven models and modern
                architecture.
              </p>

              <div className="w-full flex justify-center sm:justify-start">
                <Button
                  variant={"outline"}
                  className="px-4 py-2 w-32 border-primary text-primary mt-2 hover:bg-primary hover:text-secondary"
                >
                  Learn More
                </Button>
              </div>
            </li>
            <li className="flex flex-col  text-sm bg-secondary p-2 text-center sm:text-start sm:p-3 rounded-lg gap-2">
              <span className="text-xl font-bold py-2 text-primary-secondary">
                2. Customer Lifetime value
              </span>
              <p>
                {" "}
                Get access to our team of data experts to keep driving your
                analytics program forward.
              </p>
              <div className="w-full flex justify-center sm:justify-start">
                <Button
                  variant={"outline"}
                  className="px-4 py-2 w-32 border-primary text-primary mt-2 hover:bg-primary hover:text-secondary"
                >
                  Learn More
                </Button>
              </div>
            </li>

            <li className="flex flex-col  text-sm bg-secondary p-2 text-center sm:text-start sm:p-3 rounded-lg gap-2">
              <span className="text-xl font-bold py-2 text-primary-secondary">
                3. Customer Churn Prediction
              </span>
              <p>
                Our data engineers secure your analytics assets by guiding your
                transition to the cloud.
              </p>
              <div className="w-full flex justify-center sm:justify-start">
                <Button
                  variant={"outline"}
                  className="px-4 py-2 w-32 border-primary text-primary mt-2 hover:bg-primary hover:text-secondary"
                >
                  Learn More
                </Button>
              </div>
            </li>
          </ol>
        </Card>
        <Card className="bg-primary-secondary rounded-none border-none px-8 w-full md:w-1/2 py-4 min-h-[400px] sm:min-h-[650px] flex sm:justify-evenly  flex-col hover:shadow-lg ">
          <div className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl space-y-5 font-extrabold py-2">
            <h1>
              <span className="bg-clip-text bg-gradient-to-r text-primary">
                Pricing Analytics
              </span>
            </h1>
          </div>
          <ol className="grid grid-col-1 md:grid-cols-2 gap-8">
            <li className="flex flex-col  text-sm bg-secondary p-2 text-center sm:text-start sm:p-3 rounded-lg gap-2">
              <span className="text-xl font-bold py-2 text-primary-secondary">
                1. Conversation Rate Modeling
              </span>
              <p>
                Deploy and Implement using proven models and modern
                architecture.
              </p>

              <div className="w-full flex justify-center sm:justify-start">
                <Button
                  variant={"outline"}
                  className="px-4 py-2 w-32 border-primary text-primary mt-2 hover:bg-primary hover:text-secondary"
                >
                  Learn More
                </Button>
              </div>
            </li>
            <li className="flex flex-col  text-sm bg-secondary p-2 text-center sm:text-start sm:p-3 rounded-lg gap-2">
              <span className="text-xl font-bold py-2 text-primary-secondary">
                2. Customer Lifetime value
              </span>
              <p>
                {" "}
                Get access to our team of data experts to keep driving your
                analytics program forward.
              </p>
              <div className="w-full flex justify-center sm:justify-start">
                <Button
                  variant={"outline"}
                  className="px-4 py-2 w-32 border-primary text-primary mt-2 hover:bg-primary hover:text-secondary"
                >
                  Learn More
                </Button>
              </div>
            </li>

            <li className="flex flex-col  text-sm bg-secondary p-2 text-center sm:text-start sm:p-3 rounded-lg gap-2">
              <span className="text-xl font-bold py-2 text-primary-secondary">
                3. Customer Churn Prediction
              </span>
              <p>
                Our data engineers secure your analytics assets by guiding your
                transition to the cloud.
              </p>
              <div className="w-full flex justify-center sm:justify-start">
                <Button
                  variant={"outline"}
                  className="px-4 py-2 w-32 border-primary text-primary mt-2 hover:bg-primary hover:text-secondary"
                >
                  Learn More
                </Button>
              </div>
            </li>
          </ol>
        </Card>
      </div>
    </>
  );
};

export default OurDNA;
