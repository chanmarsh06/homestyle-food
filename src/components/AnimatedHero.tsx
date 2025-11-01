'use client';
import { useGSAP } from '@/hooks/useGSAP';

export default function AnimatedHero() {
  const containerRef = useGSAP();

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-border transition-all duration-300">
        <div className="tailwind-container">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-primary">Amma&apos;s Kitchen</div>

            <div className="flex items-center gap-6">
              <a href="#menu" className="text-text hover:text-primary transition-colors">Menu</a>
              <a href="#about" className="text-text hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-text hover:text-primary transition-colors">Contact</a>
              <button className="btn-primary">Order Now</button>
            </div>
          </div>
        </div>
      </nav>
      <div ref={containerRef} className="hero-section section-padding pt-32">
        <div className="tailwind-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="hero-text text-5xl font-bold text-primary">
                Fresh Homestyle
              </h1>
              <h2 className="hero-text text-4xl font-semibold text-accent">
                Food Delivered
              </h2>
              <p className="hero-text text-lg text-muted max-w-lg">
                Authentic home-cooked meals prepared with love and delivered fresh to your doorstep.
              </p>
              <div className="hero-text flex gap-4">
                <button className="btn-primary">Order Now</button>
                <button className="btn-secondary">View Menu</button>
              </div>
            </div>
            <div className="hero-image">
              <div className="glass-card p-8">
                <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-semibold text-primary">Food Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}