import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Download } from "lucide-react";
import productsImage from "@/assets/essential-oils-product.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Essential Oils", "Carrier Oils", "Natural Extracts"];

  const products = [
    // Essential Oils
    {
      name: "Lemongrass Oil",
      botanicalName: "Cymbopogon citratus",
      origin: "India",
      category: "Essential Oils",
      image: productsImage,
    },
    {
      name: "Palmarosa Oil",
      botanicalName: "Cymbopogon martinii",
      origin: "India",
      category: "Essential Oils",
      image: productsImage,
    },
    {
      name: "Peppermint Oil",
      botanicalName: "Mentha piperita",
      origin: "India",
      category: "Essential Oils",
      image: productsImage,
    },
    {
      name: "Eucalyptus Oil",
      botanicalName: "Eucalyptus globulus",
      origin: "India",
      category: "Essential Oils",
      image: productsImage,
    },
    {
      name: "Black Pepper Oil",
      botanicalName: "Piper nigrum",
      origin: "India",
      category: "Essential Oils",
      image: productsImage,
    },
    {
      name: "Citronella Oil",
      botanicalName: "Cymbopogon nardus",
      origin: "India",
      category: "Essential Oils",
      image: productsImage,
    },
    {
      name: "Davana Oil",
      botanicalName: "Artemisia pallens",
      origin: "India",
      category: "Essential Oils",
      image: productsImage,
    },
    {
      name: "Pine Oil",
      botanicalName: "Pinus sylvestris",
      origin: "India",
      category: "Essential Oils",
      image: productsImage,
    },
    {
      name: "Vetiver Oil",
      botanicalName: "Vetiveria zizanioides",
      origin: "India",
      category: "Essential Oils",
      image: productsImage,
    },
    {
      name: "Rosemary Oil",
      botanicalName: "Rosmarinus officinalis",
      origin: "India",
      category: "Essential Oils",
      image: productsImage,
    },
    {
      name: "Nutmeg Oil",
      botanicalName: "Myristica fragrans",
      origin: "India",
      category: "Essential Oils",
      image: productsImage,
    },
    {
      name: "Cardamom Oil",
      botanicalName: "Elettaria cardamomum",
      origin: "India",
      category: "Essential Oils",
      image: productsImage,
    },
    {
      name: "Cedarwood Oil",
      botanicalName: "Cedrus atlantica",
      origin: "India",
      category: "Essential Oils",
      image: productsImage,
    },
    {
      name: "Camphor Oil",
      botanicalName: "Cinnamomum camphora",
      origin: "India",
      category: "Essential Oils",
      image: productsImage,
    },
    {
      name: "Clove Oil",
      botanicalName: "Syzygium aromaticum",
      origin: "India",
      category: "Essential Oils",
      image: productsImage,
    },
    {
      name: "Basil Oil",
      botanicalName: "Ocimum basilicum",
      origin: "India",
      category: "Essential Oils",
      image: productsImage,
    },
    {
      name: "Spearmint Oil",
      botanicalName: "Mentha spicata",
      origin: "India",
      category: "Essential Oils",
      image: productsImage,
    },
    {
      name: "Cinnamon Leaf Oil",
      botanicalName: "Cinnamomum verum",
      origin: "India",
      category: "Essential Oils",
      image: productsImage,
    },
    {
      name: "Mentha Piperita Oil",
      botanicalName: "Mentha piperita",
      origin: "India",
      category: "Essential Oils",
      image: productsImage,
    },
    {
      name: "Ginger Oil",
      botanicalName: "Zingiber officinale",
      origin: "India",
      category: "Essential Oils",
      image: productsImage,
    },
    {
      name: "Turmeric Oil",
      botanicalName: "Curcuma longa",
      origin: "India",
      category: "Essential Oils",
      image: productsImage,
    },
    {
      name: "Patchouli Oil",
      botanicalName: "Pogostemon cablin",
      origin: "India",
      category: "Essential Oils",
      image: productsImage,
    },
    // Carrier Oils
    {
      name: "Castor Oil",
      botanicalName: "Ricinus communis",
      origin: "India",
      category: "Carrier Oils",
      image: productsImage,
    },
    {
      name: "Evening Primrose Oil",
      botanicalName: "Oenothera biennis",
      origin: "India",
      category: "Carrier Oils",
      image: productsImage,
    },
    {
      name: "Neem Oil",
      botanicalName: "Azadirachta indica",
      origin: "India",
      category: "Carrier Oils",
      image: productsImage,
    },
    {
      name: "Chaulmoogra Oil",
      botanicalName: "Hydnocarpus wightianus",
      origin: "India",
      category: "Carrier Oils",
      image: productsImage,
    },
    {
      name: "Coconut Oil",
      botanicalName: "Cocos nucifera",
      origin: "India",
      category: "Carrier Oils",
      image: productsImage,
    },
    {
      name: "Palm Oil",
      botanicalName: "Elaeis guineensis",
      origin: "India",
      category: "Carrier Oils",
      image: productsImage,
    },
    // Natural Extracts
    {
      name: "Geraniol",
      botanicalName: "Natural isolate",
      origin: "India",
      category: "Natural Extracts",
      image: productsImage,
    },
    {
      name: "D-Limonene",
      botanicalName: "Citrus-derived",
      origin: "India",
      category: "Natural Extracts",
      image: productsImage,
    },
    {
      name: "Vanillin Powder",
      botanicalName: "Vanilla planifolia",
      origin: "India",
      category: "Natural Extracts",
      image: productsImage,
    },
    {
      name: "Thymol Crystal",
      botanicalName: "Thymus vulgaris",
      origin: "India",
      category: "Natural Extracts",
      image: productsImage,
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.botanicalName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Our Premium <span className="text-primary">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Discover our extensive collection of pure essential oils, carrier oils, and aromatherapy
              blends. Available in bulk quantities from 1kg to 500kg+.
            </p>
            <Button size="lg" variant="outline">
              <Download className="mr-2 h-5 w-5" />
              Download Full Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
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
                No products found matching your criteria.
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
              All products available in various bulk quantities with competitive wholesale pricing.
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

export default Products;
