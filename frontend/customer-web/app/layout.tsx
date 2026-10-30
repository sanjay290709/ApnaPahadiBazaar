import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pahadi Bazaar — Authentic food from Uttarakhand",
    template: "%s | Pahadi Bazaar",
  },
  description:
    "Discover authentic food products from Kumaon and Garhwal — sourced directly from local farmers and artisans of Uttarakhand.",
  keywords: ["Pahadi Bazaar", "Uttarakhand food", "Kumaon", "Garhwal", "local products", "mountain food"],
  openGraph: {
    title: "Pahadi Bazaar",
    description: "Pahadon ka swaad, ab har ghar.",
    siteName: "Pahadi Bazaar",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
