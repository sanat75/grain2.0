"use client";
import Image from "next/image";
import React from "react";
import { Casetudy } from "../../utils/Data/Casetudy";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Studies = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="md:hidden w-full h-24 md:h-48 border-b md:border flex justify-center items-center">
        <h1 className="text-primary text-center font-bold text-3xl">
          CLIENTS STORIES
        </h1>
      </div>

      {Casetudy.map((item: any, i: any) => (
        <motion.div
          className="w-full h-48 border-b md:border flex justify-between md:h-56"
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-1/4 h-full flex justify-center items-center">
            <div>
              <Image
                src={item.image}
                alt={item.title}
                width={60}
                height={60}
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
          <div className="w-3/4 h-full flex flex-col justify-center p-2 gap-y-2">
            <h1 className="text-primary uppercase font-bold text-sm">
              {item.title}
            </h1>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
            <div className="flex justify-end ">
              <Link
                href="/"
                className={buttonVariants({
                  variant: "outline",
                  size: "sm",
                  className: "px-2 border-primary text-primary",
                })}
              >
                <div className="flex justify-center items-center">
                  Read More <ArrowRight className="ml-1" />
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Studies;
