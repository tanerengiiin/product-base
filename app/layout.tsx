import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import SidebarLayout from "@/components/SidebarLayout";
import NextAuthProvider from "@/components/NextAuthProvider"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className} style={GeistSans.style}>
        <NextAuthProvider>
          <SidebarLayout>
            {children}
          </SidebarLayout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
