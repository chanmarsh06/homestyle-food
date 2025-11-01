import ImageManager from "@/components/ImageManager";
import Link from "next/link";
import { Button, Tag } from "antd";
import MotionWrapper from "@/components/MotionWrapper";
import { prawnDishBg, prawnCookingBg ,heroDarkMealsBg} from "@/asset/bg/index";
import { heroLightMealsBg } from "@/asset/bg/index";

export default function HeroSection() {
  return (
    
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
         backgroundImage: `url(${heroLightMealsBg.src})` // ✅ use your background image path
      }}
    >
      {/* Optional subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />

      <div className="relative tailwind-container section-padding grid items-center gap-12 md:grid-cols-2">
        {/* Left Section */}
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

          {/* Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/menu">
              <Button type="primary" size="large" shape="round" className="bg-orange-600 hover:bg-orange-700">
                View Menu
              </Button>
            </Link>
            <Link href="/order">
              <Button size="large" shape="round" className="border-orange-500 text-orange-600 hover:text-orange-700">
                Order Now
              </Button>
            </Link>
          </div>

          {/* Stats */}
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

        {/* Right Section (Hero Image) */}
        <MotionWrapper delay={0.1} className="relative">
          <div className="glass-card overflow-hidden rounded-2xl shadow-lg">
            <ImageManager
              src={heroDarkMealsBg}
              alt="Home-style cooking"
              width={640}
              height={640}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>

          {/* Floating Delivery Info */}
          <div className="absolute -bottom-8 -left-5 hidden rounded-[var(--radius-md)] bg-white p-4 shadow-lg sm:block">
            <p className="text-sm font-semibold text-orange-500">Same-day delivery in 45 mins</p>
            <p className="text-xs text-amber-700">Order before 6 PM for dinner</p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
