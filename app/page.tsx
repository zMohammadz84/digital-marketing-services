import CaseStudiesSection from "@/components/ui/sections/CaseStudiesSection";
import CTASection from "@/components/ui/CTASection";
import HeroCard from "@/components/ui/HeroCard";
import ServicesSection from "@/components/ui/sections/ServicesSection";
import WorkingProcessSection from "@/components/ui/sections/WorkingProcessSection";
import TeamSection from "@/components/ui/sections/TeamSection";
import TestimonialsSection from "@/components/ui/sections/TestimonialsSection";
import ContactUsSection from "@/components/ui/sections/ContactUsSection";
import { Metadata } from "next";

// Meta Tag
export const metadata: Metadata = {
  title: "Digital Marketing Services",
  description:
    "Digital Marketing Services Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fuga atque minus repellendus natus eius nihil? Voluptas, sed eligendi! Odio aperiam quam fugiat temporibus maiores sint aliquam accusamus tempore soluta.",
  icons: {
    icon: "/heroCardImg.ico",
  },
};

export default function Home() {
  return (
    <main>
      <HeroCard />
      <ServicesSection />
      <CTASection />
      <CaseStudiesSection />
      <WorkingProcessSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactUsSection />
    </main>
  );
}
