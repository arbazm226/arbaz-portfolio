import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/data/content";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${profile.name} | ${profile.headline}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: `${profile.name} | ${profile.headline}`,
    description: profile.summary,
    url: "/",
    siteName: "Arbaz Malik",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Arbaz Malik — Forecasting Specialist | Financial Intelligence" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.headline}`,
    description: profile.summary,
    images: ["/og-image.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
  colorScheme: "dark",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.headline,
  email: profile.email,
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
  },
  sameAs: [profile.linkedIn],
  url: siteUrl.toString(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div id="top" />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
