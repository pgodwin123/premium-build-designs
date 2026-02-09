import { useState } from "react";
import PageCTA from "@/components/shared/PageCTA";
import extensionImg from "@/assets/project-extension.jpg";
import loftImg from "@/assets/project-loft.jpg";
import newbuildImg from "@/assets/project-newbuild.jpg";
import renovationImg from "@/assets/project-renovation.jpg";
import kitchenImg from "@/assets/project-kitchen.jpg";
import garageImg from "@/assets/project-garage.jpg";
import heroImg from "@/assets/hero-construction.jpg";
import heroExtImg from "@/assets/hero-extension.jpg";

// [PLACEHOLDER] Update categories
const categories = [
  "All",
  "Extensions",
  "Loft Conversions",
  "New Builds",
  "Renovations",
  "Kitchens",
  "Garage Conversions",
];

// [PLACEHOLDER] Update projects list - heights create masonry effect
const projects = [
  {
    id: 1,
    title: "Modern Rear Extension",
    category: "Extensions",
    location: "Surrey",
    image: extensionImg,
    tall: false,
  },
  {
    id: 2,
    title: "Luxury Loft Conversion",
    category: "Loft Conversions",
    location: "London",
    image: loftImg,
    tall: true,
  },
  {
    id: 3,
    title: "Contemporary New Build",
    category: "New Builds",
    location: "Essex",
    image: newbuildImg,
    tall: false,
  },
  {
    id: 4,
    title: "Period Property Renovation",
    category: "Renovations",
    location: "Kent",
    image: renovationImg,
    tall: true,
  },
  {
    id: 5,
    title: "Designer Kitchen Installation",
    category: "Kitchens",
    location: "Hertfordshire",
    image: kitchenImg,
    tall: false,
  },
  {
    id: 6,
    title: "Garage to Home Office",
    category: "Garage Conversions",
    location: "Berkshire",
    image: garageImg,
    tall: false,
  },
  {
    id: 7,
    title: "Two-Storey Extension",
    category: "Extensions",
    location: "London",
    image: heroImg,
    tall: true,
  },
  {
    id: 8,
    title: "Dormer Loft Conversion",
    category: "Loft Conversions",
    location: "Surrey",
    image: loftImg,
    tall: false,
  },
  {
    id: 9,
    title: "Complete Home Refurbishment",
    category: "Renovations",
    location: "Kent",
    image: renovationImg,
    tall: false,
  },
  {
    id: 10,
    title: "Wraparound Extension",
    category: "Extensions",
    location: "Essex",
    image: heroExtImg,
    tall: true,
  },
  {
    id: 11,
    title: "Bespoke Kitchen Design",
    category: "Kitchens",
    location: "London",
    image: kitchenImg,
    tall: false,
  },
  {
    id: 12,
    title: "Detached New Build Home",
    category: "New Builds",
    location: "Surrey",
    image: newbuildImg,
    tall: true,
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
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Project Gallery
            </h1>
            {/* [PLACEHOLDER] Update page description */}
            <p className="text-lg md:text-xl text-muted-foreground">
              Browse our portfolio of completed projects. Each one represents our commitment 
              to quality, craftsmanship, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border sticky top-16 md:top-20 bg-background z-40">
        <div className="container-custom">
          <div className="flex gap-2 overflow-x-auto pb-2 -mb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
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

      {/* Masonry Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl bg-card"
              >
                <div className={`overflow-hidden ${project.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="text-primary text-xs font-medium uppercase tracking-wider block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.location}</p>
                  </div>
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
      <PageCTA 
        title="Like What You See?"
        description="Let us bring your vision to life. Contact us for a free quote on your project."
      />
    </div>
  );
}
