import React, { useState, useRef, useEffect } from "react";
import {
  Bot,
  Send,
  Sparkles,
  RefreshCw,
  User,
  Leaf,
  MessageSquare,
  HelpCircle,
  X,
  ChevronRight,
  Droplets,
  ShieldCheck,
  RotateCcw,
  Zap,
} from "lucide-react";
import { ChatMessage, DiagnosisResult } from "../types";

interface AgriChatBotProps {
  currentDiagnosisContext: DiagnosisResult | null;
  initialPrompt?: string;
}

interface QuestionCategory {
  label: string;
  icon: string;
  questions: string[];
}

const CATEGORIZED_QUESTIONS: QuestionCategory[] = [
  {
    label: "🌾 Major Crops",
    icon: "🌾",
    questions: [
      "How to cultivate sugarcane and what soil is best?",
      "What are the critical irrigation stages in wheat?",
      "How to control pink bollworm in cotton?",
      "How to manage blast disease in rice?",
      "How to prune guava and control fruit flies?",
      "How to control Fall Armyworm in corn?",
      "How to stop leaf curl in chilli and bell pepper?",
    ],
  },
  {
    label: "🧪 Soil & Fertilizers",
    icon: "🧪",
    questions: [
      "How to test soil and correct acidic soil pH?",
      "What is the best NPK fertilizer ratio for flowering stage?",
      "How to fix alkaline or sodic soil with gypsum?",
      "How to identify and treat Zinc deficiency in crops?",
      "How to prepare traditional Jeevamrutha in 200L barrel?",
      "What are the benefits of Rhizobium seed inoculation?",
    ],
  },
  {
    label: "🐛 Pests & Organic Sprays",
    icon: "🐛",
    questions: [
      "How to prepare homemade organic neem oil spray step-by-step?",
      "How to prepare fermented sour buttermilk antifungal spray?",
      "How to use yellow and blue sticky traps for whiteflies and thrips?",
      "How often should I apply Trichoderma to prevent root rot?",
      "Can I mix bio-fungicide with micronutrient foliar spray in one tank?",
      "How to stop tomato and potato blight without chemicals?",
    ],
  },
  {
    label: "💧 Irrigation & Mulching",
    icon: "💧",
    questions: [
      "How much water does drip irrigation save compared to flood?",
      "What is Alternate Wetting and Drying (AWD) in rice?",
      "What are the benefits of straw mulching vs plastic mulch?",
      "How to protect crops from winter frost and extreme cold?",
    ],
  },
];

