import { CircleUser, LogOutIcon, ShoppingBag } from 'lucide-react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useSelector } from 'react-redux';

const Header = () => {
  const { login, register, logout, user, isLoading, isAuthenticated } =
    useKindeAuth();

  let isAdmin;
  if (!isLoading) {
    isAdmin = import.meta.env.VITE_ADMIN_EMAIL === user?.email;
  }

  const registerHandler = () => {
    register();
  };

  const loginHandler = () => {
    login();
  };

  const count = useSelector((state) => {
    return state.shop.orders;
  });

  let number = 0;

  if (count.length) {
    number = count.reduce((prev, curr) => {
      return prev + curr.quantity;
    }, 0);
  }

  return (
    <nav className='sticky w-full h-[70px] px-16 bg-init-4 text-stone-900 grid grid-cols-3 font-Morabba-Medium text-lg top-0 right-0 shadow-xl z-10'>
      {isLoading && <p className='flex items-center'>در حال بارگذاری...</p>}
      {!isLoading && isAuthenticated && (
        <ul className='flex gap-4 items-center'>
          {isAdmin && (
            <li>
              <Button className='text-lg py-1 px-2 border-2 border-init-1'>
                پنل ادمین
              </Button>
            </li>
          )}
          <li className='cursor-pointer flex items-center gap-2'>
            <LogOutIcon size={30} />
            <button onClick={logout} type='button'>
              خروج
            </button>
          </li>
          <span className='w-px h-8 bg-stone-700'></span>
          <li className='cursor-pointer'>
            <button type='button'>سلام {user?.given_name}</button>
          </li>
        </ul>
      )}

      {!isLoading && !isAuthenticated && (
        <ul className='flex gap-4 items-center'>
          <li className='cursor-pointer'>
            <button onClick={registerHandler} type='button'>
              ثبت نام
            </button>
          </li>
          <span className='w-px h-8 bg-stone-700'></span>
          <li className='cursor-pointer flex items-center gap-2'>
            <CircleUser size={30} />
            <button onClick={loginHandler} type='button'>
              ورود
            </button>
          </li>
        </ul>
      )}

      <ul className='flex gap-4 items-center justify-center *:cursor-pointer'>
        <li>
          <Link to='/'>صفحه اصلی</Link>
        </li>
        <li>
          <Link to='/shop'>فروشگاه</Link>
        </li>
        <li>
          <Link to='/blog'>بلاگ</Link>
        </li>
        <li>
          <Link to='/recipes'>دستور پخت</Link>
        </li>
        <li>
          <Link to='/about'>درباره</Link>
        </li>
        <li>
          <Link to='/contact'>تماس</Link>
        </li>
      </ul>

      <div className='relative flex items-center gap-4 justify-end'>
        {number > 0 && (
          <span className='bg-init-3 pt-0.5 text-stone-200 absolute -left-[19px] top-1.5 rounded-xl w-6 h-6 flex justify-center items-center font-Poppins-Medium text-sm'>
            {number}
          </span>
        )}
        <span className='font-Poppins-Medium text-3xl flex items-center cursor-pointer'>
          FoodStore
        </span>
        <Link to='/shop/cart'>
          <ShoppingBag className='cursor-pointer' size={34} />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
