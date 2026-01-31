import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { MessageCircle, X, Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';
import { CARS, CONTACT_INFO } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Bonjour ! Je suis l'IA de Djerba First Car. Je connais tout notre stock. Comment puis-je vous aider aujourd'hui ?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    if (!chatSessionRef.current) {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        const systemContext = `
          You are the AI Sales Assistant for "Djerba First Car", a premium car showroom in Djerba, Tunisia.
          
          Our Contact Info:
          Address: ${CONTACT_INFO.address}
          Phone: ${CONTACT_INFO.phone}
          Email: ${CONTACT_INFO.email}
          
          Our Current Inventory (CARS):
          ${JSON.stringify(CARS.map(c => `${c.make} ${c.model} (${c.year}) - ${c.price} TND - ${c.condition} - ${c.fuel} - ${c.engine}`))}
          
          Your Mission:
          1. Answer questions about our specific cars (price, specs, availability).
          2. Recommend cars from our inventory based on user needs (budget, family, sport, etc.).
          3. Encourage users to book a test drive or call us.
          4. Be polite, professional, and helpful. 
          5. Speak primarily in French (as the website is in French), but adapt if the user speaks English.
          6. Keep answers concise (under 3-4 sentences) unless asked for details.
          
          If a user asks for a car we don't have, apologize and suggest a similar one from our inventory.
        `;

        chatSessionRef.current = ai.chats.create({
          model: 'gemini-3-flash-preview',
          config: {
            systemInstruction: systemContext,
            temperature: 0.7,
          },
        });
      } catch (error) {
        console.error("Failed to initialize AI", error);
      }
    }
  }, []);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || !chatSessionRef.current) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chatSessionRef.current.sendMessage({ message: userMsg });
      if (response.text) {
        setMessages(prev => [...prev, { role: 'model', text: response.text }]);
      }
    } catch (error) {
      console.error("Error sending message", error);
      setMessages(prev => [...prev, { role: 'model', text: "Désolé, j'ai rencontré une erreur. Veuillez réessayer ou nous appeler directement." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white shadow-2xl hover:scale-110 transition-transform duration-300 group ${isOpen ? 'hidden' : 'flex'}`}
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full border-2 border-black"></span>
        <Sparkles className="w-6 h-6 animate-pulse" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 md:bottom-6 md:right-6 w-full md:w-[400px] h-[100dvh] md:h-[600px] z-50 flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300">
          <div className="glass-panel rounded-t-2xl md:rounded-2xl flex flex-col h-full shadow-2xl overflow-hidden border border-white/10 relative bg-black/80">
            
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-red-900/80 to-black border-b border-white/10 flex justify-between items-center backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-purple-600 flex items-center justify-center shadow-inner">
                  <Bot className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg leading-tight">Djerba First AI</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-xs text-neutral-300">En ligne</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-end gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-neutral-700' : 'bg-red-600/20'}`}>
                    {msg.role === 'user' ? <User size={14} className="text-white" /> : <Sparkles size={14} className="text-red-500" />}
                  </div>
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-white text-black rounded-br-none' 
                        : 'bg-neutral-800 text-white border border-white/10 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex items-end gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0">
                        <Loader2 size={14} className="text-red-500 animate-spin" />
                    </div>
                    <div className="bg-neutral-800 text-neutral-400 p-3 rounded-2xl rounded-bl-none border border-white/10 text-xs">
                        L'IA réfléchit...
                    </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 bg-neutral-900/90 border-t border-white/10">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Posez une question sur nos voitures..."
                  className="w-full bg-neutral-800 border border-white/10 rounded-full py-3.5 pl-5 pr-12 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all shadow-inner"
                />
                <button 
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-red-600 text-white rounded-full hover:bg-red-500 disabled:opacity-50 disabled:hover:bg-red-600 transition-all shadow-lg"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AiAssistant;