"use client";
import Image from "next/image";
import React from "react";

interface BrandsProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}
type BrandProps = {
  Logos: string[];
};

const ToolsLogos = ({ Logos }: BrandProps) => {
  return (
    <div className="relative m-auto  sm:w-screen overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(250px*10)]">
        {Logos.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            <BrandItem
              key={index}
              src={logo}
              alt={`brand-${index}`}
              width={60}
              height={60}
              className="transition ease-in-out "
            />
          </div>
        ))}
        {Logos.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            <BrandItem
              key={index}
              src={logo}
              alt={`brand-${index}`}
              width={60}
              height={60}
              className="transition ease-in-out "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsLogos;

const BrandItem: React.FC<BrandsProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => (
  <div className="w-32 h-32 flex items-center justify-center grayscale hover:grayscale-0">
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  </div>
);
