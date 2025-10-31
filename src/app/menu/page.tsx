import type { Metadata } from "next";
import { Col, Row } from "antd";
import DishCard from "@/components/DishCard";
import MotionWrapper from "@/components/MotionWrapper";
import { dishes } from "@/data/dishes";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse Amma's Kitchen weekly menu featuring homestyle South Indian meals, wholesome millet bowls, and chef specials delivered fresh.",
};

export default function MenuPage() {
  return (
    <section className="tailwind-container section-padding">
      <MotionWrapper className="mx-auto max-w-2xl text-center">
        <h1 className="section-heading">This week&apos;s lovingly cooked menu</h1>
        <p className="section-subtitle">
          Freshly sourced produce, traditional spice blends, and mindful cooking techniques come together in dishes that nourish the body and soul.
        </p>
      </MotionWrapper>
      <Row gutter={[24, 24]} className="mt-12">
        {dishes.map((dish) => (
          <Col xs={24} sm={12} lg={8} key={dish.id}>
            <DishCard dish={dish} />
          </Col>
        ))}
      </Row>
    </section>
  );
}
