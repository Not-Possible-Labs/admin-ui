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
        url: "https://images.pexels.com/photos/5477776/pexels-photo-5477776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Public URL to your image
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
    images: ["https://images.pexels.com/photos/5477776/pexels-photo-5477776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
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
