import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

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
    <dialog
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
    </dialog>,
    document.querySelector('#modal')
  );
}
