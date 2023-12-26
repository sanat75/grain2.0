"use client";
import { useState } from "react";
import "./mobileScroll.css";
import ScreenText from "./ScreenText";
import Image from "next/image";

const scrollData = [
  {
    heading: "Customer Analytics",
    description:
      "Our proven AI and ML provide actionable predictions of customer activity, proven to guide business decisions for better results. Build optimized user acquisition and retention strategies through advanced knowledge of user behaviorand precise targeting.",
    mobile_img: "/assets/images/vertical/v1.png",
    route: "/services/customeranalytics",
  },
  {
    heading: "Retail Analytics",
    description:
      "Predict future consumer demand for everything you sell. Get insight into the factors that drive demand. Inform data- driven decisions across the business, including sales, finance, marketing, and production. Improve inventory levels, reduce costs, and deliver products efficiently to make customers happy.",
    mobile_img: "/assets/images/vertical/v2.png",
    route: "/services/retailanalytics",
  },

  {
    heading: "Pricing Analytics",
    description:
      "Complex analytics applied to comprehensive data generate the right roadmap to improve the top line, margins, market share, and customer experience. Bring together real-time insights from your e-commerce site, customer data, competitive research, and more.",
    mobile_img: "/assets/images/vertical/v3.png",
    route: "/services/pricinganalytics",
  },
];

const MobileScroll = () => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className="max-width-class flex-box mobile-scroll">
      <div className="scroll-full-screen-wrapper">
        {scrollData.map((screen, i) => (
          <div className="scroll-full-screen" key={i}>
            <ScreenText screen={screen} i={i} setCurrentImg={setCurrentImg} />
          </div>
        ))}
      </div>
      <div className="mobile-mockup-wrapper non-mobile">
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen flex-box absolute-center">
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
