// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout"; // Import the new Client Component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Danile Shobe | Full Stack Developer & AI Innovator",
  description:
    "Welcome to Shobe Tech — a futuristic portfolio showcasing full stack development, AI projects, and creative digital solutions. Built with Next.js, React, and Framer Motion.",
  keywords: [
    "Daniel Shobe",
    "Full Stack Developer",
    "Software Engineer",
    "AI Developer",
    "MERN Stack",
    "Next.js Portfolio",
    "React Developer",
    "Ethiopian Developer",
  ],
  authors: [{ name: "Daniel Shobe", url: "https://shobetech.com" }],
  openGraph: {
    title: "Daniel Shobe | Full Stack Developer & AI Innovator",
    description:
      "Explore Daniel Shobe’s futuristic projects in web development and artificial intelligence. Clean design, interactive animations, and modern UI/UX.",
    url: "https://shobetech.com",
    siteName: "Daniel Shobe Portfolio",
    images: [
      {
        url: "/images/ai2.jpg",
        width: 1200,
        height: 630,
        alt: "Daniel Shobe Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Shobe | Full Stack Developer & AI Innovator",
    description:
      "Discover the work and vision of Daniel Shobe — merging creativity, code, and AI.",
    creator: "@kosifko",
    images: ["/og-image.png"],
  },
  themeColor: "#0f172a",
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}