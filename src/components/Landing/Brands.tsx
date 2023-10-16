"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Brands = () => {
  useEffect(() => {
    // ingore typescript error
    const ul = document.getElementById("logos");
    if (ul) {
      const clone = ul.cloneNode(true);
      ul.parentNode?.appendChild(clone);

      const scroll = () => {
        ul.style.transform = "translateX(0)";
        ul.style.transition = "none";
        setTimeout(() => {
          ul.style.transition = "transform 15s linear";
          ul.style.transform = `translateX(-${ul.offsetWidth}px)`;
        }, 100);
      };

      const scrollInterval = setInterval(scroll, 15000);

      return () => {
        clearInterval(scrollInterval);
      };
    }
  }, []);
  return (
    <main className="relative flex flex-col justify-center bg-secondary overflow-hidden mt-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl space-y-5 font-extrabold text-center text-primary pt-20">
        Trusted by Leading Brands:
      </h1>
      <div className="w-full max-w-5xl mx-auto px-4 md:px-2 py-20">
        <div className="text-center">
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul
              id="logos"
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
              <li>
                <Image
                  src={"/assets/images/grain-client-logos/aldo.svg"}
                  alt="aldo"
                  width={150}
                  height={150}
                  className="hover:text-gray-900 dark:hover:text-white"
                />
              </li>
              <li>
                <Image
                  src={"/assets/images/grain-client-logos/Bell.svg"}
                  alt="aldo"
                  width={150}
                  height={150}
                  className="hover:text-gray-900 dark:hover:text-white"
                />
              </li>
              <li>
                <Image
                  src={"/assets/images/grain-client-logos/zayo.svg"}
                  alt="aldo"
                  width={150}
                  height={150}
                  className="hover:text-gray-900 dark:hover:text-white"
                />
              </li>
              <li>
                <Image
                  src={"/assets/images/grain-client-logos/Brookfield.svg"}
                  alt="aldo"
                  width={150}
                  height={150}
                  className="hover:text-gray-900 dark:hover:text-white"
                />
              </li>
              <li>
                <Image
                  src={"/assets/images/grain-client-logos/canadian-tire.svg"}
                  alt="aldo"
                  width={150}
                  height={150}
                  className="hover:text-gray-900 dark:hover:text-white"
                />
              </li>
              <li>
                <Image
                  src={"/assets/images/grain-client-logos/Deloitte.svg"}
                  alt="aldo"
                  width={150}
                  height={150}
                  className="hover:text-gray-900 dark:hover:text-white"
                />
              </li>
              <li>
                <Image
                  src={"/assets/images/grain-client-logos/homesquare.svg"}
                  alt="aldo"
                  width={150}
                  height={150}
                  className="hover:text-gray-900 dark:hover:text-white"
                />
              </li>
              <li>
                <Image
                  src={"/assets/images/grain-client-logos/Queens.svg"}
                  alt="aldo"
                  width={150}
                  height={150}
                  className="hover:text-gray-900 bg-black p-2 dark:hover:text-white"
                />
              </li>
              <li>
                <Image
                  src={"/assets/images/grain-client-logos/sportchek.svg"}
                  alt="aldo"
                  width={150}
                  height={150}
                  className="hover:text-gray-900 bg-black p-2 dark:hover:text-white"
                />
              </li>
              <li>
                <Image
                  src={"/assets/images/grain-client-logos/tdbank.png"}
                  alt="aldo"
                  width={150}
                  height={150}
                  className="hover:text-gray-900 dark:hover:text-white"
                />
              </li>
              <li>
                <Image
                  src={"/assets/images/grain-client-logos/UniToronto.svg"}
                  alt="aldo"
                  width={150}
                  height={150}
                  className="hover:text-gray-900 bg-black p-2 dark:hover:text-white"
                />
              </li>
              <li>
                <Image
                  src={"/assets/images/grain-client-logos/vale.svg"}
                  alt="aldo"
                  width={150}
                  height={150}
                  className="hover:text-gray-900 dark:hover:text-white"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Brands;
