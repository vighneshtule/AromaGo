
import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-electric-blue/10 to-electric-violet/10">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-electric-blue to-electric-violet bg-clip-text text-transparent mb-4">
              ScentSpark
            </h3>
            <p className="text-gray-600 mb-4">
              Experience instant fragrance with our futuristic perfume vending machines.
              Choose from 5 premium scents, pay via UPI, and enjoy touchless luxury anywhere.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-electric-violet transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contact@scentspark.com"
                className="text-gray-600 hover:text-electric-violet transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+918800123456"
                className="text-gray-600 hover:text-electric-violet transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-electric-violet transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-electric-violet transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/perfumes" className="text-gray-600 hover:text-electric-violet transition-colors">
                  Perfumes
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-electric-violet transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/founder" className="text-gray-600 hover:text-electric-violet transition-colors">
                  Founder
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-electric-violet transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-electric-violet mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">IIT Madras, Chennai, India</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-electric-violet mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">+91 8800 123456</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-electric-violet mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">contact@scentspark.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Globe size={20} className="text-electric-violet mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">www.scentspark.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} ScentSpark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
