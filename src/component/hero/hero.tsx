import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="text-gray-600 body-font min-h-[90vh] bg-black/50">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="absolute top-0 left-0 -z-10 h-[90vh] w-full">
          <Image
            src="/bgImage.jpg"
            alt="hero image"
            fill
            className="object-cover"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 lg:pt-20 md:pt-14 sm:pt-10 flex flex-col md:items-start md:text-left items-center mt-10 text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Before they sold out
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed text-gray-300">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke{" "}
            <br className="hidden lg:inline-block" /> beard tote bag. Heirloom
            echo park mlkshk tote bag selvage hot chicken authentic tumeric
            truffaut
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-black bg-white py-3 px-7 focus:outline-none hover:bg-transparent hover:text-white border rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
