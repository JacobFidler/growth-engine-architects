import logo from "@/assets/scalifying-logo.png";
import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted/50 border-t border-border/50 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3 group cursor-pointer">
              <img 
                src={logo} 
                alt="ScalifyingAI" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-110" 
              />
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
              Empowering B2B businesses with AI automation and intelligent growth systems
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/jacob-fidler-29b86666/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:jacob@scalifyingai.com"
                className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="tel:817-913-8509"
                className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground font-medium">
                © {currentYear} ScalifyingAI. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Built with AI-powered precision
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
