import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import extensionImg from "@/assets/project-extension.jpg";
import loftImg from "@/assets/project-loft.jpg";
import kitchenImg from "@/assets/project-kitchen.jpg";
import newbuildImg from "@/assets/project-newbuild.jpg";

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
    title: "Designer Kitchen Renovation",
    category: "Kitchens",
    location: "Kent",
    image: kitchenImg,
  },
  {
    id: 4,
    title: "Contemporary New Build",
    category: "New Builds",
    location: "Essex",
    image: newbuildImg,
  },
];

export default function ProjectsPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Recent Projects
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/gallery">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to="/gallery"
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              <div className={`${index === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-video"} overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">{project.location}</p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                <ArrowRight className="w-5 h-5 text-primary-foreground" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
