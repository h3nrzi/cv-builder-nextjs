import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-20 flex justify-center bg-[#150d28be] py-5  ">
      <p className="text-gray-400">
        با ❤️ ساخته شده توسط حسین رضایی -
        <Link
          href="https://github.com/h3nrzi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300"
        >
          @h3nrzi
        </Link>
      </p>
    </footer>
  );
}
