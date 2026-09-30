import { Code, Globe, Database, Smartphone, Palette } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Application Development",
  },
  {
    icon: Globe,
    title: "Front-End Development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
  },
  {
    icon: Database,
    title: "APIs & Data Integration",
  },
  {
    icon: Palette,
    title: "UI / UX Implementation",
  },
];

const Services = () => {
  const count = services.length.toString().padStart(2, "0");

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="flex items-baseline justify-between mb-8 border-b border-border pb-4">
        <h2 className="font-display uppercase text-xl sm:text-2xl text-foreground">
          What I Build
        </h2>

        <span className="font-mono text-xs text-olive uppercase tracking-widest">
          {count} Areas
        </span>
      </div>

      <div className="divide-y divide-border border-t border-border">
        {services.map((service, index) => (
          <div
            key={index}
            className="group flex items-center gap-4 sm:gap-6 py-5 hover:bg-secondary/50 transition-colors px-2 -mx-2"
          >
            <span className="font-mono text-xs text-olive w-8 shrink-0">
              {(index + 1).toString().padStart(2, "0")}
            </span>

            <service.icon className="w-5 h-5 text-signal shrink-0" />

            <span className="text-base sm:text-lg font-medium text-foreground">
              {service.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
