import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-[#F82173]">
      {/* Navbar header */}
      <div className="Adorn-Engraved-Expanded relative mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        {/* Desktop links */}
        <ul className="hidden list-none gap-8 text-lg text-white md:flex">
          <li>
            <Link to="/" className="hover:text-gray-900">
              My Work
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-900">
              Contact
            </Link>
          </li>
        </ul>

        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-xl text-white hover:text-gray-900 sm:text-3xl"
        >
          Maelle CHAIZE
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="ml-auto font-sans text-xl leading-none text-white md:hidden"
        >
          {menuOpen ? "X" : "☰"}
        </button>
      </div>

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div className="Adorn-Engraved-Expanded fixed inset-0 z-[-1] flex h-dvh w-full flex-col items-center justify-center gap-10 bg-[#F82173] text-2xl text-white md:hidden">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-900"
          >
            My Work
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-900"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
