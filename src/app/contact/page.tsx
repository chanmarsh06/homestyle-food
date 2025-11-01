import type { Metadata } from "next";
import Link from "next/link";
import { Button, Card, Space } from "antd";
import MotionWrapper from "@/components/MotionWrapper";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Amma's Kitchen for home-style meal deliveries, custom catering, and WhatsApp support. Serving neighborhoods across Bengaluru East.",
};

export default function ContactPage() {
  return (
    <section className="tailwind-container section-padding">
      <MotionWrapper className="mx-auto max-w-2xl text-center">
        <h1 className="section-heading">We would love to hear from you</h1>
        <p className="section-subtitle">
          Reach out for daily orders, party catering, diet-friendly plans, or just to share feedback. We respond instantly on WhatsApp and within 10 minutes over phone.
        </p>
      </MotionWrapper>
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr,0.7fr]">
        <MotionWrapper className="glass-card overflow-hidden">
          <iframe
            title="Amma's Kitchen location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5798652103464!2d77.63945957571146!3d12.935526387379054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15299a9f8d4d%3A0xcba5a380168d99b8!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1704900000000!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </MotionWrapper>
        <MotionWrapper delay={0.1} className="flex flex-col gap-6">
          <Card className="rounded-[var(--radius-md)] shadow-sm">
            <Space direction="vertical" size={16} className="w-full">
              <div>
                <h3 className="text-xl font-semibold text-orange-600">Contact details</h3>
                <p className="mt-2 text-sm text-amber-700">
                  42/5, 3rd Main Road, Indiranagar, Bengaluru - 560038
                </p>
              </div>
              <Space direction="vertical" size={12} className="w-full">
                <Link href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
                  <Button type="primary" block shape="round">
                    Message on WhatsApp
                  </Button>
                </Link>
                <Link href="tel:+919876543210">
                  <Button block shape="round" className="border-orange-500 text-orange-600">
                    Call Chef Amma
                  </Button>
                </Link>
                <Link href="mailto:hello@ammaskitchen.com">
                  <Button block shape="round" className="border-orange-500 text-orange-600">
                    Email us
                  </Button>
                </Link>
              </Space>
            </Space>
          </Card>
          <Card className="rounded-[var(--radius-md)] shadow-sm">
            <h3 className="text-xl font-semibold text-orange-600">Thank you</h3>
            <p className="mt-2 text-sm text-amber-700">
              Your love and trust inspire us to cook better every day. Whether it&apos;s a weekday dinner or a festive feast, we&apos;re here to bring the warmth of home to you.
            </p>
          </Card>
        </MotionWrapper>
      </div>
      <ContactForm />
    </section>
  );
}
