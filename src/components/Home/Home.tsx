import React from "react";

import Wrapper from "@/components/Container/Wrapper";
import Seprator from "@/components/Landing/Seprator";
import WhoWeAre from "@/components/Landing/WhoWeAre";
import MobileScroll from "@/components/mobileScroll/MobileScroll";
import StudyDesk from "@/components/Study/StudyDesk";
import StudySlide from "@/components/Study/StudySlide";
import Stats from "../Landing/Stat_circles"
import Productsteps from "../Landing/Productsteps";

import MobileDNATimeLine from "../Landing/Services/MobileDNATimeLine";
import Team from "../Team/Team";
import ToolsLogos from "../ToolsLogos";

const brands = [
  "/assets/images/grain-client-logos/KPMG.svg",
  "/assets/images/grain-client-logos/Allstream.svg",
  "/assets/images/grain-client-logos/aldo.svg",
  "/assets/images/grain-client-logos/Bell.svg",
  "/assets/images/grain-client-logos/zayo.svg",
  "/assets/images/grain-client-logos/Brookfield.svg",
  "/assets/images/grain-client-logos/canadian-tire.svg",
  "/assets/images/grain-client-logos/Deloitte.svg",
  "/assets/images/grain-client-logos/homesquare.svg",
  "/assets/images/grain-client-logos/Queens.svg",
  "/assets/images/grain-client-logos/SportChek.png",
  "/assets/images/grain-client-logos/TDbank.svg",
  "/assets/images/grain-client-logos/toronto.png",
  "/assets/images/grain-client-logos/vale.svg",
  "/assets/images/grain-client-logos/smith.png",
];
const TechTools = [
  "/assets/images/techtools/getintouch.svg",
  "/assets/images/techtools/aws.svg",
  "/assets/images/techtools/azure.svg",
  "/assets/images/techtools/databricks.svg",
  "/assets/images/techtools/meta.svg",
  "/assets/images/techtools/getintouch.svg",
  "/assets/images/techtools/aws.svg",
  "/assets/images/techtools/azure.svg",
  "/assets/images/techtools/databricks.svg",
  "/assets/images/techtools/meta.svg",
  "/assets/images/techtools/getintouch.svg",
  "/assets/images/techtools/aws.svg",
  "/assets/images/techtools/azure.svg",
  "/assets/images/techtools/databricks.svg",
  "/assets/images/techtools/meta.svg",
];
const Home = () => {
  return (
    <>
      {/* <ToolsLogos Logos={brands} /> */}
      <div className="flex w-full justify-center py-4 pb-6">
        <h1 className="text-2xl font-bold">How we help</h1>
      </div>
      <Stats></Stats>
      <Productsteps></Productsteps>
      {/* <WhoWeAre /> */}

      {/* <WhatWeDo /> */}

      {/* <OurDNA /> */}
      <div>
        <div className=" md:p-10 py-10 px-3 text-center  ">
          <h1 className="text-xl font-extrabold  text-primary uppercase">
            Our Services
             
          </h1>
          {/* <p className="text-sm text-gray-600">
            Our approach starts with understanding your data evolution stage.
          </p> */}
        </div>
        <div className="block sm:hidden">
          {/* <TimeLine /> */}
          {/* <MobileScreen /> */}
          {/* <DNATimeLine /> */}
          <MobileDNATimeLine />
        </div>
        <div className="sm:block hidden">
          <MobileScroll />
        </div>
      </div>
      <div className=" md:p-10 py-10 px-3 text-center  ">
        <h1 className="text-xl font-extrabold  text-primary uppercase">
          Supporting largest tech and data platforms
        </h1>
        {/* <p className="text-sm text-gray-600">
            Our approach starts with understanding your data evolution stage.
          </p> */}
      </div>
      <ToolsLogos Logos={TechTools} />
      <Seprator />
      {/* <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl space-y-5 font-extrabold text-center text-primary md:p-10 py-10 px-3">
  YOUR ANALYTICS JOURNEY BEGINS HERE
</h1> */}
      {/* <h1 className="uppercase block text-xl sm:text-2xl md:text-3xl lg:text-6xl space-y-5 font-extrabold text-center text-primary md:p-10 py-10 px-3">
  Spotlight: Data-driven Client Stories
</h1>
<CaseStudy /> */}

      {/* <Studies /> */}
      <h1 className="uppercase block text-xl space-y-5 font-extrabold text-center text-primary md:p-10 py-10 px-3"></h1>
      <div className="  px-3 text-center">
        <h1
          className="text-xl font-extrabold  text-primary uppercase "
          id="#sucess-stories"
        >
          Success Stories
        </h1>
        {/* <p className="text-sm text-gray-600">
          Our approach starts with understanding your data evolution stage.
        </p> */}
      </div>
      {/* <StudyDesk /> */}
      <div className="block sm:hidden">
        <Wrapper>
          <StudySlide />
        </Wrapper>
      </div>
      <StudyDesk />

      {/* <StudyMob /> */}
      <Wrapper>
        {/* <Team /> */}
      </Wrapper>
    </>
  );
};

export default Home;
