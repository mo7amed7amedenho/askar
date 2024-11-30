import React from "react";
import Image from "next/image";
import Link from "next/link";

const ManegarTalk = () => {
  return (
    <main className="w-full">
      <section className="relative pt-10 xl:pt-14 bg-gray-50 dark:bg-gray-900">
        {/* الخلفية الهندسية */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-100 dark:bg-indigo-900 rounded-full opacity-50"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-30"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-300 dark:bg-indigo-700 rounded-full opacity-20"></div>
        </div>

        <div className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
          {/* النصوص */}
          <div className="mx-auto text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none">
            <span className="bg-indigo-50 dark:bg-gray-900 text-lg/snug sm:text-xl/tight lg:text-2xl/tight xl:text-2xl/tight text-indigo-600 dark:text-indigo-300 inline-block border border-dashed border-indigo-600 px-3">
              At Askar General Contracting Company,
            </span>
            <h1 className="text-indigo-950 dark:text-white text-xl/snug sm:text-xl/tight lg:text-2xl/tight xl:text-4xl/tight font-semibold">
              we are committed to delivering the highest standards of quality
              and professionalism in all our projects.
            </h1>
            <div className="mt-10 flex gap-4 justify-center lg:justify-start flex-wrap">
              <Link
                href="#"
                className="relative px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition active:before:bg-indigo-700 text-white hover:before:bg-indigo-800 before:bg-indigo-600 hover:before:scale-105"
              >
                <span className="relative">Get Started</span>
              </Link>
              <Link
                href="#"
                className="relative px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition before:bg-gray-100 dark:before:bg-gray-900 text-indigo-600 dark:text-white hover:before:scale-105"
              >
                <span className="relative">Learn More</span>
              </Link>
            </div>
          </div>
          {/* الصورة */}
          <div className="flex flex-1 lg:w-1/2 relative max-w-3xl mx-auto lg:max-w-none">
            <Image
              src="https://res.cloudinary.com/dvhcaimzt/image/upload/v1732971159/inodonqoehyqa41ocxs4.jpg"
              alt="happy team"
              width={1850}
              height={1200}
              className="lg:absolute w-full lg:inset-x-0 object-cover lg:h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ManegarTalk;
