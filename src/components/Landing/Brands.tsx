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
type BrandProps = {
  Logos: string[];
};
const Brands = ({ Logos }: BrandProps) => {
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
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll "
      >
        {Logos.map((src, index) => (
          <BrandItem
            key={index}
            src={src}
            alt={`brand-${index}`}
            width={60}
            height={60}
            className="transition ease-in-out "
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

export default Brands;
