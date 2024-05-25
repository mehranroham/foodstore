import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

// state type
import { combineReducers } from '@reduxjs/toolkit';
import Button from '../components/ui/Button';
const rootReducer = combineReducers({});
export type IRootState = ReturnType<typeof rootReducer>;

const Recipe = () => {
  const { recipeId } = useParams();

  const recipes = useSelector((state: IRootState) => {
    return state.recipe.recipes;
  });

  const selected = recipes.find((item: { id: number }) => {
    return item.id === +recipeId!;
  });

  return (
    <div className='flex flex-col gap-8'>
      <p className='text-2xl font-Morabba-Bold bg-init-4 py-2 px-5 text-stone-900 rounded-lg flex justify-between items-center'>
        <span> {selected.name}</span>
        <Link to={`/recipes/edit/${selected.id}`}>
          <Button>ویرایش</Button>
        </Link>
      </p>
      <img
        className='w-[400px] h-[300px] object-cover rounded-xl mx-auto'
        src='/logo.jpg'
        alt='food'
      />
      <p>{selected.recipe}</p>
    </div>
  );
};

export default Recipe;
