import "./globals.css";

import { Geist } from "next/font/google";
import Script from "next/script";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={geist.variable}>
        <Script
          id="set-document-language"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var path = window.location.pathname;
                var lang = path.startsWith('/en') ? 'en' : 'nl';
                document.documentElement.lang = lang;
              })();
            `,
          }}
        />

        {children}
      </body>
    </html>
  );
}