import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@mmabdulhameed.com", "sales@mmabdulhameed.com"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 484 123 4567", "+91 484 765 4321"],
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Hameed Estate, Ashokapuram", "P B No:12, Alwaye", "Ernakulam District, India 683101"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday: 9AM - 6PM IST", "Email Support Available"],
    },
  ];

  const offices = [
    {
      region: "Head Office",
      address: "Hameed Estate\nAshokapuram\nP B No:12\nAlwaye, Ernakulam District\nIndia 683101",
      phone: "+91 484 123 4567",
      email: "info@mmabdulhameed.com",
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
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about our products or wholesale services? Our team is here to help you
              find the perfect essential oil solutions for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all border-border/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <Card className="border-border/50 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-serif font-bold mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground mb-6">
                    Fill out the form and we'll respond within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" placeholder="How can we help?" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Offices */}
            <div className="space-y-6 animate-fade-in-up">
              <Card className="border-border/50">
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8333333333335!2d76.35!3d10.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDA2JzAwLjAiTiA3NsKwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold">Our Office</h3>
                {offices.map((office, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="p-6">
                      <h4 className="font-serif font-semibold text-lg mb-2 text-primary">
                        {office.region}
                      </h4>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground whitespace-pre-line">{office.address}</p>
                        <p className="text-foreground">
                          <strong>Phone:</strong> {office.phone}
                        </p>
                        <p className="text-foreground">
                          <strong>Email:</strong> {office.email}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp/Chat CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="border-border/50 shadow-xl bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-12 text-center">
              <MessageCircle className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-serif font-bold mb-4">Prefer Instant Chat?</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Connect with us on WhatsApp or LinkedIn for quick responses to your trade inquiries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default">
                  Chat on WhatsApp
                </Button>
                <Button size="lg" variant="outline">
                  Connect on LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
