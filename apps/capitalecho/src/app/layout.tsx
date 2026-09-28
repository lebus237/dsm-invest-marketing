import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "../styles.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "CapitalEcho — Financial Intelligence by DSM Invest",
  description:
    "CapitalEcho is DSM Invest's platform for financial intelligence, editorial insight, and informed action across African markets.",
  authors: [{ name: "DSM Invest" }],
  openGraph: {
    title: "CapitalEcho — Financial Intelligence",
    description: "Financial intelligence and editorial insight from the DSM Invest ecosystem.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: [{ url: "/favicon.png", type: "image/png" }] },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Newsreader:opsz,wght@6..72,500;6..72,600&display=swap"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
