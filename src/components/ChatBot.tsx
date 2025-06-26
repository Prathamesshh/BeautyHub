
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatBot = ({ isOpen, onClose }: ChatBotProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-500 to-purple-500 p-4 text-white flex items-center justify-between">
          <h3 className="font-semibold">AI Beauty Assistant</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-white hover:bg-white/20"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Chatbot Iframe */}
        <div className="h-full">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/7kB_J5K147FxHg9iXeYRA"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="microphone"
            className="border-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
