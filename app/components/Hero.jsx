import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col bg-[#fbf8f5] lg:flex-row items-start justify-between px-6 sm:px-8 md:px-12 lg:px-15 pt-10 pb-0 mb-0 gap-8 md:gap-10">
      {/* Left Image */}
      <div className="overflow-hidden rounded-t-full mt-20 pb-0 mb-0 w-full max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[570px] h-[400px] sm:h-[500px] md:h-[700px] lg:h-[950px] mx-auto lg:mx-0">
        <img
          src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg?format=2500w"
          alt="Hero"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Text */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left text-[#223614] gap-6 md:px-30 md:pt-45">

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight">
            Live your life <br />
            in full bloom
        </h1>

        <p className="text-base sm:text-lg md:text-lg text-[#223614] max-w-md lg:ml-10">
          Therapy for Adults in Minneapolis, MN.
        </p>

        <button className="border border-[#223614] px-5 py-2 sm:px-6 sm:py-3 hover:bg-[#223614] hover:text-white transition lg:ml-30">
          CONNECT WITH ME →
        </button>
      </div>
    </section>

  );
};

export default Hero;


