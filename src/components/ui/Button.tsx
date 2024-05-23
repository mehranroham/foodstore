interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Button = ({ children, className: classname }: Props) => {
  let classes = 'rounded-lg font-Morabba-Medium ';

  if (classname) {
    classes += classname;
  } else {
    classes += 'bg-init-2 text-stone-200 text-base px-3 py-1.5';
  }

  return <button className={classes}>{children}</button>;
};

export default Button;
