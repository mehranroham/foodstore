import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { shopActions } from '../store/shop';
import { X } from 'lucide-react';
import { priceFormatter } from '../utils/priceformatter';
import { RootState } from '../store';

export default function Cart() {
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

  return (
    <Modal free>
      {orders.length > 0 && (
        <div className='flex flex-col gap-7'>
          <p className='text-lg font-Morabba-Medium text-center'>
            Your Orders:
          </p>
          <ul className='flex flex-col gap-2 font-Poppins-Medium'>
            {orders.map((order, index) => {
              return (
                <li
                  className='flex flex-wrap gap-2 items-center text-lg'
                  key={index}
                >
                  <p className='w-[10px]'>{index + 1}:</p>
                  <p className='w-[250px]'>{order.name}</p>
                  <p className='font-Dana-Medium w-[100px] text-right'>
                    {priceFormatter(order.price!)}
                  </p>

                  <div className='pl-10 flex items-center gap-3 justify-center'>
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
          </ul>
          <p
            dir='rtl'
            className='font-Morabba-Medium border-t border-black pt-2 text-lg'
          >
            مجموع: {priceFormatter(totalPrice)}
          </p>
          <div className='flex gap-5 items-center'>
            <Link to='/shop'>
              <Button>ادامه خرید</Button>
            </Link>
            <Link to='/checkout'>
              <Button>صفحه پرداخت</Button>
            </Link>
          </div>
        </div>
      )}
      {!orders.length && (
        <div className='flex flex-col gap-5 font-Dana-Medium'>
          <p dir='rtl'>سبد خرید خالی است...</p>
          <div className='flex gap-5 items-center'>
            <Link to='/'>
              <Button>خانه</Button>
            </Link>
            <Link to='/shop'>
              <Button>فروشگاه</Button>
            </Link>
          </div>
        </div>
      )}

      <Link
        to='/shop'
        className='absolute text-slate-950 top-2 right-2 rotate-45 cursor-pointer'
      >
        <X className='rotate-45' size={30} />
      </Link>
    </Modal>
  );
}
