"use client";
import Wrapper from "@/components/Container/Wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const MobileDNATimeLine = () => {
  const scrollData = [
    {
      heading: "Customer Analytics",
      description:
        "Our proven AI and ML provide actionable predictions of customer activity, proven to guide business decisions for better results. Build optimized user acquisition and retention strategies through advanced knowledge of user behaviorand precise targeting.",
      mobile_img: "/assets/images/dashboard/dash1.jpg",
      route: "/services/customeranalytics",
    },
    {
      heading: "Retail Analytics",
      description:
        "Get insight into the factors that drive demand. Inform data- driven decisions across the business, including sales, finance, marketing, and production. Improve inventory levels, reduce costs, and deliver products efficiently to make customers happy.",
      mobile_img: "/assets/images/dashboard/dash2.jpg",
      route: "/services/retailanalytics",
    },

    {
      heading: "Pricing Analytics",
      description:
        "Complex analytics applied to comprehensive data generate the right roadmap to improve the top line, margins, market share, and customer experience. Bring together real-time insights from your e-commerce site, customer data, competitive research, and more.",
      mobile_img: "/assets/images/dashboard/dash3.jpg",
      route: "/services/pricinganalytics",
    },
  ];
  const [currentItem, setCurrentItem] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((currentItem) =>
        currentItem === scrollData.length - 1 ? 0 : currentItem + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [currentItem]);

  const nextItem = () => {
    setCurrentItem((prev) => (prev + 1) % scrollData.length);
  };

  const prevItem = () => {
    setCurrentItem(
      (prevItem) => (prevItem - 1 + scrollData.length) % scrollData.length
    );
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentItem(slideIndex);
  };
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="mobile-mockup-screen absolute flex-box absolute-center w">
        <Image
          src={scrollData[currentItem].mobile_img}
          alt=""
          className=" bg-primary transition-all ease-out relative"
          width={500}
          height={100}
          key={scrollData[currentItem].mobile_img}
        />
      </div>
      <div className="w-full flex p-2 flex-col relative">
        {scrollData.map((screen, index) => (
          <div
            key={index}
            className={`${
              currentItem === index
                ? "w-full h-96 flex flex-col justify-center py-4 transition-all duration-500 ease-in-out px-3 md:p-10 rounded-3xl slide-fade active z-20"
                : "hidden"
            }`}
          >
            <h1 className="font-bold text-5xl text-primary px-4">
              {screen.heading}
            </h1>
            <p className="text-md py-4 text-white px-4">{screen.description}</p>
            <Link href={screen.route}>
              <Button
                variant="outline"
                className="md:text-lg p-4 ml-4 md:p-6 text-primary border-primary hover:bg-primary hover:text-white transition-all ease-in-out"
              >
                know more
              </Button>
            </Link>
          </div>
        ))}
        <div className="sm:hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 -left-3 text-2xl rounded-full p-2 font-bold z-50 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevItem} size={50} />
        </div>

        <div className="sm:hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 -right-3 text-2xl rounded-full p-2 font-bold z-50 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextItem} size={50} />
        </div>

        <div className="flex top-4 justify-center py-2 z-20">
          {scrollData.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${
                slideIndex === currentItem ? "text-primary" : "text-white"
              }`}
            >
              <RxDotFilled size={40} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileDNATimeLine;
