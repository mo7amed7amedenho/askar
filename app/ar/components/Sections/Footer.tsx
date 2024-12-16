import { FaFacebook, FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { MdMarkEmailUnread } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* الأشكال الخلفية */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="absolute top-0 left-0 w-64 h-64 text-indigo-500 opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <circle cx="100" cy="100" r="100" />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-96 h-96 text-indigo-700 opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <polygon points="100,0 200,200 0,200" />
        </svg>
      </div>

      <div className="container px-6 py-12 mx-auto relative z-10">
        {/* الشعار ومعلومات الشركة */}
        <div className="flex flex-col items-center text-center justify-center">
          <div
            className="flex items-center space-x-4 p-4 bg-transparent rounded-lg w-full max-w-sm mx-auto "
            dir="ltr"
          >
            <div className="flex-shrink-0">
              <Image
                src="/logoDM.png"
                width={100}
                height={100}
                alt="Askar Co. logo"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col text-left space-y-1">
              <h1 className="text-lg md:text-xl font-bold leading-tight text-white">
                Askar Co. for <br />
                General Contracting
              </h1>
              <p className="text-xs md:text-sm text-gray-100 font-medium">
                عسكر للمقاولات العمومية
              </p>
            </div>
          </div>

          {/* روابط التنقل */}
          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            <Link
              href="/ar"
              className="mx-4 text-sm text-gray-100 transition-colors duration-300 hover:text-indigo-500"
            >
              الرئيسية
            </Link>
            <Link
              href="/ar/Projects"
              className="mx-4 text-sm text-gray-100 transition-colors duration-300 hover:text-indigo-500"
            >
              المشاريع
            </Link>
            <Link
              href="/ar/AboutUs"
              className="mx-4 text-sm text-gray-100 transition-colors duration-300 hover:text-indigo-500"
            >
              من نحن
            </Link>
            <Link
              href="/ar/ContactUs"
              className="mx-4 text-sm text-gray-100 transition-colors duration-300 hover:text-indigo-500"
            >
              تواصل معنا
            </Link>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700 opacity-50" />

        {/* وسائل التواصل الاجتماعي وملاحظة أسفل الصفحة */}
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="flex items-center space-x-4" dir="ltr">
            <Link
              href="https://www.facebook.com/profile.php?id=61566988097016&mibextid=ZbWKwL"
              className="hover:text-indigo-300 duration-300"
            >
              <FaFacebook className="text-white" />
            </Link>
            <Link
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.8838489773057!2d29.837416!3d30.990099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5ed007bd747f7%3A0xb7e745a21acf81e4!2z2YXYtdmG2Lkg2LnYs9mD2LEg2YTYqti02YPZitmEINin2YTZhdi52KfYr9mG!5e0!3m2!1sar!2seg!4v1689595835366!5m2!1sar!2seg"
              className="hover:text-indigo-300 duration-300"
            >
              <FaLocationDot className="text-white" />
            </Link>
            <div className="flex items-center font-mono text-white hover:text-indigo-300 transition-all duration-300">
              <MdMarkEmailUnread className="text-xl" />
              <span className="ml-1 text-lg">askar@info.com</span>
            </div>
          </div>
          <p className="text-sm max-sm:text-xs text-gray-50 max-sm:mt-2">
            ©حقوق الطبع والنشر 2025. جميع الحقوق محفوظة لشركة عسكر.
          </p>
        </div>
        <p className="text-sm max-sm:text-xs text-gray-50 max-sm:mt-2 text-center">
          تم التصميم بواسطة Hamedenho ❤️.
        </p>
      </div>

      {/* ميتا تاجز (SEO) */}
      <meta
        name="description"
        content="مجموعة عسكر للمقاولات العامة تختص بتقديم خدمات البناء عالية الجودة وتقديم التميز في كل مشروع."
      />
      <meta
        name="keywords"
        content="مقاولات, بناء, مقاولات عامة, عسكر, مجموعة عسكر, مشاريع, شركة مقاولات"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="مجموعة عسكر للمقاولات العامة" />
      <meta
        property="og:description"
        content="مجموعة عسكر للمقاولات العامة تختص بتقديم خدمات البناء عالية الجودة وتقديم التميز في كل مشروع."
      />
      <meta property="og:image" content="/logoDM.png" />
    </footer>
  );
}
