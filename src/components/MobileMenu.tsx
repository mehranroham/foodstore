import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import {
  CircleUser,
  CookingPot,
  LogOutIcon,
  Menu,
  ShoppingCart,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import { motion } from 'framer-motion';

const MobileMenu = () => {
  const { login, register, logout, user, isLoading, isAuthenticated } =
    useKindeAuth();

  let isAdmin;
  if (!isLoading) {
    isAdmin = import.meta.env.VITE_ADMIN_EMAIL === user?.email;
  }

  const [showMenu, setShowMenu] = useState(false);

  const mobileClickHandler = () => {
    setShowMenu((prev) => !prev);
  };

  const registerHandler = () => {
    register();
  };

  const loginHandler = () => {
    login();
  };

  return (
    <>
      <button
        onClick={mobileClickHandler}
        className='flex items-center lg:hidden col-span-2'
      >
        <Menu size={40} />
      </button>

      <motion.ul
        className={`${
          showMenu ? 'left-0' : 'left-[-70%]'
        } absolute lg:hidden sm:w-[50%] w-[70%] h-[500px]  top-0 bg-stone-200 z-40 rounded-br-2xl cursor-pointer flex flex-col gap-5 px-3 py-8 text-xl transition-all duration-700`}
      >
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

        {!isLoading && isAuthenticated && (
          <ul className='flex flex-col gap-7 mt-5'>
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

            <li className='cursor-pointer flex items-center gap-2'>
              <LogOutIcon size={30} />
              <button onClick={() => logout()} type='button'>
                خروج
              </button>
            </li>
          </ul>
        )}

        {!isLoading && !isAuthenticated && (
          <ul className='flex gap-3 mt-5 items-center'>
            <li className='cursor-pointer flex items-center gap-2'>
              <CircleUser size={30} />
              <button onClick={loginHandler} type='button'>
                ورود
              </button>
            </li>
            <span className='w-px h-8 bg-stone-700'></span>
            <li className='cursor-pointer'>
              <button onClick={registerHandler} type='button'>
                ثبت نام
              </button>
            </li>
          </ul>
        )}
      </motion.ul>

      {/* backdrop */}
      <div
        onClick={mobileClickHandler}
        className={`${
          showMenu ? undefined : 'hidden'
        } absolute z-30 bg-black/80 inset-0 w-full h-screen`}
      ></div>
    </>
  );
};

export default MobileMenu;
