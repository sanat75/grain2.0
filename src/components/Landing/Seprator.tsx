import React from "react";
import { Button } from "../ui/button";
import { SendIcon } from "lucide-react";
import Wrapper from "../Container/Wrapper";
import Image from "next/image";

const Seprator = () => {
  return (
    <div className="relative p-4  mt-10 sm:my-30 h-80  text-white flex justify-center items-center bg-[#071C33]">
      <Image
        alt="get in touch"
        src="/assets/images/ggetintouch.png"
        className="absolute top-0 right-0 w-full h-full  "
        width={500}
        height={500}
      />
      <div className="absolute flex flex-col justify-center items-center ">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-secondary my-3">
          Ready to get started?
        </h1>
        <p className="text-md md:text-lg font-medium text-center p-2">
          We work with you to identify gaps and find solutions perfect for you
          and your unique journey.
        </p>
        <p className="text-md md:text-md font-normal">
          Let&apos;s talk about your project.
        </p>
        <Button className="bg-primary-secondary text-white px-8 py-2  mt-4">
          Get in touch <SendIcon className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Seprator;
