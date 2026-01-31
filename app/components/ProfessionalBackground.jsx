"use client"
import React, { useState } from 'react'

const faqs = [
  {
    question: "Education",
    answer:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    question: "Licensure",
    answer:
      "Session rates vary depending on the type of service. Reach out and I’ll share detailed pricing.",
  },
  {
    question: "Certifications",
    answer:
      "Availability changes weekly. Please use the contact form to check current openings.",
  },
];

const ProfessionalBackground = () => {
    const [openIndex, setOpenIndex] = useState(null);
    
    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <section className="w-full bg-[#d9d6cf] py-20 ">
        <div className="max-w-4xl mx-auto text-[#223614] px-6">

          <h2 className="text-3xl md:text-4xl lg:text-4xl text-center font-semibold mb-12">

            My Professional Background
          </h2>

          <div className="space-y-3">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border-t border-[#223614] last:border-b w-full md:w-4/5 lg:w-3/4 mx-auto"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between py-3 text-left">
                    
                  <span className="text-xl md:text-2xl font-medium">
                    {item.question}
                  </span>

                  <span className="text-3xl font-light">
                    {openIndex === index ? "−" : "+"}
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
    </section>
  )
}

export default ProfessionalBackground
