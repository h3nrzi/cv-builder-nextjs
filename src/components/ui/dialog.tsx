import { X } from 'lucide-react';
import React from 'react';
import { Button } from './button';

export default function Dialog({
  toggleModal,
  setToggleModal,
  children,
}: {
  toggleModal: boolean;
  setToggleModal: (toggleModal: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    toggleModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 duration-200 animate-in fade-in sm:p-4">
        <div className="relative  flex max-h-[95vh] w-full max-w-4xl flex-col rounded-xl bg-white shadow-2xl sm:max-h-[90vh]">
          <Button
            variant={'ghost'}
            onClick={() => setToggleModal(false)}
            className="absolute right-0 top-0 "
          >
            <X className="h-5 w-5" />
          </Button>
          <section className='p-4 mt-6'>{children}</section>
        </div>
      </div>
    )
  );
}
