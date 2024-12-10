import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <header className="w-full absolute top-0   ">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <a href="#">
            <Image
              alt="SARD app"
              src="/icon2.png"
              width={250}
              height={80}
              className="lg:w-60 sm:w-40 w-32"
              loading="lazy"
            />
          </a>
          {/* Navigation */}
          <nav>
            <ul className="flex gap-6 font-bold">

              <li>
                <a href="/privacy">سياسة الخصوصية</a>
              </li>   <li>
                <a href="mailto:sard.app1@gmail.com">اتصل بنا</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex min-h-screen flex-col items-center">
        {/* Hero Section */}
        <section className="w-full bg-primary-light-gradient  pt-10 overflow-hidden">
          <div className="container mx-auto py-24  grid grid-cols-12 gap-4 items-center">
            {/* Text Content */}
            <div className="col-span-12 sm:col-span-6">
              <h1 className="text-4xl sm:text-5xl font-extrabold md:text-6xl mb-8 leading-tight">
                تطبيق صرد
              </h1>
              <p className="text-primary-light font-semibold mb-8">
                هل ترغب في توفير الوقت والجهد في العثور على أشخاص موثوق بهم للقيام بأعمال الصيانة في منزلك أو مكتبك؟
                <br />
                تطبيق صرد للصيانة المنزلية أختيارك الأول لراحتك 🇸🇦📱🌟خدمة إحترافية🌟سرعة في التنفيذ🌟خيارات متعددة


              </p>
              <a
                href="https://play.google.com/store/apps/details?id=net.taza"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt="SARD Google Play"
                  src="/button-googleplay.webp"
                  width={180}
                  height={52}
                  loading="lazy"
                  className="transform duration-500 hover:scale-110"
                />
              </a>
            </div>

            {/* Image Content */}
            <div className="sm:col-span-6 col-span-12 flex justify-end ">
              <div className="relative w-8/12 h-[560px]">
                <Image
                  alt="SARD Home Screen"
                  src="/phone-home.webp"
                  width={211}
                  height={563}
                  loading="lazy"
                  className="absolute top-0 left-0 transform duration-500 hover:-translate-y-4 hover:scale-110"
                />
                <Image
                  alt="SARD Empty Cart Screen"
                  src="/phone-cart.webp"
                  width={203}
                  height={579}
                  loading="lazy"
                  className="absolute left-[220px] hidden xl:block transform duration-500 hover:-translate-y-4 hover:scale-110"
                />

              </div>
            </div>
          </div>
        </section>

        {/*  نحن؟ */}
        {/* <section className="w-full bg-gray-100 py-16">
          <div className="container mx-auto flex justify-between flex-wrap items-center">
            {["walmart", "target", "heb", "kroger"].map((partner) => (
              <div
                key={partner}
                className="relative w-1/2 md:w-64 h-20 grayscale hover:grayscale-0 transform duration-500"
              >
                <Image
                  alt={partner}
                  src={`/images/partners/${partner}.png`}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        </section> */}
        <section className="w-full bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* المحتوى النصي */}
        <div className="flex-1 text-center md:text-right">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            من نحن؟ - منصة صرد التسويقية
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            🌟 <strong>شريكك للنمو والتوسع في السوق السعودي</strong>
          </p>
          <p className="text-gray-700 mb-6">
            منصة صرد هي منصة تسويقية إلكترونية تم تصميمها خصيصًا لدعم المنشآت
            التجارية السعودية، وتعزيز حصتها السوقية داخل المملكة.
            <br />
            نهدف إلى تمكين المنشآت من الوصول إلى عملائها بشكل أوسع وأسرع عبر
            وسائلنا المتطورة للتسويق الإلكتروني.
          </p>

          <h3 className="text-2xl font-bold mb-4">ماذا نقدم؟</h3>
          <ul className="list-none space-y-4 text-gray-700">
            <li>
              🛒 <strong>نشر منتجاتك وخدماتك:</strong> نعرض بيانات المنشأة
              التجارية ومنتجاتها بشكل مميز ومتكرر عبر منصتنا.
            </li>
            <li>
              📲 <strong>التسويق الإلكتروني الذكي:</strong> نسوّق خدماتك
              ومنتجاتك عبر تطبيقاتنا، وسائل التواصل الاجتماعي، والمنصات
              الإعلامية.
            </li>
            <li>
              🎯 <strong>زيادة الحصة السوقية:</strong> نعمل على تعزيز وجودك في
              السوق المحلي وتوسيع قاعدة عملائك.
            </li>
          </ul>
          <p className="text-gray-800 font-medium mt-6">
            مع منصة صرد، منتجاتك وخدماتك ستصل إلى العملاء بكل سهولة، مع
            التركيز على التميز والجودة.
          </p>
        </div>

        {/* الصورة */}
        <div className="flex-1 flex justify-center">
        <Image
                  alt="SARD Home Screen"
                  src="/phone-home.webp"
                  width={211}
                  height={563}
                  loading="lazy"
                  className="transform duration-500 hover:-translate-y-4 hover:scale-110"
                />
        </div>
      </div>
    </section>
        {/* Features Section */}

        <section className="w-full py-20">
          <h3 className="text-center font-bold text-3xl md:text-5xl mb-8">
            ماذا يميزنا؟
          </h3>
          <div className="container m-auto flex flex-wrap gap-16 justify-center items-center py-16">
            {/* موثوقية تامة */}
            <div className="flex flex-col items-center text-center gap-4 max-w-lg">
              <span className="text-4xl">  <Image
                alt="SARD Google Play"
                draggable="false"
                width={180}
                height={52}
                className="transform duration-500 hover:scale-[1.1] hover:z-[2]"
                src={"/verified.gif"} />
              </span>
              <h5 className="text-3xl font-bold">موثوقية تامة</h5>
              <p>
                نساعدك في العثور على أشخاص موثوق بهم وذوي خبرة لإنجاز أعمال
                الصيانة بمنتهى الكفاءة.
              </p>
            </div>

            {/* تقييم شفاف */}
            <div className="flex flex-col items-center text-center gap-4 max-w-lg">
              <span className="text-4xl">  <Image
                alt="SARD Google Play"
                draggable="false"
                width={180}
                height={52}
                className="transform duration-500 hover:scale-[1.1] hover:z-[2]"
                src={"/rate.gif"} /></span>
              <h5 className="text-3xl font-bold">تقييم شفاف</h5>
              <p>
                نظام تقييم مزدوج:
                <br />
                <strong>تقييم العميل</strong> بعد تنفيذ الخدمة يضمن تحسين التجربة
                باستمرار.
                <br />
                <strong>تقييم العامل</strong> يساعد في بناء الثقة وتحسين الأداء.
              </p>
            </div>

            {/* فرصة للجميع */}
            <div className="flex flex-col items-center text-center gap-4 max-w-lg">
              <span className="text-4xl">  <Image
                alt="SARD Google Play"
                draggable="false"
                width={180}
                height={52}
                className="transform duration-500 hover:scale-[1.1] hover:z-[2]"
                src={"/repair-tools.gif"} /></span>
              <h5 className="text-3xl font-bold">فرصة للجميع</h5>
              <p>
                أي شخص لديه المهارات اللازمة يمكنه الانضمام إلى تطبيقنا كعامل
                صيانة، بشرط الالتزام بمعايير الجودة.
              </p>
            </div>

            {/* سرعة التنفيذ */}
            <div className="flex flex-col items-center text-center gap-4 max-w-lg">
              <span className="text-4xl"> <Image
                alt="SARD Google Play"
                draggable="false"
                width={180}
                height={52}
                className="transform duration-500 hover:scale-[1.1] hover:z-[2]"
                src={"/stopwatch.gif"} /></span>
              <h5 className="text-3xl font-bold">سرعة التنفيذ</h5>
              <p>
                سواء كنت تحتاج إلى إصلاح عاجل أو أعمال صيانة دورية، فريقنا يلتزم
                بتنفيذ الأعمال في الوقت المحدد.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full bg-primary-light-gradient">
          <div className="container pt-24 mx-auto h-auto grid grid-cols-12 gap-4 items-center">
            {/* Text Content */}
            <div className="col-span-12 sm:col-span-6 pb-24">
              <h1 className="text-4xl sm:text-5xl font-[900] md:text-6xl mb-4 md:mb-8 leading-[40px] sm:leading-[50px] md:leading-[70px]">
                استثمر وقتك وابدأ مع صرد!
              </h1>
              <p className="text-primary-light font-[600] mb-4 md:mb-8">
                صرد هى وجهة النجاح في عملك. كن شريكنا الآن.
              </p>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=net.taza"
                rel="noopener noreferrer"
              >
                <Image
                  alt="SARD Google Play"
                  draggable="false"
                  width={180}
                  height={52}
                  className="transform duration-500 hover:scale-[1.1] hover:z-[2]"
                  src={"/button-googleplay.webp"}
                />
              </a>
            </div>

            {/* Image Content */}
            <div className="sm:col-span-6 col-span-12 relative h-full items-center flex">
              <div className="w-full h-full flex justify-end">
                <Image
                  alt="SARD Home Screen"
                  draggable="false"
                  width={340}
                  height={454}
                  className="z-1 bottom-0"
                  src={"/phone-cut.webp"}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-12 bg-[#150a34] text-[#eee]">
        <div className="container m-auto flex gap-4 justify-between w-full flex-wrap items-center flex-col md:flex-row">
          <div>
            <Image
              alt="SARD app"
              loading="lazy"
              width="100"
              height="60"
              decoding="async"
              data-nimg="1"
              src="/icon5.png"
            />
          </div>
          <div>© 2024, SARD Global LLC.</div>
          <nav>
            <ul className="flex gap-6 font-bold">
              <li>
                <a href="/en/privacy">سياسة الخصوصية </a>
              </li>
            </ul>
          </nav>
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=net.taza"
          >
            <Image
              alt="SARD Google Play"
              draggable="false"
              loading="lazy"
              width="180"
              height="52"
              decoding="async"
              data-nimg="1"
              className="transform duration-500 hover:scale-[1.1] hover:z-[2]"
              src="/button-googleplay.webp"
            />
          </a>
        </div>
      </footer>
    </>
  );
}
