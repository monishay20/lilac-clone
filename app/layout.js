import "./globals.css";
import Header from "./components/Header";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${poppins.className} bg-white text-gray-900`}>
//         <Header />
//         {children}
//       </body>
//     </html>
//   );
// }


import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}
      <Header />
      </body>

    </html>
  );
}




