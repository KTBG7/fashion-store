import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import UserContextProvider from "./providers/UserContextProvider";
import TanstackQueryContextProvider from "./providers/TanstackQueryContextProvider";

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
    <html suppressHydrationWarning={true} lang="en">
      <body
        className={
          notoSans.className +
          " flex flex-col bg-gradient-to-b from-gray-50 to-[#d2d6db] gap-4 py-4"
        }
      >
        <UserContextProvider>
          <TanstackQueryContextProvider>
            {children}
          </TanstackQueryContextProvider>
        </UserContextProvider>
      </body>
    </html>
  );
}
