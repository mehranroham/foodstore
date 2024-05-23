import { MouseEventHandler } from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({ children, className: classname, onClick }: Props) => {
  let classes = 'rounded-lg font-Morabba-Medium z-10 ';

  if (classname) {
    classes += classname;
  } else {
    classes += 'bg-init-2 text-stone-200 text-base px-3 py-1.5';
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
