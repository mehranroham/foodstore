import { useDispatch } from 'react-redux';
import Button from '../components/ui/Button';
import { recipeActions } from '../store/recipes';
import { useNavigate } from 'react-router-dom';

const NewRecipe = () => {
  const navigate = useNavigate();

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
    <div>
      <form className='flex flex-col gap-7' onSubmit={submitHandler}>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name'>نام غذا</label>
          <input
            className='outline-none p-2 text-stone-900 rounded-md'
            type='text'
            id='name'
            name='name'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='recipe'>دستور پخت</label>
          <textarea
            className='outline-none p-2 text-stone-900 rounded-md h-[300px]'
            name='recipe'
            id='recipe'
          ></textarea>
        </div>
        <Button>افزودن</Button>
      </form>
    </div>
  );
};

export default NewRecipe;
