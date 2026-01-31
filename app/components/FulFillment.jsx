import React from "react";

const FulFillment = () => {
  return (
    <section className="bg-[#ECE9E2] overflow-hidden md:pt-12 lg:pt-0 ">
      <div className="flex flex-col-reverse lg:flex-row items-center">

        {/* Left Text (constrained) */}
        <div className="w-full lg:w-1/2 flex-col">
          <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-0 text-[#223614]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8">
              Live a fulfilling life.
            </h2>

            <p className="text-base md:text-lg max-w-md mb-6">
              Life can be challenging—especially when you're trying to balance
              your personal and professional life.
            </p>

            <p className="text-base md:text-lg max-w-md mb-52">
              It's easy to feel like you're alone in facing these challenges,
              but I want you to know that I'm here to help.
            </p>
          </div>

          <hr />

          {/* Full-width bottom-line button */}
            <button className="group w-full border-b border-[#223614] py-4 text-left text-sm md:text-base tracking-widest transition-all duration-300 hover:bg-[#223614] hover:text-[#ECE9E2]">
              <span className="block px-1 py-1 text-center">
                GET IN TOUCH →
              </span>
            </button>
        </div>

        {/* Right Image (full bleed) */}
        <div className="w-full lg:w-1/2 h-[300px] md:h-[500px] lg:h-[670px]">
          <img
            src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=2500w"
            alt="Lifestyle flatlay"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default FulFillment;

