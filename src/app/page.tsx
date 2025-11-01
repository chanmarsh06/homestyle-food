import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "antd";
import HeroSection from "@/components/HeroSection";
import FeaturedDishes from "@/components/FeaturedDishes";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import AnimatedCTA from "@/components/AnimatedCTA";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover handcrafted home-style meals from Amma's Kitchen. Explore signature dishes, heartfelt stories, and glowing testimonials from our community.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedDishes />
      <AboutSection />
      <TestimonialSection />
      <AnimatedCTA />
    </>
  );
}
