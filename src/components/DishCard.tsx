import ImageManager from "@/components/ImageManager";
import Link from "next/link";
import { Card, Tag, Button } from "antd";
import MotionWrapper from "@/components/MotionWrapper";
import type { Dish } from "@/types";

type DishCardProps = {
  dish: Dish;
};

export default function DishCard({ dish }: DishCardProps) {
  return (
    <MotionWrapper>
      <Card
        className="h-full rounded-[var(--radius-md)] shadow-sm"
        cover={
          <div className="relative h-52 w-full">
            <ImageManager
              src={dish.image}
              alt={dish.name}
              fill
              className="rounded-t-[var(--radius-md)] object-cover"
            />
          </div>
        }
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-orange-600">{dish.name}</h3>
            <span className="text-sm font-medium text-amber-700">{dish.price}</span>
          </div>
          <p className="text-sm text-amber-700">{dish.description}</p>
          <div className="flex flex-wrap gap-2">
            {dish.spiceLevel && <Tag color="orange">{dish.spiceLevel}</Tag>}
            {dish.servings && <Tag color="gold">{dish.servings}</Tag>}
          </div>
          <Link href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi, I would love to order ${dish.name}`)}`} target="_blank">
            <Button type="primary" shape="round" className="w-full">
              Order via WhatsApp
            </Button>
          </Link>
        </div>
      </Card>
    </MotionWrapper>
  );
}
