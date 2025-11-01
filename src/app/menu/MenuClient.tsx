'use client';

import { useState, useEffect, useRef } from "react";
import { Col, Row, Select, Tag, Input } from "antd";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DishCard from "@/components/DishCard";
import MotionWrapper from "@/components/MotionWrapper";
import { dishes } from "@/data/dishes";

gsap.registerPlugin(ScrollTrigger);

const { Search } = Input;

export default function MenuClient() {
  const [filteredDishes, setFilteredDishes] = useState(dishes);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSpiceLevel, setSelectedSpiceLevel] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);

  const categories = ['all', 'main', 'appetizer', 'dessert', 'beverage'];
  const spiceLevels = ['all', 'mild', 'medium', 'hot', 'sweet'];

  useEffect(() => {
    let filtered = dishes;

    if (searchTerm) {
      filtered = filtered.filter(dish => 
        dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedSpiceLevel !== 'all') {
      filtered = filtered.filter(dish => 
        dish.spiceLevel?.toLowerCase() === selectedSpiceLevel
      );
    }

    setFilteredDishes(filtered);
  }, [selectedCategory, selectedSpiceLevel, searchTerm]);

  useEffect(() => {
    if (!menuRef.current) return;

    const items = menuRef.current.querySelectorAll('.dish-card');
    
    gsap.fromTo(items, 
      { 
        opacity: 0, 
        y: 30,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: menuRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [filteredDishes]);

  return (
    <section className="tailwind-container section-padding">
      <MotionWrapper className="mx-auto max-w-2xl text-center">
        <h1 className="section-heading">This week's lovingly cooked menu</h1>
        <p className="section-subtitle">
          Freshly sourced produce, traditional spice blends, and mindful cooking techniques come together in dishes that nourish the body and soul.
        </p>
      </MotionWrapper>
      
      {/* Filters */}
      <MotionWrapper className="mt-8 mb-12">
        <div className="glass-card p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Search
              placeholder="Search dishes..."
              allowClear
              size="large"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select
              size="large"
              value={selectedSpiceLevel}
              onChange={setSelectedSpiceLevel}
              className="w-full"
            >
              {spiceLevels.map(level => (
                <Select.Option key={level} value={level}>
                  {level === 'all' ? 'All Spice Levels' : level.charAt(0).toUpperCase() + level.slice(1)}
                </Select.Option>
              ))}
            </Select>
            <div className="flex flex-wrap gap-2">
              <Tag color="orange">Total: {filteredDishes.length} dishes</Tag>
            </div>
          </div>
        </div>
      </MotionWrapper>

      <div ref={menuRef}>
        <Row gutter={[24, 24]}>
          {filteredDishes.map((dish) => (
            <Col xs={24} sm={12} lg={8} key={dish.id}>
              <div className="dish-card">
                <DishCard dish={dish} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
      
      {filteredDishes.length === 0 && (
        <MotionWrapper className="text-center py-12">
          <p className="text-lg text-amber-600">No dishes found matching your criteria.</p>
        </MotionWrapper>
      )}
    </section>
  );
}