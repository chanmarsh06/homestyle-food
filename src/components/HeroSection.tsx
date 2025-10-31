import ImageManager from "@/components/ImageManager";
import Link from "next/link";
import { Button, Tag } from "antd";
import MotionWrapper from "@/components/MotionWrapper";
import { bg1} from "@/asset/bg/index"

export default function HeroSection() {
  return (
    <section className="tailwind-container section-padding grid items-center gap-12 md:grid-cols-2">
      <MotionWrapper className="space-y-6">
        <Tag color="orange" className="rounded-full px-4 py-1 text-sm font-semibold">
          Homemade Food, Delivered with Love 🍲
        </Tag>
        <h1 className="text-4xl font-bold leading-tight text-orange-600 sm:text-5xl">
          Warm, Home-Style Meals Crafted Fresh Each Day
        </h1>
        <p className="text-base text-amber-700 sm:text-lg">
          Chef Amma brings authentic regional flavors to your table with thoughtfully crafted meals using
          farm-fresh ingredients and time-tested family recipes.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/menu">
            <Button type="primary" size="large" shape="round">
              View Menu
            </Button>
          </Link>
          <Link href="/order">
            <Button size="large" shape="round" className="border-orange-500 text-orange-600">
              Order Now
            </Button>
          </Link>
        </div>
        <div className="flex gap-6 text-sm text-amber-700">
          <div>
            <p className="text-2xl font-semibold text-orange-500">15+</p>
            <p>Seasonal dishes</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-orange-500">200+</p>
            <p>Satisfied families</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-orange-500">5★</p>
            <p>Rated taste</p>
          </div>
        </div>
      </MotionWrapper>
      <MotionWrapper delay={0.1} className="relative">
        <div className="glass-card overflow-hidden">
          <ImageManager
            src={bg1}
            alt="Home-style cooking"
            width={640}
            height={640}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
        <div className="absolute -bottom-8 -left-5 hidden rounded-[var(--radius-md)] bg-white p-4 shadow-lg sm:block">
          <p className="text-sm font-semibold text-orange-500">Same-day delivery in 45 mins</p>
          <p className="text-xs text-amber-700">Order before 6 PM for dinner</p>
        </div>
      </MotionWrapper>
    </section>
  );
}
