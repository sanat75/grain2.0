import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ToolsData } from "@/utils/ToolData";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const page = () => {
  // return (
  //   <div className="h-full">
  //     <div className="font-bold pt-36  text-center space-y-5">
  //       <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
  //         <h1>
  //           <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
  //             Customer Analytics
  //           </span>{" "}
  //         </h1>
  //       </div>
  //       <div className="text-sm md:text-xl font-semibold">
  //         Optimize your business by predicting customers&#39; future with AI and
  //         Machine Learning.
  //       </div>
  //       <div>
  //         <Link href={"/signin"}>
  //           <Button
  //             variant="premium"
  //             className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
  //           >
  //             Book a Demo
  //           </Button>
  //         </Link>
  //       </div>
  //       <div className="text-zinc-400 text-xs md:text-sm font-normal"></div>
  //     </div>
  //     <div className="w-full h-56 justify-center  flex items-center flex-col px-4 text-center gap-y-4">
  //       <h1 className="font-extrabold text-2xl md:text-4xl"></h1>
  //       <p className="text-gray-400 text-sm md:text-lg">
  //         Our proven AI and ML provides actionable predictions of customer
  //         activity, proven to guide business decisions for better results. Fast,
  //         simple integration with your existing tech.
  //       </p>
  //     </div>
  //     {/* <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold text-center">
  //       <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
  //         Grain Analytics
  //       </span>{" "}
  //       Demo Video
  //     </h1> */}
  //     <div className="mx-auto max-w-6xl px-6 lg:px-8 pb-16">
  //       <div className="mt-16 flow-root sm:mt-24">
  //         <Card className="bg-primary-foreground -m-2 rounded-xl lg:-m-4 lg:rounded-2xl lg:p-16 p-4 md:p-8">
  //           <Image
  //             alt="growth image"
  //             src={"/assets/images/pagesimages/2.png"}
  //             className="w-full"
  //             width={1419}
  //             height={732}
  //             quality={100}
  //           />
  //         </Card>
  //       </div>
  //     </div>
  //     <div className="flex flex-row justify-center items-center flex-wrap gap-4 px-4 py-4">
  //       {ToolsData.map((tool) => (
  //         <Card className="w-96" key={tool.id}>
  //           <CardHeader className="flex justify-between flex-row items-center border-b ">
  //             <Link href={tool.route}>
  //               <CardTitle className="flex items-center gap-x-2">
  //                 <div className="p-2 w-fit rounded-md bg-primary/20">
  //                   {React.createElement(tool?.icon, {
  //                     className: "w-6 h-6 text-primary",
  //                   })}
  //                 </div>
  //                 <p>{tool.name}</p>
  //               </CardTitle>
  //             </Link>
  //             <CardDescription>
  //               <Link href={tool.route}>
  //                 <ArrowRightIcon className="w-6 h-6" />
  //               </Link>
  //             </CardDescription>
  //           </CardHeader>
  //           <CardContent className="flex justify-center items-center w-hull h-full flex-col">
  //             {/* <Image
  //               width={100}
  //               height={100}
  //               src={tool.image}
  //               alt="tool"
  //               className="w-full h-36 my-2"
  //             /> */}
  //             <p className="text-lg font-semibold">{tool.heading}</p>
  //             <p>{tool.description}</p>
  //           </CardContent>
  //         </Card>
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
    <div className="h-full">
      <Badge>Customer Analytics</Badge>
    </div>
  );
};

export default page;
