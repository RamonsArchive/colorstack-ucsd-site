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
  title: {
    default:
      "ColorStack @ UCSD | Black & Hispanic Software Engineering Community",
    template: "%s | ColorStack @ UCSD",
  },
  description:
    "ColorStack @ UCSD is the only Black & Hispanic software engineering club at UC San Diego. Join our community for mentorship, technical workshops, career development, and connections to top tech companies like Google, Apple, Meta, and Qualcomm. Part of ColorStack National organization.",
  keywords: [
    "ColorStack UCSD",
    "ColorStack San Diego",
    "Black software engineers UCSD",
    "Hispanic software engineers UCSD",
    "Latinx computer science UCSD",
    "UCSD computer science club",
    "software engineering club UCSD",
    "tech community UCSD",
    "computer science mentorship UCSD",
    "tech career development UCSD",
    "Google internships",
    "Apple internships",
    "Meta internships",
    "Qualcomm Institute",
    "Clutch Studio",
    "Digital Revolution",
    "La Jolla tech community",
    "UC San Diego tech",
    "UCSD CS club",
    "diversity in tech UCSD",
    "ColorStack National",
    "tech workshops UCSD",
    "coding bootcamp UCSD",
    "software engineering mentorship",
  ],
  authors: [{ name: "ColorStack @ UCSD" }],
  creator: "ColorStack @ UCSD",
  publisher: "ColorStack @ UCSD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://colorstackucsd.org"), // Update with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://colorstackucsd.org", // Update with your actual domain
    siteName: "ColorStack @ UCSD",
    title:
      "ColorStack @ UCSD | Black & Hispanic Software Engineering Community",
    description:
      "Join the only Black & Hispanic software engineering club at UC San Diego. Get mentorship, technical workshops, and connections to Google, Apple, Meta, Qualcomm, and more. Part of ColorStack National.",
    images: [
      {
        url: "/Assets/Logos/ct_banner_crop1.png",
        width: 1200,
        height: 630,
        alt: "ColorStack @ UCSD Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ColorStack @ UCSD | Black & Hispanic Software Engineering Community",
    description:
      "Join the only Black & Hispanic software engineering club at UC San Diego. Mentorship, workshops, and connections to top tech companies.",
    images: ["/Assets/Logos/ct_banner_crop1.png"],
    creator: "@colorstacksd", // Update if you have Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add these when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  category: "Education",
  classification: "Student Organization",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ColorStack @ UCSD",
    alternateName: "ColorStack UCSD",
    url: "https://colorstackucsd.org", // Update with your actual domain
    logo: "https://colorstackucsd.org/Assets/Logos/ct_banner_crop1.png",
    description:
      "ColorStack @ UCSD is the only Black & Hispanic software engineering club at UC San Diego, providing mentorship, technical workshops, and career development resources.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "La Jolla",
      addressRegion: "CA",
      addressCountry: "US",
      streetAddress: "9500 Gilman Dr",
      postalCode: "92093",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "colorstackatucsd@ucsd.edu",
      contactType: "General Inquiries",
    },
    sameAs: [
      "https://www.instagram.com/colorstacksd",
      "https://discord.gg/4xp8BtwVgR",
      "https://colorstack.org",
    ],
    memberOf: {
      "@type": "Organization",
      name: "ColorStack National",
      url: "https://colorstack.org",
    },
    areaServed: {
      "@type": "City",
      name: "La Jolla",
    },
    location: {
      "@type": "Place",
      name: "UC San Diego",
      address: {
        "@type": "PostalAddress",
        addressLocality: "La Jolla",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${kumbhSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
