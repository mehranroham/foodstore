import Recipe from '../components/Recipe';
import recipes from '../data/Recipes';

const Recipes = () => {
  return (
    <ul className='flex flex-col gap-10'>
      {recipes.map((recipe) => {
        return <Recipe key={recipe.id} {...recipe} />;
      })}
    </ul>
  );
};

export default Recipes;
