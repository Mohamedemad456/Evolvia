import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    const isActive = location.pathname === to;
    return (
      <Link 
        to={to} 
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
        <Link to="/" className="text-2xl font-bold text-[#1e40af] hover:scale-105 transition-transform duration-300">
          <span className="bg-gradient-to-br from-[#1e40af] to-[#2563eb] bg-clip-text text-transparent">
            Evolvia HR
          </span>
        </Link>
        <ul className="flex list-none gap-8 items-center">
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
      </div>
    </nav>
  );
};

export default Navigation;
