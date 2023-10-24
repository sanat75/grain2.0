"use client";
import Image from "next/image";
import React from "react";
import { Casetudy } from "../../utils/Data/Casetudy";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const scaleVariant = {
  hover: { scale: 1.05 },
};

const Studies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      ref={ref}
      animate={inView ? "visible" : "hidden"}
      initial="hidden"
    >
      <div className="w-full h-24 md:h-48 border-b md:border flex justify-center items-center">
        <motion.h1
          className="text-primary text-center font-bold text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          CLIENTS STORIES
        </motion.h1>
      </div>

      {Casetudy.map((item: any, i: any) => (
        <motion.div
          className="w-full h-48 border-b md:border flex justify-between"
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="w-1/4 h-full flex justify-center items-center">
            <motion.div variants={scaleVariant} whileHover="hover">
              <Image
                src={item.image}
                alt={item.title}
                width={60}
                height={60}
                objectFit="cover"
                objectPosition="center"
              />
            </motion.div>
          </div>
          <div className="w-3/4 h-full flex flex-col justify-center p-2 gap-y-2">
            <motion.h1
              className="text-primary uppercase font-bold text-sm"
              variants={fadeInVariant}
            >
              {item.title}
            </motion.h1>
            <motion.p
              className="text-muted-foreground text-sm"
              variants={fadeInVariant}
            >
              {item.desc}
            </motion.p>
            <motion.div className="flex justify-end " variants={fadeInVariant}>
              <Link
                href="/"
                className={buttonVariants({
                  variant: "outline",
                  size: "sm",
                  className: "px-2 border-primary text-primary",
                })}
              >
                <motion.div
                  whileHover="hover"
                  className="flex justify-center items-center"
                >
                  Read More <ArrowRight className="ml-1" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Studies;
