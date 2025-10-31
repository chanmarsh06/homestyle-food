import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, theme } from "antd";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "antd/dist/reset.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // metadataBase: new URL("https://ammaskitchen.local"),
  title: {
    template: "%s | Amma's Kitchen",
    default: "Amma's Kitchen | Home-Style Food Delivery",
  },
  description:
    "Enjoy warm, home-style meals cooked by Chef Amma and delivered across Bengaluru. Seasonal menus, custom spice levels, and wholesome family recipes.",
  keywords: [
    "home style food",
    "tiffin service",
    "home chef",
    "Bengaluru food delivery",
    "homemade meals",
  ],
  openGraph: {
    title: "Amma's Kitchen | Fresh, Home-Style Meals",
    description:
      "Authentic, freshly cooked dishes delivered daily. Taste traditional recipes prepared with love by Chef Amma.",
    type: "website",
    // url: "https://ammaskitchen.local",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amma's Kitchen | Fresh, Home-Style Meals",
    description:
      "Authentic, freshly cooked dishes delivered daily. Taste traditional recipes prepared with love by Chef Amma.",
  },
  alternates: {
    // canonical: "https://ammaskitchen.local",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[var(--color-background)] antialiased`}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              algorithm: theme.defaultAlgorithm,
              token: {
                colorPrimary: "#f97316",
                borderRadius: 12,
                fontFamily: "var(--font-geist-sans)",
              },
            }}
          >
            <Navbar />
            <main>{children}</main>
            <Footer />
            <div className="sr-only" aria-hidden>
              <Link href="#about">About Section</Link>
            </div>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
