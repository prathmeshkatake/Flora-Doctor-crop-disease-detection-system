import React, { useState } from "react";
import {
  Calculator,
  Droplets,
  Sprout,
  DollarSign,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Printer,
  Sparkles,
  Info,
} from "lucide-react";

interface ProductPreset {
  id: string;
  name: string;
  category: string;
  standardRatePerLiter: string;
  standardRateNum: number; // in ml or g per liter
  unitType: "ml" | "grams";
  pricePerUnit: number; // price per liter or kg
  currencySymbol: string;
  description: string;
  waterPerAcreLiters: number;
}

const PRODUCT_PRESETS: ProductPreset[] = [
  {
    id: "neem_oil",
    name: "Cold-Pressed Bio-Neem Oil (10,000 PPM)",
    category: "Organic Bio-Pesticide & Fungicide",
    standardRatePerLiter: "5.0 ml / Liter water",
    standardRateNum: 5.0,
    unitType: "ml",
    pricePerUnit: 16.0, // $16 per liter
    currencySymbol: "$",
    description: "Broad-spectrum organic protection against foliar fungal spores, whiteflies, thrips, and mites.",
    waterPerAcreLiters: 200,
  },
  {
    id: "trichoderma",
    name: "Trichoderma viride Bio-Fungicide Powder",
    category: "Biological Microbial Inoculant",
    standardRatePerLiter: "5.0 g / Liter water",
    standardRateNum: 5.0,
    unitType: "grams",
    pricePerUnit: 12.0, // $12 per kg
    currencySymbol: "$",
    description: "Live antagonistic fungal culture that suppresses Fusarium, Alternaria, and Rhizoctonia rot.",
    waterPerAcreLiters: 200,
  },
  {
    id: "organic_npk",
    name: "Organic Liquid NPK 5-5-5 + Seaweed Bio-Booster",
    category: "Complete Organic Fertilizer",
    standardRatePerLiter: "4.0 ml / Liter water",
    standardRateNum: 4.0,
    unitType: "ml",
    pricePerUnit: 14.5,
    currencySymbol: "$",
    description: "Essential macronutrients enriched with kelp bio-stimulants for root development and disease resistance.",
    waterPerAcreLiters: 200,
  },
  {
    id: "potassium_bicarbonate",
    name: "Potassium Bicarbonate (MilStop Grade)",
    category: "Organic Contact Fungicide",
    standardRatePerLiter: "4.0 g / Liter water",
    standardRateNum: 4.0,
    unitType: "grams",
    pricePerUnit: 18.0,
    currencySymbol: "$",
    description: "Eradicates active powdery mildew on contact through rapid cellular osmotic shock.",
    waterPerAcreLiters: 200,
  },
  {
    id: "copper_octanoate",
    name: "Liquid Copper Octanoate Soap",
    category: "OMRI Organic Fungicide & Bactericide",
    standardRatePerLiter: "10.0 ml / Liter water",
    standardRateNum: 10.0,
    unitType: "ml",
    pricePerUnit: 17.5,
    currencySymbol: "$",
    description: "Low-copper formulation for blights, bacterial spots, and anthracnose with minimal soil buildup.",
    waterPerAcreLiters: 200,
  },
  {
    id: "chelated_micronutrients",
    name: "Chelated Zinc, Iron & Boron Foliar Blend",
    category: "Essential Micronutrient Spray",
    standardRatePerLiter: "2.5 g / Liter water",
    standardRateNum: 2.5,
    unitType: "grams",
    pricePerUnit: 15.0,
    currencySymbol: "$",
    description: "Corrects chlorosis, restores deep chlorophyll synthesis, and enhances flower set.",
    waterPerAcreLiters: 200,
  },
];

const CROPS = [
  "Tomato",
  "Potato",
  "Rice / Paddy",
  "Corn / Maize",
  "Wheat",
  "Cotton",
  "Chili / Bell Pepper",
  "Grapevine",
  "Citrus (Lemon / Orange)",
  "Apple",
  "Coffee",
  "Banana",
  "Soybean",
  "Home Garden Plants",
];

