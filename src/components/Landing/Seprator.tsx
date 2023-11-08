import React from "react";
import { Button } from "../ui/button";
import { SendIcon } from "lucide-react";
import Wrapper from "../Container/Wrapper";
import Image from "next/image";

const Seprator = () => {
  return (
    <Wrapper className="relative sm:rounded-3xl my-10 sm:my-30 h-80  text-white flex justify-center items-center bg-[#071C33]">
      <Image
        alt="get in touch"
        src="/assets/images/ggetintouch.png"
        className="absolute top-0 right-0 w-full h-full sm:rounded-3xl "
        width={500}
        height={500}
      />
      <div className="absolute flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold text-primary-secondary my-3">
          Ready to get started?
        </h1>
        <p className="text-lg font-medium">
          Let&apos;s talk about your project
        </p>
        <Button className="bg-primary-secondary text-white px-8 py-2  mt-4">
          Get in touch <SendIcon className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </Wrapper>
  );
};

export default Seprator;
