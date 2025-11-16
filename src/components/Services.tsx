import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Workflow, Wrench, TrendingUp, Database } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: TrendingUp,
    title: "Automated Sales Pipeline Development",
    points: [
      "Deploy AI agents to scrape qualified leads and enrich contact data automatically",
      "Run personalized outreach + campaign testing to maximize response rates",
      "Manage positive replies + handoffs so your pipeline stays full without added headcount"
    ]
  },
  {
    icon: Workflow,
    title: "Workflow & Operational Streamlining",
    points: [
      "Replace repetitive manual tasks with custom AI workflows to free up time",
      "Automate data entry, task management, and cross-platform syncing (CRM, marketing, etc.)",
      "Create unified operating systems that eliminate bottlenecks and reduce human error"
    ]
  },
  {
    icon: Wrench,
    title: "Custom Technical Solution Architecture",
    points: [
      "Architect custom AI tools tailored to complex, unique business challenges",
      "Build solutions like aggregated research engines or automated data extraction systems",
      "Integrate automation into existing tools to expand capabilities + drive new outcomes"
    ]
  },
  {
    icon: CheckCircle2,
    title: "AI-Driven Marketing & Lead Generation",
    points: [
      "Build intelligent systems that target ideal buyer profiles with precision",
      "Automate marketing workflows to reduce CAC + increase inbound volume",
      "Move beyond keyword-based marketing to proactive, persona-driven prospecting"
    ]
  },
  {
    icon: Database,
    title: "Technology Stack Modernization",
    points: [
      "Upgrade outdated CRMs, databases, and workflows to support AI integration",
      "Consolidate fragmented tools into a clean, unified tech stack",
      "Enable faster decision-making with structured data + modern infrastructure"
    ]
  }
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(services.length).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setTimeout(() => {
                setVisibleCards(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 100);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            5 Key Areas Where We Help Businesses Grow
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI solutions designed to scale your operations and accelerate growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`transition-all duration-700 ${
                visibleCards[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <Card className="h-full border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift hover:shadow-lg group relative overflow-hidden bg-gradient-to-br from-card via-card to-primary/5">
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                <CardHeader className="relative z-10">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow group-hover:scale-110 duration-300">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <ul className="space-y-3">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
