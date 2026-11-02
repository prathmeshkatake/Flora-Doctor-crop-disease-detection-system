import React, { useState } from "react";
import {
  CheckCircle,
  AlertTriangle,
  AlertOctagon,
  Sparkles,
  Leaf,
  Droplets,
  Sprout,
  Video,
  ShoppingCart,
  Volume2,
  VolumeX,
  Printer,
  Bookmark,
  Share2,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap,
  Info,
  Calendar,
  Layers,
  Search,
  MessageSquare,
  Check,
  Eye,
  SlidersHorizontal,
  Maximize2,
  X,
  ArrowLeftRight,
  CheckCircle2,
} from "lucide-react";
import { DiagnosisResult, RecommendedProduct, CuratedVideo } from "../types";
import { findCropOrDiseaseReference } from "../data/cropsData";

interface DiagnosisResultProps {
  diagnosis: DiagnosisResult;
  userImage?: string;
  onAskDoctor: (contextPrompt: string) => void;
  onSaveToHistory: (result: DiagnosisResult) => void;
  onReset: () => void;
  isSaved?: boolean;
}

export const DiagnosisResultView: React.FC<DiagnosisResultProps> = ({
  diagnosis,
  userImage,
  onAskDoctor,
  onSaveToHistory,
  onReset,
  isSaved = false,
}) => {
  const [activeTab, setActiveTab] = useState<
    "organic" | "fertilizers" | "videos" | "chemical" | "prevention"
  >("organic");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [comparisonMode, setComparisonMode] = useState<"3way" | "slider" | "checkpoints">("3way");
  const [sliderPosition, setSliderPosition] = useState(50);
  const [sliderTarget, setSliderTarget] = useState<"disease" | "healthy">("disease");
  const [activeZoomImage, setActiveZoomImage] = useState<{ url: string; title: string; subtitle?: string } | null>(null);
  const [savedLocally, setSavedLocally] = useState(isSaved);

  // Retrieve matching reference images for this crop and disease
  const referenceData = React.useMemo(() => {
    return findCropOrDiseaseReference(diagnosis.cropName, diagnosis.diseaseName);
  }, [diagnosis.cropName, diagnosis.diseaseName]);

  const userLeafPhoto = userImage || diagnosis.userImage || referenceData.diseaseReferenceUrl;
  const diseaseReferencePhoto = referenceData.diseaseReferenceUrl;
  const healthyReferencePhoto = referenceData.healthyReferenceUrl;

  // Text to Speech reader using Web Speech API
  const handleToggleVoice = () => {
    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    if ("speechSynthesis" in window) {
      const speechText = `Diagnosis for ${diagnosis.cropName}. Condition detected: ${
        diagnosis.diseaseName
      }. Pathogen type: ${diagnosis.pathogenType}. Severity: ${
        diagnosis.severity
      }. Summary: ${diagnosis.agronomistSummary}. Recommended immediate organic remedy: ${
        diagnosis.organicTreatments[0]?.title || "Follow standard bio-pesticide guidelines"
      }.`;

      const utterance = new SpeechSynthesisUtterance(speechText);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);

      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    } else {
      alert("Text-to-Speech is not supported in your browser.");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSave = () => {
    onSaveToHistory(diagnosis);
    setSavedLocally(true);
  };

  const getSeverityBadge = () => {
    switch (diagnosis.severity) {
      case "Severe":
        return {
          bg: "bg-rose-100 text-rose-800 border-rose-200",
          icon: AlertOctagon,
          label: "Severe Infection",
        };
      case "Moderate":
        return {
          bg: "bg-amber-100 text-amber-800 border-amber-200",
          icon: AlertTriangle,
          label: "Moderate Disease",
        };
      case "Mild":
        return {
          bg: "bg-blue-100 text-blue-800 border-blue-200",
          icon: Info,
          label: "Mild Early Stage",
        };
      default:
        return {
          bg: "bg-emerald-100 text-emerald-800 border-emerald-200",
          icon: CheckCircle,
          label: "Healthy Plant",
        };
    }
  };

  const severityBadge = getSeverityBadge();
  const SeverityIcon = severityBadge.icon;

  return (
    <div id="diagnosis-result-container" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* Top Header Card with Diagnosis Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 relative overflow-hidden">
        {/* Status indicator bar */}
        <div
          className={`absolute top-0 inset-x-0 h-1.5 ${
            diagnosis.isHealthy
              ? "bg-emerald-500"
              : diagnosis.severity === "Severe"
              ? "bg-rose-500"
              : diagnosis.severity === "Moderate"
              ? "bg-amber-500"
              : "bg-blue-500"
          }`}
        />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                🌿 {diagnosis.cropName} ({diagnosis.scientificName})
              </span>
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full border flex items-center space-x-1 ${severityBadge.bg}`}
              >
                <SeverityIcon className="w-3.5 h-3.5" />
                <span>{severityBadge.label}</span>
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                Type: {diagnosis.pathogenType}
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                Confidence: {diagnosis.confidenceScore}%
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {diagnosis.diseaseName}
            </h1>
            {diagnosis.scientificDiseaseName && diagnosis.scientificDiseaseName !== "None" && (
              <p className="text-xs sm:text-sm text-slate-500 italic">
                Pathogen: {diagnosis.scientificDiseaseName}
              </p>
            )}
          </div>

          {/* Quick Action Tools: Voice Reader, Save, Print, Ask Doctor */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              id="tts-read-aloud-btn"
              onClick={handleToggleVoice}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all border ${
                isPlayingAudio
                  ? "bg-emerald-600 text-white border-emerald-600 animate-pulse"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200"
              }`}
              title="Listen to diagnosis audio explanation"
            >
              {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span>{isPlayingAudio ? "Stop Audio" : "Listen (TTS)"}</span>
            </button>

            <button
              id="save-scan-history-btn"
              onClick={handleSave}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all border ${
                savedLocally
                  ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200"
              }`}
            >
              <Bookmark className={`w-4 h-4 ${savedLocally ? "fill-emerald-600 text-emerald-600" : ""}`} />
              <span>{savedLocally ? "Saved in History" : "Save Scan"}</span>
            </button>

            <button
              id="print-prescription-btn"
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 flex items-center space-x-1.5 transition-all"
              title="Print Prescription Report"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print Report</span>
            </button>

            <button
              id="ask-agribot-diagnosis-btn"
              onClick={() =>
                onAskDoctor(
                  `I just diagnosed my ${diagnosis.cropName} with ${diagnosis.diseaseName} (${diagnosis.severity} severity). What specific steps should I take next?`
                )
              }
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white flex items-center space-x-1.5 shadow-xs transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask Dr. Flora</span>
            </button>
          </div>
        </div>

        {/* Agronomist Summary Banner */}
        <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Dr. Flora&apos;s Agronomist Summary & Urgent Action
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
              {diagnosis.agronomistSummary}
            </p>
          </div>
        </div>
      </div>

      {/* Visual Photo Comparison Section (Normal & Fast Visual Verification) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Visual Inspection & Match
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center space-x-2 mt-1">
              <Eye className="w-5 h-5 text-emerald-600" />
              <span>Photo Comparison: Your Leaf vs Certified Reference</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Rapid visual comparison between your scanned sample, certified disease hallmarks, and healthy baseline foliage
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-2xl shrink-0">
            <button
              id="mode-3way-board"
              onClick={() => setComparisonMode("3way")}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
                comparisonMode === "3way"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              3-Way Board
            </button>
            <button
              id="mode-split-slider"
              onClick={() => setComparisonMode("slider")}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all flex items-center space-x-1 ${
                comparisonMode === "slider"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <ArrowLeftRight className="w-3.5 h-3.5" />
              <span>Split Slider</span>
            </button>
            <button
              id="mode-checkpoints"
              onClick={() => setComparisonMode("checkpoints")}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
                comparisonMode === "checkpoints"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Checkpoints
            </button>
          </div>
        </div>

        {/* MODE 1: 3-WAY RAPID VISUAL BOARD */}
        {comparisonMode === "3way" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* CARD 1: User's Leaf Photo */}
              <div className="rounded-2xl border-2 border-emerald-500/40 bg-emerald-50/20 p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-900 flex items-center space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      <span>1. Your Scanned Leaf</span>
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                      User Upload
                    </span>
                  </div>

                  <div className="relative rounded-xl overflow-hidden bg-slate-200 aspect-4/3 group">
                    <img
                      src={userLeafPhoto}
                      alt="Your scanned leaf"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform"
                    />
                    <button
                      onClick={() =>
                        setActiveZoomImage({
                          url: userLeafPhoto,
                          title: "Your Scanned Leaf",
                          subtitle: `${diagnosis.cropName} - ${diagnosis.diseaseName}`,
                        })
                      }
                      className="absolute bottom-2 right-2 p-1.5 bg-black/60 hover:bg-black/80 text-white rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1 backdrop-blur-xs"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="text-[10px]">Zoom</span>
                    </button>
                  </div>
                </div>

                <div className="mt-3 p-2.5 rounded-xl bg-white border border-slate-200 text-xs">
                  <div className="text-[11px] font-bold text-slate-800 mb-1">Observed Features:</div>
                  <div className="text-slate-600 line-clamp-2">
                    {diagnosis.symptomsIdentified.slice(0, 2).join(" • ")}
                  </div>
                </div>
              </div>

              {/* CARD 2: Pathology Hallmark Reference Photo */}
              <div className="rounded-2xl border-2 border-amber-500/40 bg-amber-50/20 p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-900 flex items-center space-x-1.5">
                      <ShieldCheck className="w-4 h-4 text-amber-600" />
                      <span>2. Disease Hallmark Ref</span>
                    </span>
                    <span className="text-[10px] font-semibold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full">
                      Certified Pathology
                    </span>
                  </div>

                  <div className="relative rounded-xl overflow-hidden bg-slate-200 aspect-4/3 group">
                    <img
                      src={diseaseReferencePhoto}
                      alt={diagnosis.diseaseName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform"
                    />
                    <button
                      onClick={() =>
                        setActiveZoomImage({
                          url: diseaseReferencePhoto,
                          title: `Verified Hallmark: ${diagnosis.diseaseName}`,
                          subtitle: diagnosis.referenceComparison?.hallmarkSymptoms || referenceData.hallmarkNotes,
                        })
                      }
                      className="absolute bottom-2 right-2 p-1.5 bg-black/60 hover:bg-black/80 text-white rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1 backdrop-blur-xs"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="text-[10px]">Zoom</span>
                    </button>
                  </div>
                </div>

                <div className="mt-3 p-2.5 rounded-xl bg-white border border-slate-200 text-xs">
                  <div className="text-[11px] font-bold text-amber-900 mb-1">Definitive Hallmark:</div>
                  <div className="text-slate-600 line-clamp-2">
                    {diagnosis.referenceComparison?.hallmarkSymptoms || referenceData.hallmarkNotes}
                  </div>
                </div>
              </div>

              {/* CARD 3: Normal Healthy Leaf Baseline Photo */}
              <div className="rounded-2xl border-2 border-teal-500/40 bg-teal-50/20 p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-900 flex items-center space-x-1.5">
                      <Sprout className="w-4 h-4 text-teal-600" />
                      <span>3. Healthy Baseline</span>
                    </span>
                    <span className="text-[10px] font-semibold text-teal-900 bg-teal-100 px-2 py-0.5 rounded-full">
                      Normal Leaf
                    </span>
                  </div>

                  <div className="relative rounded-xl overflow-hidden bg-slate-200 aspect-4/3 group">
                    <img
                      src={healthyReferencePhoto}
                      alt="Healthy leaf baseline"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform"
                    />
                    <button
                      onClick={() =>
                        setActiveZoomImage({
                          url: healthyReferencePhoto,
                          title: `Healthy ${diagnosis.cropName} Foliage`,
                          subtitle: diagnosis.referenceComparison?.healthyLeafAppearance || "Uniform deep green color, smooth margins, and intact vascular turgor.",
                        })
                      }
                      className="absolute bottom-2 right-2 p-1.5 bg-black/60 hover:bg-black/80 text-white rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1 backdrop-blur-xs"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="text-[10px]">Zoom</span>
                    </button>
                  </div>
                </div>

                <div className="mt-3 p-2.5 rounded-xl bg-white border border-slate-200 text-xs">
                  <div className="text-[11px] font-bold text-teal-900 mb-1">Healthy Appearance:</div>
                  <div className="text-slate-600 line-clamp-2">
                    {diagnosis.referenceComparison?.healthyLeafAppearance || "Uniform deep green color, smooth margins, and intact turgor."}
                  </div>
                </div>
              </div>
            </div>

            {/* Rapid Comparison Callout */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-slate-700">
                  <strong>Key Distinguishing Clue:</strong>{" "}
                  {diagnosis.referenceComparison?.keyVisualDifference ||
                    "Check lesion borders and vein limitation to confirm pathogen type."}
                </span>
              </div>
              <span className="text-slate-500 whitespace-nowrap text-[11px]">
                Matched against {diagnosis.cropName} pathology library
              </span>
            </div>
          </div>
        )}

        {/* MODE 2: INTERACTIVE SPLIT SLIDER */}
        {comparisonMode === "slider" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-2xl border border-slate-200">
              <span className="text-xs text-slate-600 font-medium">
                Drag slider to visually overlap and compare:
              </span>
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setSliderTarget("disease")}
                  className={`px-3 py-1 text-xs font-bold rounded-xl transition-all ${
                    sliderTarget === "disease"
                      ? "bg-amber-600 text-white shadow-xs"
                      : "bg-white text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  vs Diseased Hallmark
                </button>
                <button
                  onClick={() => setSliderTarget("healthy")}
                  className={`px-3 py-1 text-xs font-bold rounded-xl transition-all ${
                    sliderTarget === "healthy"
                      ? "bg-teal-600 text-white shadow-xs"
                      : "bg-white text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  vs Healthy Leaf
                </button>
              </div>
            </div>

            {/* Split Image Canvas */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-16/9 sm:aspect-21/9 max-h-[380px] select-none shadow-md border border-slate-300">
              {/* Background: Comparison Reference Image */}
              <img
                src={sliderTarget === "disease" ? diseaseReferencePhoto : healthyReferencePhoto}
                alt="Reference standard"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
                {sliderTarget === "disease" ? `Reference: ${diagnosis.diseaseName}` : `Healthy ${diagnosis.cropName}`}
              </div>

              {/* Foreground: User Uploaded Leaf (Clipped by slider percentage) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={userLeafPhoto}
                  alt="Your scanned leaf"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="absolute top-3 left-3 bg-emerald-600/90 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                  Your Scanned Leaf
                </div>
              </div>

              {/* Divider Handle Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-xl cursor-ew-resize flex items-center justify-center -ml-0.5"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-7 h-7 rounded-full bg-white text-slate-800 shadow-md flex items-center justify-center border border-slate-200">
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Interactive Range Input overlaying the container */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 px-1">
              <span>⬅️ Left: Your Leaf ({sliderPosition}%)</span>
              <span className="font-semibold text-slate-700">Slide left or right to inspect lesion contours</span>
              <span>Right: {sliderTarget === "disease" ? "Disease Reference" : "Healthy Leaf"} ({100 - sliderPosition}%) ➡️</span>
            </div>
          </div>
        )}

        {/* MODE 3: FAST DIAGNOSTIC CHECKPOINTS */}
        {comparisonMode === "checkpoints" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  1. Spot Morphology
                </div>
                <div className="text-sm font-bold text-slate-900">
                  {diagnosis.pathogenType === "Fungal"
                    ? "Concentric Rings / Pustules"
                    : diagnosis.pathogenType === "Bacterial"
                    ? "Angular Water-Soaked Spots"
                    : diagnosis.pathogenType === "Viral"
                    ? "Mosaic Puckering & Curling"
                    : "Interveinal Chlorosis"}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  {diagnosis.symptomsIdentified[0] || "Characteristic lesion shape"}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  2. Discoloration & Halo
                </div>
                <div className="text-sm font-bold text-slate-900">
                  {diagnosis.symptomsIdentified[1] || "Yellow Chlorotic Halo"}
                </div>
                <p className="text-xs text-slate-500 mt-1">Surrounds necrotic tissue</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  3. Pathogen Correlation
                </div>
                <div className="text-sm font-bold text-emerald-700">
                  {diagnosis.confidenceScore}% Visual Match
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Standard: {diagnosis.scientificDiseaseName || "Verified pathology standard"}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  4. Expected Remission
                </div>
                <div className="text-sm font-bold text-slate-900">5 - 7 Days</div>
                <p className="text-xs text-slate-500 mt-1">With recommended bio-spray schedule</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200">
              <h5 className="text-xs font-bold text-emerald-950 flex items-center space-x-1.5 mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Certified Pathological Hallmarks & Baseline</span>
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Definitive Disease Hallmarks:</span>
                  <span className="text-slate-600">
                    {diagnosis.referenceComparison?.hallmarkSymptoms || referenceData.hallmarkNotes}
                  </span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Healthy Leaf Baseline:</span>
                  <span className="text-slate-600">
                    {diagnosis.referenceComparison?.healthyLeafAppearance ||
                      "Uniform deep green color, smooth margins, and intact vascular turgor."}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox / Zoom Modal */}
      {activeZoomImage && (
        <div
          onClick={() => setActiveZoomImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl border border-slate-200"
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <div>
                <h4 className="text-sm font-bold text-slate-900">{activeZoomImage.title}</h4>
                {activeZoomImage.subtitle && (
                  <p className="text-xs text-slate-500">{activeZoomImage.subtitle}</p>
                )}
              </div>
              <button
                onClick={() => setActiveZoomImage(null)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-slate-900 flex items-center justify-center max-h-[70vh] overflow-hidden">
              <img
                src={activeZoomImage.url}
                alt={activeZoomImage.title}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}

      {/* Structured Multi-Tab Detailed Plan: Organic Remedies, Bio-Fertilizers & Pesticides, Video Guides, Chemical IPM */}
      <div className="bg-white rounded-3xl shadow-xs border border-slate-200 overflow-hidden">
        {/* Navigation Tabs Header */}
        <div className="flex items-center overflow-x-auto border-b border-slate-200 bg-slate-50/90 px-4 pt-3 gap-2">
          <button
            id="tab-organic-remedies"
            onClick={() => setActiveTab("organic")}
            className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold flex items-center space-x-2 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === "organic"
                ? "border-emerald-600 bg-white text-emerald-800 shadow-xs"
                : "border-transparent text-slate-600 hover:text-slate-900"
            }`}
          >
            <Leaf className="w-4 h-4 text-emerald-600" />
            <span>Organic & Natural Remedies</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-emerald-100 text-emerald-800">
              {diagnosis.organicTreatments?.length || 0}
            </span>
          </button>

          <button
            id="tab-fertilizers-products"
            onClick={() => setActiveTab("fertilizers")}
            className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold flex items-center space-x-2 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === "fertilizers"
                ? "border-emerald-600 bg-white text-emerald-800 shadow-xs"
                : "border-transparent text-slate-600 hover:text-slate-900"
            }`}
          >
            <ShoppingCart className="w-4 h-4 text-emerald-600" />
            <span>Organic Fertilizers & Pesticides (Buy Links)</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-emerald-100 text-emerald-800">
              {diagnosis.recommendedProducts?.length || 0}
            </span>
          </button>

          <button
            id="tab-video-guides"
            onClick={() => setActiveTab("videos")}
            className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold flex items-center space-x-2 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === "videos"
                ? "border-emerald-600 bg-white text-emerald-800 shadow-xs"
                : "border-transparent text-slate-600 hover:text-slate-900"
            }`}
          >
            <Video className="w-4 h-4 text-emerald-600" />
            <span>Remedy Video Tutorials</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-emerald-100 text-emerald-800">
              {diagnosis.curatedVideos?.length || 0}
            </span>
          </button>

          <button
            id="tab-chemical-ipm"
            onClick={() => setActiveTab("chemical")}
            className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold flex items-center space-x-2 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === "chemical"
                ? "border-emerald-600 bg-white text-emerald-800 shadow-xs"
                : "border-transparent text-slate-600 hover:text-slate-900"
            }`}
          >
            <Zap className="w-4 h-4 text-emerald-600" />
            <span>Chemical & IPM Options</span>
          </button>

          <button
            id="tab-prevention"
            onClick={() => setActiveTab("prevention")}
            className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold flex items-center space-x-2 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === "prevention"
                ? "border-emerald-600 bg-white text-emerald-800 shadow-xs"
                : "border-transparent text-slate-600 hover:text-slate-900"
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Long-Term Prevention</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 sm:p-8">
          {/* TAB 1: Organic & Natural Remedies */}
          {activeTab === "organic" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Eco-Friendly Biological & Herbal Treatments
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Safe for beneficial pollinators, soil microbiome, and zero toxic chemical residue
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                  100% Organic Recipes
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {diagnosis.organicTreatments.map((treatment, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100/70 transition-colors flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                          {idx + 1}
                        </span>
                        <h5 className="text-sm font-bold text-slate-900">{treatment.title}</h5>
                      </div>

                      <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                        <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                          Recipe & Preparation:
                        </span>
                        <p className="text-xs text-slate-700 leading-relaxed font-medium">
                          {treatment.recipeOrPreparation}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-2 text-xs">
                        <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                          <span className="font-semibold text-slate-800">Timing & Schedule: </span>
                          <span className="text-slate-600">{treatment.timingAndFrequency}</span>
                        </div>
                        <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                          <span className="font-semibold text-slate-800">Biological Action: </span>
                          <span className="text-slate-600">{treatment.modeOfAction}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Recommended Organic Fertilizers & Bio-Pesticides (with Purchase Links) */}
          {activeTab === "fertilizers" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Recommended Organic Fertilizers, Bio-Fungicides & Pesticides
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Click any product to search and purchase online from certified agricultural suppliers
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                  Direct Buy Links
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {diagnosis.recommendedProducts.map((product, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-slate-200 hover:border-emerald-500 bg-white hover:shadow-xs transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                          {product.category}
                        </span>
                        <span className="text-xs font-bold text-slate-700">{product.estimatedPrice}</span>
                      </div>

                      <h5 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {product.name}
                      </h5>

                      <p className="text-xs text-slate-600 leading-relaxed">{product.description}</p>

                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs">
                        <span className="font-semibold text-slate-800">Recommended Dosage: </span>
                        <span className="text-emerald-700 font-medium">{product.dosage}</span>
                      </div>
                    </div>

                    {/* Direct Buy Links (Amazon & Agri Search) */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                      <a
                        href={`https://www.amazon.com/s?k=${encodeURIComponent(product.searchQuery)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center space-x-1.5 shadow-xs transition-colors"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Search Online</span>
                        <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Curated Remedy Video Guides */}
          {activeTab === "videos" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Curated Crop Pathology & Remedy Video Tutorials
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Step-by-step visual guides demonstrating correct spraying techniques, formulation mixing, and disease management
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-red-100 text-red-800 rounded-full flex items-center space-x-1">
                  <Video className="w-3 h-3" />
                  <span>Video Guides</span>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {diagnosis.curatedVideos.map((video, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 overflow-hidden bg-white hover:border-emerald-500 hover:shadow-xs transition-all flex flex-col justify-between group"
                  >
                    <div className="p-4 space-y-2.5">
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span className="font-semibold text-emerald-700">{video.channelOrSource}</span>
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-[11px]">
                          ⏱️ {video.durationGuess}
                        </span>
                      </div>

                      <h5 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                        {video.title}
                      </h5>

                      <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        {video.relevanceNote}
                      </p>
                    </div>

                    <div className="p-4 pt-0">
                      <a
                        href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                          video.youtubeSearchQuery
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 px-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors"
                      >
                        <Video className="w-3.5 h-3.5" />
                        <span>Watch Tutorial on YouTube</span>
                        <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Chemical & Integrated Pest Management (IPM) */}
          {activeTab === "chemical" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Conventional Chemical & IPM Options (For Severe Outbreaks)
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Use only when organic treatments are insufficient and disease threatens total crop loss
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-amber-100 text-amber-800 rounded-full">
                  IPM Protocols
                </span>
              </div>

              {diagnosis.chemicalTreatments && diagnosis.chemicalTreatments.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {diagnosis.chemicalTreatments.map((chem, idx) => (
                    <div key={idx} className="p-5 rounded-2xl border border-amber-200 bg-amber-50/30 space-y-3">
                      <div className="flex items-center justify-between">
                        <h5 className="text-sm font-bold text-slate-900">{chem.title}</h5>
                        <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                          Chemical
                        </span>
                      </div>

                      <div className="space-y-1.5 text-xs text-slate-700">
                        <p>
                          <strong>Active Ingredient:</strong> {chem.activeIngredient}
                        </p>
                        <p>
                          <strong>Application Rate:</strong> {chem.applicationRate}
                        </p>
                        <p className="text-rose-700 font-medium">
                          <strong>Safety & Pre-Harvest Interval:</strong> {chem.safetyInterval}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 bg-slate-50 rounded-2xl text-center text-slate-600 text-xs">
                  Organic and biological measures are fully sufficient for this condition. Chemical intervention is not recommended.
                </div>
              )}
            </div>
          )}

          {/* TAB 5: Long-Term Cultural Prevention */}
          {activeTab === "prevention" && (
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Agronomic Prevention & Cultural Practices
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Proactive farm management to prevent reinfection in future planting seasons
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {diagnosis.preventativeMeasures.map((measure, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3 text-xs text-slate-700"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{measure}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1">
                <p className="font-bold">Soil & Irrigation Hygiene:</p>
                <p>{diagnosis.wateringAdvice}</p>
                <p className="italic text-emerald-800">{diagnosis.soilHealthTips}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Floating/Fixed Action CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
        <div>
          <p className="text-sm font-bold text-slate-900">Have more questions about this leaf?</p>
          <p className="text-xs text-slate-500">
            Consult Dr. Flora (AI Agronomist) for custom spray schedules or tank mixing advice.
          </p>
        </div>

        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <button
            onClick={onReset}
            className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            Scan Another Plant
          </button>
          <button
            onClick={() =>
              onAskDoctor(
                `Can you give me a day-by-day spray schedule for my ${diagnosis.cropName} with ${diagnosis.diseaseName}?`
              )
            }
            className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xs flex items-center justify-center space-x-1.5 transition-all active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat with Agronomist</span>
          </button>
        </div>
      </div>
    </div>
  );
};
