import React from "react";
import Torusknot from '../assets/torusknot.png'
const AboutUs = () => {
  return (
    <section className="text-white bg-[#050816] body-font">
      <h1 className='text-6xl text-white font-bold text-center pt-28 md:pt-44 pb-24 xl:pt-44'>About <span className='text-indigo-500'>Us</span> </h1>
      <div className="container mx-auto flex  px-5 py-2 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 ">
          <img
            className="object-cover object-center rounded spinner"
            alt="About Us"
            src={Torusknot}
            width='420'
            height='420'
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl md:text-5xl mb-4 text-white font-bold">
            Before they sold out
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed text-xl text-justify text-white">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-gradient-to-r from-indigo-700 via-indigo-800 to-indigo-900 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
              Learn More
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;