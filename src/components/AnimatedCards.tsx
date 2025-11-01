'use client';
import { useGSAP } from '@/hooks/useGSAP';

const menuItems = [
  { name: 'Butter Chicken', price: '$12.99', description: 'Creamy tomato curry with tender chicken' },
  { name: 'Biryani Special', price: '$14.99', description: 'Fragrant basmati rice with spiced meat' },
  { name: 'Dal Tadka', price: '$8.99', description: 'Yellow lentils with aromatic spices' },
  { name: 'Paneer Tikka', price: '$10.99', description: 'Grilled cottage cheese with herbs' },
];

export default function AnimatedCards() {
  const containerRef = useGSAP();

  return (
    <div ref={containerRef} className="menu-section section-padding">
      <div className="tailwind-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Popular Dishes</h2>
          <p className="section-subtitle">Handpicked favorites from our kitchen</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <div key={index} className="animate-card glass-card p-6">
              <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-sm text-primary">Image</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{item.name}</h3>
              <p className="text-muted text-sm mb-3">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-cta">{item.price}</span>
                <button className="btn-primary text-xs px-4 py-2">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}