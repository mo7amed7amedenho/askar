import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/Cairo-Bold.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/Cairo-Regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Askar Group | General Contracting Services",
    template: "%s | Askar Group",
  },
  description:
    "Askar Co. for General Contracting, a leading provider of construction services in Egypt.",
  openGraph: {
    title: "Askar Group | عسكر للمقاولات العمومية",
    description:
      "Askar Co. for General Contracting, a leading provider of construction services in Egypt.",
    images: [
      {
        url: "https://askarconstruction.com/opengraph-image.png",
        width: 800,
        height: 600,
        alt: "Askar Group",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content="https://askarconstruction.com/opengraph-image.png"
        />
        <meta
            name="description"
            content="Discover Askar Group, Askar Metal Forming Factory , a leader in general contracting and construction services in Egypt. We deliver exceptional results for all your construction needs."
          />
          <meta
            name="keywords"
            content="Askar Group, General Contracting, عسكر جروب, Egypt Construction, Askar, مصنع عسكر لتشكيل المعادن"
          />
          <meta name="author" content="Askar Group | General Contracting" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://askarconstruction.com/" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "http://schema.org",
                "@type": "Organization",
                name: "Askar Group",
                url: "https://askarconstruction.com/",
                logo: "https://askarconstruction.com/logo.png",
                description:
                  "Askar Group is a leading provider of general contracting and construction services in Egypt.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Cairo",
                  addressCountry: "Egypt",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+201000459052",
                  contactType: "Customer Service",
                },
              }),
            }}
          />
      </Head>
      <body
        className={
          geistSans.variable +
          " " +
          geistMono.variable +
          " " +
          "bg-background text-foreground font-sans"
        }
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
