import Head from "next/head";
import localFont from "next/font/local";
import "../globals.css";
import Navbar from "@/app/en/components/Sections/Navbar";
import { Providers } from "../providers";
import Footer from "@/app/en/components/Sections/Footer";
import Loader from "@/components/ui/Loader";

const geistSans = localFont({
  src: "../fonts/Cairo-Bold.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/Cairo-Regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          geistSans.variable +
          " " +
          geistMono.variable +
          " " +
          "bg-background text-foreground font-sans"
        }
      >
        <Head>
          <title>Askar Group | General Contracting Services in Egypt</title>
          <meta
            name="description"
            content="Discover Askar Group, Askar Metal Forming Factory , a leader in general contracting and construction services in Egypt. We deliver exceptional results for all your construction needs."
          />
          <meta
            name="keywords"
            content="Askar Group, General Contracting, Construction Services, Egypt Construction, Askar, AskarCo"
          />
          <meta name="author" content="Askar Group | General Contracting" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://askarconstruction.com/en" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "http://schema.org",
                "@type": "Organization",
                name: "Askar Group",
                url: "https://askarconstruction.com/en",
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
        <Loader Logo={"/logoDM.png"} />
        <Navbar />
        <main>
        <Providers>{children}</Providers>
        <Footer />
        </main>
      </body>
    </html>
  );
}
