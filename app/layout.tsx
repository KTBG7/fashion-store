import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { UserContextProvider } from "./contexts/UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stylenest",
  description: "By Kevin Ibanez from GreatFrontend.com",
};
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: Infinity,
//     },
//   },
// });

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
        {/* <QueryClientProvider client={queryClient}> */}
        <UserContextProvider>{children}</UserContextProvider>
        {/* </QueryClientProvider> */}
      </body>
    </html>
  );
}
