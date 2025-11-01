import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const Header = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="min-h-screen flex flex-col justify-center px-4 sm:px-8 hero-gradient text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Text Content */}
        <div className="flex flex-col animate-slide-in-left text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight gradient-text">
            Uche Munachiso<br />Oluwatimileyin
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
            <span className="glass-effect px-6 py-2 rounded-full font-medium tracking-wide transition-all hover:translate-y-[-5px] hover:shadow-lg hover:bg-white/20">
              Web Designer
            </span>
            <span className="glass-effect px-6 py-2 rounded-full font-medium tracking-wide transition-all hover:translate-y-[-5px] hover:shadow-lg hover:bg-white/20">
              Digital Creative
            </span>
            <span className="glass-effect px-6 py-2 rounded-full font-medium tracking-wide transition-all hover:translate-y-[-5px] hover:shadow-lg hover:bg-white/20">
              Frontend Developer
            </span>
          </div>
          
          <p className="text-lg sm:text-xl mb-8 max-w-2xl text-white/90 leading-relaxed">
            Creating captivating digital experiences through elegant design and clean code. Based in the digital realm, delivering worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              onClick={scrollToPortfolio}
              className="gradient-bg text-white hover:opacity-90 transition-all hover:translate-y-[-2px] shadow-lg hover:shadow-xl px-8 py-6 text-base font-semibold rounded-xl"
            >
              View My Work
            </Button>
            <Button 
              asChild
              variant="outline"
              className="glass-effect text-white border-white/30 hover:bg-white/20 hover:border-white/50 px-8 py-6 text-base font-semibold rounded-xl"
            >
              <a 
                href="https://1drv.ms/w/c/B7A595841EEAF79B/EVn55KbjaFZEobsTFGQQ3WoBMhrYA6a7KzL9lJNyTk0MPA" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View My Resume
              </a>
            </Button>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="flex justify-center items-center animate-slide-in-right order-1 lg:order-2">
          <img 
            src={profileImage} 
            alt="Uche Munachiso Oluwatimileyin" 
            className="w-[250px] sm:w-[350px] h-auto object-cover transition-all hover:scale-105"
          />
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce-slow"
        onClick={scrollToPortfolio}
      >
        <ArrowDown className="w-6 h-6 text-white" />
      </div>
    </header>
  );
};

export default Header;
