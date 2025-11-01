import type { Metadata } from "next";
import Link from "next/link";
import { Button, Tag } from "antd";
import OrderForm from "@/components/OrderForm";
import MotionWrapper from "@/components/MotionWrapper";

export const metadata: Metadata = {
  title: "Order",
  description:
    "Place your Amma's Kitchen order online. Choose signature dishes, customise quantities, and get redirected to WhatsApp for confirmation.",
};

export default function OrderPage() {
  return (
    <section className="tailwind-container section-padding">
      <MotionWrapper className="mx-auto max-w-2xl text-center">
        <h1 className="section-heading">Order freshly cooked meals</h1>
        <p className="section-subtitle">
          Fill in your delivery details and choose your favourite dishes. We will confirm on WhatsApp instantly and ensure your meal reaches warm and on time.
        </p>
      </MotionWrapper>
      <div className="mt-12 grid gap-8 lg:grid-cols-[2fr,1fr]">
        <OrderForm />
        <MotionWrapper delay={0.1} className="glass-card flex flex-col gap-5 p-6">
          <div>
            <h3 className="text-xl font-semibold text-orange-600">Delivery slots</h3>
            <ul className="mt-3 space-y-2 text-sm text-amber-700">
              <li>
                <Tag color="orange">Lunch</Tag> 12:00 PM – 2:00 PM (order by 10:30 AM)
              </li>
              <li>
                <Tag color="orange">Dinner</Tag> 7:00 PM – 9:00 PM (order by 6:00 PM)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-600">Need help?</h3>
            <p className="mt-2 text-sm text-amber-700">
              WhatsApp or call us for custom meal plans, party orders, or allergy requests.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <Link href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
                <Button type="primary" shape="round" block>
                  Chat on WhatsApp
                </Button>
              </Link>
              <Link href="tel:+919876543210">
                <Button shape="round" block className="border-orange-500 text-orange-600">
                  Call Chef Amma
                </Button>
              </Link>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
