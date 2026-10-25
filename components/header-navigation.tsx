'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'motion/react';

const links = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'CV', href: '/cv' },
];

export function HeaderNavigation() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <nav className="header-nav" aria-label="Main navigation">
      {links.map(({ label, href }) => {
        const active = pathname === href || (href === '/work' && pathname.startsWith('/work/'));
        return (
          <Link
            key={href}
            className={`header-nav-link${active ? ' is-active' : ''}`}
            href={href}
            aria-current={active ? 'page' : undefined}
          >
            <span>{label}</span>
            {active && (
              <motion.span
                className="header-nav-indicator"
                layoutId="observatory-active-nav"
                initial={false}
                transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 34 }}
                aria-hidden="true"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
