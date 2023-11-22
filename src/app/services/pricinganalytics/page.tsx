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
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500"
            />
          </div>
        </div>

        <div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              <Card className="bg-primary-foreground -m-2 rounded-xl lg:-m-4 lg:rounded-2xl lg:p-16 p-4 md:p-8">
                <Image
                  alt="growth image"
                  src={"/assets/images/pagesimages/8.svg"}
                  className="w-full"
                  width={1419}
                  height={732}
                  quality={100}
                />
              </Card>
            </div>
          </div>
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
                className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl ">
              Start chatting in minutes
            </h2>
            <p className="mt-4 text-lg dark:text-gray-400 text-gray-600">
              Chatting to your PDF files has never been easier than with
              Infinidocs.
            </p>
          </div>
        </div>
        {/* steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0 p-4">
          <li className="md:flex-1 bg-primary-foreground p-8 rounded-lg shadow-lg border">
            <span className="text-sm font-medium text-primary">Step 1</span>
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-xl font-semibold">
                Sign up for an account
              </span>
              <span className="mt-2 dark:text-gray-400 text-gray-600">
                Either starting out with a free plan or choose our{" "}
                <Link
                  href="/pricing"
                  className="text-primary underline underline-offset-2"
                >
                  pro plan
                </Link>
                .
              </span>
            </div>
          </li>
          <li className="md:flex-1 bg-primary-foreground p-8 rounded-lg shadow-lg border">
            <span className="text-sm font-medium text-primary">Step 2</span>
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-xl font-semibold">
                Upload your PDF file
              </span>
              <span className="mt-2 dark:text-gray-400 text-gray-600">
                We&apos;ll process your file and make it ready for you to chat
                with.
              </span>
            </div>
          </li>
          <li className="md:flex-1 bg-primary-foreground p-8 rounded-lg shadow-lg border">
            <span className="text-sm font-medium text-primary">Step 3</span>
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-xl font-semibold">
                Start asking questions
              </span>
              <span className="mt-2 dark:text-gray-400 text-gray-600">
                It&apos;s that simple. Try out Infinidocs today - it really
                takes less than a minute.
              </span>
            </div>
          </li>
        </ol>

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
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500"
            />
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <Card className="bg-primary-foreground -m-2 rounded-xl lg:-m-4 lg:rounded-2xl lg:p-16 p-4 md:p-8">
              <Image
                alt="growth image"
                src={"/assets/images/pagesimages/2.png"}
                className="w-full"
                width={1419}
                height={732}
                quality={100}
              />
            </Card>
          </div>
        </div>
      </div>
      {/* <div className="hidden sm:block mx-auto max-w-3xl px-6 lg:px-8">
        <div className="flow-root ">
          <Card className="border-none shadow-none -m-2 rounded-xl lg:-m-4 lg:rounded-2xl lg:p-16 p-4 md:p-8">
            <Image
              alt="growth image"
              src={"/assets/images/pagesimages/8.svg"}
              className="w-full"
              width={100}
              quality={100}
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
              src={"/assets/images/pagesimages/2.png"}
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
              src={"/assets/images/pagesimages/3.png"}
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
                Share your Customer&apos;s Perspective Everywhere
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
              src={"/assets/images/pagesimages/4.png"}
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
              src={"/assets/images/pagesimages/5.png"}
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
      </div> */}
      <Wrapper>
        <div className="w-full flex flex-wrap gap-2 justify-between items-center  sm:mb-20 ">
          <Card className="w-full h-[350px] sm:w-[350px] shadow-lg border">
            <CardHeader>
              <Image
                alt="growth image"
                src={"/assets/images/pagesimages/6.png"}
                className="rounded-md shadow-lg w-full h-56"
                width={100}
                height={100}
              />
              <CardTitle className="text-lg  mt-4 font-medium text-center">
                Parse and Analyze All Your Interviews
              </CardTitle>
              {/* <CardDescription>
                Clip the golden nuggets from your customer interviews and share
                them effortlessly.
              </CardDescription> */}
            </CardHeader>
          </Card>
          <Card className="w-full h-[350px] sm:w-[350px] shadow-lg border">
            <CardHeader>
              <Image
                alt="growth image"
                src={"/assets/images/pagesimages/7.png"}
                className="rounded-md shadow-lg w-full h-56"
                width={100}
                height={100}
              />
              <CardTitle className="text-lg  mt-4 font-medium text-center">
                Embed Your Customer&apos;s Perspective in Product Briefs and
                Engineering Tickets
              </CardTitle>
              {/* <CardDescription>
                Let your stakeholders hear from customers first-hand on the most
                important problems to solve.
              </CardDescription> */}
            </CardHeader>
          </Card>
          <Card className="w-full h-[350px] sm:w-[350px] shadow-lg border">
            <CardHeader>
              <Image
                alt="growth image"
                src={"/assets/images/pagesimages/2.png"}
                className="rounded-md shadow-lg w-full h-56"
                width={100}
                height={100}
              />
              <CardTitle className="text-lg  mt-4 font-medium text-center">
                Compile Stories of User Feedback
              </CardTitle>
              {/* <CardDescription>
                Remix and combine customer clips to tell a powerful narrative.
              </CardDescription> */}
            </CardHeader>
          </Card>
        </div>
      </Wrapper>
    </>
  );
};

export default page;
