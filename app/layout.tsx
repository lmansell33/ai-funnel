import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Content Engine for Professional Services | Mansell Productions",
  description:
    "Turn one content shoot into months of authority-building videos, blogs, emails, captions, hashtags, social posts, and platform-ready assets for your professional service business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
