import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import ChefTimeline from "@/components/sections/ChefTimeline";
import MotionWrapper from "@/components/MotionWrapper";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Chef Amma's culinary journey, family recipes, and the story behind our homestyle food delivery service.",
};

export default function AboutPage() {
  return (
    <>
      <section className="tailwind-container section-padding">
        <MotionWrapper className="mx-auto max-w-4xl text-center">
          <h1 className="section-heading">Our Story</h1>
          <p className="section-subtitle">
            From a small kitchen in coastal Karnataka to serving families across Bengaluru, 
            Amma's Kitchen represents three generations of culinary wisdom and love.
          </p>
        </MotionWrapper>
      </section>
      <AboutSection />
      <ChefTimeline />
    </>
  );
}