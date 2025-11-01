"use client";

import { useEffect, useRef } from "react";
import { Col, Row, Button } from "antd";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import DishCard from "@/components/DishCard";
import MotionWrapper from "@/components/MotionWrapper";
import { dishes } from "@/data/dishes";

gsap.registerPlugin(ScrollTrigger);

const featuredDishes = dishes.slice(0, 6);

export default function FeaturedDishes() {
  const dishesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dishesRef.current) return;

    const items = dishesRef.current.querySelectorAll('.featured-dish');
    
    gsap.fromTo(items, 
      { 
        opacity: 0, 
        y: 50,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: dishesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section className="tailwind-container section-padding">
      <MotionWrapper className="mx-auto max-w-3xl text-center">
        <h2 className="section-heading">Today's Featured Dishes</h2>
        <p className="section-subtitle">
          Handpicked specialties that showcase the authentic flavors and traditional cooking methods 
          that make Amma's Kitchen special.
        </p>
      </MotionWrapper>
      
      <div ref={dishesRef} className="mt-12">
        <Row gutter={[24, 24]}>
          {featuredDishes.map((dish) => (
            <Col xs={24} sm={12} lg={8} key={dish.id}>
              <div className="featured-dish">
                <DishCard dish={dish} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
      
      <MotionWrapper className="mt-12 text-center">
        <Link href="/menu">
          <Button type="primary" size="large" shape="round">
            View Full Menu
          </Button>
        </Link>
      </MotionWrapper>
    </section>
  );
}
