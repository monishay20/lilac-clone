"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Do you take insurance?",
    answer:
      "Yes, I accept select insurance plans. Please contact me to verify your coverage and benefits.",
  },
  {
    question: "What are your rates?",
    answer:
      "Session rates vary depending on the type of service. Reach out and I’ll share detailed pricing.",
  },
  {
    question: "Do you have any openings?",
    answer:
      "Availability changes weekly. Please use the contact form to check current openings.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-6 lg:px-20 py-20 md:py-24 bg-[#fbf8f5]">
      <div className="flex flex-col lg:flex-row items-center gap-14">

        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="overflow-hidden rounded-t-full w-full max-w-[450px] h-[520px] md:h-[670px]">
            <img
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/3a7e28f0-28fd-47cd-9857-6c415afed795/myxa69-APKZU4NJcgs-unsplash.jpg?format=2500w"
              alt="faq flowers"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT FAQ CONTENT */}
        <div className="w-full lg:w-1/2 text-[#223614]">

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold mb-15">
            FAQs
          </h2>

          {/* FAQ LIST */}
          <div className="space-y-6">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border-t border-[#223614] last:border-b"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center gap-6 py-3 text-left"
                >
                  <span className="text-5xl font-light">
                    {openIndex === index ? "−" : "+"}
                  </span>

                  <span className="text-xl md:text-3xl font-medium">
                    {item.question}
                  </span>
                </button>

                {openIndex === index && (
                  <p className="pb-6 pl-12 text-gray-700 text-sm md:text-base">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
