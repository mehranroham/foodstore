import { useDispatch } from 'react-redux';
import Button from '../components/ui/Button';
import { recipeActions } from '../store/recipes';
import { useNavigate } from 'react-router-dom';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

const NewRecipe = () => {
  const navigate = useNavigate();

  const { isAuthenticated, isLoading, login, register } = useKindeAuth();

  interface FormElements extends HTMLFormControlsCollection {
    yourInputName: HTMLInputElement;
  }

  interface YourFormElement extends HTMLFormElement {
    readonly elements: FormElements;
  }

  const dispatch = useDispatch();

  const submitHandler = (event: React.FormEvent<YourFormElement>) => {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const data = Object.fromEntries(fd.entries());
    dispatch(recipeActions.addRecepi(data));
    navigate('/recipes');
  };

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
        <div>
          <form className='flex flex-col gap-7' onSubmit={submitHandler}>
            <div className='flex flex-col gap-2'>
              <label htmlFor='name'>نام غذا</label>
              <input
                className='outline-none p-2 text-stone-900 rounded-md'
                required
                type='text'
                id='name'
                name='name'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='recipe'>دستور پخت</label>
              <textarea
                className='outline-none p-2 text-stone-900 rounded-md h-[300px] whitespace-pre-wrap'
                wrap='true'
                required
                name='recipe'
                id='recipe'
              ></textarea>
            </div>
            <Button>افزودن</Button>
          </form>
        </div>
      )}
    </>
  );
};

export default NewRecipe;
