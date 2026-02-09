import { useParams, Link } from "react-router-dom";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageCTA from "@/components/shared/PageCTA";
import extensionImg from "@/assets/project-extension.jpg";
import loftImg from "@/assets/project-loft.jpg";
import newbuildImg from "@/assets/project-newbuild.jpg";
import renovationImg from "@/assets/project-renovation.jpg";
import kitchenImg from "@/assets/project-kitchen.jpg";
import garageImg from "@/assets/project-garage.jpg";
import heroImg from "@/assets/hero-construction.jpg";

// [PLACEHOLDER] Update phone number
const PHONE_NUMBER = "07882 075524";
const PHONE_HREF = "tel:07882075524";

// [PLACEHOLDER] Update services data
const servicesData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features: string[];
  process: string[];
  galleryImages: string[];
}> = {
  extensions: {
    title: "Home Extensions",
    subtitle: "Expand Your Living Space",
    description: "Whether you need a single-storey rear extension, a double-storey side extension, or a wrap-around design, our expert team delivers stunning extensions that seamlessly integrate with your existing home. We handle everything from planning and design to construction and finishing.",
    heroImage: extensionImg,
    features: [
      "Full architectural design service",
      "Planning permission applications",
      "Structural engineering",
      "Project management from start to finish",
      "All groundwork and foundations",
      "Roofing, windows, and doors",
      "Plastering, electrics, and plumbing",
      "Underfloor heating options",
      "Kitchen or bathroom installation",
      "Decoration and landscaping",
    ],
    process: [
      "Free consultation and site survey",
      "Design and planning submission",
      "Building regulations approval",
      "Construction phase",
      "Final inspection and handover",
    ],
    galleryImages: [extensionImg, heroImg],
  },
  "loft-conversions": {
    title: "Loft Conversions",
    subtitle: "Transform Your Unused Space",
    description: "Unlock the hidden potential of your home with a professionally designed and built loft conversion. From dormer to mansard, hip-to-gable to Velux, we create beautiful living spaces that add value and functionality to your property.",
    heroImage: loftImg,
    features: [
      "All types of loft conversions",
      "Structural calculations and design",
      "Planning and building control",
      "Staircase design and installation",
      "Dormer and roof window installation",
      "En-suite bathroom fitting",
      "Electrical and plumbing work",
      "Insulation and fire safety",
      "Plastering and decoration",
      "Storage solutions",
    ],
    process: [
      "Free survey and consultation",
      "Design and structural planning",
      "Approvals and party wall matters",
      "Steel work and construction",
      "Finishing and decoration",
    ],
    galleryImages: [loftImg, heroImg],
  },
  "new-builds": {
    title: "New Builds",
    subtitle: "Build Your Dream Home",
    description: "From the ground up, we construct high-quality new build homes tailored to your exact specifications. Whether it's a modern family home, contemporary eco-house, or traditional design, our team delivers exceptional craftsmanship at every stage.",
    heroImage: newbuildImg,
    features: [
      "Complete design and build service",
      "Site assessment and preparation",
      "Foundation and groundwork",
      "Structural build and roofing",
      "All MEP installations",
      "Interior fit-out and finishes",
      "Landscaping and driveways",
      "Energy-efficient solutions",
      "Smart home technology",
      "Warranty and aftercare",
    ],
    process: [
      "Consultation and site analysis",
      "Architectural design",
      "Planning and building regs",
      "Construction phase",
      "Snagging and handover",
    ],
    galleryImages: [newbuildImg, heroImg],
  },
  renovations: {
    title: "Renovations",
    subtitle: "Breathe New Life Into Your Home",
    description: "Transform your property with our comprehensive renovation services. From complete refurbishments to targeted upgrades, we modernise and enhance your home while respecting its character and your vision.",
    heroImage: renovationImg,
    features: [
      "Full property renovations",
      "Open plan conversions",
      "Structural alterations",
      "Period property restoration",
      "Modern upgrades and updates",
      "Complete rewiring",
      "New plumbing systems",
      "Heating system upgrades",
      "Window and door replacement",
      "External rendering and fascias",
    ],
    process: [
      "Property assessment",
      "Design and planning",
      "Strip-out and preparation",
      "Construction and installation",
      "Finishing and decoration",
    ],
    galleryImages: [renovationImg, heroImg],
  },
  kitchens: {
    title: "Kitchens & Bathrooms",
    subtitle: "Beautiful, Functional Spaces",
    description: "Create the kitchen or bathroom of your dreams with our bespoke design and installation service. We work with leading suppliers to deliver stunning, functional spaces that perfectly suit your lifestyle and home.",
    heroImage: kitchenImg,
    features: [
      "Bespoke kitchen design",
      "Premium bathroom suites",
      "Wall removal and structural work",
      "Underfloor heating",
      "Tiling and waterproofing",
      "Premium appliance installation",
      "Worktop fabrication",
      "Lighting design",
      "Ventilation solutions",
      "Full project management",
    ],
    process: [
      "Design consultation",
      "Material selection",
      "Strip-out and preparation",
      "Installation phase",
      "Final touches and handover",
    ],
    galleryImages: [kitchenImg, heroImg],
  },
  "garage-conversions": {
    title: "Garage Conversions",
    subtitle: "Maximise Your Space",
    description: "Transform your underused garage into valuable living space. Whether you need a home office, gym, playroom, or additional bedroom, we create comfortable, insulated spaces that feel like a natural part of your home.",
    heroImage: garageImg,
    features: [
      "Full conversion service",
      "Planning guidance",
      "Structural work if needed",
      "Flooring and damp proofing",
      "Insulation to regulations",
      "Window and door installation",
      "Electrical installation",
      "Heating solutions",
      "Plastering and decoration",
      "En-suite options available",
    ],
    process: [
      "Site survey",
      "Design and approvals",
      "Groundwork and structure",
      "Fit-out and services",
      "Finishing and handover",
    ],
    galleryImages: [garageImg, heroImg],
  },
};

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Button asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="container-custom relative z-10 pb-12 md:pb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            {service.subtitle}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                {service.description}
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mb-6">
                What's Included
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-6">
                Our Process
              </h2>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <span className="text-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-card rounded-2xl border border-border p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Get a Free Quote
                </h3>
                <p className="text-muted-foreground mb-6">
                  Ready to discuss your {service.title.toLowerCase()} project? 
                  Contact us for a free, no-obligation quote.
                </p>
                <div className="space-y-4">
                  <Button asChild className="w-full amber-gradient">
                    <Link to="/contact">
                      Request Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href={PHONE_HREF}>
                      <Phone className="mr-2 w-4 h-4" />
                      {PHONE_NUMBER}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.galleryImages.map((image, index) => (
              <div key={index} className="rounded-2xl overflow-hidden aspect-video">
                <img
                  src={image}
                  alt={`${service.title} project ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <PageCTA 
        title="Ready to Start Your Project?"
        description="Get in touch today for a free consultation and quote."
      />
    </div>
  );
}
