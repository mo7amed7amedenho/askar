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
  const projectName = "Fire Lines (ترميم ودهان)";
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const images = [
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550754/image4_cpkfkm.jpg ",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550756/image7_ag35fa.jpg ",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550757/image5_rkdle7.jpg ",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550764/image8_rr3iv4.jpg ",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550743/image1_tvaybc.jpg ",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550745/image2_mvchnd.jpg ",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550749/image3_ptybxt.jpg ",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550751/image10_mpz2gd.jpg ",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550752/image11_ndgd2x.jpg ",
    },

    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550810/image12_mmjjfi.jpg ",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550776/image9_b3jakf.jpg ",
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
