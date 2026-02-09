import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 amber-gradient opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(38_92%_50%/0.15),transparent_50%)]" />
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Get a free, no-obligation quote today. Our team is ready to bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="amber-gradient hover:opacity-90 text-base h-14 px-8">
              <Link to="/contact">
                Request Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base h-14 px-8">
              <a href="tel:01234567890">
                <Phone className="mr-2 w-5 h-5" />
                Call 01234 567890
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
