import { useSelector } from 'react-redux';
import Food from '../components/Food';
import { Outlet } from 'react-router-dom';

const Shop = () => {
  const FOODS = useSelector((state) => {
    return state.shop.foods;
  });

  return (
    <>
      <ul className='grid grid-cols-4 gap-x-5 gap-y-7'>
        {FOODS.map((food) => {
          return <Food key={food.id} food={food} />;
        })}
      </ul>
      <Outlet />
    </>
  );
};

export default Shop;
