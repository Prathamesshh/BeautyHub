
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-100/20 to-pink-100/20"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-rose-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative container mx-auto px-6 pt-20 pb-16 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Beauty Recommendations
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-600 via-pink-600 to-orange-500 bg-clip-text text-transparent leading-tight">
            Discover Your Perfect Beauty Match
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
            Explore curated beauty products tailored to your unique style. From skincare essentials to makeup must-haves, find everything you need to glow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Get AI Recommendations
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-500">
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-600">50+</div>
              <div>Premium Brands</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-600">1000+</div>
              <div>Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-600">4.9★</div>
              <div>Customer Rating</div>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="lg:w-1/2 relative animate-fade-in delay-300">
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400/20 to-pink-400/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-rose-300 to-pink-300 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <div className="w-20 h-24 bg-gradient-to-br from-orange-300 to-rose-300 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300"></div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="w-20 h-16 bg-gradient-to-br from-pink-300 to-rose-300 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300"></div>
                  <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-400 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
