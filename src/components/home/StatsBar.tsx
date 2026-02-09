import { useEffect, useState, useRef } from "react";

// [PLACEHOLDER] Update stats values
const stats = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 15, suffix: "+", label: "Expert Team Members" },
];

function AnimatedCounter({ 
  target, 
  suffix, 
  inView 
}: { 
  target: number; 
  suffix: string; 
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!inView) return;
    
    const duration = 2000;
    const steps = 60;
    const stepValue = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [target, inView]);
  
  return (
    <span className="text-4xl md:text-5xl font-bold text-primary">
      {count}{suffix}
    </span>
  );
}

export default function StatsBar() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-20 border-y border-border bg-card">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <AnimatedCounter 
                target={stat.value} 
                suffix={stat.suffix} 
                inView={inView}
              />
              <p className="text-muted-foreground mt-2 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
