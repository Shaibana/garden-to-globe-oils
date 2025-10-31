import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Package, Truck, Globe, Tag, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Wholesale = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request submitted! We'll contact you within 24 hours.");
  };

  const benefits = [
    {
      icon: Package,
      title: "Flexible MOQ",
      description: "Minimum order quantities starting from just 1kg for most products.",
    },
    {
      icon: Truck,
      title: "Global Shipping",
      description: "Reliable worldwide delivery with full tracking and insurance.",
    },
    {
      icon: Tag,
      title: "Competitive Pricing",
      description: "Volume-based discounts and special rates for regular clients.",
    },
    {
      icon: Globe,
      title: "Custom Solutions",
      description: "Private labeling, custom blending, and tailored packaging options.",
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
              Wholesale <span className="text-primary">Partnerships</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join thousands of businesses worldwide who trust PureEssence for their bulk essential oil
              needs. Get competitive pricing and personalized service.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all border-border/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-xl mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl font-serif font-bold mb-4">Request a Bulk Quote</h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and our team will respond within 24 hours with a custom quote.
              </p>
            </div>

            <Card className="border-border/50 shadow-xl animate-fade-in-up">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input id="company" placeholder="Your company name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">Contact Person *</Label>
                      <Input id="name" placeholder="Your full name" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input id="country" placeholder="Shipping destination" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business">Business Type *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="manufacturer">Cosmetic Manufacturer</SelectItem>
                          <SelectItem value="brand">Wellness Brand</SelectItem>
                          <SelectItem value="spa">Spa/Wellness Center</SelectItem>
                          <SelectItem value="retailer">Retailer</SelectItem>
                          <SelectItem value="distributor">Distributor</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="products">Products of Interest *</Label>
                    <Input
                      id="products"
                      placeholder="e.g., Lavender Essential Oil, Sweet Almond Carrier Oil"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Estimated Quantity *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select quantity range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-5">1-5 kg</SelectItem>
                          <SelectItem value="5-25">5-25 kg</SelectItem>
                          <SelectItem value="25-100">25-100 kg</SelectItem>
                          <SelectItem value="100-500">100-500 kg</SelectItem>
                          <SelectItem value="500+">500+ kg</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="frequency">Order Frequency</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Expected frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="one-time">One-time order</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="quarterly">Quarterly</SelectItem>
                          <SelectItem value="annual">Annually</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Requirements</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about custom labeling needs, specific certifications required, delivery timeline, or any other special requirements..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground">Simple steps to start your wholesale partnership</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Submit Request", desc: "Fill out our quote form with your requirements" },
                { step: "02", title: "Get Quote", desc: "Receive custom pricing within 24 hours" },
                { step: "03", title: "Review & Approve", desc: "Review terms, samples available upon request" },
                { step: "04", title: "Delivery", desc: "Fast, secure shipping to your destination" },
              ].map((item, index) => (
                <div key={index} className="text-center relative animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
                  )}
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-serif font-bold relative z-10">
                      {item.step}
                    </div>
                    <CheckCircle2 className="absolute -bottom-1 -right-1 h-6 w-6 text-primary bg-background rounded-full" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wholesale;
