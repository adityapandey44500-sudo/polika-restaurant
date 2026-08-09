import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Cakery Nook | Premium Bakery & Café in Patna",
  description: "Experience freshly baked happiness at The Cakery Nook. Premium cakes, pizzas, burgers, and more in Mithapur, Patna.",
  keywords: "bakery Patna, cakes Patna, pizza Patna, burgers Patna, Mithapur bakery, The Cakery Nook, celebration cakes",
  openGraph: {
    title: "The Cakery Nook | Premium Bakery & Café in Patna",
    description: "Experience freshly baked happiness at The Cakery Nook. Premium cakes, pizzas, burgers, and more.",
    url: "https://thecakerynook.com",
    siteName: "The Cakery Nook",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
