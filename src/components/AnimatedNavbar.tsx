'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import ThemeToggle from './ThemeToggle';

export default function AnimatedNavbar() {
  const navRef = useRef<HTMLNavElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('nav', 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="tailwind-container">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary">Amma's Kitchen</div>
          <div className="flex items-center gap-6">
            <a href="#menu" className="text-text hover:text-primary transition-colors">Menu</a>
            <a href="#about" className="text-text hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-text hover:text-primary transition-colors">Contact</a>
            <ThemeToggle />
            <button className="btn-primary">Order Now</button>
          </div>
        </div>
      </div>
    </nav>
  );
}