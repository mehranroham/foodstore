interface Props {
  children?: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className='w-full h-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12'>
      {children}
    </div>
  );
};

export default Container;
