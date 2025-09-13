import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SubredditProvider } from './context/SubredditContext';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChinaTalk - Reddit Client",
  description: "Your gateway to Chinese culture through Reddit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SubredditProvider>
          {children}
        </SubredditProvider>
      </body>
    </html>
  );
}
