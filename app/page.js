import Hero from "./components/Hero";
import FulFillment from "./components/FulFillment";
import Specialties from "./components/Specialities";
import SupportSection from "./components/SupportSection";
import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQSection";
import ProfessionalBackground from "./components/ProfessionalBackground";
import GetStartedToday from "./components/GetStartedToday";
import LilacTemplate from "./components/LilacTemplate";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <FulFillment />
      <Specialties />
      <SupportSection />
      <AboutSection />
      <FAQSection />
      <ProfessionalBackground />
      <GetStartedToday />
      <LilacTemplate />
      <Footer />

    </main>
  );
}
