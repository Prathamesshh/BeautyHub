
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, ShoppingBag, User, Menu, X, Heart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              BeautyHub
            </span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors duration-300 font-medium">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors duration-300 font-medium">
              Categories
            </a>
            <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors duration-300 font-medium">
              Brands
            </a>
            <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors duration-300 font-medium">
              AI Consultant
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <Button variant="ghost" size="sm" className="hidden sm:flex text-gray-600 hover:text-rose-600 hover:bg-rose-50">
              <Search className="w-5 h-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="sm" className="hidden sm:flex text-gray-600 hover:text-rose-600 hover:bg-rose-50 relative">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-rose-600 hover:bg-rose-50 relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </Button>

            {/* User */}
            <Button variant="ghost" size="sm" className="hidden sm:flex text-gray-600 hover:text-rose-600 hover:bg-rose-50">
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200/50 py-4 bg-white/95 backdrop-blur-md animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors duration-300 font-medium px-2">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors duration-300 font-medium px-2">
                Products
              </a>
              <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors duration-300 font-medium px-2">
                Categories
              </a>
              <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors duration-300 font-medium px-2">
                Brands
              </a>
              <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors duration-300 font-medium px-2">
                AI Consultant
              </a>
              <div className="flex items-center gap-4 px-2 pt-2 border-t border-gray-200">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-rose-600">
                  <Search className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-rose-600">
                  <User className="w-5 h-5" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
