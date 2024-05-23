import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { shopActions } from '../store/shop';
import { X } from 'lucide-react';

export default function Cart() {
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

  return (
    <Modal>
      {orders.length > 0 && (
        <div className='flex flex-col gap-7'>
          <p dir='rtl' className='text-lg font-Morabba-Medium text-center'>
            سفارشات شما:
          </p>
          <ul dir='ltr' className='flex flex-col gap-2 font-Poppins-Medium'>
            {orders.map((order, index) => {
              return (
                <li
                  className='flex flex-wrap gap-2 items-center text-lg'
                  key={order.id}
                >
                  <p className='w-[10px]'>{index + 1}:</p>
                  <p className='w-[250px]'>{order.name}</p>
                  <p className='font-Dana-Medium w-[100px] text-right'>
                    {order.price}
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
          </ul>
          <div dir='rtl' className='flex gap-5 items-center'>
            <Link to='/shop'>
              <Button>ادامه خرید</Button>
            </Link>
            <Link to='/checkout'>
              <Button>تسویه حساب</Button>
            </Link>
          </div>
        </div>
      )}
      {!orders.length && (
        <div className='flex flex-col gap-5 font-Dana-Medium'>
          <p dir='rtl' className='mt-3'>
            سبد خرید شما خالی است...
          </p>
          <div className='flex gap-5 items-center'>
            <Link to='/'>
              <Button>صفحه اصلی</Button>
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
