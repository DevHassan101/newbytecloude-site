import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from 'next/font/google';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "ByteCloude",
  description: "Developed By ByteCloude",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

      <body className={outfit.className} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}