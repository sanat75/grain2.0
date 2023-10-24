"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BrandsProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}

const Brands: React.FC = () => {
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
  useEffect(() => {
    const div = document.getElementById("logos-container");

    if (div) {
      div.insertAdjacentHTML("afterend", div.outerHTML);
      const nextSibling = div?.nextSibling as HTMLElement;
      nextSibling?.setAttribute("aria-hidden", "true");
    }
    // write clean up
    return () => {
      const nextSibling = div?.nextSibling as HTMLElement;
      nextSibling?.remove();
    };
  }, []);
  return (
    <main className=" w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <div
        id="logos-container"
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        {brands.map((src, index) => (
          <BrandItem
            key={index}
            src={src}
            alt={`brand-${index}`}
            width={100}
            height={100}
            className="transition ease-in-out"
          />
        ))}
      </div>
    </main>
  );
};

const BrandItem: React.FC<BrandsProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => (
  <div className="w-48 h-48 flex items-center justify-center hover:bg-secondary hover:shadow-2xl transition-all border border-secondary">
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  </div>
);

export default Brands;
