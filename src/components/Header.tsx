import { ArrowDown, ArrowRight, Instagram, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Header = () => {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/unknownpixels.self/",
      label: "Instagram",
    },
    {
      icon: Github,
      href: "https://github.com/Munachitimi",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/munachiso-uche-b93b97366",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:workwithmuna@gmail.com",
      label: "Email",
    },
  ];

  const specs = [
    { value: "10+", label: "Projects Built" },
    { value: "Web +", label: "Mobile" },
    { value: "CS", label: "Graduate" },
  ];

  return (
    <header className="min-h-screen flex flex-col justify-center px-4 sm:px-8 bg-background text-foreground relative py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-12 sm:mb-16">
          <span className="font-mono text-[11px] sm:text-xs tracking-widest text-olive uppercase">
            Munachi · Portfolio
          </span>

          <div className="flex gap-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="flex flex-col text-left order-2 lg:order-1">
            <span className="font-mono text-xs tracking-widest text-signal uppercase mb-3">
              Computer Science · Software Development
            </span>

            <h1 className="font-display uppercase text-4xl sm:text-6xl lg:text-7xl leading-[0.95] mb-6 text-foreground">
              Uche
              <br />
              Munachiso
            </h1>

            <p className="font-mono text-xs sm:text-sm mb-6 uppercase tracking-widest text-olive">
              Software Developer / Front-End Developer / Mobile Developer
            </p>

            <p className="text-sm sm:text-base mb-10 max-w-lg text-foreground/70 leading-relaxed">
              I’m a Computer Science graduate who builds web and mobile
              applications with React, TypeScript and modern development tools.
              I like building products that are useful, simple to use, and
              solve a real problem.
            </p>

            <div className="flex mb-10 border-t border-border">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className={`flex-1 py-4 ${
                    index !== 0
                      ? "border-l border-border pl-4 sm:pl-6"
                      : "pr-4 sm:pr-6"
                  }`}
                >
                  <div className="text-2xl sm:text-3xl font-display text-foreground mb-1">
                    {spec.value}
                  </div>

                  <div className="font-mono text-[10px] sm:text-[11px] text-olive uppercase tracking-wider leading-tight">
                    {spec.label}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToPortfolio}
              className="group inline-flex items-center gap-3 bg-foreground text-background px-6 py-4 w-fit font-mono text-xs uppercase tracking-widest hover:bg-signal transition-colors"
            >
              View Selected Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex flex-col items-center lg:items-end order-1 lg:order-2">
            <div className="relative frame w-full max-w-[320px]">
              <img
                src={profileImage}
                alt="Uche Munachiso Oluwatimileyin"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToPortfolio}
        aria-label="Scroll to portfolio"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-olive hover:text-signal transition-colors"
      >
        Scroll <ArrowDown className="w-3 h-3" />
      </button>
    </header>
  );
};

export default Header;
