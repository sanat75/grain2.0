import Image from "next/image";
import Link from "next/link";
import React from "react";

const Brands = () => {
  return (
    <section>
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
          Trusted by the world's best companies
        </h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <Link href="#" className="flex justify-center items-center">
            <Image
              src={"/assets/images/grain-client-logos/aldo.svg"}
              alt="aldo"
              width={150}
              height={150}
              className="hover:text-gray-900 dark:hover:text-white"
            />
          </Link>
          <Link href="#" className="flex justify-center items-center">
            <Image
              src={"/assets/images/grain-client-logos/bell.svg"}
              alt="aldo"
              width={150}
              height={150}
              className="hover:text-gray-900 dark:hover:text-white"
            />
          </Link>
          <Link href="#" className="flex justify-center items-center">
            <Image
              src={"/assets/images/grain-client-logos/zayo.svg"}
              alt="aldo"
              width={150}
              height={150}
              className="hover:text-gray-900 dark:hover:text-white"
            />
          </Link>
          <Link href="#" className="flex justify-center items-center">
            <Image
              src={"/assets/images/grain-client-logos/Brookfield.svg"}
              alt="aldo"
              width={150}
              height={150}
              className="hover:text-gray-900 dark:hover:text-white"
            />
          </Link>
          <Link href="#" className="flex justify-center items-center">
            <Image
              src={"/assets/images/grain-client-logos/canadian-tire.svg"}
              alt="aldo"
              width={150}
              height={150}
              className="hover:text-gray-900 dark:hover:text-white"
            />
          </Link>
          <Link href="#" className="flex justify-center items-center">
            <Image
              src={"/assets/images/grain-client-logos/Deloitte.svg"}
              alt="aldo"
              width={150}
              height={150}
              className="hover:text-gray-900 dark:hover:text-white"
            />
          </Link>
          <Link href="#" className="flex justify-center items-center">
            <Image
              src={"/assets/images/grain-client-logos/homesquare.svg"}
              alt="aldo"
              width={150}
              height={150}
              className="hover:text-gray-900 dark:hover:text-white"
            />
          </Link>
          <Link href="#" className="flex justify-center items-center">
            <Image
              src={"/assets/images/grain-client-logos/Queens.svg"}
              alt="aldo"
              width={150}
              height={150}
              className="hover:text-gray-900 bg-black p-2 dark:hover:text-white"
            />
          </Link>
          <Link href="#" className="flex justify-center items-center">
            <Image
              src={"/assets/images/grain-client-logos/sportchek.svg"}
              alt="aldo"
              width={150}
              height={150}
              className="hover:text-gray-900 bg-black p-2 dark:hover:text-white"
            />
          </Link>
          <Link href="#" className="flex justify-center items-center">
            <Image
              src={"/assets/images/grain-client-logos/tdbank.png"}
              alt="aldo"
              width={150}
              height={150}
              className="hover:text-gray-900 dark:hover:text-white"
            />
          </Link>
          <Link href="#" className="flex justify-center items-center">
            <Image
              src={"/assets/images/grain-client-logos/UniToronto.svg"}
              alt="aldo"
              width={150}
              height={150}
              className="hover:text-gray-900 bg-black p-2 dark:hover:text-white"
            />
          </Link>
          <Link href="#" className="flex justify-center items-center">
            <Image
              src={"/assets/images/grain-client-logos/vale.svg"}
              alt="aldo"
              width={150}
              height={150}
              className="hover:text-gray-900 dark:hover:text-white"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Brands;
