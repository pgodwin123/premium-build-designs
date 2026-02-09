import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import extensionImg from "@/assets/project-extension.jpg";
import loftImg from "@/assets/project-loft.jpg";
import newbuildImg from "@/assets/project-newbuild.jpg";
import renovationImg from "@/assets/project-renovation.jpg";
import kitchenImg from "@/assets/project-kitchen.jpg";
import garageImg from "@/assets/project-garage.jpg";

// [PLACEHOLDER] Update services list
const services = [
  {
    slug: "extensions",
    title: "Extensions",
    description: "Expand your living space with beautifully designed extensions that seamlessly blend with your existing home. Whether you need a single-storey rear extension or a wraparound design, we deliver quality construction that adds value to your property.",
    image: extensionImg,
  },
  {
    slug: "loft-conversions",
    title: "Loft Conversions",
    description: "Transform your unused loft into a stunning bedroom, office, or living space with expert craftsmanship. We handle everything from planning and structural work to the final finishes, creating a beautiful new space in your home.",
    image: loftImg,
  },
  {
    slug: "new-builds",
    title: "New Builds",
    description: "From foundations to finishing touches, we deliver complete new build homes to the highest standards. Our experienced team manages every aspect of the build process, ensuring your dream home becomes a reality.",
    image: newbuildImg,
  },
  {
    slug: "renovations",
    title: "Renovations",
    description: "Breathe new life into your property with our comprehensive renovation and refurbishment services. From period property restorations to complete modernisations, we transform tired spaces into beautiful, functional homes.",
    image: renovationImg,
  },
  {
    slug: "kitchens",
    title: "Kitchens & Bathrooms",
    description: "Create the kitchen or bathroom of your dreams with our bespoke design and installation service. We work with premium suppliers to deliver stunning results that combine style, functionality, and lasting quality.",
    image: kitchenImg,
  },
  {
    slug: "garage-conversions",
    title: "Garage Conversions",
    description: "Convert your garage into valuable living space - home office, gym, playroom, or additional bedroom. We handle all aspects from planning to completion, maximising your home's potential without extending your footprint.",
    image: garageImg,
  },
];

export default function AlternatingServices() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            {/* [PLACEHOLDER] Update services section description */}
            Comprehensive building solutions for every project, delivered with 
            exceptional craftsmanship and attention to detail.
          </p>
        </div>
        
        {/* Services List */}
        <div className="space-y-20 md:space-y-32">
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
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <Button asChild variant="outline" size="lg">
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
  );
}
