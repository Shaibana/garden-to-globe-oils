import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Leaf, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProductCardProps {
  name: string;
  botanicalName: string;
  origin: string;
  category: string;
  image: string;
  description?: string;
}

const ProductCard = ({ name, botanicalName, origin, category, image, description }: ProductCardProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Sent!",
      description: `Your inquiry about ${name} has been submitted. We'll get back to you soon.`,
    });
    setOpen(false);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 flex flex-col">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur">
            {category}
          </Badge>
        </div>
      </div>
      <CardContent className="pt-4 flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-serif font-semibold text-lg text-foreground">{name}</h3>
          <Leaf className="h-5 w-5 text-primary flex-shrink-0" />
        </div>
        <p className="text-sm italic text-muted-foreground mb-2">{botanicalName}</p>
        <p className="text-sm text-muted-foreground mb-3">Origin: {origin}</p>
        {description && (
          <p className="text-sm text-foreground/80 leading-relaxed border-l-2 border-primary/30 pl-3 py-1">
            {description}
          </p>
        )}
      </CardContent>
      <CardFooter className="pt-0">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Send className="h-4 w-4 mr-2" />
              Request Quote
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Request Quote for {name}</DialogTitle>
              <DialogDescription>
                Fill out this form and we'll get back to you with pricing and availability.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="inquiry-name">Your Name *</Label>
                <Input
                  id="inquiry-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inquiry-email">Email *</Label>
                <Input
                  id="inquiry-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@company.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inquiry-company">Company</Label>
                <Input
                  id="inquiry-company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company Name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inquiry-message">Message</Label>
                <Textarea
                  id="inquiry-message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Quantity needed, specific requirements, etc."
                  rows={3}
                />
              </div>
              <Button type="submit" className="w-full">
                Send Inquiry
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
