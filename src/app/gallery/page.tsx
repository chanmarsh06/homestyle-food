import type { Metadata } from "next";
import GallerySection from "@/components/sections/GallerySection";
import MotionWrapper from "@/components/MotionWrapper";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore our collection of beautifully crafted homestyle dishes and behind-the-scenes moments from Amma's Kitchen.",
};

export default function GalleryPage() {
  return (
    <section className="tailwind-container section-padding">
      <MotionWrapper className="mx-auto max-w-3xl text-center">
        <h1 className="section-heading">Food Gallery</h1>
        <p className="section-subtitle">
          Every dish tells a story. Browse through our collection of lovingly prepared meals, 
          fresh ingredients, and the artistry that goes into each plate.
        </p>
      </MotionWrapper>
      <GallerySection />
    </section>
  );
}