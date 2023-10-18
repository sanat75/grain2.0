import Wrapper from "@/components/Container/Wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-full w-full flex items-center flex-row justify-between">
        <div className="relative w-full h-full">
          <Image
            alt="analytics background image"
            src={"/assets/Hero/spaceanalytics.png"}
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
          />
        </div>

        <Wrapper className="absolute">
          <div className="font-bold pt-10 md:pt-32 space-y-5 ">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl space-y-5 font-extrabold text-white">
              <h1>
                Revitalizing Data Insights with{" "}
                <span className="text-primary">Innovation.</span>{" "}
              </h1>
            </div>
            <div className="text-sm md:text-xl font-light text-zinc-300">
              Pioneering the Age of Data Science and AI Advancements.
            </div>
            <div className="text-zinc-300 text-xs md:text-sm font-normal">
              We assist organizations in harnessing their data potential by
              combining strategic insight with development proficiency.
            </div>
            <div>
              <Link href={"/contact"}>
                <Button
                  variant={"primary"}
                  className="md:text-lg p-4 md:p-6  font-semibold flex gap-2 hover:scale-105 transition-all"
                >
                  <span>Contact Us</span>
                  <span>
                    <ArrowRight />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
