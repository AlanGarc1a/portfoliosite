"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinks = {
  id: number;
  name: string;
  href: string;
};

const navLinks: NavLinks[] = [
  { id: 1, name: "About", href: "#about" },
  { id: 2, name: "Experience", href: "#experience" },
  { id: 3, name: "Projects", href: "#projects" },
  { id: 4, name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className="bg-navy border-b-4 border-b-gold sticky top-0 z-50"
      aria-label="Main navigation"
    >
      <div className="flex justify-between items-center h-16 px-8">
        <div className="flex-1">
          <Link className="text-cream font-semibold" href="/">
            Alan<span className="text-gold">.</span>Garcia
          </Link>
        </div>
        <ul className="hidde md:flex items-center gap-8" role="list">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.id}>
                <Link
                  className={`font-mono text-xs tracking-wider uppercase transition-colors ${isActive ? "text-gold" : "text-cream/60 hover:text-white"}`}
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* Mobile menu */}
        <button
          className="md:hidden text-white/70 hover:text-gold transition-colors"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
