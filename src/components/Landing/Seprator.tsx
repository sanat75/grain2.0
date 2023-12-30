import React from "react";
import { Button } from "../ui/button";
import { SendIcon } from "lucide-react";
import Wrapper from "../Container/Wrapper";
import Image from "next/image";
import Link from "next/link";

const Seprator = () => {
  return (
    <div className="relative p-4  mt-10 sm:my-30 h-80  text-white flex justify-center items-center bg-black/80">
      {/* <Image
        alt="get in touch"
        src="/assets/images/ggetintouch.png"
        className="absolute top-0 right-0 w-full h-full  "
        width={500}
        height={500}
      /> */}
      <div className="absolute flex flex-col md:px-8">
        <h1 className="text-lg font-semibold text-primary px-2  uppercase">
          Who we are
        </h1>
        <h1 className="text-2xl md:text-5xl font-semibold text-white px-2 my-3">
          We're advisors, strategists, and engineers focused on people, above
          all else
        </h1>
        {/* <p className="text-sm md:text-sm font-medium text-center p-2">
          We work with you to identify gaps and find solutions perfect for you
          and your unique journey. Let&apos;s talk about your project.
        </p> */}
        <Link
          target="_blank"
          href={"https://calendly.com/grainanalytics1/30min"}
        >
          <Button
            variant={"outline"}
            className="text-primary mt-4 border-primary hover:bg-primary hover:text-white transition-all ease-in-out w-44 mx-2 flex justify-around items-center"
          >
            Get in touch <SendIcon className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Seprator;
