import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const source_sans_3 = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sSan3",
});
const rubik = Rubik({ subsets: ["latin"], display: "swap", variable: "--font-rubik" });

export const metadata: Metadata = {
  title: "FATME",
  description:
    "FATMee blog món ăn, các trang blog chất lượng về review món ăn FATMee, không những thế FATMee còn mang đến cho chúng ta những trải nghiệm ngon mắt, và những cảm xúc tuyệt vời nhất.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${source_sans_3.variable} ${rubik.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
