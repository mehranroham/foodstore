import { Link } from 'react-router-dom';
import Recipes from '../models/RecipesModel';

const Recipe = ({ id, name, recipe }: Recipes) => {
  return (
    <li>
      <Link className='flex flex-col gap-4' to={`recipes/${id}`}>
        <p className='font-Morabba-Bold text-xl'>{name}</p>
        <p>{recipe}</p>
      </Link>
    </li>
  );
};

export default Recipe;
