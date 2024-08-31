'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Logo } from '@bibleio/design';

const Nav: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 flex items-center justify-between border border-b-black bg-light-fg-1 px-32 py-12">
      <a href="/">
        <Logo size={32} subText="Web App" />
      </a>
      <div className="flex h-fit w-fit items-center gap-36">
        <a
          href="/"
          className={pathname === '/' ? 'font-semibold' : 'font-normal'}
        >
          Home
        </a>
        <a
          href="/bible"
          className={pathname === '/bible' ? 'font-semibold' : 'font-normal'}
        >
          Bible
        </a>
        <a
          href="/pray"
          className={pathname === '/pray' ? 'font-semibold' : 'font-normal'}
        >
          Pray
        </a>
        <a
          href="/testimonies"
          className={
            pathname === '/testimonies' ? 'font-semibold' : 'font-normal'
          }
        >
          Testimonies
        </a>
      </div>
    </nav>
  );
};

export default Nav;
