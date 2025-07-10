import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu from '../assets/menu.png';
import close from '../assets/Close.png';

const Navbar = () => {
  const [iseMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/pricing-plans', label: 'Pricing' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/how-we-works', label: 'How we works?' }
  ];

  return (
    <nav className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 shadow-lg fixed top-0 w-full left-0  z-50">
      <div className="flex items-center justify-between py-5 px-6 md:px-10">
        {/* Logo */}
        <Link to="/">
          <img src="/fevicon.png" alt="logo" className="h-10" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`py-1 px-3 text-lg font-light rounded-2xl hover:bg-gradient-to-r from-amber-400 to-yellow-500 hover:text-black transition duration-300  ${
                activeLink === link.href ? 'text-amber-300' : 'text-primaryText hover:text-amber-50 font-semibold'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!iseMenuOpen)} className="p-2">
            <img src={iseMenuOpen ? close : menu} className="size-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {iseMenuOpen && (
        <div className="md:hidden flex flex-col items-start px-6 pb-4 space-y-3 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => {
                setActiveLink(link.href);
                setIsMenuOpen(false); // close menu after click
              }}
              className={`text-base py-2 px-3 rounded-xl w-full ${
                activeLink === link.href ? 'text-amber-300' : 'text-primaryText hover:text-amber-50'
              } hover:bg-slate-900 transition duration-300`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;


