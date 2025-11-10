import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    const isActive = location.pathname === to;
    return (
      <Link 
        to={to} 
        onClick={closeMenu}
        className={`font-medium px-4 py-2 relative transition-colors duration-300 group ${
          isActive 
            ? 'text-[#1e40af]' 
            : 'text-slate-900 hover:text-[#1e40af]'
        }`}
      >
        {children}
        <span 
          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#1e40af] to-[#2563eb] transition-all duration-300 ${
            isActive ? 'w-4/5' : 'w-0 group-hover:w-4/5'
          }`}
        ></span>
      </Link>
    );
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg shadow-blue-900/10 sticky top-0 z-50 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/" 
          onClick={closeMenu}
          className="text-2xl font-bold text-[#1e40af] hover:scale-105 transition-transform duration-300"
        >
          <span className="bg-gradient-to-br from-[#1e40af] to-[#2563eb] bg-clip-text text-transparent">
            Evolvia HR
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex list-none gap-8 items-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg text-[#1e40af] hover:bg-blue-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:ring-offset-2"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X size={24} strokeWidth={2} />
          ) : (
            <Menu size={24} strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col list-none gap-0 px-6 py-4 bg-white/95 backdrop-blur-md border-t border-blue-100 mt-2">
          <li className="border-b border-blue-50 last:border-b-0 mb-4">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="border-b border-blue-50 last:border-b-0 mb-4">
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li className="border-b border-blue-50 last:border-b-0 mb-4">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
