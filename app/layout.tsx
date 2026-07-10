import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crossway Infra Projects Pvt. Ltd.",
  description:
    "Government Tender Consultant | Infrastructure | Construction | Engineering Services",
  keywords: [
    "Crossway Infra",
    "Government Tenders",
    "Construction Company",
    "Infrastructure",
    "Engineering",
    "Delhi",
  ],
  authors: [{ name: "Crossway Infra Projects Pvt. Ltd." }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}