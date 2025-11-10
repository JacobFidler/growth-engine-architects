import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
            <Calendar className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Your Custom AI Growth Blueprint
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a 15-minute strategy call to receive a personalized plan for scaling your business with AI automation. No commitment required.
          </p>
          <Button 
            size="lg" 
            className="text-base"
            onClick={() => window.open('https://calendly.com/scalifyingai', '_blank')}
          >
            Schedule Your Strategy Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
