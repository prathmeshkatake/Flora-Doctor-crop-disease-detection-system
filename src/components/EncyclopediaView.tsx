import React, { useState, useMemo } from "react";
import {
  BookOpen,
  Search,
  Filter,
  Leaf,
  ChevronRight,
  Sparkles,
  Video,
  ShoppingCart,
  ShieldCheck,
  AlertTriangle,
  ExternalLink,
  X,
  Droplets,
  Thermometer,
  Camera,
  MessageSquare,
  FlaskConical,
  Bug,
  Info,
  CheckCircle2,
  ListFilter,
  Layers,
  ArrowRight,
} from "lucide-react";
import { CROPS_DATABASE, SAMPLE_LEAF_IMAGES } from "../data/cropsData";
import { CropEncyclopediaItem, DiseaseEncyclopediaItem } from "../types";

interface EncyclopediaViewProps {
  onSelectCropForScan: (cropName: string, sampleImageUrl?: string, autoDiagnose?: boolean) => void;
  selectedDiseaseModal: DiseaseEncyclopediaItem | null;
  setSelectedDiseaseModal: (disease: DiseaseEncyclopediaItem | null) => void;
  onAskDoctor?: (contextPrompt: string) => void;
}

const CATEGORIES = [
  "All Crops",
  "Vegetables",
  "Cereals & Grains",
  "Fruits",
  "Cash Crops",
  "Spices & Herbs",
  "Floriculture",
] as const;

const PATHOGEN_FILTERS = ["All Pathogens", "Fungal", "Bacterial", "Viral", "Pest/Insect"] as const;

