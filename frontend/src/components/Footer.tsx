import { Link } from 'react-router-dom';
import { Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-xl font-bold tracking-tight text-gray-900 block mb-6">
              DevAgency.
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Building the next generation of digital products with elite talent and AI automation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-black transition-colors">Home</Link></li>
              <li><Link to="/plans" className="hover:text-black transition-colors">Plans</Link></li>
              <li><Link to="/book" className="hover:text-black transition-colors">Consulting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/internships" className="hover:text-black transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-black transition-colors">Contact</Link></li>
              <li><Link to="/login" className="hover:text-black transition-colors">Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-black transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors"><Github className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} DevAgency Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-xs text-gray-400">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;