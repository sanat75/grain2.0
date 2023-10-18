import React from "react";
import Wrapper from "../Container/Wrapper";

const WhoWeAre = () => {
  return (
    <div className="min-h-[350px] w-full flex flex-col justify-center md:flex-row md:justify-between px-4 bg-gradient-to-r from-green-500 to-green-700">
      <Wrapper>
        <div className="font-bold  text-center md:text-start  ">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-extrabold text-white">
            <h1>
              WE TRANSFORM{" "}
              <span className="bg-clip-text bg-gradient-to-r text-black">
                ORGANIZATIONS.
              </span>{" "}
            </h1>
          </div>
          <div className="text-zinc-100 text-xs md:text-sm font-normal pt-14">
            At GRAIN ANALYTICS, we pride ourselves in being there every step of
            the way. Our service portfolio ensures we can tackle any project,
            from strategy to implementation – we have seen it all. We have a
            simple formula to help you win: define the goal, find the gaps, then
            match you with the right people, processes, and tools to get there –
            coaching you the entire way.
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default WhoWeAre;
