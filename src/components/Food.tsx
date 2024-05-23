import { Link } from 'react-router-dom';
import Button from './ui/Button';

const Food = ({
  food,
}: {
  food: {
    id: number;
    name: string;
    src: string;
    description: string;
    price: number;
    quantity: number;
  };
}) => {
  const name = food.name.replace('-', ' ').toUpperCase();
  const price = new Intl.NumberFormat('fa', {
    currency: 'IRR',
    style: 'currency',
  }).format(food.price * Math.floor(Math.random() * 10 + 10));

  return (
    <li>
      <Link
        to={`${food.id}`}
        className='w-full h-auto bg-init-4 rounded-xl overflow-hidden flex flex-col gap-4 items-center text-stone-900 cursor-pointer pb-5'
      >
        <img className='w-full h-[70%] object-cover' src={food.src} />
        <p className='font-Poppins-Medium text-lg'>{name}</p>
        <p className='line-clamp-3 px-3 '>{food.description}</p>
        <p>{price}</p>
        <Button>افزودن به سبد خرید</Button>
      </Link>
    </li>
  );
};

export default Food;
