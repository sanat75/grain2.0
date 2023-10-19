"use client";
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Casetudy } from "@/utils/Data/Casetudy";
import Image from "next/image";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const CaseStudy = () => {
  const [flippedCardId, setFlippedCardId] = useState(null);

  const handleCardClick = (cardId: any) => {
    if (flippedCardId === cardId) {
      // If the clicked card is already flipped, unflip it
      setFlippedCardId(null);
    } else {
      // Flip the clicked card
      setFlippedCardId(cardId);
    }
  };
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
            <Card className="w-full h-96 bg-transparent cursor-pointer group perspective">
              <div
                className={`relative preserve-3d  w-full h-full duration-1000 ${
                  flippedCardId === item.id ? "my-rotate-y-180" : ""
                }`}
              >
                <div className="absolute backface-hidden border-2 flex flex-col items-center gap-8 justify-center w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    objectFit="cover"
                    objectPosition="center"
                  />
                  <CardTitle className="text-primary text-center font-semibold text-lg">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {item.desc}
                  </CardDescription>
                  <div
                    className="rounded-full cursor-pointer bg-primary w-10 h-10 text-white flex justify-center items-center"
                    onClick={() => handleCardClick(item.id)}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
                <CardContent
                  className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-secondary overflow-hidden"
                  onClick={() => handleCardClick(item.id)}
                >
                  <div className="text-center flex flex-col items-center justify-center py-4 md:py-14 h-full text-gray-800 px-2 md:gap-4 gap-1 ">
                    <h1 className="text-xl md:text-3xl text-primary font-semibold">
                      {item.title}
                    </h1>
                    <p className="text-sm text-gray-600">{item.content}</p>
                  </div>
                </CardContent>
              </div>
            </Card>
          )}
        </>
      ))}
    </div>
  );
};

export default CaseStudy;
