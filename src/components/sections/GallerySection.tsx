'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Image } from 'antd';
import ImageManager from '@/components/ImageManager';
import { 
  heroDarkMealsBg, 
  heroLightMealsBg, 
  prawnCookingBg, 
  freshVeggiesBg, 
  deliveryConceptBg, 
  prawnDishBg 
} from '@/asset/bg';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: heroDarkMealsBg, alt: "Traditional Indian meals spread" },
  { src: heroLightMealsBg, alt: "Fresh homestyle cooking" },
  { src: prawnCookingBg, alt: "Prawn curry preparation" },
  { src: freshVeggiesBg, alt: "Fresh vegetables and ingredients" },
  { src: deliveryConceptBg, alt: "Food delivery concept" },
  { src: prawnDishBg, alt: "Delicious prawn dish" },
  { src: heroDarkMealsBg, alt: "Variety of dishes" },
  { src: prawnCookingBg, alt: "Cooking process" },
];

export default function GallerySection() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!galleryRef.current) return;

    const items = galleryRef.current.querySelectorAll('.gallery-item');
    
    gsap.fromTo(items, 
      { 
        opacity: 0, 
        scale: 0.8,
        y: 30
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <div className="mt-12">
      <Image.PreviewGroup>
        <div 
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item glass-card overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <Image
                src={image.src.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
                preview={{
                  mask: <div className="bg-black/50 text-white text-sm">View Image</div>
                }}
              />
            </div>
          ))}
        </div>
      </Image.PreviewGroup>
    </div>
  );
}