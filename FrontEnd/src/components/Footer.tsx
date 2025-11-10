import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1e293b] to-[#1e3a8a] text-white py-16 px-6 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#60a5fa] to-[#0ea5e9] bg-clip-text text-transparent">
              Evolvia HR
            </h3>
            <p className="text-white/80 leading-relaxed">
              Your trusted partner for HR consulting and services
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#60a5fa]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-[#60a5fa] transition-colors duration-300 hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-[#60a5fa] transition-colors duration-300 hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-[#60a5fa] transition-colors duration-300 hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#60a5fa]">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>HR Consulting</li>
              <li>Talent Acquisition</li>
              <li>Training & Development</li>
              <li>HR Strategy</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#60a5fa]">Connect With Us</h4>
            <div className="flex gap-4 mt-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white/20 text-white hover:border-[#2563eb] hover:text-[#2563eb] hover:-translate-y-1 hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={20} strokeWidth={2} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white/20 text-white hover:border-[#2563eb] hover:text-[#2563eb] hover:-translate-y-1 hover:scale-110 transition-all duration-300"
              >
                <Facebook size={20} strokeWidth={2} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white/20 text-white hover:border-[#2563eb] hover:text-[#2563eb] hover:-translate-y-1 hover:scale-110 transition-all duration-300"
              >
                <Twitter size={20} strokeWidth={2} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white/20 text-white hover:border-[#2563eb] hover:text-[#2563eb] hover:-translate-y-1 hover:scale-110 transition-all duration-300"
              >
                <Instagram size={20} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; 2024 Evolvia HR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
