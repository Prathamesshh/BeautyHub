
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, ShoppingBag, User, Menu, X, Heart, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const internationalBrands = [
    { name: "L'Oréal Paris", website: "https://www.loreal-paris.co.in/" },
    { name: "Maybelline", website: "https://www.maybelline.co.in/" },
    { name: "MAC Cosmetics", website: "https://www.maccosmetics.in/" },
    { name: "Estée Lauder", website: "https://www.esteelauder.co.in/" },
    { name: "Clinique", website: "https://www.clinique.in/" },
    { name: "Urban Decay", website: "https://www.urbandecay.com/" },
  ];

  const localBrands = [
    { name: "Nykaa", website: "https://www.nykaa.com/" },
    { name: "Lakmé", website: "https://www.lakmeindia.com/" },
    { name: "Colorbar", website: "https://www.colorbar.in/" },
    { name: "Faces Canada", website: "https://www.facescanada.com/" },
    { name: "Sugar Cosmetics", website: "https://www.sugarcosmetics.com/" },
    { name: "MyGlamm", website: "https://www.myglamm.com/" },
  ];

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
            
            {/* Brands Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-700 hover:text-rose-600 transition-colors duration-300 font-medium p-0 h-auto">
                  Brands
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <div className="px-2 py-1.5 text-sm font-semibold text-gray-600">International Brands</div>
                {internationalBrands.map((brand) => (
                  <DropdownMenuItem key={brand.name} asChild>
                    <a 
                      href={brand.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      {brand.name}
                    </a>
                  </DropdownMenuItem>
                ))}
                
                <DropdownMenuSeparator />
                
                <div className="px-2 py-1.5 text-sm font-semibold text-gray-600">Local Brands</div>
                {localBrands.map((brand) => (
                  <DropdownMenuItem key={brand.name} asChild>
                    <a 
                      href={brand.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      {brand.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
              
              {/* Mobile Brands Section */}
              <div className="px-2">
                <div className="text-gray-700 font-medium mb-2">Brands</div>
                <div className="ml-4 space-y-2">
                  <div className="text-sm font-semibold text-gray-600">International</div>
                  {internationalBrands.map((brand) => (
                    <a 
                      key={brand.name}
                      href={brand.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-sm text-gray-600 hover:text-rose-600 transition-colors duration-300"
                    >
                      {brand.name}
                    </a>
                  ))}
                  
                  <div className="text-sm font-semibold text-gray-600 mt-3">Local</div>
                  {localBrands.map((brand) => (
                    <a 
                      key={brand.name}
                      href={brand.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-sm text-gray-600 hover:text-rose-600 transition-colors duration-300"
                    >
                      {brand.name}
                    </a>
                  ))}
                </div>
              </div>
              
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
