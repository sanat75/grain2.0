import Wrapper from "@/components/Container/Wrapper";

import Seprator from "@/components/Landing/Seprator";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import React from "react";

const page = () => {
  return (
    <>
      <Wrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Customer Analytics
        </h1>
        <p className="mt-5 max-w-prose dark:text-gray-400 text-gray-600  sm:text-lg">
          Discover the new features and the latest customer analytics updates
          before anyone else.
        </p>
        <div>
          <div className="relative isolate">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] bg-gradient-to-r from-purple-200 via-purple-600 to-purple-800"
              />
            </div>
          </div>
        </div>
        <Card className="w-full  mt-10 flex flex-col sm:flex-row p-4 justify-between items-center sm:px-4 bg-primary-secondary/20">
          <CardHeader>
            <CardTitle className="text-sm text-start uppercase text-primary">
              FEATURED ARTICLE
            </CardTitle>
            <CardDescription className="text-3xl text-start">
              Introducing the Future of Meeting Notes
            </CardDescription>
          </CardHeader>
          <div>
            <Image
              alt="growth image"
              src={"/assets/images/analyitics_background.jpg"}
              className="rounded-md shadow-lg w-full"
              width={500}
              height={100}
            />
          </div>
        </Card>
        <div className="w-full flex flex-wrap gap-5 justify-between items-center mt-10 sm:mt-20 ">
          <Card className="w-full h-[450px] sm:w-[550px] shadow-lg border">
            <CardHeader>
              <Image
                alt="growth image"
                src={"/assets/images/analytics_background.jpg"}
                className="rounded-md shadow-lg w-full h-56"
                width={100}
                height={100}
              />
            </CardHeader>
            <CardContent className="text-2xl font-semibold">
              Whats New in Grain: Send Automated Meeting Summaries to HubSpot
            </CardContent>
          </Card>
          <Card className="w-full h-[450px] sm:w-[550px] shadow-lg border">
            <CardHeader>
              <Image
                alt="growth image"
                src={"/assets/images/getintouch.png"}
                className="rounded-md shadow-lg w-full h-56"
                width={100}
                height={100}
              />
            </CardHeader>
            <CardContent className="text-2xl font-semibold">
              Whats New in Grain: Collections, Bulk Actions, and Support for
              Google Meet and Teams
            </CardContent>
          </Card>
          <Card className="w-full h-[450px] sm:w-[550px] shadow-lg border">
            <CardHeader>
              <Image
                alt="growth image"
                src={"/assets/images/ggetintouch.png"}
                className="rounded-md shadow-lg w-full h-56"
                width={100}
                height={100}
              />
            </CardHeader>
            <CardContent className="text-2xl font-semibold">
              Whats New in Grain: New Ways to Navigate Your Library and Share
              Your Meetings
            </CardContent>
          </Card>
          <Card className="w-full h-[450px] sm:w-[550px] shadow-lg border">
            <CardHeader>
              <Image
                alt="growth image"
                src={"/assets/images/analyitics_background.jpg"}
                className="rounded-md shadow-lg w-full h-56"
                width={100}
                height={100}
              />
            </CardHeader>
            <CardContent className="text-2xl font-semibold">
              Whats New in Grain: Revamped Library, Single Sign On, and More
            </CardContent>
          </Card>
          <Card className="w-full h-[450px] sm:w-[550px] shadow-lg border">
            <CardHeader>
              <Image
                alt="growth image"
                src={"/assets/images/analytics_background.jpg"}
                className="rounded-md shadow-lg w-full h-56"
                width={100}
                height={100}
              />
            </CardHeader>
            <CardContent className="text-2xl font-semibold">
              Whats New in Grain: Video Library, #Tags, and More
            </CardContent>
          </Card>
          <Card className="w-full h-[450px] sm:w-[550px] shadow-lg border">
            <CardHeader>
              <Image
                alt="growth image"
                src={"/assets/images/getintouch.png"}
                className="rounded-md shadow-lg w-full h-56"
                width={100}
                height={100}
              />
            </CardHeader>
            <CardContent className="text-2xl font-semibold">
              Introducing the Grain App for Zoom
            </CardContent>
          </Card>
          <Card className="w-full h-[450px] sm:w-[550px] shadow-lg border">
            <CardHeader>
              <Image
                alt="growth image"
                src={"/assets/images/ggetintouch.png"}
                className="rounded-md shadow-lg w-full h-56"
                width={100}
                height={100}
              />
            </CardHeader>
            <CardContent className="text-2xl font-semibold">
              Cure your Zoom amnesia with Grain 2.0
            </CardContent>
          </Card>
        </div>
      </Wrapper>
      <Seprator />
    </>
  );
};

export default page;
