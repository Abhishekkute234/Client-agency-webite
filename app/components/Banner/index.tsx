import Image from "next/image";
import React from "react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";
import { TextHoverEffect } from "../ui/text-hover-effect";
const Banner = () => {
  return (
    <BackgroundBeamsWithCollision className="bg-navyblue">
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white dark:text-white font-sans tracking-tight">
        <div className="h-[20rem] flex items-center justify-center">
          <TextHoverEffect text="as KeepTtSorted asdk" />
        </div>
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-700 via-violet-600 to-pink-600 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Exploding beams.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-700 via-violet-600 to-pink-600 py-4">
            <span className="">Exploding beams.</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
  );
};

export default Banner;