export const EncyclopediaView: React.FC<EncyclopediaViewProps> = ({
  onSelectCropForScan,
  selectedDiseaseModal,
  setSelectedDiseaseModal,
  onAskDoctor,
}) => {
  const [viewMode, setViewMode] = useState<"by-crop" | "all-diseases">("by-crop");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Crops");
  const [selectedPathogen, setSelectedPathogen] = useState<string>("All Pathogens");
  const [selectedCropId, setSelectedCropId] = useState<string | null>(null);
  const [modalActiveTab, setModalActiveTab] = useState<"symptoms" | "organic" | "chemical" | "inputs" | "videos">("symptoms");

  // Flattened list of all diseases across all crops for the global directory
  const allDiseasesList = useMemo(() => {
    const list: DiseaseEncyclopediaItem[] = [];
    CROPS_DATABASE.forEach((crop) => {
      crop.diseases.forEach((d) => {
        list.push(d);
      });
    });
    return list;
  }, []);

  // Filter crops based on category, pathogen, and search query
  const filteredCrops = useMemo(() => {
    return CROPS_DATABASE.filter((crop) => {
      // Category filter
      if (selectedCategory !== "All Crops" && crop.category !== selectedCategory) {
        return false;
      }

      // Search query
      if (searchQuery.trim().length > 1) {
        const q = searchQuery.toLowerCase();
        const matchesCrop =
          crop.name.toLowerCase().includes(q) || crop.scientificName.toLowerCase().includes(q);
        const matchesAnyDisease = crop.diseases.some((d) => {
          const matchesName = d.name.toLowerCase().includes(q);
          const matchesPathogen = d.pathogenType.toLowerCase().includes(q);
          const matchesSymptom = d.symptoms.some((s) => s.toLowerCase().includes(q));
          return matchesName || matchesPathogen || matchesSymptom;
        });

        if (!matchesCrop && !matchesAnyDisease) return false;
      }

      // Pathogen filter
      if (selectedPathogen !== "All Pathogens") {
        const hasMatchingDisease = crop.diseases.some((d) => d.pathogenType === selectedPathogen);
        if (!hasMatchingDisease) return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedPathogen]);

  // Filter diseases for the "All Diseases" directory tab
  const filteredAllDiseases = useMemo(() => {
    return allDiseasesList.filter((d) => {
      // Pathogen filter
      if (selectedPathogen !== "All Pathogens" && d.pathogenType !== selectedPathogen) {
        return false;
      }

      // Category filter (find crop)
      if (selectedCategory !== "All Crops") {
        const parentCrop = CROPS_DATABASE.find((c) => c.id === d.cropId || c.name === d.cropName);
        if (parentCrop && parentCrop.category !== selectedCategory) {
          return false;
        }
      }

      // Search query
      if (searchQuery.trim().length > 1) {
        const q = searchQuery.toLowerCase();
        const matchesName = d.name.toLowerCase().includes(q);
        const matchesCrop = d.cropName.toLowerCase().includes(q);
        const matchesSci = d.scientificName.toLowerCase().includes(q);
        const matchesSymptom = d.symptoms.some((s) => s.toLowerCase().includes(q));
        const matchesCauses = d.causes.toLowerCase().includes(q);
        return matchesName || matchesCrop || matchesSci || matchesSymptom || matchesCauses;
      }

      return true;
    });
  }, [allDiseasesList, selectedPathogen, selectedCategory, searchQuery]);

  const activeCrop = selectedCropId
    ? CROPS_DATABASE.find((c) => c.id === selectedCropId) || filteredCrops[0] || CROPS_DATABASE[0]
    : filteredCrops[0] || CROPS_DATABASE[0];

  const handleSelectRecommendedCrop = (crop: CropEncyclopediaItem) => {
    setViewMode("by-crop");
    setSelectedCategory("All Crops");
    setSelectedCropId(crop.id);
    const element = document.getElementById("crop-detail-panel");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleOpenDiseaseModal = (disease: DiseaseEncyclopediaItem) => {
    setSelectedDiseaseModal(disease);
    setModalActiveTab("symptoms");
  };

  // Find a sample leaf image for the active crop if one exists
  const matchingSampleForActiveCrop = useMemo(() => {
    if (!activeCrop) return null;
    return (
      SAMPLE_LEAF_IMAGES.find(
        (s) =>
          s.crop.toLowerCase().includes(activeCrop.name.toLowerCase()) ||
          activeCrop.name.toLowerCase().includes(s.crop.toLowerCase())
      ) || null
    );
  }, [activeCrop]);

  return (
    <div id="encyclopedia-view" className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-xs border border-slate-800">
        <div className="max-w-3xl space-y-2.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Comprehensive Agronomic Encyclopedia</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Crop & Disease Pathology Library
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Explore complete pathology profiles, hallmark visual symptoms, certified organic formulas, bio-fertilizer dosages, and practical field treatment guides for 50+ commercial crops and diseases.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setViewMode("by-crop")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer ${
              viewMode === "by-crop"
                ? "bg-emerald-600 text-white shadow-md ring-2 ring-emerald-400/30"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
            }`}
          >
            <Leaf className="w-3.5 h-3.5" />
            <span>Browse by Crops ({CROPS_DATABASE.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode("all-diseases")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer ${
              viewMode === "all-diseases"
                ? "bg-emerald-600 text-white shadow-md ring-2 ring-emerald-400/30"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>All Crop Diseases Directory ({allDiseasesList.length})</span>
          </button>
        </div>
      </div>

      {/* Recommended & Popular Crops Bar (shown in Crop mode) */}
      {viewMode === "by-crop" && (
        <div className="bg-white p-5 rounded-3xl shadow-xs border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Recommended & Popular Crops
              </h3>
            </div>
            <span className="text-[11px] text-slate-400 font-medium">Click any crop to explore its diseases</span>
          </div>

          <div className="flex items-center space-x-2.5 overflow-x-auto pb-2 pt-1 scrollbar-thin">
            {CROPS_DATABASE.slice(0, 12).map((crop) => {
              const isSelected = activeCrop?.id === crop.id;
              return (
                <button
                  key={crop.id}
                  type="button"
                  onClick={() => handleSelectRecommendedCrop(crop)}
                  className={`flex items-center space-x-2.5 p-2 pr-3.5 rounded-2xl border transition-all shrink-0 cursor-pointer text-left ${
                    isSelected
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-md ring-2 ring-emerald-500/30 scale-102"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200 hover:border-emerald-300"
                  }`}
                >
                  <img
                    src={crop.imageUrl}
                    alt={crop.name}
                    referrerPolicy="no-referrer"
                    className="w-8 h-8 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <div className="text-xs font-bold leading-tight">{crop.name}</div>
                    <div
                      className={`text-[10px] ${
                        isSelected ? "text-emerald-100" : "text-slate-500"
                      }`}
                    >
                      {crop.diseases.length} diseases
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Search & Filter Toolbar */}
      <div className="bg-white p-5 rounded-3xl shadow-xs border border-slate-200 space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-3">
          {/* Search Bar */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                viewMode === "by-crop"
                  ? "Search by crop name, disease name, or symptom (e.g. 'blight', 'powdery', 'rust')..."
                  : "Search all crop diseases by name, symptom, or pathogen..."
              }
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 focus:bg-white text-xs sm:text-sm text-slate-800 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-hidden transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Pathogen Filter Dropdown */}
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <Filter className="w-4 h-4 text-slate-400 shrink-0" />
            <select
              value={selectedPathogen}
              onChange={(e) => setSelectedPathogen(e.target.value)}
              className="w-full md:w-auto text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-700 font-medium focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-hidden cursor-pointer"
            >
              {PATHOGEN_FILTERS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-thin">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* VIEW MODE 1: Browse by Crop */}
      {viewMode === "by-crop" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Crop Grid Selector (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Available Crops ({filteredCrops.length})
              </h3>
              <span className="text-[11px] text-slate-400">Select to view diseases</span>
            </div>

            <div className="space-y-2 max-h-[700px] overflow-y-auto pr-1">
              {filteredCrops.map((crop) => {
                const isSelected = activeCrop?.id === crop.id;
                return (
                  <div
                    key={crop.id}
                    onClick={() => setSelectedCropId(crop.id)}
                    className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center space-x-3 group ${
                      isSelected
                        ? "bg-emerald-50/90 border-emerald-500 shadow-xs ring-1 ring-emerald-400/40"
                        : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <img
                      src={crop.imageUrl}
                      alt={crop.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4
                          className={`text-sm font-bold truncate ${
                            isSelected ? "text-emerald-900" : "text-slate-900 group-hover:text-emerald-700"
                          }`}
                        >
                          {crop.name}
                        </h4>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {crop.diseases.length} diseases
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 italic truncate">{crop.scientificName}</p>
                      <span className="inline-block mt-1 text-[10px] font-semibold text-emerald-700">
                        {crop.category}
                      </span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? "text-emerald-600 translate-x-0.5" : "text-slate-300"
                      }`}
                    />
                  </div>
                );
              })}

              {filteredCrops.length === 0 && (
                <div className="p-8 bg-white rounded-3xl text-center border border-slate-200">
                  <Leaf className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-slate-700">No matching crops found</p>
                  <p className="text-[11px] text-slate-400 mt-1">Try adjusting your search query or filters.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All Crops");
                      setSelectedPathogen("All Pathogens");
                    }}
                    className="mt-3 px-3 py-1.5 bg-emerald-600 text-white rounded-xl text-xs font-semibold cursor-pointer"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Active Crop Profile & Disease Catalog (8 cols) */}
          {activeCrop && (
            <div id="crop-detail-panel" className="lg:col-span-8 space-y-6">
              {/* Active Crop Summary Card */}
              <div className="bg-white rounded-3xl p-6 shadow-xs border border-slate-200 space-y-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                  <div className="flex items-start space-x-4">
                    <img
                      src={activeCrop.imageUrl}
                      alt={activeCrop.name}
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 rounded-2xl object-cover shadow-xs shrink-0"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <h2 className="text-xl font-bold text-slate-900">{activeCrop.name}</h2>
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                          {activeCrop.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 italic font-medium">{activeCrop.scientificName}</p>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{activeCrop.description}</p>
                      <div className="pt-2 flex flex-wrap items-center gap-3 text-[11px] text-slate-500">
                        <span className="flex items-center space-x-1">
                          <Droplets className="w-3.5 h-3.5 text-blue-500" />
                          <span>{activeCrop.idealSoil}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Thermometer className="w-3.5 h-3.5 text-amber-500" />
                          <span>{activeCrop.idealTemp}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons for this crop */}
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => onSelectCropForScan(activeCrop.name)}
                    className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold shadow-xs flex items-center justify-center space-x-2 transition-all active:scale-95 cursor-pointer"
                  >
                    <Camera className="w-4 h-4 text-emerald-400" />
                    <span>Scan {activeCrop.name} (Camera / Upload)</span>
                  </button>

                  {matchingSampleForActiveCrop && (
                    <button
                      type="button"
                      onClick={() =>
                        onSelectCropForScan(
                          activeCrop.name,
                          matchingSampleForActiveCrop.imageUrl,
                          true
                        )
                      }
                      className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs flex items-center justify-center space-x-2 transition-all active:scale-95 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-emerald-200" />
                      <span>Instant Sample Diagnosis ({matchingSampleForActiveCrop.disease})</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Disease Cards for this Crop */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Known Diseases & Pathology Profiles ({activeCrop.diseases.length})</span>
                  </h3>
                  <span className="text-xs text-slate-500">Click any card to see full pathology & remedies</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCrop.diseases.map((disease) => (
                    <div
                      key={disease.id}
                      className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-emerald-400 transition-all flex flex-col justify-between group"
                    >
                      {/* Clickable Card Body to view Disease Info */}
                      <div
                        onClick={() => handleOpenDiseaseModal(disease)}
                        className="cursor-pointer"
                      >
                        {/* Disease Header Image & Badges */}
                        <div className="relative h-44 overflow-hidden bg-slate-100">
                          <img
                            src={disease.referenceImageUrl}
                            alt={disease.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                          />
                          <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/80 backdrop-blur-xs text-white">
                              {disease.pathogenType}
                            </span>
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                                disease.severityDefault === "Severe"
                                  ? "bg-rose-600 text-white"
                                  : disease.severityDefault === "High"
                                  ? "bg-amber-600 text-white"
                                  : "bg-blue-600 text-white"
                              }`}
                            >
                              {disease.severityDefault}
                            </span>
                          </div>

                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                            <span className="text-white text-xs font-semibold flex items-center space-x-1">
                              <Info className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Click to read full pathology & remedies</span>
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-4 space-y-3">
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                              {disease.name}
                            </h4>
                            <p className="text-[11px] text-slate-500 italic">{disease.scientificName}</p>
                          </div>

                          <div>
                            <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center space-x-1">
                              <span>Key Symptoms:</span>
                            </p>
                            <ul className="space-y-1 text-xs text-slate-600">
                              {disease.symptoms.slice(0, 2).map((s, i) => (
                                <li key={i} className="flex items-start space-x-1.5">
                                  <span className="text-emerald-600 font-bold">•</span>
                                  <span className="line-clamp-2">{s}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Quick remedy preview */}
                          {disease.organicRemedies.length > 0 && (
                            <div className="p-2.5 bg-emerald-50/60 rounded-xl border border-emerald-100 text-[11px] text-emerald-900">
                              <span className="font-bold">Organic Cure: </span>
                              <span className="line-clamp-1">{disease.organicRemedies[0].title}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="p-4 pt-0 grid grid-cols-2 gap-2 border-t border-slate-100 mt-2 pt-3">
                        <button
                          type="button"
                          onClick={() => handleOpenDiseaseModal(disease)}
                          className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-all shadow-xs active:scale-95 cursor-pointer"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>See Disease Info</span>
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            onSelectCropForScan(disease.cropName, disease.referenceImageUrl, true)
                          }
                          className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors border border-slate-200 cursor-pointer"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Test Scan</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* VIEW MODE 2: All Crop Diseases Directory */}
      {viewMode === "all-diseases" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>All Diseases Directory ({filteredAllDiseases.length} matching)</span>
            </h3>
            <span className="text-xs text-slate-500">Click any disease card to view remedies, formulas & videos</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAllDiseases.map((disease) => (
              <div
                key={disease.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-emerald-400 transition-all flex flex-col justify-between group"
              >
                <div
                  onClick={() => handleOpenDiseaseModal(disease)}
                  className="cursor-pointer"
                >
                  <div className="relative h-40 overflow-hidden bg-slate-100">
                    <img
                      src={disease.referenceImageUrl}
                      alt={disease.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900 text-white">
                        {disease.cropName}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-700 text-white">
                        {disease.pathogenType}
                      </span>
                    </div>

                    <div className="absolute top-2.5 right-2.5">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          disease.severityDefault === "Severe"
                            ? "bg-rose-600 text-white"
                            : disease.severityDefault === "High"
                            ? "bg-amber-600 text-white"
                            : "bg-blue-600 text-white"
                        }`}
                      >
                        {disease.severityDefault}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {disease.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 italic">{disease.scientificName}</p>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2">
                      {disease.symptoms[0] || disease.causes}
                    </p>

                    {disease.organicRemedies.length > 0 && (
                      <div className="p-2 bg-emerald-50 rounded-lg text-[11px] text-emerald-900 font-medium truncate">
                        🌿 {disease.organicRemedies[0].title}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4 pt-0 grid grid-cols-2 gap-2 border-t border-slate-100 mt-2 pt-3">
                  <button
                    type="button"
                    onClick={() => handleOpenDiseaseModal(disease)}
                    className="py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Disease Info</span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      onSelectCropForScan(disease.cropName, disease.referenceImageUrl, true)
                    }
                    className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors border border-slate-200 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Test Scan</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* COMPREHENSIVE DISEASE DETAIL & PATHOLOGY HANDBOOK MODAL */}
      {selectedDiseaseModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in">
          <div className="bg-white rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl border border-slate-200 max-h-[92vh] flex flex-col">
            {/* Modal Top Header */}
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-400/30">
                    {selectedDiseaseModal.cropName} Disease Profile
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                    {selectedDiseaseModal.pathogenType}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1">{selectedDiseaseModal.name}</h3>
                <p className="text-xs text-slate-300 italic">{selectedDiseaseModal.scientificName}</p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedDiseaseModal(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Internal Navigation Tabs */}
            <div className="bg-slate-100 border-b border-slate-200 px-6 flex items-center space-x-2 overflow-x-auto py-2 scrollbar-thin">
              <button
                type="button"
                onClick={() => setModalActiveTab("symptoms")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 shrink-0 cursor-pointer ${
                  modalActiveTab === "symptoms"
                    ? "bg-white text-slate-900 shadow-xs border border-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Info className="w-3.5 h-3.5 text-emerald-600" />
                <span>Symptoms & Pathology</span>
              </button>

              <button
                type="button"
                onClick={() => setModalActiveTab("organic")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 shrink-0 cursor-pointer ${
                  modalActiveTab === "organic"
                    ? "bg-white text-slate-900 shadow-xs border border-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                <span>Organic Remedies ({selectedDiseaseModal.organicRemedies.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setModalActiveTab("chemical")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 shrink-0 cursor-pointer ${
                  modalActiveTab === "chemical"
                    ? "bg-white text-slate-900 shadow-xs border border-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <FlaskConical className="w-3.5 h-3.5 text-blue-600" />
                <span>Chemical IPM ({selectedDiseaseModal.chemicalRemedies.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setModalActiveTab("inputs")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 shrink-0 cursor-pointer ${
                  modalActiveTab === "inputs"
                    ? "bg-white text-slate-900 shadow-xs border border-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <ShoppingCart className="w-3.5 h-3.5 text-amber-600" />
                <span>Inputs & Bio-Pesticides</span>
              </button>

              <button
                type="button"
                onClick={() => setModalActiveTab("videos")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 shrink-0 cursor-pointer ${
                  modalActiveTab === "videos"
                    ? "bg-white text-slate-900 shadow-xs border border-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Video className="w-3.5 h-3.5 text-red-600" />
                <span>Video Guides</span>
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs text-slate-700">
              {/* TAB 1: Symptoms & Pathology */}
              {modalActiveTab === "symptoms" && (
                <div className="space-y-6">
                  {/* Photo & Hallmark */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
                      <img
                        src={selectedDiseaseModal.referenceImageUrl}
                        alt={selectedDiseaseModal.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-52 object-cover"
                      />
                      <div className="p-2.5 bg-slate-50 text-[11px] text-slate-600 text-center font-medium border-t border-slate-100 flex items-center justify-center space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Verified Field Symptom Reference Photo</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm mb-1.5">Key Diagnostic Symptoms:</h5>
                        <ul className="space-y-1.5">
                          {selectedDiseaseModal.symptoms.map((s, idx) => (
                            <li key={idx} className="flex items-start space-x-2 bg-slate-50 p-2 rounded-xl border border-slate-100">
                              <span className="text-emerald-600 font-bold text-base leading-none">•</span>
                              <span className="text-slate-800 leading-relaxed">{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 space-y-1">
                        <strong className="block text-xs font-bold text-amber-950">Favorable Weather & Incubation:</strong>
                        <p className="text-[11px] leading-relaxed">{selectedDiseaseModal.favorableWeather}</p>
                      </div>

                      <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 text-blue-900 space-y-1">
                        <strong className="block text-xs font-bold text-blue-950">Etiology & Spread Mode:</strong>
                        <p className="text-[11px] leading-relaxed">{selectedDiseaseModal.causes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: Organic Remedies */}
              {modalActiveTab === "organic" && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Leaf className="w-4 h-4 text-emerald-600" />
                    <h5 className="font-bold text-slate-900 text-sm">
                      Validated Organic Formulations & Biological Treatments
                    </h5>
                  </div>

                  <div className="space-y-3">
                    {selectedDiseaseModal.organicRemedies.map((remedy, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-emerald-950 text-sm">{remedy.title}</p>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900">
                            100% Organic
                          </span>
                        </div>

                        <div className="bg-white p-3 rounded-xl border border-emerald-100 text-slate-800">
                          <strong className="text-emerald-900 font-semibold block mb-1">Preparation Recipe & Dilution:</strong>
                          <p className="leading-relaxed">{remedy.recipe}</p>
                        </div>

                        <div className="bg-emerald-100/50 p-2.5 rounded-xl text-emerald-900">
                          <strong>Application Timing & Spray Method:</strong> {remedy.application}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: Chemical IPM */}
              {modalActiveTab === "chemical" && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <FlaskConical className="w-4 h-4 text-blue-600" />
                    <h5 className="font-bold text-slate-900 text-sm">
                      Integrated Pest Management (IPM) Chemical Options
                    </h5>
                  </div>

                  {selectedDiseaseModal.chemicalRemedies.length > 0 ? (
                    <div className="space-y-3">
                      {selectedDiseaseModal.chemicalRemedies.map((chem, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <p className="font-bold text-slate-900 text-sm">{chem.title}</p>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                              Active Ingredient
                            </span>
                          </div>
                          <p className="text-slate-700">
                            <strong>Chemical Molecule:</strong> {chem.ingredient}
                          </p>
                          <p className="text-slate-600">
                            <strong>Recommended Dosage:</strong> {chem.dosage}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 bg-slate-50 rounded-2xl text-center border border-slate-200">
                      <p className="text-slate-600 font-medium">
                        This disease is best managed through non-chemical biological inputs and sanitization practices.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: Inputs & Products */}
              {modalActiveTab === "inputs" && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <ShoppingCart className="w-4 h-4 text-emerald-600" />
                    <h5 className="font-bold text-slate-900 text-sm">
                      Recommended Inputs, Bio-Agents & Formulations
                    </h5>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedDiseaseModal.recommendedInputs.map((input, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-emerald-400 flex flex-col justify-between shadow-2xs"
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                              {input.type}
                            </span>
                            <span className="font-bold text-slate-700 text-xs">{input.price}</span>
                          </div>
                          <p className="font-bold text-slate-900 text-xs">{input.name}</p>
                          <p className="text-slate-600 text-[11px] leading-relaxed">{input.benefit}</p>
                          <p className="text-emerald-700 font-semibold text-[11px]">Dosage: {input.dosage}</p>
                        </div>

                        <a
                          href={`https://www.amazon.com/s?k=${encodeURIComponent(input.searchQuery)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                        >
                          <ShoppingCart className="w-3.5 h-3.5" />
                          <span>Search & Buy Online</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: Videos */}
              {modalActiveTab === "videos" && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Video className="w-4 h-4 text-red-600" />
                    <h5 className="font-bold text-slate-900 text-sm">
                      Practical Video Tutorials & Field Guides
                    </h5>
                  </div>

                  <div className="space-y-2.5">
                    {selectedDiseaseModal.videoTutorials.map((vid, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-red-300 flex items-center justify-between transition-colors"
                      >
                        <div className="space-y-0.5">
                          <p className="font-bold text-slate-900 text-xs">{vid.title}</p>
                          <p className="text-[11px] text-slate-500">
                            {vid.channel} • {vid.duration}
                          </p>
                        </div>
                        <a
                          href={`https://www.youtube.com/results?search_query=${encodeURIComponent(vid.query)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2 px-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 shrink-0 transition-colors cursor-pointer"
                        >
                          <Video className="w-3.5 h-3.5" />
                          <span>Watch Guide</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom Footer with Action Hub */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const disease = selectedDiseaseModal;
                    setSelectedDiseaseModal(null);
                    onSelectCropForScan(disease.cropName, disease.referenceImageUrl, true);
                  }}
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center space-x-2 shadow-xs transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Instant Test Scan</span>
                </button>

                {onAskDoctor && (
                  <button
                    type="button"
                    onClick={() => {
                      const disease = selectedDiseaseModal;
                      setSelectedDiseaseModal(null);
                      onAskDoctor(
                        `How do I manage and cure ${disease.name} in my ${disease.cropName} crop using organic and biological remedies? Please provide step-by-step preparation and application timing.`
                      );
                    }}
                    className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center space-x-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Ask Dr. Flora AI About This</span>
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={() => setSelectedDiseaseModal(null)}
                className="px-4 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
              >
                Close Handbook
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
