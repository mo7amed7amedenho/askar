import Head from "next/head";
import localFont from "next/font/local";
import "../globals.css";
import Navbar from "@/app/ar/components/Sections/Navbar";
import { Providers } from "../providers";
import Footer from "@/app/ar/components/Sections/Footer";
import Loaderar from "@/components/ui/Loaderar";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: {
    default: "عسكر للمقاولات العمومية",
    template: "%s |  عسكر للمقاولات العمومية",
  },

  description:
    "عسكر جروب للمقاولات العمومية هي مجموعة رائدة تأسست عام 2004، متخصصة في تقديم حلول شاملة ومتطورة في مجالات الأعمال الميكانيكية والهندسية، المشاريع المدنية، وتشكيل وتشغيل المعادن. بفضل أكثر من 20 عامًا من الخبرة وما يزيد عن 300 مشروع ناجح، نلتزم بتقديم خدمات تلبي أعلى معايير الجودة والابتكار. عسكر جروب تعمل بمقرها في الإسكندرية، معتمدة على أحدث التقنيات وفريق عمل محترف لتلبية متطلبات العملاء في مختلف القطاعات.",
  twitter: {
    card: "summary_large_image",
    title: "عسكر للمقاولات العمومية",
    images: [
      "https://res.cloudinary.com/dvhcaimzt/image/upload/w_600/q_50/f_auto/v1733511244/opengraph-image_wwy08v.png",
    ],
  },
  openGraph: {
    images: [
      {
        url: "https://res.cloudinary.com/dvhcaimzt/image/upload/w_600/q_50/f_auto/v1733511244/opengraph-image_wwy08v.png",
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
    <html lang="ar" dir="rtl">
      <Head>
        <title>شركة عسكر للمقاولات العمومية</title>
        <meta
          name="description"
          content="اكتشف مجموعة عسكر، الرائدة في خدمات المقاولات العامة والإنشاءات في مصر. نقدم نتائج مميزة تلبي جميع احتياجاتك الإنشائية."
        />
        <meta
          name="keywords"
          content="شركة عسكر، مقاولات عامة، خدمات إنشاءات، إنشاءات مصر، عسكر، عسكر جروب, مصنع عسكر لتشكيل المعادن"
        />
        <meta name="author" content="شركة عسكر" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://askarconstruction.com/ar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:image"
          content="https://askarconstruction.com/opengraph-image.png"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "مجموعة عسكر",
              url: "https://askarconstruction.com/ar",
              logo: "https://askarconstruction.com/opengraph-image.png",
              description:
                "مجموعة عسكر هي المزود الرائد لخدمات المقاولات العامة والإنشاءات في مصر.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "القاهرة",
                addressCountry: "مصر",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+201000459052",
                contactType: "خدمة العملاء",
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
        <main className="">
          <Loaderar Logo={"/logoDM.png"} />
          <Navbar />

          <Providers>{children}</Providers>
          <Footer />
        </main>
      </body>
    </html>
  );
}
