import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { naturalExtracts } from "@/data/products";

const NaturalExtracts = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = naturalExtracts.filter((product) => {
    return product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           product.botanicalName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Natural <span className="text-primary">Extracts</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              High-purity aromatic compounds and natural isolates for fragrance, flavor, and pharmaceutical applications. 
              Available in bulk quantities from 1kg to 500kg+.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search natural extracts..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No natural extracts found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bulk Options Info */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Bulk Ordering Made Easy</h2>
            <p className="text-lg text-muted-foreground mb-8">
              All natural extracts available in various bulk quantities with competitive wholesale pricing.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {["1kg", "5kg", "25kg", "500kg+"].map((size) => (
                <div key={size} className="bg-background rounded-lg p-6 border border-border">
                  <div className="text-3xl font-serif font-bold text-primary mb-2">{size}</div>
                  <div className="text-sm text-muted-foreground">Available</div>
                </div>
              ))}
            </div>
            <Button size="lg" asChild>
              <a href="/wholesale">Request Custom Quote</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NaturalExtracts;
