import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from '@/components/ScrollToTop';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valleti Dilli Kumari - QA & Automation Specialist",
  description: "Portfolio of Valleti Dilli Kumari, a QA & Automation Specialist based in Bengaluru",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      }
    ],
    shortcut: ["/favicon.svg"],
    apple: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Preserve scroll position on refresh
              if (window.location.hash) {
                window.addEventListener('load', function() {
                  const hash = window.location.hash;
                  const element = document.querySelector(hash);
                  if (element) {
                    element.scrollIntoView();
                  }
                });
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#0a192f] text-gray-300 min-h-screen`}>
        <main className="relative">
          {children}
          <ScrollToTop />
        </main>
      </body>
    </html>
  );
}
