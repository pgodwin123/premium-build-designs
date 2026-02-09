import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-construction.jpg";

// [PLACEHOLDER] Update phone number
const PHONE_NUMBER = "07882 075524";
const PHONE_HREF = "tel:07882075524";

export default function SplitHero() {
  return (
    <section className="min-h-screen flex">
      {/* Left side - Content */}
      <div className="w-full lg:w-1/2 flex items-center py-20 lg:py-0">
        <div className="container-custom lg:pr-16">
          <div className="max-w-xl">
            {/* [PLACEHOLDER] Update hero label */}
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Professional Building Services
            </span>
            
            {/* [PLACEHOLDER] Update hero headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Building Your Vision Into Reality
            </h1>
            
            {/* [PLACEHOLDER] Update hero description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              From home extensions to complete new builds, we deliver exceptional 
              craftsmanship and outstanding results. Trusted by homeowners across 
              London and the South East.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
          </div>
        </div>
      </div>
      
      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src={heroImg}
          alt="Construction project"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle gradient overlay for edge blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent w-32" />
      </div>
    </section>
  );
}
