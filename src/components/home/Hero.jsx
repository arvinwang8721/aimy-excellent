import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../ui/MagicButton";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";

import AnimatedVideo from "../AnimatedVideo";
import { heroVideo } from "../../utils";

const Hero = () => {

  return (

    <section className="pb-5 pt-5">
      <div className="flex justify-center relative my-10 md:my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            From development to mass production
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Market-Ready Solutions"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-6 md:mb-2 text-sm md:text-lg lg:text-2xl">
            Seamless Integration of Innovation and Production
          </p>

          <a href="/about" className="md:mb-10 mb-8">
            <MagicButton
              title="Show Our work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

          <AnimatedVideo videoSrc={heroVideo} threshold={0.7} />
        </div>
      </div>
    </section>
  )
}

export default Hero