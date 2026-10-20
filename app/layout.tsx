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
  title: "Kunaal Shivakumar | Software Developer in Test",
  description:
    "Portfolio for Kunaal Shivakumar, Software Developer in Test at Q2 Software, specializing in Python-Selenium automation, Jenkins CI/CD, Claude Skills and Agents, and IEEE research.",
  keywords: [
    "Kunaal Shivakumar",
    "Software Developer in Test",
    "Python Test Automation",
    "Claude Skills and Agents",
    "Selenium",
    "Jenkins",
    "IEEE Research Author",
    "Machine Learning",
    "Portfolio"
  ],
  authors: [{ name: "Kunaal Shivakumar" }],
  creator: "Kunaal Shivakumar",
  openGraph: {
    title: "Kunaal Shivakumar | Software Developer in Test",
    description:
      "Building reliable enterprise test automation with Python, Selenium, Jenkins CI/CD, and Claude Skills and Agents.",
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
