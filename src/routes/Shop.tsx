import Food from '../components/Food';
import { FOODS } from '../data/Foods';

const Shop = () => {
  return (
    <ul className='grid grid-cols-4 gap-x-5 gap-y-7'>
      {FOODS.map((food) => {
        return <Food key={food.id} food={food} />;
      })}
    </ul>
  );
};

export default Shop;
