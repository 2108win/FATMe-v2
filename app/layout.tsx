import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const source_sans_3 = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FATME",
  description:
    "FATMee blog món ăn, các trang blog chất lượng về review món ăn FATMee, không những thế FATMee còn mang đến cho chúng ta những trải nghiệm ngon mắt, và những cảm xúc tuyệt vời nhất.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${source_sans_3.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
