'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Carousel, Rate } from 'antd';
import { FiUser } from 'react-icons/fi';
import MotionWrapper from "@/components/MotionWrapper";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: "ananya",
    name: "Ananya R.",
    location: "Whitefield",
    rating: 5,
    message: "Amma's Sunday biryani brings my childhood memories back! The flavors are so comforting and consistent every time. The spice level is perfect for our family.",
  },
  {
    id: "sanjay",
    name: "Sanjay K.",
    location: "Indiranagar",
    rating: 5,
    message: "The on-time delivery and custom spice options make weekday dinners effortless for our family. Quality is always top-notch.",
  },
  {
    id: "meera",
    name: "Meera D.",
    location: "HSR Layout",
    rating: 5,
    message: "I love the rotating menu and healthy millet bowls. It feels like home-cooked food made just for me! Fresh ingredients every time.",
  },
  {
    id: "rajesh",
    name: "Rajesh M.",
    location: "Koramangala",
    rating: 5,
    message: "Been ordering for 6 months now. The consistency in taste and quality is remarkable. Feels like having a personal chef!",
  },
  {
    id: "priya",
    name: "Priya S.",
    location: "Marathahalli",
    rating: 5,
    message: "The fish curry reminds me of my grandmother's cooking. Authentic flavors and generous portions. Highly recommended!",
  },
  {
    id: "kumar",
    name: "Kumar V.",
    location: "Electronic City",
    rating: 5,
    message: "Perfect for busy professionals like me. Healthy, tasty, and delivered on time. The dal tadka is my absolute favorite!",
  },
];

export default function TestimonialSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!carouselRef.current) return;

    gsap.fromTo(carouselRef.current,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section id="testimonials" className="about-chef-section section-padding">
      <div className="tailwind-container">
        <MotionWrapper className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading">Loved by our community</h2>
          <p className="section-subtitle">
            Hear from families who enjoy Amma's freshly cooked meals for their everyday cravings and celebrations.
          </p>
        </MotionWrapper>
        
        {/* Desktop Grid View */}
        <div className="mt-12 hidden grid-cols-1 gap-6 md:grid md:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <MotionWrapper key={testimonial.id} delay={index * 0.1} className="glass-card h-full p-6 text-left">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                  <FiUser className="text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-orange-500">{testimonial.name}</p>
                  <p className="text-xs text-amber-600">{testimonial.location}</p>
                </div>
              </div>
              <Rate disabled defaultValue={testimonial.rating} className="mb-3 text-sm" />
              <p className="text-sm text-amber-700">"{testimonial.message}"</p>
            </MotionWrapper>
          ))}
        </div>
        
        {/* Mobile Carousel View */}
        <div ref={carouselRef} className="mt-12 md:hidden">
          <Carousel autoplay dots={{ className: 'custom-dots' }} className="testimonial-carousel">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <div className="glass-card mx-4 p-6 text-left">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                      <FiUser className="text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-orange-500">{testimonial.name}</p>
                      <p className="text-xs text-amber-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <Rate disabled defaultValue={testimonial.rating} className="mb-3 text-sm" />
                  <p className="text-sm text-amber-700">"{testimonial.message}"</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}