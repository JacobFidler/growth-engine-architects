import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Workflow, Wrench, TrendingUp, Database } from "lucide-react";

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
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            5 Key Areas Where We Help Businesses Grow
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI solutions designed to scale your operations and accelerate growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
