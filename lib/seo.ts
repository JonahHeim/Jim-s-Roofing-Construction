import type { Metadata } from "next";
import { companyName, seoKeywordMap, siteDescription, siteUrl } from "./site-data";

export const metadataBase = new URL(siteUrl);

type MetadataInput = {
  title: string;
  description: string;
  path: keyof typeof seoKeywordMap;
};

export function createPageMetadata({
  title,
  description,
  path
}: MetadataInput): Metadata {
  const url = new URL(path, metadataBase).toString();
  const keywords = seoKeywordMap[path];
  const image = new URL("/roofline-og.svg", metadataBase).toString();

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path
    },
    openGraph: {
      type: "website",
      url,
      title: `${title} | ${companyName}`,
      description,
      siteName: companyName,
      locale: "en_US",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} | ${companyName}`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${companyName}`,
      description,
      images: [image]
    }
  };
}

export function createRootMetadata(): Metadata {
  const image = new URL("/roofline-og.svg", metadataBase).toString();

  return {
    metadataBase,
    title: {
      default: companyName,
      template: `%s | ${companyName}`
    },
    description: siteDescription,
    applicationName: companyName,
    category: "home services",
    keywords: seoKeywordMap["/"],
    authors: [{ name: companyName }],
    creator: companyName,
    publisher: companyName,
    alternates: {
      canonical: "/"
    },
    openGraph: {
      type: "website",
      url: siteUrl,
      title: companyName,
      description: siteDescription,
      siteName: companyName,
      locale: "en_US",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: companyName
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: companyName,
      description: siteDescription,
      images: [image]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    }
  };
}
