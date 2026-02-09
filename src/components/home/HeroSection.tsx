import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-extension.jpg";

// [PLACEHOLDER] Update phone number
const PHONE_NUMBER = "07882 075524";
const PHONE_HREF = "tel:07882075524";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* [PLACEHOLDER] Update tagline */}
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">
            Over 25 Years of Excellence
          </p>

          {/* [PLACEHOLDER] Update headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            Building Dreams,
            <span className="block text-primary">Crafting Spaces</span>
          </h1>

          {/* [PLACEHOLDER] Update description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
            Professional building and renovation services across London and the South East. 
            Quality craftsmanship, delivered on time and on budget.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="amber-gradient text-base h-14 px-8">
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base h-14 px-8">
              <a href={PHONE_HREF}>
                <Phone className="mr-2 w-5 h-5" />
                {PHONE_NUMBER}
              </a>
            </Button>
          </div>

          {/* Stats - [PLACEHOLDER] Update statistics */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-border">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
