'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

type NavItem = {
  name: string;
  href: string;
  type: 'section' | 'page' | 'external';
};

const navItems: NavItem[] = [
  { name: 'Home', href: '/#home', type: 'section' },
  { name: 'News', href: '/news', type: 'page' },
  { name: 'Awards', href: '/awards', type: 'page' },
  { name: 'Publications', href: '/publications', type: 'page' },
  { name: 'Projects', href: '/projects', type: 'page' },
  { name: 'Repositories', href: '/repositories', type: 'page' },
  {
    name: 'CV',
    href: 'https://drive.google.com/file/d/1c5ADMmx20FD3A3WiSHv8aD44VQn9_c6l/view?usp=sharing',
    type: 'external',
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Smooth scroll ONLY if already on home page
    if (pathname === '/') {
      e.preventDefault();
      const id = href.replace('/#', '#');
      const element = document.querySelector(id);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    setOpen(false);
  };

  const renderLink = (item: NavItem) => {
    switch (item.type) {
      case 'section':
        return (
          <a
            href={item.href}
            onClick={(e) => handleSectionClick(e, item.href)}
            className='relative pb-1 text-sm text-gray-600 hover:text-black transition-colors'
          >
            {item.name}
          </a>
        );

      case 'page':
        return (
          <Link
            href={item.href}
            onClick={() => setOpen(false)}
            className={`relative pb-1 text-sm transition-colors ${
              pathname === item.href
                ? 'text-black'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            {item.name}
          </Link>
        );

      case 'external':
        return (
          <a
            href={item.href}
            target='_blank'
            rel='noopener noreferrer'
            onClick={() => setOpen(false)}
            className='relative pb-1 text-sm text-gray-600 hover:text-black transition-colors'
          >
            {item.name}
          </a>
        );

      default:
        return null;
    }
  };

  return (
    <header className='sticky top-0 z-50 w-full border-b border-gray-200 bg-white'>
      <nav className='mx-auto max-w-[1000px] px-4'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link
            href='/'
            className='text-[30px] lavishly-yours-regular font-semibold'
          >
            Clinton Ikechukwu
          </Link>

          {/* Desktop Menu */}
          <ul className='hidden md:flex items-center gap-6'>
            {navItems.map((item) => (
              <li key={item.name}>{renderLink(item)}</li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className='md:hidden text-2xl text-gray-700'
            aria-label='Toggle menu'
          >
            {open ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden flex flex-col gap-4 overflow-hidden transition-all duration-300 ease-out
          ${open ? 'max-h-96 opacity-100 mt-3 pb-4' : 'max-h-0 opacity-0'}
        `}
        >
          {navItems.map((item) => (
            <li key={item.name}>{renderLink(item)}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
