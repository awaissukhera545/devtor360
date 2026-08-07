import CompanyLogos from "@/components/layout/CompanyLogos";
import FAQs from "@/components/layout/FAQs";
import Footer from "@/components/layout/Footer";
import GetQuote from "@/components/layout/GetQuote";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Industries from "@/components/layout/Industries";
import OurExpertise from "@/components/layout/OurExpertise";
import OurStats from "@/components/layout/OurStats";
import Projects from "@/components/layout/Projects";
import Reviews from "@/components/layout/Reviews";
import Services from "@/components/layout/Services";
import WhyChooseUs from "@/components/layout/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyLogos />
      <Services />
      <OurStats />
      <Projects />
      <OurExpertise />
      <Industries />
      <WhyChooseUs />
      <Reviews />
      <GetQuote />
      <FAQs />
    </>
  );
}
