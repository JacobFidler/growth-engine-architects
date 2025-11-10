import logo from "@/assets/scalifying-logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="ScalifyingAI" className="h-10 w-auto" />
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ScalifyingAI. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Empowering B2B businesses with AI automation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
