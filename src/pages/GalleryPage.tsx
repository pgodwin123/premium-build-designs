import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import extensionImg from "@/assets/project-extension.jpg";
import loftImg from "@/assets/project-loft.jpg";
import newbuildImg from "@/assets/project-newbuild.jpg";
import renovationImg from "@/assets/project-renovation.jpg";
import kitchenImg from "@/assets/project-kitchen.jpg";
import garageImg from "@/assets/project-garage.jpg";
import heroImg from "@/assets/hero-construction.jpg";

const categories = [
  "All",
  "Extensions",
  "Loft Conversions",
  "New Builds",
  "Renovations",
  "Kitchens",
  "Garage Conversions",
];

const projects = [
  {
    id: 1,
    title: "Modern Rear Extension",
    category: "Extensions",
    location: "Surrey",
    image: extensionImg,
  },
  {
    id: 2,
    title: "Luxury Loft Conversion",
    category: "Loft Conversions",
    location: "London",
    image: loftImg,
  },
  {
    id: 3,
    title: "Contemporary New Build",
    category: "New Builds",
    location: "Essex",
    image: newbuildImg,
  },
  {
    id: 4,
    title: "Period Property Renovation",
    category: "Renovations",
    location: "Kent",
    image: renovationImg,
  },
  {
    id: 5,
    title: "Designer Kitchen Installation",
    category: "Kitchens",
    location: "Hertfordshire",
    image: kitchenImg,
  },
  {
    id: 6,
    title: "Garage to Home Office",
    category: "Garage Conversions",
    location: "Berkshire",
    image: garageImg,
  },
  {
    id: 7,
    title: "Two-Storey Extension",
    category: "Extensions",
    location: "London",
    image: heroImg,
  },
  {
    id: 8,
    title: "Dormer Loft Conversion",
    category: "Loft Conversions",
    location: "Surrey",
    image: loftImg,
  },
  {
    id: 9,
    title: "Complete Home Refurbishment",
    category: "Renovations",
    location: "Kent",
    image: renovationImg,
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Project Gallery
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Browse our portfolio of completed projects. Each one represents our commitment 
              to quality, craftsmanship, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border/50 sticky top-16 md:top-20 bg-background/95 backdrop-blur-lg z-40">
        <div className="container-custom">
          <div className="flex gap-2 overflow-x-auto pb-2 -mb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 card-hover"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.location}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Like What You See?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Let us bring your vision to life. Contact us for a free quote on your project.
          </p>
          <Button asChild size="lg" className="amber-gradient hover:opacity-90">
            <Link to="/contact">
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
