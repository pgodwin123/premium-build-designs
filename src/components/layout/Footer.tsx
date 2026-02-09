import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

// [PLACEHOLDER] Update services list
const services = [
  { name: "Extensions", href: "/services/extensions" },
  { name: "Loft Conversions", href: "/services/loft-conversions" },
  { name: "New Builds", href: "/services/new-builds" },
  { name: "Renovations", href: "/services/renovations" },
  { name: "Kitchens & Bathrooms", href: "/services/kitchens" },
  { name: "Garage Conversions", href: "/services/garage-conversions" },
];

// [PLACEHOLDER] Update service areas
const serviceAreas = [
  "London",
  "Surrey",
  "Kent",
  "Essex",
  "Hertfordshire",
  "Berkshire",
];

// [PLACEHOLDER] Update contact details
const PHONE_NUMBER = "07882 075524";
const PHONE_HREF = "tel:07882075524";
const EMAIL = "info@odcontractors.co.uk";
const ADDRESS = "123 Builder Street\nLondon, SE1 1AA";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info - [PLACEHOLDER] Update company details */}
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-5">
              <span className="text-foreground font-bold text-xl">OD Contractors</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
              {/* [PLACEHOLDER] Update company description */}
              Professional building and renovation services with over 25 years of experience. 
              Quality craftsmanship, on time and on budget.
            </p>
            {/* [PLACEHOLDER] Update social media links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-5">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-foreground font-semibold mb-5">Service Areas</h3>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="text-muted-foreground text-sm flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={PHONE_HREF}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  {EMAIL}
                </a>
              </li>
              <li>
                <div className="text-muted-foreground text-sm flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="whitespace-pre-line">{ADDRESS}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-custom py-6 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          {/* [PLACEHOLDER] Update company name */}
          <p>© {new Date().getFullYear()} OD Contractors Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
