const Footer = () => {
  return (
    <footer className='font-Morabba-Medium'>
      <div className=' grid grid-cols-3 gap-10 bg-init-1 min-h-[345px] pt-9 pb-3 lg:px-20 md:px-10 px-5'>
        <div className='flex flex-col gap-7 xl:col-span-1 col-span-3'>
          <h4 className='text-gray-100 dark:text-gray-200 border-b-2 border-gray-200 text-xl '>
            درباره ما
          </h4>
          <p className='text-gray-300 dark:text-gray-400 leading-7'>
            فود استور یکی از آن رستوران‌هاییست که در ساختن کمپین‌های تبلیغاتی از
            همه چیز خود مایه می‌گذارد و هنگامی که علناً تصمیم به رقابت با یک
            رستوران دیگر می‌گیرد هیچ چیز جلودارش نیست. به همین دلیل زمانی که
            آنها تصمیم به رقابت با رستوران ساب‌وی گرفتند، مانند ساب‌وی یک
            ساندویچ فر پز به منوی خود اضافه کردند. امّا این همه ماجرا نیست. فود
            استور برای بالا بردن فروش خود و سروصدا کردن در بازار فست فود اعلام
            کرد که به هرکسی که نامش جرد باشد یک ساندویچ فر پز مجانی می‌دهد.
          </p>
        </div>
        <div className='flex flex-col gap-7 xl:col-span-1 md:col-span-2 col-span-3'>
          <h4 className='text-gray-100 dark:text-gray-200 border-b-2 border-gray-200 text-xl '>
            آکادمی فود استور
          </h4>
          <ul className='grid grid-cols-2 gap-x-5 gap-y-3 text-gray-300 dark:text-gray-400 *:cursor-pointer'>
            <li>درباره فود استور</li>
            <li>تماس با ما</li>
            <li>فود استور ۳۶۰</li>
            <li>افتخارات فود استور</li>
            <li>منوی پیتزا ایتالیایی</li>
            <li>منوی پیتزا آمریکایی</li>
            <li>منوی پیتزا کالزونه</li>
            <li>منوی ساندویچ</li>
            <li>دستور پخت</li>
            <li>آشنایی با مجموعه</li>
            <li>مقاله‌های فود استور</li>
            <li>قوانین و مقررات</li>
          </ul>
        </div>
        <div className='flex flex-col justify-center gap-8 items-center md:col-span-1 col-span-3'>
          <img
            className='object-cover h-[170px] rounded-lg'
            src='../../public/logo.jpg'
            alt='logo'
          />
        </div>
        <p className='col-span-3 text-center border-t-2 pt-4 border-gray-200 text-gray-200 dark:text-gray-300'>
          ساخته شده با ❤️ توسط مهران رهام
        </p>
      </div>
    </footer>
  );
};

export default Footer;
