"use client";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Wrapper from "../Container/Wrapper";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
const Hero=()=>{
  const divStyle = {
    background: "linear-gradient(161deg, #F2B947 22.09%, #F8DA3E 79.17%, #FFE870 100%)"
  };
  return (<div style={divStyle} className="h-3/4 w-full">
    <div className="size-full flex-col content-center px-4">
      {/* <div className="flex justify-center justify-items-center text-balance text-3xl font-semibold"><h1>Revitlising Data Insights with Innovation</h1></div> */}
      <div className="flex-col py-4">
        <div className="flex justify-center justify-items-center flex-wrap text-3xl font-semibold lg:hidden"><h1>Revitalising </h1></div>
        <div className="flex justify-center justify-items-center flex-wrap text-3xl font-semibold lg:hidden"><h1> Data Insights </h1></div>
        <div className="flex justify-center justify-items-center flex-wrap text-3xl font-semibold lg:hidden"><h1>with Innovation</h1></div>
        <div className="flex justify-center justify-items-center flex-wrap text-4xl font-semibold hidden lg:flex"><h1>Revitalising Data Insights with Innovation</h1></div>
        

      </div>
      <div className="flex-col py-6">
        <div className="flex justify-center justify-items-center lg:hidden text-lg"><p>Harnessing your data potential </p></div>
        <div className="flex justify-center justify-items-center lg:hidden text-lg"><p>by combining strategic insight </p></div>
        <div className="flex justify-center justify-items-center lg:hidden text-lg"><p>with developmental proficiency</p></div>
        <div className="flex justify-center justify-items-center hidden lg:flex text-lg"><p>Harnessing your data potential by combining strategic</p></div>
        <div className="flex justify-center justify-items-center hidden lg:flex text-lg"><p>insight with developmental proficiency</p></div>
        
      </div>
      <div className="flex justify-center ">
        <div className="flex my-4 bg-white rounded-sm p-2 font-medium justify-center justify-items-center w-60 shadow-md  "><Link
                href={"https://calendly.com/grainanalytics1/30min"}>
                Book a Demo
              </Link></div>
      </div>
    </div>
    
    <ToolsLogos Logos={brands} />
    </div>
    
    
    
    
    );
}



export default Hero;
