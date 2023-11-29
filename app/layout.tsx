import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import SessionProvider from "@/utils/SessionProvider";
import { getServerSession } from "next-auth";

const source_sans_3 = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sSan3",
});
const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "WinLax - FATMEv2",
  description:
    "FATMee blog món ăn, các trang blog chất lượng về review món ăn FATMee, không những thế FATMee còn mang đến cho chúng ta những trải nghiệm ngon mắt, và những cảm xúc tuyệt vời nhất.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en" data-theme="light">
      <body
        suppressHydrationWarning={true}
        className={`${source_sans_3.variable}`}
      >
        <SessionProvider session={session}>
          <Header />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
