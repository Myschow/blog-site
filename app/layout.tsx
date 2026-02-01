import type { Metadata } from "next";
import { Silkscreen } from "next/font/google";
import "./globals.css";
import Sound from "./components/sound";

const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-silkscreen",
});

export const metadata: Metadata = {
  title: "Tech Blog",
  description: "Retro-style pixel tech blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${silkscreen.className} antialiased`}>
        {children}
        <Sound />
      </body>
    </html>
  );
}