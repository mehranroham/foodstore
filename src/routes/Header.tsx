import { CircleUser, LogOutIcon, ShoppingBag } from 'lucide-react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '../components/ui/Button';

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

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      localStorage.removeItem('kinde_refresh_token');
      logout();
    }
  }, [isAuthenticated]);

  // if (!isLoading) {
  //   let t;
  //   const get = async () => {
  //     t = await getToken();
  //     console.log(t);
  //   };
  //   get();

  //   setTimeout(() => {
  //     get();
  //   }, 70000);
  // }

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

      <div className='flex items-center gap-4 justify-end'>
        <span className='font-Poppins-Medium text-3xl flex items-center cursor-pointer'>
          FoodStore
        </span>
        <ShoppingBag className='cursor-pointer' size={34} />
      </div>
    </nav>
  );
};

export default Header;
