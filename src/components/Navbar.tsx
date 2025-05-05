
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Perfumes", href: "/perfumes" },
    { name: "Shop", href: "/shop" },
    { name: "Founder", href: "/founder" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-white/80 shadow-md backdrop-blur-md"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-electric-blue to-electric-violet bg-clip-text text-transparent">
            ScentSpark
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-1">
          {navigation.map((item) => (
            <Link key={item.name} to={item.href}>
              <Button
                variant={location.pathname === item.href ? "default" : "ghost"}
                className={`rounded-full px-4 ${
                  location.pathname === item.href
                    ? "bg-gradient-electric text-white"
                    : "hover:bg-secondary/20"
                }`}
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg animate-slide-in">
          <div className="py-4 space-y-2 px-4">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className="block">
                <Button
                  variant={location.pathname === item.href ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    location.pathname === item.href
                      ? "bg-gradient-electric text-white"
                      : ""
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
