import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCallButton from "@/components/layout/MobileCallButton";
import FloatingCTA from "@/components/layout/FloatingCTA";
import ChatWidget from "@/components/layout/ChatWidget";
import { BUSINESS } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS.name} | ${BUSINESS.tagline}`,
    template: `%s | ${BUSINESS.shortName}`,
  },
  description: `${BUSINESS.name} provides safe, reliable non-emergency medical transportation in Hillsborough, Pinellas, and Pasco Counties. Book your ride today!`,
  keywords: [
    "NEMT",
    "non-emergency medical transportation",
    "medical transport",
    "wheelchair transport",
    "dialysis transport",
    "Tampa",
    "St. Petersburg",
    "Clearwater",
    "Hillsborough County",
    "Pinellas County",
    "Pasco County",
    "Florida",
  ],
  openGraph: {
    title: BUSINESS.name,
    description: BUSINESS.tagline,
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
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCallButton />
        <FloatingCTA />
        <ChatWidget />
      </body>
    </html>
  );
}
