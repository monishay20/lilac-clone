import React from "react";

const SupportSection = () => {
  return (
    <section className="bg-[#ECE9E2]">
      <div className="flex flex-col lg:flex-row">

        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2 h-[350px] md:h-[500px] lg:h-auto">
          <img
            src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg?format=2500w"
            alt="support"
            className="w-full h-full object-cover"
          />
        </div>


        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between bg-[#c2bfcb] text-[#223614]">

          {/* Text block */}
          <div className="px-6 md:px-12 lg:px-16 py-12 md:py-16 space-y-8">

            <h2 className="text-3xl lg:pt-12 md:text-4xl lg:text-5xl font-medium leading-tight">
              You don’t have to do this <br />
              <span className="italic">all alone.</span>
            </h2>

            <p className="text-base md:text-lg">
              If you are facing any of these, there’s hope:
            </p>

            {/* Bullet list */}
            <ul className="list-disc pl-6 space-y-4 text-sm md:text-base">
              <li>Persistent feelings of sadness or hopelessness</li>
              <li>Trouble focusing or making decisions</li>
              <li>Difficulty maintaining relationships</li>
              <li>Feeling constantly exhausted or unmotivated</li>
              <li>A pervasive sense of being overwhelmed</li>
            </ul>

            <p className="text-base md:text-lg pt-4">
              With empathy and guidance, we'll work together to navigate the
              challenges life throws your way.
            </p>
          </div>


          {/* Bottom button (full width line style) */}
          <button className="w-full border-t border-[#223614] py-4 text-center tracking-widest hover:bg-[#223614] hover:text-white transition">
            WORK WITH ME →
          </button>

        </div>
      </div>
    </section>
  );
};

export default SupportSection;
