'use client';
import { useEffect } from 'react';
import { ScrollTrigger } from '@/lib/gsap';

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    ScrollTrigger.refresh();
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}