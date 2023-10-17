import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Casetudy } from "@/utils/Data/Casetudy";
import Image from "next/image";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";

const CaseStudy = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      {Casetudy.map((item) => (
        <Card
          key={item.id}
          className="h-80 flex flex-col gap-y-4 items-center justify-center rounded-none px-4 py-4 md:px-4 md:py-4 hover:bg-secondary  transition duration-500 ease-in-out "
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
          <CardDescription className="text-center">{item.desc}</CardDescription>
          <div className="rounded-full cursor-pointer bg-primary w-10 h-10 text-white flex justify-center items-center">
            <Plus className="w-4 h-4" />
          </div>
        </Card>
      ))}
    </div>
    // <div className=" w-full h-full flex  md:flex-row justify-center items-center space-y-5 md:space-y-0 flex-wrap gap-3">
    //   {Casetudy.map((item) => (
    //     <Card
    //       // show 4 cards on desktop and 2 on mobile
    //       className="w-[45%] md:w-[20%] h-56 relative"
    //       key={item.id}
    //     >
    //       <CardHeader>
    //         <div className="w-full h-20 md:h-32 flex justify-center items-center">
    //           <Image
    //             src={item?.image}
    //             alt="case study"
    //             width={100}
    //             height={100}
    //           />
    //         </div>
    //         <CardTitle className="text-primary font-semibold md:text-center text-sm md:text-md">
    //           {item?.title}
    //         </CardTitle>
    //       </CardHeader>

    //       <div className="absolute -z-20 w-[60%] h-[60%] rounded-full green__gradient bottom-40" />
    //     </Card>
    //   ))}
    // </div>
  );
};

export default CaseStudy;
