import React from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Casetudy } from "@/utils/Data/Casetudy";
import Image from "next/image";
import { Plus } from "lucide-react";

const CaseStudy = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {Casetudy.map((item) => (
        <>
          {item.id === 0 ? (
            <>
              <Card
                key={item.id}
                className="h-96 flex flex-col gap-y-4 items-center justify-center rounded-none px-4 py-4 md:px-4 md:py-4 hover:bg-secondary  transition duration-500 ease-in-out "
              >
                <CardTitle className="text-primary text-center font-bold text-3xl">
                  {item.title}
                </CardTitle>
              </Card>
            </>
          ) : (
            <Card
              key={item.id}
              className="h-96 flex flex-col gap-y-4 items-center justify-center rounded-none px-4 py-4 md:px-4 md:py-4 hover:bg-secondary  transition duration-500 ease-in-out "
            >
              <div className="w-full h-32 flex justify-center items-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <CardTitle className="text-primary text-center font-semibold text-lg">
                {item.title}
              </CardTitle>
              <CardDescription className="text-center">
                {item.desc}
              </CardDescription>
              <div className="rounded-full cursor-pointer bg-primary w-10 h-10 text-white flex justify-center items-center">
                <Plus className="w-4 h-4" />
              </div>
            </Card>
          )}
        </>
      ))}
    </div>
  );
};

export default CaseStudy;
