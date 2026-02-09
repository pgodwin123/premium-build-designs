import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import extensionImg from "@/assets/project-extension.jpg";
import loftImg from "@/assets/project-loft.jpg";
import newbuildImg from "@/assets/project-newbuild.jpg";
import renovationImg from "@/assets/project-renovation.jpg";
import kitchenImg from "@/assets/project-kitchen.jpg";
import garageImg from "@/assets/project-garage.jpg";

// [PLACEHOLDER] Update service titles, descriptions, and images
const services = [
  {
    title: "Extensions",
    description: "Expand your living space with beautifully designed extensions that seamlessly blend with your existing home.",
    image: extensionImg,
    href: "/services/extensions",
  },
  {
    title: "Loft Conversions",
    description: "Transform your unused loft into a stunning bedroom, office, or living space with expert craftsmanship.",
    image: loftImg,
    href: "/services/loft-conversions",
  },
  {
    title: "New Builds",
    description: "From foundations to finishing touches, we deliver complete new build homes to the highest standards.",
    image: newbuildImg,
    href: "/services/new-builds",
  },
  {
    title: "Renovations",
    description: "Breathe new life into your property with our comprehensive renovation and refurbishment services.",
    image: renovationImg,
    href: "/services/renovations",
  },
  {
    title: "Kitchens & Bathrooms",
    description: "Create the kitchen or bathroom of your dreams with our bespoke design and installation service.",
    image: kitchenImg,
    href: "/services/kitchens",
  },
  {
    title: "Garage Conversions",
    description: "Convert your garage into valuable living space - home office, gym, or additional bedroom.",
    image: garageImg,
    href: "/services/garage-conversions",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Expert Building Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From home extensions to complete new builds, we offer comprehensive building 
            services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 card-hover"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-white/80 line-clamp-2">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
