
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Radiant Glow Serum",
    brand: "LuxeBeauty",
    price: 2499,
    originalPrice: 3299,
    rating: 4.8,
    reviews: 1250,
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop&crop=center",
    category: "Skincare",
    bestseller: true
  },
  {
    id: 2,
    name: "Velvet Matte Lipstick",
    brand: "ColorCraft",
    price: 699,
    originalPrice: 999,
    rating: 4.9,
    reviews: 890,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop&crop=center",
    category: "Makeup",
    bestseller: false
  },
  {
    id: 3,
    name: "Hydrating Face Mask",
    brand: "GlowEssentials",
    price: 1299,
    originalPrice: null,
    rating: 4.7,
    reviews: 2100,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    category: "Skincare",
    bestseller: true
  },
  {
    id: 4,
    name: "Long-Wear Foundation",
    brand: "FlawlessFinish",
    price: 1499,
    originalPrice: 1999,
    rating: 4.6,
    reviews: 756,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center",
    category: "Makeup",
    bestseller: false
  },
  {
    id: 5,
    name: "Vitamin C Brightening Cream",
    brand: "PureGlow",
    price: 1899,
    originalPrice: 2499,
    rating: 4.8,
    reviews: 1890,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop&crop=center",
    category: "Skincare",
    bestseller: true
  },
  {
    id: 6,
    name: "Eyeshadow Palette - Sunset",
    brand: "ChromaColors",
    price: 1099,
    originalPrice: 1399,
    rating: 4.9,
    reviews: 1456,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop&crop=center",
    category: "Makeup",
    bestseller: false
  }
];

const FeaturedProducts = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most loved products, carefully selected based on customer reviews and beauty expert recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className={`group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.bestseller && (
                    <div className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Bestseller
                    </div>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(product.id);
                    }}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110"
                  >
                    <Heart 
                      className={`w-5 h-5 transition-colors duration-300 ${
                        favorites.includes(product.id) 
                          ? 'text-rose-500 fill-rose-500' 
                          : 'text-gray-400'
                      }`}
                    />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-rose-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-yellow-400' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews.toLocaleString()} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold py-3 rounded-full transition-all duration-300 hover:shadow-lg group-hover:scale-105">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-rose-300 text-rose-600 hover:bg-rose-50 px-12 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
