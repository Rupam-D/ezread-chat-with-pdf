import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-loading-skeleton/dist/skeleton.css'
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster"
import TrpcProvider from "@/components/TRPCProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EzRead - Read your Pdf with ease",
  description: "A platform made for students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TrpcProvider>
        <body className={cn(inter.className, "min-h-screen")}>
          {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
          <Navbar />
          {children}
          <Toaster />
          {/* <Footer /> */}
          {/* </ThemeProvider> */}
        </body>
      </TrpcProvider>
    </html>
  );
}