const AREA_UNITS = [
  { id: "Acre", label: "Acres", toSqm: 4046.86 },
  { id: "Hectare", label: "Hectares", toSqm: 10000 },
  { id: "Gunta", label: "Gunta / Cents", toSqm: 101.17 },
  { id: "Sq Ft", label: "Square Feet", toSqm: 0.0929 },
  { id: "Sq Meters", label: "Square Meters", toSqm: 1.0 },
  { id: "Plants", label: "Number of Plants (Horticulture)", toSqm: 0.5 },
];

export const FertilizerCalculatorView: React.FC = () => {
  const [selectedCrop, setSelectedCrop] = useState("Tomato");
  const [selectedProduct, setSelectedProduct] = useState<string>("neem_oil");
  const [areaAmount, setAreaAmount] = useState<number>(1);
  const [areaUnit, setAreaUnit] = useState<string>("Acre");
  const [sprayerType, setSprayerType] = useState<"Knapsack" | "Tractor" | "Drone" | "Handheld">("Knapsack");

  const activeProduct = PRODUCT_PRESETS.find((p) => p.id === selectedProduct) || PRODUCT_PRESETS[0];

  // Calculation Logic
  const calculation = React.useMemo(() => {
    const unitObj = AREA_UNITS.find((u) => u.id === areaUnit) || AREA_UNITS[0];
    const totalSqm = Math.max(0.1, (areaAmount || 1) * unitObj.toSqm);
    const acresEquivalent = totalSqm / 4046.86;

    // Water volume
    let totalWaterLiters = Math.round(acresEquivalent * activeProduct.waterPerAcreLiters);
    if (areaUnit === "Plants") {
      totalWaterLiters = Math.max(2, Math.round((areaAmount || 1) * 0.25)); // 250ml spray per mature plant
    } else {
      totalWaterLiters = Math.max(5, totalWaterLiters);
    }

    // Knapsack tank refills (assuming 16 Liter tank)
    const knapsackTanks = Math.ceil(totalWaterLiters / 16);

    // Product total amount
    const totalProductAmount = totalWaterLiters * activeProduct.standardRateNum;
    let formattedProductAmount = "";
    let estimatedCost = 0;

    if (activeProduct.unitType === "ml") {
      if (totalProductAmount >= 1000) {
        const liters = (totalProductAmount / 1000).toFixed(2);
        formattedProductAmount = `${liters} Liters (${totalProductAmount} ml)`;
        estimatedCost = (totalProductAmount / 1000) * activeProduct.pricePerUnit;
      } else {
        formattedProductAmount = `${Math.round(totalProductAmount)} ml`;
        estimatedCost = (totalProductAmount / 1000) * activeProduct.pricePerUnit;
      }
    } else {
      if (totalProductAmount >= 1000) {
        const kg = (totalProductAmount / 1000).toFixed(2);
        formattedProductAmount = `${kg} kg (${totalProductAmount} grams)`;
        estimatedCost = (totalProductAmount / 1000) * activeProduct.pricePerUnit;
      } else {
        formattedProductAmount = `${Math.round(totalProductAmount)} grams`;
        estimatedCost = (totalProductAmount / 1000) * activeProduct.pricePerUnit;
      }
    }

    // Per Tank dosage (for 16L standard backpack sprayer)
    const perTankDosage = `${(activeProduct.standardRateNum * 16).toFixed(1)} ${activeProduct.unitType} per 16L Sprayer Tank`;

    return {
      totalWaterLiters,
      knapsackTanks,
      formattedProductAmount,
      estimatedCost: Math.max(1.5, estimatedCost).toFixed(2),
      perTankDosage,
    };
  }, [areaAmount, areaUnit, activeProduct]);

  return (
    <div id="calculator-view" className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-xs border border-slate-800">
        <div className="max-w-3xl space-y-2.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Smart Farm Dosage & Spray Tank Calculator</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Fertilizer, Neem Oil & Bio-Pesticide Volume Calculator
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Eliminate guesswork when preparing foliar sprays. Calculate the exact volume of water, organic formulation, tank dilution ratio, and estimated cost for any farm size or garden bed.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Input Form (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-3xl p-6 shadow-xs border border-slate-200 space-y-5">
            <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
              <Sprout className="w-4 h-4 text-emerald-600" />
              <span>Step 1: Enter Farm & Crop Parameters</span>
            </h3>

            {/* Select Crop */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Target Crop
              </label>
              <select
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value)}
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 font-medium focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-hidden"
              >
                {CROPS.map((crop) => (
                  <option key={crop} value={crop}>
                    {crop}
                  </option>
                ))}
              </select>
            </div>

            {/* Select Product / Formulation */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Input Product / Bio-Pesticide
              </label>
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 font-medium focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-hidden"
              >
                {PRODUCT_PRESETS.map((prod) => (
                  <option key={prod.id} value={prod.id}>
                    {prod.name} ({prod.category})
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-slate-500 mt-1.5">{activeProduct.description}</p>
            </div>

            {/* Farm Size & Units */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Farm Area / Count
                </label>
                <input
                  type="number"
                  min="0.1"
                  step="0.5"
                  value={areaAmount}
                  onChange={(e) => setAreaAmount(parseFloat(e.target.value) || 1)}
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 font-bold focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Unit
                </label>
                <select
                  value={areaUnit}
                  onChange={(e) => setAreaUnit(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 font-medium focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-hidden"
                >
                  {AREA_UNITS.map((unit) => (
                    <option key={unit.id} value={unit.id}>
                      {unit.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sprayer Equipment Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Sprayer Equipment Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(["Knapsack", "Tractor", "Drone", "Handheld"] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSprayerType(type)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition-colors ${
                      sprayerType === type
                        ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {type === "Knapsack" && "🎒 16L Backpack"}
                    {type === "Tractor" && "🚜 Boom Sprayer"}
                    {type === "Drone" && "🛸 Agri Drone"}
                    {type === "Handheld" && "🌿 Hand Trigger"}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Calculated Dosage Prescription & Application Schedule (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Prescription Output
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  Dosage Plan for {areaAmount} {areaUnit} of {selectedCrop}
                </h3>
              </div>
              <button
                onClick={() => window.print()}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                title="Print Dosage Prescription"
              >
                <Printer className="w-5 h-5" />
              </button>
            </div>

            {/* Big Metric Display Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Total Product Formulation Required */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                  Total Formulation Needed:
                </span>
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-950">
                  {calculation.formattedProductAmount}
                </div>
                <p className="text-[11px] text-emerald-700">
                  Standard Rate: {activeProduct.standardRatePerLiter}
                </p>
              </div>

              {/* Total Water Spray Volume */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800">
                  Total Water Volume:
                </span>
                <div className="text-xl sm:text-2xl font-extrabold text-blue-950">
                  {calculation.totalWaterLiters} Liters
                </div>
                <p className="text-[11px] text-blue-700">
                  Approx. {calculation.knapsackTanks} refills (16-liter knapsack tank)
                </p>
              </div>
            </div>

            {/* Backpack Tank Recipe Box */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center space-x-1.5">
                  <Droplets className="w-4 h-4 text-emerald-400" />
                  <span>Tank Mixing Recipe (For 16-Liter Sprayer)</span>
                </h4>
                <span className="text-[11px] font-semibold text-slate-300">
                  Est. Cost: ${calculation.estimatedCost}
                </span>
              </div>

              <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700 text-xs space-y-1.5">
                <p className="text-emerald-300 font-bold text-sm">
                  {calculation.perTankDosage}
                </p>
                <p className="text-slate-300 text-[11px]">
                  Fill sprayer half full with clean water, add {calculation.perTankDosage.split(" per")[0]} with 2ml of natural soap/emulsifier, agitate thoroughly, then top up to 16L mark.
                </p>
              </div>
            </div>

            {/* Application Best Practices Checklist */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Application Timings & Spraying Guidelines:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex items-start space-x-2.5">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">Best Time:</strong>
                    <p className="text-slate-600 text-[11px] mt-0.5">
                      Early morning (6:00 - 8:30 AM) or sunset (5:00 - 6:30 PM). Never spray in direct midday sun to avoid phytotoxicity leaf burn.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex items-start space-x-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">Nozzle & Spray Angle:</strong>
                    <p className="text-slate-600 text-[11px] mt-0.5">
                      Use fine hollow cone nozzle. Ensure thorough coverage on the underside of leaves where spores and whitefly nymphs shelter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
