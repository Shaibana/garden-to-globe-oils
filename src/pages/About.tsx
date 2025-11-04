import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Globe, Award } from "lucide-react";
import lavenderField from "@/assets/lavender-field.jpg";
import qualityLab from "@/assets/quality-lab.jpg";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We work exclusively with farms that practice regenerative agriculture and sustainable harvesting methods.",
    },
    {
      icon: Heart,
      title: "Ethical Sourcing",
      description: "Fair trade partnerships that support farming communities and preserve traditional knowledge.",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Meeting international quality standards while respecting local ecosystems and cultures.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Uncompromising commitment to quality in every aspect of our operations.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Rooted in Nature, <br />
              <span className="text-primary">Trusted by the World</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For over 25 years, PureEssence has been connecting the world's finest botanical sources
              with businesses that value purity, quality, and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl font-serif font-bold">Our Story</h2>
              <h3 className="text-2xl font-serif font-semibold text-primary">M/s. M. M. Abdul Hameed & Sons</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                M/s. M. M. Abdul Hameed & Sons is a <strong>Registered Partnership Firm</strong> established by the Managing Director, Directors, and Shareholders of the erstwhile <strong>M/s. Mackar Pillay & Sons (P) Ltd</strong>, a pioneering enterprise incorporated in <strong>1935</strong>. Following the voluntary liquidation of the earlier company—undertaken to overcome political challenges surrounding the closure of its cashew processing unit—the partners continued their legacy through the formation of M/s. M. M. Abdul Hameed & Sons.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The present partners of the firm are <strong>Mr. M. A. Mohammed</strong> and <strong>Mr. Ameen Mohammed</strong>, distinguished by their strong academic backgrounds — Mr. M. A. Mohammed holds a <strong>Postgraduate degree in Chemistry</strong>, while Mr. Ameen Mohammed is a <strong>Rank Holder in Law</strong>. Mr. M. A. Mohammed has been an integral part of the firm since its inception in <strong>1971</strong>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From its very beginning, the firm has been actively engaged in the <strong>export of Essential and Aromatic Oils</strong>, while also maintaining long-standing wholesale partnerships with reputed Indian companies such as <strong>Glaxo, Roche, and Hindustan Lever</strong>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the decades, the firm has earned a <strong>sterling reputation</strong> for integrity, consistency, and uncompromising quality — both in domestic and international markets. Its dedication to excellence was recognized when it was honored as the <strong>Top Exporter of Essential and Aromatic Oils</strong> in <strong>1976</strong>, and again in <strong>1986</strong> when the <strong>Ministry of Commerce, Government of India</strong>, acknowledged the company's <strong>steady improvement in quality</strong> and its record of <strong>zero quality claims</strong> from overseas clients.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, M/s. M. M. Abdul Hameed & Sons continues to uphold its tradition of trust, quality, and professionalism, serving customers worldwide with the finest essential and aromatic oils.
              </p>
            </div>
            <div className="animate-fade-in-up">
              <img
                src={lavenderField}
                alt="Our sustainable lavender farms"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Principles that guide every decision we make
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all border-border/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-xl mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in-up">
              <img
                src={qualityLab}
                alt="Our quality control laboratory"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6 animate-fade-in-up">
              <h2 className="text-4xl font-serif font-bold">Uncompromising Quality</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our state-of-the-art quality control facilities employ the latest testing
                technologies to ensure every batch meets our stringent purity standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">GC/MS Testing</h4>
                    <p className="text-muted-foreground">
                      Gas Chromatography-Mass Spectrometry analysis for every batch
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Third-Party Verification</h4>
                    <p className="text-muted-foreground">
                      Independent laboratory validation and certification
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Complete Traceability</h4>
                    <p className="text-muted-foreground">
                      From farm to bottle, every step documented and verified
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl font-serif font-bold mb-6">Our Global Team</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With offices in North America, Europe, and Asia, our multilingual team of essential oil
              experts, quality specialists, and sourcing professionals work tirelessly to ensure you
              receive the best service and products. Combined, our team brings over 300 years of
              industry experience to serve your business needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="border-border/50">
                <CardContent className="pt-8 text-center">
                  <div className="text-4xl font-serif font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Expert Team Members</p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="pt-8 text-center">
                  <div className="text-4xl font-serif font-bold text-primary mb-2">12</div>
                  <p className="text-muted-foreground">Languages Spoken</p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="pt-8 text-center">
                  <div className="text-4xl font-serif font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground">Customer Support</p>
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

export default About;
