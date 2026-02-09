import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// [PLACEHOLDER] Update testimonials list
const testimonials = [
  {
    id: 1,
    name: "Sarah Thompson",
    location: "Surrey",
    rating: 5,
    text: "OD Contractors transformed our home with a stunning rear extension. Professional, punctual, and the quality exceeded our expectations.",
  },
  {
    id: 2,
    name: "James Mitchell",
    location: "London",
    rating: 5,
    text: "We had our loft converted into a master bedroom. The attention to detail was incredible and they finished ahead of schedule.",
  },
  {
    id: 3,
    name: "Emma Richardson",
    location: "Kent",
    rating: 5,
    text: "Our kitchen renovation is beautiful. They worked cleanly and efficiently, minimising disruption to our daily life.",
  },
  {
    id: 4,
    name: "David Clarke",
    location: "Essex",
    rating: 5,
    text: "They turned our unused garage into a warm, functional home office. True craftsmen who take pride in their work.",
  },
  {
    id: 5,
    name: "Lisa Parker",
    location: "Hertfordshire",
    rating: 5,
    text: "Complete renovation of our 1930s property. They managed the entire project brilliantly and the finish is exceptional.",
  },
  {
    id: 6,
    name: "Michael Brown",
    location: "Berkshire",
    rating: 5,
    text: "Our two-storey extension was handled perfectly. Great communication throughout and a beautiful end result.",
  },
];

export default function TestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };
  
  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      return () => ref.removeEventListener("scroll", checkScroll);
    }
  }, []);
  
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 380;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-xl mb-6 md:mb-0">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            {/* [PLACEHOLDER] Update testimonials description */}
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it — hear from homeowners who've trusted us.
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-12 h-12"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-12 h-12"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        {/* Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-[340px] md:w-[380px] bg-background rounded-2xl border border-border p-8 snap-start"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6 text-base">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="pt-6 border-t border-border">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
