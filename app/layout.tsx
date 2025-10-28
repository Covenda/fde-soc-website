import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Covenda - Build & Run Your AI-SOC with Forward-Deployed Security Engineers",
    template: "%s | Covenda",
  },
  description: "We build and run your AI-SOC with Forward-Deployed Security Engineers on the Covenda platform. Security engineering and operations as a service.",
  keywords: ["security engineering", "AI-SOC", "forward deployed engineers", "SOC operations", "threat detection", "security automation"],
  authors: [{ name: "Covenda" }],
  creator: "Covenda",
  metadataBase: new URL("https://covenda.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://covenda.ai",
    siteName: "Covenda",
    title: "Covenda - Build & Run Your AI-SOC with Forward-Deployed Security Engineers",
    description: "We build and run your AI-SOC with Forward-Deployed Security Engineers on the Covenda platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Covenda - Build & Run Your AI-SOC",
    description: "Security engineering and operations as a service with Forward-Deployed Engineers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
