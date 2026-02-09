import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

// [PLACEHOLDER] Update phone number
const PHONE_NUMBER = "07882 075524";
const PHONE_HREF = "tel:07882075524";

interface PageCTAProps {
  title?: string;
  description?: string;
}

export default function PageCTA({ 
  title = "Ready to Start Your Project?",
  description = "Get in touch today for a free consultation and quote."
}: PageCTAProps) {
  return (
    <section className="py-20 bg-secondary">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="amber-gradient">
            <Link to="/contact">
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={PHONE_HREF}>
              <Phone className="mr-2 w-4 h-4" />
              {PHONE_NUMBER}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
