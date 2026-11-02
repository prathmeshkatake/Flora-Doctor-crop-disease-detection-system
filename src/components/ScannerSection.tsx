import React, { useState, useRef, useEffect } from "react";
import {
  UploadCloud,
  Camera,
  Sparkles,
  Leaf,
  Info,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  RefreshCw,
  Image as ImageIcon,
  Zap,
  BookOpen,
  X,
  ShieldCheck,
  Droplets,
  ExternalLink,
  Flame,
  Maximize2,
  Check,
} from "lucide-react";
import { SAMPLE_LEAF_IMAGES, CROPS_DATABASE, findDiseaseForSample, findCropForSample } from "../data/cropsData";
import { SampleLeafImage, DiagnosisResult, DiseaseEncyclopediaItem, CropEncyclopediaItem } from "../types";
import { compressImage } from "../utils/imageUtils";

interface ScannerSectionProps {
  onDiagnose: (imageBase64: string, cropHint?: string) => Promise<void>;
  isLoading: boolean;
  onOpenCamera: () => void;
  selectedLanguage: string;
  onViewDiseaseInfo?: (disease: DiseaseEncyclopediaItem) => void;
  onNavigateToEncyclopedia?: () => void;
  initialCropHint?: string | null;
  initialImage?: string | null;
}

const COMMON_CROP_HINTS = [
  "Auto-Detect Crop",
  ...Array.from(new Set(CROPS_DATABASE.map((c) => c.name))),
  "Other Horticultural Crop",
];

const POPULAR_QUICK_CROPS = [
  { name: "Tomato", icon: "🍅" },
  { name: "Potato", icon: "🥔" },
  { name: "Rice / Paddy", icon: "🌾" },
  { name: "Sugarcane", icon: "🎋" },
  { name: "Mustard & Rapeseed", icon: "🌼" },
  { name: "Bell Pepper", icon: "🫑" },
  { name: "Guava", icon: "🍈" },
  { name: "Cotton", icon: "🪡" },
  { name: "Corn / Maize", icon: "🌽" },
  { name: "Carrot", icon: "🥕" },
  { name: "Spinach", icon: "🥬" },
  { name: "Sunflower", icon: "🌻" },
  { name: "Grapevine", icon: "🍇" },
  { name: "Chili", icon: "🌶️" },
  { name: "Wheat", icon: "🌾" },
  { name: "Avocado", icon: "🥑" },
  { name: "Pineapple", icon: "🍍" },
  { name: "Apple", icon: "🍎" },
  { name: "Banana", icon: "🍌" },
  { name: "Citrus", icon: "🍊" },
  { name: "Coffee", icon: "☕" },
];

