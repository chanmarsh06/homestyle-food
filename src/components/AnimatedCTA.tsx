'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button, Tag } from 'antd';
import { FiClock, FiMapPin } from 'react-icons/fi';
import Link from 'next/link';
import MotionWrapper from '@/components/MotionWrapper';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(containerRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section className="delivery-section section-padding">
      <div className="tailwind-container">
        <div ref={containerRef} className="glass-card relative overflow-hidden p-8 md:p-12">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF8C00' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="relative flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex-1">
              <div className="mb-4 flex flex-wrap justify-center gap-2 md:justify-start">
                <Tag color="orange" icon={<FiClock />}>Same-day delivery</Tag>
                <Tag color="gold" icon={<FiMapPin />}>Bengaluru East</Tag>
              </div>
              
              <h3 className="text-3xl font-bold text-orange-600 md:text-4xl">
                Ready for a soulful meal tonight?
              </h3>
              
              <p className="mt-4 max-w-xl text-base text-amber-700 md:text-lg">
                Place your order before 6 PM and enjoy same-evening delivery across Bengaluru East. 
                Spice levels and dietary preferences customized for every family.
              </p>
              
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-amber-600 md:grid-cols-3">
                <div>
                  <p className="font-semibold text-orange-500">45 mins</p>
                  <p>Average delivery</p>
                </div>
                <div>
                  <p className="font-semibold text-orange-500">Fresh</p>
                  <p>Daily ingredients</p>
                </div>
                <div>
                  <p className="font-semibold text-orange-500">Custom</p>
                  <p>Spice levels</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row md:flex-col">
              <Link href="/order">
                <Button type="primary" size="large" shape="round" className="w-full min-w-[160px]">
                  Order Now
                </Button>
              </Link>
              <Link href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
                <Button size="large" shape="round" className="w-full min-w-[160px] border-orange-500 text-orange-600">
                  WhatsApp Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}