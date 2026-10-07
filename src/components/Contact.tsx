import { Card } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-film text-film-foreground py-16 sm:py-24 px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">

        <h2 className="font-display uppercase text-3xl sm:text-5xl mt-3 mb-6">
          Let’s Work Together
        </h2>

        <p className="text-base sm:text-xl text-film-foreground/70 leading-relaxed mb-12 max-w-2xl mx-auto">
          I’m open to software development opportunities, freelance work, and
          projects where I can build useful products and keep learning.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a href="mailto:workwithmuna@gmail.com" className="block">
            <Card className="bg-film-foreground/5 text-film-foreground border-film-foreground/20 hover:border-signal hover:-translate-y-1 transition-all p-8 cursor-pointer group rounded-none">
              <div className="w-12 h-12 border border-signal text-signal flex items-center justify-center mx-auto mb-4 group-hover:bg-signal group-hover:text-film transition-colors">
                <Mail className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                Email Me
              </h3>

              <p className="text-film-foreground/60 text-sm">
                workwithmuna@gmail.com
              </p>
            </Card>
          </a>

          <a
            href="https://www.linkedin.com/in/munachiso-uche-b93b97366"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="bg-film-foreground/5 text-film-foreground border-film-foreground/20 hover:border-signal hover:-translate-y-1 transition-all p-8 cursor-pointer group rounded-none">
              <div className="w-12 h-12 border border-signal text-signal flex items-center justify-center mx-auto mb-4 group-hover:bg-signal group-hover:text-film transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                LinkedIn
              </h3>

              <p className="text-film-foreground/60 text-sm">
                Connect with me
              </p>
            </Card>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
