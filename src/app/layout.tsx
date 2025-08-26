import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Analytics } from '@vercel/analytics/next';

const diaType = localFont({
  src: [
    {
      path: "../../public/fonts/ABCDiatype-Light-Trial.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ABCDiatype-Regular-Trial.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ABCDiatype-Medium-Trial.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-diatype",
});

export const metadata: Metadata = {
    title: "Animesh Mishra",
    openGraph: {
      title: "Animesh | Profile",
      description: "Explore Animesh's profile - projects. Backend Developer in the Metadata Function",
      url: "https://deiselman.vercel.app",
      siteName: "Animesh's Portfolio",
      images: [
        {
          url: "https://deiselman.vercel.app/og-image.png",
          width: 1200,
          height: 630,
          alt: "Animesh Profile Preview",
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Animesh | Profile",
      description: "Explore Animesh's profile - projects. Backend Developer in the Metadata Function",
      images: ["https://deiselman.vercel.app/og-image.png"],
    },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${diaType.variable} antialiased overflow-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
