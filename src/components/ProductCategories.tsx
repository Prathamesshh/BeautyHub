
import { Card } from "@/components/ui/card";
import { Heart, Palette, Droplet, Sun } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Skincare",
    description: "Glow from within",
    icon: Droplet,
    color: "from-blue-400 to-cyan-400",
    products: "200+ products"
  },
  {
    id: 2,
    name: "Makeup",
    description: "Express yourself",
    icon: Palette,
    color: "from-pink-400 to-rose-400",
    products: "300+ products"
  },
  {
    id: 3,
    name: "Fragrance",
    description: "Signature scents",
    icon: Heart,
    color: "from-purple-400 to-pink-400",
    products: "150+ products"
  },
  {
    id: 4,
    name: "Sun Care",
    description: "Protect & perfect",
    icon: Sun,
    color: "from-orange-400 to-yellow-400",
    products: "80+ products"
  }
];

const ProductCategories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collection of beauty essentials, organized to help you find exactly what you're looking for.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.id} 
              className={`relative overflow-hidden bg-gradient-to-br ${category.color} border-0 cursor-pointer group hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300"></div>
              <div className="relative p-8 text-white">
                <category.icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-white/90 mb-4">{category.description}</p>
                <div className="text-sm text-white/80">{category.products}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
