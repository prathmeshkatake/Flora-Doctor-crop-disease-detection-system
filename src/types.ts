export type PathogenType =
  | "Fungal"
  | "Bacterial"
  | "Viral"
  | "Pest/Insect"
  | "Nutrient Deficiency"
  | "Environmental Stress"
  | "Healthy";

export type SeverityLevel = "None" | "Mild" | "Moderate" | "High" | "Severe";

export type UrgencyLevel = "None" | "Low" | "Medium" | "High" | "Immediate Action Required";

export interface OrganicTreatment {
  title: string;
  recipeOrPreparation: string;
  timingAndFrequency: string;
  modeOfAction: string;
}

export interface ChemicalTreatment {
  title: string;
  activeIngredient: string;
  applicationRate: string;
  safetyInterval: string;
}

export interface RecommendedProduct {
  name: string;
  category: string;
  description: string;
  dosage: string;
  searchQuery: string;
  estimatedPrice: string;
}

export interface CuratedVideo {
  title: string;
  youtubeSearchQuery: string;
  channelOrSource: string;
  durationGuess: string;
  relevanceNote: string;
}

export interface ReferenceComparison {
  hallmarkSymptoms: string;
  keyVisualDifference: string;
  healthyLeafAppearance: string;
}

export interface DiagnosisResult {
  cropName: string;
  scientificName: string;
  isHealthy: boolean;
  diseaseName: string;
  scientificDiseaseName: string;
  confidenceScore: number;
  severity: SeverityLevel;
  urgencyLevel: UrgencyLevel;
  pathogenType: PathogenType;
  agronomistSummary: string;
  symptomsIdentified: string[];
  affectedParts: string[];
  causeAndConditions: string;
  referenceComparison: ReferenceComparison;
  organicTreatments: OrganicTreatment[];
  chemicalTreatments?: ChemicalTreatment[];
  preventativeMeasures: string[];
  recommendedProducts: RecommendedProduct[];
  curatedVideos: CuratedVideo[];
  wateringAdvice: string;
  soilHealthTips: string;
  userImage?: string;
  timestamp?: string;
}

export interface DiseaseEncyclopediaItem {
  id: string;
  cropId: string;
  cropName: string;
  name: string;
  scientificName: string;
  pathogenType: PathogenType;
  severityDefault: SeverityLevel;
  referenceImageUrl: string;
  healthyReferenceUrl: string;
  symptoms: string[];
  causes: string;
  favorableWeather: string;
  organicRemedies: Array<{
    title: string;
    recipe: string;
    application: string;
  }>;
  chemicalRemedies: Array<{
    title: string;
    ingredient: string;
    dosage: string;
  }>;
  recommendedInputs: Array<{
    name: string;
    type: "Organic Fungicide" | "Bio-Pesticide" | "Organic NPK" | "Micro-Nutrient" | "Neem Spray";
    dosage: string;
    benefit: string;
    searchQuery: string;
    price: string;
  }>;
  videoTutorials: Array<{
    title: string;
    channel: string;
    query: string;
    duration: string;
  }>;
}

export interface CropEncyclopediaItem {
  id: string;
  name: string;
  scientificName: string;
  category:
    | "Vegetables"
    | "Cereals & Grains"
    | "Fruits"
    | "Cash Crops"
    | "Legumes & Pulses"
    | "Spices & Herbs"
    | "Floriculture";
  imageUrl: string;
  description: string;
  idealSoil: string;
  idealTemp: string;
  diseases: DiseaseEncyclopediaItem[];
}

export interface ScanHistoryItem {
  id: string;
  date: string;
  cropName: string;
  diseaseName: string;
  isHealthy: boolean;
  severity: SeverityLevel;
  confidenceScore: number;
  thumbnail: string;
  fullDiagnosis: DiagnosisResult;
}

export interface SampleLeafImage {
  id: string;
  crop: string;
  disease: string;
  label: string;
  imageUrl: string;
  badge: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: string;
}
