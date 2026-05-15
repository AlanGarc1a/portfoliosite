"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

type NavLink = {
  id: number;
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { id: 1, name: "About", href: "#about" },
  { id: 2, name: "Experience", href: "#experience" },
  { id: 3, name: "Projects", href: "#projects" },
  { id: 4, name: "Contact", href: "#contact" },
];

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className="bg-navy border-b-4 border-b-gold sticky top-0 z-50"
      aria-label="Main navigation"
    >
      {/* Main bar */}
      <div className="flex justify-between items-center h-16 px-8">
        {/* Logo */}
        <Link className="text-cream font-semibold" href="/" onClick={closeMenu}>
          Alan<span className="text-gold">.</span>Garcia
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.id}>
                <Link
                  className={`font-mono text-xs tracking-wider uppercase transition-colors ${
                    isActive ? "text-gold" : "text-cream/60 hover:text-white"
                  }`}
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-gold transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: easing }}
            className="md:hidden overflow-hidden border-t border-gold/20"
          >
            <ul role="list" className="flex flex-col px-8 py-4 gap-1">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.25,
                      ease: easing,
                      delay: index * 0.06,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`flex items-center gap-3 py-3 border-b border-white/5 font-mono text-xs tracking-wider uppercase transition-colors ${
                        isActive
                          ? "text-gold"
                          : "text-cream/60 hover:text-white"
                      }`}
                    >
                      {/* index number — design detail */}
                      <span className="text-gold/40">0{index + 1}</span>
                      {link.name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
