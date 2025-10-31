"use client";

import { Col, Row } from "antd";
import DishCard from "@/components/DishCard";
import { dishes } from "@/data/dishes";

const featuredDishes = dishes.slice(0, 3);

export default function FeaturedDishes() {
  return (
    <Row gutter={[24, 24]} className="mt-12">
      {featuredDishes.map((dish) => (
        <Col xs={24} sm={12} lg={8} key={dish.id}>
          <DishCard dish={dish} />
        </Col>
      ))}
    </Row>
  );
}
