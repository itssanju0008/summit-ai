import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/layout/header/Header";
import { Footer } from "@/layout/footer/Footer";
import ScrollManager from "@/layout/ScrollManager";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Community Driven AI",
  description: "Community Driven AI: A Roadmap For India's Last Mile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <ScrollManager />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
