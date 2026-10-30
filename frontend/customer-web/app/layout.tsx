import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Apna Pahadi Bazaar — Authentic food from Uttarakhand",
    template: "%s | Apna Pahadi Bazaar",
  },
  description:
    "Discover authentic food products from Kumaon and Garhwal — sourced directly from local farmers and artisans of Uttarakhand.",
  keywords: ["Apna Pahadi Bazaar", "Uttarakhand food", "Kumaon", "Garhwal", "local products", "mountain food"],
  openGraph: {
    title: "Apna Pahadi Bazaar",
    description: "Pahadon ka swaad, ab har ghar.",
    siteName: "Apna Pahadi Bazaar",
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
