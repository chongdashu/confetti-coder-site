import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Confetti Coder - Add a Sprinkle of Joy to Your Coding",
  description: "Confetti Coder is a delightful VS Code extension that adds customizable confetti effects to your coding sessions, making development more enjoyable.",
  metadataBase: new URL('https://confetticoder.xyz'),
  openGraph: {
    title: 'Confetti Coder',
    description: 'Add a Sprinkle of Joy to Your Coding',
    url: 'https://confetticoder.xyz',
    siteName: 'Confetti Coder',
    images: [
      {
        url: 'https://confetticoder.xyz/og-image.png', // Make sure to create this image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Confetti Coder',
    description: 'Add a Sprinkle of Joy to Your Coding',
    images: ['https://confetticoder.xyz/og-image.png'], // Same as OpenGraph image
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest', 
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
