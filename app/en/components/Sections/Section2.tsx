import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <main className="bg-gradient-to-br from-slate-900 via-gray-800 to-gray-900 overflow-hidden">
        <section className="relative bg-green-50 dark:bg-gray-900/30 pt-32 lg:pt-24 pb-32 lg:pb-4">
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

          <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:-translate-x-0 lg:-translate-y-0 lg:left-0 lg:top-16 w-40 h-40 skew-x-6 opacity-50 dark:opacity-80 rounded-full bg-gradient-to-bl from-indigo-600 to-sky-900 blur-3xl flex" />
            <div className="flex text-center lg:text-left flex-col lg:items-center lg:flex-row gap-8 lg:gap-10 xl:gap-12 relative max-w-4xl lg:max-w-none">
              <div className="space-y-8 xl:space-y-10 lg:py-12 flex-1 lg:w-1/2">
                <h1 className="text-indigo-900 dark:text-white text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-5xl/tight font-bold">
                  The team at{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-sky-800">
                    Askar Group
                  </span>{" "}
                  The foundation of our success.
                </h1>
                <p className="text-gray-700 dark:text-gray-300 max-w-md mx-auto lg:max-w-none text-justify">
                  At Askar General Contracting, our skilled engineers and
                  trained workers form the backbone of our success. With
                  expertise, precision, and a commitment to quality, our team
                  collaborates seamlessly to deliver projects that exceed
                  expectations—on time and within budget. We are your trusted
                  partner in building a better future.
                </p>
                <div className="flex flex-wrap items-center gap-4 z-30 sm:w-max sm:flex-nowrap mx-auto lg:mx-0">
                  <Link
                    href="#"
                    className="px-5 h-12 flex items-center sm:w-max w-full justify-center hover:bg-indigo-400  bg-indigo-600 text-white rounded-lg duration-150"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="flex-1 lg:w-1/2 relative hidden lg:flex justify-end pr-8"
              >
                <div className="rounded-lg absolute right-0 bottom-0 w-3/4 h-2/5 bg-gradient-to-tr from-pink-100 to-indigo-100 dark:bg-gradient-to-tr dark:from-gray-950 dark:to-gray-700" />
                <Image
                  src="https://res.cloudinary.com/dvhcaimzt/image/upload/v1733059671/IMG-20241129-WA0053_yhnzqv_w1zjfm.png"
                  width={700}
                  height={700}
                  className="w-3/4 h-auto relative"
                  alt="Engineer"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
