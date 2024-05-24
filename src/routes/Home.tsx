import { motion } from 'framer-motion';
import Accordion from '../components/Accordion';

const Home = () => {
  return (
    <div className='w-full'>
      <div
        className='absolute lg:top-[70px] top-[60px] inset-x-0 w-full lg:h-[calc(100vh_-_70px)]
      h-[calc(100vh_-_60px)]  bg-gradient-to-br from-init-3 to-init-1 flex flex-col gap-24 items-center justify-center font-Morabba-Bold text-stone-900 px-5 '
      >
        <motion.h1
          whileHover={{ scale: 1.2, color: 'rgb(255, 255, 255)' }}
          transition={{ duration: 2 }}
          className='text-5xl cursor-pointer text-center leading-[70px]'
        >
          بهترین رستوران{' '}
          <motion.span
            whileHover={{ backgroundColor: '#121210' }}
            transition={{ duration: 2 }}
            className='bg-yellow-500  px-2 py-1 rounded-xl'
          >
            ایرانی
          </motion.span>{' '}
          در دنیا
        </motion.h1>
        <motion.p
          whileInView={{ x: [20, -200, 200, -40, 0], y: [30, -40, 0] }}
          transition={{ duration: 4 }}
          className='text-2xl text-stone-200 md:block hidden'
        >
          بهترین مزه ای که تجربه می کنید...
        </motion.p>
        <motion.p
          whileInView={{ x: [4, -20, 30, -10, 0], y: [30, -40, 0] }}
          transition={{ duration: 4 }}
          className=' sm:text-2xl text-xl text-stone-200 block md:hidden'
        >
          بهترین مزه ای که تجربه می کنید...
        </motion.p>
        <div className='text-lg text-stone-200 flex sm:flex-row flex-col  gap-10'>
          <p>آدرس: تجریش، ضلع شمال شرقی، پلاک 115</p>
          <p>تلفن: 22739844-021</p>
        </div>
      </div>
      <div className='mt-[calc(100vh_-_70px)]'>
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
