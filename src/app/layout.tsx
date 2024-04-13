import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dicas bet365",
  description: "O melhor site com dicas de bet para suas apostas esportivas!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className + ''}>
      <GoogleAnalytics gaId="GTM-NMJ6KPQ4" />
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  );
}
