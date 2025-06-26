
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import AIChatSection from "@/components/AIChatSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <AIChatSection />
      <Footer />
    </div>
  );
};

export default Index;
