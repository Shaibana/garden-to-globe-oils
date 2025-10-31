import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-distillation.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Essential oil distillation with lavender"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
              Certified Organic & Ethically Sourced
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
            Pure. Natural. <br />
            <span className="text-primary">Trusted Worldwide.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Wholesale essential oils sourced from nature's finest gardens — delivered across the globe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link to="/products">Explore Oils</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
              <Link to="/wholesale">Get a Quote</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">ISO</span>
              </div>
              <div>
                <p className="font-semibold text-sm">ISO Certified</p>
                <p className="text-xs text-muted-foreground">Quality Assured</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">GMP</span>
              </div>
              <div>
                <p className="font-semibold text-sm">GMP Compliant</p>
                <p className="text-xs text-muted-foreground">Manufacturing Excellence</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">100%</span>
              </div>
              <div>
                <p className="font-semibold text-sm">Pure & Natural</p>
                <p className="text-xs text-muted-foreground">GC/MS Tested</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
