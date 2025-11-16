import { Card, CardContent } from "@/components/ui/card";
import jacobImage from "@/assets/jacob-fidler.png";
import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Meet Jacob Fidler
            </h2>
            <p className="text-lg text-primary font-semibold">
              Founder and CEO at ScalifyingAI
            </p>
          </div>

          <Card className={`border-2 border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="grid md:grid-cols-[300px,1fr] gap-8 items-start">
                <div className="mx-auto md:mx-0">
                  <div className="relative group/image">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 rounded-xl blur-xl group-hover/image:blur-2xl transition-all duration-300 opacity-0 group-hover/image:opacity-100" />
                    <img 
                      src={jacobImage} 
                      alt="Jacob Fidler - Founder and CEO" 
                      className="rounded-xl w-full max-w-[300px] shadow-2xl relative z-10 transition-transform duration-500 group-hover/image:scale-105 border-2 border-primary/20"
                    />
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    I'm a former B2B SaaS sales and business development professional, who helps companies scale smarter by pairing proven go-to-market strategy with practical, AI-driven workflows.
                  </p>
                  
                  <p className="text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    I've spent the last several years inside high-growth SaaS organizations—from early-stage startups building their first U.S. sales motion to established platforms serving global enterprise teams. In every role, I've been responsible for driving net-new revenue, building repeatable sales processes, and helping organizations operationalize growth.
                  </p>
                  
                  <p className="text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    That experience laid the foundation for what I do today. I work with founders, operators, and revenue teams to scale more efficiently by blending GTM strategy with applied AI—partnering on workflow automation, opportunity creation, and sales process design. My focus isn't on selling a tool, but on understanding the business, identifying bottlenecks, and implementing the right systems to unlock measurable growth.
                  </p>
                  
                  <p className="text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    At the core of my approach is the belief that technology should enhance—not replace—the human element. I help clients uncover their growth levers, streamline what slows them down, and implement systems that empower teams to do their best work.
                  </p>

                  <div className="pt-6 border-t border-border/50">
                    <h3 className="font-semibold text-foreground mb-4 text-lg">I bring:</h3>
                    <ul className="space-y-3">
                      {[
                        "Deep B2B sales + GTM experience",
                        "Firsthand understanding of SaaS growth mechanics",
                        "A practical, real-world approach to AI implementation",
                        "A process-driven, consultative mindset"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 group/item">
                          <div className="h-2 w-2 rounded-full bg-primary group-hover/item:scale-150 transition-transform duration-300" />
                          <span className="group-hover/item:text-foreground group-hover/item:translate-x-1 transition-all duration-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
