import { Link } from 'react-router-dom';
import Button from './ui/Button';
import { useDispatch } from 'react-redux';
import { shopActions } from '../store/shop';
import { priceFormatter } from '../utils/priceformatter';
import { motion } from 'framer-motion';

const Food = ({
  food,
}: {
  food: {
    id?: number;
    name?: string;
    src?: string;
    description?: string;
    price?: number;
    quantity?: number;
  };
}) => {
  const name = food.name!.replace('-', ' ').toUpperCase();

  const dispatch = useDispatch();

  const addToCartHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    event.preventDefault();
    dispatch(shopActions.addToCart(id));
  };

  return (
    <motion.li whileHover={{ scale: 1.03 }} transition={{ duration: 0.5 }}>
      <Link
        to={`${food.id}`}
        className='w-full h-auto bg-init-4 rounded-xl overflow-hidden flex flex-col gap-4 items-center text-stone-900 cursor-pointer pb-5'
      >
        <img
          className='w-full h-[70%] object-cover'
          src={food.src}
          alt={food.name}
        />
        <p className='font-Poppins-Medium text-lg'>{name}</p>
        <p className='line-clamp-3 px-3 '>{food.description}</p>
        <p>{priceFormatter(food.price!)}</p>
        <Button onClick={(event) => addToCartHandler(event, food.id!)}>
          افزودن به سبد خرید
        </Button>
      </Link>
    </motion.li>
  );
};

export default Food;
