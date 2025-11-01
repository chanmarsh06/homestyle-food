import type { Metadata } from "next";
import MenuClient from "./MenuClient";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse Amma's Kitchen weekly menu featuring homestyle South Indian meals, wholesome millet bowls, and chef specials delivered fresh.",
};

export default function MenuPage() {
  return <MenuClient />;
}
