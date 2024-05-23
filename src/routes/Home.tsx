const Home = () => {
  return (
    <div className='w-full'>
      <div className='absolute top-[70px] inset-x-0 w-full h-[calc(100vh_-_70px)] bg-gradient-to-br from-purple-500 to-purple-950 flex flex-col gap-24 items-center justify-center font-Morabba-Bold text-stone-900'>
        <h1 className='text-5xl'>
          بهترین رستوران{' '}
          <span className='bg-yellow-500 px-2 py-1 rounded-xl'>ایرانی</span> در
          دنیا
        </h1>
        <p className='text-2xl text-stone-200'>
          بهترین مزه ای که تجربه می کنید...
        </p>
        <div className='text-lg text-stone-200 flex gap-10'>
          <p>آدرس: تجریش، ضلع شمال شرقی، پلاک 115</p>
          <p>تلفن: 22739844-021</p>
        </div>
      </div>
      <div className='mt-[calc(100vh_-_70px)]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor unde
        laboriosam quis laudantium quas quidem, dolores amet numquam voluptates
        vel. Laborum praesentium mollitia possimus eum quia quidem, numquam quos
        est minima labore enim deleniti dolores natus earum, architecto tempora
        ipsa ut exercitationem facere illum dolorum? Quisquam voluptate, ipsam
        labore repellat architecto, at veritatis tempora libero, perferendis
        delectus laboriosam? Maiores explicabo unde laborum iste molestiae harum
        dolorem totam voluptas mollitia ab, velit doloremque sequi pariatur quae
        quidem quos modi eos labore enim incidunt debitis sed. Esse fugit
        suscipit consectetur, vitae a hic eos voluptatem obcaecati, iusto
        facere, maiores harum excepturi accusantium.
      </div>
    </div>
  );
};

export default Home;
