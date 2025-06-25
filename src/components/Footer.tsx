
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
              Stay Beautiful, Stay Updated
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive beauty tips, product launches, and special offers delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address" 
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-rose-500"
              />
              <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 px-8 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                BeautyHub
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your ultimate destination for premium beauty products and personalized recommendations powered by AI technology.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-rose-400 hover:bg-gray-800 w-10 h-10 p-0">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-rose-400 hover:bg-gray-800 w-10 h-10 p-0">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-rose-400 hover:bg-gray-800 w-10 h-10 p-0">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-rose-400 hover:bg-gray-800 w-10 h-10 p-0">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  Skincare
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  Makeup
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  Fragrance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  AI Consultant
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  Beauty Tips
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Customer Service</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  Track Your Order
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rose-400" />
                <span className="text-gray-400">support@beautyhub.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rose-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-400 mt-1" />
                <span className="text-gray-400">
                  123 Beauty Street<br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 BeautyHub. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
