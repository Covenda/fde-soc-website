import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Covenda AI-SOC | AI-First Security Operations",
  description: "AI-RBVM platform powered by Forward Deployed Engineers and Lucid ML. Prioritize what matters, prove it with numbers. Reduce risk, shrink MTTR, automate noise.",
  keywords: ["risk-based vulnerability management", "AI vulnerability prioritization", "threat modeling", "SOC modernization", "cloud risk remediation"],
  openGraph: {
    title: "Covenda AI-SOC | AI-First Security Operations",
    description: "FDEs + Lucid ML prioritize what matters, prove it with numbers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
