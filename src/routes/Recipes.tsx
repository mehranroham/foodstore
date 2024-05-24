import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useSelector } from 'react-redux';

// state type
import { combineReducers } from '@reduxjs/toolkit';
const rootReducer = combineReducers({});
export type IRootState = ReturnType<typeof rootReducer>;

const Recipes = () => {
  const recipes = useSelector((state: IRootState) => {
    return state.recipe.recipes;
  });

  return (
    <div className='flex flex-col gap-10'>
      <Button>
        <Link to='new'>افزودن دستور پخت </Link>
      </Button>
      <ul className='flex flex-col gap-10'>
        {recipes.map((item) => {
          return (
            <li key={item.id}>
              <Link className='flex flex-col gap-4' to={`/recipes/${item.id}`}>
                <p className='font-Morabba-Bold text-xl'>{item.name}</p>
                <p className='whitespace-pre-wrap'>{item.recipe}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Recipes;
