import { MouseEventHandler } from 'react';
import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';

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
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: 'rgb(0, 41, 107)' }}
      transition={{ duration: 1 }}
      onClick={onClick}
      className={classes}
    >
      {children}
    </motion.button>
  );
};

export default Button;
