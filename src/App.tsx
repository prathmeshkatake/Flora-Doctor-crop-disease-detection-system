import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { ScannerSection } from "./components/ScannerSection";
import { DiagnosisResultView } from "./components/DiagnosisResult";
import { CameraCaptureModal } from "./components/CameraCaptureModal";
import { EncyclopediaView } from "./components/EncyclopediaView";
import { FertilizerCalculatorView } from "./components/FertilizerCalculatorView";
import { AgriChatBot } from "./components/AgriChatBot";
import { ScanHistoryView } from "./components/ScanHistoryView";
import { DiagnosisResult, DiseaseEncyclopediaItem, ScanHistoryItem } from "./types";
import { INITIAL_DIAGNOSED_CROPS_HISTORY } from "./data/diagnosedCropsHistory";
import { Leaf, Sparkles, Heart, ShieldCheck } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<"scanner" | "encyclopedia" | "calculator" | "history" | "chat">("scanner");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");
  const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentDiagnosis, setCurrentDiagnosis] = useState<DiagnosisResult | null>(null);
  const [currentUserImage, setCurrentUserImage] = useState<string | null>(null);
  const [scannerPreloadedCrop, setScannerPreloadedCrop] = useState<string | null>(null);
  const [scannerPreloadedImage, setScannerPreloadedImage] = useState<string | null>(null);
  const [selectedDiseaseModal, setSelectedDiseaseModal] = useState<DiseaseEncyclopediaItem | null>(null);
  const [chatInitialPrompt, setChatInitialPrompt] = useState<string | undefined>(undefined);
  const [scanHistory, setScanHistory] = useState<ScanHistoryItem[]>(() => {
    try {
      const saved = localStorage.getItem("floradoctor_scan_history");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
      return INITIAL_DIAGNOSED_CROPS_HISTORY;
    } catch {
      return INITIAL_DIAGNOSED_CROPS_HISTORY;
    }
  });

  // Persist history to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("floradoctor_scan_history", JSON.stringify(scanHistory));
    } catch (err) {
      console.error("Failed to save scan history to localStorage:", err);
    }
  }, [scanHistory]);

  const handleDiagnose = async (imageBase64: string, cropHint?: string) => {
    setIsLoading(true);
    setCurrentUserImage(imageBase64);

    try {
      const response = await fetch("/api/diagnose", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageBase64,
          cropHint,
          language: selectedLanguage,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to analyze leaf image.");
      }

      const result: DiagnosisResult = {
        ...data.data,
        userImage: imageBase64,
        timestamp: new Date().toISOString(),
      };

      setCurrentDiagnosis(result);
      setActiveTab("scanner");

      // Automatically record newly diagnosed crop to scan history
      const newScanItem: ScanHistoryItem = {
        id: "scan-" + Date.now(),
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        cropName: result.cropName,
        diseaseName: result.diseaseName,
        isHealthy: result.isHealthy,
        severity: result.severity,
        confidenceScore: result.confidenceScore,
        thumbnail: imageBase64 || result.userImage || "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=600&q=80",
        fullDiagnosis: result,
      };
      setScanHistory((prev) => [
        newScanItem,
        ...prev.filter((p) => !(p.cropName === result.cropName && p.diseaseName === result.diseaseName)),
      ]);

      // Auto-scroll to result
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error: any) {
      console.error("Diagnosis error:", error);
      alert("AI Diagnosis Failed: " + (error?.message || "Please verify your photo and internet connection."));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveToHistory = (result: DiagnosisResult) => {
    const historyItem: ScanHistoryItem = {
      id: "scan-" + Date.now(),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      cropName: result.cropName,
      diseaseName: result.diseaseName,
      isHealthy: result.isHealthy,
      severity: result.severity,
      confidenceScore: result.confidenceScore,
      thumbnail: currentUserImage || result.userImage || "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=600&q=80",
      fullDiagnosis: result,
    };

    setScanHistory((prev) => [
      historyItem,
      ...prev.filter((p) => !(p.cropName === result.cropName && p.diseaseName === result.diseaseName)),
    ]);
  };

  const handleRestoreDefaultHistory = () => {
    if (confirm("Restore full diagnosed crops history (Sugarcane, Rice, Cotton, Guava, Mustard, Bell Pepper, Tomato, Wheat)?")) {
      setScanHistory(INITIAL_DIAGNOSED_CROPS_HISTORY);
    }
  };

  const handleDeleteScan = (id: string) => {
    setScanHistory((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearAllHistory = () => {
    if (confirm("Are you sure you want to clear all saved scans?")) {
      setScanHistory([]);
    }
  };

  const handleSelectHistoryScan = (diagnosis: DiagnosisResult, userImage?: string) => {
    setCurrentDiagnosis(diagnosis);
    if (userImage) setCurrentUserImage(userImage);
    setActiveTab("scanner");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAskDoctor = (contextPrompt: string) => {
    setChatInitialPrompt(contextPrompt);
    setActiveTab("chat");
  };

  const handleSelectCropForScan = (cropName: string, sampleImageUrl?: string, autoDiagnose: boolean = false) => {
    setScannerPreloadedCrop(cropName);
    setScannerPreloadedImage(sampleImageUrl || null);
    setCurrentDiagnosis(null);
    setCurrentUserImage(sampleImageUrl || null);
    setActiveTab("scanner");
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (autoDiagnose && sampleImageUrl) {
      handleDiagnose(sampleImageUrl, cropName);
    }
  };

  const handleSelectDiseaseFromSearch = (disease: DiseaseEncyclopediaItem) => {
    setSelectedDiseaseModal(disease);
    setActiveTab("encyclopedia");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans antialiased selection:bg-emerald-200 selection:text-emerald-900">
      {/* Top App Bar & Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        onSelectDisease={handleSelectDiseaseFromSearch}
        onOpenScanModal={() => setIsCameraModalOpen(true)}
        historyCount={scanHistory.length}
      />

      {/* Main App Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === "scanner" && (
          <div className="space-y-8">
            {currentDiagnosis ? (
              <DiagnosisResultView
                diagnosis={currentDiagnosis}
                userImage={currentUserImage || undefined}
                onAskDoctor={handleAskDoctor}
                onSaveToHistory={handleSaveToHistory}
                onReset={() => {
                  setCurrentDiagnosis(null);
                  setCurrentUserImage(null);
                  setScannerPreloadedImage(null);
                }}
                isSaved={scanHistory.some(
                  (h) => h.cropName === currentDiagnosis.cropName && h.diseaseName === currentDiagnosis.diseaseName
                )}
              />
            ) : (
              <ScannerSection
                onDiagnose={handleDiagnose}
                isLoading={isLoading}
                onOpenCamera={() => setIsCameraModalOpen(true)}
                selectedLanguage={selectedLanguage}
                initialCropHint={scannerPreloadedCrop}
                initialImage={scannerPreloadedImage}
                onViewDiseaseInfo={(disease) => {
                  setSelectedDiseaseModal(disease);
                  setActiveTab("encyclopedia");
                }}
                onNavigateToEncyclopedia={() => {
                  setActiveTab("encyclopedia");
                }}
              />
            )}
          </div>
        )}

        {activeTab === "encyclopedia" && (
          <EncyclopediaView
            onSelectCropForScan={handleSelectCropForScan}
            selectedDiseaseModal={selectedDiseaseModal}
            setSelectedDiseaseModal={setSelectedDiseaseModal}
            onAskDoctor={handleAskDoctor}
          />
        )}

        {activeTab === "calculator" && <FertilizerCalculatorView />}

        {activeTab === "history" && (
          <ScanHistoryView
            history={scanHistory}
            onSelectScan={handleSelectHistoryScan}
            onDeleteScan={handleDeleteScan}
            onClearAll={handleClearAllHistory}
            onOpenScanner={() => {
              setCurrentDiagnosis(null);
              setActiveTab("scanner");
            }}
            onAskDoctor={handleAskDoctor}
            onRestoreDefaults={handleRestoreDefaultHistory}
          />
        )}

        {activeTab === "chat" && (
          <AgriChatBot
            currentDiagnosisContext={currentDiagnosis}
            initialPrompt={chatInitialPrompt}
          />
        )}
      </main>

      {/* Camera Capture Modal */}
      <CameraCaptureModal
        isOpen={isCameraModalOpen}
        onClose={() => setIsCameraModalOpen(false)}
        onCapture={(base64) => {
          setIsCameraModalOpen(false);
          handleDiagnose(base64);
        }}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-8 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
              <Leaf className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-slate-800">FloraDoctor Plant Care AI</span>
            <span>• Empowering Sustainable & Organic Agriculture</span>
          </div>

          <div className="flex items-center space-x-4 text-slate-400">
            <span>Powered by Gemini 3.7 Flash Multimodal</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Certified IPM & Organic Guidelines</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
