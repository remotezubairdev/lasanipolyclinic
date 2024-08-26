import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Alert from "./components/Alert";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lasani Polyclinic | Lahore",
  description: `A Poly Clinic Located in Johar Town, Lahore. We specialize in gynaecology & diabetes. We believe that 
  regular blood sugar level monitoring is mandatory for diabetic patients. Our proper diagnosis and effective treatment saves 
  precious lives.`,
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
