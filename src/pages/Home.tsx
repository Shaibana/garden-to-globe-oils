import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Globe, Shield, Award, Users, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import lavenderField from "@/assets/lavender-field.jpg";
import productsImage from "@/assets/essential-oils-product.jpg";
import essentialOilsCategory from "@/assets/essential-oils-category.jpg";
import carrierOilsCategory from "@/assets/carrier-oils-category.jpg";
import aromatherapyBlendsCategory from "@/assets/aromatherapy-blends-category.jpg";
import naturalExtractsCategory from "@/assets/natural-extracts-category.jpg";
const Home = () => {
  const features = [{
    icon: Leaf,
    title: "100% Pure & Natural",
    description: "All our oils are sourced directly from nature with no synthetic additives."
  }, {
    icon: Shield,
    title: "Quality Certified",
    description: "ISO, GMP certified with full GC/MS testing reports for every batch."
  }, {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients across 50+ countries with reliable worldwide shipping."
  }, {
    icon: Award,
    title: "Ethical Sourcing",
    description: "Fair trade practices supporting sustainable farming communities."
  }];
  const stats = [{
    number: "500+",
    label: "Premium Products"
  }, {
    number: "50+",
    label: "Countries Served"
  }, {
    number: "10,000+",
    label: "Happy Clients"
  }, {
    number: "90",
    label: "Years Experience"
  }];
  return <div className="min-h-screen">
      <Navigation />
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Why Choose PureEssence?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for premium wholesale essential oils
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => <Card key={index} className="text-center hover:shadow-lg transition-shadow border-border/50 animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <img src={lavenderField} alt="Sustainable lavender farming" className="rounded-lg shadow-2xl w-full" />
            </div>
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-serif font-bold">
                From Nature to Your Business
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">For almost a century, our brand has been at the forefront of the essential oils industry, connecting sustainable farms with businesses worldwide. Our commitment to purity, quality, and ethical practices has made us the preferred supplier for leading wellness brands, Perfume industries, cosmetic manufacturers, and spa retailers globally.</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every drop of oil we supply undergoes rigorous testing and quality control, ensuring
                you receive only the finest botanical extracts nature has to offer.
              </p>
              <Button size="lg" asChild>
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => <div key={index} className="animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="text-5xl md:text-6xl font-serif font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Product Range</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our extensive collection of pure essential oils, carrier oils, and aromatherapy blends
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[{
            name: "Essential Oils",
            image: essentialOilsCategory
          }, {
            name: "Carrier Oils",
            image: carrierOilsCategory
          }, {
            name: "Aromatherapy Blends",
            image: aromatherapyBlendsCategory
          }, {
            name: "Natural Extracts",
            image: naturalExtractsCategory
          }].map((category, index) => <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-border/50">
                  <CardContent className="pt-6">
                    <img src={category.image} alt={category.name} className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-500 group-hover:scale-105" />
                    <h3 className="font-serif font-semibold text-xl mb-2 text-center">{category.name}</h3>
                    <p className="text-sm text-center text-muted-foreground">
                      Premium quality, bulk available
                    </p>
                  </CardContent>
                </Card>)}
          </div>
          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-muted/20">
        <div className="container mx-auto px-4">
          <Card className="border-border/50 shadow-xl">
            <CardContent className="p-12 text-center">
              <Users className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-serif font-bold mb-4">Ready to Partner With Us?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of businesses worldwide who trust PureEssence for their essential oil needs.
                Get a custom quote for your bulk requirements today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/wholesale">Request Bulk Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Home;