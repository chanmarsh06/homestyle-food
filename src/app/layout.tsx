import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, theme } from "antd";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import "antd/dist/reset.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GSAPProvider from "@/components/GSAPProvider";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <ThemeProvider>
          <AntdRegistry>
            <ConfigProvider
              theme={{
                algorithm: theme.defaultAlgorithm,
                token: {
                  colorPrimary: "#FF8C00",
                  borderRadius: 12,
                  fontFamily: "Inter, sans-serif",
                },
              }}
            >
              <GSAPProvider>
                <Navbar />
                <main>{children}</main>
                <Footer />
                <div className="sr-only" aria-hidden>
                  <Link href="#about">About Section</Link>
                </div>
              </GSAPProvider>
            </ConfigProvider>
          </AntdRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
