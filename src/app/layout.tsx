'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { usePathname } from "next/navigation";
import HeadLinks from "./components/headlinks/headlinks";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname()
  const pageNotNavbar = pathname === '/login' || pathname === '/sign-up'

  return (
    <html lang="en">
      <HeadLinks />
      <body className={inter.className}>
        {!pageNotNavbar && <Navbar />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
