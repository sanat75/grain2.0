import Wrapper from "@/components/Container/Wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const MobileDNATimeLine = () => {
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
  return (
    <Wrapper>
      <div className="w-full flex p-2 flex-col">
        {scrollData.map((screen, i) => (
          <div className="w-full py-4" key={i}>
            <h1 className="font-bold text-6xl">{screen.heading}</h1>
            <p className="text-md py-4 text-gray-500">{screen.description}</p>
            <Link href={screen.route}>
              <Button
                variant="outline"
                className="md:text-lg p-4 md:p-6 text-primary border-primary hover:bg-primary hover:text-white transition-all ease-in-out"
              >
                know more
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default MobileDNATimeLine;
