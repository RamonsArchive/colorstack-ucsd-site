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
  icons: {
    icon: [
      { url: "/icon.png", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/icon-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/icon-512x512.png",
      },
    ],
  },
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
