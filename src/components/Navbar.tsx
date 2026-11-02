import React, { useState } from "react";
import {
  Leaf,
  Camera,
  BookOpen,
  Calculator,
  History,
  Bot,
  Search,
  Globe,
  Sparkles,
  X,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { CROPS_DATABASE } from "../data/cropsData";
import { DiseaseEncyclopediaItem } from "../types";

interface NavbarProps {
  activeTab: "scanner" | "encyclopedia" | "calculator" | "history" | "chat";
  setActiveTab: (tab: "scanner" | "encyclopedia" | "calculator" | "history" | "chat") => void;
  selectedLanguage: string;
  setSelectedLanguage: (lang: string) => void;
  onSelectDisease: (disease: DiseaseEncyclopediaItem) => void;
  onOpenScanModal: () => void;
  historyCount: number;
}

const LANGUAGES = [
  { code: "English", name: "English (US/UK)", flag: "🌐" },
  { code: "Spanish", name: "Español (Spanish)", flag: "🇪🇸" },
  { code: "Hindi", name: "हिन्दी (Hindi)", flag: "🇮🇳" },
  { code: "French", name: "Français (French)", flag: "🇫🇷" },
  { code: "Bengali", name: "বাংলা (Bengali)", flag: "🇧🇩" },
  { code: "Telugu", name: "తెలుగు (Telugu)", flag: "🇮🇳" },
  { code: "Marathi", name: "मराठी (Marathi)", flag: "🇮🇳" },
  { code: "Swahili", name: "Kiswahili (East Africa)", flag: "🇰🇪" },
  { code: "Portuguese", name: "Português", flag: "🇧🇷" },
  { code: "Arabic", name: "العربية (Arabic)", flag: "🇸🇦" },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  selectedLanguage,
  setSelectedLanguage,
  onSelectDisease,
  onOpenScanModal,
  historyCount,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  // Search through all crops & diseases
  const searchResults = React.useMemo(() => {
    if (!searchQuery.trim() || searchQuery.length < 2) return [];
    const query = searchQuery.toLowerCase();
    const results: Array<{
      type: "crop" | "disease";
      title: string;
      subtitle: string;
      cropName: string;
      disease?: DiseaseEncyclopediaItem;
    }> = [];

    CROPS_DATABASE.forEach((crop) => {
      if (crop.name.toLowerCase().includes(query) || crop.scientificName.toLowerCase().includes(query)) {
        results.push({
          type: "crop",
          title: crop.name,
          subtitle: `${crop.scientificName} • ${crop.diseases.length} Known Diseases`,
          cropName: crop.name,
        });
      }

      crop.diseases.forEach((dis) => {
        const matchesName = dis.name.toLowerCase().includes(query);
        const matchesPathogen = dis.pathogenType.toLowerCase().includes(query);
        const matchesSymptom = dis.symptoms.some((s) => s.toLowerCase().includes(query));
        const matchesScientific = dis.scientificName.toLowerCase().includes(query);

        if (matchesName || matchesPathogen || matchesSymptom || matchesScientific) {
          results.push({
            type: "disease",
            title: `${crop.name}: ${dis.name}`,
            subtitle: `${dis.pathogenType} • ${dis.scientificName}`,
            cropName: crop.name,
            disease: dis,
          });
        }
      });
    });

    return results.slice(0, 8);
  }, [searchQuery]);

  const handleSearchResultClick = (item: (typeof searchResults)[0]) => {
    if (item.disease) {
      onSelectDisease(item.disease);
    } else {
      setActiveTab("encyclopedia");
    }
    setSearchQuery("");
    setIsSearchOpen(false);
  };

  return (
    <header id="app-header" className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs">
      {/* Top Agricultural Alert / Status Bar */}
      <div className="bg-slate-900 text-white text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              <Sparkles className="w-3 h-3 mr-1 text-emerald-400" />
              AI Agronomist Engine
            </span>
            <span className="hidden sm:inline text-slate-300 text-xs">
              Instant leaf pathogen detection, organic bio-treatments & verified video remedies
            </span>
          </div>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              id="language-select-btn"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center space-x-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-full transition-colors border border-slate-700"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-medium">{selectedLanguage}</span>
            </button>

            {isLangMenuOpen && (
              <div
                id="language-dropdown-menu"
                className="absolute right-0 mt-1.5 w-56 bg-white rounded-2xl shadow-xl border border-slate-200 py-1.5 text-slate-800 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="px-3.5 py-1.5 border-b border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Select Farmer Language
                </div>
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLanguage(lang.code);
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-slate-50 transition-colors ${
                      selectedLanguage === lang.code ? "bg-emerald-50 text-emerald-800 font-semibold" : "text-slate-700"
                    }`}
                  >
                    <span>
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </span>
                    {selectedLanguage === lang.code && <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Logo & Brand */}
          <div
            id="brand-logo"
            onClick={() => setActiveTab("scanner")}
            className="flex items-center space-x-3 cursor-pointer group shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-xs group-hover:bg-emerald-700 transition-colors">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-bold text-lg tracking-tight text-slate-900">FloraDoctor</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  AI Plant Care
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">Crop Pathology & Remedy Center</p>
            </div>
          </div>

          {/* Quick Search Bar */}
          <div className="relative flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="global-crop-search"
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                placeholder="Search crops, diseases, or symptoms..."
                className="w-full pl-10 pr-8 py-2 bg-slate-100 hover:bg-slate-100/80 focus:bg-white text-xs sm:text-sm text-slate-800 rounded-full border border-transparent focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-hidden"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Search Dropdown Results */}
            {isSearchOpen && searchResults.length > 0 && (
              <div
                id="search-results-box"
                className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 max-h-80 overflow-y-auto"
              >
                <div className="px-3.5 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Suggestions ({searchResults.length})
                </div>
                {searchResults.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSearchResultClick(item)}
                    className="px-3.5 py-2 hover:bg-slate-50 cursor-pointer flex items-center justify-between border-b border-slate-50 last:border-0 transition-colors"
                  >
                    <div className="flex items-center space-x-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                        {item.type === "crop" ? <Leaf className="w-3.5 h-3.5" /> : <BookOpen className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-800">{item.title}</p>
                        <p className="text-[11px] text-slate-500">{item.subtitle}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-1 sm:space-x-1.5">
            <button
              id="nav-scanner-btn"
              onClick={() => setActiveTab("scanner")}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-1.5 transition-all ${
                activeTab === "scanner"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Camera className="w-4 h-4" />
              <span className="hidden sm:inline">AI Scanner</span>
            </button>

            <button
              id="nav-encyclopedia-btn"
              onClick={() => setActiveTab("encyclopedia")}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-1.5 transition-all ${
                activeTab === "encyclopedia"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Crop Library</span>
            </button>

            <button
              id="nav-calculator-btn"
              onClick={() => setActiveTab("calculator")}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-1.5 transition-all ${
                activeTab === "calculator"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span className="hidden sm:inline">Spray Calc</span>
            </button>

            <button
              id="nav-history-btn"
              onClick={() => setActiveTab("history")}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-1.5 relative transition-all ${
                activeTab === "history"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <History className="w-4 h-4" />
              <span className="hidden sm:inline">Saved Scans</span>
              {historyCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-emerald-600 text-white">
                  {historyCount}
                </span>
              )}
            </button>

            <button
              id="nav-chat-btn"
              onClick={() => setActiveTab("chat")}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-1.5 transition-all ${
                activeTab === "chat"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Bot className="w-4 h-4" />
              <span className="hidden sm:inline">Ask AgriBot</span>
            </button>

            {/* Quick Action Button */}
            <button
              id="nav-quick-scan-cta"
              onClick={onOpenScanModal}
              className="ml-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-xs flex items-center space-x-1.5 transition-all"
            >
              <Camera className="w-4 h-4" />
              <span>Scan Leaf</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
