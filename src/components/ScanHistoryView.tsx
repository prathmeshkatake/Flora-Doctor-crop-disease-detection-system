import React, { useState, useMemo } from "react";
import {
  History,
  Trash2,
  ChevronRight,
  Sparkles,
  Camera,
  Calendar,
  AlertTriangle,
  CheckCircle,
  AlertOctagon,
  Download,
  Search,
  Filter,
  FileSpreadsheet,
  Printer,
  RotateCcw,
  Bot,
  ExternalLink,
  ShieldAlert,
  ShieldCheck,
  Eye,
  Info,
  Droplets,
  Sprout,
  X,
} from "lucide-react";
import { ScanHistoryItem, DiagnosisResult, SeverityLevel } from "../types";

interface ScanHistoryViewProps {
  history: ScanHistoryItem[];
  onSelectScan: (diagnosis: DiagnosisResult, userImage?: string) => void;
  onDeleteScan: (id: string) => void;
  onClearAll: () => void;
  onOpenScanner: () => void;
  onAskDoctor?: (prompt: string) => void;
  onRestoreDefaults?: () => void;
}

export const ScanHistoryView: React.FC<ScanHistoryViewProps> = ({
  history,
  onSelectScan,
  onDeleteScan,
  onClearAll,
  onOpenScanner,
  onAskDoctor,
  onRestoreDefaults,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCropFilter, setSelectedCropFilter] = useState<string>("All");
  const [selectedSeverityFilter, setSelectedSeverityFilter] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "confidence" | "severity">("newest");
  const [previewModalItem, setPreviewModalItem] = useState<ScanHistoryItem | null>(null);

  // Extract unique crop names from history for filter pills
  const availableCrops = useMemo(() => {
    const set = new Set<string>();
    history.forEach((item) => {
      // normalize simple crop names e.g. "Rice / Paddy" -> "Rice"
      const name = item.cropName.split("/")[0].trim();
      set.add(name);
    });
    return Array.from(set);
  }, [history]);

  // Summary Metrics
  const metrics = useMemo(() => {
    const total = history.length;
    const severe = history.filter((h) => h.severity === "Severe" || h.severity === "High").length;
    const moderate = history.filter((h) => h.severity === "Moderate" || h.severity === "Mild").length;
    const healthy = history.filter((h) => h.isHealthy || h.severity === "None").length;
    return { total, severe, moderate, healthy };
  }, [history]);

  // Filtered & Sorted History
  const filteredHistory = useMemo(() => {
    return history
      .filter((item) => {
        // Crop filter
        if (selectedCropFilter !== "All") {
          const itemCropNormalized = item.cropName.toLowerCase();
          const filterNormalized = selectedCropFilter.toLowerCase();
          if (!itemCropNormalized.includes(filterNormalized)) return false;
        }

        // Severity filter
        if (selectedSeverityFilter !== "All") {
          if (selectedSeverityFilter === "Healthy") {
            if (!item.isHealthy && item.severity !== "None") return false;
          } else if (selectedSeverityFilter === "Critical") {
            if (item.severity !== "Severe" && item.severity !== "High") return false;
          } else if (item.severity !== selectedSeverityFilter) {
            return false;
          }
        }

        // Search text
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchCrop = item.cropName.toLowerCase().includes(q);
          const matchDisease = item.diseaseName.toLowerCase().includes(q);
          const matchScientific = item.fullDiagnosis?.scientificDiseaseName?.toLowerCase().includes(q);
          const matchSummary = item.fullDiagnosis?.agronomistSummary?.toLowerCase().includes(q);
          const matchSymptoms = item.fullDiagnosis?.symptomsIdentified?.some((s) => s.toLowerCase().includes(q));

          if (!matchCrop && !matchDisease && !matchScientific && !matchSummary && !matchSymptoms) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "confidence") {
          return b.confidenceScore - a.confidenceScore;
        }
        if (sortBy === "severity") {
          const severityWeight: Record<SeverityLevel, number> = {
            Severe: 4,
            High: 3,
            Moderate: 2,
            Mild: 1,
            None: 0,
          };
          return (severityWeight[b.severity] || 0) - (severityWeight[a.severity] || 0);
        }
        if (sortBy === "oldest") {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        }
        // Default "newest"
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
  }, [history, selectedCropFilter, selectedSeverityFilter, searchQuery, sortBy]);

  // Export JSON
  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(history, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `FloraDoctor_Diagnosed_Crops_History_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Export CSV
  const handleExportCsv = () => {
    const headers = ["ID", "Date", "Crop Name", "Condition", "Pathogen Type", "Severity", "Confidence %", "Summary"];
    const rows = history.map((item) => [
      `"${item.id}"`,
      `"${item.date}"`,
      `"${item.cropName}"`,
      `"${item.diseaseName.replace(/"/g, '""')}"`,
      `"${item.fullDiagnosis?.pathogenType || "Unknown"}"`,
      `"${item.severity}"`,
      `"${item.confidenceScore}%"`,
      `"${(item.fullDiagnosis?.agronomistSummary || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", encodeURI(csvContent));
    downloadAnchor.setAttribute("download", `FloraDoctor_Farm_Crop_Records_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div id="scan-history-view" className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-xs border border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-semibold">
              <History className="w-3.5 h-3.5" />
              <span>Diagnosed Crops Archive & Field History</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Saved Scans & Crop Pathology History
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Track diagnosis logs across sugarcane, paddy rice, cotton, guava, mustard, bell pepper, and tomato. Re-examine organic bio-remedies, compare disease remission, and consult Dr. Flora directly.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {history.length > 0 && (
              <>
                <button
                  onClick={handleExportCsv}
                  className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-emerald-300 hover:text-white rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-colors border border-slate-700"
                  title="Export crop diagnoses as spreadsheet"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
                <button
                  onClick={handleExportJson}
                  className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-colors border border-slate-700"
                  title="Export raw JSON records"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>JSON</span>
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-colors border border-slate-700"
                  title="Print crop diagnostic records"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>
              </>
            )}

            {onRestoreDefaults && (
              <button
                onClick={onRestoreDefaults}
                className="px-3.5 py-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-colors"
                title="Restore comprehensive crop diagnosis records"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Demo Records</span>
              </button>
            )}

            {history.length > 0 && (
              <button
                onClick={onClearAll}
                className="px-3.5 py-2 bg-rose-600/80 hover:bg-rose-600 text-white rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All</span>
              </button>
            )}
          </div>
        </div>

        {/* Top Summary Metrics Bar */}
        {history.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800">
            <div className="bg-slate-800/60 backdrop-blur-xs rounded-2xl p-3 border border-slate-700/60">
              <span className="text-[11px] text-slate-400 font-medium">Total Diagnoses</span>
              <div className="flex items-baseline space-x-2 mt-1">
                <span className="text-2xl font-bold text-white">{metrics.total}</span>
                <span className="text-[11px] text-slate-400">Scans</span>
              </div>
            </div>

            <div className="bg-rose-950/40 backdrop-blur-xs rounded-2xl p-3 border border-rose-800/40">
              <div className="flex items-center space-x-1.5 text-rose-400 text-[11px] font-medium">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Critical / Severe</span>
              </div>
              <div className="flex items-baseline space-x-2 mt-1">
                <span className="text-2xl font-bold text-rose-300">{metrics.severe}</span>
                <span className="text-[11px] text-rose-400/80">Immediate Action</span>
              </div>
            </div>

            <div className="bg-amber-950/40 backdrop-blur-xs rounded-2xl p-3 border border-amber-800/40">
              <div className="flex items-center space-x-1.5 text-amber-400 text-[11px] font-medium">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Moderate Cases</span>
              </div>
              <div className="flex items-baseline space-x-2 mt-1">
                <span className="text-2xl font-bold text-amber-300">{metrics.moderate}</span>
                <span className="text-[11px] text-amber-400/80">In Treatment</span>
              </div>
            </div>

            <div className="bg-emerald-950/40 backdrop-blur-xs rounded-2xl p-3 border border-emerald-800/40">
              <div className="flex items-center space-x-1.5 text-emerald-400 text-[11px] font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Healthy Crops</span>
              </div>
              <div className="flex items-baseline space-x-2 mt-1">
                <span className="text-2xl font-bold text-emerald-300">{metrics.healthy}</span>
                <span className="text-[11px] text-emerald-400/80">Clean / Passed</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-3.5">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search diagnosed crops (e.g. Sugarcane, Blast, Rust, Xanthomonas)..."
              className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Severity Filter and Sort */}
          <div className="flex items-center space-x-2 shrink-0">
            <div className="flex items-center space-x-1.5 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 text-xs">
              <Filter className="w-3.5 h-3.5 text-slate-500" />
              <select
                value={selectedSeverityFilter}
                onChange={(e) => setSelectedSeverityFilter(e.target.value)}
                className="bg-transparent font-medium text-slate-700 outline-hidden cursor-pointer"
              >
                <option value="All">All Severity</option>
                <option value="Critical">Critical / Severe</option>
                <option value="Moderate">Moderate</option>
                <option value="Mild">Mild</option>
                <option value="Healthy">Healthy (Passed)</option>
              </select>
            </div>

            <div className="flex items-center space-x-1.5 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 text-xs">
              <span className="text-slate-400">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent font-medium text-slate-700 outline-hidden cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="confidence">Highest Confidence</option>
                <option value="severity">Highest Severity</option>
              </select>
            </div>
          </div>
        </div>

        {/* Crop Quick Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 pt-1 text-xs no-scrollbar">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
            Crops:
          </span>
          <button
            onClick={() => setSelectedCropFilter("All")}
            className={`px-3 py-1.5 rounded-xl font-medium shrink-0 transition-all ${
              selectedCropFilter === "All"
                ? "bg-slate-900 text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All Crops ({history.length})
          </button>
          {availableCrops.map((crop) => {
            const count = history.filter((h) => h.cropName.toLowerCase().includes(crop.toLowerCase())).length;
            const isSelected = selectedCropFilter === crop;
            return (
              <button
                key={crop}
                onClick={() => setSelectedCropFilter(isSelected ? "All" : crop)}
                className={`px-3 py-1.5 rounded-xl font-medium shrink-0 transition-all flex items-center space-x-1.5 ${
                  isSelected
                    ? "bg-emerald-700 text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <span>{crop}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* History Grid or Empty State */}
      {filteredHistory.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredHistory.map((item) => {
            const isSevere = item.severity === "Severe" || item.severity === "High";
            const isModerate = item.severity === "Moderate";
            const isHealthy = item.isHealthy || item.severity === "None";
            const diag = item.fullDiagnosis;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-emerald-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Header with Badges */}
                  <div className="relative h-48 overflow-hidden bg-slate-950">
                    <img
                      src={item.thumbnail}
                      alt={item.cropName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900/90 backdrop-blur-md text-white border border-white/10 shadow-xs">
                        {item.cropName}
                      </span>
                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center space-x-1 shadow-xs ${
                          isHealthy
                            ? "bg-emerald-600 text-white"
                            : isSevere
                            ? "bg-rose-600 text-white animate-pulse"
                            : isModerate
                            ? "bg-amber-600 text-white"
                            : "bg-blue-600 text-white"
                        }`}
                      >
                        {isHealthy ? (
                          <>
                            <CheckCircle className="w-3 h-3" />
                            <span>Healthy</span>
                          </>
                        ) : isSevere ? (
                          <>
                            <AlertOctagon className="w-3 h-3" />
                            <span>{item.severity} Risk</span>
                          </>
                        ) : (
                          <>
                            <AlertTriangle className="w-3 h-3" />
                            <span>{item.severity}</span>
                          </>
                        )}
                      </span>
                    </div>

                    {/* Delete and Quick Preview Icon Buttons */}
                    <div className="absolute top-3 right-3 flex items-center space-x-1.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPreviewModalItem(item);
                        }}
                        className="w-8 h-8 rounded-full bg-slate-900/80 hover:bg-slate-900 text-slate-200 hover:text-emerald-400 flex items-center justify-center transition-colors shadow-xs"
                        title="Quick preview leaf report"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (confirm(`Remove "${item.cropName}: ${item.diseaseName}" from scan history?`)) {
                            onDeleteScan(item.id);
                          }
                        }}
                        className="w-8 h-8 rounded-full bg-slate-900/80 hover:bg-rose-600 text-slate-200 hover:text-white flex items-center justify-center transition-colors shadow-xs"
                        title="Delete this record"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Bottom overlay in image: Date and Pathogen Type */}
                    <div className="absolute bottom-2.5 inset-x-3 flex items-center justify-between text-[11px] text-slate-200">
                      <span className="flex items-center space-x-1 text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{item.date}</span>
                      </span>
                      {diag?.pathogenType && (
                        <span className="px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-xs text-[10px] font-semibold text-white">
                          {diag.pathogenType}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5 space-y-3">
                    {/* Confidence Meter */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400 font-medium">AI Confidence Score</span>
                        <span className="font-bold text-emerald-700">{item.confidenceScore}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full transition-all"
                          style={{ width: `${item.confidenceScore}%` }}
                        />
                      </div>
                    </div>

                    {/* Disease Name & Scientific Name */}
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-1">
                        {item.diseaseName}
                      </h4>
                      {diag?.scientificName && (
                        <p className="text-[11px] italic text-slate-500 line-clamp-1 mt-0.5">
                          {diag.scientificName}
                        </p>
                      )}
                    </div>

                    {/* Summary snippet */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {diag?.agronomistSummary || "Crop diagnosis recorded with verified organic treatments and preventive schedule."}
                    </p>

                    {/* Key Identified Symptoms tags */}
                    {diag?.symptomsIdentified && diag.symptomsIdentified.length > 0 && (
                      <div className="space-y-1 pt-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Key Symptoms:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {diag.symptomsIdentified.slice(0, 2).map((symptom, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 line-clamp-1"
                              title={symptom}
                            >
                              • {symptom}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Immediate Remedy Snippet */}
                    {diag?.organicTreatments && diag.organicTreatments[0] && (
                      <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-xs space-y-1">
                        <div className="flex items-center space-x-1.5 text-emerald-800 font-bold text-[11px]">
                          <Sprout className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">Bio Remedy: {diag.organicTreatments[0].title}</span>
                        </div>
                        <p className="text-[10px] text-emerald-700/90 line-clamp-1">
                          {diag.organicTreatments[0].recipeOrPreparation}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="p-4 sm:p-5 pt-0 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectScan(item.fullDiagnosis, item.thumbnail)}
                      className="w-full py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center space-x-1 transition-all shadow-xs"
                    >
                      <span>Prescription</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    {onAskDoctor && (
                      <button
                        onClick={() => {
                          const prompt = `Hello Dr. Flora, I am reviewing my saved scan for ${item.cropName} diagnosed with "${item.diseaseName}" (${item.severity} severity, diagnosed on ${item.date}). Could you provide tailored guidance on immediate remedial steps and preventive care?`;
                          onAskDoctor(prompt);
                        }}
                        className="w-full py-2 px-3 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1 transition-colors border border-emerald-300"
                        title="Ask Dr. Flora AI Agronomist about this crop diagnosis"
                      >
                        <Bot className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Ask Dr. Flora</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty Filter State or Empty History */
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-xs max-w-lg mx-auto space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
            <Camera className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900">
              {searchQuery || selectedCropFilter !== "All" || selectedSeverityFilter !== "All"
                ? "No Scans Match Your Filters"
                : "No Saved Scans Yet"}
            </h3>
            <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
              {searchQuery || selectedCropFilter !== "All" || selectedSeverityFilter !== "All"
                ? "Try adjusting your search keywords, crop filters, or severity options."
                : "Your crop diagnoses, prescriptions, and leaf images will appear here. You can also restore sample farm records."}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {searchQuery || selectedCropFilter !== "All" || selectedSeverityFilter !== "All" ? (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCropFilter("All");
                  setSelectedSeverityFilter("All");
                }}
                className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold"
              >
                Reset Filters
              </button>
            ) : (
              <>
                <button
                  onClick={onOpenScanner}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold shadow-xs inline-flex items-center space-x-1.5 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Scan New Leaf</span>
                </button>

                {onRestoreDefaults && (
                  <button
                    onClick={onRestoreDefaults}
                    className="px-4 py-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded-xl text-xs font-bold shadow-xs inline-flex items-center space-x-1.5 transition-all"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Load Diagnosed Crops History</span>
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* Quick Preview Modal */}
      {previewModalItem && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-base text-slate-900">
                  {previewModalItem.cropName}: {previewModalItem.diseaseName}
                </span>
              </div>
              <button
                onClick={() => setPreviewModalItem(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative h-60 rounded-2xl overflow-hidden bg-slate-900">
              <img
                src={previewModalItem.thumbnail}
                alt={previewModalItem.cropName}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 flex gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-950/80 text-white">
                  {previewModalItem.cropName}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white">
                  {previewModalItem.confidenceScore}% Confidence
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-600 text-white">
                  {previewModalItem.severity} Severity
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="space-y-1">
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Agronomist Assessment</h5>
                <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                  {previewModalItem.fullDiagnosis?.agronomistSummary}
                </p>
              </div>

              {previewModalItem.fullDiagnosis?.symptomsIdentified && (
                <div className="space-y-1.5">
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Symptoms Identified</h5>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {previewModalItem.fullDiagnosis.symptomsIdentified.map((s, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {previewModalItem.fullDiagnosis?.organicTreatments && previewModalItem.fullDiagnosis.organicTreatments[0] && (
                <div className="space-y-1">
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Recommended Organic Remedy</h5>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-900 space-y-1">
                    <p className="font-bold">{previewModalItem.fullDiagnosis.organicTreatments[0].title}</p>
                    <p className="text-emerald-800 text-[11px]">
                      {previewModalItem.fullDiagnosis.organicTreatments[0].recipeOrPreparation}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-end space-x-2 pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  const item = previewModalItem;
                  setPreviewModalItem(null);
                  if (onAskDoctor) {
                    onAskDoctor(
                      `Hello Dr. Flora, I need advice on my diagnosed ${item.cropName} with ${item.diseaseName} (${item.severity} severity). What is the exact application schedule for the bio-remedy?`
                    );
                  }
                }}
                className="px-4 py-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 rounded-xl text-xs font-semibold flex items-center space-x-1.5"
              >
                <Bot className="w-3.5 h-3.5 text-emerald-700" />
                <span>Ask Dr. Flora</span>
              </button>

              <button
                onClick={() => {
                  const item = previewModalItem;
                  setPreviewModalItem(null);
                  onSelectScan(item.fullDiagnosis, item.thumbnail);
                }}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5"
              >
                <span>Open Full Prescription</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
