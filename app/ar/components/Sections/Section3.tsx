import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <section
        className="relative py-16 lg:py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-slate-900 dark:via-gray-800 dark:to-gray-900 border-t-2 border-indigo-700"
        dir="rtl"
      >
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
          {/* الخلفية التوضيحية */}
          <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
            <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-pink-500 dark:bg-pink-500 blur-xl opacity-60 lg:opacity-95 hidden" />
            <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-indigo-600 dark:bg-indigo-600 blur-xl opacity-80" />
          </div>
          <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-indigo-600 to-pink-500 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90" />

          {/* قسم النصوص */}
          <div
            className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
      lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl
   font-bold text-gray-900 dark:text-white text-right"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-blue-600 to-pink-500">
                مصنع عسكر{" "}
              </span>
              لتشكيل المعادن والمعالجة الدقيقة
            </h1>
            <p className="mt-8 text-gray-600 dark:text-gray-300 text-justify">
              في مصنع عسكر، نفخر بكوننا منشأة حديثة ومجهزة بالكامل تقدم حلولًا
              متكاملة لتشكيل المعادن والمعالجة الدقيقة. تمكننا تقنياتنا المتطورة
              وخبراتنا من تلبية احتياجات الصناعات المتنوعة، مما يتيح لنا تقديم
              خدمات موثوقة وعالية الجودة ومبتكرة. من التصاميم المخصصة إلى
              الإنتاج على نطاق واسع، نحن ملتزمون بالتميز في كل التفاصيل.
            </p>
            <div className="mt-10 flex max-w-md mx-auto lg:mx-0">
              <Link href="https://wa.me/+201000459052">
                <button className="w-full py-3 px-6 bg-transparent border border-indigo-600 hover:bg-indigo-700 hover:text-white dark:text-white text-indigo-700 font-semibold rounded-lg shadow-lg transition-all duration-300">
                  تواصل معنا
                </button>
              </Link>
            </div>
          </div>

          {/* قسم الصورة */}
          <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <Image
              src="https://res.cloudinary.com/dvhcaimzt/image/upload/w_1000/q_auto/f_auto/c_fill,w_1880,h_1880,ar_1:1,e_improve,e_sharpen/v1732973071/IMG-20241129-WA0034_vff8lk.jpg"
              alt="مصنع عسكر - تشكيل المعادن والمعالجة الدقيقة"
              width={600}
              height={600}
              className="lg:absolute lg:w-full lg:h-full rounded-3xl object-fill lg:max-h-none max-h-96"
              loading="lazy" // تحميل الصورة بشكل كسول
            />
          </div>
        </div>
      </section>
      <section
        className="relative py-16 lg:py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-slate-900 dark:via-gray-800 dark:to-gray-900 border-t-2 border-indigo-700"
        dir="ltr"
      >
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
          {/* الخلفية التوضيحية */}
          <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
            <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-pink-500 dark:bg-pink-500 blur-xl opacity-60 lg:opacity-95 hidden" />
            <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-indigo-600 dark:bg-indigo-600 blur-xl opacity-80" />
          </div>
          <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-indigo-600 to-pink-500 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90" />

          {/* قسم النصوص */}
          <div
            className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
      lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl
   font-bold text-gray-900 dark:text-white text-right"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-blue-600 to-pink-500">
                الجودة والتميز{" "}
              </span>
              سبيلنا إلى الريادة
            </h1>
            <p
              className="mt-8 text-gray-600 dark:text-gray-300 text-justify"
              dir="rtl"
            >
              نحن في مصنع عسكر نؤمن بأن الجودة هي أساس النجاح. نعمل بجد لتقديم
              منتجات عالية الكفاءة من المعادن التي تلبي أعلى المعايير العالمية.
              فريقنا المتخصص يسعى دائمًا إلى الابتكار لضمان تحقيق رضا عملائنا
              وشركائنا في النجاح. في مصنع عسكر لتشكيل المعادن، نركز على أدق
              التفاصيل لضمان تحقيق أفضل النتائج. منتجاتنا تجمع بين المتانة
              والجمال، ما يجعلها الخيار المثالي لشركات المقاولات والمشاريع
              الكبرى. لأننا ندرك أهمية الوقت والجودة، نقدم حلولاً مبتكرة تُنفذ
              في الوقت المناسب وبأعلى معايير الجودة.
            </p>
          </div>

          {/* قسم الصورة */}
          <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <Image
              src="https://res.cloudinary.com/dvhcaimzt/image/upload/v1733495908/IMG-20241206-WA0026_cvjgjf.jpg"
              alt="مصنع عسكر - تشكيل المعادن والمعالجة الدقيقة"
              width={600}
              height={600}
              className="lg:absolute lg:w-full lg:h-full rounded-3xl object-fill lg:max-h-none max-h-96"
              loading="lazy" // تحميل الصورة بشكل كسول
              unoptimized
            />
          </div>
        </div>
      </section>
      <section
        className="relative py-16 lg:py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-slate-900 dark:via-gray-800 dark:to-gray-900 border-y-2 border-indigo-700"
        dir="rtl"
      >
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
          {/* الخلفية التوضيحية */}
          <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
            <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-pink-500 dark:bg-pink-500 blur-xl opacity-60 lg:opacity-95 hidden" />
            <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-indigo-600 dark:bg-indigo-600 blur-xl opacity-80" />
          </div>
          <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-indigo-600 to-pink-500 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90" />

          {/* قسم النصوص */}
          <div
            className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
      lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl
   font-bold text-gray-900 dark:text-white text-right"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-blue-600 to-pink-500">
                مصنع عسكر{" "}
              </span>
              شريكك الأمثل في حلول تشكيل المعادن
            </h1>
            <p className="mt-8 text-gray-600 dark:text-gray-300 text-justify">
              مع مصنع عسكر، يمكنك الاعتماد على الخبرة والاحترافية في تلبية
              احتياجات مشاريعك. نحن ملتزمون بتوفير منتجات معدنية متينة ودقيقة
              تتناسب مع تطلعات عملائنا في مختلف القطاعات. رؤيتنا هي أن نصبح
              الاسم الأول في تشكيل المعادن بفضل خدماتنا المميزة وسرعة تنفيذنا.{" "}
            </p>
          </div>

          {/* قسم الصورة */}
          <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <Image
              src="https://res.cloudinary.com/dvhcaimzt/image/upload/v1733495947/IMG-20241206-WA0047_pbizmo.jpg"
              alt="مصنع عسكر - تشكيل المعادن والمعالجة الدقيقة"
              width={600}
              height={600}
              className="lg:absolute lg:w-full lg:h-full rounded-3xl object-fill lg:max-h-none max-h-96"
              loading="lazy" // تحميل الصورة بشكل كسول
              unoptimized
            />
          </div>
        </div>
      </section>

      <meta
        name="description"
        content="مصنع عسكر يقدم حلولًا متكاملة لتشكيل المعادن والمعالجة الدقيقة، مقدماً خدمات عالية الجودة ومبتكرة."
      />
    </>
  );
}
