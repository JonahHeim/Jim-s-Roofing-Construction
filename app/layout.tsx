import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/announcement-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";
import {
  companyName,
  contactInfo,
  reviewSummary,
  serviceAreas,
  siteDescription,
  siteUrl
} from "@/lib/site-data";
import { createRootMetadata } from "@/lib/seo";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body"
});

export const metadata: Metadata = createRootMetadata();

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: companyName,
    description: siteDescription,
    url: siteUrl,
    telephone: contactInfo.phonePlain,
    email: contactInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.addressLine1,
      addressLocality: "Pinckney",
      addressRegion: "MI",
      postalCode: "48169",
      addressCountry: "US"
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "Place",
      name: area
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewSummary.rating,
      reviewCount: reviewSummary.countValue
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: companyName,
    url: siteUrl,
    description: siteDescription
  };

  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} bg-background font-body text-foreground antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
          type="application/ld+json"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
          type="application/ld+json"
        />
        <AnnouncementBar />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
