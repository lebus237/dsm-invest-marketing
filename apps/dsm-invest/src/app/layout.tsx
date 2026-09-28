import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "../styles.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "DSM Invest — Partnership Investment",
  description:
    "DSM Invest is a partnership investment group building long-term value across African markets.",
  authors: [{ name: "DSM Invest" }],
  openGraph: {
    title: "DSM Invest — Partnership Investment",
    description: "A partnership investment group building long-term value across African markets.",
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
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Work+Sans:wght@300;400;500;600&display=swap"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
