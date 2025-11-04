import { X } from 'lucide-react';
import React, { useCallback, useEffect, useRef } from 'react';
import { Button } from './button';
import { createPortal } from 'react-dom';

interface DialogRootProps {
  toggleModal: boolean;
  setToggleModal: (toggleModal: boolean) => void;
  children: React.ReactNode;
}

function DialogRoot({ toggleModal, setToggleModal, children }: DialogRootProps) {
  const divRef = useRef<HTMLDivElement>(null);

  const handleCloseOutSide = useCallback(
    (e: MouseEvent) => {
      if (e.target === e.currentTarget) {
        setToggleModal(false);
      }
    },
    [setToggleModal]
  );

  useEffect(() => {
    const currentDiv = divRef.current;
    if (currentDiv) {
      currentDiv.addEventListener('click', handleCloseOutSide);
    }
    return () => {
      if (currentDiv) {
        currentDiv.removeEventListener('click', handleCloseOutSide);
      }
    };
  });

  function handleClose() {
    setToggleModal(false);
  }

  return (
    toggleModal && (
      <div
        ref={divRef}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 duration-200 animate-in fade-in sm:p-4"
      >
        <div className="relative flex max-h-[95vh] w-full max-w-4xl flex-col overflow-auto rounded-xl bg-white shadow-2xl sm:max-h-[90vh]">
          <Button variant={'ghost'} onClick={handleClose} className="absolute right-0 top-0 ">
            <X className="h-5 w-5" />
          </Button>
          <div className="mt-6 p-4">{children}</div>
        </div>
      </div>
    )
  );
}

DialogRoot.displayName = 'DialogRoot';

export default function Dialog({ children, ...props }: DialogRootProps) {
  return createPortal(
    <DialogRoot toggleModal={props.toggleModal} setToggleModal={props.setToggleModal}>
      {children}
    </DialogRoot>,
    document.body
  );
}

Dialog.displayName = 'Dialog';
