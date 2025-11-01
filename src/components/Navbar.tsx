"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Drawer } from "antd";
import { FiMenu, FiX, FiPhoneCall } from "react-icons/fi";
import MotionWrapper from "@/components/MotionWrapper";
import Loader from "@/components/Loader";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Order", href: "/order" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timeout);
  }, []);

  const linkClasses = (href: string) =>
    `rounded-full px-3 py-2 text-sm font-medium transition-colors ${
      pathname === href ? "bg-orange-500 text-white" : "text-amber-900 hover:bg-orange-100"
    }`;

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 shadow-sm backdrop-blur">
      <MotionWrapper className="tailwind-container flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-semibold text-orange-600">
          Amma&apos;s Kitchen
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClasses(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link href="https://wa.me/919876543210" target="_blank">
            <Button type="primary" shape="round" icon={<FiPhoneCall />} size="large">
              Call Now
            </Button>
          </Link>
        </div>
        <button
          aria-label="Open navigation"
          className="flex items-center rounded-full border border-orange-200 p-2 text-orange-600 md:hidden"
          onClick={() => setOpen(true)}
        >
          <FiMenu size={20} />
        </button>
      </MotionWrapper>
      <Drawer
        title="Amma&apos;s Kitchen"
        placement="right"
        closeIcon={<FiX size={20} className="text-orange-600" />}
        onClose={() => setOpen(false)}
        open={open}
       styles={{
    body: {
      backgroundColor: "#fff",
      padding: "1rem",
    },
  }}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full bg-orange-50 px-4 py-3 text-base font-medium text-orange-600"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link href="https://wa.me/919876543210" target="_blank">
          <Button type="primary" shape="round" size="large" className="mt-4 w-full">
            WhatsApp
          </Button>
        </Link>
      </Drawer>
    </header>
  );
}
