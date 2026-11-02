import { ScanHistoryItem } from "../types";

/**
 * Pre-populated realistic history of diagnosed crops for farmers and agronomists.
 * Covers key crops: Sugarcane, Rice, Cotton, Guava, Bell Pepper, Mustard, Tomato, Wheat, and Healthy crops.
 */
export const INITIAL_DIAGNOSED_CROPS_HISTORY: ScanHistoryItem[] = [
  {
    id: "diag-sugarcane-red-rot-01",
    date: "May 18, 2026",
    cropName: "Sugarcane",
    diseaseName: "Red Rot & Midrib Wilt (Colletotrichum falcatum)",
    isHealthy: false,
    severity: "Severe",
    confidenceScore: 96,
    thumbnail: "/src/assets/images/sugarcane_red_rot_1792629986592.jpg",
    fullDiagnosis: {
      cropName: "Sugarcane",
      scientificName: "Saccharum officinarum",
      isHealthy: false,
      diseaseName: "Red Rot & Midrib Wilt (Colletotrichum falcatum)",
      scientificDiseaseName: "Colletotrichum falcatum Went",
      confidenceScore: 96,
      severity: "Severe",
      urgencyLevel: "Immediate Action Required",
      pathogenType: "Fungal",
      agronomistSummary:
        "Severe Red Rot fungal infection detected across midrib and cane stalk. Distinct red lesions with transverse white patches observed in internal pith. Characteristic alcoholic fermentation odor noted. Immediate eradication of affected clumps and sett treatment required to prevent field-wide devastation.",
      symptomsIdentified: [
        "Red discoloration with cross-wise white bands on cane rind and leaf midrib",
        "Third and fourth leaves from top showing sudden yellowing and drying",
        "Internal stalk pith exhibits dull red discoloration and alcoholic odor",
        "Shrinkage and hollow formation in mature cane internodes",
      ],
      affectedParts: ["Leaf Midrib", "Cane Stalk Internodes", "Growing Pith"],
      causeAndConditions:
        "Colletotrichum falcatum spores favored by waterlogged soil, warm temperatures (28-32°C), high relative humidity (>85%), and planting non-treated infected setts.",
      referenceComparison: {
        hallmarkSymptoms:
          "Internal pith turns dull red interrupted by distinctive white horizontal patches and sour fermentation odor.",
        keyVisualDifference:
          "Unlike Pokkah Boeng or wilt, Red Rot produces clear blood-red midrib streaks and diagnostic white cross-bands inside stalks.",
        healthyLeafAppearance:
          "Vibrant emerald green upright blades, smooth white central midrib, and solid sugary white-to-pale-yellow internal cane stalk.",
      },
      organicTreatments: [
        {
          title: "Trichoderma viride Sett & Soil Bio-Drench",
          recipeOrPreparation:
            "Mix 2.5 kg Trichoderma viride talc formulation into 200 kg decomposed farmyard manure (FYM). Drench root zone with 10 g/L Trichoderma suspension.",
          timingAndFrequency:
            "Apply at base immediately after roguing infected stools; repeat every 14 days during active tillering.",
          modeOfAction:
            "Trichoderma aggressively colonizes root cortex and produces chitinases that destroy Colletotrichum fungal hyphae.",
        },
        {
          title: "Panchagavya & Fermented Cow Urine Spray",
          recipeOrPreparation:
            "Blend 3 liters filtered Panchagavya with 100 liters water and 200 ml cold-pressed neem oil (10,000 ppm).",
          timingAndFrequency: "Spray foliar canopy in early morning; repeat after 10 days.",
          modeOfAction:
            "Enhances systemic acquired resistance (SAR) and forms an alkaline bio-barrier against fungal spore germination.",
        },
      ],
      chemicalTreatments: [
        {
          title: "Carbendazim + Mancozeb Broad-Spectrum Fungicide",
          activeIngredient: "Carbendazim 12% + Mancozeb 63% WP",
          applicationRate: "2.0 g per liter of water (400-500 g/acre)",
          safetyInterval: "21 days before cane harvest",
        },
        {
          title: "Thiophanate-Methyl Stalk & Ratoon Drench",
          activeIngredient: "Thiophanate-Methyl 70% WP",
          applicationRate: "1.5 g per liter of water",
          safetyInterval: "30 days before harvest",
        },
      ],
      preventativeMeasures: [
        "Rogue and incinerate all infected sugarcane stools down to rhizome depth; do not leave trash in fields.",
        "Practice mandatory hot-water sett treatment at 52°C for 30 minutes before planting new crop cycles.",
        "Avoid ratooning severely infected sugarcane plots; rotate with leguminous green manure crops (dhaincha or sunhemp).",
        "Ensure deep cross-field drainage channels to prevent prolonged water stagnation around cane stools.",
      ],
      recommendedProducts: [
        {
          name: "Bio-Shield Trichoderma Viride 1% WP",
          category: "Bio-Fungicide",
          description: "Certified organic strain for seed sett drenching and soil fungal suppression.",
          dosage: "10 g/L water or 2.5 kg/acre in FYM",
          searchQuery: "Trichoderma viride bio fungicide for sugarcane",
          estimatedPrice: "$12.50 / kg",
        },
        {
          name: "Saaf Systemic & Contact Fungicide",
          category: "Chemical Fungicide",
          description: "Dual action carbendazim + mancozeb formulation for red rot and blast control.",
          dosage: "2 g/L water",
          searchQuery: "Saaf Carbendazim 12 Mancozeb 63 WP",
          estimatedPrice: "$18.00 / 500g",
        },
      ],
      curatedVideos: [
        {
          title: "Sugarcane Red Rot Identification, Sett Treatment & Management",
          youtubeSearchQuery: "sugarcane red rot disease symptoms treatment guide",
          channelOrSource: "ICAR Sugarcane Breeding Institute",
          durationGuess: "8:45",
          relevanceNote: "Step-by-step visual demonstration of internal pith red lesions and sett drenching methods.",
        },
      ],
      wateringAdvice:
        "Stop furrow flooding immediately. Transition to ridge-and-furrow system with free-flowing exit channels to avoid anaerobic root stagnation.",
      soilHealthTips:
        "Incorporate 150 kg gypsum per acre to improve drainage, and apply 5 tons of neem cake-enriched vermicompost to stimulate soil microbial antagonists.",
    },
  },
  {
    id: "diag-rice-blast-02",
    date: "May 17, 2026",
    cropName: "Rice / Paddy",
    diseaseName: "Rice Blast (Magnaporthe oryzae)",
    isHealthy: false,
    severity: "Moderate",
    confidenceScore: 94,
    thumbnail: "/src/assets/images/rice_blast_leaf_1792629988264.jpg",
    fullDiagnosis: {
      cropName: "Rice / Paddy",
      scientificName: "Oryza sativa",
      isHealthy: false,
      diseaseName: "Rice Blast (Magnaporthe oryzae)",
      scientificDiseaseName: "Magnaporthe oryzae / Pyricularia oryzae",
      confidenceScore: 94,
      severity: "Moderate",
      urgencyLevel: "High",
      pathogenType: "Fungal",
      agronomistSummary:
        "Active Rice Blast infection identified on upper flag leaves and tillers. Hallmark spindle-shaped (eye-shaped) lesions with diamond tips, greyish-white necrotic centers, and reddish-brown borders. Prompt intervention required to prevent progression to neck blast and panicle sterility.",
      symptomsIdentified: [
        "Spindle-shaped / diamond-shaped lesions with ash-gray center on leaf lamina",
        "Dark reddish-brown margin surrounding elliptical necrotic spots",
        "Lesions coalesce causing blighting and drying of younger leaves",
        "Early brown lesions near collar region (collar rot predisposition)",
      ],
      affectedParts: ["Leaf Lamina", "Leaf Collar", "Tillering Nodes"],
      causeAndConditions:
        "Airborne conidia of Magnaporthe oryzae. Highly favored by excessive nitrogen fertilizer, night temperatures of 19-24°C, prolonged morning dew (>10 hours), and high canopy density.",
      referenceComparison: {
        hallmarkSymptoms:
          "Spindle-shaped (pointed ends like an eye) spots with gray or white centers and brown to purplish halos.",
        keyVisualDifference:
          "Rice Brown Spot produces oval brown dots without pointed tips, while Blast lesions are distinctly diamond-shaped.",
        healthyLeafAppearance:
          "Uniform linear green blades without spots, sturdy erect tillers, and clean bright green collar joints.",
      },
      organicTreatments: [
        {
          title: "Pseudomonas fluorescens Foliar Bio-Control",
          recipeOrPreparation:
            "Dissolve 10 g Pseudomonas fluorescens (1x10^8 CFU/g) per liter of non-chlorinated water. Add 1 ml sticker.",
          timingAndFrequency:
            "Spray at tillering stage and repeat at boot leaf emergence; spray during evening hours.",
          modeOfAction:
            "Produces phenazines and pyoluteorin antibiotics that inhibit blast appressoria formation.",
        },
        {
          title: "Fermented Garlic-Chili Extract + Sour Buttermilk",
          recipeOrPreparation:
            "Crush 500g garlic + 500g green chilies, ferment in 5L sour buttermilk for 48 hours, dilute with 100L water.",
          timingAndFrequency: "Apply foliar mist thoroughly covering upper and lower leaf surfaces.",
          modeOfAction:
            "Allicin and lactic acid disrupt fungal cellular membranes and stimulate plant peroxidase enzymes.",
        },
      ],
      chemicalTreatments: [
        {
          title: "Tricyclazole 75% WP Specific Anti-Blast",
          activeIngredient: "Tricyclazole 75% WP",
          applicationRate: "0.6 g per liter of water (120 g/acre)",
          safetyInterval: "30 days before harvest",
        },
        {
          title: "Azoxystrobin + Difenoconazole Broad Spectrum",
          activeIngredient: "Azoxystrobin 18.2% + Difenoconazole 11.4% SC",
          applicationRate: "1.0 ml per liter of water",
          safetyInterval: "28 days before harvest",
        },
      ],
      preventativeMeasures: [
        "Split nitrogen applications into 3-4 doses; do not apply excess urea during cloudy weather.",
        "Maintain alternate wetting and drying (AWD) water management rather than continuous deep flooding.",
        "Treat paddy seed with Trichoderma harzianum @ 10 g/kg seed before sowing.",
        "Destroy infected stubbles and wild weed hosts (Echinochloa grass) on field bunds.",
      ],
      recommendedProducts: [
        {
          name: "Beam Tricyclazole 75% WP",
          category: "Specialty Blast Fungicide",
          description: "Systemic blast preventer and cure, rapid absorption within 1 hour.",
          dosage: "0.6 g/L water",
          searchQuery: "Beam Tricyclazole 75 WP rice blast",
          estimatedPrice: "$16.00 / 120g",
        },
        {
          name: "Bio-Green Pseudomonas Fluorescens",
          category: "Bio-Pesticide",
          description: "High potency biological fungicide for paddy blast and sheath blight.",
          dosage: "10 g/L water",
          searchQuery: "Pseudomonas fluorescens bio fertilizer for paddy",
          estimatedPrice: "$9.50 / kg",
        },
      ],
      curatedVideos: [
        {
          title: "Rice Leaf Blast and Neck Blast Management in Paddy Field",
          youtubeSearchQuery: "paddy rice blast identification treatment organic chemical",
          channelOrSource: "IRRI Rice Knowledge Bank",
          durationGuess: "6:20",
          relevanceNote: "Comprehensive field demonstration on distinguishing leaf blast from brown spot.",
        },
      ],
      wateringAdvice:
        "Drain standing water for 48 hours to aerate soil, then refill to shallow 2-3 cm depth. Avoid continuous stagnant flooding.",
      soilHealthTips:
        "Apply soluble silica / potassium silicate (silicon strengthens epidermis cell walls against blast fungal penetration) alongside 25 kg/acre muriate of potash (MOP).",
    },
  },
  {
    id: "diag-cotton-blight-03",
    date: "May 15, 2026",
    cropName: "Cotton",
    diseaseName: "Bacterial Blight & Angular Leaf Spot (Xanthomonas citri pv. malvacearum)",
    isHealthy: false,
    severity: "Severe",
    confidenceScore: 92,
    thumbnail: "/src/assets/images/cotton_leaf_blight_1792629405149.jpg",
    fullDiagnosis: {
      cropName: "Cotton",
      scientificName: "Gossypium hirsutum",
      isHealthy: false,
      diseaseName: "Bacterial Blight / Angular Leaf Spot & Blackarm (Xanthomonas)",
      scientificDiseaseName: "Xanthomonas citri pv. malvacearum",
      confidenceScore: 92,
      severity: "Severe",
      urgencyLevel: "Immediate Action Required",
      pathogenType: "Bacterial",
      agronomistSummary:
        "Advanced Bacterial Blight identified on cotton foliage. Angular, water-soaked oily spots restricted by leaf veinlets, progressing into dark reddish-black lesions. Veinal necrosis and blackarm lesions on stems threaten boll retention.",
      symptomsIdentified: [
        "Angular, polygonal water-soaked spots bounded strictly by minor veins",
        "Spots turn reddish-brown to dark brown with translucent oily under-surfaces",
        "Black lesion spreading along main leaf veins (vein blight)",
        "Elongated dark brown to black lesions on petioles and young branches (blackarm)",
      ],
      affectedParts: ["Leaf Blades", "Major Veins", "Stem Petioles", "Developing Bolls"],
      causeAndConditions:
        "Xanthomonas bacteria splashing during heavy rains, sprinkler irrigation, high temperatures (30-35°C), and relative humidity >80%.",
      referenceComparison: {
        hallmarkSymptoms:
          "Angular leaf lesions strictly bounded by leaf veins; under side shows glistening water-soaked sheen.",
        keyVisualDifference:
          "Fungal leaf spots cross veins in circular concentric shapes, whereas bacterial blight is sharply bounded by veins.",
        healthyLeafAppearance:
          "Broad palmate dark green leaves with clean translucent veins and stout green stems.",
      },
      organicTreatments: [
        {
          title: "Copper Hydroxide + Bio-Bactericide Drench",
          recipeOrPreparation:
            "Mix 2.5 g Copper Oxychloride 50% WP + 1 g Streptomycin / Kasugamycin per liter of clean water.",
          timingAndFrequency: "Spray at first appearance of angular spots; repeat after 12 days.",
          modeOfAction:
            "Copper ions denature bacterial cell enzymes, while bactericide blocks bacterial protein synthesis.",
        },
        {
          title: "Aqueous Neem Seed Kernel Extract (NSKE 5%) + Turmeric",
          recipeOrPreparation:
            "Crush 5 kg neem seeds, soak overnight in 100 L water, filter and add 500g pure turmeric powder.",
          timingAndFrequency: "Apply early morning on both upper and lower canopy surfaces.",
          modeOfAction:
            "Curcumin and azadirachtin act as natural antimicrobial barriers and deter sucking pest vectors.",
        },
      ],
      chemicalTreatments: [
        {
          title: "Streptocycline + Copper Oxychloride Spray",
          activeIngredient: "Streptocycline 90:10 (Streptomycin sulphate + Tetracycline hydrochloride) + COC 50%",
          applicationRate: "6 g Streptocycline + 500 g COC in 200 liters of water per acre",
          safetyInterval: "21 days before boll picking",
        },
      ],
      preventativeMeasures: [
        "Acid delinting of cotton seeds with concentrated sulfuric acid (100 ml/kg seed) destroys seed-coat bacteria.",
        "Collect and burn fallen infected cotton leaves and boll rinds after crop termination.",
        "Maintain adequate plant spacing (90 x 60 cm) to allow sunlight and ventilation through canopy.",
        "Avoid overhead sprinkler irrigation which splashes bacterial ooze across neighboring plants.",
      ],
      recommendedProducts: [
        {
          name: "Blitox 50 WP Copper Oxychloride",
          category: "Broad Spectrum Protectant",
          description: "Microfine copper fungicide/bactericide for cotton angular leaf spot.",
          dosage: "2.5 g/L water",
          searchQuery: "Blitox 50 WP Copper Oxychloride cotton",
          estimatedPrice: "$14.00 / 500g",
        },
        {
          name: "Tagmycin / Streptocycline Plant Antibacterial",
          category: "Bactericide",
          description: "Systemic antibiotic against Xanthomonas bacterial blight.",
          dosage: "1 g in 15-20 L water",
          searchQuery: "Streptocycline agricultural antibiotic 6g",
          estimatedPrice: "$4.50 / 6g pouch",
        },
      ],
      curatedVideos: [
        {
          title: "Cotton Bacterial Blight and Blackarm Management Strategy",
          youtubeSearchQuery: "cotton bacterial blight angular leaf spot treatment spray",
          channelOrSource: "Central Institute for Cotton Research (CICR)",
          durationGuess: "7:15",
          relevanceNote: "Detailed visual guide on distinguishing angular leaf spot from Cercospora leaf spot.",
        },
      ],
      wateringAdvice:
        "Adopt furrow or drip irrigation. Never use overhead sprinklers during bacterial blight outbreaks.",
      soilHealthTips:
        "Avoid excessive basal nitrogen fertilizers. Supplement with 40 kg/acre potassium sulfate to toughen epidermal leaf cell walls.",
    },
  },
  {
    id: "diag-guava-wilt-04",
    date: "May 14, 2026",
    cropName: "Guava",
    diseaseName: "Guava Wilt & Anthracnose Complex (Fusarium & Colletotrichum)",
    isHealthy: false,
    severity: "Moderate",
    confidenceScore: 91,
    thumbnail: "/src/assets/images/guava_leaf_disease_1792629402944.jpg",
    fullDiagnosis: {
      cropName: "Guava",
      scientificName: "Psidium guajava",
      isHealthy: false,
      diseaseName: "Guava Wilt & Anthracnose Complex (Fusarium oxysporum & Colletotrichum)",
      scientificDiseaseName: "Fusarium oxysporum f. sp. psidii / Colletotrichum gloeosporioides",
      confidenceScore: 91,
      severity: "Moderate",
      urgencyLevel: "High",
      pathogenType: "Fungal",
      agronomistSummary:
        "Early vascular wilt and foliar anthracnose detected in Guava canopy. Marginal leaf chlorosis with characteristic bronze-reddish discoloration, partial twig dieback, and dark sunken spots on young fruits and tender shoots.",
      symptomsIdentified: [
        "Light yellowing of leaves along the margins followed by reddish-bronze tinge",
        "Interveinal necrosis and premature defoliation of infected branches",
        "Dark sunken circular lesions on immature fruits and tender shoots",
        "Vascular bundles in collar region exhibit dark brown internal ring discoloration",
      ],
      affectedParts: ["Foliage Canopy", "Tender Twigs", "Fruit Surface", "Collar Root Zone"],
      causeAndConditions:
        "Soil-borne Fusarium fungus combined with splash-borne Colletotrichum. Favored by high soil pH (7.5-8.5), root injury by nematodes, and waterlogged orchards.",
      referenceComparison: {
        hallmarkSymptoms:
          "Foliage develops a distinctive reddish-bronze coloration followed by unilateral branch wilting and vascular browning.",
        keyVisualDifference:
          "Nutrient deficiency causes bilateral uniform yellowing without twig dieback or brown internal stem rings.",
        healthyLeafAppearance:
          "Glossy dark green leathery leaves with light green prominent venation and clean cream-colored wood.",
      },
      organicTreatments: [
        {
          title: "Trichoderma harzianum + Pseudomonas Tree Drench",
          recipeOrPreparation:
            "Enrich 25 kg well-rotted FYM with 500g Trichoderma harzianum + 500g Pseudomonas. Apply 5 kg around drip line of each tree.",
          timingAndFrequency: "Apply before monsoon rains and repeat 60 days later with thorough watering.",
          modeOfAction:
            "Antagonistic fungi outcompete Fusarium in root zone and induce systemic resistance in guava roots.",
        },
        {
          title: "Asafoetida (Hing) & Garlic Root Drench",
          recipeOrPreparation:
            "Dissolve 20g pure Asafoetida and 200g crushed garlic in 20 liters water; drench the root basin.",
          timingAndFrequency: "Apply every 20 days around affected tree basin.",
          modeOfAction:
            "Sulfur-rich volatile compounds suppress soil pathogen inoculum and repel root-feeding grubs.",
        },
      ],
      chemicalTreatments: [
        {
          title: "Carbendazim Root Basin Drench",
          activeIngredient: "Carbendazim 50% WP",
          applicationRate: "2 g per liter of water (5-8 liters per tree basin)",
          safetyInterval: "30 days before fruit harvest",
        },
        {
          title: "Copper Hydroxide Canopy Spray",
          activeIngredient: "Copper Hydroxide 53.8% DF",
          applicationRate: "2.0 g per liter of water for anthracnose shoot control",
          safetyInterval: "14 days before picking",
        },
      ],
      preventativeMeasures: [
        "Maintain soil pH between 6.0 and 6.8; apply agricultural gypsum or sulfur if orchard soil is alkaline (>7.5).",
        "Prune dead and dry branches 2 inches below infection point; paint cut wounds with copper paste (Bordeaux paste).",
        "Intercrop with Marigold (Tagetes erecta) to suppress root-knot nematodes which act as Fusarium vectors.",
        "Ensure tree basins are shaped as inverted cones (slope away from trunk) to prevent trunk waterlogging.",
      ],
      recommendedProducts: [
        {
          name: "Bordeaux Mixture / Copper Sulfate Pack",
          category: "Fungicidal Tree Paste",
          description: "Traditional 1% Bordeaux spray and 10% trunk paste for fruit rot & dieback prevention.",
          dosage: "10 g/L for foliar spray",
          searchQuery: "Bordeaux mixture for guava orchards",
          estimatedPrice: "$11.00 / kg",
        },
        {
          name: "Nemato-Nil Bio-Nematicide",
          category: "Bio-Control",
          description: "Paecilomyces lilacinus formulation to suppress root-knot nematodes in fruit orchards.",
          dosage: "20 g per tree basin",
          searchQuery: "Paecilomyces lilacinus nematicide guava",
          estimatedPrice: "$15.50 / kg",
        },
      ],
      curatedVideos: [
        {
          title: "Guava Wilt (Fusarium) Identification, Prevention and Treatment",
          youtubeSearchQuery: "guava wilt disease treatment fusarium bio fungicide",
          channelOrSource: "CISH Central Institute for Subtropical Horticulture",
          durationGuess: "9:10",
          relevanceNote: "Detailed visual on root basin drenching and pruning infected branches.",
        },
      ],
      wateringAdvice:
        "Avoid flood irrigation that carries fungal spores from tree to tree. Install ring drip irrigation 1 meter away from trunk.",
      soilHealthTips:
        "Incorporate organic compost enriched with zinc sulfate (100g/tree) and borax (50g/tree) to overcome micronutrient deficiencies.",
    },
  },
  {
    id: "diag-mustard-white-rust-05",
    date: "May 12, 2026",
    cropName: "Mustard",
    diseaseName: "White Rust & Staghead Gall (Albugo candida)",
    isHealthy: false,
    severity: "Moderate",
    confidenceScore: 93,
    thumbnail: "/src/assets/images/mustard_white_rust_1792629988832.jpg",
    fullDiagnosis: {
      cropName: "Mustard",
      scientificName: "Brassica juncea",
      isHealthy: false,
      diseaseName: "White Rust & Staghead Gall (Albugo candida)",
      scientificDiseaseName: "Albugo candida (Pers.) Roussel",
      confidenceScore: 93,
      severity: "Moderate",
      urgencyLevel: "Medium",
      pathogenType: "Fungal",
      agronomistSummary:
        "Characteristic White Rust pustules observed on lower and upper mustard foliage. Raised, white-to-creamy blisters containing sporangia. Floral malformation (staghead) risk present if systemic infection ascends into inflorescences.",
      symptomsIdentified: [
        "Prominent raised white or cream-colored blisters/pustules on underside of leaves",
        "Corresponding upper leaf surface shows pale yellow chlorotic spots",
        "Pustules coalesce into large irregular chalky white crusts",
        "Hypertrophy and distortion of young floral stems (staghead symptoms)",
      ],
      affectedParts: ["Lower Foliage", "Upper Leaf Lamina", "Flower Racemes"],
      causeAndConditions:
        "Oospores in soil or infected seed. Favored by cool temperatures (12-18°C), high relative humidity (>80%), morning fog, and dense vegetative canopy.",
      referenceComparison: {
        hallmarkSymptoms:
          "Shiny white, porcelain-like blisters on lower leaf surface that burst to release powdery white spores.",
        keyVisualDifference:
          "Powdery mildew produces superficial gray powder on upper leaf surface, whereas White Rust blisters are raised beneath epidermis.",
        healthyLeafAppearance:
          "Deep emerald green lobed leaves with crisp texture and vibrant golden-yellow flowers.",
      },
      organicTreatments: [
        {
          title: "Fermented Butter Milk (Chhachh) + Garlic Extract",
          recipeOrPreparation:
            "Mix 5 liters of 5-day fermented sour buttermilk with 200g crushed garlic extract and 100 liters of water.",
          timingAndFrequency: "Spray at 45 and 60 days after sowing during cool morning hours.",
          modeOfAction:
            "Lactic acid bacteria and garlic sulfides inhibit oospore germination and strengthen leaf cuticle.",
        },
        {
          title: "Neem Oil 10,000 PPM Foliar Spray",
          recipeOrPreparation:
            "Mix 3 ml cold-pressed high azadirachtin neem oil + 1 ml liquid soap per liter of water.",
          timingAndFrequency: "Apply every 10 days to target both fungal blisters and aphid vectors.",
          modeOfAction:
            "Creates hydrophobic barrier on leaf surface and deters mustard aphid feeding.",
        },
      ],
      chemicalTreatments: [
        {
          title: "Metalaxyl 8% + Mancozeb 64% WP (Ridomil MZ)",
          activeIngredient: "Metalaxyl 8% + Mancozeb 64% WP",
          applicationRate: "2.0 g per liter of water (400-500 g/acre)",
          safetyInterval: "21 days before pod maturity",
        },
      ],
      preventativeMeasures: [
        "Sow certified rust-resistant mustard varieties (e.g., NRCDR-2, RH-0749, Pusa Mustard 25).",
        "Treat seed with Metalaxyl @ 6 g/kg seed prior to sowing.",
        "Adjust sowing dates to early October to avoid peak rust and aphid pressure in December-January.",
        "Remove and burn staghead galls immediately to prevent oospores from returning to soil.",
      ],
      recommendedProducts: [
        {
          name: "Ridomil Gold MZ 68 WG",
          category: "Systemic Oomycete Fungicide",
          description: "Premium curative and preventive control for white rust and downy mildew.",
          dosage: "2 g/L water",
          searchQuery: "Ridomil Gold Metalaxyl Mancozeb mustard",
          estimatedPrice: "$22.00 / 500g",
        },
        {
          name: "Yellow Sticky Traps (Pack of 25)",
          category: "IPM Pest Monitor",
          description: "Traps mustard aphids and whiteflies that vector secondary fungal infections.",
          dosage: "10-12 traps per acre",
          searchQuery: "Yellow sticky traps for mustard aphids",
          estimatedPrice: "$8.00 / pack",
        },
      ],
      curatedVideos: [
        {
          title: "Mustard White Rust and Staghead Disease Control in Brassica",
          youtubeSearchQuery: "mustard white rust disease management spray brassica",
          channelOrSource: "Directorate of Rapeseed-Mustard Research (DRMR)",
          durationGuess: "5:40",
          relevanceNote: "Clear demonstration of foliar blister vs staghead floral distortion.",
        },
      ],
      wateringAdvice:
        "Avoid overhead irrigation during flowering. Apply light irrigation at pod development stage without wetting flowers.",
      soilHealthTips:
        "Mustard is a heavy sulfur feeder. Apply 20 kg/acre elemental sulfur or 100 kg/acre gypsum during basal land preparation to boost oil content and disease resistance.",
    },
  },
  {
    id: "diag-bell-pepper-spot-06",
    date: "May 10, 2026",
    cropName: "Bell Pepper / Capsicum",
    diseaseName: "Bacterial Spot & Anthracnose (Xanthomonas & Colletotrichum)",
    isHealthy: false,
    severity: "Moderate",
    confidenceScore: 94,
    thumbnail: "/src/assets/images/bell_pepper_leaf_1792629404913.jpg",
    fullDiagnosis: {
      cropName: "Bell Pepper / Capsicum",
      scientificName: "Capsicum annuum",
      isHealthy: false,
      diseaseName: "Bacterial Spot & Anthracnose Complex (Xanthomonas campestris / Colletotrichum)",
      scientificDiseaseName: "Xanthomonas campestris pv. vesicatoria / Colletotrichum capsici",
      confidenceScore: 94,
      severity: "Moderate",
      urgencyLevel: "Medium",
      pathogenType: "Bacterial",
      agronomistSummary:
        "Small, circular to irregular water-soaked spots detected on bell pepper leaves, turning dark brown with raised centers on leaf undersides. Early fruit lesions noted with corky margins. Immediate bactericidal copper application advised.",
      symptomsIdentified: [
        "Small, circular water-soaked lesions that turn necrotic with translucent yellowish halos",
        "Raised, scab-like spots on underside of foliage",
        "Premature defoliation leaving developing peppers exposed to sunscald",
        "Circular sunken spots with concentric rings on pepper fruits",
      ],
      affectedParts: ["Leaf Lamina", "Stems", "Fruit Skin"],
      causeAndConditions:
        "Seed-borne and splash-dispersed bacteria. Thrives in warm (24-30°C), wet weather with frequent overhead rain or sprinkler splashes.",
      referenceComparison: {
        hallmarkSymptoms:
          "Dark brown spots with raised pustular centers on lower leaf surface and greasy water-soaked appearance.",
        keyVisualDifference:
          "Cercospora leaf spot has distinct light gray ash centers with dark margins, while bacterial spot lesions remain dark brown and scabbed.",
        healthyLeafAppearance:
          "Deep glossy green smooth foliage, strong central stem, and firm crisp bell-shaped fruits.",
      },
      organicTreatments: [
        {
          title: "Fixed Copper Hydroxide + Bacillus subtilis Spray",
          recipeOrPreparation:
            "Mix 2 g Copper Hydroxide + 3 ml Bacillus subtilis liquid formulation (1x10^9 CFU/ml) per liter of water.",
          timingAndFrequency: "Spray every 7-10 days during warm, rainy weather.",
          modeOfAction:
            "Bacillus subtilis secretes surfactin and iturin that lyse bacterial membranes, while copper forms protective shield.",
        },
      ],
      chemicalTreatments: [
        {
          title: "Kasugamycin 3% SL Systemic Bactericide",
          activeIngredient: "Kasugamycin 3% SL",
          applicationRate: "2.0 ml per liter of water (400 ml/acre)",
          safetyInterval: "7 days before harvest",
        },
      ],
      preventativeMeasures: [
        "Plant certified disease-free bell pepper seed or hot-water soak seed at 50°C for 25 minutes.",
        "Utilize drip irrigation and plastic mulch to prevent soil splashing onto bottom leaves.",
        "Prune bottom 6-8 inches of foliage once plant reaches 18 inches to improve air circulation.",
        "Rotate with non-solanaceous crops (maize, beans, cabbage) for at least 2 seasons.",
      ],
      recommendedProducts: [
        {
          name: "Kocide 3000 Bio-Active Copper",
          category: "Bactericide / Fungicide",
          description: "High bio-availability copper hydroxide formulation with superior rainfastness.",
          dosage: "1.5 g/L water",
          searchQuery: "Kocide 3000 copper hydroxide capsicum",
          estimatedPrice: "$19.00 / 500g",
        },
        {
          name: "Serenade ASO Bacillus Subtilis",
          category: "Bio-Bactericide",
          description: "OMRI-listed broad spectrum organic bacterial and fungal protectant.",
          dosage: "4 ml/L water",
          searchQuery: "Serenade ASO Bacillus subtilis biofungicide",
          estimatedPrice: "$24.00 / L",
        },
      ],
      curatedVideos: [
        {
          title: "Bacterial Spot in Bell Pepper: Identification and Integrated Management",
          youtubeSearchQuery: "bell pepper capsicum bacterial leaf spot treatment organic copper",
          channelOrSource: "University Extension Agronomy",
          durationGuess: "6:50",
          relevanceNote: "Field visual of leaf and fruit lesions and proper pruning techniques.",
        },
      ],
      wateringAdvice:
        "Strictly use drip line irrigation under black or silver reflective mulch. Never wet foliage in evening hours.",
      soilHealthTips:
        "Maintain balanced calcium availability. Apply calcium nitrate (19% Ca, 15.5% N) foliar spray @ 5 g/L to avoid blossom end rot alongside bacterial spot.",
    },
  },
  {
    id: "diag-tomato-early-blight-07",
    date: "May 08, 2026",
    cropName: "Tomato",
    diseaseName: "Early Blight & Target Spot (Alternaria solani)",
    isHealthy: false,
    severity: "Moderate",
    confidenceScore: 95,
    thumbnail: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80",
    fullDiagnosis: {
      cropName: "Tomato",
      scientificName: "Solanum lycopersicum",
      isHealthy: false,
      diseaseName: "Early Blight & Target Spot (Alternaria solani)",
      scientificDiseaseName: "Alternaria solani Sorauer",
      confidenceScore: 95,
      severity: "Moderate",
      urgencyLevel: "Medium",
      pathogenType: "Fungal",
      agronomistSummary:
        "Diagnostic target-board concentric ring lesions identified on lower tomato leaflets. Surrounding yellow chlorotic halo evident. Disease progressing from lower canopy upward. Pruning infected leaves and applying organic bio-fungicide recommended.",
      symptomsIdentified: [
        "Dark brown to black lesions with characteristic concentric target-board rings",
        "Prominent chlorotic yellow margin around individual lesions",
        "Lower leaves yellow, wither, and drop prematurely",
        "Dark leathery sunken spots at stem attachment end of fruit",
      ],
      affectedParts: ["Lower Foliage", "Leaf Petioles", "Stem Collars"],
      causeAndConditions:
        "Alternaria spores overwinter in soil residue. Germination triggered by warm temperatures (24-29°C), heavy dew, and frequent overhead irrigation.",
      referenceComparison: {
        hallmarkSymptoms:
          "Target-board concentric rings inside dark circular spots surrounded by a bright yellow halo.",
        keyVisualDifference:
          "Late Blight produces rapidly expanding water-soaked greasy patches with white underside downy mold, unlike dry target rings of Early Blight.",
        healthyLeafAppearance:
          "Uniformly green serrated leaflets, sturdy hairy stems, and active apical growth.",
      },
      organicTreatments: [
        {
          title: "Baking Soda & Horticultural Soap Spray",
          recipeOrPreparation:
            "Mix 5 g sodium bicarbonate (baking soda) + 5 ml mild liquid castile soap + 5 ml neem oil per liter of water.",
          timingAndFrequency: "Spray every 7 days in late afternoon; ensure underside of leaves is coated.",
          modeOfAction:
            "Alkalinizes leaf surface pH to 8.2+, making it inhospitable for Alternaria conidial germination.",
        },
        {
          title: "Trichoderma harzianum Foliar Spray",
          recipeOrPreparation:
            "Dissolve 5 g wettable Trichoderma harzianum powder per liter of clean lukewarm water.",
          timingAndFrequency: "Apply every 10-14 days as preventative bio-shield.",
          modeOfAction: "Direct mycoparasitism and competitive exclusion on leaf phyllosphere.",
        },
      ],
      chemicalTreatments: [
        {
          title: "Mancozeb 75% WP Broad Spectrum Protectant",
          activeIngredient: "Mancozeb 75% WP",
          applicationRate: "2.5 g per liter of water (500 g/acre)",
          safetyInterval: "7 days before tomato harvest",
        },
      ],
      preventativeMeasures: [
        "Prune and stake tomato plants to elevate foliage at least 12 inches above bare soil.",
        "Apply organic straw or plastic mulch around plant bases to prevent soil splash.",
        "Sanitize pruning shears with 70% isopropyl alcohol between consecutive plants.",
        "Implement 3-year crop rotation with non-solanaceous crops.",
      ],
      recommendedProducts: [
        {
          name: "Dithane M-45 Mancozeb 75% WP",
          category: "Contact Protectant",
          description: "Classic multisite protective fungicide preventing Alternaria spore germination.",
          dosage: "2.5 g/L water",
          searchQuery: "Dithane M-45 mancozeb tomato early blight",
          estimatedPrice: "$13.00 / 500g",
        },
      ],
      curatedVideos: [
        {
          title: "How to Stop Tomato Early Blight Fast and Naturally",
          youtubeSearchQuery: "tomato early blight treatment prevention organic baking soda",
          channelOrSource: "Agronomy Garden Science",
          durationGuess: "8:10",
          relevanceNote: "Shows exact pruning techniques and organic spray application.",
        },
      ],
      wateringAdvice:
        "Water solely at base via soaker hose or drip emitters. Never splash water on tomato foliage.",
      soilHealthTips:
        "Ensure adequate potassium and magnesium. Apply magnesium sulfate (Epsom salt) foliar spray @ 3 g/L if lower leaves show interveinal yellowing.",
    },
  },
  {
    id: "diag-wheat-yellow-rust-08",
    date: "May 06, 2026",
    cropName: "Wheat",
    diseaseName: "Stripe & Yellow Rust (Puccinia striiformis)",
    isHealthy: false,
    severity: "Severe",
    confidenceScore: 97,
    thumbnail: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    fullDiagnosis: {
      cropName: "Wheat",
      scientificName: "Triticum aestivum",
      isHealthy: false,
      diseaseName: "Stripe / Yellow Rust (Puccinia striiformis)",
      scientificDiseaseName: "Puccinia striiformis f. sp. tritici",
      confidenceScore: 97,
      severity: "Severe",
      urgencyLevel: "Immediate Action Required",
      pathogenType: "Fungal",
      agronomistSummary:
        "Severe Stripe (Yellow) Rust outbreak confirmed on wheat flag leaves. Linear parallel stripes of bright yellow-orange uredinial pustules arranged neatly along leaf veins. Rapid spore dispersal threatens grain filling and 40%+ yield loss.",
      symptomsIdentified: [
        "Narrow linear yellow-orange pustules arranged in parallel stripes between veins",
        "Urediniospores rub off as bright yellow powder on fingers",
        "Severe necrosis and premature chlorosis of upper flag leaves",
        "Infection spreading onto glumes and awns of developing earheads",
      ],
      affectedParts: ["Flag Leaves", "Upper Leaf Canopy", "Glumes and Awns"],
      causeAndConditions:
        "Wind-blown urediniospores. Thrives under cool temperatures (10-15°C), intermittent rain, morning fog, and susceptible wheat cultivars.",
      referenceComparison: {
        hallmarkSymptoms:
          "Pustules form strict parallel yellow stripes like sewing stitches between leaf veins.",
        keyVisualDifference:
          "Brown rust pustules are scattered randomly across the leaf, whereas Yellow Rust is strictly arranged in linear stripes.",
        healthyLeafAppearance:
          "Sturdy upright blue-green flag leaves and robust developing grain spikes without yellow dusting.",
      },
      organicTreatments: [
        {
          title: "Fermented Cow Urine & Hing (Asafoetida) Spray",
          recipeOrPreparation:
            "Dilute 10 liters of 15-day fermented cow urine with 100 liters water and 100g pure Asafoetida.",
          timingAndFrequency: "Spray immediately upon first sighting of yellow rust foci.",
          modeOfAction:
            "High ammonia content and aromatic ferulic acid compounds suppress spore viability.",
        },
      ],
      chemicalTreatments: [
        {
          title: "Propiconazole 25% EC (Tilt) Systemic Fungicide",
          activeIngredient: "Propiconazole 25% EC",
          applicationRate: "1.0 ml per liter of water (200 ml in 200 L water/acre)",
          safetyInterval: "30 days before harvest",
        },
        {
          title: "Tebuconazole 25.9% m/m EC",
          activeIngredient: "Tebuconazole 25.9% EC",
          applicationRate: "1.0 to 1.25 ml per liter of water",
          safetyInterval: "30 days before harvest",
        },
      ],
      preventativeMeasures: [
        "Plant certified rust-resistant wheat varieties (e.g., HD-2967, HD-3086, DBW-187, PBW-550).",
        "Avoid late sowing; plant by November 15 to bypass peak rust sporulation in late winter.",
        "Scout field borders and northern edges weekly for early yellow rust hot-spots (foci).",
      ],
      recommendedProducts: [
        {
          name: "Tilt 25 EC Propiconazole",
          category: "Systemic Triazole Fungicide",
          description: "Gold standard curative and preventative for wheat stripe and leaf rust.",
          dosage: "1 ml/L water",
          searchQuery: "Tilt Propiconazole 25 EC wheat yellow rust",
          estimatedPrice: "$21.00 / 250ml",
        },
      ],
      curatedVideos: [
        {
          title: "Wheat Yellow Rust Identification and Control in Field",
          youtubeSearchQuery: "wheat stripe yellow rust symptoms chemical control propiconazole",
          channelOrSource: "Wheat Agronomy Research Directorate",
          durationGuess: "7:40",
          relevanceNote: "Shows how to do the fingertip rub test to identify active yellow rust spores.",
        },
      ],
      wateringAdvice:
        "Avoid unnecessary late sprinkler irrigation that wets flag leaves. Irrigate via furrow during calm midday periods.",
      soilHealthTips:
        "Avoid excessive late nitrogen top-dressing which creates succulent tissue highly susceptible to rust invasion. Apply 20 kg/acre potassium to strengthen culms.",
    },
  },
  {
    id: "diag-healthy-cotton-09",
    date: "May 04, 2026",
    cropName: "Cotton",
    diseaseName: "Healthy Crop - No Pathogens Detected",
    isHealthy: true,
    severity: "None",
    confidenceScore: 99,
    thumbnail: "/src/assets/images/cotton_crop_plant_1792629404896.jpg",
    fullDiagnosis: {
      cropName: "Cotton",
      scientificName: "Gossypium hirsutum",
      isHealthy: true,
      diseaseName: "Healthy Crop - Optimal Foliar Health",
      scientificDiseaseName: "Vigorous Vegetative Condition",
      confidenceScore: 99,
      severity: "None",
      urgencyLevel: "None",
      pathogenType: "Healthy",
      agronomistSummary:
        "The scanned cotton leaf exhibits excellent chlorophyll density, sturdy venation, uniform turgidity, and zero signs of fungal, bacterial, or sucking pest damage. The crop is in prime square/boll formation stage.",
      symptomsIdentified: [
        "Uniform deep green pigmentation across leaf lamina",
        "Clean, unobstructed vein structure without angular water soaking",
        "Zero signs of leaf curl virus, thrips crinkling, or bollworm damage",
        "Healthy white bolls and vigorous branching nodes",
      ],
      affectedParts: ["None - Crop 100% Healthy"],
      causeAndConditions: "Optimal agronomic care, balanced nutrition, and sound pest management.",
      referenceComparison: {
        hallmarkSymptoms: "Clean, flat leaves with firm turgor and vibrant chlorophyll sheen.",
        keyVisualDifference: "No necrotic spots, yellow halos, or curled margins.",
        healthyLeafAppearance: "Healthy deep green foliage with sturdy petiole attachments.",
      },
      organicTreatments: [
        {
          title: "Preventative Neem Oil Canopy Mist",
          recipeOrPreparation: "2 ml neem oil (1500 ppm) per liter of water with 1 ml soap sticker.",
          timingAndFrequency: "Spray every 14 days as protective shield against whiteflies and jassids.",
          modeOfAction: "Repels ovipositing pests and prevents fungal spore colonization.",
        },
      ],
      preventativeMeasures: [
        "Continue balanced drip fertigation (19-19-19 water soluble fertilizer).",
        "Inspect lower leaf undersides twice weekly for early nymph activity.",
        "Install pheromone traps (Helilure / Pectino-lure) for monitoring pink bollworm moths.",
      ],
      recommendedProducts: [
        {
          name: "Pure Cold-Pressed Neem Oil 1500 PPM",
          category: "Organic Protectant",
          description: "All-natural preventative against sucking insects and foliar pathogens.",
          dosage: "3-5 ml/L water",
          searchQuery: "Cold pressed neem oil 1500 ppm agricultural",
          estimatedPrice: "$10.00 / L",
        },
      ],
      curatedVideos: [
        {
          title: "Cotton Crop Care and Maximum Boll Setting Best Practices",
          youtubeSearchQuery: "cotton crop management nutrition boll retention tips",
          channelOrSource: "AgriTech Extension",
          durationGuess: "6:15",
          relevanceNote: "Nutritional tips to maximize boll retention and prevent square dropping.",
        },
      ],
      wateringAdvice:
        "Maintain consistent soil moisture at 60-70% field capacity. Avoid water stress during flowering and boll development.",
      soilHealthTips:
        "Foliar spray of 2% DAP (Di-ammonium phosphate) + 1% Potassium chloride at flowering stage boosts boll weight.",
    },
  },
  {
    id: "diag-healthy-bellpepper-10",
    date: "May 02, 2026",
    cropName: "Bell Pepper / Capsicum",
    diseaseName: "Healthy Crop - Prime Vigorous Foliage",
    isHealthy: true,
    severity: "None",
    confidenceScore: 98,
    thumbnail: "/src/assets/images/bell_pepper_plant_1792629403792.jpg",
    fullDiagnosis: {
      cropName: "Bell Pepper / Capsicum",
      scientificName: "Capsicum annuum",
      isHealthy: true,
      diseaseName: "Healthy Crop - Vigorous Vegetative Stage",
      scientificDiseaseName: "Optimal Botanical Health",
      confidenceScore: 98,
      severity: "None",
      urgencyLevel: "None",
      pathogenType: "Healthy",
      agronomistSummary:
        "Excellent capsicum leaf health. Foliage is glossy, firm, and showing zero chlorosis, necrotic spotting, or mosaic patterning. Floral buds are developing vigorously.",
      symptomsIdentified: [
        "Glossy deep green leaf lamina",
        "Firm leaf turgor and clean petioles",
        "No thrips silvering or mite curling",
        "Robust blossom set without blossom drop",
      ],
      affectedParts: ["None - Crop 100% Healthy"],
      causeAndConditions: "Ideal greenhouse/field conditions and well-calibrated irrigation.",
      referenceComparison: {
        hallmarkSymptoms: "Dark green, waxy, undamaged leaves with stout stems.",
        keyVisualDifference: "Absence of mosaic puckering, angular spots, or tip burn.",
        healthyLeafAppearance: "Lush green glossy foliage.",
      },
      organicTreatments: [
        {
          title: "Seaweed Extract Foliar Tonic",
          recipeOrPreparation: "2 ml cold-water kelp / Ascophyllum nodosum liquid per liter of water.",
          timingAndFrequency: "Apply every 14 days during flowering and fruit sizing.",
          modeOfAction: "Provides cytokinins and trace minerals that stimulate root growth and fruit setting.",
        },
      ],
      preventativeMeasures: [
        "Maintain drip irrigation schedule to prevent moisture fluctuations and blossom end rot.",
        "Ensure good ventilation and daytime temperatures under 32°C.",
      ],
      recommendedProducts: [
        {
          name: "Organic Liquid Kelp / Seaweed Extract",
          category: "Bio-Stimulant",
          description: "Enhances stress tolerance, flower retention, and uniform bell pepper sizing.",
          dosage: "2 ml/L water",
          searchQuery: "Ascophyllum nodosum liquid seaweed fertilizer",
          estimatedPrice: "$14.50 / L",
        },
      ],
      curatedVideos: [
        {
          title: "Bell Pepper Pruning and High Yield Secret Techniques",
          youtubeSearchQuery: "bell pepper capsicum high yield pruning staking guide",
          channelOrSource: "Horticulture Mastery",
          durationGuess: "7:00",
          relevanceNote: "Tips on canopy management and avoiding sunscald.",
        },
      ],
      wateringAdvice:
        "Keep root zone evenly moist. Never let soil dry out completely between irrigations to avoid calcium mobility issues.",
      soilHealthTips:
        "Foliar spray with chelated micronutrients (Zn, Fe, B) at first flower set.",
    },
  },
];
