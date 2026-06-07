import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Shardul Anaspure — Full Stack Engineer",
  description:
    "Full Stack Engineer specializing in fintech platforms, scalable backend systems, and modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-[#0a0a0a] text-[#ededed] min-h-screen">
        <Script id="no-scroll-restore" strategy="beforeInteractive">
          {`history.scrollRestoration = 'manual'; window.scrollTo({ top: 0, behavior: 'instant' });`}
        </Script>
        {children}
      </body>
    </html>
  );
}
