import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Design Homes - Custom Home Builders | Brisbane, Gold Coast & Sunshine Coast",
  description: "Design Homes Pty Ltd - building new homes, duplexes, townhouses and custom builds across South East Queensland. Licensed, trusted, and built to last.",
  keywords: ["custom home builders", "Brisbane", "Gold Coast", "Sunshine Coast", "SEQ", "new homes", "duplexes", "townhouses"],
  openGraph: {
    title: "Design Homes - Custom Home Builders",
    description: "Building new homes, duplexes, townhouses and custom builds across South East Queensland.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sora.variable} antialiased bg-[#0d1117]`}
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
