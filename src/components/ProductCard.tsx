import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf } from "lucide-react";

interface ProductCardProps {
  name: string;
  botanicalName: string;
  origin: string;
  category: string;
  image: string;
  description?: string;
}

const ProductCard = ({ name, botanicalName, origin, category, image, description }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50">
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
      <CardContent className="pt-4">
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
    </Card>
  );
};

export default ProductCard;
