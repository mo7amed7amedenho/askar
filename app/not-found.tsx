import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <section className="bg-salate-800">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          <div className="w-full lg:w-1/2">
            <p className="text-sm font-medium text-indigo-500 dark:text-indigo-400">
              404 error
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Page not found
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Sorry, the page you are looking for doesn&apos;t exist. Here are
              some helpful links:
            </p>

            <div className="flex items-center mt-6 gap-x-3">
              {/* Take Me Home Button */}
              <Link
                href="/"
                className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-indigo-500 rounded-lg shrink-0 sm:w-auto hover:bg-indigo-600 dark:hover:bg-indigo-500 dark:bg-indigo-600"
              >
                Home Page
              </Link>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <Image
              className="w-full max-w-lg lg:mx-auto"
              src="/illustration.svg"
              alt="Page not found illustration"
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
