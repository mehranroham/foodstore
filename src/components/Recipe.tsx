import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// state type
import { combineReducers } from '@reduxjs/toolkit';
const rootReducer = combineReducers({});
export type IRootState = ReturnType<typeof rootReducer>;

const Recipe = () => {
  const { recipeId } = useParams();

  const recipes = useSelector((state: IRootState) => {
    return state.recipe.recipes;
  });

  const selected = recipes.find((item) => {
    return item.id === +recipeId!;
  });

  return (
    <div className='flex flex-col gap-8'>
      <p className='text-2xl font-Morabba-Bold bg-init-4 py-1.5 px-4 text-stone-900 rounded-xl'>
        {selected.name}
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
