import Wrapper from "@/components/Container/Wrapper";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Navigation/Header";
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

const page = () => {
  return (
    <>
      <Wrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <h1 className="max-w-4xl text-2xl font-bold md:text-3xl lg:text-4xl">
          Build Better Products With{" "}
          <span className="text-primary">Customer Insights </span>
        </h1>
        <p className="mt-5 max-w-prose dark:text-gray-400 text-gray-600  sm:text-lg">
          Understand and communicate the needs of your customers to align
          stakeholders around the most important problems to solve.
        </p>

        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          href="/sign-up"
        >
          Try for Free <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Wrapper>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mt-16 flow-root sm:mt-24">
          <Card className="bg-primary-foreground -m-2 rounded-xl lg:-m-4 lg:rounded-2xl lg:p-16 p-4 md:p-8">
            <Image
              alt="growth image"
              src={"/assets/images/analyitics_background.jpg"}
              className="rounded-md shadow-lg w-full h"
              width={500}
              height={100}
            />
          </Card>
        </div>
      </div>
      <div className="min-h-[350px] md:min-h-[550px] w-full flex flex-col justify-center items-center md:flex-row md:justify-between px-4">
        <Wrapper className="w-full max-w-screen-xl px-2.5 md:px-12 flex flex-col-reverse sm:flex-row justify-between items-center">
          <div className="font-bold  md:text-start md:w-1/2 md:p-8">
            <div className="text-lg  font-extrabold  mt-10 sm:mt-0">
              <h1 className="text-3xl">
                Build a Roadmap based on User Stories
              </h1>
            </div>
            <div className="text-zinc-600 text-md font-normal pt-14">
              Your research is only as valuable as its reach. Amplify your
              findings by turning hours of customer interviews into beautiful
              and engaging stories—ready to share with your stakeholders.
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
              <h1 className="text-3xl">
                Customer Meetings to Insights in Seconds
              </h1>
            </div>
            <div className="text-zinc-600 text-md font-normal pt-14">
              Ditch the manual notes and capture insightful moments as they
              happen. No need to edit long recordings, switch between multiple
              apps or re-type your call notes.
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="min-h-[350px] md:min-h-[550px] w-full flex flex-col justify-center items-center md:flex-row md:justify-between px-4">
        <Wrapper className="w-full max-w-screen-xl px-2.5 md:px-12 flex flex-col-reverse sm:flex-row justify-between items-center">
          <div className="font-bold  md:text-start md:w-1/2 md:p-8">
            <div className="text-lg  font-extrabold  mt-10 sm:mt-0">
              <h1 className="text-3xl">
                Share your Customer's Perspective Everywhere
              </h1>
            </div>
            <div className="text-zinc-600 text-md font-normal pt-14">
              Share and collaborate with your team effortlessly. Publish Grain
              highlights and stories directly into your team’s favorite tools
              like Slack, Asana, Notion, and Productboard.
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
              <h1 className="text-3xl">Democratize Research Insights</h1>
            </div>
            <div className="text-zinc-600 text-md font-normal pt-14">
              Use Grain on your customer meetings to build an easy-to-use,
              searchable repository of customer and market knowledge. Your
              stakeholders can hear from the customer first hand, without any
              hand-holding.
            </div>
          </div>
        </Wrapper>
      </div>
      <Wrapper>
        <div className="w-full flex flex-wrap gap-2 justify-between items-center mt-10 sm:mt-20 ">
          <Card className="w-full h-[450px] sm:w-[350px] shadow-lg border">
            <CardHeader>
              <Image
                alt="growth image"
                src={"/assets/images/analytics_background.jpg"}
                className="rounded-md shadow-lg w-full h-56"
                width={100}
                height={100}
              />
              <CardTitle className="text-xl mt-4 font-semibold">
                Parse and Analyze All Your Interviews
              </CardTitle>
              <CardDescription>
                Clip the golden nuggets from your customer interviews and share
                them effortlessly.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full h-[450px] sm:w-[350px] shadow-lg border">
            <CardHeader>
              <Image
                alt="growth image"
                src={"/assets/images/getintouch.png"}
                className="rounded-md shadow-lg w-full h-56"
                width={100}
                height={100}
              />
              <CardTitle className="text-xl mt-4 font-semibold">
                Embed Your Customer's Perspective in Product Briefs and
                Engineering Tickets
              </CardTitle>
              <CardDescription>
                Let your stakeholders hear from customers first-hand on the most
                important problems to solve.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full h-[450px] sm:w-[350px] shadow-lg border">
            <CardHeader>
              <Image
                alt="growth image"
                src={"/assets/images/ggetintouch.png"}
                className="rounded-md shadow-lg w-full h-56"
                width={100}
                height={100}
              />
              <CardTitle className="text-xl mt-4 font-semibold">
                Compile Stories of User Feedback
              </CardTitle>
              <CardDescription>
                Remix and combine customer clips to tell a powerful narrative.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Wrapper>
    </>
  );
};

export default page;
