import { Card } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="hero-gradient text-white py-16 sm:py-24 px-4 sm:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Let's Connect</h2>
        <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-12 max-w-2xl mx-auto">
          Interested in working together? I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Email Card */}
          <a 
            href="mailto:workwithmuna@gmail.com"
            className="block"
          >
            <Card className="glass-effect text-white border-white/20 hover:bg-white/15 hover:translate-y-[-5px] transition-all p-8 cursor-pointer group">
              <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Me</h3>
              <p className="text-white/80">workwithmuna@gmail.com</p>
            </Card>
          </a>
          
          {/* LinkedIn Card */}
          <a 
            href="https://www.linkedin.com/in/munachiso-uche-b93b97366"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="glass-effect text-white border-white/20 hover:bg-white/15 hover:translate-y-[-5px] transition-all p-8 cursor-pointer group">
              <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-white/80">Connect with me</p>
            </Card>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
