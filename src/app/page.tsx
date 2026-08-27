import Hero from "@/components/layout/Hero";
import StatsDock from "@/components/layout/StatsDock";
import CompanyLogos from "@/components/layout/CompanyLogos";
import Services from "@/components/layout/Services";
import Industries from "@/components/layout/Industries";
import Projects from "@/components/layout/Projects";
import TechStack from "@/components/layout/TechStack";
import WhyChooseUs from "@/components/layout/WhyChooseUs";
import Reviews from "@/components/layout/Reviews";
import FAQs from "@/components/layout/FAQs";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsDock />
      <CompanyLogos />
      <Services />
      <Industries />
      <Projects />
      <TechStack />
      <WhyChooseUs />
      <Reviews />
      <FAQs />
    </>
  );
}
