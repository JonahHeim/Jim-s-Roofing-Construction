import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { AnnouncementBar } from "@/components/announcement-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";

export const metadata: Metadata = {
  title: {
    default: "Jim's Roofing & Construction",
    template: "%s | Jim's Roofing & Construction"
  },
  description:
    "Roofing-first protection for homeowners in Pinckney and surrounding communities, backed by local accountability, recognized credentials, and a clear next step."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background font-body text-foreground antialiased">
        <AnnouncementBar />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
