"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

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
  ];
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", () => {
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth ===
          scrollContainer.scrollWidth
        ) {
          const firstBrand = brands.shift();
          brands.push(firstBrand || "");

          scrollContainer.scrollLeft = 0;
        }
      });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", () => {
          if (
            scrollContainer.scrollLeft + scrollContainer.clientWidth ===
            scrollContainer.scrollWidth
          ) {
            const firstBrand = brands.shift();

            brands.push(firstBrand || ""); // add null check here

            scrollContainer.scrollLeft = 0;
          }
        });
      }
    };
  }, [brands]);
  return (
    <main
      className="flex overflow-x-scroll hide-scroll-bar"
      ref={scrollContainerRef}
    >
      <div className="flex flex-nowrap">
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
  <div className="w-48 h-48 flex items-center justify-center hover:bg-secondary hover:shadow-2xl transition-all border border-white bg-secondary">
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
