import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-between bg-navy px-8 py-8 border-t-2 border-gold">
      <div className="text-sm text-white/40">
        &copy; {new Date().getFullYear()} Alan Garcia
      </div>
      <div className="flex gap-6">
        <Link
          href="https://github.com/AlanGarc1a"
          target="_blank"
          className="text-sm text-pale-blue hover:text-gold transition-colors"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/alan-garcia-4b1062197/"
          target="_blank"
          className="text-sm text-pale-blue hover:text-gold transition-colors"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
