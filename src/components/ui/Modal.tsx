import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Modal({ children, free = false }) {
  const navigate = useNavigate();

  const dialog = useRef();

  useEffect(() => {
    dialog.current.showModal();
  }, []);

  const clickHandler = (e) => {
    if (!document.getElementById('inside').contains(e.target)) {
      navigate('..');
    }
  };

  return createPortal(
    <motion.dialog
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1 }}
      onClick={clickHandler}
      ref={dialog}
      className='backdrop:bg-black/85 rounded-lg'
    >
      <div
        dir='ltr'
        className={`w-auto ${
          free ? 'h-auto' : 'max-h-[350px]'
        }  bg-stone-200 overflow-y-scroll p-8 font-Dana`}
        id='inside'
      >
        {children}
      </div>
    </motion.dialog>,
    document.querySelector('#modal')
  );
}
