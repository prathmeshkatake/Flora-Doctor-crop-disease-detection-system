/**
 * Comprehensive Agricultural Knowledge Base & Intelligent Farmer Agronomist Assistant
 * Provides detailed, actionable answers for crop cultivation, soil management,
 * pest/disease control, irrigation, fertilizers, organic farming, and farm operations.
 */

export interface AgronomicTopic {
  id: string;
  keywords: string[];
  title: string;
  category: "crop" | "soil" | "fertilizer" | "pest" | "disease" | "irrigation" | "organic" | "storage" | "general";
  generateAnswer: (query: string, context?: any) => string;
}

export const AGRICULTURAL_KNOWLEDGE: AgronomicTopic[] = [
  // 1. SUGARCANE CULTIVATION & SOIL
  {
    id: "sugarcane_cultivation",
    keywords: ["sugarcane", "ganna", "cane", "saccharum", "sugar cane"],
    title: "Sugarcane Cultivation, Soil & Crop Management",
    category: "crop",
    generateAnswer: (query: string) => {
      const q = query.toLowerCase();
      if (q.includes("pest") || q.includes("borer") || q.includes("insect")) {
        return `🎋 **Dr. Flora's Sugarcane Pest Management Guide:**

1. **Early Shoot Borer (Chilo infuscatellus):**
   - **Identification:** Dead hearts appear in 1 to 3-month-old tillers which can be pulled out easily with a rotting odor.
   - **Remedy:** Release *Trichogramma chilonis* egg parasitoids @ 50,000/ha (2 egg cards per acre) every 10 days starting from 30th day. Install light traps and ensure light earthing-up at 35–45 days.
2. **Top Borer & Internode Borer:**
   - Prune and destroy dead shoots. Maintain field sanitation and avoid excessive water stagnation.
3. **White Grubs / Termites:**
   - Drench cane furrow rows with *Metarhizium anisopliae* or *Beauveria bassiana* bio-agent (2.5 kg/acre mixed in 200kg FYM) or apply Chlorpyrifos 20 EC @ 2 L/acre at planting.`;
      }

      if (q.includes("disease") || q.includes("red rot") || q.includes("smut")) {
        return `🎋 **Dr. Flora's Sugarcane Disease Prevention Protocol:**

1. **Red Rot (*Colletotrichum falcatum*):**
   - **Hallmark:** Yellowing/drying of top crown, reddening of internal pith with distinct white cross-bands and alcohol-like fermented odor.
   - **Action:** Uproot and burn diseased clumps immediately. Never take ratoon from affected crops. Dip setts in *Trichoderma viride* (10g/L) or Carbendazim (1g/L) for 15 minutes before furrow planting.
2. **Whip Smut:**
   - Remove the black whip structure carefully in a gunny bag to avoid spore dispersal. Rotate with rice or green manure legumes.
3. **Grassy Shoot Disease (Phytoplasma):**
   - Transmitted by aphids. Use hot-water treated disease-free planting seed material (52°C for 30 minutes).`;
      }

      return `🎋 **Dr. Flora's Complete Sugarcane Cultivation & Soil Protocol:**

1. **Best Soil & Land Preparation:**
   - **Ideal Soil:** Deep, fertile, well-drained loams, clay-loams, or alluvial soils with high water retention.
   - **Optimum pH:** 6.5 to 7.8. Avoid saline/waterlogged hardpan soils.
   - **Deep Tillage:** Deep ploughing up to 45 cm depth followed by 2 cross-harrowings to create a fine, aerated seedbed. Add 10–12 tons of well-rotted FYM or press mud compost per acre.

2. **Sett Selection & Treatment:**
   - Use healthy 8–10 month old cane setts having 2 to 3 viable bud eyes.
   - **Sett Treatment:** Dip in *Trichoderma viride* (10g/L) + *Pseudomonas fluorescens* (10g/L) in lukewarm water for 15 mins to eliminate red rot and fungal spores.

3. **Spacing & Planting Methods:**
   - **Row Spacing:** 4.0 to 5.0 feet (120 to 150 cm) furrow spacing allows excellent sunshine interception, tillering, and tractor inter-cultivation.
   - **Ring Pit Method / Wide-Row Paired Planting:** (30cm x 120cm) saves water and increases tiller count up to 40% per stool.

4. **Fertilizer Protocol (NPK per Acre):**
   - **Basal at Planting:** 25 kg Nitrogen + 50 kg Phosphorus (SSP) + 30 kg Potash (MOP) + 10 kg Zinc Sulfate.
   - **Top Dressing:** Apply remaining 75 kg Nitrogen in 3 split doses at 45 days (tillering), 90 days (formative stage), and 120 days (grand growth). Always finish nitrogen top-dressing before 150 days.

5. **Irrigation & Water Management:**
   - Sugarcane requires 1500–2500 mm water. The **formative stage (60–120 days)** is the most critical moisture-sensitive phase.
   - Drip irrigation with subsurface inline drippers saves 45% water and increases cane sugar brix content.`;
    },
  },

  // 2. RICE / PADDY CULTIVATION & WATER
  {
    id: "rice_cultivation",
    keywords: ["rice", "paddy", "dhan", "oryza", "chawal"],
    title: "Rice / Paddy Farming, SRI, & Water Management",
    category: "crop",
    generateAnswer: (query: string) => {
      const q = query.toLowerCase();
      if (q.includes("blast") || q.includes("disease") || q.includes("brown spot")) {
        return `🌾 **Dr. Flora's Rice Blast & Disease Management:**

1. **Rice Blast (*Magnaporthe oryzae*):**
   - **Symptoms:** Spindle-shaped diamond lesions with gray-white centers and brown margins on leaf blades and neck.
   - **Remedy:** Spray *Pseudomonas fluorescens* @ 5g/L or Tricyclazole 75% WP @ 0.6g/L at early tillering and panicle emergence. Avoid excess urea application during cloudy/humid weather.
2. **Bacterial Leaf Blight (BLB):**
   - Wavy yellow-white drying along leaf margins from tip downward. Drain field temporarily for 2 days; spray fresh cow dung extract (20%) or Copper Oxychloride 2.5g/L.
3. **Brown Spot / False Smut:**
   - Spray Propiconazole 25% EC (1 ml/L) or bio-fungicide *Trichoderma* at boot leaf stage.`;
      }

      return `🌾 **Dr. Flora's High-Yield Rice / Paddy Protocol:**

1. **Soil & Climate Requirements:**
   - Heavy clay or clay-loam soils with impermeable subsoil layers that retain standing water; optimum pH 5.5 to 7.0.
2. **Seed Treatment:**
   - **Brine Test:** Immerse paddy seeds in 10% saltwater (an egg should float). Discard light, floating seeds.
   - **Bio-Coating:** Wash retained heavy seeds and treat with *Pseudomonas fluorescens* (10g/kg) and *Azospirillum* (10g/kg).
3. **Nursery & Transplanting:**
   - **Transplanting Age:** 18–22 day old seedlings (4-leaf stage).
   - **Spacing:** 20 cm x 15 cm (or 25 cm x 25 cm single seedling in SRI - System of Rice Intensification).
4. **Water Management (AWD - Alternate Wetting & Drying):**
   - Maintain 2–3 cm shallow standing water during early transplanting establishment.
   - Adopt **AWD (Alternate Wetting and Drying)** using a perforated field water pipe: re-irrigate only when water level drops 15 cm below soil surface. This cuts water consumption by 30% and reduces methane emissions.
5. **Fertilizer Protocol (NPK per Acre):**
   - 40 kg N : 20 kg P2O5 : 20 kg K2O + **10 kg Zinc Sulfate (ZnSO4)**. Zinc is essential to prevent Khaira disease (rusty brown leaf spots). Split Nitrogen into 3 equal doses: basal, active tillering, and panicle initiation.`;
    },
  },

  // 3. COTTON FARMING & BOLLWORM CONTROL
  {
    id: "cotton_cultivation",
    keywords: ["cotton", "kapas", "gossypium", "bollworm"],
    title: "Cotton Agronomy & Pest Control (Pink Bollworm & Whitefly)",
    category: "crop",
    generateAnswer: (query: string) => {
      return `🌱 **Dr. Flora's Cotton Agronomy & Bollworm Defense:**

1. **Soil & Climate:**
   - Deep Black Cotton Soils (Vertisols) or well-drained fertile loam with high moisture-retention capacity; pH 6.0 to 8.0.
2. **Spacing & Sowing:**
   - Hybrid / Bt Cotton: 90 cm x 60 cm or 120 cm x 45 cm. Dibble seeds at 3–4 cm depth when soil temperature exceeds 20°C.
3. **Pink Bollworm (*Pectinophora gossypiella*) IPM:**
   - **Pheromone Traps:** Install 8–10 delta pheromone traps with Gossyplure per acre at 45 days after sowing to monitor moth catches.
   - **Biological Spray:** When catches cross ETL (8 moths/trap/night for 3 consecutive days), spray *Beauveria bassiana* (5g/L) or Neem Oil 10,000 PPM (4ml/L).
   - **Eco-Foliar Option:** Spray Emamectin Benzoate 5% SG @ 0.5g/L or Chlorantraniliprole 18.5% SC @ 0.3ml/L targeting early square and flowering stages.
4. **Sucking Pest Defense (Whiteflies & Jassids):**
   - Install 15 yellow sticky traps and 10 blue sticky traps per acre. Spray *Verticillium lecanii* (5g/L) or Flonicamid 50% WG @ 0.3g/L for severe infestations.
5. **Nutrition & Boll Retention:**
   - Spray 1% Potassium Nitrate (13-00-45) + 0.1% Boron at flowering and boll development to prevent premature square/flower drop.`;
    },
  },

  // 4. WHEAT CULTIVATION & CRITICAL IRRIGATIONS
  {
    id: "wheat_cultivation",
    keywords: ["wheat", "gehun", "triticum", "atta"],
    title: "Wheat Sowing, Crown Root Irrigation & Rust Defense",
    category: "crop",
    generateAnswer: (query: string) => {
      return `🌾 **Dr. Flora's Master Wheat Agronomy Guide:**

1. **Optimal Sowing Window & Seed Rate:**
   - **Timing:** November 1 to November 20 (temperatures 20°C–22°C). Late sowing after Dec 1 cuts yield by 35 kg/ha/day due to terminal heat stress.
   - **Seed Rate:** 40 kg/acre for timely sowing; 50 kg/acre for late sowing. Treat seed with *Trichoderma viride* (5g/kg) and *Azotobacter* bio-fertilizer.
2. **Critical Irrigation Stages (The 6-Stage Rule):**
   - ⚡ **1. CRI Stage (Crown Root Initiation - 21 Days):** The absolute most critical irrigation! Missing this reduces tillering drastically.
   - 2. Tillering stage (40–45 days)
   - 3. Late jointing stage (60–65 days)
   - 4. Flowering stage (80–85 days)
   - 5. Milking stage (100–105 days)
   - 6. Dough stage (115–120 days) — avoid strong windy days to prevent lodging.
3. **Yellow / Stripe Rust (*Puccinia striiformis*):**
   - **Signs:** Bright yellow powdery linear stripes along leaf veins in cool foggy weather.
   - **Action:** Spray Propiconazole 25% EC @ 1ml/L or bio-fungicide *Trichoderma* at first sign of yellow pustules. Protect the flag leaf.`;
    },
  },

  // 5. GUAVA FARMING, PRUNING & WILT
  {
    id: "guava_cultivation",
    keywords: ["guava", "amrood", "peru", "psidium"],
    title: "Guava Orchard Care, Bahar Treatment & Fruit Fly Control",
    category: "crop",
    generateAnswer: (query: string) => {
      return `🍈 **Dr. Flora's Guava Orchard & Fruit Care Masterclass:**

1. **Bahar Regulation (Crop Scheduling):**
   - Guava flowers 3 times a year (Ambe, Mrig, and Hasth Bahar).
   - **Mrig Bahar (Winter Harvest - Best Quality):** Withhold irrigation in April–May to cause leaf shedding. In June, prune branch tips, manure heavily, and irrigate. Flowers emerge in July and produce premium sweet winter fruits free of fruit fly maggots!
2. **Pruning Technique:**
   - Tip-pinch tertiary branches by 10–15 cm after harvesting. This stimulates lateral shoots where new floral buds develop.
3. **Guava Wilt (*Fusarium oxysporum f. sp. psidii*):**
   - **Symptoms:** Yellowing, wilting, and drying of leaves on one side of tree, progressing inward.
   - **Control:** Drench tree root zones with *Trichoderma harzianum* (50g mixed with 5kg vermicompost per tree) twice a year. Apply 2 kg Neem Cake per tree basin to suppress soil pathogens and nematodes.
4. **Fruit Fly (*Bactrocera correcta*):**
   - Hang Methyl Eugenol pheromone traps (6 traps per acre) 1.5m above ground. Bag growing fruits with foam sleeves when they reach marble size.`;
    },
  },

  // 6. BELL PEPPER & CHILLI CULTIVATION
  {
    id: "bell_pepper_chilli",
    keywords: ["bell pepper", "pepper", "chilli", "chili", "mirch", "capsicum"],
    title: "Chilli & Bell Pepper Care, Leaf Curl & Blossom End Rot",
    category: "crop",
    generateAnswer: (query: string) => {
      return `🌶️ **Dr. Flora's Chilli & Bell Pepper Guide:**

1. **Leaf Curl Complex (Thrips & Mites):**
   - **Upward Boat-Shaped Curling:** Caused by Thrips. Spray Neem Oil 10,000 PPM (5ml/L) or Spinosad 45% SC (0.3ml/L). Install blue sticky traps.
   - **Downward Cup-Shaped Curling:** Caused by Yellow Mites. Spray Wettable Sulfur (3g/L) or Abamectin (0.5ml/L).
2. **Blossom End Rot (Black sunken spot at fruit base):**
   - Caused by calcium deficiency and fluctuating soil moisture.
   - **Remedy:** Spray Chelated Calcium (EDTA 10%) @ 1g/L or Calcium Nitrate @ 2g/L at flowering; maintain consistent soil moisture with drip irrigation.
3. **Damping Off in Nursery:**
   - Sow on 15cm raised beds. Drench with *Trichoderma viride* (5g/L) before seed sowing. Avoid excessive watering.`;
    },
  },

  // 7. SOIL HEALTH, TYPES, TESTING & PH CORRECTION
  {
    id: "soil_health_ph",
    keywords: ["soil", "mitti", "ph", "alkaline", "acidic", "saline", "clay", "sandy", "loam", "soil test"],
    title: "Soil Testing, Soil Types & pH Correction Methods",
    category: "soil",
    generateAnswer: (query: string) => {
      const q = query.toLowerCase();
      if (q.includes("test") || q.includes("sample")) {
        return `🧪 **Dr. Flora's Step-by-Step Soil Sampling & Testing Protocol:**

1. **Sampling Pattern:** Walk in a 'Z' or zigzag pattern across your field. Avoid sampling near field borders, compost pits, or under big shade trees.
2. **Depth:** Take V-shaped core samples up to 15 cm (6 inches) for field crops, or 30 cm for fruit trees.
3. **Composite Sample:** Collect 15–20 subsamples in a clean plastic bucket. Mix thoroughly, divide into four quarters, discard opposite quarters, and repeat until ~500 grams remain.
4. **Drying:** Air-dry in shade (never bake in sun or oven). Pack in a clean ziplock bag and send to an authorized Soil Health Card laboratory to evaluate N-P-K, pH, Electrical Conductivity (EC), Organic Carbon (OC), and Micronutrients.`;
      }

      if (q.includes("acid")) {
        return `🧪 **Dr. Flora's Acidic Soil Correction (pH < 6.0):**

- **Why it happens:** Heavy rainfall leaching basic cations (Ca, Mg) leaving acidic ions (H, Al), or continuous excessive urea use.
- **Treatment:** Apply **Agricultural Lime (Calcium Carbonate - CaCO3)** or **Dolomite Lime** (if Magnesium is also low).
- **Application Rate:** 1 to 2 tons per acre depending on soil texture. Broadcast evenly 3–4 weeks before sowing and incorporate into the top 15 cm soil.
- **Organic Support:** Incorporate well-cured vermicompost and biochar to buffer soil pH naturally.`;
      }

      if (q.includes("alkaline") || q.includes("saline") || q.includes("sodic")) {
        return `🧪 **Dr. Flora's Alkaline / Saline Soil Reclamation (pH > 8.0):**

- **Diagnosis:** High sodium saturation (sodic) or white surface crust of salts (saline).
- **Treatment:** Apply **Agricultural Gypsum (Calcium Sulfate - CaSO4·2H2O)**. Calcium displaces sodium on clay platelets, which can then be leached out.
- **Dosage:** 1.5 to 3.0 tons gypsum per acre based on Soil Test Gypsum Requirement (GR).
- **Leaching:** Provide adequate drainage channels and irrigate heavily with clean water to flush displaced sodium salts out of root zone.
- **Green Manuring:** Grow Dhaincha (*Sesbania aculeata*) or Sunn hemp and incorporate into soil at 45 days. Its organic acids neutralize alkalinity!`;
      }

      return `🌱 **Dr. Flora's Guide to Soil Types & Organic Soil Conditioning:**

1. **Loamy Soil (The Gold Standard):** Balanced mix of sand, silt, and clay. Excellent drainage and moisture retention. Maintain with annual vermicompost (2 tons/acre).
2. **Clay Soils:** High nutrient holding, but prone to compaction and waterlogging. Incorporate coarse organic matter, biochar, and gypsum to open up macropores.
3. **Sandy Soils:** Drains very rapidly, low cation exchange. Mulch heavily, apply bentonite clay or silt, and feed nutrients in small frequent doses through drip fertigation.
4. **Organic Carbon (OC) Target:** Aim for minimum **0.75% to 1.0%** soil organic carbon by incorporating cover crops, farmyard manure, and avoiding crop residue burning!`;
    },
  },

  // 8. FERTILIZER PROTOCOLS, NPK & MICRONUTRIENTS
  {
    id: "fertilizer_npk",
    keywords: ["npk", "fertilizer", "urea", "dap", "potash", "manure", "zinc", "boron", "dosage", "khad"],
    title: "NPK Fertilization Schedules & Micronutrient Deficiency Remedies",
    category: "fertilizer",
    generateAnswer: (query: string) => {
      return `🌱 **Dr. Flora's Scientific NPK & Micronutrient Program:**

1. **Growth Stage-Specific NPK Ratios:**
   - **Vegetative / Foliage Stage:** High Nitrogen ratio (NPK **19-19-19** or **28-14-14** @ 5g/L foliar, or urea top-dressing) to build robust stems and chlorophyll.
   - **Flowering & Budding Stage:** High Phosphorus & Potassium ratio (NPK **12-61-00 (MAP)** or **00-52-34 (MKP)** @ 4-5g/L) to stimulate flower buds and root architecture.
   - **Fruiting / Grain Filling Stage:** High Potassium ratio (NPK **13-00-45 (Potassium Nitrate)** or **00-00-50 (SOP)** @ 5g/L) to boost fruit weight, sugar brix, color, and storability.

2. **Common Micronutrient Deficiencies & Fixes:**
   - **Zinc Deficiency (Khaira in paddy, little leaf):** Interveinal chlorosis on young leaves. Apply Zinc Sulfate (ZnSO4 21%) @ 10 kg/acre in soil or spray Chelated Zinc EDTA 12% @ 1g/L.
   - **Boron Deficiency:** Fruit cracking, hollow stems, and flower dropping. Spray Borax / Disodium Octaborate @ 1g/L at pre-flowering stage.
   - **Iron Deficiency:** Yellowing of youngest leaves while veins remain green (common in high pH soils). Spray Chelated Iron (Fe-EDTA 12%) @ 1g/L.

3. **Golden Rule:** Never broadcast dry fertilizers on dry soil. Always irrigate before or during fertilizer application to prevent root burn.`;
    },
  },

  // 9. ORGANIC BIO-PESTICIDES & HOMEMADE PREPARATIONS
  {
    id: "organic_preparations",
    keywords: ["organic", "neem", "jeevamrutha", "panchagavya", "trichoderma", "bio-pesticide", "recipe", "homemade", "buttermilk", "cow dung"],
    title: "Homemade Organic Recipes: Neem, Jeevamrutha, Buttermilk & Trichoderma",
    category: "organic",
    generateAnswer: (query: string) => {
      const q = query.toLowerCase();
      if (q.includes("jeevamrutha") || q.includes("jeevamrut")) {
        return `🌿 **Dr. Flora's Traditional Jeevamrutha Formulation (200 Liters):**

**Ingredients for 1 Acre:**
1. Fresh Desi Cow Dung: **10 kg**
2. Desi Cow Urine: **5 to 10 Liters**
3. Organic Jaggery: **2 kg**
4. Pulse / Gram Flour (Besan): **2 kg**
5. Virgin Soil (from under a banyan tree or forest edge): **Handful (approx. 100g)**
6. Clean Water: **200 Liters** in a plastic barrel

**Preparation Steps:**
1. In a 200L barrel, mix cow dung and cow urine thoroughly.
2. In a bucket, dissolve jaggery and pulse flour in water and pour into the barrel.
3. Add the handful of virgin soil (contains billions of beneficial undisturbed microflora).
4. Stir the solution clockwise with a wooden stick for 2 minutes.
5. Cover with a breathable jute gunny bag and keep in the shade for **48 to 72 hours**. Stir clockwise twice daily (morning & evening).
6. **Application:** Apply with irrigation water or filter through cloth for a 10% foliar spray every 15 days. Restores microbial vitality instantly!`;
      }

      if (q.includes("buttermilk") || q.includes("sour milk") || q.includes("chaas")) {
        return `🥛 **Dr. Flora's Sour Buttermilk Antifungal Spray:**

- **How it works:** Lactic acid bacteria and acidic pH suppress powdery mildew, downy mildew, and foliar fungal blights.
- **Preparation:** Take 5 Liters of fresh buttermilk or curd whey. Place a copper strip or wire inside the container and ferment for **5 to 7 days** until it turns greenish-blue (copper lacto-complex).
- **Dilution:** Mix 500ml of fermented sour buttermilk in 15 Liters of water (standard knapsack sprayer tank).
- **Application:** Spray on cucurbits, chillies, tomatoes, or grapevines early morning every 7–10 days.`;
      }

      return `🌿 **Dr. Flora's Organic Pest & Disease Formulas:**

1. **Cold-Pressed Neem Oil (10,000 PPM):**
   - **Ratio:** 5ml Neem Oil + 2ml mild organic liquid soap (emulsifier) in 1 Liter lukewarm water.
   - **Effect:** Repels whiteflies, thrips, aphids, leafhoppers, and suppresses fungal spore germination.
2. **Trichoderma viride Bio-Fungicide:**
   - **Basal Soil Application:** Mix 2 kg *Trichoderma* wettable powder with 100 kg moist farmyard manure / vermicompost. Keep covered under shade for 7 days until white fungal mycelium colonizes the heap. Broadcast over 1 acre.
   - **Foliar Spray:** 5g *Trichoderma* per Liter of clean water.
3. **Agniastra (Broad-Spectrum Organic Insect Deterrent):**
   - Boil 5 kg crushed neem leaves, 500g hot green chillies, 500g garlic paste, and 2 kg tobacco/pongamia leaves in 15 Liters cow urine. Cool, filter, and spray @ 250ml per 15L water tank. Eradicates caterpillars and leaf-eating beetles!`;
    },
  },

  // 10. DRIP IRRIGATION, WATER CONSERVATION & MULCHING
  {
    id: "irrigation_mulch",
    keywords: ["drip", "irrigation", "water", "watering", "mulch", "sprinkler", "fertigation", "moisture"],
    title: "Drip Irrigation Setup, Water Scheduling & Mulching Benefits",
    category: "irrigation",
    generateAnswer: (query: string) => {
      return `💧 **Dr. Flora's Water Management & Drip Irrigation Guide:**

1. **Drip Irrigation Efficiency:**
   - Saves **40% to 60%** water compared to flood furrow irrigation.
   - Direct delivery to root zone eliminates weed growth in inter-row spaces and prevents fungal foliar splash diseases.
2. **Emitter Selection & Spacing:**
   - **Vegetables (Tomato, Chilli, Pepper):** 16mm inline lateral with 40cm emitter spacing (2 to 4 LPH discharge).
   - **Sugarcane:** Sub-surface or surface drip with 50cm dripper spacing along cane furrows.
   - **Fruit Orchards (Guava, Mango, Citrus):** Online drippers (2 to 4 emitters of 8 LPH per tree basin ring).
3. **Fertigation Rules:**
   - Use 100% water-soluble fertilizers (WSF).
   - Follow the **1/3rd Rule:** First 1/3rd time clean water flush, middle 1/3rd fertilizer injection, final 1/3rd clean water flush to clear emitter lines of salts.
4. **Organic vs. Plastic Mulching:**
   - **Organic Straw Mulch (Paddy/Wheat straw):** 3-inch thick layer lowers soil temperature by 4°C, prevents crusting, and decomposes into humus.
   - **Silver-Black Plastic Mulch (25–30 micron):** Reflects sunlight to repel aphids/thrips, keeps soil warm in winter, and stops 100% weed emergence.`;
    },
  },

  // 11. PEST TRAPS, BORERS & SUCKING INSECTS
  {
    id: "pest_traps_ipm",
    keywords: ["pest", "insect", "bug", "aphid", "thrips", "whitefly", "caterpillar", "trap", "worm", "mealybug"],
    title: "Integrated Pest Management (IPM), Traps & Biocontrol",
    category: "pest",
    generateAnswer: (query: string) => {
      return `🐛 **Dr. Flora's Integrated Pest Management (IPM) Blueprint:**

1. **Color Sticky Traps (Mechanical Defense):**
   - **Yellow Sticky Traps (15 per acre):** Highly attractive to Whiteflies, Aphids, Leaf Miners, and Flea Beetles.
   - **Blue Sticky Traps (10 per acre):** Specifically tuned wavelength for Thrips.
   - Place traps 15 cm above the crop canopy height and clean/replace monthly.
2. **Pheromone Traps for Caterpillars & Borers:**
   - **Funnel Traps with Lures (5 to 8 per acre):**
     - Helilure: Helicoverpa armigera (Fruit/Boll borer)
     - Spodolure: Spodoptera litura (Armyworm)
     - Gossyplure: Pink bollworm in cotton
     - Leucinodes lure: Brinjal shoot & fruit borer
3. **Biological Predators & Parasitoids:**
   - Release *Trichogramma* cards @ 50,000 eggs/acre against moth borers.
   - Spray *Beauveria bassiana* or *Metarhizium anisopliae* (5g/L) during evening hours for soil grubs and caterpillars.
4. **Mealybug Organic Knockdown:**
   - Mix 5ml Neem oil + 5ml Rubbing alcohol (70% IPA) + 2ml liquid soap per Liter water. The alcohol breaks the waxy outer mealy shield while neem suffocates the insect.`;
    },
  },

  // 12. WEED CONTROL & COVER CROPS
  {
    id: "weed_management",
    keywords: ["weed", "weeds", "ghas", "herbicide", "weeding", "cover crop"],
    title: "Eco-Friendly Weed Management, Intercropping & Cover Crops",
    category: "general",
    generateAnswer: (query: string) => {
      return `🌾 **Dr. Flora's Weed Management & Cover Cropping Strategies:**

1. **Critical Weed-Free Period:**
   - The first **30 to 45 days** after sowing/transplanting is when weeds rob 80% of crop nutrients and sunlight. Keeping the crop weed-free during this window preserves maximum yield.
2. **Mechanical & Manual Weeding:**
   - Use a cycle weeder or power weeder between rows when weeds are at 2–3 leaf stage.
3. **Smother / Cover Crops:**
   - Intercrop Cowpea (*Vigna unguiculata*), Sunn hemp, or Black gram between wide-row crops (sugarcane, maize, cotton). They carpet the ground within 25 days, smothering weeds while fixing 40–60 kg atmospheric nitrogen per hectare!
4. **Stale Seedbed Technique:**
   - Prepare field, irrigate lightly, and wait 10 days for weed seeds to germinate. Lightly harrow or flame-weed the seedlings without turning deep soil, then sow your main crop into clean ground.`;
    },
  },

  // 13. SEED TREATMENT & NURSERY CARE
  {
    id: "seed_treatment",
    keywords: ["seed", "seeds", "beej", "germination", "nursery", "seedling", "treatment"],
    title: "Seed Treatment Protocols & Healthy Nursery Raising",
    category: "general",
    generateAnswer: (query: string) => {
      return `🌱 **Dr. Flora's Seed Treatment & Nursery Protocol:**

1. **Why Seed Treatment is Mandatory:**
   - Protects emerging delicate plumule and radicle from soil-borne fungi (*Pythium, Rhizoctonia, Fusarium*) that cause pre-emergence damping off and seedling blight.
2. **Step-by-Step Bio-Seed Coating (The FIR Principle):**
   - **F - Fungicide / Bio-control:** Coat seeds with *Trichoderma viride* or *Pseudomonas fluorescens* (10g per 1 kg seed).
   - **I - Insecticide (if required):** For termite/wireworm zones, coat with Chlorpyrifos or Thiamethoxam (3g/kg).
   - **R - Rhizobium / Azotobacter:** Inoculate with nitrogen-fixing bacteria (10g/kg) and PSB (10g/kg) mixed with 10% jaggery syrup for adherence.
3. **Hot Water Soak for Hard Seeds & Setts:**
   - Soak seeds in water at 50°C–52°C for 15–20 minutes to kill internal bacterial and fungal pathogens without harming embryo viability.
4. **Nursery Bed Best Practices:**
   - Always prepare **raised nursery beds (15–20 cm high)** to ensure root aeration and avoid water stagnation.
   - Use 50-mesh nylon insect-proof net tunnel covers over nursery beds to keep vector whiteflies and thrips away from young seedlings.`;
    },
  },

  // 14. HARVESTING, DRYING & GRAIN STORAGE
  {
    id: "harvest_storage",
    keywords: ["harvest", "storage", "grain", "dry", "drying", "weevil", "godown", "store", "moisture"],
    title: "Post-Harvest Drying, Moisture Safety & Grain Storage",
    category: "storage",
    generateAnswer: (query: string) => {
      return `📦 **Dr. Flora's Safe Post-Harvest Drying & Storage Standards:**

1. **Critical Moisture Thresholds Before Bagging:**
   - **Cereal Grains (Wheat, Rice, Maize):** Must be sun-dried to **below 12% moisture** (grain should break with a sharp 'snap' sound between teeth).
   - **Pulses & Lentils:** Must be below **10% moisture**.
   - **Oilseeds (Mustard, Groundnut, Soybean):** Below **8% to 9% moisture** to prevent fungal aflatoxins and rancidity.
2. **Hermetic Storage Bags (PICS Bags):**
   - Triple-layer Purdue Improved Crop Storage (PICS) bags seal airtight. Insects consume the small remaining oxygen and suffocate naturally without any toxic chemical fumigants!
3. **Traditional Organic Grain Protection:**
   - Mix dried, shaded Neem leaves (*Azadirachta indica*) @ 1 kg per 100 kg grain.
   - Mix inert diatomaceous earth or clean wood ash (2%) with seeds to physically scratch the cuticle of grain weevils and prevent infestation.
4. **Godown Sanitation:**
   - Elevate bags on wooden pallets 30 cm above concrete floor and 50 cm away from walls to prevent dampness migration.`;
    },
  },

  // 15. WEATHER, FROST & HEATWAVE DEFENSE
  {
    id: "weather_climate",
    keywords: ["weather", "frost", "cold", "heat", "temperature", "rain", "drought", "climate"],
    title: "Weather Protection: Frost Defense, Heat Stress & Drought Care",
    category: "general",
    generateAnswer: (query: string) => {
      return `🌦️ **Dr. Flora's Weather Resilience & Crop Protection:**

1. **Frost & Winter Freeze Protection (Temperatures < 4°C):**
   - **Light Night Irrigation:** Wet soil has higher heat capacity and conducts heat from the subsoil, raising canopy temperature by 1°C–2°C.
   - **Smudge Smoke Fires:** Burn damp straw heaps on the windward border of the orchard at 4:00 AM to create an insulating smoke canopy.
   - **Foliar Spray:** Spray Soluble Sulfur 80% WDG (2g/L) or Thiourea (0.5g/L) before expected cold waves.
2. **Summer Heat Stress Mitigation (> 40°C):**
   - Spray **Kaolin Clay (Surround WP) @ 3% to 5%** over foliage. It forms a reflective white mineral film that cools leaf canopy by 3°C–5°C and prevents sun-scald without reducing photosynthesis!
   - Mulch heavily with crop residue to keep soil root zones cool and conserve moisture.
3. **Hailstorm / Wind Damage Recovery:**
   - Spray a recovery cocktail: Copper Oxychloride (2g/L) to prevent wound bacterial entry + 19-19-19 (3g/L) + Seaweed Extract (2ml/L) to stimulate rapid new shoot growth.`;
    },
  },

  // 16. COMPANION PLANTING & BIO-DIVERSITY
  {
    id: "companion_planting",
    keywords: ["companion", "marigold", "intercrop", "border", "trap crop", "biodiversity"],
    title: "Companion Planting, Marigold Nematode Trap & Border Crops",
    category: "general",
    generateAnswer: (query: string) => {
      return `🌼 **Dr. Flora's Companion & Trap Crop Strategies:**

1. **Marigold (*Tagetes erecta*) as Nematode & Pest Barrier:**
   - Plant African Marigold borders around tomato, chilli, potato, and brinjal fields.
   - **Mode of Action:** Roots secrete alpha-terthienyl which kills harmful Root-Knot Nematodes (*Meloidogyne spp.*). Flowers also lure American Bollworm moths (*Helicoverpa*) away from main crops!
2. **Maize / Sorghum as Border Windbreaks & Vector Barriers:**
   - Plant 2–3 dense border rows of Maize or Sorghum around chilli, tomato, and cotton fields.
   - Blocks windborne whiteflies and aphids from carrying viral leaf curl diseases into your field.
3. **Basil & Mint with Solanaceous Crops:**
   - Repels hornworms, flies, and aphids with strong essential aromatic terpenes.
4. **Mustard as Trap Crop in Cabbage/Cauliflower:**
   - Sowing 2 rows of mustard every 25 rows of cabbage attracts Diamondback Moths (DBM) to mustard, leaving the cabbage clean!`;
    },
  },
  // 17. TOMATO & POTATO CULTIVATION & BLIGHT
  {
    id: "tomato_potato",
    keywords: ["tomato", "tamatar", "potato", "aloo", "solanum", "tuber"],
    title: "Tomato & Potato Farming, Blight Management & Staking",
    category: "crop",
    generateAnswer: (query: string) => {
      const q = query.toLowerCase();
      if (q.includes("blight")) {
        return `🍅 **Dr. Flora's Tomato & Potato Blight Defense:**

1. **Early Blight (*Alternaria solani*):**
   - **Signs:** Concentric target-board brown rings on lower leaves surrounded by yellow halos.
   - **Action:** Prune bottom 12 inches of foliage. Spray Copper Oxychloride 50% WP (2.5g/L) or *Trichoderma viride* (5g/L) every 7 days.
2. **Late Blight (*Phytophthora infestans*):**
   - **Signs:** Rapidly spreading water-soaked dark lesions with white fungal down on leaf undersides in cold, humid weather.
   - **Action:** Immediate application of Cymoxanil + Mancozeb (2g/L) or Dimethomorph (1g/L). Avoid overhead sprinkler irrigation.
3. **Blossom End Rot in Tomato:**
   - Spray Calcium Nitrate (2g/L) during fruit set and maintain uniform soil moisture with drip lines.`;
      }

      return `🍅 **Dr. Flora's Tomato & Potato Agronomy Protocol:**

1. **Soil & Spacing:**
   - Well-drained sandy loam rich in organic matter (pH 6.0–6.8). Space tomatoes at 60cm x 60cm on raised beds with drip tape.
2. **Staking & Trellising:**
   - Stake indeterminate tomatoes with bamboo poles and trellis string. Keeps fruits off wet soil, reducing fungal contact by 70%.
3. **Potato Earthing-Up & Tuber Formation:**
   - Earth-up soil around potato stems at 30–35 days to shield developing tubers from direct sunlight (preventing greening / solanine toxic accumulation) and tuber moth oviposition.
4. **NPK Program:**
   - 50 kg N : 40 kg P2O5 : 50 kg K2O per acre. Apply high potassium during fruit expansion to increase fruit size, firmness, and shelf life.`;
    },
  },

  // 18. CORN & MAIZE CULTIVATION & FALL ARMYWORM
  {
    id: "corn_maize",
    keywords: ["corn", "maize", "makka", "zea", "bhutta", "sweet corn"],
    title: "Maize / Corn Agronomy & Fall Armyworm (FAW) Control",
    category: "crop",
    generateAnswer: (query: string) => {
      return `🌽 **Dr. Flora's Maize / Corn & Fall Armyworm Blueprint:**

1. **Fall Armyworm (*Spodoptera frugiperda*) Management:**
   - **Identification:** Characteristic inverted 'Y' mark on the caterpillar's head, 4 square spots on the 8th abdominal segment, and severe windowing in the leaf whorl filled with sawdust-like frass.
   - **Organic Whorl Treatment:** Apply sand + wood ash mixture (9:1) or neem cake powder directly into the central leaf whorl.
   - **Biocontrol:** Spray *Metarhizium rileyi* (5g/L) or *Bacillus thuringiensis* (Bt kurstaki) @ 2g/L into whorls in the evening.
   - **Emergency Intervention:** Chlorantraniliprole 18.5% SC @ 0.4ml/L or Emamectin Benzoate 5% SG @ 0.5g/L applied directly into central whorls.
2. **Spacing & Plant Population:**
   - 60 cm row-to-row x 20 cm plant-to-plant (approx. 33,000 plants per acre).
3. **Critical Growth Stages for Irrigation & Fertilization:**
   - ⚡ **Knee-high Stage (30–35 days):** Apply 2nd split of Nitrogen (Urea).
   - ⚡ **Tasseling & Silking Stage (50–65 days):** The most drought-sensitive stage. Water stress now results in poor pollination and barren cobs.`;
    },
  },

  // 19. MUSTARD & OILSEEDS
  {
    id: "mustard_oilseeds",
    keywords: ["mustard", "sarson", "rapeseed", "brassica", "toria", "oilseed"],
    title: "Mustard Cultivation, Aphid Control & White Rust Defense",
    category: "crop",
    generateAnswer: (query: string) => {
      return `🌼 **Dr. Flora's Mustard / Oilseed Master Plan:**

1. **Sowing Window (The Escaping Strategy):**
   - Sow early between **October 1 to October 15**. Early-sown mustard matures before the peak population burst of Mustard Aphids in January!
   - Seed rate: 1.5 to 2.0 kg per acre. Treat seeds with *Trichoderma viride* (10g/kg).
2. **Mustard Aphid (*Lipaphis erysimi*) Management:**
   - Install 15 Yellow Sticky Traps per acre at canopy level.
   - Clip and destroy initial colonized apical twigs. Spray Neem Oil 10,000 PPM (4ml/L) or Dimethoate 30% EC (1.5ml/L) if 10% twigs are infested. Spray only in late afternoon to safeguard honeybee pollinators!
3. **White Rust (*Albugo candida*):**
   - White blisters on leaf undersides with staghead floral malformation. Spray Mancozeb 75% WP (2g/L) or Wettable Sulfur (2.5g/L).
4. **Sulfur Nutrition for High Oil Content:**
   - Apply **15 kg Bentonite Sulfur (90% S)** per acre at land preparation. Sulfur increases oil percentage by 2%–3% in mustard seeds.`;
    },
  },

  // 20. SOYBEAN & PULSES (GRAM / CHICKPEA / MOONG)
  {
    id: "soybean_pulses",
    keywords: ["soybean", "pulse", "pulses", "chickpea", "gram", "chana", "moong", "urad", "dal", "lentil"],
    title: "Pulses & Soybean Care, Rhizobium Inoculation & Pod Borer",
    category: "crop",
    generateAnswer: (query: string) => {
      return `🌱 **Dr. Flora's Pulses & Soybean Agronomy:**

1. **Rhizobium Inoculation (Free Nitrogen Factory!):**
   - Inoculate 10 kg seed with 250g *Rhizobium* culture + 250g PSB (Phosphorus Solubilizing Bacteria) suspended in 50ml cooled jaggery syrup.
   - Fixes 40 to 60 kg atmospheric nitrogen per hectare and boosts nodule count.
2. **Pod Borer (*Helicoverpa armigera*) Defense:**
   - Install 6 Helilure pheromone traps per acre.
   - Sow 1 line of African Marigold every 16 lines of chickpea as trap crop.
   - Spray HaNPV (Helicoverpa Nuclear Polyhedrosis Virus) @ 100 LE/acre or *Bacillus thuringiensis* (2g/L) at 50% flowering.
3. **Yellow Mosaic Virus (YMV):**
   - Transmitted by whiteflies in soybean and moong. Control vector whiteflies using yellow sticky traps and early neem spray.`;
    },
  },

  // 21. ONION & GARLIC CULTIVATION
  {
    id: "onion_garlic",
    keywords: ["onion", "pyaz", "kanda", "garlic", "lahsun", "allium", "bulb"],
    title: "Onion & Garlic Agronomy, Purple Blotch & Bulb Curing",
    category: "crop",
    generateAnswer: (query: string) => {
      return `🧅 **Dr. Flora's Onion & Garlic Production Protocol:**

1. **Nursery & Transplanting:**
   - Transplant 45–50 day old seedlings at 15cm x 10cm spacing on broad beds (BBF system).
2. **Thrips & Purple Blotch (*Alternaria porri*):**
   - Thrips scrape leaf tissue, creating silver streaks that provide entry for purple blotch fungal spores.
   - Spray Neem oil 10,000 PPM (4ml/L) + Blue sticky traps (10/acre) for thrips.
   - Spray Tebuconazole + Trifloxystrobin @ 0.7g/L or Mancozeb @ 2.5g/L for purple blotch.
3. **Bulb Curing & Storage:**
   - Stop irrigation 10–12 days before harvest.
   - After harvest, cure bulbs under field shade with foliage covering bulbs (windrow curing) for 5–7 days until necks dry out completely. Discard thick-necked bulbs before storing in well-ventilated slatted racks.`;
    },
  },

  // 22. MANGO & ORCHARD FRUITS
  {
    id: "mango_orchards",
    keywords: ["mango", "aam", "mangifera", "orchard", "fruit", "citrus", "banana"],
    title: "Mango & Orchard Care, Hopper Control & Powdery Mildew",
    category: "crop",
    generateAnswer: (query: string) => {
      return `🥭 **Dr. Flora's Fruit Orchard & Mango Protocol:**

1. **Mango Hopper (*Amritodus atkinsoni*):**
   - Nymphs suck sap from tender panicles, excreting sticky honeydew followed by sooty mold.
   - Spray Neem oil (5ml/L) or *Verticillium lecanii* (5g/L) before flower opening, or Thiamethoxam 25% WG @ 0.3g/L at panicle emergence. Never spray chemical pesticides during full bloom to preserve pollinators!
2. **Powdery Mildew on Panicles:**
   - White chalky powder covering floral panicles. Spray Wettable Sulfur (2.5g/L) or Hexaconazole 5% EC (1ml/L).
3. **Fruit Drop Control:**
   - Spray Planofix (NAA - alpha naphthyl acetic acid) @ 4ml per 15L water at pea-sized fruit stage to arrest premature fruit drop.`;
    },
  },
];

