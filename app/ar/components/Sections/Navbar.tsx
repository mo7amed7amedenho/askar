"use client";

import React, { useState, useEffect, Suspense } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { IoLanguageSharp } from "react-icons/io5";
import Logo from "@/components/ui/Logo";
import LogoDM from "@/components/ui/LogoDM";
import { FaFacebook, FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { ThemeSwitcher } from "../../../../components/ui/ThemeSwitcher";
import { useTheme } from "next-themes";
import Loader from "@/components/ui/Loader";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Ensure theme is ready
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // إخفاء عند التمرير للأسفل
      } else {
        setIsVisible(true); // إظهار عند التمرير للأعلى
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Suspense fallback={<Loader Logo="/logoDM.png" />}>
      <div>
        {/* شريط المعلومات العلوي */}
        <div
          className={`h-8 fixed w-full z-50 bg-indigo-700 dark:bg-gray-900 flex items-center justify-between px-4 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-300`}
          dir="ltr"
        >
          <nav className="flex items-center text-white space-x-1 text-lg">
            <Link
              href="https://www.facebook.com/profile.php?id=61566988097016&mibextid=ZbWKwL"
              className="hover:text-indigo-300 duration-300"  target="_blank"
            >
              <FaFacebook className="text-white" />
            </Link>
            <Link
              href="https://www.google.com/maps/place/%D9%85%D8%B5%D9%86%D8%B9+%D8%B9%D8%B3%D9%83%D8%B1+%D9%84%D8%AA%D8%B4%D9%83%D9%8A%D9%84+%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%AF%D9%86%E2%80%AD/data=!4m2!3m1!1s0x0:0xb7e745a21acf81e4?sa=X&ved=1t:2428&ictx=111"
              target="_blank"
              className="hover:text-indigo-300 duration-300"
            >
              <FaLocationDot className="text-white" />
            </Link>
            <div className="flex items-center font-mono text-white hover:text-indigo-300 transition-all duration-300">
              <MdMarkEmailUnread className="text-xl" />
              <span className="ml-1 text-lg">askar@info.com</span>
            </div>
          </nav>
          <div className="flex items-center text-gray-200">
            <IoLanguageSharp className="text-xl" />
            <Link
              href="/en"
              className="hover:text-indigo-300 text-white transition-all px-2 duration-300"
            >
              English
            </Link>
          </div>
        </div>

        {/* النافبار الرئيسية */}
        <Navbar
          isBordered
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
          className={`bg-white dark:bg-slate-800 py-3 px-1 border-b-2 border-indigo-700 text-gray-900 dark:text-gray-200 fixed w-full z-40 brightness-125 transition-transform duration-300 ${
            isVisible ? "translate-y-8" : "-translate-y-full"
          }`}
        >
          {/* شعار الشركة */}
          <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
              {currentTheme === "dark" ? <LogoDM /> : <Logo />}
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex" justify="start">
            <NavbarBrand>
              <Link href="/ar">
                {currentTheme === "dark" ? <LogoDM /> : <Logo />}
              </Link>
            </NavbarBrand>
          </NavbarContent>

          {/* عناصر القائمة */}
          <NavbarContent
            className="hidden sm:flex gap-4 text-gray-900 dark:text-gray-200"
            justify="end"
          >
            <NavbarItem>
              <Link
                href="/ar/"
                className="hover:text-indigo-700 dark:hover:text-indigo-400 text-lg transition-all duration-300 border-b-2 border-transparent hover:border-indigo-700 dark:hover:border-indigo-400"
              >
                الصفحة الرئيسية
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/ar/Projects"
                className="hover:text-indigo-700 dark:hover:text-indigo-400 text-lg transition-all duration-300 border-b-2 border-transparent hover:border-indigo-700 dark:hover:border-indigo-400"
              >
                المشاريع
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/ar/AboutUs"
                className="hover:text-indigo-700 dark:hover:text-indigo-400 text-lg transition-all duration-300 border-b-2 border-transparent hover:border-indigo-700 dark:hover:border-indigo-400"
              >
                من نحن
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/ar/ContactUs"
                className="hover:text-indigo-700 dark:hover:text-indigo-400 text-lg transition-all duration-300 border-b-2 border-transparent hover:border-indigo-700 dark:hover:border-indigo-400"
              >
                اتصل بنا
              </Link>
            </NavbarItem>
          </NavbarContent>

          {/* خيارات إضافية */}
          <NavbarContent justify="end" className="flex relative gap-4">
            {/* واتساب */}
            <NavbarItem>
              <Link
                href="https://wa.me/+201000459052"
                target="_blank"
                className="border text-indigo-800 border-indigo-800  hover:text-white hover:bg-indigo-700 dark:text-white py-2 px-3 rounded-2xl transition-all duration-300 max-sm:hidden"
              >
                <div className="flex items-center">
                  <SiWhatsapp className="text-lg" />
                  <span className="mr-2"> تواصل معنا</span>
                </div>
              </Link>
            </NavbarItem>

            {/* تبديل الوضع */}
            <NavbarItem>
              <div className="max-sm:hidden">
                <ThemeSwitcher />
              </div>
            </NavbarItem>
          </NavbarContent>

          {/* القائمة في وضع الجوال */}
          <NavbarContent className="sm:hidden" justify="end">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="hover:text-indigo-700 dark:hover:text-indigo-400 transition-all duration-300"
            />
          </NavbarContent>
          <NavbarMenu className="flex flex-col bg-indigo-700 dark:bg-gray-900 text-gray-200 gap-4 pt-20">
            <NavbarMenuItem>
              <Link
                href="/ar"
                className="hover:text-indigo-300 text-white dark:hover:text-indigo-400 transition-all duration-300"
              >
                الصفحة الرئيسية
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link
                href="/ar/Projects"
                className="hover:text-indigo-300 text-white dark:hover:text-indigo-400 transition-all duration-300"
              >
                المشاريع
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link
                href="/ar/AboutUs"
                className="hover:text-indigo-300 text-white dark:hover:text-indigo-400 transition-all duration-300"
              >
                من نحن
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link
                href="/ar/ContactUs"
                className="hover:text-indigo-300 text-white dark:hover:text-indigo-400 transition-all duration-300"
              >
                اتصل بنا
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link
                href="https://wa.me/+201000459052"
                target="_blank"
                className="hover:bg-indigo-500 text-white py-2  rounded-full transition-all duration-300"
              >
                <div className="flex items-center">
                  <SiWhatsapp className="text-lg" />
                  <span className="mr-2"> تواصل معنا </span>
                </div>
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <ThemeSwitcher />
            </NavbarMenuItem>
          </NavbarMenu>
        </Navbar>
      </div>
    </Suspense>
  );
}
