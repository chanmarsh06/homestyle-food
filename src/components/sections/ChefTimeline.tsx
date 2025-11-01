'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MotionWrapper from '@/components/MotionWrapper';

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  {
    year: "1985",
    title: "The Beginning",
    description: "Amma started cooking for her family in a small coastal village in Karnataka, learning traditional recipes from her mother-in-law."
  },
  {
    year: "1998",
    title: "Moving to Bengaluru",
    description: "Relocated to Bengaluru and began sharing her cooking with neighbors, who couldn't get enough of her authentic flavors."
  },
  {
    year: "2010",
    title: "First Tiffin Service",
    description: "Started a small tiffin service for working professionals, delivering home-cooked meals to offices in Indiranagar."
  },
  {
    year: "2018",
    title: "Digital Expansion",
    description: "Embraced technology and expanded delivery across Bengaluru, while maintaining the same love and care in every dish."
  },
  {
    year: "2024",
    title: "Amma's Kitchen Today",
    description: "Now serving hundreds of families daily, with the same commitment to fresh ingredients and traditional cooking methods."
  }
];

export default function ChefTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    const items = timelineRef.current.querySelectorAll('.timeline-item');
    
    gsap.fromTo(items, 
      { 
        opacity: 0, 
        x: -50 
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section className="about-chef-section section-padding">
      <div className="tailwind-container">
        <MotionWrapper className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="section-heading">Amma's Culinary Journey</h2>
          <p className="section-subtitle">
            Four decades of passion, tradition, and the unwavering belief that food cooked with love tastes better.
          </p>
        </MotionWrapper>
        
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-200"></div>
          
          {timelineEvents.map((event, index) => (
            <div key={event.year} className="timeline-item relative flex items-start mb-12 last:mb-0">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                {event.year}
              </div>
              <div className="ml-8 glass-card p-6 flex-1">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">{event.title}</h3>
                <p className="text-amber-700">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}