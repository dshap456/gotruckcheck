import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "100 900",
  display: "swap",
});

const montserrat = localFont({
  src: "./fonts/montserrat-800-latin.woff2",
  variable: "--font-display",
  weight: "800",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GoTruckCheck | Turn compliance alerts into booked tests",
    template: "%s | GoTruckCheck",
  },
  description:
    "Deadline tracking, automatic reminders from your number, and tap-to-book scheduling for California Clean Truck Check testers. $2 per truck a month, no contract.",
  applicationName: "GoTruckCheck",
  keywords: [
    "Clean Truck Check",
    "CARB compliance software",
    "Clean Truck Check tester software",
    "truck emissions testing scheduling",
    "CTC deadline tracking",
    "diesel testing business software",
  ],
  authors: [{ name: "GoTruckCheck" }],
  creator: "GoTruckCheck",
  publisher: "GoTruckCheck",
  category: "business software",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "GoTruckCheck",
    locale: "en_US",
    title: "You sell the compliance. The alerts sell the appointments.",
    description:
      "Add compliance monitoring to every invoice and let automatic reminders bring the repeat tests back to you.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoTruckCheck for Clean Truck Check testers",
    description:
      "Turn every truck you test into recurring monitoring revenue and booked repeat work.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f7f9",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.variable}`}>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <StructuredData />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        {process.env.VERCEL ? (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        ) : null}
      </body>
    </html>
  );
}
