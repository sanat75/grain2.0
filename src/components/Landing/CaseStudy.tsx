import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Casetudy } from "@/utils/Data/Casetudy";
import Image from "next/image";

const CaseStudy = () => {
  return (
    <div className=" w-full h-full flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 flex-wrap gap-8">
      {Casetudy.map((item) => (
        <Card
          className="w-full h-full md:w-1/3 md:h-[500px] md:mx-2 my-2 md:my-0 relative"
          key={item.id}
        >
          <CardHeader>
            <div className="w-full h-32 flex justify-center items-center">
              <Image
                src={item?.image}
                alt="case study"
                width={100}
                height={100}
              />
            </div>
            <CardTitle className="text-primary font-semibold text-center text-2xl">
              {item?.title}
            </CardTitle>
          </CardHeader>
          <CardContent>{item.content}</CardContent>

          <div className="absolute -z-20 w-[60%] h-[60%] rounded-full green__gradient bottom-40" />
        </Card>
      ))}
    </div>
  );
};

export default CaseStudy;
