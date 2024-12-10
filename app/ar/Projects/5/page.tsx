"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import Blog from "../../components/Sections/Blog";
import { Swiper as SwiperClass } from "swiper/types";

export default function Project1() {
  const projectName = "Foundation for mixed ped at DM plant (عمل قواعد خرصانيه وتثبيت التنكات داخل محطة المياه)";
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const images = [
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550801/image5_oj6xwy.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550802/image11_txtkdc.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550774/image1_khgabl.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550813/image4_nndd69.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550791/image2_zcnzqb.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550814/image9_q4kdd9.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550810/image6_uuim1d.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550819/image8_rezaom.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550790/image12_e22g5t.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550802/image13_mhnfto.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550771/image10_qxoud8.jpg",
    },
  ];

  return (
    <div className="w-full dark:bg-slate-900 dark:text-white pt-40 py-10 px-4 sm:px-8">
      {/* أشكال الخلفية */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 bg-indigo-300 dark:bg-indigo-700 rounded-full opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-400 dark:bg-slate-700 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-0 w-72 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-50 transform -translate-y-1/2 rotate-45"></div>
      </div>

      {/* عنوان المشروع */}
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-8">
        {projectName}
      </h1>

      {/* المعرض الرئيسي */}
      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Thumbs]}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          className="mb-4"
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-square w-full">
                <Image
                  src={image.src}
                  alt={`Project image ${index + 1}`}
                  className="rounded-lg object-cover"
                  fill
                  priority
                  unoptimized
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* معرض الصور المصغرة */}
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={7}
          spaceBetween={10}
          watchSlidesProgress
          className="cursor-pointer"
          breakpoints={{
            640: { slidesPerView: 6 },
            768: { slidesPerView: 8 },
            1024: { slidesPerView: 10 },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-square w-full">
                <Image
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="rounded-md border border-gray-300 object-cover"
                  fill
                  priority
                  unoptimized
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Blog />
    </div>
  );
}
