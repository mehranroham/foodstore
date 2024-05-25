import { useDispatch, useSelector } from 'react-redux';
import Food from '../components/Food';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { shopActions } from '../store/shop';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import { RootState } from '../store';

const Shop = () => {
  const dispatch = useDispatch();

  const [filterValues, setFilterValues] = useState({
    searchInput: '',
    category: 'all',
  });

  const filtredData = useSelector((state: RootState) => {
    return state.shop.filtredData;
  });

  const inputFilterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValues((prev) => {
      return { ...prev, searchInput: event.target.value };
    });
  };

  const categoryHandler = (category: string) => {
    setFilterValues((prev) => {
      return { ...prev, category };
    });
  };

  const clickHandler = () => {
    dispatch(shopActions.filterHandler(filterValues));
  };

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex sm:flex-row flex-col gap-7 items-stretch'>
        <motion.input
          whileHover={{ scale: 1.05 }}
          placeholder='search'
          id='searchInput'
          onChange={inputFilterHandler}
          className='placeholder:font-Poppins-Medium font-Poppins-Medium px-2 py-2 rounded-md sm:w-[30%] w-[80%] text-slate-900 outline-none'
          type='text'
        />

        <div className='flex items-center gap-3'>
          <motion.span
            whileHover={{ scale: 1.1 }}
            onClick={() => categoryHandler('all')}
            className={` px-3 py-2 rounded-md  font-Poppins-Medium cursor-pointer 
          ${
            filterValues.category === 'all'
              ? 'text-init-1 bg-init-4'
              : 'text-slate-900 bg-stone-200'
          }`}
          >
            ALL
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            onClick={() => categoryHandler('desert')}
            className={` px-3 py-2 rounded-md  font-Poppins-Medium cursor-pointer 
          ${
            filterValues.category === 'desert'
              ? 'text-init-1 bg-init-4'
              : 'text-slate-900 bg-stone-200'
          }`}
          >
            DESERT
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            onClick={() => categoryHandler('food')}
            className={` px-3 py-2 rounded-md  font-Poppins-Medium cursor-pointer 
          ${
            filterValues.category === 'food'
              ? 'text-init-1 bg-init-4'
              : 'text-slate-900 bg-stone-200'
          }`}
          >
            FOOD
          </motion.span>
        </div>
      </div>

      <Button onClick={clickHandler}>جستجو</Button>
      <ul className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-7'>
        {filtredData.map((food) => {
          return <Food key={food.id} food={food} />;
        })}
      </ul>

      <Outlet />
    </div>
  );
};

export default Shop;
