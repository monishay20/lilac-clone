import React from "react";

const GetStartedToday = () => {
  return (
    <section className="w-full bg-[#7e7b46] text-white py-30">
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center space-y-8">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold">
          Get Started Today
        </h2>

        {/* Text */}
        <p className="text-base md:text-lg leading-relaxed">
          Ready to take the first step towards a happier, healthier you?
          Contact me to book your first session. I look forward to starting
          this therapeutic journey with you.
        </p>

        {/* Button */}
        <button className="border border-white px-8 py-3 tracking-widest text-sm hover:bg-white hover:text-[#7e7b46] transition-all duration-300">
          GET IN TOUCH →
        </button>

      </div>
    </section>
  );
};

export default GetStartedToday;

