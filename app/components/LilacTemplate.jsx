// import React from "react";

// const Footer = () => {
//   return (
//     <section className="w-full bg-[#fbf8f5] text-[#223614] py-20">
//      <div className="flex justify-between max-w-7xl px-2 mx-auto gap-16">

//         {/* left */}
//         <div className="space-y-6 text-left">
//           <h2 className="text-4xl font-semibold">Lilac Template</h2>

//           <div className="space-y-2 text-lg">
//             <p>123 Example Road</p>
//             <p>Minneapolis, MN</p>
//           </div>

//           <div className="space-y-2">
//             <a href="mailto:email@example.com" className="underline block">
//               email@example.com
//             </a>
//             <a href="tel:5555555555" className="underline block">
//               (555) 555-5555
//             </a>
//           </div>
//         </div>
        

//         {/* right */}
//         <div className="flex gap-16 md:gap-32">
//             <div className="space-y-6 text-left md:text-right">
//                 <h3 className="text-3xl font-semibold">Hours</h3>
//                 <div className="text-lg space-y-2">
//                     <p>Monday – Friday</p>
//                     <p>10am – 6pm</p>
//                 </div>
//             </div>

//             <div className="space-y-6 text-left md:text-right">
//                 <h3 className="text-3xl font-semibold">Find</h3>
//                 <div className="flex flex-col space-y-3 md:items-end">
//                     <a href="#" className="underline">Home</a>
//                     <a href="#" className="underline">Contact</a>
//                     <a href="#" className="underline">Blog</a>
//                 </div>
//             </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Footer;


import React from "react";

const Footer = () => {
  return (
    <section className="w-full bg-[#fbf8f5] text-[#223614] py-20">
      <div className="max-w-7xl mx-auto px-2">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Lilac Template
            </h2>

            <div className="space-y-2 text-base md:text-lg">
              <p>123 Example Road</p>
              <p>Minneapolis, MN</p>
            </div>

            <div className="space-y-2">
              <a href="mailto:email@example.com" className="underline block">
                email@example.com
              </a>
              <a href="tel:5555555555" className="underline block">
                (555) 555-5555
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-50 text-center md:text-left md:justify-self-end">

            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold">Hours</h3>
              <div className="text-base md:text-lg space-y-2">
                <p>Monday – Friday</p>
                <p>10am – 6pm</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold">Find</h3>
              <div className="flex flex-col space-y-3">
                <a href="#" className="underline">Home</a>
                <a href="#" className="underline">Contact</a>
                <a href="#" className="underline">Blog</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Footer;