export const ScannerSection: React.FC<ScannerSectionProps> = ({
  onDiagnose,
  isLoading,
  onOpenCamera,
  selectedLanguage,
  onViewDiseaseInfo,
  onNavigateToEncyclopedia,
  initialCropHint,
  initialImage,
}) => {
  const [dragOver, setDragOver] = useState(false);
  const [selectedImagePreview, setSelectedImagePreview] = useState<string | null>(initialImage || null);
  const [cropHint, setCropHint] = useState<string>(initialCropHint || "Auto-Detect Crop");
  const [scanStep, setScanStep] = useState(0);
  const [isCompressing, setIsCompressing] = useState(false);
  const [selectedSampleItem, setSelectedSampleItem] = useState<SampleLeafImage | null>(null);
  const [quickInfoModal, setQuickInfoModal] = useState<{
    sample: SampleLeafImage;
    disease: DiseaseEncyclopediaItem | null;
    crop: CropEncyclopediaItem | null;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Sync initialCropHint if provided
  useEffect(() => {
    if (initialCropHint) {
      setCropHint(initialCropHint);
    }
  }, [initialCropHint]);

  // Sync initialImage if provided
  useEffect(() => {
    if (initialImage) {
      setSelectedImagePreview(initialImage);
      const matchingSample = SAMPLE_LEAF_IMAGES.find((s) => s.imageUrl === initialImage);
      if (matchingSample) {
        setSelectedSampleItem(matchingSample);
      }
    }
  }, [initialImage]);

  // Progressive scanning steps animation during diagnosis
  React.useEffect(() => {
    if (!isLoading) {
      setScanStep(0);
      return;
    }
    const interval = setInterval(() => {
      setScanStep((prev) => (prev < 3 ? prev + 1 : prev));
    }, 1000);
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleFileChange = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid leaf image file (JPEG, PNG, WebP).");
      return;
    }

    setSelectedSampleItem(null);
    setIsCompressing(true);

    try {
      // Rapid client-side compression to avoid slow uploads
      const compressedDataUrl = await compressImage(file, 800, 800, 0.78);
      setSelectedImagePreview(compressedDataUrl);
    } catch (err) {
      console.warn("Client compression fallback:", err);
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target?.result as string;
        setSelectedImagePreview(base64);
      };
      reader.readAsDataURL(file);
    } finally {
      setIsCompressing(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleSelectSample = (sample: SampleLeafImage, autoStartScan: boolean = false) => {
    setSelectedSampleItem(sample);
    setSelectedImagePreview(sample.imageUrl);
    const targetCropHint = sample.crop === "Healthy Foliage" ? "Bell Pepper" : sample.crop;
    setCropHint(targetCropHint);

    if (autoStartScan) {
      // Direct diagnosis with image URL / base64
      onDiagnose(sample.imageUrl, targetCropHint);
    }
  };

  const handleOpenQuickInfo = (sample: SampleLeafImage, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const disease = findDiseaseForSample(sample);
    const crop = findCropForSample(sample);
    setQuickInfoModal({ sample, disease, crop });
  };

  const handleSubmitDiagnosis = () => {
    if (!selectedImagePreview || isLoading || isCompressing) return;
    onDiagnose(selectedImagePreview, cropHint === "Auto-Detect Crop" ? undefined : cropHint);
  };

  const SCAN_PROGRESS_STEPS = [
    { title: "Analyzing leaf morphology & discoloration patterns...", icon: Leaf },
    { title: "Detecting pathogen hallmarks (Fungal, Bacterial, Viral, Nutrient)...", icon: Sparkles },
    { title: "Cross-referencing pathology database & severity metrics...", icon: Zap },
    { title: "Formulating organic remedy schedule & fertilizer dosage...", icon: CheckCircle2 },
  ];


  return (
    <div id="scanner-section" className="space-y-8 animate-in fade-in duration-300">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-6 sm:p-10 shadow-xs border border-slate-800">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Next-Gen Agricultural Plant Health AI</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Instant Crop Disease Diagnosis & Organic Plant Care
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            Upload or snap a photo of any damaged, spotted, or wilted leaf. Our AI agronomist identifies the exact disease, compares it with verified pathology samples, provides natural organic remedies, and recommends the best fertilizers and bio-pesticides with direct purchase links.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800">
            <div>
              <div className="text-lg sm:text-xl font-bold text-white">40+</div>
              <div className="text-[11px] text-slate-400">Crops & Vegetables</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-emerald-400">96%+</div>
              <div className="text-[11px] text-slate-400">Diagnostic Accuracy</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-white">100% Organic</div>
              <div className="text-[11px] text-slate-400">Safe Bio-Remedies</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-emerald-400">Video Guides</div>
              <div className="text-[11px] text-slate-400">Curated Tutorials</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Upload & Camera Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Upload Dropzone & Camera Trigger (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 relative overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500" />

            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                <Leaf className="w-4 h-4 text-emerald-600" />
                <span>Upload or Take Leaf Photo</span>
              </h2>
              {/* Optional Crop Hint Selector */}
              <div className="flex items-center space-x-2">
                <span className="text-xs text-slate-500 hidden sm:inline">Crop (Optional):</span>
                <select
                  id="crop-hint-select"
                  value={cropHint}
                  onChange={(e) => setCropHint(e.target.value)}
                  className="text-xs bg-slate-100 border-none rounded-full px-3 py-1.5 text-slate-700 focus:ring-2 focus:ring-emerald-500 outline-hidden font-medium cursor-pointer"
                >
                  {COMMON_CROP_HINTS.map((hint) => (
                    <option key={hint} value={hint}>
                      {hint}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quick Recommended Crop Selector Bar */}
            <div className="mb-4">
              <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-thin">
                <span className="text-[11px] font-semibold text-slate-400 shrink-0 mr-1">
                  Quick Select:
                </span>
                {POPULAR_QUICK_CROPS.map((pc) => {
                  const isSelected = cropHint.toLowerCase().includes(pc.name.toLowerCase()) || (pc.name.includes("/") && pc.name.split("/").some(part => cropHint.toLowerCase().includes(part.trim().toLowerCase())));
                  return (
                    <button
                      key={pc.name}
                      type="button"
                      onClick={() => {
                        setCropHint(pc.name);
                        // Optionally check if a sample exists for this crop
                        const matching = SAMPLE_LEAF_IMAGES.find((s) =>
                          s.crop.toLowerCase().includes(pc.name.toLowerCase()) ||
                          pc.name.toLowerCase().includes(s.crop.toLowerCase())
                        );
                        if (matching && !selectedImagePreview) {
                          setSelectedSampleItem(matching);
                        }
                      }}
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1 shrink-0 cursor-pointer ${
                        isSelected
                          ? "bg-emerald-600 text-white shadow-xs scale-102"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                      }`}
                    >
                      <span>{pc.icon}</span>
                      <span>{pc.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dropzone Container */}
            <div
              id="leaf-dropzone"
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`relative cursor-pointer rounded-2xl border-2 border-dashed transition-all p-6 sm:p-8 text-center flex flex-col items-center justify-center min-h-[260px] ${
                dragOver
                  ? "border-emerald-500 bg-emerald-50/70"
                  : selectedImagePreview
                  ? "border-emerald-300 bg-slate-50"
                  : "border-slate-300 hover:border-emerald-500 bg-slate-50/80 hover:bg-emerald-50/30"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleFileChange(e.target.files[0]);
                  }
                }}
              />

              {selectedImagePreview ? (
                <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-md group">
                  <img
                    src={selectedImagePreview}
                    alt="Selected leaf preview"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold space-x-1.5">
                    <RefreshCw className="w-4 h-4" />
                    <span>Click to change leaf photo</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 max-w-sm flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1 border-2 border-dashed border-emerald-200">
                    <UploadCloud className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Drag and drop your leaf photo here
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Supports JPG, PNG, WebP up to 25MB
                    </p>
                  </div>
                  <div className="pt-1">
                    <span className="inline-flex items-center text-xs font-semibold text-emerald-800 bg-emerald-100/90 px-3.5 py-1 rounded-full">
                      Or browse from your device
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Selected Sample Information Banner (if selected from sample list) */}
            {selectedSampleItem && (
              <div className="mt-4 p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 flex items-center space-x-1.5">
                      <span>Loaded Sample:</span>
                      <span className="text-emerald-800">{selectedSampleItem.label}</span>
                    </div>
                    <div className="text-[11px] text-slate-600">{selectedSampleItem.badge}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 self-end sm:self-auto">
                  <button
                    type="button"
                    onClick={() => handleOpenQuickInfo(selectedSampleItem)}
                    className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold rounded-xl border border-slate-200 flex items-center space-x-1 transition-colors shadow-xs"
                  >
                    <Info className="w-3.5 h-3.5 text-emerald-600" />
                    <span>View Crop Info</span>
                  </button>
                  {onViewDiseaseInfo && (
                    <button
                      type="button"
                      onClick={() => {
                        const dis = findDiseaseForSample(selectedSampleItem);
                        if (dis) onViewDiseaseInfo(dis);
                      }}
                      className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-xl flex items-center space-x-1 transition-colors shadow-xs"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Full Handbook</span>
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Quick Action Buttons */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                id="open-camera-scanner-btn"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenCamera();
                }}
                className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center space-x-2 transition-all"
              >
                <Camera className="w-4 h-4 text-emerald-600" />
                <span>Take Photo with Camera</span>
              </button>

              <button
                id="submit-ai-diagnosis-btn"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSubmitDiagnosis();
                }}
                disabled={!selectedImagePreview || isLoading}
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:pointer-events-none text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs flex items-center justify-center space-x-2 transition-all active:scale-95"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Analyzing Leaf...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Diagnose Crop Health</span>
                  </>
                )}
              </button>
            </div>

            {/* Loading Indicator with Agricultural Stages */}
            {isLoading && (
              <div className="mt-5 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 animate-in fade-in">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
                  <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                    AI Agronomist Diagnosing in Real-Time
                  </span>
                </div>
                <div className="space-y-2">
                  {SCAN_PROGRESS_STEPS.map((step, idx) => {
                    const Icon = step.icon;
                    const isDone = scanStep > idx;
                    const isCurrent = scanStep === idx;
                    return (
                      <div
                        key={idx}
                        className={`flex items-center space-x-2.5 text-xs transition-opacity ${
                          isCurrent
                            ? "text-emerald-800 font-semibold opacity-100"
                            : isDone
                            ? "text-slate-500 opacity-60"
                            : "text-slate-400 opacity-40"
                        }`}
                      >
                        {isDone ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        ) : isCurrent ? (
                          <RefreshCw className="w-3.5 h-3.5 text-emerald-600 animate-spin shrink-0" />
                        ) : (
                          <Icon className="w-3.5 h-3.5 shrink-0" />
                        )}
                        <span>{step.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Photography Tips & Instant Testing Samples (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Quick Photography Tips for Accurate Diagnosis */}
          <div className="bg-white rounded-3xl p-6 shadow-xs border border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2 mb-3">
              <Info className="w-4 h-4 text-emerald-600" />
              <span>Leaf Photography Guide</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start space-x-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  1
                </span>
                <span>
                  <strong>Focus on Affected Foliage:</strong> Frame the leaf showing distinct spots, discoloration, or curling clearly.
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  2
                </span>
                <span>
                  <strong>Natural Lighting:</strong> Avoid heavy shadows or artificial flash glare which can mask subtle chlorosis halos.
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  3
                </span>
                <span>
                  <strong>Both Sides:</strong> Check if spots are on the top or underside (e.g., downy mildew or whitefly colonies).
                </span>
              </li>
            </ul>
          </div>

          {/* Instant 1-Click Test Samples & Crop Info Access */}
          <div className="bg-white rounded-3xl p-6 shadow-xs border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
                <ImageIcon className="w-4 h-4 text-emerald-600" />
                <span>Try Real Sample Leaves</span>
              </h3>
              <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                Interactive Test & Info
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-3.5">
              Click any verified leaf sample to run a live scan, or click <strong>Info</strong> to read the complete crop profile & remedies:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1">
              {SAMPLE_LEAF_IMAGES.map((sample) => {
                const isSelected = selectedSampleItem?.id === sample.id;
                return (
                  <div
                    key={sample.id}
                    className={`group relative rounded-2xl border transition-all p-2.5 flex flex-col justify-between ${
                      isSelected
                        ? "border-emerald-500 bg-emerald-50/50 shadow-xs ring-2 ring-emerald-500/20"
                        : "border-slate-200 hover:border-emerald-400 bg-slate-50 hover:bg-slate-100/80"
                    }`}
                  >
                    <div>
                      {/* Image with overlay tags */}
                      <div className="relative rounded-xl overflow-hidden aspect-16/10 mb-2 bg-slate-200">
                        <img
                          src={sample.imageUrl}
                          alt={sample.label}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                        />
                        <button
                          type="button"
                          onClick={(e) => handleOpenQuickInfo(sample, e)}
                          title="View Crop Info & Remedies"
                          className="absolute top-1.5 right-1.5 p-1 bg-black/60 hover:bg-black/80 text-white rounded-lg text-[10px] backdrop-blur-xs flex items-center space-x-1 transition-colors"
                        >
                          <Info className="w-3 h-3 text-emerald-400" />
                          <span className="font-semibold text-[10px]">Info</span>
                        </button>
                      </div>

                      {/* Title & Badge */}
                      <div className="mb-2">
                        <p className="text-xs font-bold text-slate-900 leading-tight group-hover:text-emerald-700">
                          {sample.label}
                        </p>
                        <p className="text-[10px] text-slate-500 mt-0.5 truncate">{sample.badge}</p>
                      </div>
                    </div>

                    {/* Dual Action Buttons: Test Scan & View Crop Info */}
                    <div className="pt-2 border-t border-slate-200/80 grid grid-cols-2 gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleSelectSample(sample, true)}
                        className="py-1.5 px-2 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold rounded-lg flex items-center justify-center space-x-1 transition-colors shadow-xs"
                      >
                        <Sparkles className="w-3 h-3" />
                        <span>Scan</span>
                      </button>

                      <button
                        type="button"
                        onClick={(e) => handleOpenQuickInfo(sample, e)}
                        className="py-1.5 px-2 bg-white hover:bg-slate-200 text-slate-700 text-[10px] font-bold rounded-lg border border-slate-300 flex items-center justify-center space-x-1 transition-colors"
                      >
                        <BookOpen className="w-3 h-3 text-emerald-600" />
                        <span>Info</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Crop & Disease Info Modal */}
      {quickInfoModal && (
        <div
          onClick={() => setQuickInfoModal(null)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl border border-slate-200 max-h-[85vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                      {quickInfoModal.sample.crop}
                    </span>
                    <span className="text-xs text-slate-500">
                      {quickInfoModal.crop?.scientificName || "Commercial Crop"}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
                    {quickInfoModal.sample.disease}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setQuickInfoModal(null)}
                className="p-2 rounded-full hover:bg-slate-200 text-slate-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5 flex-1">
              {/* Photo and Overview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-slate-100 border border-slate-200">
                  <img
                    src={quickInfoModal.sample.imageUrl}
                    alt={quickInfoModal.sample.label}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-md">
                    Verified Leaf Hallmark
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-900 block mb-0.5">Classification & Vector:</span>
                    <span>{quickInfoModal.sample.badge}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-900 block mb-0.5">Ideal Environment:</span>
                    <span>{quickInfoModal.crop?.idealTemp || "18°C - 30°C"} • {quickInfoModal.crop?.idealSoil || "Well-drained soil"}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-900 block mb-0.5">Crop Profile:</span>
                    <p className="line-clamp-3">{quickInfoModal.crop?.description}</p>
                  </div>
                </div>
              </div>

              {/* Disease Symptoms & Organic Remedies (if disease found in database) */}
              {quickInfoModal.disease && (
                <div className="space-y-4">
                  {/* Symptoms */}
                  <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-200/80">
                    <h4 className="text-xs font-bold text-emerald-950 flex items-center space-x-1.5 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Identified Symptoms & Visual Hallmarks:</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {quickInfoModal.disease.symptoms.map((sym, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>{sym}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Organic Remedies */}
                  {quickInfoModal.disease.organicRemedies && quickInfoModal.disease.organicRemedies.length > 0 && (
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                      <h4 className="text-xs font-bold text-slate-900 flex items-center space-x-1.5 mb-2">
                        <Leaf className="w-4 h-4 text-emerald-600" />
                        <span>Recommended Organic Remedy:</span>
                      </h4>
                      <div className="space-y-2 text-xs">
                        <div className="font-bold text-emerald-800">
                          {quickInfoModal.disease.organicRemedies[0].title}
                        </div>
                        <p className="text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200">
                          <strong>Recipe:</strong> {quickInfoModal.disease.organicRemedies[0].recipe}
                        </p>
                        <p className="text-slate-500 italic">
                          <strong>Application:</strong> {quickInfoModal.disease.organicRemedies[0].application}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Recommended Bio-Inputs */}
                  {quickInfoModal.disease.recommendedInputs && quickInfoModal.disease.recommendedInputs.length > 0 && (
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                      <h4 className="text-xs font-bold text-slate-900 flex items-center space-x-1.5 mb-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>Certified Bio-Input:</span>
                      </h4>
                      <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200 text-xs">
                        <div>
                          <div className="font-bold text-slate-900">
                            {quickInfoModal.disease.recommendedInputs[0].name}
                          </div>
                          <div className="text-slate-500">
                            Dosage: {quickInfoModal.disease.recommendedInputs[0].dosage}
                          </div>
                        </div>
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                          {quickInfoModal.disease.recommendedInputs[0].price}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                Want complete treatment protocols, chemical IPM, & video guides?
              </div>
              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    const sample = quickInfoModal.sample;
                    setQuickInfoModal(null);
                    handleSelectSample(sample, true);
                  }}
                  className="flex-1 sm:flex-initial px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center justify-center space-x-1.5 shadow-xs transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Run AI Scan Now</span>
                </button>

                {quickInfoModal.disease && onViewDiseaseInfo && (
                  <button
                    type="button"
                    onClick={() => {
                      const dis = quickInfoModal.disease;
                      setQuickInfoModal(null);
                      if (dis) onViewDiseaseInfo(dis);
                    }}
                    className="flex-1 sm:flex-initial px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold rounded-xl border border-slate-300 flex items-center justify-center space-x-1.5 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Open Encyclopedia</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
