import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import Button from '../components/ui/Button';

const Panel = () => {
  const { user, isAuthenticated, isLoading, login, register } = useKindeAuth();

  return (
    <>
      {!isAuthenticated && !isLoading && (
        <div className='flex flex-col gap-5'>
          <p className='text-xl font-Morabba-Medium'>
            ابتدا ثبت نام کنید یا اگر اکانت دارید وارد شوید...
          </p>
          <div className='flex items-center gap-3'>
            <Button onClick={() => register()}>ثبت نام</Button>
            <Button onClick={() => login()}>ورود</Button>
          </div>
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <div className='flex flex-col gap-16 text-lg'>
          <h2 className='font-Morabba-Bold text-2xl border-b-2 pb-3 text-center'>
            پنل کاربری
          </h2>
          <ul className='flex flex-col gap-7'>
            <li className='flex items-center gap-5 flex-wrap'>
              <p>تصویر پروفایل:</p>
              <img
                src={user?.picture ?? undefined}
                className='rounded-lg'
                alt='profile'
              />
            </li>
            <li className='flex items-center gap-5 flex-wrap'>
              <p>آی دی:</p>
              <p>{user?.id}</p>
            </li>
            <li className='flex items-center gap-5 flex-wrap'>
              <p>ایمیل:</p>
              <p>{user?.email}</p>
            </li>
            <li className='flex items-center gap-5 flex-wrap'>
              <p>نام:</p>
              <p>{user?.given_name}</p>
            </li>
            <li className='flex items-center gap-5 flex-wrap'>
              <p>نام خانوادگی:</p>
              <p>{user?.family_name}</p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Panel;
