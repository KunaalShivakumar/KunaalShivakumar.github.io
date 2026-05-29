import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Kunaal Shivakumar | Software Engineer and IEEE Research Author",
  description:
    "Premium portfolio for Kunaal Shivakumar, Software Engineer, QA Automation Engineer, IEEE Research Author, and Master's in Computer Science applicant.",
  keywords: [
    "Kunaal Shivakumar",
    "Software Engineer",
    "QA Automation Engineer",
    "Selenium",
    "Jenkins",
    "IEEE Research Author",
    "Machine Learning",
    "Portfolio"
  ],
  authors: [{ name: "Kunaal Shivakumar" }],
  creator: "Kunaal Shivakumar",
  openGraph: {
    title: "Kunaal Shivakumar | Software Engineer",
    description:
      "Building reliable software through automation, intelligent systems, and continuous innovation.",
    type: "website",
    locale: "en_IN"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${space.variable}`}>{children}</body>
    </html>
  );
}
