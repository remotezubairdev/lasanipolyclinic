import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Alert from "./components/Alert";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: 'Lasani Poly Clinic - Specialized Diabetes Care & Gynecology Services',
  description: 'Lasani Poly Clinic offers specialized care in diabetes, general health, and gynecology with experienced doctors.',
  keywords: ['diabetes specialist', 'general physician', 'gynecology', 'polyclinic', 'healthcare', 'polyclinic in lahore'],
  openGraph: {
    title: 'Lasani Poly Clinic - Specialized Diabetes Care & Gynecology Services',
    description: 'Visit Lasani Poly Clinic for top-notch care in diabetes management, general health, and women’s health by experienced doctors.',
    url: 'https://lasanipolyclinic.vercel.app',  // Example URL
    siteName: 'Lasani Poly Clinic',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Navbar />
        <Alert />
        <main className="md:px-16 px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
