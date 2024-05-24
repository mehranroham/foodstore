import { useState } from 'react';
import { motion } from 'framer-motion';
import { SquareChevronDown } from 'lucide-react';

const Accordion = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [show, setShow] = useState(false);

  return (
    <li className='flex flex-col w-full gap-5 max-w-5xl mx-auto border-2 rounded-lg p-4'>
      <div
        onClick={() => setShow((prev) => !prev)}
        className='flex justify-between items-center cursor-pointer'
      >
        <p>{title}</p>
        <motion.span
          animate={{ rotate: show ? 0 : 180 }}
          transition={{ duration: 0.5 }}
        >
          <SquareChevronDown />
        </motion.span>
      </div>
      <motion.p
        className='overflow-hidden'
        initial={{ height: 0 }}
        animate={{ height: show ? 'auto' : 0 }}
        transition={{ duration: 0.5 }}
      >
        {description}
      </motion.p>
    </li>
  );
};

export default Accordion;
