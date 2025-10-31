import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Leaf, FileCheck, Microscope, Globe } from "lucide-react";
import qualityLab from "@/assets/quality-lab.jpg";

const Quality = () => {
  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management Systems" },
    { name: "GMP Certified", description: "Good Manufacturing Practice" },
    { name: "USDA Organic", description: "Organic Certification" },
    { name: "ECOCERT", description: "Organic and Natural Cosmetics" },
    { name: "Kosher Certified", description: "Kosher Food Standards" },
    { name: "Halal Certified", description: "Halal Compliance" },
  ];

  const testingProcedures = [
    {
      icon: Microscope,
      title: "GC/MS Analysis",
      description: "Gas Chromatography-Mass Spectrometry testing verifies the chemical composition and purity of every batch.",
    },
    {
      icon: Shield,
      title: "Purity Testing",
      description: "Comprehensive tests for adulterants, synthetic additives, and contaminants to ensure 100% natural oils.",
    },
    {
      icon: FileCheck,
      title: "Heavy Metals Testing",
      description: "Analysis for lead, arsenic, mercury, and cadmium to meet international safety standards.",
    },
    {
      icon: Leaf,
      title: "Pesticide Screening",
      description: "Testing for over 400 pesticide residues to ensure organic integrity and safety.",
    },
    {
      icon: Globe,
      title: "Microbiological Testing",
      description: "Screening for bacteria, yeast, mold, and pathogens to guarantee product safety.",
    },
    {
      icon: Award,
      title: "Organoleptic Evaluation",
      description: "Sensory testing by trained specialists to assess color, aroma, and consistency.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Quality & <span className="text-primary">Certifications</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our commitment to excellence is backed by rigorous testing, international certifications,
              and complete transparency in every step of our process.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recognized by leading international organizations for quality and safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all border-border/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-lg mb-1">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl font-serif font-bold">Rigorous Testing Standards</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every batch of essential oil undergoes comprehensive testing in our state-of-the-art
                laboratories and independent third-party facilities. We provide complete documentation
                including Certificate of Analysis (COA), MSDS, and GC/MS reports for full transparency.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    100% Tested
                  </Badge>
                  <span className="text-sm text-muted-foreground">Every single batch</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    Third-Party Verified
                  </Badge>
                  <span className="text-sm text-muted-foreground">Independent validation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    Full Documentation
                  </Badge>
                  <span className="text-sm text-muted-foreground">Complete traceability</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <img
                src={qualityLab}
                alt="Quality control laboratory"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testingProcedures.map((test, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all border-border/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <test.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-xl mb-2">{test.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{test.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl font-serif font-bold mb-4">Sustainable Practices</h2>
              <p className="text-xl text-muted-foreground">
                Environmental responsibility is at the heart of everything we do
              </p>
            </div>

            <div className="space-y-8">
              <Card className="border-border/50 animate-fade-in-up">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Leaf className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-xl mb-2">Ethical Sourcing</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We partner exclusively with farms that practice sustainable agriculture, fair labor
                        standards, and responsible harvesting methods. Our direct relationships ensure farmers
                        receive fair compensation and communities benefit from our business.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 animate-fade-in-up">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-xl mb-2">Environmental Stewardship</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        From carbon-neutral shipping options to recyclable packaging, we continuously work to
                        minimize our environmental impact. Our distillation partners use renewable energy and
                        water conservation practices wherever possible.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 animate-fade-in-up">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-xl mb-2">Traceability & Transparency</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Every bottle can be traced back to its source farm. We maintain complete documentation
                        of our supply chain, from seed to bottle, ensuring you know exactly where your oils
                        come from and how they were produced.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quality;
