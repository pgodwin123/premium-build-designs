import { Link } from "react-router-dom";
import { ArrowRight, Building2, Home, Hammer, Bath, Warehouse, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import extensionImg from "@/assets/project-extension.jpg";
import loftImg from "@/assets/project-loft.jpg";
import newbuildImg from "@/assets/project-newbuild.jpg";
import renovationImg from "@/assets/project-renovation.jpg";
import kitchenImg from "@/assets/project-kitchen.jpg";
import garageImg from "@/assets/project-garage.jpg";

const services = [
  {
    slug: "extensions",
    title: "Extensions",
    description: "Expand your living space with beautifully designed extensions that seamlessly blend with your existing home.",
    icon: Building2,
    image: extensionImg,
  },
  {
    slug: "loft-conversions",
    title: "Loft Conversions",
    description: "Transform your unused loft into a stunning bedroom, office, or living space with expert craftsmanship.",
    icon: Home,
    image: loftImg,
  },
  {
    slug: "new-builds",
    title: "New Builds",
    description: "From foundations to finishing touches, we deliver complete new build homes to the highest standards.",
    icon: PenTool,
    image: newbuildImg,
  },
  {
    slug: "renovations",
    title: "Renovations",
    description: "Breathe new life into your property with our comprehensive renovation and refurbishment services.",
    icon: Hammer,
    image: renovationImg,
  },
  {
    slug: "kitchens",
    title: "Kitchens & Bathrooms",
    description: "Create the kitchen or bathroom of your dreams with our bespoke design and installation service.",
    icon: Bath,
    image: kitchenImg,
  },
  {
    slug: "garage-conversions",
    title: "Garage Conversions",
    description: "Convert your garage into valuable living space - home office, gym, or additional bedroom.",
    icon: Warehouse,
    image: garageImg,
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Building Solutions for Every Need
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              From home extensions to complete new builds, we provide comprehensive building 
              and renovation services with a focus on quality craftsmanship and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-16 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {service.description}
                  </p>
                  <Button asChild>
                    <Link to={`/services/${service.slug}`}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation and quote on your project.
          </p>
          <Button asChild size="lg" className="amber-gradient hover:opacity-90">
            <Link to="/contact">
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
