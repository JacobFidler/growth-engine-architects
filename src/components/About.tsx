import { Card, CardContent } from "@/components/ui/card";
import jacobImage from "@/assets/jacob-fidler.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Jacob Fidler
            </h2>
            <p className="text-lg text-primary font-semibold">
              Founder and CEO at ScalifyingAI
            </p>
          </div>

          <Card className="border-border">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-[300px,1fr] gap-8 items-start">
                <div className="mx-auto md:mx-0">
                  <img 
                    src={jacobImage} 
                    alt="Jacob Fidler" 
                    className="rounded-lg w-full max-w-[300px] shadow-lg"
                  />
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a former B2B SaaS sales and business development professional, who helps companies scale smarter by pairing proven go-to-market strategy with practical, AI-driven workflows.
                  </p>
                  
                  <p>
                    I've spent the last several years inside high-growth SaaS organizations—from early-stage startups building their first U.S. sales motion to established platforms serving global enterprise teams. In every role, I've been responsible for driving net-new revenue, building repeatable sales processes, and helping organizations operationalize growth.
                  </p>
                  
                  <p>
                    That experience laid the foundation for what I do today. I work with founders, operators, and revenue teams to scale more efficiently by blending GTM strategy with applied AI—partnering on workflow automation, opportunity creation, and sales process design. My focus isn't on selling a tool, but on understanding the business, identifying bottlenecks, and implementing the right systems to unlock measurable growth.
                  </p>
                  
                  <p>
                    At the core of my approach is the belief that technology should enhance—not replace—the human element. I help clients uncover their growth levers, streamline what slows them down, and implement systems that empower teams to do their best work.
                  </p>

                  <div className="pt-4">
                    <h3 className="font-semibold text-foreground mb-3">I bring:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>Deep B2B sales + GTM experience</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>Firsthand understanding of SaaS growth mechanics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>A practical, real-world approach to AI implementation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>A process-driven, consultative mindset</span>
                      </li>
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
