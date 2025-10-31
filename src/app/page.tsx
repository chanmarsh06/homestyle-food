import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "antd";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import MotionWrapper from "@/components/MotionWrapper";
import FeaturedDishes from "@/components/FeaturedDishes";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover handcrafted home-style meals from Amma's Kitchen. Explore signature dishes, heartfelt stories, and glowing testimonials from our community.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="tailwind-container section-padding">
        <MotionWrapper className="mx-auto max-w-xl text-center">
          <h2 className="section-heading">Signature dishes this week</h2>
          <p className="section-subtitle">
            Carefully curated plates prepared in small batches every morning. Fresh, comforting, and ready to be served warm at your doorstep.
          </p>
        </MotionWrapper>
        <FeaturedDishes />
        <MotionWrapper className="mt-10 flex justify-center">
          <Link href="/menu">
            <Button size="large" shape="round" className="border-orange-500 text-orange-600">
              View full menu
            </Button>
          </Link>
        </MotionWrapper>
      </section>
      <AboutSection />
      <TestimonialSection />
      <MotionWrapper className="tailwind-container section-padding">
        <div className="glass-card flex flex-col items-center gap-6 p-10 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h3 className="text-3xl font-semibold text-orange-600">Ready for a soulful meal tonight?</h3>
            <p className="mt-2 max-w-xl text-base text-amber-700">
              Place your order before 6 PM and enjoy same-evening delivery across Bengaluru East. Spice levels and dietary preferences customised for every family.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/order">
              <Button type="primary" size="large" shape="round">
                Order now
              </Button>
            </Link>
            <Link href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
              <Button size="large" shape="round" className="border-orange-500 text-orange-600">
                WhatsApp us
              </Button>
            </Link>
          </div>
        </div>
      </MotionWrapper>
    </>
  );
}
