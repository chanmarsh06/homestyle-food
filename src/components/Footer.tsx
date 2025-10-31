import Link from "next/link";
import { FiInstagram, FiPhoneCall, FiMail } from "react-icons/fi";

const links = [
  {
    label: "Menu",
    href: "/menu",
  },
  {
    label: "Order",
    href: "/order",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const socials = [
  {
    icon: <FiInstagram />,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: <FiPhoneCall />,
    href: "tel:+919876543210",
    label: "Call",
  },
  {
    icon: <FiMail />,
    href: "mailto:chef@ammaskitchen.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-orange-100 py-10">
      <div className="tailwind-container grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-semibold text-orange-600">Amma&apos;s Kitchen</h3>
          <p className="mt-3 text-sm text-amber-700">
            Homemade meals crafted with fresh ingredients and traditional recipes,
            delivered straight to your doorstep.
          </p>
          <p className="mt-4 text-xs text-amber-600">
            © {new Date().getFullYear()} Amma&apos;s Kitchen. All rights reserved.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-orange-500">Quick Links</h4>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-amber-700">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-orange-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-orange-500">Connect</h4>
          <div className="mt-3 flex items-center gap-3 text-orange-600">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-200 transition hover:bg-orange-100"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
