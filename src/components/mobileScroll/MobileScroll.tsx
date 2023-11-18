"use client";
import { useState } from "react";
import "./mobileScroll.css";
import ScreenText from "./ScreenText";
import Image from "next/image";

const scrollData = [
  {
    heading: "Customer Analytics",
    description:
      "Get access to our team of data experts to keep driving your analytics program forward. Our data engineers secure your analytics assets by guiding your transition to the cloud.",
    mobile_img: "/assets/images/vertical/v1.png",
  },
  {
    heading: "Retail Analytics",
    description:
      " Get access to our team of data experts to keep driving your analytics program forward. Our data engineers secure your analytics assets by guiding your transition to the cloud.",
    mobile_img: "/assets/images/vertical/v2.png",
  },

  {
    heading: "Pricing Analytics",
    description:
      " Get access to our team of data experts to keep driving your analytics program forward. Our data engineers secure your analytics assets by guiding your transition to the cloud.",
    mobile_img: "/assets/images/vertical/v3.png",
  },
];

const MobileScroll = () => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className="max-width flex mobile-scroll">
      <div className="scroll-full-screen-wrapper">
        {scrollData.map((screen, i) => (
          <div className="scroll-full-screen" key={i}>
            <ScreenText screen={screen} i={i} setCurrentImg={setCurrentImg} />
          </div>
        ))}
      </div>
      <div className="mobile-mockup-wrapper non-mobile">
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen flex absolute-center ">
            <Image
              src={scrollData[currentImg].mobile_img}
              alt=""
              className="mobile-screen-image scale-up-right bg-primary-secondary"
              width={500}
              height={100}
              key={scrollData[currentImg].mobile_img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;
