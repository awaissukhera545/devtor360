import Hero from "@/components/layout/Hero";
import CompanyLogos from "@/components/layout/CompanyLogos";
import Services from "@/components/layout/Services";
import OurStats from "@/components/layout/OurStats";
import Projects from "@/components/layout/Projects";
import OurExpertise from "@/components/layout/OurExpertise";
import Industries from "@/components/layout/Industries";
import WhyChooseUs from "@/components/layout/WhyChooseUs";
import Reviews from "@/components/layout/Reviews";
import GetQuote from "@/components/layout/GetQuote";
import FAQs from "@/components/layout/FAQs";
import TechStack from "@/components/layout/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyLogos />
      <Services />
      <OurStats />
      <OurExpertise />
      <Industries />
      <Projects />
      <TechStack />
      <WhyChooseUs />
      <Reviews />
      <GetQuote />
      <FAQs />
    </>
  );
}
