"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import {useCallback} from "react";
import Autoplay from "embla-carousel-autoplay";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"; // استبدال الأيقونات
import {Button} from "../../../../components/ui/button";
import {AiOutlineArrowLeft} from "react-icons/ai";
import Typewriter from "typewriter-effect";
import Link from "next/link";

export default function Hero() {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay()]);
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="embla relative border-b border-b-indigo-400" dir="ltr">
            {/* النص والزّر في طبقة منفصلة */}
            <div
                className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 pointer-events-none">
                <div className="mb-4">
                    <h1 className="text-sm bg-black font-mono bg-opacity-35 backdrop-blur-xl sm:text-xl px-3 py-1 border border-indigo-500 rounded-full">
                        Welcome to the World of Creativity
                    </h1>
                </div>

                <h1 className="text-3xl sm:text-6xl font-bold leading-tight">
                    Askar Group
                </h1>
                <h2
                    className="text-lg sm:text-3xl font-mono mt-4 sm:mt-6 text-gray-100"
                >
                    <Typewriter
                        options={{
                            strings: [
                                "General Contracting and Large Projects",
                                "Mechanical Work and Industrial Installations",
                                "Civil Works and Infrastructure Development",
                                "Metal Fabrication and Custom Production Solutions",
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            deleteSpeed: 50,
                        }}
                    />
                </h2>
                <Link href="tel:+201228171485">
                    <Button
                        variant="ghost"
                        className="mt-4 hover:border-indigo-600 hover:text-indigo-600 pointer-events-auto"
                    >
                        <AiOutlineArrowLeft/>
                        Contact Us
                    </Button>
                </Link>
            </div>


            {/* Carousel with lazy loading and alt texts for SEO */}
            <div className="backdrop-blur-sm">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container flex">
                        <div className="embla__slide">
                            <Image
                                className="object-cover brightness-50 max-sm:h-screen"
                                src="https://res.cloudinary.com/dvhcaimzt/image/upload/v1732973071/IMG-20241129-WA0034_vff8lk.jpg"
                                width={1920}
                                height={1080}
                                alt="موقع بناء حديث يحتوي على آلات وعمال"
                                loading="lazy"
                            />
                        </div>
                        <div className="embla__slide">
                            <Image
                                className="object-cover brightness-50 max-sm:h-screen"
                                src="https://res.cloudinary.com/dvhcaimzt/image/upload/w_1000/q_auto/f_auto/v1732973050/IMG-20241021-WA0031_hspd7d.jpg"
                                width={1920}
                                height={1080}
                                alt="عمال بناء يقومون بتجميع هياكل معدنية"
                                loading="lazy"
                            />
                        </div>
                        <div className="embla__slide">
                            <Image
                                className="object-cover brightness-50 max-sm:h-screen"
                                src="https://res.cloudinary.com/dvhcaimzt/image/upload/w_1000/q_auto/f_auto/v1733495911/IMG-20241206-WA0018_enbrbg.jpg"
                                width={1920}
                                height={1080}
                                alt="معدات بناء عالية التقنية أثناء العمل"
                                loading="lazy"
                                unoptimized
                            />
                        </div>
                        <div className="embla__slide">
                            <Image
                                className="object-cover brightness-50 max-sm:h-screen"
                                src="https://res.cloudinary.com/dvhcaimzt/image/upload/w_1000/q_auto/f_auto/v1733495899/IMG-20241206-WA0010_yqzopu.jpg"
                                width={1920}
                                height={1080}
                                alt="معدات بناء عالية التقنية أثناء العمل"
                                loading="lazy"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>

                {/* Navigation buttons with aria-labels for accessibility */}
                <button
                    className="embla__prev absolute top-1/2 -translate-y-1/2"
                    onClick={scrollPrev}
                    aria-label="انتقل إلى الشريحة السابقة"
                >
                    <AiOutlineLeft
                        className="text-white text-6xl hover:text-indigo-600 duration-200 max-sm:text-2xl pl-2"/>
                </button>
                <button
                    className="embla__next absolute top-1/2 right-0 -translate-y-1/2"
                    onClick={scrollNext}
                    aria-label="انتقل إلى الشريحة التالية"
                >
                    <AiOutlineRight
                        className="text-white text-6xl hover:text-indigo-600 duration-200 max-sm:text-2xl pr-2"/>
                </button>
            </div>
        </div>
    );
}
