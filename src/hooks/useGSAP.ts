'use client';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export function useInteractiveGSAP() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating animation for cards
      gsap.utils.toArray('.glass-card').forEach((card: any, i) => {
        gsap.to(card, {
          y: -10,
          duration: 2 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: i * 0.2
        });
      });

      // Parallax effect for hero
      gsap.to('.hero-image', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}

export function useGSAP() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.hero-text', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out' }
      );

      gsap.fromTo('.hero-image',
        { opacity: 0, scale: 0.8, rotation: -5 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1.2, delay: 0.3, ease: 'back.out(1.7)' }
      );

      // Card scroll animations
      gsap.fromTo('.animate-card',
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.animate-card',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Button hover animations
      gsap.utils.toArray('.btn-primary, .btn-secondary').forEach((btn: any) => {
        btn.addEventListener('mouseenter', () => {
          gsap.to(btn, { scale: 1.05, duration: 0.2, ease: 'power2.out' });
        });
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, { scale: 1, duration: 0.2, ease: 'power2.out' });
        });
      });

      // Navbar scroll effect
      ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: { className: 'scrolled', targets: 'nav' }
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}