export const AgriChatBot: React.FC<AgriChatBotProps> = ({
  currentDiagnosisContext,
  initialPrompt,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      sender: "assistant",
      text: currentDiagnosisContext
        ? `Hello! I am Dr. Flora, your AI Agronomist. I see you just analyzed a **${currentDiagnosisContext.cropName}** affected by **${currentDiagnosisContext.diseaseName}** (${currentDiagnosisContext.severity} severity). How can I assist you with custom spray schedules, tank mixing, or organic fertilizer advice?`
        : "Hello! I am Dr. Flora, your AI Agronomist and Plant Care Specialist. Ask me anything about crop diseases, organic remedies, bio-pesticide recipes, fertilizer schedules, or soil health!",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Handle initial prompt if passed from diagnostic screen
  useEffect(() => {
    if (initialPrompt && initialPrompt.trim()) {
      handleSendMessage(initialPrompt);
    }
  }, [initialPrompt]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: "user-" + Date.now(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.sender === "user" ? "user" : "assistant",
            content: m.text,
          })),
          context: currentDiagnosisContext
            ? {
                crop: currentDiagnosisContext.cropName,
                disease: currentDiagnosisContext.diseaseName,
                severity: currentDiagnosisContext.severity,
                pathogen: currentDiagnosisContext.pathogenType,
              }
            : undefined,
        }),
      });

      const data = await response.json();
      const botText = data?.reply || "I am analyzing your plant question. Could you provide a bit more detail about your crop?";

      const botMsg: ChatMessage = {
        id: "bot-" + Date.now(),
        sender: "assistant",
        text: botText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err: any) {
      console.error("Chat message error:", err);
      const fallbackMsg: ChatMessage = {
        id: "bot-fallback-" + Date.now(),
        sender: "assistant",
        text: `🌿 **Dr. Flora's Quick Agronomy Guide:**\n\nFor general leaf disease suppression, spray **Cold-Pressed Neem Oil (5ml/L)** mixed with 2ml organic liquid soap in early morning. Ensure good soil aeration, apply compost tea, and prune lower infected foliage.\n\n*Feel free to ask a follow-up question!*`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() && !isLoading) {
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "welcome-" + Date.now(),
        sender: "assistant",
        text: "Chat cleared! How can Dr. Flora help your crops or garden today? You can ask about sugarcane, rice, wheat, cotton, soil pH, fertilizers, pests, or irrigation.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  // Helper to render markdown text with bolding and bullet lists
  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split("\n");
    return lines.map((line, lIdx) => {
      // Check for bullet line
      const isBullet = line.trim().startsWith("- ") || line.trim().startsWith("• ");
      const isNumbered = /^\d+\.\s/.test(line.trim());
      const isHeader = line.trim().startsWith("### ") || line.trim().startsWith("## ");

      // Parse bold segments **text** and italic *text*
      const parts = line.split(/(\*\*.*?\*\*|\*.*?\*)/g);
      const content = parts.map((part, pIdx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={pIdx} className="font-bold text-emerald-950 dark:text-emerald-300">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
          return (
            <em key={pIdx} className="italic text-slate-700 dark:text-slate-300">
              {part.slice(1, -1)}
            </em>
          );
        }
        return part;
      });

      if (isHeader) {
        return (
          <h4 key={lIdx} className="font-bold text-sm sm:text-base text-emerald-900 mt-2 mb-1">
            {content}
          </h4>
        );
      }

      if (isBullet) {
        return (
          <div key={lIdx} className="flex items-start space-x-2 my-1 pl-1">
            <span className="text-emerald-600 font-bold">•</span>
            <span className="flex-1">{content}</span>
          </div>
        );
      }

      if (isNumbered) {
        return (
          <div key={lIdx} className="flex items-start space-x-2 my-1.5 pl-1">
            <span className="flex-1">{content}</span>
          </div>
        );
      }

      return (
        <p key={lIdx} className={line.trim() === "" ? "h-2" : "my-0.5"}>
          {content}
        </p>
      );
    });
  };

  const activeQuestions = CATEGORIZED_QUESTIONS[activeCategoryIndex]?.questions || [];

  return (
    <div id="agri-chatbot-view" className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-xs border border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-semibold">
                <Bot className="w-3.5 h-3.5" />
                <span>Dr. Flora • Senior Agricultural AI Scientist</span>
              </div>
              <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-[11px] font-medium">
                <Zap className="w-3 h-3 text-amber-400" />
                <span>Instant Expert Answers</span>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              24/7 Agronomist & All-Farming Assistant
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              Ask any question about sugarcane, rice, wheat, cotton, soil types, pH correction, fertilizer schedules (NPK), pests, diseases, or drip irrigation.
            </p>
          </div>

          <div className="flex items-center space-x-2 self-start sm:self-auto">
            {currentDiagnosisContext && (
              <div className="p-3 bg-slate-800/90 rounded-2xl border border-slate-700 text-xs text-slate-200 shrink-0">
                <span className="font-bold text-emerald-400 block mb-0.5">Active Leaf Context:</span>
                <span>
                  {currentDiagnosisContext.cropName} • {currentDiagnosisContext.diseaseName}
                </span>
              </div>
            )}
            <button
              type="button"
              onClick={handleClearChat}
              title="Clear conversation"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Chat Container */}
      <div className="bg-white rounded-3xl shadow-xs border border-slate-200 overflow-hidden flex flex-col h-[640px]">
        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start space-x-3 ${msg.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
            >
              {/* Avatar */}
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${
                  msg.sender === "user"
                    ? "bg-slate-900 text-white"
                    : "bg-emerald-600 text-white"
                }`}
              >
                {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              {/* Message Bubble */}
              <div
                className={`max-w-[90%] sm:max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-xs ${
                  msg.sender === "user"
                    ? "bg-slate-900 text-white rounded-tr-xs"
                    : "bg-white text-slate-800 border border-slate-200 rounded-tl-xs"
                }`}
              >
                {msg.sender === "user" ? (
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                ) : (
                  <div className="space-y-0.5 text-slate-800">{renderFormattedText(msg.text)}</div>
                )}
                <div
                  className={`text-[10px] mt-2 font-medium ${
                    msg.sender === "user" ? "text-slate-400 text-right" : "text-slate-400"
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start space-x-3 animate-in fade-in">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white rounded-2xl rounded-tl-xs p-4 border border-slate-200 shadow-xs flex items-center space-x-2 text-xs text-slate-600">
                <RefreshCw className="w-4 h-4 animate-spin text-emerald-600" />
                <span>Dr. Flora is formulating immediate agronomic advice & dosage recommendations...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Questions with Topic Tabs */}
        <div className="bg-slate-50 border-t border-slate-200 p-2.5 space-y-2">
          {/* Category Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
            {CATEGORIZED_QUESTIONS.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveCategoryIndex(idx)}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategoryIndex === idx
                    ? "bg-emerald-700 text-white shadow-xs"
                    : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Questions Pills */}
          <div className="overflow-x-auto flex items-center space-x-2 text-xs py-0.5 no-scrollbar">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0 flex items-center space-x-1">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              <span>Tap to ask:</span>
            </span>
            {activeQuestions.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(q)}
                disabled={isLoading}
                className="whitespace-nowrap px-3 py-1 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 border border-slate-200 hover:border-emerald-300 rounded-full text-xs font-medium transition-colors shrink-0 shadow-xs cursor-pointer active:scale-95 disabled:opacity-50"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Semantic Form Input Bar */}
        <form onSubmit={handleFormSubmit} className="p-4 bg-white border-t border-slate-200 flex items-center space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            disabled={isLoading}
            placeholder="Ask Dr. Flora about sugarcane, wheat, rice, cotton, soil pH, NPK, pests, irrigation..."
            className="flex-1 bg-slate-50 focus:bg-white text-xs sm:text-sm text-slate-800 rounded-xl px-4 py-2.5 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-hidden transition-all disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isLoading}
            className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 disabled:pointer-events-none text-white rounded-xl font-semibold text-xs sm:text-sm flex items-center space-x-1.5 shadow-xs transition-all active:scale-95 cursor-pointer shrink-0"
          >
            <span>Send</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

