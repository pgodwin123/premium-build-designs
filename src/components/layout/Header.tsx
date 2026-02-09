import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

// [PLACEHOLDER] Update navigation links as needed
const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

// [PLACEHOLDER] Update phone number
const PHONE_NUMBER = "07882 075524";
const PHONE_HREF = "tel:07882075524";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? "bg-background border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - [PLACEHOLDER] Update company name */}
          <Link to="/" className="flex items-center">
            <span className="text-foreground font-bold text-xl md:text-2xl">
              OD Contractors
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-sm text-foreground font-medium hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{PHONE_NUMBER}</span>
            </a>
            <Button asChild className="amber-gradient">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>

          {/* Mobile: Phone + Quote + Menu */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-foreground"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <Button asChild size="sm" className="amber-gradient hidden sm:inline-flex">
              <Link to="/contact">Quote</Link>
            </Button>
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-200 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-background border-t border-border px-4 py-6 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                location.pathname === item.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-border space-y-3">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 py-3 text-foreground font-medium"
            >
              <Phone className="w-5 h-5" />
              <span>{PHONE_NUMBER}</span>
            </a>
            <Button asChild className="w-full amber-gradient">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
