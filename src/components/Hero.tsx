import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/scalifying-logo.png";

const Hero = () => {
  return (
    <section className="relative bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <img 
            src={logo} 
            alt="ScalifyingAI Logo" 
            className="h-24 md:h-32 w-auto mb-8"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Scale Your B2B Business with <span className="text-primary">AI-Powered</span> Systems
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            We partner with high-growth, Tech-Enabled B2B Service Companies to engineer complete client acquisition and operational systems. From automated lead generation to technical solution architecture—we build the AI-powered engine that scales your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-base"
              onClick={() => window.open('https://calendly.com/scalifyingai', '_blank')}
            >
              Schedule Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-base"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
