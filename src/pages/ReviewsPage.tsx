import { Star, Quote } from "lucide-react";
import PageCTA from "@/components/shared/PageCTA";

// [PLACEHOLDER] Update reviews list
const reviews = [
  {
    id: 1,
    name: "Sarah Thompson",
    location: "Surrey",
    rating: 5,
    date: "December 2024",
    project: "Home Extension",
    text: "OD Contractors transformed our home with a stunning rear extension. From start to finish, the team was professional, punctual, and the quality of work exceeded our expectations. They kept us informed at every stage and the project was completed on time and on budget. Couldn't recommend them more highly!",
  },
  {
    id: 2,
    name: "James Mitchell",
    location: "London",
    rating: 5,
    date: "November 2024",
    project: "Loft Conversion",
    text: "We had our loft converted into a master bedroom and ensuite. The attention to detail was incredible, and they finished ahead of schedule. The team were friendly, tidy, and always willing to go the extra mile. Our new loft is absolutely beautiful.",
  },
  {
    id: 3,
    name: "Emma Richardson",
    location: "Kent",
    rating: 5,
    date: "October 2024",
    project: "Kitchen Renovation",
    text: "Fantastic experience from quote to completion. Our kitchen renovation is absolutely beautiful. The team worked cleanly and efficiently, minimising disruption to our daily life. They even helped with design ideas that really elevated the finished result.",
  },
  {
    id: 4,
    name: "David Clarke",
    location: "Essex",
    rating: 5,
    date: "September 2024",
    project: "Garage Conversion",
    text: "We chose OD Contractors for our garage conversion and couldn't be happier. They turned a cold, unused space into a warm, functional home office. True craftsmen who take pride in their work. The whole process was smooth from start to finish.",
  },
  {
    id: 5,
    name: "Lisa Parker",
    location: "Hertfordshire",
    rating: 5,
    date: "August 2024",
    project: "Full Renovation",
    text: "We bought a tired 1930s property and OD Contractors completely transformed it. New kitchen, bathrooms, rewire, replumb - the works! They managed the entire project brilliantly and the quality of finish is exceptional. Worth every penny.",
  },
  {
    id: 6,
    name: "Michael Brown",
    location: "Berkshire",
    rating: 5,
    date: "July 2024",
    project: "Two-Storey Extension",
    text: "Our two-storey extension was a big project and OD Contractors handled it perfectly. Great communication throughout, skilled tradespeople, and a beautiful end result. They dealt with all the planning and building regs too, making it stress-free for us.",
  },
  {
    id: 7,
    name: "Jennifer Wilson",
    location: "London",
    rating: 5,
    date: "June 2024",
    project: "Bathroom Installation",
    text: "Had two bathrooms completely refitted. The quality of tiling and finishing is superb. The team were respectful of our home and cleaned up thoroughly each day. Really pleased with the results and would definitely use again.",
  },
  {
    id: 8,
    name: "Robert Taylor",
    location: "Surrey",
    rating: 5,
    date: "May 2024",
    project: "New Build",
    text: "OD Contractors built our dream home from scratch. Their project management was excellent, keeping us updated with regular site meetings. The build quality is outstanding and they helped us navigate the entire process. Highly recommended.",
  },
];

export default function ReviewsPage() {
  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Customer Reviews
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h1>
            {/* [PLACEHOLDER] Update page description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Don't just take our word for it — hear from homeowners who've trusted us 
              with their building projects.
            </p>
            
            {/* Rating Summary */}
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-foreground font-semibold text-lg">
                {averageRating.toFixed(1)} out of 5
              </span>
              <span className="text-muted-foreground">
                based on {reviews.length} reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Single Column Reviews with Amber Border */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-card rounded-2xl border border-border p-8 md:p-10 border-l-4 border-l-primary"
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <div className="font-semibold text-foreground text-lg">{review.name}</div>
                    <div className="text-muted-foreground">
                      {review.location} — {review.project}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{review.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <PageCTA 
        title="Ready to Join Our Happy Clients?"
        description="Get in touch today for a free consultation and quote on your project."
      />
    </div>
  );
}
