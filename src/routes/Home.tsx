import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Accordion from '../components/Accordion';

const Home = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  if (isInView) {
    console.log('yes');
  }

  return (
    <div className='w-full'>
      <div className='absolute top-[70px] inset-x-0 w-full h-[calc(100vh_-_70px)] bg-gradient-to-br from-purple-500 to-purple-950 flex flex-col gap-24 items-center justify-center font-Morabba-Bold text-stone-900'>
        <motion.h1
          whileHover={{ scale: 1.2, color: 'rgb(255, 255, 255)' }}
          transition={{ duration: 2 }}
          className='text-5xl cursor-pointer'
        >
          بهترین رستوران{' '}
          <span className='bg-yellow-500  px-2 py-1 rounded-xl'>ایرانی</span> در
          دنیا
        </motion.h1>
        <p className='text-2xl text-stone-200'>
          بهترین مزه ای که تجربه می کنید...
        </p>
        <div className='text-lg text-stone-200 flex gap-10'>
          <p>آدرس: تجریش، ضلع شمال شرقی، پلاک 115</p>
          <p>تلفن: 22739844-021</p>
        </div>
      </div>
      <div ref={containerRef} className='mt-[calc(100vh_-_70px)]'>
        <h2 className='font-Morabba-Bold text-xl border-b-2 pb-2 mb-10'>
          سوالات متداول
        </h2>
        <ul className='flex flex-col gap-5'>
          <Accordion
            title='پیک هم دارید برای تحویل غذا'
            description='بله پیک ویژه به صورت رایگان آماده خدمت رسانی به شما می باشد'
          />
          <Accordion
            title='چقدر طول میکشه تا غذا به دستمون برسه'
            description='در کمتر از 30 دقیقه غذا به دستتون میرسه'
          />
          <Accordion
            title='فود استوری چجوری به وجود اومده'
            description='فود استور یکی از آن رستوران‌هاییست که در ساختن کمپین‌های تبلیغاتی از همه چیز خود مایه می‌گذارد و هنگامی که علناً تصمیم به رقابت با یک رستوران دیگر می‌گیرد هیچ چیز جلودارش نیست. به همین دلیل زمانی که آنها تصمیم به رقابت با رستوران ساب‌وی گرفتند، مانند ساب‌وی یک ساندویچ فر پز به منوی خود اضافه کردند. امّا این همه ماجرا نیست. فود استور برای بالا بردن فروش خود و سروصدا کردن در بازار فست فود اعلام کرد که به هرکسی که نامش جرد باشد یک ساندویچ فر پز مجانی می‌دهد.'
          />
          <Accordion
            title='آدرستون کجاست'
            description='آدرس: تجریش، ضلع شمال شرقی، پلاک 115

            تلفن: 22739844-021'
          />
          <Accordion
            title='غذای ایرانی دارید یا فست فود؟'
            description='انواع متنوعی از غذا ها در فود استور تهیه میشه که این دو هم شامل میشن'
          />
          <Accordion
            title='از کجا میشه به شما اعتماد کرد'
            description='با بیش از 20 سال سابقه میتونید نظرات مختلف مردم درباره فود استور رو در برنامه هایی نظیر اسنپ فود مطالعه کنید'
          />
        </ul>
      </div>
    </div>
  );
};

export default Home;
