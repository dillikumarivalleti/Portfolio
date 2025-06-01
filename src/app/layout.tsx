import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valleti Dilli Kumari - QA & Automation Specialist",
  description: "Portfolio of Valleti Dilli Kumari, a QA & Automation Specialist based in Bengaluru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a192f] text-gray-300`}>
        {children}
      </body>
    </html>
  );
}
