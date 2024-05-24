import { useNavigate, useParams } from 'react-router-dom';
import { FOODS } from '../data/Foods';
import Button from '../components/ui/Button';
import { useDispatch } from 'react-redux';
import { shopActions } from '../store/shop';
import { useEffect } from 'react';
import { priceFormatter } from '../utils/priceformatter';

const FoodDetail = () => {
  const { foodId } = useParams();

  const selectedFood = FOODS.find((food) => {
    return food.id === +foodId!;
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedFood) {
      navigate('/shop');
      console.log('ddd');
    }
  }, []);

  const dispatch = useDispatch();

  const addToCartHandler = (event, id) => {
    event.preventDefault();
    dispatch(shopActions.addToCart(id));
  };

  return (
    <>
      {selectedFood && (
        <div className='grid md:grid-cols-2 grid-cols-1'>
          <div className='flex flex-col gap-8  justify-center px-5'>
            <p className='font-Poppins-Medium text-2xl'>
              {selectedFood?.name.replace('-', ' ').toUpperCase()}
            </p>
            <p className='text-lg'>{selectedFood?.description}</p>
            <p className='text-lg text-center'>
              {priceFormatter(selectedFood!.price)}
            </p>
            <Button onClick={(e) => addToCartHandler(e, selectedFood?.id)}>
              افزودن به سبد خرید
            </Button>
          </div>
          <div className='w-full md:h-[500px] h-[350px] px-5 md:mt-0 mt-16'>
            <img
              className='object-cover w-full h-full rounded-xl'
              src={selectedFood?.src}
              alt={selectedFood?.name}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FoodDetail;
