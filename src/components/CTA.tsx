import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const CTA = () => {
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

    const element = document.getElementById('cta');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta" className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-primary to-primary/70 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-float">
            <Calendar className="h-10 w-10 text-primary-foreground" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Free Strategy Session</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Get Your Custom AI Growth Blueprint
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Schedule a 15-minute strategy call to receive a personalized plan for scaling your business with AI automation. No commitment required.
          </p>

          {/* Benefits list */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
            {[
              "Identify Growth Bottlenecks",
              "Custom AI Solutions",
              "Actionable Next Steps"
            ].map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center justify-center gap-2 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          <Button 
            size="lg" 
            className="text-base px-8 py-6 h-auto group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://calendly.com/jacob-fidler-scalifyingai/30min-1', '_blank')}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Schedule Your Strategy Call
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </Button>

          <p className="mt-6 text-sm text-muted-foreground">
            ✓ 15-minute call · ✓ Zero pressure · ✓ Custom roadmap
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
