'use client';
import { motion, useScroll, useTransform } from 'motion/react';
function PicuterCover() {
  const { scrollY } = useScroll();

  const yValue = useTransform(scrollY, [0, 300], ['0%', '50%']);
  const scale = useTransform(scrollY, [0, 300], [1, 1.2]);

  return (
    <>
      <motion.section
        className="absolute bottom-44 right-3 hidden md:block z-30 size-1/3 "
        animate={{ skewY: -30 }}
      >
        <div className="relative h-full w-full rounded-xl border border-zinc-400">
          <motion.img
            src="/images/design/Screenshot 2025-10-29 153425.png"
            className="absolute right-8 top-1/2 z-0 size-64 rounded-lg opacity-70 shadow-lg shadow-white duration-150 group-hover:opacity-100"
            style={{ top: yValue, scale }}
          />
        </div>
      </motion.section>
      <motion.img
        src="/images/design/Screenshop-3.png"
        className="absolute hidden md:block bottom-1/4 left-0 z-20 h-1/4 w-1/3 rounded-br-lg rounded-tr-lg opacity-70 shadow-lg shadow-blue-400 duration-150 group-hover:opacity-100"
        whileHover={{ y: -100 }}
        animate={{ y: 200 }}
        transition={{
          delay: 1,
          duration: 0.6,
          ease: 'easeOut',
        }}
      />
    </>
  );
}

export { PicuterCover };
