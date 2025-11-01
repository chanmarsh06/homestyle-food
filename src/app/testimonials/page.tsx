import type { Metadata } from "next";
import TestimonialSection from "@/components/TestimonialSection";
import MotionWrapper from "@/components/MotionWrapper";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read what our customers say about Amma's Kitchen homestyle food delivery service and their favorite dishes.",
};

export default function TestimonialsPage() {
  return (
    <section className="tailwind-container section-padding">
      <MotionWrapper className="mx-auto max-w-3xl text-center">
        <h1 className="section-heading">What Our Customers Say</h1>
        <p className="section-subtitle">
          The love and appreciation from our food family motivates us every day. 
          Here are some heartwarming words from those who've tasted Amma's cooking.
        </p>
      </MotionWrapper>
      <TestimonialSection />
    </section>
  );
}