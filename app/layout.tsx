import type { Metadata } from "next";
import { Montserrat, Oswald } from "next/font/google";
import "./globals.scss";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "iDESIGN - Interior Design",
  description: "Creative Interior Design Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/favicon.ico" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${montserrat.variable} ${oswald.variable}`}>
        {children}
      </body>
    </html>
  );
}
