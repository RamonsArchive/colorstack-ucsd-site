import type { Metadata } from "next";
import "./globals.css";
import LocalFont from "next/font/local";

const kumbhSans = LocalFont({
  src: "./fonts/Kumbh_Sans/KumbhSans-VariableFont_YOPQ,wght.woff2",
  variable: "--font-kumbh-sans",
  weight: "100 900", // This tells Next.js it supports all weights
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "ColorStack @ UCSD",
  description:
    "Building a community of Black and Hispanic software engineers at UCSD.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />
      <body className={`${kumbhSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
