import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import urbanImage from "@/assets/urban.png";
import munaOriginalsImage from "@/assets/munaoriginals.png";
import cryptoImage from "@/assets/crypto.png";
import cusiaImage from "@/assets/cusia.png";
import dataImage from "@/assets/data.png";
import sbloomImage from "@/assets/sbloom.png";
import cameraImage from "@/assets/camera.png";
import FrameCorners from "./FrameCorners";

interface Project {
  title: string;
  category: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Urban",
    category: "React.js / Frontend",
    description:
      "Real estate listing interface built with React. The site organizes property information for browsing and separates listings for sale and rent.",
    link: "https://munaurban.netlify.app/",
    image: urbanImage,
    tags: ["React", "Real Estate"],
  },
  {
    title: "Muna Originals",
    category: "React.js / E-Commerce",
    description:
      "Fashion e-commerce interface focused on product browsing, responsive layouts, and a consistent visual system across the storefront.",
    link: "https://muna-fashion.netlify.app/",
    image: munaOriginalsImage,
    tags: ["React", "E-Commerce"],
  },
  {
    title: "Crypto Vault",
    category: "Web3 / Frontend",
    description:
      "Web3 landing page with wallet connection functionality and a focused interface for presenting a crypto product.",
    link: "https://muna-web3.netlify.app/",
    image: cryptoImage,
    tags: ["Web3", "Wallet Connect"],
  },
  {
    title: "La Cuisina",
    category: "Web / UI",
    description:
      "Restaurant website designed around the menu, brand presentation, and an online reservation flow.",
    link: "https://la-cusina-muna.netlify.app/",
    image: cusiaImage,
    tags: ["UI", "UX"],
  },
  {
    title: "Bio Data",
    category: "React.js / API",
    description:
      "Patient profile interface that consumes a real-world API to display structured healthcare information.",
    link: "https://muna-patient.netlify.app/",
    image: dataImage,
    tags: ["API", "Dashboard", "Healthcare"],
  },
  {
    title: "Studio Bloom",
    category: "React.js / E-Commerce",
    description:
      "Floristry storefront with product browsing and content sections built around an online shopping experience.",
    link: "https://studio-bloom.netlify.app/",
    image: sbloomImage,
    tags: ["E-Commerce", "React"],
  },
  {
    title: "[Camera]",
    category: "React.js / E-Commerce",
    description:
      "Camera store interface with product filtering and a responsive shopping layout.",
    link: "https://camera-store-muna.netlify.app/",
    image: cameraImage,
    tags: ["React", "Filtering", "Shopping"],
  },
  {
    title: "Blog",
    category: "React.js / Personal",
    description:
      "Personal blog built with React with a focus on readable content, responsive layouts, and simple navigation.",
    link: "https://munablog.netlify.app/",
    image: "",
    tags: ["React", "Blog"],
  },
];

const categories = [
  "All",
  "React.js",
  "E-Commerce",
  "Web3",
  "Healthcare",
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category
              .toLowerCase()
              .includes(activeCategory.toLowerCase()) ||
            project.tags.some((tag) =>
              tag.toLowerCase().includes(activeCategory.toLowerCase())
            )
        );

  return (
    <section
      id="portfolio"
      className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-4 border-b border-border pb-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-signal">
            Selected Work
          </span>

          <h2 className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl text-foreground mt-2">
            Projects
          </h2>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider border transition-colors ${
                activeCategory === category
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-olive hover:border-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <p className="font-mono text-xs text-olive uppercase tracking-widest mb-10">
        {filteredProjects.length.toString().padStart(2, "0")} Projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative frame bg-card hover:border-foreground transition-colors"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-muted border-b border-border">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-olive font-mono text-xs uppercase tracking-widest"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, hsl(var(--border)) 0, hsl(var(--border)) 1px, transparent 1px, transparent 10px)",
                  }}
                >
                  No Preview
                </div>
              )}

              <FrameCorners
                className="text-signal opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                size={18}
              />

              <span className="absolute top-3 left-3 font-mono text-[10px] text-background bg-foreground/85 px-2 py-1 uppercase tracking-widest">
                {project.category}
              </span>
            </div>

            <div className="p-5">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-signal transition-colors">
                  {project.title}
                </h3>

                <div className="w-8 h-8 border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <p className="text-sm text-foreground/60 line-clamp-3">
                {project.description}
              </p>

              <div className="flex gap-2 mt-4 flex-wrap">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 font-mono text-[10px] text-olive border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
