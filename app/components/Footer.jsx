import React from "react";

const Footer = () => {
  return (
    <section className="w-full bg-[#d9d6cf] text-[#223614] pt-15 pb-5">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-6">

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm md:text-base">
          <a href="#" className="underline text-black">
            Privacy & Cookies Policy
          </a>
          <a href="#" className="underline text-black">
            Good Faith Estimate
          </a>
          <a href="#" className="underline text-black">
            Website Terms & Conditions
          </a>
          <a href="#" className="underline text-black">
            Disclaimer
          </a>
        </div>

        <p className="text-sm md:text-base">
          Website Template Credits:{" "}
          <a href="#" className="underline text-black">
            Go Bloom Creative
          </a>
        </p>

        <p className="text-sm md:text-base pt-5">
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </p>

      </div>
    </section>
  );
};

export default Footer;
