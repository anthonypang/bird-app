import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationSidebar from "./components/NavigationSidebar/NavigationSidebar";
import ExploreSidebar from "./components/ExploreSidebar/ExploreSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bird App",
  description: "The NEXT (js) big thing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="NavigationSidebar">
              <NavigationSidebar />
            </div>
            <div className="flex justify-center border-r border-l max-w-lg 2xl:max-w-2xl w-full border-outlineColor">
              {children}
            </div>
            <div className="ExploreSidebar">
              <ExploreSidebar />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
