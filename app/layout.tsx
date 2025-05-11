import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import UserContextProvider from "./providers/UserContextProvider";
import TanstackQueryContextProvider from "./providers/TanstackQueryContextProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { StrictMode } from "react";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stylenest",
  description: "By Kevin Ibanez from GreatFrontend.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StrictMode>
      <html suppressHydrationWarning={true} lang="en">
        <body
          className={
            notoSans.className +
            " flex flex-col bg-gradient-to-b from-gray-50 to-[#d2d6db] gap-4 py-4 px-4"
          }
        >
          <UserContextProvider>
            <TanstackQueryContextProvider>
              <Navbar />
              <div className="w-full bg-white rounded-lg">
                <main className="no-padding-container py-12 tablet:py-16 containerMax:py-24 px-3 tablet:px-4 containerMax:px-8 justify-center gap-y-24 tablet:gap-y-32 containerMax:gap-y-48">
                  {children}
                  <Footer />
                </main>
              </div>
            </TanstackQueryContextProvider>
          </UserContextProvider>
        </body>
      </html>
    </StrictMode>
  );
}
