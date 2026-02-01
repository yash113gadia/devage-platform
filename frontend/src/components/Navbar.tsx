import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900">
              DevAgency.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
            <Link to="/internships" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Internships</Link>
            <Link to="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="px-5 py-2.5 text-sm font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full transition-all"
            >
              Login
            </Link>
            <Link 
              to="/book" 
              className="px-5 py-2.5 text-sm font-medium text-white bg-black hover:bg-gray-800 rounded-full transition-all shadow-sm"
            >
              Talk to Sales
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 pt-4 pb-6 space-y-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-base font-medium text-gray-900">Home</Link>
            <Link to="/internships" className="text-base font-medium text-gray-600">Internships</Link>
            <Link to="/contact" className="text-base font-medium text-gray-600">Contact</Link>
          </div>
          <div className="pt-4 flex flex-col space-y-3">
            <Link 
              to="/login" 
              className="w-full text-center px-5 py-3 text-base font-medium text-gray-900 bg-gray-100 rounded-full"
            >
              Login
            </Link>
            <Link 
              to="/book" 
              className="w-full text-center px-5 py-3 text-base font-medium text-white bg-black rounded-full"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;