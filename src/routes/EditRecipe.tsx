import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { recipeActions } from '../store/recipes';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

const EditRecipe = () => {
  const { isAuthenticated, isLoading, login, register } = useKindeAuth();

  const { recipeId } = useParams();

  const recipes = useSelector((state) => {
    return state.recipe.recipes;
  });

  const selected = recipes.find((item) => {
    return item.id === +recipeId!;
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const data = Object.fromEntries(fd.entries());
    dispatch(recipeActions.editRecipe({ data, id: +recipeId! }));
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
                defaultValue={selected.name}
                type='text'
                id='name'
                name='name'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='recipe'>دستور پخت</label>
              <textarea
                defaultValue={selected.recipe}
                className='outline-none p-2 text-stone-900 rounded-md h-[300px]'
                wrap='true'
                required
                name='recipe'
                id='recipe'
              ></textarea>
            </div>
            <Button>ویرایش</Button>
          </form>
        </div>
      )}
    </>
  );
};

export default EditRecipe;
