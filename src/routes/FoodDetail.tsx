import { useParams } from 'react-router-dom';
import { FOODS } from '../data/Foods';

const FoodDetail = () => {
  const { foodId } = useParams();

  const selectedFood = FOODS.find((food) => {
    return food.id === +foodId!;
  });

  const price = new Intl.NumberFormat('fa', {
    currency: 'IRR',
    style: 'currency',
  }).format(selectedFood!.price * Math.floor(Math.random() * 10 + 10));

  return (
    <div className='grid grid-cols-2'>
      <div className='flex flex-col gap-8 items-center justify-center px-5'>
        <p className='font-Poppins-Medium text-2xl'>
          {selectedFood?.name.replace('-', ' ').toUpperCase()}
        </p>
        <p className='text-lg'>{selectedFood?.description}</p>
        <p className='text-lg'>{price}</p>
      </div>
      <div className='w-full h-[500px] px-5'>
        <img
          className='object-cover w-full h-full rounded-xl'
          src={selectedFood?.src}
          alt={selectedFood?.name}
        />
      </div>
    </div>
  );
};

export default FoodDetail;
