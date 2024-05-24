import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/ui/Button';
import { shopActions } from '../store/shop';
import { priceFormatter } from '../utils/priceformatter';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { motion } from 'framer-motion';

const Checkout = () => {
  const { user } = useKindeAuth();

  const dispatch = useDispatch();

  const orders = useSelector((state) => {
    return state.shop.orders;
  });

  const addHandler = (order) => {
    dispatch(shopActions.addToCart(order));
  };

  const removeHandler = (id) => {
    dispatch(shopActions.removeFromCart(id));
  };

  let totalPrice = 0;

  if (orders.length) {
    totalPrice = orders.reduce((prev, curr) => {
      return prev + curr.price * curr.quantity;
    }, 0);
  }

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <form onSubmit={submitHandler} className='flex flex-col gap-6 lg:pl-10'>
        <h2 className='text-xl font-Morabba-Bold border-b-2 pb-2'>
          مشخصات فردی
        </h2>
        <div className='w-full flex gap-4'>
          <input
            required
            placeholder='نام'
            defaultValue={user?.given_name ?? ''}
            className='py-1.5 px-2 rounded-md text-stone-900 placeholder:text-slate-300 w-full'
            type='text'
            name='name'
          />
          <input
            required
            placeholder='نام خانوادگی'
            defaultValue={user?.family_name ?? ''}
            className='py-1.5 px-2 rounded-md text-stone-900 placeholder:text-slate-300 w-full'
            type='text'
            name='family'
          />
        </div>

        <div className='w-full flex gap-4'>
          <input
            required
            placeholder='ایمیل'
            defaultValue={user?.email ?? ''}
            className='py-1.5 px-2 rounded-md text-stone-900 placeholder:text-slate-300 w-full'
            type='email'
            name='email'
          />
          <input
            required
            placeholder='کد پستی'
            className='py-1.5 px-2 rounded-md text-stone-900 placeholder:text-slate-300 w-full lg:w-auto'
            type='text'
            name='postal'
          />
        </div>
        <textarea
          className='py-1.5 px-2 rounded-md text-stone-900 placeholder:text-slate-300'
          placeholder='آدرس'
          name='address'
          id='address'
        ></textarea>
        <div className='flex gap-8 items-center'>
          <div className='flex items-center gap-2'>
            <label htmlFor='place'>پرداخت در محل</label>
            <input
              required
              className='scale-150 mt-1.5'
              type='radio'
              name='buy'
              id='place'
            />
          </div>
          <div className='flex items-center gap-2'>
            <label htmlFor='online'>پرداخت اینترنتی</label>
            <input
              required
              className='scale-150 mt-1.5'
              type='radio'
              name='buy'
              id='online'
            />
          </div>
        </div>
        <p>درگاه اینترنتی</p>
        <div className='flex items-center gap-7'>
          <img
            src='/bank/AsanPardakht.png'
            className='sm:w-20 sm:h-20 w-16 h-16 rounded-full object-contain border-2 border-init-4 p-1 cursor-pointer'
            alt='AsanPardakht'
          />
          <img
            src='/bank/melat.png'
            className='sm:w-20 sm:h-20 w-16 h-16 rounded-full object-contain border-2 border-init-4 p-1 cursor-pointer'
            alt='AsanPardakht'
          />
          <img
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
                  }).format(order.price)}
                </p>

                <div
                  dir='rtl'
                  className='pl-10 flex items-center gap-3 justify-center'
                >
                  <Button
                    onClick={() => addHandler(order.id)}
                    className='bg-init-2 text-stone-200 px-2.5 py-0.5'
                  >
                    +
                  </Button>
                  <p className='w-[10px] text-center'>{order.quantity}</p>
                  <Button
                    onClick={() => removeHandler(order.id)}
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
