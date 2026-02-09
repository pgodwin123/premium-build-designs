import { Shield, Clock, Award, Phone } from "lucide-react";

const trustItems = [
  {
    icon: Clock,
    title: "25+ Years",
    description: "Of industry experience",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete peace of mind",
  },
  {
    icon: Award,
    title: "Master Craftsmen",
    description: "Guild certified professionals",
  },
  {
    icon: Phone,
    title: "Free Quotes",
    description: "No obligation estimates",
  },
];

export default function TrustBar() {
  return (
    <section className="py-12 md:py-16 bg-secondary/30 border-y border-border/50">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="flex items-center gap-4 justify-center md:justify-start"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">{item.title}</div>
                <div className="text-sm text-muted-foreground">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
