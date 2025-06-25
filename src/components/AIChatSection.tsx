
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, MessageCircle, Sparkles, Zap } from "lucide-react";

const AIChatSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Bot className="w-4 h-4" />
                AI-Powered Recommendations
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Get Personalized Beauty Advice
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                Our AI beauty consultant understands your skin type, preferences, and style to recommend the perfect products just for you. Get instant, expert advice 24/7.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-violet-600" />
                  </div>
                  <span className="text-gray-700">Skin type analysis and product matching</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Instant recommendations based on your budget</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-pink-600" />
                  </div>
                  <span className="text-gray-700">24/7 beauty consultation and tips</span>
                </div>
              </div>

              <Button size="lg" className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 hover:from-violet-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Bot className="mr-2 w-5 h-5" />
                Start AI Consultation
              </Button>
            </div>

            {/* Chat Interface Mockup */}
            <div className="animate-fade-in delay-300">
              <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-0">
                  {/* Chat Header */}
                  <div className="bg-gradient-to-r from-violet-500 to-purple-500 p-4 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Bot className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Beauty AI Assistant</h3>
                        <p className="text-sm text-white/80">Online now</p>
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-6 space-y-4 max-h-96 overflow-hidden">
                    {/* AI Message */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gray-100 rounded-2xl p-4 max-w-xs animate-fade-in">
                        <p className="text-sm">Hi! I'm your AI beauty consultant. What's your skin type and what are you looking for today?</p>
                      </div>
                    </div>

                    {/* User Message */}
                    <div className="flex gap-3 justify-end">
                      <div className="bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-2xl p-4 max-w-xs animate-fade-in delay-150">
                        <p className="text-sm">I have oily skin and need a good moisturizer under $50</p>
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gray-100 rounded-2xl p-4 max-w-xs animate-fade-in delay-300">
                        <p className="text-sm">Perfect! For oily skin, I recommend the Hydrating Face Gel by GlowEssentials ($35.99). It's oil-free, lightweight, and has great reviews!</p>
                      </div>
                    </div>

                    {/* Typing indicator */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gray-100 rounded-2xl p-4 animate-pulse">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChatSection;
