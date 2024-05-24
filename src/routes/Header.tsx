import {
  CircleUser,
  CookingPot,
  LogOutIcon,
  ShoppingBag,
  ShoppingCart,
} from 'lucide-react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useSelector } from 'react-redux';
import MobileMenu from '../components/MobileMenu';

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
    <nav className='fixed lg:sticky w-full lg:h-[70px] h-[60px] xl:px-16 md:px-10 px-5 bg-init-4 text-stone-900 grid grid-cols-4 font-Morabba-Medium text-lg top-0 right-0 shadow-xl z-20'>
      {isLoading && (
        <p className='lg:flex items-center hidden'>در حال بارگذاری...</p>
      )}
      {!isLoading && isAuthenticated && (
        <ul className='lg:flex hidden gap-4 items-center col-span-2 lg:col-span-1'>
          <li className='cursor-pointer flex items-center gap-2'>
            <LogOutIcon size={30} />
            <button onClick={() => logout()} type='button'>
              خروج
            </button>
          </li>
          <li className='cursor-pointer'>
            <Link
              to='panel'
              className='flex items-center gap-1 font-Poppins-Medium'
            >
              <img
                src={user?.picture}
                alt='profile'
                className='w-10 h-10 rounded-full'
              />
              <p>{user?.given_name}</p>
            </Link>
          </li>
        </ul>
      )}

      {!isLoading && !isAuthenticated && (
        <ul className='lg:flex hidden gap-4 items-center col-span-2 lg:col-span-1'>
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

      <MobileMenu />

      <ul className='hidden lg:flex xl:gap-6 gap-3 col-span-2 items-center justify-center *:cursor-pointer'>
        <li>
          <Link to='/'>صفحه اصلی</Link>
        </li>
        <li>
          <Link className='flex items-center gap-1' to='/shop'>
            <p>فروشگاه</p>
            <ShoppingCart size={27} />
          </Link>
        </li>
        <li>
          <Link className='flex items-center gap-1' to='/recipes'>
            <p>دستور پخت</p>
            <CookingPot className='mb-0.5' size={27} />
          </Link>
        </li>
        <li>
          <Link to='/about'>درباره</Link>
        </li>
        <li>
          <Link to='/contact'>تماس با ما</Link>
        </li>
        {isAdmin && (
          <li>
            <Button className='text-lg py-1 px-2 border-2 border-init-1'>
              پنل ادمین
            </Button>
          </li>
        )}
      </ul>

      <div className='relative flex items-center md:gap-3 gap-2 justify-end col-span-2 lg:col-span-1'>
        {number > 0 && (
          <span className='bg-init-3 pt-0.5 text-stone-200 absolute -left-[19px] top-1.5 rounded-xl w-6 h-6 flex justify-center items-center font-Poppins-Medium text-sm'>
            {number}
          </span>
        )}
        <Link
          to='/'
          className='font-Poppins-Medium md:text-[26px] text-2xl flex items-center cursor-pointer'
        >
          FoodStore
        </Link>
        <Link to='/shop/cart'>
          <ShoppingBag className='cursor-pointer' size={34} />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
