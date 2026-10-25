'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'motion/react';
import { Download } from 'lucide-react';

const links = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
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
      <a className="header-resume-cta" href="/Myles-Hobdy-Resume.pdf" download="Myles-Hobdy-Resume.pdf" aria-label="Download résumé PDF">
        <Download size={16} strokeWidth={1.9} aria-hidden="true" />
        <span>Résumé</span>
      </a>
    </nav>
  );
}
