import React from "react";

const Specialties = () => {
  return (
    <section className="bg-[#fbf8f5] py-16 md:py-24">
      {/* Heading */}
      <h2 className="text-center text-[#223614] text-4xl md:text-5xl lg:text-6xl font-medium mb-12 md:mb-16">
        My Specialties
      </h2>

      {/* Grid */}
      <div className="max-w-[1500px] mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* Card 1 */}
        <div className="border border-[#223614] bg-[#c8cec19b] p-6 md:p-6 flex flex-col justify-between min-h-[460px]]">

          <div>
            <h3 className="text-xl md:text-2xl text-[#223614] font-medium mb-10">
              Self-Esteem
            </h3>

            <p className="text-[#223614] text-sm md:text-base leading-relaxed">
              Building a strong sense of self-worth is key to living a fulfilled
              life. Let's work together to bolster your self-esteem.
            </p>
          </div>

          <div className="mt-6 flex justify-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/166607b6-21a7-4e30-8c74-9c911c9f33fb/milles-studio-GU-Q4-SQFTg-unsplash.jpg?format=2500w" 
              alt="self-esteem"
              className="w-56 h-56 md:w-73 md:h-73 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="border border-[#223614] bg-[#c8cec19b] p-6 md:p-6 flex flex-col justify-between min-h-[460px]">
          <div>
            <h3 className="text-xl md:text-2xl text-[#223614] font-medium mb-10">
              Relationships
            </h3>

            <p className="text-[#223614] text-sm md:text-base leading-relaxed">
              Navigating relationships can be complex. I'm here to guide you
              through these complexities to help you form healthier connections.
            </p>
          </div>

          <div className="mt-6 flex justify-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/f53aed66-5bd9-43e0-b00b-3a3537fed68d/ori-song-LPbKfdQJS2E-unsplash.jpg?format=2500w"
              alt="Relationships"
              className="w-56 h-56 md:w-73 md:h-73 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="border border-[#223614] bg-[#c8cec19b] p-6 md:p-6 flex flex-col justify-between min-h-[460px]">
          <div>
            <h3 className="text-xl md:text-2xl text-[#223614] font-medium mb-10">
              Burnout
            </h3>

            <p className="text-[#223614] text-sm md:text-base leading-relaxed">
              Feeling overwhelmed by your career is more common than you think.
              Together, we'll identify strategies to manage and prevent burnout.
            </p>
          </div>

          <div className="mt-6 flex justify-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/515651b9-4001-47ae-8ca1-2a6ff8f2bef0/ivana-cajina--wn1PECo5-U-unsplash.jpg?format=2500w"
              alt="Burnout"
              className="w-56 h-56 md:w-73 md:h-73 rounded-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Specialties;
