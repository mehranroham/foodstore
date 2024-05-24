export default function Contact() {
  return (
    <div className='grid grid-cols-2 py-3'>
      <div className='flex flex-col gap-12 justify-center leading-7 lg:col-span-1 col-span-2'>
        <ul className='flex flex-col gap-4 items-center overflow-auto'>
          <li className='flex justify-between font-Morabba-Bold'>
            <div className='w-[155px] text-center'>روز</div>
            <div className='w-[155px] text-center'>صبحانه</div>
            <div className='w-[155px] text-center'>ناهار</div>
            <div className='w-[155px] text-center'>شام</div>
          </li>
          <span className='w-full h-[1px] bg-stone-200 rounded-lg mb-2'></span>
          <li className='flex justify-between'>
            <div className='w-[155px] text-center'>شنبه</div>
            <div className='w-[155px] text-center'>-</div>
            <div className='w-[155px] text-center'>10:30 تا 17:00</div>
            <div className='w-[155px] text-center'>17:00 تا 00:30</div>
          </li>
          <li className='flex justify-between'>
            <div className='w-[155px] text-center'>یکشنبه</div>
            <div className='w-[155px] text-center'>-</div>
            <div className='w-[155px] text-center'>10:30 تا 17:00</div>
            <div className='w-[155px] text-center'>17:00 تا 00:30</div>
          </li>
          <li className='flex justify-between'>
            <div className='w-[155px] text-center'>دوشنبه</div>
            <div className='w-[155px] text-center'>-</div>
            <div className='w-[155px] text-center'>10:30 تا 17:00</div>
            <div className='w-[155px] text-center'>17:00 تا 00:30</div>
          </li>
          <li className='flex justify-between'>
            <div className='w-[155px] text-center'>سه شنبه</div>
            <div className='w-[155px] text-center'>-</div>
            <div className='w-[155px] text-center'>10:30 تا 17:00</div>
            <div className='w-[155px] text-center'>17:00 تا 00:30</div>
          </li>
          <li className='flex justify-between'>
            <div className='w-[155px] text-center'>چهارشنبه</div>
            <div className='w-[155px] text-center'>-</div>
            <div className='w-[155px] text-center'>10:30 تا 17:00</div>
            <div className='w-[155px] text-center'>17:00 تا 00:30</div>
          </li>
          <li className='flex justify-between'>
            <div className='w-[155px] text-center'>پنج شنبه</div>
            <div className='w-[155px] text-center'>-</div>
            <div className='w-[155px] text-center'>10:30 تا 17:00</div>
            <div className='w-[155px] text-center'>17:00 تا 00:30</div>
          </li>
          <li className='flex justify-between'>
            <div className='w-[155px] text-center text-stone-950'>جمعه</div>
            <div className='w-[155px] text-center'>-</div>
            <div className='w-[155px] text-center text-stone-950'>
              12:30 تا 17:00
            </div>
            <div className='w-[155px] text-center'>17:00 تا 00:30</div>
          </li>
        </ul>
        <div className='text-lg flex flex-col gap-2 justify-start'>
          <p>
            آدرس: تهران، خیابان بازار دوم نازی آباد ( احمد بابایی )، پلاک 226،
            جنب بانک مسکن
          </p>
          <p>تلفن های مجموعه: 02155041783 - 02155061201 - 02155326786</p>
        </div>
      </div>
      <img
        src='/logo.jpg'
        className='md:w-[70%] h-[400px] my-10 object-cover rounded-lg lg:col-span-1 col-span-2 w-[90%] lg:mr-auto mx-auto'
        alt=''
      />
    </div>
  );
}