/**
 * Intelligent Fallback Agronomist responder that handles ANY farming query
 * accurately with deep domain expertise.
 */
export function getIntelligentAgronomicResponse(query: string, context?: any): string {
  const qClean = (query || "").toLowerCase().trim();

  // If query is very short or just greeting
  if (!qClean || qClean === "hi" || qClean === "hello" || qClean === "hey") {
    return `🌿 **Hello! I am Dr. Flora, your Senior Agricultural AI Scientist.**

I am here to assist you with every aspect of farming and crop care:
1. 🌾 **Crop Cultivation Protocols:** Sugarcane, Rice/Paddy, Wheat, Cotton, Guava, Bell Pepper, Tomato, Potato, Corn, Mustard, Onion, Pulses, etc.
2. 🧪 **Soil Health & pH Correction:** Soil testing, lime for acidic soil, gypsum for sodic/alkaline soils, and improving drainage.
3. 🌱 **NPK & Fertilizer Schedules:** Growth stage dosing, organic compost, vermicompost, and micronutrient deficiencies (Zinc, Boron, Iron).
4. 🍃 **Organic Recipes & Biocontrol:** Pure neem oil foliar wash, Jeevamrutha, sour buttermilk antifungal spray, and *Trichoderma* application.
5. 💧 **Drip & Irrigation Management:** Water schedules, fertigation rules, and weed-suppressing mulching.
6. 🐛 **Integrated Pest & Disease Management:** Traps, bio-pesticides, and safe crop remedies.

*What crop are you growing or what farming question would you like to solve today?*`;
  }

  // Calculate score for each knowledge topic based on keyword matches
  // Prioritize specific crop topics when a crop name is in the user query!
  let bestTopic: AgronomicTopic | null = null;
  let highestScore = 0;

  for (const topic of AGRICULTURAL_KNOWLEDGE) {
    let score = 0;
    for (const kw of topic.keywords) {
      if (qClean.includes(kw)) {
        // High boost for specific crop keywords
        if (topic.category === "crop") {
          score += 6;
        } else {
          score += kw.length > 5 ? 3 : 2;
        }
      }
    }
    if (score > highestScore) {
      highestScore = score;
      bestTopic = topic;
    }
  }

  // If a topic matched with positive score, return its specialized response
  if (bestTopic && highestScore >= 2) {
    return bestTopic.generateAnswer(query, context);
  }

  // Context-aware fallback if the user has an active diagnostic scan
  if (context && context.crop) {
    return `👩‍🌾 **Dr. Flora's Expert Assessment for your ${context.crop}:**

For your **${context.crop}** (Diagnosed condition: **${context.disease || "foliar symptoms"}**, ${context.severity || "Moderate"} severity):

1. **Immediate Cultural Action:**
   - Prune severely affected bottom leaves using sanitized shears to increase airflow.
   - Switch from overhead sprinkler to base drip watering to keep foliage dry and arrest pathogen spore dissemination.
2. **Bio-Fungicidal / Pest Protocol:**
   - Spray **Cold-Pressed Neem Oil 10,000 PPM (5ml/L)** mixed with 2ml organic liquid soap in early morning (6:00 AM – 8:30 AM).
   - Drench the root zone with **Trichoderma viride (5g/L)** to establish protective beneficial root microflora.
3. **Soil & Nutrition Booster:**
   - Top-dress tree/plant basin with well-aerated vermicompost (2kg/sqm) and apply seaweed foliar extract (2.5ml/L) to accelerate new leaf flush recovery.

*Feel free to ask for specific dosage calculations, tank-mix compatibility, or preventative schedules!*`;
  }

  // General comprehensive answer for broad farming questions
  return `🌾 **Dr. Flora's Agronomic Guidance for Your Question:**

"${query}"

Here is my recommendation based on Good Agricultural Practices (GAP):

1. **Soil & Root Health First:**
   - Ensure the soil is well-drained and friable. Incorporate 2 to 3 tons of well-decomposed FYM or vermicompost per acre to enhance organic carbon and beneficial soil microbes.
   - For root protection, treat seed or nursery root zones with *Trichoderma viride* (10g/kg seed or 5g/L root dip).

2. **Balanced Nutrition:**
   - Match NPK fertilization with the crop growth phase: high nitrogen during vegetative growth, phosphorus for root/bud establishment, and high potassium (Potassium Nitrate / SOP) during grain/fruit development.
   - Always supplement with essential micronutrients (Zinc, Boron, and Magnesium) to prevent interveinal chlorosis and blossom drop.

3. **Eco-Friendly Pest & Disease Defense:**
   - Keep foliage dry using drip irrigation or morning watering.
   - Install yellow & blue sticky traps (15–20/acre) to monitor sucking pests early.
   - Spray cold-pressed Neem Oil (5ml/L) every 10–14 days as preventative maintenance.

*To give you the exact dosage, formula, or planting guide, please let me know your specific crop, acreage, or soil type!*`;
}
