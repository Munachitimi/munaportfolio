import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import UrbanImage from "@/assets/UrbanImage.png";
import fashionImage from "@/assets/fashion.png";
import cryptoImage from "@/assets/crypto.png";
import cusiaImage from "@/assets/cusia.png";
import dataImage from "@/assets/data.png";
import sbloomImage from "@/assets/sbloom.png";
import cameraImage from "@/assets/camera.png";

interface Project {
  title: string;
  category: string;
  description: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Urban",
    category: "React.js / Frontend Development / Web Development",
    description: "A modern real estate website built with React, designed to showcase properties for sale and rent in a sleek, minimalist interface. Featuring elegant typography, a refined green-and-charcoal color palette, and smooth page transitions for a premium browsing experience.",
    link: "https://munaurban.netlify.app/",
    image: UrbanImage,
  },
  {
    title: "Fashion Brand",
    category: "UI/UX + Front-End",
    description: "A responsive fashion e-commerce website. Emphasizing on luxury styling, product grid systems, and visual brand appeal.",
    link: "https://muna-fashion.netlify.app/",
    image: fashionImage,
  },
  {
    title: "Crypto Vault",
    category: "Web design / FrontEnd development",
    description: "A responsive Web3 landing page featuring basic wallet connect functionality. Designed to showcase decentralized content in a clean, interactive format.",
    link: "https://muna-web3.netlify.app/",
    image: cryptoImage,
  },
  {
    title: "La Cuisina",
    category: "Digital Creative / Web Design",
    description: "A modern, responsive website for a high-end restaurant, built to provide users with an elegant online experience. The site features an intuitive menu display, a reservation system, and seamless navigation optimized for mobile and desktop users.",
    link: "https://la-cusina-muna.netlify.app/",
    image: cusiaImage,
  },
  {
    title: "Bio Data",
    category: "Front-End / API integration",
    description: "A patient profile page using a real-world API. Displayed personal health records and information with a focus on clarity, layout structure, and usability.",
    link: "https://muna-patient.netlify.app/",
    image: dataImage,
  },
  {
    title: "Studio Bloom",
    category: "Web Design / Blog",
    description: "A floristry studio website with elegant aesthetics, featuring a sophisticated online shop for bouquets, arrangements, and botanical workshops.",
    link: "https://studio-bloom.netlify.app/",
    image: sbloomImage,
  },
  {
    title: "[Camera]",
    category: "UI design / Web Design",
    description: "Created a sleek online camera store with product filtering, shopping cart UI, and image previews. Focused on a clean layout and intuitive user journey.",
    link: "https://camera-store-muna.netlify.app/",
    image: cameraImage,
  },
  {
    title: "Blog",
    category: "Web Design / React.js",
    description: "(ongoing project) Personal blog platform built with React.js, featuring a clean design, easy navigation, and a focus on content readability. Includes a dynamic post listing and responsive layout.",
    link: "https://munablog.netlify.app/",
    image: crypto, // Using crypto as placeholder for blog
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-1/2 after:h-1 after:gradient-bg after:rounded">
          My Work
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mt-8">
          A collection of projects showcasing my expertise in web design, frontend development, and digital creativity.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="group hover:translate-y-[-8px] transition-all duration-300 hover:shadow-2xl border border-border/50 flex flex-col h-full overflow-hidden"
          >
            {/* Project Image */}
            <div className="h-56 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">
                {project.title}
              </CardTitle>
              <CardDescription className="text-sm font-medium" style={{ color: 'hsl(351 100% 71%)' }}>
                {project.category}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="flex-grow flex flex-col justify-between">
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              
              <Button 
                asChild
                className="gradient-bg text-white hover:opacity-90 transition-all hover:translate-y-[-2px] shadow-md w-full"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
