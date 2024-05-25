import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/ui/Button';
import { shopActions } from '../store/shop';
import { priceFormatter } from '../utils/priceformatter';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { motion } from 'framer-motion';
import { RootState } from '../store';

const Checkout = () => {
  const { user } = useKindeAuth();

  const dispatch = useDispatch();

  const orders = useSelector((state: RootState) => {
    return state.shop.orders;
  });

  const addHandler = (id: number) => {
    dispatch(shopActions.addToCart(id));
  };

  const removeHandler = (id: number) => {
    dispatch(shopActions.removeFromCart(id));
  };

  let totalPrice = 0;

  if (orders.length) {
    totalPrice = orders.reduce((prev, curr) => {
      return prev + curr.price! * curr.quantity!;
    }, 0);
  }

  const submitHandler = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <form onSubmit={submitHandler} className='flex flex-col gap-6 lg:pl-10'>
        <h2 className='text-xl font-Morabba-Bold border-b-2 pb-2'>
          مشخصات فردی
        </h2>
        <div className='w-full flex gap-4'>
          <motion.input
            whileHover={{ scale: 1.05 }}
            required
            placeholder='نام'
            defaultValue={user?.given_name ?? ''}
            className='outline-none py-1.5 px-2 rounded-md text-stone-900 placeholder:text-slate-300 w-full'
            type='text'
            name='name'
          />
          <motion.input
            whileHover={{ scale: 1.05 }}
            required
            placeholder='نام خانوادگی'
            defaultValue={user?.family_name ?? ''}
            className='outline-none py-1.5 px-2 rounded-md text-stone-900 placeholder:text-slate-300 w-full'
            type='text'
            name='family'
          />
        </div>

        <div className='w-full flex gap-4'>
          <motion.input
            whileHover={{ scale: 1.05 }}
            required
            placeholder='ایمیل'
            defaultValue={user?.email ?? ''}
            className='outline-none py-1.5 px-2 rounded-md text-stone-900 placeholder:text-slate-300 w-full'
            type='email'
            name='email'
          />
          <motion.input
            whileHover={{ scale: 1.05 }}
            required
            placeholder='کد پستی'
            className='outline-none py-1.5 px-2 rounded-md text-stone-900 placeholder:text-slate-300 w-full lg:w-auto'
            type='text'
            name='postal'
          />
        </div>
        <motion.textarea
          whileHover={{ scale: 1.05 }}
          className='outline-none py-1.5 px-2 rounded-md text-stone-900 placeholder:text-slate-300'
          placeholder='آدرس'
          name='address'
          id='address'
        ></motion.textarea>
        <div className='flex gap-8 items-center'>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className='flex items-center gap-2'
          >
            <label htmlFor='place'>پرداخت در محل</label>
            <input
              required
              className='mt-1.5 scale-125'
              type='radio'
              name='buy'
              id='place'
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className='flex items-center gap-2'
          >
            <label htmlFor='online'>پرداخت اینترنتی</label>
            <input
              required
              className=' mt-1.5 scale-125'
              type='radio'
              name='buy'
              id='online'
            />
          </motion.div>
        </div>
        <p>درگاه اینترنتی</p>
        <div className='flex items-center gap-7'>
          <motion.img
            whileHover={{ scale: 1.2 }}
            src='/bank/AsanPardakht.png'
            className='sm:w-20 sm:h-20 w-16 h-16 rounded-full object-contain border-2 border-init-4 p-1 cursor-pointer'
            alt='AsanPardakht'
          />
          <motion.img
            whileHover={{ scale: 1.2 }}
            src='/bank/melat.png'
            className='sm:w-20 sm:h-20 w-16 h-16 rounded-full object-contain border-2 border-init-4 p-1 cursor-pointer'
            alt='AsanPardakht'
          />
          <motion.img
            whileHover={{ scale: 1.2 }}
            src='/bank/parsian.svg'
            className='sm:w-20 sm:h-20 w-16 h-16 rounded-full object-contain border-2 border-init-4 p-1 cursor-pointer'
            alt='AsanPardakht'
          />
        </div>
        <Button>ورود به صفحه پرداخت</Button>
      </form>

      {/* col 2 */}
      <div>
        <h2 className='text-xl font-Morabba-Bold border-b-2 pb-2 lg:mt-0 mt-16'>
          محصولات انتخابی
        </h2>
        <motion.ul
          layout
          dir='ltr'
          className='flex flex-col gap-3 font-Poppins-Medium items-center mt-8'
        >
          {orders.map((order, index) => {
            return (
              <li
                className='flex gap-2 flex-wrap items-center text-lg'
                key={order.id}
              >
                <p className='w-[10px]'>{index + 1}:</p>
                <img
                  src={order.src}
                  className='lg:w-24 lg:h-24 w-20 h-20 rounded-xl'
                  alt='food'
                />
                <p className='w-[190px] text-center'>{order.name}</p>
                <p className='font-Dana-Medium w-[100px] text-center'>
                  {new Intl.NumberFormat('fa', {
                    currency: 'IRR',
                    style: 'currency',
                  }).format(order.price!)}
                </p>

                <div
                  dir='rtl'
                  className='pl-10 flex items-center gap-3 justify-center'
                >
                  <Button
                    onClick={() => addHandler(order.id!)}
                    className='bg-init-2 text-stone-200 px-2.5 py-0.5'
                  >
                    +
                  </Button>
                  <p className='w-[10px] text-center'>{order.quantity}</p>
                  <Button
                    onClick={() => removeHandler(order.id!)}
                    className='bg-init-2 text-stone-200 px-2.5 py-0.5'
                  >
                    -
                  </Button>
                </div>
              </li>
            );
          })}
        </motion.ul>
        <p
          dir='rtl'
          className='font-Morabba-Medium border-t-2 mt-8 border-stone-200 pt-4 text-lg'
        >
          مجموع خرید: {priceFormatter(totalPrice)}
        </p>
      </div>
    </div>
  );
};

export default Checkout;
