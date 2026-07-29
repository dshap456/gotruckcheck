import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  metadataBase: new URL("https://www.gotruckcheck.com"),
  title: {
    default: "GoTruckCheck | Turn compliance alerts into booked tests",
    template: "%s | GoTruckCheck",
  },
  description:
    "Deadline tracking, automatic reminders from your number, and tap-to-book scheduling for Clean Truck Check testers. $2 per truck a month.",
  applicationName: "GoTruckCheck",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "GoTruckCheck",
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
};

export const viewport: Viewport = {
  themeColor: "#f6f7f9",
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
        {children}
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
