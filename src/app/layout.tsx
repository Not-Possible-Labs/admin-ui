import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { config} from "dotenv";

config({ path: ".env.local" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "ChessBet Admin | Manage Players and Games",
  description: "The ChessBet Admin Dashboard for monitoring live games, managing users, handling reports, and ensuring fair play through advanced cheat detection review tools.",
  openGraph: {
    title: "ChessBet Admin | Manage Players and Games",
    description: "The ChessBet Admin Dashboard for monitoring live games, managing users, handling reports, and ensuring fair play through advanced cheat detection review tools.",
    url: process.env.HOST,
    siteName: "ChessBet",
    images: [
      {
        url: "https://cdn.dribbble.com/userupload/4050238/file/original-0c32e6ed53d1093b822f4743c85fec00.jpg?resize=1600x1200&vertical=center", // Public URL to your image
        width: 1200,
        height: 630,
        alt: "ChessBet - Play. Wager. Win.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChessBet Admin | Manage Players and Games",
    description: "The ChessBet Admin Dashboard for monitoring live games, managing users, handling reports, and ensuring fair play through advanced cheat detection review tools.",
    images: ["https://cdn.dribbble.com/userupload/4050238/file/original-0c32e6ed53d1093b822f4743c85fec00.jpg?resize=1600x1200&vertical=center"],
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
