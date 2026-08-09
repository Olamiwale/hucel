import Hero from "@/components/home/Hero";
import Solutions from "@/components/home/Solutions";
import Mentors from "@/components/home/Mentors";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import TrustedCompanies from "@/components/home/TrustedCompanies";
export default function Home() {
  return (
    <div>

      <Hero />
      <TrustedCompanies />
      <Solutions />
      <Mentors />
      <Testimonials />
      <CTA />
      <FAQ />

      </div>
  );
}