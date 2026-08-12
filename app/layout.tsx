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
  title: "Polika Restaurant | QR Ordering System",
  description: "Scan, order, and enjoy — Polika Restaurant's contactless QR-based table ordering system. Orders go straight to the kitchen and billing counter.",
  keywords: "QR ordering, restaurant ordering system, Polika Restaurant, contactless ordering, digital menu",
  openGraph: {
    title: "Polika Restaurant | QR Ordering System",
    description: "Scan, order, and enjoy — a contactless QR-based ordering system for restaurants.",
    url: "https://polika-restaurant-alpha.vercel.app",
    siteName: "Polika Restaurant",
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
