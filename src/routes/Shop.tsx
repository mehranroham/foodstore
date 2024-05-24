import { useDispatch, useSelector } from 'react-redux';
import Food from '../components/Food';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { shopActions } from '../store/shop';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';

const Shop = () => {
  const diapatch = useDispatch();

  const [filterValues, setFilterValues] = useState({
    searchInput: '',
    category: 'all',
  });

  const filtredData = useSelector((state) => {
    return state.shop.filtredData;
  });

  const inputfilterHandler = (event) => {
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
    diapatch(shopActions.filterHandler(filterValues));
  };

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex gap-7 items-stretch'>
        <motion.input
          whileHover={{ scale: 1.05 }}
          placeholder='search'
          id='searchInput'
          onChange={inputfilterHandler}
          className='placeholder:font-Poppins-Medium font-Poppins-Medium px-2 py-1.5 rounded-md w-[30%] text-slate-900 outline-none'
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
      <ul className='grid grid-cols-4 gap-x-5 gap-y-7'>
        {filtredData.map((food) => {
          return <Food key={food.id} food={food} />;
        })}
      </ul>

      <Outlet />
    </div>
  );
};

export default Shop;
