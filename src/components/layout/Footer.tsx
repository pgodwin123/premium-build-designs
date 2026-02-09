import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { name: "Extensions", href: "/services/extensions" },
  { name: "Loft Conversions", href: "/services/loft-conversions" },
  { name: "New Builds", href: "/services/new-builds" },
  { name: "Renovations", href: "/services/renovations" },
  { name: "Kitchens & Bathrooms", href: "/services/kitchens" },
  { name: "Garage Conversions", href: "/services/garage-conversions" },
];

const serviceAreas = [
  "London",
  "Surrey",
  "Kent",
  "Essex",
  "Hertfordshire",
  "Berkshire",
];

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      {/* CTA Banner */}
      <div className="container-custom py-12 md:py-16">
        <div className="bg-card rounded-2xl p-8 md:p-12 text-center border border-border/50">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Get a free, no-obligation quote today. We'll discuss your vision and provide expert advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="amber-gradient hover:opacity-90 text-base">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <a href="tel:01234567890">
                <Phone className="w-4 h-4 mr-2" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16 border-t border-border/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">OD</span>
              </div>
              <div>
                <span className="text-foreground font-bold text-lg">OD Contractors</span>
                <span className="text-muted-foreground text-xs block -mt-1">Building Excellence</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
              Professional building and renovation services with over 25 years of experience. 
              Quality craftsmanship, on time and on budget.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
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
                  href="tel:01234567890"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  01234 567890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@odcontractors.co.uk"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  info@odcontractors.co.uk
                </a>
              </li>
              <li>
                <div className="text-muted-foreground text-sm flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>123 Builder Street<br />London, SE1 1AA</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-custom py-6 border-t border-border/50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
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
