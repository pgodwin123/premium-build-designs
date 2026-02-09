import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

// [PLACEHOLDER] Update phone number
const PHONE_NUMBER = "07882 075524";
const PHONE_HREF = "tel:07882075524";

export default function CTABanner() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          {/* [PLACEHOLDER] Update CTA headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Home?
          </h2>
          {/* [PLACEHOLDER] Update CTA description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Get a free, no-obligation quote today. Our team is ready to bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="amber-gradient text-base h-14 px-8">
              <Link to="/contact">
                Request Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base h-14 px-8">
              <a href={PHONE_HREF}>
                <Phone className="mr-2 w-5 h-5" />
                Call {PHONE_NUMBER}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
