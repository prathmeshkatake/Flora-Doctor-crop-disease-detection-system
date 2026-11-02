import { DiseaseEncyclopediaItem, CropEncyclopediaItem } from "../types";

/**
 * Comprehensive Expanded Pathology Profiles for all crops in the AgroDoc Encyclopedia.
 * Ensures every crop has multiple known diseases with detailed symptoms, organic preparations,
 * chemical IPM dosages, and commercial input recommendations.
 */
export const EXPANDED_CROP_DISEASES: Record<string, DiseaseEncyclopediaItem[]> = {
  // 1. Tomato
  "crop-tomato": [
    {
      id: "dis-tomato-late-blight",
      cropId: "crop-tomato",
      cropName: "Tomato",
      name: "Late Blight",
      scientificName: "Phytophthora infestans",
      pathogenType: "Fungal",
      severityDefault: "Severe",
      referenceImageUrl: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Large, irregular water-soaked pale green lesions on leaves turning greasy brown-black",
        "Delicate white downy fungal mildew on the underside of infected leaf lesions during high humidity",
        "Dark brown, sunken greasy lesions on green fruit causing firm rot",
      ],
      causes: "Oomycete pathogen thriving in cool, foggy, rainy periods with extended leaf wetness.",
      favorableWeather: "15°C - 22°C with continuous relative humidity >90%",
      organicRemedies: [
        {
          title: "Bordeaux Mixture (1%) Preventive Spray",
          recipe: "10g Copper Sulfate + 10g Slaked Lime per 1 Liter water.",
          application: "Apply before anticipated rain spells to coat both foliage surfaces thoroughly.",
        },
        {
          title: "Potassium Phosphonate Plant Immunizer",
          recipe: "3 ml Potassium Phosphonate per 1 Liter water.",
          application: "Elicits systemic acquired resistance (SAR) blocking oomycete mycelium growth.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Dimethomorph 50% WP or Cymoxanil",
          ingredient: "Dimethomorph",
          dosage: "1.0 g / Liter water",
        },
        {
          title: "Metalaxyl 8% + Mancozeb 64% WP",
          ingredient: "Metalaxyl + Mancozeb",
          dosage: "2.5 g / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Bordeaux Mixture Organic Copper Fungicide",
          type: "Organic Fungicide",
          dosage: "10 g / Liter",
          benefit: "OMRI-certified contact protective shield preventing late blight spore germination.",
          searchQuery: "bordeaux mixture copper fungicide for tomato late blight",
          price: "$12.50 / ₹340",
        },
      ],
      videoTutorials: [
        {
          title: "Tomato Late Blight Identification & Emergency Control",
          channel: "Tomato Grower Science",
          query: "tomato late blight phytophthora infestans organic chemical control",
          duration: "9:20",
        },
      ],
    },
    {
      id: "dis-tomato-bacterial-canker",
      cropId: "crop-tomato",
      cropName: "Tomato",
      name: "Bacterial Canker & Spot",
      scientificName: "Clavibacter michiganensis / Xanthomonas",
      pathogenType: "Bacterial",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Unilateral wilting where leaflets on only one side of the petiole wilt and turn brown",
        "Marginal leaf scorch ('firing') with bright yellow chlorotic transition bands",
        "Distinctive small white fruit spots with raised dark brown centers ('bird's eye spots')",
      ],
      causes: "Seed-borne or mechanically spread bacteria entering stomata or pruning clipping wounds.",
      favorableWeather: "24°C - 30°C with splashing irrigation or rain",
      organicRemedies: [
        {
          title: "Copper Hydroxide + Hydrogen Peroxide (3%)",
          recipe: "2 g Copper Hydroxide + 5 ml 3% Hydrogen Peroxide per Liter water.",
          application: "Disinfects leaf canopy and suppresses bacterial cell replication.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Copper Oxychloride + Streptocycline",
          ingredient: "Copper Oxychloride 50% + Streptomycin",
          dosage: "2.5 g COC + 0.1 g Streptocycline per Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Copper Hydroxide 77% WP Bio-Bactericide",
          type: "Organic Fungicide",
          dosage: "2 g / Liter",
          benefit: "Provides high free-copper ion barrier suppressing bacterial spot and canker.",
          searchQuery: "copper hydroxide bactericide for tomato bacterial canker spot",
          price: "$15.50 / ₹420",
        },
      ],
      videoTutorials: [
        {
          title: "Managing Tomato Bacterial Canker & Spot in Greenhouses",
          channel: "Horticulture Extension Guide",
          query: "tomato bacterial canker clavibacter bird eye spots management",
          duration: "8:50",
        },
      ],
    },
  ],

  // 2. Potato
  "crop-potato": [
    {
      id: "dis-potato-early-blight",
      cropId: "crop-potato",
      cropName: "Potato",
      name: "Early Blight (Alternaria)",
      scientificName: "Alternaria solani",
      pathogenType: "Fungal",
      severityDefault: "Moderate",
      referenceImageUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Dark brown to black circular lesions with characteristic concentric target-board rings on older foliage",
        "Chlorotic yellowing around leaf lesions leading to premature leaf defoliation",
        "Sunken, irregular corky dark lesions on potato tuber skin during storage",
      ],
      causes: "Warm temperatures alternating with humid rainy nights or overhead center-pivot irrigation.",
      favorableWeather: "22°C - 30°C with heavy dew or rain cycles",
      organicRemedies: [
        {
          title: "Neem Oil 10,000 PPM + Baking Soda Emulsion",
          recipe: "5 ml Cold-Pressed Neem Oil + 3 g Sodium Bicarbonate per 1 Liter water.",
          application: "Spray every 7-10 days starting at 30 days after tuber planting.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Mancozeb 75% WP or Chlorothalonil 75% WP",
          ingredient: "Mancozeb / Chlorothalonil",
          dosage: "2.5 g / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Trichoderma viride Bio-Fungicide Powder",
          type: "Organic Fungicide",
          dosage: "10 g / Liter",
          benefit: "Competitively excludes Alternaria conidia on tuber foliage.",
          searchQuery: "trichoderma viride bio fungicide for potato early blight",
          price: "$11.00 / ₹290",
        },
      ],
      videoTutorials: [
        {
          title: "Potato Early Blight vs Late Blight Diagnosis & Control",
          channel: "Potato Agronomy Hub",
          query: "potato early blight alternaria solani symptoms spray",
          duration: "10:15",
        },
      ],
    },
    {
      id: "dis-potato-scab",
      cropId: "crop-potato",
      cropName: "Potato",
      name: "Common Scab",
      scientificName: "Streptomyces scabies",
      pathogenType: "Bacterial",
      severityDefault: "Moderate",
      referenceImageUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Rough, corky, raised or pitted brownish-black lesions on the surface of maturing tubers",
        "Superficial star-shaped fissures and deep cratered lesions diminishing marketable grade",
        "Foliage shows normal vigor while underground tubers develop extensive corky scabs",
      ],
      causes: "Alkaline soil (pH > 6.5) combined with dry soil conditions during tuber initiation.",
      favorableWeather: "18°C - 24°C in dry, warm soils with pH > 6.2",
      organicRemedies: [
        {
          title: "Soil Acidification with Elemental Sulfur",
          recipe: "Incorporate 25-50 kg elemental sulfur per acre to lower rhizosphere pH below 5.2.",
          application: "Apply during field preparation 4-6 weeks before potato seed tuber planting.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Fluazinam (Omega) or Seed Dressing with Mancozeb",
          ingredient: "Fluazinam",
          dosage: "1.5 ml / Liter water (Seed tuber furrow spray)",
        },
      ],
      recommendedInputs: [
        {
          name: "Elemental Agricultural Sulfur 90% WDG",
          type: "Organic Fungicide",
          dosage: "3 g / Liter soil drench",
          benefit: "Lowers soil pH into scab-suppressive acidic range below 5.2.",
          searchQuery: "elemental agricultural sulfur for potato common scab control",
          price: "$14.00 / ₹380",
        },
      ],
      videoTutorials: [
        {
          title: "Preventing Potato Common Scab Through Soil pH & Irrigation",
          channel: "Tuber Research Extension",
          query: "potato common scab streptomyces scabies management ph control",
          duration: "8:40",
        },
      ],
    },
  ],

  // 3. Eggplant / Brinjal
  "crop-eggplant": [
    {
      id: "dis-eggplant-bacterial-wilt",
      cropId: "crop-eggplant",
      cropName: "Eggplant / Brinjal",
      name: "Bacterial Wilt",
      scientificName: "Ralstonia solanacearum",
      pathogenType: "Bacterial",
      severityDefault: "Severe",
      referenceImageUrl: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Rapid, sudden daytime wilting of plant canopy while foliage still retains its bright green color",
        "Plants recover partially during cool nighttime hours before permanently collapsing",
        "Stem cut test in clear water reveals milky white bacterial streaming threads (ooze) from vascular bundles",
      ],
      causes: "Soil-borne bacteria entering root wounds from root-knot nematodes or transplanting trauma in warm wet soils.",
      favorableWeather: "28°C - 35°C with high soil moisture and warm soil temperature",
      organicRemedies: [
        {
          title: "Pseudomonas fluorescens + Neem Cake Soil Amending",
          recipe: "Apply 250 kg Neem Cake enriched with 5 kg Pseudomonas fluorescens per acre.",
          application: "Incorporate into planting furrows to build antagonistic microbial root barrier.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Streptocycline + Copper Oxychloride Root Drench",
          ingredient: "Streptomycin + COC",
          dosage: "0.2 g Streptocycline + 2.5 g COC per Liter water drenching root zone",
        },
      ],
      recommendedInputs: [
        {
          name: "Pseudomonas fluorescens Bio-Bactericide WP",
          type: "Organic Fungicide",
          dosage: "10 g / Liter",
          benefit: "Colonizes eggplant rhizosphere, producing phenazines that suppress Ralstonia wilt.",
          searchQuery: "pseudomonas fluorescens for brinjal eggplant bacterial wilt",
          price: "$13.00 / ₹320",
        },
      ],
      videoTutorials: [
        {
          title: "Brinjal Bacterial Wilt Diagnosis: Water Stream Ooze Test",
          channel: "Solanaceous Agronomy",
          query: "brinjal eggplant bacterial wilt ralstonia solanacearum treatment",
          duration: "9:05",
        },
      ],
    },
    {
      id: "dis-eggplant-little-leaf",
      cropId: "crop-eggplant",
      cropName: "Eggplant / Brinjal",
      name: "Little Leaf of Brinjal",
      scientificName: "Phytoplasma (Transmitted by Hishimonus phycitis)",
      pathogenType: "Viral",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Dramatic reduction in leaf size giving emerging leaves a tiny, paper-thin, scale-like appearance",
        "Shortened internodes causing plants to assume a dense, bushy 'witches broom' architecture",
        "Phyllody where floral parts mutate into green leafy structures, resulting in complete sterility",
      ],
      causes: "Phytoplasma spread by leafhopper vector (Hishimonus phycitis) feeding on vascular sap.",
      favorableWeather: "25°C - 34°C with active leafhopper vector migrations",
      organicRemedies: [
        {
          title: "Yellow Sticky Sheets & Azadirachtin Vector Control",
          recipe: "Install 20 yellow sticky traps/acre + spray Azadirachtin 10,000 ppm at 3 ml/Liter.",
          application: "Eradicates leafhopper vectors before phytoplasma inocula transmission occurs.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Imidacloprid 17.8% SL or Dimethoate 30% EC",
          ingredient: "Imidacloprid",
          dosage: "0.5 ml / Liter water (Targeting leafhoppers)",
        },
      ],
      recommendedInputs: [
        {
          name: "High-Potency Neem Azadirachtin 10000 PPM",
          type: "Neem Spray",
          dosage: "3 ml / Liter",
          benefit: "Repels and paralyzes leafhopper vectors, breaking the phytoplasma transmission loop.",
          searchQuery: "azadirachtin 10000 ppm organic spray for brinjal leafhopper",
          price: "$17.00 / ₹450",
        },
      ],
      videoTutorials: [
        {
          title: "Little Leaf of Brinjal: Symptoms and Vector Management",
          channel: "Vegetable Entomology Lab",
          query: "little leaf of brinjal phytoplasma leafhopper hishimonus control",
          duration: "7:50",
        },
      ],
    },
  ],

  // 4. Chili & Hot Pepper
  "crop-chili": [
    {
      id: "dis-chili-anthracnose",
      cropId: "crop-chili",
      cropName: "Chili & Hot Pepper",
      name: "Anthracnose / Dieback & Fruit Rot",
      scientificName: "Colletotrichum capsici",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Tips of branches turn brown, dry out, and shrivel backwards towards the main stem ('dieback')",
        "Circular to elliptical sunken spots on red ripe fruits with concentric rings of dark acervuli dots",
        "Infected fruits become bleached, straw-colored, dry, and drop prematurely",
      ],
      causes: "Fungal spores splashed by rain during post-monsoon flowering and fruit maturity.",
      favorableWeather: "25°C - 32°C with high relative humidity (>80%) and warm dews",
      organicRemedies: [
        {
          title: "Copper Octanoate + Trichoderma Foliar Spray",
          recipe: "3 ml Copper Octanoate per Liter water, alternated weekly with Trichoderma viride (10g/L).",
          application: "Spray at first flowering and repeat at 14-day intervals across fruiting.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Azoxystrobin 18.2% + Difenoconazole 11.4% SC",
          ingredient: "Azoxystrobin + Difenoconazole",
          dosage: "1.0 ml / Liter water",
        },
        {
          title: "Mancozeb 75% WP",
          ingredient: "Mancozeb",
          dosage: "2.5 g / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Trichoderma viride Bio-Fungicide WP",
          type: "Organic Fungicide",
          dosage: "10 g / Liter",
          benefit: "Antagonistic biological fungus that outcompetes Colletotrichum dieback.",
          searchQuery: "trichoderma viride bio fungicide for chili anthracnose dieback",
          price: "$12.00 / ₹310",
        },
      ],
      videoTutorials: [
        {
          title: "Controlling Chili Anthracnose Dieback & Ripe Fruit Rot",
          channel: "Spice Crops Expert",
          query: "chili anthracnose dieback colletotrichum capsici spray schedule",
          duration: "10:30",
        },
      ],
    },
    {
      id: "dis-chili-bacterial-spot",
      cropId: "crop-chili",
      cropName: "Chili & Hot Pepper",
      name: "Bacterial Leaf Spot",
      scientificName: "Xanthomonas campestris pv. vesicatoria",
      pathogenType: "Bacterial",
      severityDefault: "Moderate",
      referenceImageUrl: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Small, circular to irregular water-soaked spots on foliage turning dark brown with yellow halos",
        "Severe defoliation leaving stems bare, leading to sunscald on unprotected chili pods",
        "Raised, blister-like corky rough spots on green and maturing chili fruits",
      ],
      causes: "Wind-driven rains splashing bacteria from infected seed or volunteer nightshade weeds.",
      favorableWeather: "24°C - 32°C with persistent rainy spells and dew",
      organicRemedies: [
        {
          title: "Liquid Copper Hydroxide + Fermented Garlic Decoction",
          recipe: "2 g Copper Hydroxide + 20 ml filtered garlic extract per 1 Liter water.",
          application: "Suppresses bacterial multiplication and prevents stomatal invasion.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Copper Oxychloride + Streptocycline",
          ingredient: "Streptomycin + COC",
          dosage: "2.5 g COC + 0.1 g Streptocycline per Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Copper Hydroxide 77% WP Bio-Bactericide",
          type: "Organic Fungicide",
          dosage: "2 g / Liter",
          benefit: "Releases antimicrobial copper ions that arrest bacterial spot progression.",
          searchQuery: "copper hydroxide bactericide for chili bacterial spot",
          price: "$15.00 / ₹400",
        },
      ],
      videoTutorials: [
        {
          title: "Chili Bacterial Spot Identification & Copper Spray Guide",
          channel: "Hot Pepper Agronomy",
          query: "chili bacterial spot xanthomonas campestris symptoms management",
          duration: "8:15",
        },
      ],
    },
  ],

  // 5. Bell Pepper / Capsicum
  "crop-bell-pepper": [
    {
      id: "dis-capsicum-phytophthora-blight",
      cropId: "crop-bell-pepper",
      cropName: "Bell Pepper / Capsicum",
      name: "Phytophthora Crown & Fruit Rot",
      scientificName: "Phytophthora capsici",
      pathogenType: "Fungal",
      severityDefault: "Severe",
      referenceImageUrl: "/src/assets/images/bell_pepper_leaf_1792629404913.jpg",
      healthyReferenceUrl: "/src/assets/images/bell_pepper_plant_1792629403792.jpg",
      symptoms: [
        "Dark brown to pitch black water-soaked lesions girdling the stem at the soil line (crown rot)",
        "Sudden permanent wilting of entire foliage while leaves remain attached and dry",
        "Water-soaked dark green fruit rot covered with dense white chalky sporangia carpet",
      ],
      causes: "Saturated, poorly drained soil and warm temperatures allowing motile zoospores to swim to roots.",
      favorableWeather: "22°C - 30°C with standing irrigation water or heavy rains",
      organicRemedies: [
        {
          title: "Raised Bed Cultivation + Trichoderma Drench",
          recipe: "10g Trichoderma harzianum WP per Liter water drenched at base of each seedling.",
          application: "Creates antagonistic biological root shield preventing zoospore infection.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Mandipropamid 23.4% SC or Metalaxyl 35% WS",
          ingredient: "Mandipropamid",
          dosage: "1.0 ml / Liter water (Soil and crown drench)",
        },
      ],
      recommendedInputs: [
        {
          name: "Trichoderma harzianum Bio-Shield Granules",
          type: "Organic Fungicide",
          dosage: "10 g / plant basin",
          benefit: "Protects pepper roots from swimming Phytophthora zoospores in wet soils.",
          searchQuery: "trichoderma harzianum for capsicum phytophthora crown rot",
          price: "$14.50 / ₹380",
        },
      ],
      videoTutorials: [
        {
          title: "Phytophthora Blight in Bell Peppers: Detection & Control",
          channel: "Greenhouse Tech Hub",
          query: "capsicum phytophthora blight crown rot control greenhouse",
          duration: "9:10",
        },
      ],
    },
    {
      id: "dis-capsicum-powdery-mildew",
      cropId: "crop-bell-pepper",
      cropName: "Bell Pepper / Capsicum",
      name: "Powdery Mildew",
      scientificName: "Leveillula taurica",
      pathogenType: "Fungal",
      severityDefault: "Moderate",
      referenceImageUrl: "/src/assets/images/bell_pepper_leaf_1792629404913.jpg",
      healthyReferenceUrl: "/src/assets/images/bell_pepper_plant_1792629403792.jpg",
      symptoms: [
        "Chlorotic bright yellow patches on the upper leaf surface mirroring fungal growth underneath",
        "White powdery fungal sporulation primarily on the underside of leaves",
        "Severe upward curling and rolling of leaf edges with premature leaf dropping",
      ],
      causes: "Warm days, cool nights, and high relative humidity common in greenhouse and shade net production.",
      favorableWeather: "20°C - 28°C with moderate relative humidity (60-80%)",
      organicRemedies: [
        {
          title: "Potassium Bicarbonate + Horticultural Oil",
          recipe: "3g Potassium Bicarbonate + 4ml mineral oil per 1 Liter water.",
          application: "Alkalizes leaf surface and dissolves mildew conidiophores safely.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Hexaconazole 5% EC or Myclobutanil 10% WP",
          ingredient: "Hexaconazole",
          dosage: "1.0 ml / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Potassium Bicarbonate Organic Mildew Spray",
          type: "Organic Fungicide",
          dosage: "3 g / Liter",
          benefit: "Zero harvest-interval organic cure for greenhouse capsicum powdery mildew.",
          searchQuery: "potassium bicarbonate organic bio fungicide for bell pepper mildew",
          price: "$16.00 / ₹420",
        },
      ],
      videoTutorials: [
        {
          title: "Controlling Powdery Mildew in Greenhouse Bell Peppers",
          channel: "Protected Cultivation Science",
          query: "capsicum powdery mildew leveillula taurica organic control",
          duration: "8:20",
        },
      ],
    },
  ],

  // 6. Cucumber
  "crop-cucumber": [
    {
      id: "dis-cucumber-powdery-mildew",
      cropId: "crop-cucumber",
      cropName: "Cucumber",
      name: "Powdery Mildew",
      scientificName: "Podosphaera xanthii (Sphaerotheca fuliginea)",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Talcum powder-like white circular fungal colonies on both upper and lower leaf surfaces",
        "Spots coalesce rapidly covering entire leaf blades, petioles, and main stems",
        "Leaves become yellow, senesce prematurely, and dry out like parchment paper",
      ],
      causes: "Warm, dry air with high canopy humidity and low direct UV light exposure.",
      favorableWeather: "20°C - 30°C in shaded or greenhouse conditions",
      organicRemedies: [
        {
          title: "Milk & Whey Bio-Fungicide (1:9 dilution)",
          recipe: "100 ml whole milk or fresh whey + 900 ml water sprayed during sunny mornings.",
          application: "Milk proteins generate natural antiseptic free radicals in sunlight.",
        },
        {
          title: "Baking Soda + Neem Oil Spray",
          recipe: "4g Sodium Bicarbonate + 5ml Neem Oil per Liter water.",
          application: "Raises leaf surface pH and suppresses fungal hyphae expansion.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Penconazole 10% EC or Hexaconazole 5% EC",
          ingredient: "Penconazole",
          dosage: "0.5 ml / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Organic Wettable Sulfur 80% WDG",
          type: "Organic Fungicide",
          dosage: "2 g / Liter",
          benefit: "Broad spectrum preventative against cucurbit powdery mildew and mites.",
          searchQuery: "organic wettable sulfur for cucumber powdery mildew",
          price: "$13.50 / ₹360",
        },
      ],
      videoTutorials: [
        {
          title: "Cucumber Powdery Mildew: Natural Milk & Baking Soda Remedy",
          channel: "Organic Cucurbit Grower",
          query: "cucumber powdery mildew podosphaera xanthii milk spray treatment",
          duration: "7:40",
        },
      ],
    },
    {
      id: "dis-cucumber-mosaic-virus",
      cropId: "crop-cucumber",
      cropName: "Cucumber",
      name: "Cucumber Mosaic Virus (CMV)",
      scientificName: "Cucumovirus (CMV)",
      pathogenType: "Viral",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Light green and dark green prominent mosaic mottling and leaf puckering",
        "Down-curling of leaf edges with stunted vine internodes ('bunchy habit')",
        "Cucumbers develop pale green/white wart-like bumpy blotches with bitter taste",
      ],
      causes: "Non-persistently transmitted by aphid species (Aphis gossypii, Myzus persicae).",
      favorableWeather: "22°C - 32°C with high aphid populations",
      organicRemedies: [
        {
          title: "Yellow Sticky Traps & Cold-Pressed Neem Oil",
          recipe: "Place 15 yellow sticky traps/acre + spray 5ml Cold-Pressed Neem Oil/L.",
          application: "Blocks aphid feeding probes and minimizes non-persistent virus transmission.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Thiamethoxam 25% WG or Acetamiprid 20% SP",
          ingredient: "Thiamethoxam",
          dosage: "0.5 g / Liter water (Targeting aphid vectors)",
        },
      ],
      recommendedInputs: [
        {
          name: "Organic Cold-Pressed Neem Oil 10000 PPM",
          type: "Neem Spray",
          dosage: "5 ml / Liter",
          benefit: "Natural antifeedant deterring CMV aphid vectors immediately.",
          searchQuery: "organic neem oil 10000 ppm aphid control for cucumber mosaic virus",
          price: "$14.00 / ₹370",
        },
      ],
      videoTutorials: [
        {
          title: "Recognizing & Preventing Cucumber Mosaic Virus (CMV)",
          channel: "Vegetable Virology Guide",
          query: "cucumber mosaic virus cmv symptoms aphid control",
          duration: "8:50",
        },
      ],
    },
  ],

  // 7. Cabbage & Cauliflower
  "crop-cabbage": [
    {
      id: "dis-cabbage-clubroot",
      cropId: "crop-cabbage",
      cropName: "Cabbage & Cauliflower",
      name: "Clubroot Disease",
      scientificName: "Plasmodiophora brassicae",
      pathogenType: "Fungal",
      severityDefault: "Severe",
      referenceImageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Daytime wilting and yellowing of outer leaves, recovering during the night",
        "Roots develop massive spindle-shaped, club-like galls and knobby swellings",
        "Severely stunted head formation, root decay, and foul odor in waterlogged beds",
      ],
      causes: "Obligate plasmodiophorid soil protist thriving in acidic (pH < 6.5) wet soils.",
      favorableWeather: "18°C - 25°C in wet acidic soils with high moisture",
      organicRemedies: [
        {
          title: "Agricultural Hydrated Lime Soil Incorporation",
          recipe: "Apply 1-2 tons of hydrated lime per acre to raise soil pH to 7.2 - 7.5.",
          application: "Incorporate into top 15 cm of soil 4 weeks prior to brassica transplanting.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Fluazinam 40% SC (Furrow Drench)",
          ingredient: "Fluazinam",
          dosage: "2.0 ml / Liter water (Transplant hole drench)",
        },
      ],
      recommendedInputs: [
        {
          name: "Hydrated Agricultural Lime Soil Buffering Agent",
          type: "Micro-Nutrient",
          dosage: "50 g / sq meter",
          benefit: "Raises soil pH to alkaline levels above 7.2 where clubroot resting spores cannot germinate.",
          searchQuery: "hydrated agricultural lime for brassica clubroot control",
          price: "$18.00 / ₹480",
        },
      ],
      videoTutorials: [
        {
          title: "Brassica Clubroot: Identification, Liming & Soil Management",
          channel: "Crucifer Science Academy",
          query: "brassica clubroot plasmodiophora brassicae liming control",
          duration: "10:50",
        },
      ],
    },
    {
      id: "dis-cabbage-downy-mildew",
      cropId: "crop-cabbage",
      cropName: "Cabbage & Cauliflower",
      name: "Downy Mildew",
      scientificName: "Hyaloperonospora brassicae (Peronospora parasitica)",
      pathogenType: "Fungal",
      severityDefault: "Moderate",
      referenceImageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Pale yellow to chlorotic irregular angular lesions visible on the upper leaf surface",
        "White to grayish fluffy downy fungal growth on the corresponding lower surface",
        "Black internal specks and streaks within cauliflower curds and cabbage wrapper heads",
      ],
      causes: "Cool foggy mornings with heavy condensation and prolonged leaf surface wetness.",
      favorableWeather: "10°C - 18°C with relative humidity >85%",
      organicRemedies: [
        {
          title: "Copper Hydroxide + Potassium Phosphonate Foliar Wash",
          recipe: "2g Copper Hydroxide + 3ml Potassium Phosphonate per 1 Liter water.",
          application: "Apply at seedling stage in nursery beds and 3 weeks after field planting.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Metalaxyl-M 4% + Mancozeb 64% WP",
          ingredient: "Metalaxyl-M + Mancozeb",
          dosage: "2.5 g / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Potassium Phosphonate Systemic Immunizer",
          type: "Organic Fungicide",
          dosage: "3 ml / Liter",
          benefit: "Induces systemic crop phytoalexin response against oomycete downy mildew.",
          searchQuery: "potassium phosphonate systemic fungicide for downy mildew",
          price: "$17.00 / ₹460",
        },
      ],
      videoTutorials: [
        {
          title: "Cabbage & Cauliflower Downy Mildew Control Strategies",
          channel: "Vegetable Farming Today",
          query: "cabbage downy mildew hyaloperonospora symptoms spray",
          duration: "8:30",
        },
      ],
    },
  ],

  // 8. Okra / Ladyfinger
  "crop-okra": [
    {
      id: "dis-okra-powdery-mildew",
      cropId: "crop-okra",
      cropName: "Okra / Ladyfinger",
      name: "Okra Powdery Mildew",
      scientificName: "Erysiphe cichoracearum",
      pathogenType: "Fungal",
      severityDefault: "Moderate",
      referenceImageUrl: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "White to grayish powdery coating spreading across both upper and lower leaf surfaces",
        "Heavily infected leaves turn chlorotic, dry up, and drop prematurely",
        "Pods on infected plants remain small, fibrous, and lose bright green color",
      ],
      causes: "Warm dry days with humid nights and dense crop spacing.",
      favorableWeather: "24°C - 32°C with high relative humidity at night",
      organicRemedies: [
        {
          title: "Wettable Sulfur (80% WDG) Protective Foliar Spray",
          recipe: "2.5 g Wettable Sulfur per 1 Liter water.",
          application: "Spray every 10-14 days starting at vegetative canopy closure.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Hexaconazole 5% EC or Difenoconazole 25% EC",
          ingredient: "Hexaconazole",
          dosage: "1.0 ml / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Micronized Wettable Sulfur 80% WDG",
          type: "Organic Fungicide",
          dosage: "2.5 g / Liter",
          benefit: "Certified organic multi-site fungicide halting powdery mildew germination.",
          searchQuery: "wettable sulfur 80 wdg for okra powdery mildew",
          price: "$13.00 / ₹350",
        },
      ],
      videoTutorials: [
        {
          title: "Managing Powdery Mildew in Okra: Organic Spray Guide",
          channel: "Okra Farming Academy",
          query: "okra powdery mildew erysiphe cichoracearum treatment wettable sulfur",
          duration: "7:15",
        },
      ],
    },
    {
      id: "dis-okra-cercospora",
      cropId: "crop-okra",
      cropName: "Okra / Ladyfinger",
      name: "Cercospora Leaf Spot",
      scientificName: "Cercospora malayensis / abelmoschi",
      pathogenType: "Fungal",
      severityDefault: "Moderate",
      referenceImageUrl: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Small, brown sooty circular to irregular spots on the underside of leaves",
        "Upper leaf surface displays corresponding dull yellow chlorotic patches",
        "Leaves roll inward, dry up, and drop prematurely, reducing fruit harvest duration",
      ],
      causes: "Monsoon rains, continuous leaf wetness, and splashing conidia from old crop residues.",
      favorableWeather: "25°C - 33°C with relative humidity >80%",
      organicRemedies: [
        {
          title: "Neem Seed Kernel Extract (5%) + Copper Soap",
          recipe: "50g NSKE soaked overnight filtered + 3ml Copper Soap per Liter water.",
          application: "Spray every 10 days during the rainy monsoon season.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Carbendazim 12% + Mancozeb 63% WP (Saaf)",
          ingredient: "Carbendazim + Mancozeb",
          dosage: "2.0 g / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Liquid Copper Soap Bio-Fungicide",
          type: "Organic Fungicide",
          dosage: "4 ml / Liter",
          benefit: "Low-copper formulation safe for continuous okra harvesting with 0-day delay.",
          searchQuery: "copper octanoate soap for okra cercospora leaf spot",
          price: "$16.00 / ₹420",
        },
      ],
      videoTutorials: [
        {
          title: "Okra Cercospora Leaf Spot Identification and Organic Spray",
          channel: "Tropical Horticulture Hub",
          query: "okra cercospora leaf spot symptoms organic remedies",
          duration: "8:05",
        },
      ],
    },
  ],

  // 9. Onion
  "crop-onion": [
    {
      id: "dis-onion-stemphylium-blight",
      cropId: "crop-onion",
      cropName: "Onion",
      name: "Stemphylium Leaf Blight",
      scientificName: "Stemphylium vesicarium",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Small, light yellow to brown water-soaked lesions that rapidly elongate into spindle-shaped patches",
        "Centers of lesions turn olive-brown to deep black with dense velvety spore masses",
        "Tips of tubular leaves die back completely, hindering bulb enlargement and neck closure",
      ],
      causes: "Warm humid spells combined with thrips feeding injuries that facilitate fungal penetration.",
      favorableWeather: "20°C - 28°C with warm dews and >80% relative humidity",
      organicRemedies: [
        {
          title: "Pseudomonas fluorescens + Neem Oil Spray",
          recipe: "10g Pseudomonas fluorescens + 4ml Neem Oil per 1 Liter water with non-ionic sticker.",
          application: "Apply at 40 and 60 days after transplanting to protect tubular foliage.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Tebuconazole 25.9% EC or Azoxystrobin 23% SC",
          ingredient: "Tebuconazole",
          dosage: "1.0 ml / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Pseudomonas fluorescens WP Bio-Control",
          type: "Organic Fungicide",
          dosage: "10 g / Liter",
          benefit: "Broad spectrum biological protectant suppressing allium foliar blights.",
          searchQuery: "pseudomonas fluorescens for onion stemphylium leaf blight",
          price: "$13.00 / ₹330",
        },
      ],
      videoTutorials: [
        {
          title: "Onion Stemphylium Blight vs Purple Blotch Diagnosis & Cure",
          channel: "Allium Growers Network",
          query: "onion stemphylium leaf blight identification tebuconazole spray",
          duration: "9:15",
        },
      ],
    },
    {
      id: "dis-onion-basal-rot",
      cropId: "crop-onion",
      cropName: "Onion",
      name: "Basal Rot / Pink Root",
      scientificName: "Fusarium oxysporum f. sp. cepae",
      pathogenType: "Fungal",
      severityDefault: "Severe",
      referenceImageUrl: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Progressive yellowing and dieback of leaves starting from the tips down",
        "Roots turn pinkish to dark reddish-brown, rot away, and disappear completely",
        "Basal plate of the bulb softens and turns brown-black with white mycelial growth",
      ],
      causes: "Soil-borne pathogen surviving in unrotated soils and warm temperatures (>25°C).",
      favorableWeather: "25°C - 32°C in moist, poorly drained soils",
      organicRemedies: [
        {
          title: "Trichoderma harzianum Seedling Root Dip",
          recipe: "Dip seedlings in 10g Trichoderma harzianum WP per Liter water for 20 minutes before transplanting.",
          application: "Colonizes the basal plate and root hairs, shielding them from Fusarium entry.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Thiophanate-Methyl 70% WP Soil Drench",
          ingredient: "Thiophanate-Methyl",
          dosage: "1.5 g / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Trichoderma harzianum Root Inoculant WP",
          type: "Organic Fungicide",
          dosage: "10 g / Liter",
          benefit: "Prevents onion basal rot and root-knot in seedling nurseries and main fields.",
          searchQuery: "trichoderma harzianum for onion basal rot fusarium",
          price: "$14.00 / ₹360",
        },
      ],
      videoTutorials: [
        {
          title: "Managing Onion Basal Rot & Fusarium Wilt Organically",
          channel: "Vegetable Research Station",
          query: "onion basal rot fusarium oxysporum trichoderma dip treatment",
          duration: "10:00",
        },
      ],
    },
  ],

  // 10. Garlic
  "crop-garlic": [
    {
      id: "dis-garlic-white-rot",
      cropId: "crop-garlic",
      cropName: "Garlic",
      name: "White Rot of Garlic",
      scientificName: "Stromatinia cepivora (Sclerotium cepivorum)",
      pathogenType: "Fungal",
      severityDefault: "Severe",
      referenceImageUrl: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Premature yellowing, wilting, and collapse of older leaves from bottom upwards",
        "Dense white cottony mycelium growing on the base of the bulb and root plate",
        "Tiny poppy-seed-sized black sclerotia embedded in the decaying rotting cloves",
      ],
      causes: "Long-lived sclerotia surviving in soil for over 15-20 years, triggered by allium root exudates.",
      favorableWeather: "10°C - 20°C in moist winter soils",
      organicRemedies: [
        {
          title: "Garlic Oil Stimulated Germination & Solarization",
          recipe: "Drench fields with dilute artificial garlic oil 3 months prior to planting + clear plastic tarping.",
          application: "Triggers sclerotia to germinate in the absence of hosts, depleting soil inoculum.",
        },
        {
          title: "Trichoderma viride Clove Treatment",
          recipe: "10g Trichoderma viride per kg garlic cloves before planting.",
          application: "Coats clove surface to outcompete sclerotium germination.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Tebuconazole 250 EC or Boscalid",
          ingredient: "Tebuconazole",
          dosage: "1.0 ml / Liter water (In-furrow drench at planting)",
        },
      ],
      recommendedInputs: [
        {
          name: "Trichoderma viride Organic Clove Treatment",
          type: "Organic Fungicide",
          dosage: "10 g / kg seed cloves",
          benefit: "Antagonistic fungus protecting allium cloves against soil-borne white rot sclerotia.",
          searchQuery: "trichoderma viride for garlic white rot stromatinia",
          price: "$13.50 / ₹350",
        },
      ],
      videoTutorials: [
        {
          title: "Garlic White Rot: Identification, Biology & Management",
          channel: "Garlic Mastery Extension",
          query: "garlic white rot stromatinia cepivora sclerotia identification control",
          duration: "11:05",
        },
      ],
    },
    {
      id: "dis-garlic-purple-blotch",
      cropId: "crop-garlic",
      cropName: "Garlic",
      name: "Purple Blotch & Stemphylium Blight",
      scientificName: "Alternaria porri / Stemphylium vesicarium",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Small, sunken water-soaked spots with distinct purple to dark violet centers on flat leaves",
        "Lesions expand rapidly with concentric rings, turning yellow and collapsing foliage",
        "Severely reduces clove bulbing size and causes neck rot in cured storage",
      ],
      causes: "Spreads in warm humid weather and overhead sprinkler irrigation.",
      favorableWeather: "22°C - 30°C with >80% relative humidity",
      organicRemedies: [
        {
          title: "Potassium Silicate + Cold-Pressed Neem Oil",
          recipe: "3 ml Potassium Silicate + 4 ml Neem Oil per 1 Liter water with natural sticker.",
          application: "Silica strengthens leaf wax while neem blocks conidia germination.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Difenoconazole 25% EC + Mancozeb 75% WP",
          ingredient: "Difenoconazole",
          dosage: "1.0 ml / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Potassium Silicate Plant Strengthener",
          type: "Micro-Nutrient",
          dosage: "3 ml / Liter",
          benefit: "Deposits natural silica shield in garlic leaf epidermis, halting Alternaria penetration.",
          searchQuery: "potassium silicate organic foliar spray for garlic purple blotch",
          price: "$15.00 / ₹410",
        },
      ],
      videoTutorials: [
        {
          title: "Controlling Garlic Purple Blotch & Blight Organically",
          channel: "Allium Agronomy Hub",
          query: "garlic purple blotch alternaria porri spray schedule organic",
          duration: "8:45",
        },
      ],
    },
  ],

  // 11. Rice / Paddy
  "crop-rice": [
    {
      id: "dis-rice-bacterial-blight",
      cropId: "crop-rice",
      cropName: "Rice / Paddy",
      name: "Bacterial Leaf Blight (BLB)",
      scientificName: "Xanthomonas oryzae pv. oryzae",
      pathogenType: "Bacterial",
      severityDefault: "Severe",
      referenceImageUrl: "/src/assets/images/rice_blast_leaf_1792629988264.jpg",
      healthyReferenceUrl: "/src/assets/images/rice_paddy_crop_1792629987130.jpg",
      symptoms: [
        "Water-soaked to yellowish-white wavy marginal stripes starting at the tips of leaf blades",
        "Stripes turn grayish-white with milky yellow bacterial dew droplets (ooze) during early morning",
        "Severe seedling stage infection causes rapid total wilting and drying known as 'Kresek'",
      ],
      causes: "Bacteria enter through leaf wounds from typhoons/storms or stomata in flooded paddy fields.",
      favorableWeather: "25°C - 34°C with rain storms and excessive chemical nitrogen fertilizer",
      organicRemedies: [
        {
          title: "Pseudomonas fluorescens + Fresh Cow Dung Extract",
          recipe: "10g Pseudomonas + 20g strained fresh cow dung slurry per 1 Liter water.",
          application: "Traditional eco-spray introducing beneficial antagonistic phyllosphere microbes.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Copper Oxychloride + Streptocycline",
          ingredient: "Copper Oxychloride 50% + Streptomycin",
          dosage: "2.5 g COC + 0.1 g Streptocycline per Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Pseudomonas fluorescens Bio-Control for Rice",
          type: "Organic Fungicide",
          dosage: "10 g / Liter",
          benefit: "Official research-backed bio-bactericide suppressing paddy bacterial blight.",
          searchQuery: "pseudomonas fluorescens for rice bacterial leaf blight xanthomonas",
          price: "$13.00 / ₹320",
        },
      ],
      videoTutorials: [
        {
          title: "Rice Bacterial Leaf Blight: Symptoms, Kresek & Spray Plan",
          channel: "Rice Science Academy",
          query: "rice bacterial leaf blight xanthomonas oryzae kresek control",
          duration: "11:30",
        },
      ],
    },
    {
      id: "dis-rice-sheath-blight",
      cropId: "crop-rice",
      cropName: "Rice / Paddy",
      name: "Sheath Blight",
      scientificName: "Rhizoctonia solani",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "/src/assets/images/rice_blast_leaf_1792629988264.jpg",
      healthyReferenceUrl: "/src/assets/images/rice_paddy_crop_1792629987130.jpg",
      symptoms: [
        "Oval to elliptical greenish-gray water-soaked lesions on leaf sheaths near the water level",
        "Lesions enlarge with irregular dark reddish-brown margins resembling 'snake skin' patterns",
        "Infection creeps up to flag leaf causing lodging of entire rice tillers and empty grain panicles",
      ],
      causes: "Floating fungal sclerotia from previous crop stubble germinating in densely planted warm water.",
      favorableWeather: "28°C - 32°C with high humidity (>95%) in dense tillering canopy",
      organicRemedies: [
        {
          title: "Trichoderma harzianum Seedling Treatment & Spray",
          recipe: "Apply 2.5 kg Trichoderma harzianum mixed in 50 kg farmyard manure per acre.",
          application: "Broadcast at tillering to degrade soil and water-borne sclerotia.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Validamycin 3% L or Hexaconazole 5% SC",
          ingredient: "Validamycin / Hexaconazole",
          dosage: "2.0 ml Validamycin or 1.5 ml Hexaconazole per Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Validamycin 3% L Bio-Antibiotic Fungicide",
          type: "Organic Fungicide",
          dosage: "2 ml / Liter",
          benefit: "Specific antibiotic metabolite of Streptomyces hygroscopicus controlling sheath blight.",
          searchQuery: "validamycin 3 l for rice sheath blight rhizoctonia",
          price: "$15.00 / ₹390",
        },
      ],
      videoTutorials: [
        {
          title: "Rice Sheath Blight: Symptoms, Scouting & Fungicide Spray",
          channel: "Paddy Doctor Hub",
          query: "rice sheath blight rhizoctonia solani validamycin hexaconazole",
          duration: "9:40",
        },
      ],
    },
  ],

  // 12. Wheat
  "crop-wheat": [
    {
      id: "dis-wheat-leaf-rust",
      cropId: "crop-wheat",
      cropName: "Wheat",
      name: "Leaf Rust / Brown Rust",
      scientificName: "Puccinia triticina (Puccinia recondita)",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Small, circular to oval bright orange-brown powdery pustules scattered randomly across leaf blades",
        "Unlike stripe rust, pustules do not form straight lines and appear scattered on upper leaf surface",
        "Severe flag leaf rust causes premature leaf drying, shriveling grains, and 30-50% yield loss",
      ],
      causes: "Wind-borne urediniospores blowing from southern regions during warm spring weather.",
      favorableWeather: "18°C - 26°C with overnight dew and warm sunny days",
      organicRemedies: [
        {
          title: "Potassium Silicate + Bacillus subtilis Foliar Application",
          recipe: "3g Potassium Silicate + 5g Bacillus subtilis per 1 Liter water.",
          application: "Spray at flag leaf emergence (Zadoks stage 37) to coat developing grain canopy.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Propiconazole 25% EC (Tilt) or Tebuconazole",
          ingredient: "Propiconazole",
          dosage: "1.0 ml / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Propiconazole 25% EC Systemic Fungicide",
          type: "Organic Fungicide",
          dosage: "1 ml / Liter",
          benefit: "Provides rapid curative and protective triazole activity against wheat leaf and stripe rust.",
          searchQuery: "propiconazole 25 ec for wheat brown leaf rust",
          price: "$16.00 / ₹420",
        },
      ],
      videoTutorials: [
        {
          title: "Wheat Brown Rust vs Yellow Rust: Scouting & Spray Decisions",
          channel: "Cereal Science Academy",
          query: "wheat brown rust puccinia triticina symptoms propiconazole spray",
          duration: "9:15",
        },
      ],
    },
    {
      id: "dis-wheat-loose-smut",
      cropId: "crop-wheat",
      cropName: "Wheat",
      name: "Loose Smut of Wheat",
      scientificName: "Ustilago tritici",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Emerging wheat heads are completely converted into a loose black powdery mass of teliospores",
        "Spore mass is initially covered by a thin silvery membrane that quickly ruptures in the wind",
        "Leaves only bare central rachis ('naked spine') with complete loss of grain on infected tillers",
      ],
      causes: "Internally seed-borne fungus infecting embryos during flowering of the previous season.",
      favorableWeather: "16°C - 22°C during wheat ear flowering and pollination",
      organicRemedies: [
        {
          title: "Solar Heat Seed Treatment / Anaerobic Soaking",
          recipe: "Soak seed in water for 4 hours on a hot summer morning, then spread on tarpaulin in full sun for 4 hours.",
          application: "Thermal heat inside moist wheat embryo destroys internal dormant mycelium without harming germination.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Carboxin 37.5% + Thiram 37.5% DS (Vitavax)",
          ingredient: "Carboxin + Thiram",
          dosage: "2.5 g / kg seed (Pre-sowing seed treatment)",
        },
      ],
      recommendedInputs: [
        {
          name: "Carboxin + Thiram Systemic Seed Dressing",
          type: "Organic Fungicide",
          dosage: "2.5 g / kg seed",
          benefit: "Penetrates wheat seed coat to sterilize internal loose smut fungal mycelium.",
          searchQuery: "carboxin thiram vitavax seed treatment for wheat loose smut",
          price: "$14.50 / ₹380",
        },
      ],
      videoTutorials: [
        {
          title: "Wheat Loose Smut: Solar Heat Seed Treatment & Chemical Seed Dressing",
          channel: "Wheat Agronomy Research",
          query: "wheat loose smut ustilago tritici solar seed treatment carboxin",
          duration: "8:25",
        },
      ],
    },
  ],

  // 13. Corn / Maize
  "crop-corn": [
    {
      id: "dis-corn-northern-leaf-blight",
      cropId: "crop-corn",
      cropName: "Corn / Maize",
      name: "Northern Corn Leaf Blight (NCLB)",
      scientificName: "Exserohilum turcicum (Setosphaeria turcica)",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Long, elliptical, cigar-shaped grayish-green to tan lesions (2.5 to 15 cm long) on foliage",
        "Lesions develop dark olive-green to black fungal sporulation during moist dewy weather",
        "Entire leaves die prematurely, reducing photosynthetic capacity during grain fill stage",
      ],
      causes: "Fungal survival in corn stubble residue splashing conidia during humid overcast weather.",
      favorableWeather: "18°C - 27°C with extended dew periods (>6-8 hours)",
      organicRemedies: [
        {
          title: "Trichoderma viride + Compost Tea Foliar Application",
          recipe: "10g Trichoderma viride WP + aerated compost tea per 1 Liter water.",
          application: "Apply at V6 (six-leaf stage) and tasseling to establish biological competition.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Azoxystrobin 18.2% + Difenoconazole 11.4% SC",
          ingredient: "Azoxystrobin + Difenoconazole",
          dosage: "1.0 ml / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Azoxystrobin + Difenoconazole Dual Fungicide",
          type: "Organic Fungicide",
          dosage: "1 ml / Liter",
          benefit: "Provides preventative and curative systemic protection against northern corn leaf blight.",
          searchQuery: "azoxystrobin difenoconazole for northern corn leaf blight",
          price: "$18.50 / ₹490",
        },
      ],
      videoTutorials: [
        {
          title: "Northern Corn Leaf Blight Scouting, Diagnosis & Spray Timings",
          channel: "Maize Production Hub",
          query: "northern corn leaf blight exserohilum turcicum symptoms management",
          duration: "9:30",
        },
      ],
    },
    {
      id: "dis-corn-stalk-rot",
      cropId: "crop-corn",
      cropName: "Corn / Maize",
      name: "Charcoal Stalk Rot",
      scientificName: "Macrophomina phaseolina",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Internal stalk pith shreds into loose strands, showing countless tiny charcoal-like black microsclerotia",
        "Lower stem internodes become soft, hollow, and collapse easily under moderate winds (lodging)",
        "Premature drying of canopy giving leaves a grayish-green frosted appearance",
      ],
      causes: "Extreme heat stress and drought during the post-flowering grain-filling period.",
      favorableWeather: "32°C - 38°C in dry soils under drought stress",
      organicRemedies: [
        {
          title: "Trichoderma harzianum Soil Enrichment & Mulching",
          recipe: "Apply 5 kg Trichoderma harzianum in 2 tons compost/acre + straw mulching.",
          application: "Retains soil moisture and biologically parasitizes Macrophomina microsclerotia.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Carbendazim 50% WP (Furrow Drench)",
          ingredient: "Carbendazim",
          dosage: "2.0 g / Liter water (At base of stalks during early tasseling)",
        },
      ],
      recommendedInputs: [
        {
          name: "Trichoderma harzianum Granular Bio-Shield",
          type: "Organic Fungicide",
          dosage: "5 kg / acre",
          benefit: "Biological root and crown shield protecting corn against charcoal rot and stalk breakdown.",
          searchQuery: "trichoderma harzianum bio fungicide for corn charcoal stalk rot",
          price: "$15.00 / ₹400",
        },
      ],
      videoTutorials: [
        {
          title: "Corn Stalk Rot: Charcoal Rot vs Fusarium Stalk Rot Diagnosis",
          channel: "Corn Agronomy Lab",
          query: "corn charcoal stalk rot macrophomina phaseolina identification",
          duration: "8:40",
        },
      ],
    },
  ],

  // 14. Cotton
  "crop-cotton": [
    {
      id: "dis-cotton-leaf-curl",
      cropId: "crop-cotton",
      cropName: "Cotton",
      name: "Cotton Leaf Curl Virus (CLCuV)",
      scientificName: "Cotton leaf curl virus (Begomovirus)",
      pathogenType: "Viral",
      severityDefault: "Severe",
      referenceImageUrl: "/src/assets/images/cotton_leaf_blight_1792629405149.jpg",
      healthyReferenceUrl: "/src/assets/images/cotton_crop_plant_1792629404896.jpg",
      symptoms: [
        "Upward or downward cupping and curling of leaf margins with thick swollen main veins",
        "Distinctive leafy cup-like outgrowths ('enations') developing on the underside of main veins",
        "Stunted, bushy plant architecture with severe boll drop and failure to open lint",
      ],
      causes: "Whitefly vector (Bemisia tabaci) transmitting begomovirus in warm, sunny weather.",
      favorableWeather: "30°C - 40°C with high whitefly nymph and adult density",
      organicRemedies: [
        {
          title: "Yellow Sticky Traps + Neem Azadirachtin Spray",
          recipe: "15-20 yellow sticky traps/acre + Azadirachtin 10,000 ppm at 3 ml/Liter.",
          application: "Spray every 5 days from seedling to square formation stage.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Diafenthiuron 50% WP or Pyriproxyfen 10% EC",
          ingredient: "Diafenthiuron",
          dosage: "1.2 g / Liter water (Targeting whitefly vectors)",
        },
      ],
      recommendedInputs: [
        {
          name: "Beauveria bassiana Bio-Insecticide WP",
          type: "Bio-Pesticide",
          dosage: "5 g / Liter",
          benefit: "Entomopathogenic fungus that parasitizes and destroys whitefly vector populations.",
          searchQuery: "beauveria bassiana for cotton whitefly leaf curl virus",
          price: "$15.50 / ₹410",
        },
      ],
      videoTutorials: [
        {
          title: "Cotton Leaf Curl Virus (CLCuV): Symptoms, Enations & Vector Control",
          channel: "Cotton Research Hub",
          query: "cotton leaf curl virus clcuv whitefly management diafenthiuron",
          duration: "10:15",
        },
      ],
    },
    {
      id: "dis-cotton-alternaria",
      cropId: "crop-cotton",
      cropName: "Cotton",
      name: "Alternaria Leaf Spot",
      scientificName: "Alternaria macrospora",
      pathogenType: "Fungal",
      severityDefault: "Moderate",
      referenceImageUrl: "/src/assets/images/cotton_leaf_blight_1792629405149.jpg",
      healthyReferenceUrl: "/src/assets/images/cotton_crop_plant_1792629404896.jpg",
      symptoms: [
        "Small, circular, brown to reddish-purple spots with concentric target rings",
        "Centers of spots become dry, brittle, and drop out leaving a 'shot-hole' appearance",
        "Extensive premature defoliation of the canopy during boll development stage",
      ],
      causes: "Frequent intermittent rainfall and potassium nutritional deficiency weakening leaf cuticle.",
      favorableWeather: "25°C - 32°C with high relative humidity (>80%)",
      organicRemedies: [
        {
          title: "Potassium Sulfate (SOP) Foliar Nutrition + Copper Soap",
          recipe: "10g Potassium Sulfate + 3ml Copper Octanoate per 1 Liter water.",
          application: "Corrects potassium stress and provides protective antifungal barrier.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Propiconazole 25% EC or Mancozeb 75% WP",
          ingredient: "Propiconazole",
          dosage: "1.0 ml / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Chelated Potassium Foliar Plant Booster",
          type: "Micro-Nutrient",
          dosage: "5 g / Liter",
          benefit: "Thickens cotton leaf cell walls to resist Alternaria macrospora penetration.",
          searchQuery: "chelated potassium foliar fertilizer for cotton alternaria spot",
          price: "$14.00 / ₹370",
        },
      ],
      videoTutorials: [
        {
          title: "Cotton Alternaria Leaf Spot & Potassium Deficiency Interaction",
          channel: "Cotton Agronomy Extension",
          query: "cotton alternaria leaf spot macrospora potassium foliar spray",
          duration: "8:35",
        },
      ],
    },
  ],

  // 15. Sugarcane
  "crop-sugarcane": [
    {
      id: "dis-sugarcane-smut",
      cropId: "crop-sugarcane",
      cropName: "Sugarcane",
      name: "Sugarcane Smut",
      scientificName: "Sporisorium scitamineum (Ustilago scitaminea)",
      pathogenType: "Fungal",
      severityDefault: "Severe",
      referenceImageUrl: "/src/assets/images/sugarcane_red_rot_1792629986592.jpg",
      healthyReferenceUrl: "/src/assets/images/sugarcane_crop_plant_1792629986075.jpg",
      symptoms: [
        "Production of a prominent, unbranched, whip-like black dusty structure emerging from the terminal bud",
        "Whip structure curves downward and is covered by millions of black powdery chlamydospores",
        "Tillers become severely stunted, thin, grassy ('pencil canes'), with zero millable cane yield",
      ],
      causes: "Wind-borne teliospores entering through lateral bud scales or infected ratoon crops.",
      favorableWeather: "25°C - 35°C in warm dry areas following irrigation",
      organicRemedies: [
        {
          title: "Hot Water Treatment (52°C) + Trichoderma Sett Inoculation",
          recipe: "Soak setts in 52°C aerated water for 30 minutes, followed by dipping in Trichoderma (10g/L).",
          application: "Destroys fungal mycelium harbored in sugarcane eye buds prior to furrow planting.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Triadimefon 25% WP or Propiconazole 25% EC",
          ingredient: "Triadimefon",
          dosage: "1.0 g / Liter water (Sett dipping for 15 minutes)",
        },
      ],
      recommendedInputs: [
        {
          name: "Trichoderma harzianum Certified Sett Treatment",
          type: "Organic Fungicide",
          dosage: "10 g / Liter",
          benefit: "Biological sett coating preventing smut teliospore colonization on emerging buds.",
          searchQuery: "trichoderma harzianum for sugarcane smut set dipping",
          price: "$14.00 / ₹360",
        },
      ],
      videoTutorials: [
        {
          title: "Sugarcane Smut Whip Identification & Sett Management",
          channel: "Sugar Research Institute",
          query: "sugarcane smut sporisorium scitamineum whip disease management",
          duration: "9:50",
        },
      ],
    },
    {
      id: "dis-sugarcane-grassy-shoot",
      cropId: "crop-sugarcane",
      cropName: "Sugarcane",
      name: "Grassy Shoot Disease (GSD)",
      scientificName: "Candidatus Phytoplasma",
      pathogenType: "Viral",
      severityDefault: "High",
      referenceImageUrl: "/src/assets/images/sugarcane_red_rot_1792629986592.jpg",
      healthyReferenceUrl: "/src/assets/images/sugarcane_crop_plant_1792629986075.jpg",
      symptoms: [
        "Prolific tillering from the base of the stool resembling a dense clump of wild grass",
        "Leaves become narrow, thin, chlorotic yellow to ivory white, and completely devoid of chlorophyll",
        "No millable thick stalks formed; plants remain stunted and unharvestable",
      ],
      causes: "Phytoplasma transmitted by aphid vectors (Melanaphis sacchari) and uncertified diseased setts.",
      favorableWeather: "26°C - 34°C with active aphid colonies in ratoon crops",
      organicRemedies: [
        {
          title: "Aerated Moist Hot Air Treatment (MHAT) & Roguing",
          recipe: "Expose seed cane to 54°C moist hot air for 2.5 hours + immediate eradication of affected stools.",
          application: "Thermal sanitization of seed cane nurseries prevents phytoplasma transfer.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Dimethoate 30% EC or Imidacloprid 17.8% SL",
          ingredient: "Dimethoate",
          dosage: "1.5 ml / Liter water (Targeting aphid vectors)",
        },
      ],
      recommendedInputs: [
        {
          name: "Cold-Pressed Neem Oil 10000 PPM Vector Control",
          type: "Neem Spray",
          dosage: "5 ml / Liter",
          benefit: "Repels sugarcane aphids transmitting grassy shoot phytoplasma.",
          searchQuery: "neem oil 10000 ppm for sugarcane aphid control grassy shoot",
          price: "$14.50 / ₹380",
        },
      ],
      videoTutorials: [
        {
          title: "Managing Sugarcane Grassy Shoot Disease in Seed Nurseries",
          channel: "Cane Care Extension",
          query: "sugarcane grassy shoot disease gsd symptoms phytoplasma control",
          duration: "8:40",
        },
      ],
    },
  ],

  // 16. Banana
  "crop-banana": [
    {
      id: "dis-banana-panama-wilt",
      cropId: "crop-banana",
      cropName: "Banana",
      name: "Panama Wilt (Fusarium TR4)",
      scientificName: "Fusarium oxysporum f. sp. cubense Tropical Race 4",
      pathogenType: "Fungal",
      severityDefault: "Severe",
      referenceImageUrl: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Prominent yellowing of lower older leaves starting at the leaf margins and moving inward towards the midrib",
        "Buckling and collapsing of petiole bases forming a characteristic skirt of dead leaves around the pseudostem",
        "Cross section of pseudostem reveals distinct reddish-brown to dark purple vascular discoloration rings",
      ],
      causes: "Devastating soil-borne chlamydospores persisting in plantation soil for up to 30 years.",
      favorableWeather: "25°C - 32°C in saturated soils with root nematode puncture wounds",
      organicRemedies: [
        {
          title: "Trichoderma viride + Enriched Farmyard Manure Drench",
          recipe: "100g Trichoderma viride in 10 kg compost per banana pit at planting and ratoon stage.",
          application: "Builds a living bio-fungal barrier in the corm rhizosphere preventing Fusarium hyphal entry.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Carbendazim 50% WP Corm Injection & Soil Drench",
          ingredient: "Carbendazim",
          dosage: "2.0 g / Liter water (Inject 3 ml into pseudostem + drench 5 Liters per stool)",
        },
      ],
      recommendedInputs: [
        {
          name: "Trichoderma viride Bio-Control Granules",
          type: "Organic Fungicide",
          dosage: "100 g / banana stool",
          benefit: "ICAR-recommended biocontrol suppressing banana Panama wilt chlamydospores.",
          searchQuery: "trichoderma viride for banana panama wilt fusarium",
          price: "$13.50 / ₹350",
        },
      ],
      videoTutorials: [
        {
          title: "Banana Panama Wilt (Fusarium TR4): Symptoms & Biosecurity",
          channel: "Tropical Fruit Agronomy",
          query: "banana panama wilt fusarium oxysporum tr4 identification management",
          duration: "12:15",
        },
      ],
    },
    {
      id: "dis-banana-bunchy-top",
      cropId: "crop-banana",
      cropName: "Banana",
      name: "Banana Bunchy Top Virus (BBTV)",
      scientificName: "Babuvirus (BBTV)",
      pathogenType: "Viral",
      severityDefault: "Severe",
      referenceImageUrl: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Dark green broken streaks ('Morse code' pattern of dashes and dots) along secondary leaf veins and petioles",
        "Emerging leaves become progressively shorter, narrower, brittle, and crowded upright at the crown ('bunchy top')",
        "Infected trees produce no fruit bunches or only miniature, malformed, unmarketable fingers",
      ],
      causes: "Transmitted by the banana aphid vector (Pentalonia nigronervosa) and infected sucker rhizomes.",
      favorableWeather: "24°C - 30°C with humid tropical winds spreading aphid colonies",
      organicRemedies: [
        {
          title: "Complete Stool Uprooting & Insecticidal Soap Drench",
          recipe: "Eradicate infected mats immediately + spray 10 ml Potassium Soap/L on aphid colonies in pseudostem leaf sheaths.",
          application: "Kills aphid vectors prior to uprooting to prevent them from fleeing to adjacent healthy mats.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Imidacloprid 17.8% SL or Dimethoate 30% EC",
          ingredient: "Imidacloprid",
          dosage: "0.5 ml / Liter water (Targeting banana aphids in leaf axils)",
        },
      ],
      recommendedInputs: [
        {
          name: "Pure Cold-Pressed Neem Oil 10000 PPM",
          type: "Neem Spray",
          dosage: "5 ml / Liter",
          benefit: "Deters banana aphids from feeding in leaf axils, preventing BBTV spread.",
          searchQuery: "organic neem oil 10000 ppm for banana aphid pentalonia",
          price: "$14.50 / ₹380",
        },
      ],
      videoTutorials: [
        {
          title: "Banana Bunchy Top Virus: Morse Code Symptoms & Roguing Protocol",
          channel: "Plant Protection Society",
          query: "banana bunchy top virus bbtv morse code symptoms aphid control",
          duration: "9:20",
        },
      ],
    },
  ],

  // 17. Mango
  "crop-mango": [
    {
      id: "dis-mango-powdery-mildew",
      cropId: "crop-mango",
      cropName: "Mango",
      name: "Mango Powdery Mildew",
      scientificName: "Oidium mangiferae",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "White to purplish-gray powdery fungal growth on flowering panicles, tender leaves, and young marble-sized fruits",
        "Blossoms fail to open, dry up, turn brown-black, and drop prematurely ('blossom drop')",
        "Developing fruits become covered with powdery mildew, drop off, or remain scarred and cracked",
      ],
      causes: "Cool nights (10-15°C) alternating with warm sunny days (27-31°C) with morning fog during flowering.",
      favorableWeather: "20°C - 30°C with high relative humidity at night during blossom flush",
      organicRemedies: [
        {
          title: "Micronized Wettable Sulfur (80% WDG) Protective Wash",
          recipe: "2.5 g Wettable Sulfur per 1 Liter water.",
          application: "Apply at panicle emergence, flower opening, and fruit set stage.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Hexaconazole 5% EC or Dinocap 48% EC",
          ingredient: "Hexaconazole",
          dosage: "1.0 ml / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Micronized Wettable Sulfur 80% WDG",
          type: "Organic Fungicide",
          dosage: "2.5 g / Liter",
          benefit: "Time-tested organic multi-site shield against mango blossom powdery mildew.",
          searchQuery: "wettable sulfur 80 wdg for mango powdery mildew oidium",
          price: "$13.00 / ₹350",
        },
      ],
      videoTutorials: [
        {
          title: "Controlling Mango Powdery Mildew & Blossom Drop",
          channel: "Orchard Care Experts",
          query: "mango powdery mildew oidium mangiferae spray schedule hexaconazole",
          duration: "8:50",
        },
      ],
    },
    {
      id: "dis-mango-malformation",
      cropId: "crop-mango",
      cropName: "Mango",
      name: "Mango Malformation",
      scientificName: "Fusarium mangiferae (Aided by Aceria mangiferae mites)",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Floral panicles become highly congested, thickened, and compact into a greenish-yellow cauliflower-like bunch",
        "Individual flowers are 2-3 times larger than normal with hypertrophied male florets and complete fruit set failure",
        "Vegetative shoots produce tight clusters of tiny deformed leaves ('bunchy top' in seedlings)",
      ],
      causes: "Fusarium fungus interacting with mango bud mites (Aceria mangiferae) transmitting fungal propagules.",
      favorableWeather: "20°C - 30°C in young orchards during spring panicle emergence",
      organicRemedies: [
        {
          title: "Pruning Malformed Panicles + Copper Hydroxide Paste",
          recipe: "Prune malformed panicles 15 cm below attachment point + coat cut surfaces with Copper paste.",
          application: "Burn pruned malformed heads immediately to prevent mite and spore spread.",
        },
      ],
      chemicalRemedies: [
        {
          title: "NAA (Naphthalene Acetic Acid 200 ppm) + Carbendazim",
          ingredient: "NAA + Carbendazim",
          dosage: "200 ppm NAA sprayed in October followed by 1.0 g Carbendazim/L in January",
        },
      ],
      recommendedInputs: [
        {
          name: "Copper Hydroxide 77% WP Bio-Fungicide",
          type: "Organic Fungicide",
          dosage: "2.5 g / Liter",
          benefit: "Antiseptic pruning sealant preventing secondary pathogen entry into mango twigs.",
          searchQuery: "copper hydroxide 77 wp for mango pruning wound sealant",
          price: "$15.50 / ₹420",
        },
      ],
      videoTutorials: [
        {
          title: "Mango Malformation: Floral & Vegetative Symptoms & Pruning",
          channel: "Tropical Pomology Hub",
          query: "mango malformation fusarium panicle pruning spray treatment",
          duration: "10:10",
        },
      ],
    },
  ],

  // 18. Citrus
  "crop-citrus": [
    {
      id: "dis-citrus-greening-hlb",
      cropId: "crop-citrus",
      cropName: "Citrus (Lemon, Orange, Lime)",
      name: "Citrus Greening / Huanglongbing (HLB)",
      scientificName: "Candidatus Liberibacter asiaticus",
      pathogenType: "Bacterial",
      severityDefault: "Severe",
      referenceImageUrl: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Asymmetric, blotchy yellow mottle on leaf blades where pattern is uneven across the midrib",
        "Thickened, corky, raised leaf veins that split and turn pale yellow",
        "Fruits remain small, lopsided/asymmetrical, fail to color properly ('green bottom'), with bitter salty juice and aborted brown seeds",
      ],
      causes: "Phloem-restricted bacterium transmitted by the Asian Citrus Psyllid (Diaphorina citri).",
      favorableWeather: "25°C - 35°C with active psyllid flush feeding cycles",
      organicRemedies: [
        {
          title: "Psyllid Vector Exclusion & Micronutrient Foliar Cocktail",
          recipe: "Spray 5 ml Cold-Pressed Neem Oil + Zinc & Iron chelate (2g/L) during new flush emergence.",
          application: "Deters psyllid feeding probes and maintains tree vigor against vascular decline.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Thiamethoxam 25% WG or Imidacloprid 17.8% SL",
          ingredient: "Thiamethoxam",
          dosage: "0.5 g / Liter water (Targeting psyllid vectors during flush)",
        },
      ],
      recommendedInputs: [
        {
          name: "Citrus Chelated Micronutrient Blend (Zn, Fe, Mn, Mg)",
          type: "Micro-Nutrient",
          dosage: "3 g / Liter",
          benefit: "Supplies essential trace minerals restoring chlorophyll production in phloem-stressed trees.",
          searchQuery: "chelated citrus micronutrient blend foliar spray zinc iron",
          price: "$16.50 / ₹430",
        },
      ],
      videoTutorials: [
        {
          title: "Citrus Greening (HLB): Identifying Blotchy Mottle vs Zinc Deficiency",
          channel: "Citrus Care & Orchard Extension",
          query: "citrus greening huanglongbing hlb blotchy mottle psyllid control",
          duration: "11:45",
        },
      ],
    },
    {
      id: "dis-citrus-gummosis",
      cropId: "crop-citrus",
      cropName: "Citrus (Lemon, Orange, Lime)",
      name: "Citrus Gummosis & Foot Rot",
      scientificName: "Phytophthora nicotianae (P. citrophthora)",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Profuse amber-colored gum exudation (gumming) from trunk bark cracks near the soil line",
        "Bark dies, dries, shrinks, and cracks longitudinally, revealing brown-black dead wood beneath",
        "Gradual canopy dieback with chlorotic yellow leaves, heavy leaf fall, and tree decline",
      ],
      causes: "Prolonged waterlogging, flood irrigation contacting the trunk base, and soil-borne Phytophthora zoospores.",
      favorableWeather: "22°C - 30°C in heavy, poorly drained clay soils",
      organicRemedies: [
        {
          title: "Bordeaux Paste Trunk Painting",
          recipe: "Mix 1 kg Copper Sulfate + 1 kg Hydrated Lime in 10 Liters water to form a thick protective paste.",
          application: "Scrape infected dead bark cleanly and paint tree trunk up to 50 cm high before monsoon.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Metalaxyl-M + Mancozeb or Fosetyl-Al (Aliette)",
          ingredient: "Fosetyl-Aluminium",
          dosage: "2.5 g / Liter water (Foliar spray and trunk drench)",
        },
      ],
      recommendedInputs: [
        {
          name: "Bordeaux Mixture Copper Protective Paste Kit",
          type: "Organic Fungicide",
          dosage: "100 g / Liter paste",
          benefit: "Forms an impenetrable antiseptic barrier stopping Phytophthora gummosis on citrus trunks.",
          searchQuery: "bordeaux paste for citrus gummosis foot rot phytophthora",
          price: "$14.00 / ₹370",
        },
      ],
      videoTutorials: [
        {
          title: "Treating Citrus Gummosis: Bark Scraping & Bordeaux Paste Application",
          channel: "Citrus Doctor Hub",
          query: "citrus gummosis foot rot phytophthora bordeaux paste treatment",
          duration: "9:10",
        },
      ],
    },
  ],

  // 19. Grapevine
  "crop-grape": [
    {
      id: "dis-grape-downy-mildew",
      cropId: "crop-grape",
      cropName: "Grapevine",
      name: "Grape Downy Mildew",
      scientificName: "Plasmopara viticola",
      pathogenType: "Fungal",
      severityDefault: "Severe",
      referenceImageUrl: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Translucent, yellowish-green 'oil spots' appearing on the upper leaf surface",
        "Dense white cottony downy fungal sporulation on the underside of corresponding oil spots",
        "Infected young berries turn grayish-blue, shrivel into hard brown mummies, and drop",
      ],
      causes: "Splashing spring rains and continuous leaf wetness (>2 hours at night).",
      favorableWeather: "18°C - 25°C with rainfall >10 mm and high relative humidity (>85%)",
      organicRemedies: [
        {
          title: "Bordeaux Mixture (0.8% - 1%) Canopy Protectant",
          recipe: "8g Copper Sulfate + 8g Slaked Lime per 1 Liter water.",
          application: "Apply before anticipated rain showers when shoots reach 10 cm and post-bloom.",
        },
        {
          title: "Potassium Phosphonate Elicitor Spray",
          recipe: "3 ml Potassium Phosphonate per 1 Liter water.",
          application: "Systemic immunizer activating vineyard resistance against oospore germination.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Dimethomorph 50% WP or Cymoxanil 8% + Mancozeb 64% WP",
          ingredient: "Dimethomorph",
          dosage: "1.0 g / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Bordeaux Mixture Organic Copper Vineyard Shield",
          type: "Organic Fungicide",
          dosage: "8 g / Liter",
          benefit: "OMRI-certified standard protectant against grape downy mildew and black rot.",
          searchQuery: "bordeaux mixture for grapevine downy mildew plasmopara viticola",
          price: "$13.50 / ₹360",
        },
      ],
      videoTutorials: [
        {
          title: "Grapevine Downy Mildew: Oil Spot Identification & Fungicide Timing",
          channel: "Viticulture Academy",
          query: "grapevine downy mildew plasmopara viticola oil spots spray schedule",
          duration: "10:30",
        },
      ],
    },
    {
      id: "dis-grape-anthracnose",
      cropId: "crop-grape",
      cropName: "Grapevine",
      name: "Anthracnose / Bird's Eye Rot",
      scientificName: "Elsinoë ampelina (Sphaceloma ampelinum)",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Small, reddish-brown circular spots on leaves that develop ash-gray centers with dark borders ('shot holes')",
        "Deep, elongated cankers on green shoots causing cane breakage and stunted terminal growth",
        "Circular sunken spots on berries with dark purple-brown rings resembling a bird's eye",
      ],
      causes: "Splashing rain and over-wintered cankers on dormant canes in warm rainy seasons.",
      favorableWeather: "22°C - 30°C with prolonged rain and high humidity",
      organicRemedies: [
        {
          title: "Dormant Lime Sulfur Cleanse + Copper Hydroxide",
          recipe: "Apply 25 ml Lime Sulfur/L during dormancy, followed by 2g Copper Hydroxide/L on young shoots.",
          application: "Eradicates over-wintering sclerotia on dormant canes prior to bud break.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Carbendazim 50% WP or Difenoconazole 25% EC",
          ingredient: "Carbendazim",
          dosage: "1.0 g / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Liquid Lime Sulfur Vineyard Dormant Spray",
          type: "Organic Fungicide",
          dosage: "20 ml / Liter dormant spray",
          benefit: "Cleanses over-wintering anthracnose and powdery mildew spores from grapevine bark.",
          searchQuery: "liquid lime sulfur for grapevine anthracnose dormant spray",
          price: "$18.00 / ₹490",
        },
      ],
      videoTutorials: [
        {
          title: "Grape Anthracnose (Bird's Eye Rot) Symptoms & Spring Management",
          channel: "Grape Grower Extension",
          query: "grape anthracnose bird eye rot elsinoe ampelina management",
          duration: "9:00",
        },
      ],
    },
  ],

  // 20. Apple
  "crop-apple": [
    {
      id: "dis-apple-fire-blight",
      cropId: "crop-apple",
      cropName: "Apple",
      name: "Fire Blight",
      scientificName: "Erwinia amylovora",
      pathogenType: "Bacterial",
      severityDefault: "Severe",
      referenceImageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Infected blossoms turn water-soaked, wilt, shrivel, and turn black as if scorched by fire",
        "Terminal shoots and twigs wilt and hook downwards into a distinct 'shepherd's crook' shape",
        "Milky white to amber bacterial ooze droplets seeping from infected twigs during humid mornings",
      ],
      causes: "Bacteria vectored by bees and rain splashes entering open apple blossoms during warm humid springs.",
      favorableWeather: "18°C - 28°C with intermittent rain, dew, or heavy fog during bloom",
      organicRemedies: [
        {
          title: "Bacillus subtilis + Copper Soap at Bloom",
          recipe: "Apply 5g Bacillus subtilis WP per Liter water at 20% and 80% bloom.",
          application: "Beneficial bacteria aggressively colonize floral pistils to block Erwinia colonization.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Streptomycin Sulfate 17% (Agri-Mycin)",
          ingredient: "Streptomycin Sulfate (100 ppm)",
          dosage: "0.6 g / Liter water (Sprayed strictly during blossom period)",
        },
      ],
      recommendedInputs: [
        {
          name: "Bacillus subtilis Bio-Fungicide for Orchards",
          type: "Organic Fungicide",
          dosage: "5 g / Liter",
          benefit: "OMRI-listed blossom protectant preventing fire blight bacterial entry.",
          searchQuery: "bacillus subtilis bio fungicide for apple fire blight blossom spray",
          price: "$21.00 / ₹550",
        },
      ],
      videoTutorials: [
        {
          title: "Apple Fire Blight: Shepherd's Crook Symptoms & Blossom Protection",
          channel: "Apple Orchard Extension",
          query: "apple fire blight erwinia amylovora shepherd crook blossom spray",
          duration: "10:40",
        },
      ],
    },
    {
      id: "dis-apple-cedar-rust",
      cropId: "crop-apple",
      cropName: "Apple",
      name: "Cedar Apple Rust",
      scientificName: "Gymnosporangium juniperi-virginianae",
      pathogenType: "Fungal",
      severityDefault: "Moderate",
      referenceImageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Small, pale yellow circular spots on upper leaf surfaces that enlarge and turn vivid orange-yellow with red borders",
        "Tiny black dots (pycnia) appear inside the center of yellow leaf spots",
        "Underside of leaves forms raised tubular projections (aecia) with finger-like frills releasing powdery spores",
      ],
      causes: "Heteroecious fungus alternating between Eastern Red Cedar / Juniper galls and apple orchards.",
      favorableWeather: "12°C - 24°C with warm spring rains coinciding with apple bud break",
      organicRemedies: [
        {
          title: "Liquid Sulfur + Neem Oil Protective Barrier",
          recipe: "3g Wettable Sulfur + 4ml Cold-Pressed Neem Oil per 1 Liter water.",
          application: "Spray at pink bud and petal fall stage to shield emerging foliage.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Myclobutanil 40% WP or Difenoconazole 25% EC",
          ingredient: "Myclobutanil / Difenoconazole",
          dosage: "0.5 g Myclobutanil or 0.5 ml Difenoconazole per Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Organic Wettable Sulfur 80% WDG",
          type: "Organic Fungicide",
          dosage: "3 g / Liter",
          benefit: "Provides preventative multi-site barrier against rust basidiospore infection.",
          searchQuery: "wettable sulfur 80 wdg for cedar apple rust",
          price: "$13.50 / ₹360",
        },
      ],
      videoTutorials: [
        {
          title: "Cedar Apple Rust Lifecycle, Symptoms & Spring Fungicide Schedule",
          channel: "Fruit Tree Doctor",
          query: "cedar apple rust gymnosporangium symptoms spray timing",
          duration: "8:55",
        },
      ],
    },
  ],

  // 21. Papaya
  "crop-papaya": [
    {
      id: "dis-papaya-anthracnose",
      cropId: "crop-papaya",
      cropName: "Papaya",
      name: "Papaya Anthracnose",
      scientificName: "Colletotrichum gloeosporioides",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Small circular water-soaked sunken spots on ripening fruit skins",
        "Spots enlarge rapidly, forming soft depressions with gelatinous pink to orange spore masses in concentric rings",
        "Underlying fruit pulp softens and develops a bitter watery rot",
      ],
      causes: "Latent infections occurring in green immature fruits, erupting as sugar levels rise during ripening.",
      favorableWeather: "25°C - 32°C with high humidity (>85%) and frequent rainfall",
      organicRemedies: [
        {
          title: "Copper Hydroxide + Hot Water Post-Harvest Dip",
          recipe: "Field spray with 2g Copper Hydroxide/L; dip harvested fruit in 48°C water for 20 minutes.",
          application: "Field spray prevents latent appressoria formation; hot water destroys latent mycelium.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Azoxystrobin 23% SC or Chlorothalonil 75% WP",
          ingredient: "Azoxystrobin",
          dosage: "1.0 ml / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Copper Hydroxide 77% WP Bio-Fungicide",
          type: "Organic Fungicide",
          dosage: "2 g / Liter",
          benefit: "Protects ripening papaya fruits from anthracnose spots without burning foliage.",
          searchQuery: "copper hydroxide bio fungicide for papaya anthracnose",
          price: "$15.00 / ₹410",
        },
      ],
      videoTutorials: [
        {
          title: "Papaya Anthracnose Fruit Rot: Orchard Spray & Hot Water Treatment",
          channel: "Tropical Horticulture Extension",
          query: "papaya anthracnose colletotrichum fruit spot hot water dip",
          duration: "9:25",
        },
      ],
    },
    {
      id: "dis-papaya-stem-rot",
      cropId: "crop-papaya",
      cropName: "Papaya",
      name: "Stem and Collar Rot (Foot Rot)",
      scientificName: "Pythium aphanidermatum / Phytophthora",
      pathogenType: "Fungal",
      severityDefault: "Severe",
      referenceImageUrl: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Water-soaked, dark brown to black soft rot on the tree trunk near the soil line (collar region)",
        "Bark of collar region peels off easily, exuding a foul watery liquid",
        "Severe internal rot causes tree trunk to snap and topple over in moderate winds",
      ],
      causes: "Waterlogged soils, flood irrigation water touching tree trunk, and heavy monsoon rains.",
      favorableWeather: "26°C - 34°C with saturated soil around the tree collar",
      organicRemedies: [
        {
          title: "Mounded Planting + Trichoderma harzianum Basin Drench",
          recipe: "Plant trees on 30 cm raised mounds + drench collar with 20g Trichoderma harzianum WP/L.",
          application: "Prevents standing water around trunk and suppresses Pythium zoospores.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Metalaxyl 8% + Mancozeb 64% WP (Ridomil)",
          ingredient: "Metalaxyl + Mancozeb",
          dosage: "2.5 g / Liter water (Stem painting and collar drench)",
        },
      ],
      recommendedInputs: [
        {
          name: "Trichoderma harzianum Bio-Fungicide WP",
          type: "Organic Fungicide",
          dosage: "20 g / tree basin",
          benefit: "Biological root and trunk protectant devouring oomycete foot rot mycelium.",
          searchQuery: "trichoderma harzianum for papaya foot rot pythium",
          price: "$14.00 / ₹370",
        },
      ],
      videoTutorials: [
        {
          title: "Preventing Papaya Foot Rot & Collar Rot in Monsoon",
          channel: "Papaya Farming Hub",
          query: "papaya foot rot collar rot pythium aphanidermatum prevention",
          duration: "8:50",
        },
      ],
    },
  ],

  // 22. Guava
  "crop-guava": [
    {
      id: "dis-guava-fruit-canker",
      cropId: "crop-guava",
      cropName: "Guava",
      name: "Guava Fruit Canker & Anthracnose",
      scientificName: "Pestalotiopsis psidii / Colletotrichum gloeosporioides",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "/src/assets/images/guava_leaf_disease_1792629402944.jpg",
      healthyReferenceUrl: "/src/assets/images/guava_plant_branch_1792629401977.jpg",
      symptoms: [
        "Small, circular, raised corky crater-like cankers on developing and mature guava fruits",
        "Margins of cankers are elevated and surrounded by a dark brown necrotic halo",
        "Fruits crack open, remain malformed and hard, with completely ruined edible pulp",
      ],
      causes: "Wind-blown rain splashing conidia onto young fruitlets during monsoon weather.",
      favorableWeather: "25°C - 33°C with heavy monsoon rains and high relative humidity",
      organicRemedies: [
        {
          title: "Copper Oxychloride + Neem Oil Fruit Shield",
          recipe: "2.5 g Copper Oxychloride + 4 ml Cold-Pressed Neem Oil per 1 Liter water.",
          application: "Spray immediately after fruit set and repeat at 15-day intervals across fruit growth.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Carbendazim 12% + Mancozeb 63% WP (Saaf)",
          ingredient: "Carbendazim + Mancozeb",
          dosage: "2.0 g / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Copper Oxychloride 50% WP Bio-Fungicide",
          type: "Organic Fungicide",
          dosage: "2.5 g / Liter",
          benefit: "Proven certified organic shield preventing guava canker and anthracnose fruit spots.",
          searchQuery: "copper oxychloride 50 wp for guava fruit canker pestalotiopsis",
          price: "$14.50 / ₹390",
        },
      ],
      videoTutorials: [
        {
          title: "Guava Fruit Canker & Anthracnose: Symptoms & Spray Plan",
          channel: "Guava Farming Guide",
          query: "guava fruit canker pestalotiopsis psidii anthracnose management",
          duration: "9:15",
        },
      ],
    },
    {
      id: "dis-guava-algal-leaf-spot",
      cropId: "crop-guava",
      cropName: "Guava",
      name: "Algal Leaf Spot",
      scientificName: "Cephaleuros virescens (Parasitic Green Alga)",
      pathogenType: "Fungal",
      severityDefault: "Moderate",
      referenceImageUrl: "/src/assets/images/guava_leaf_disease_1792629402944.jpg",
      healthyReferenceUrl: "/src/assets/images/guava_plant_branch_1792629401977.jpg",
      symptoms: [
        "Raised, velvety, circular rust-colored to reddish-brown patches on upper leaf surfaces",
        "Patches age into dull grayish-green corky crusts that damage leaf cuticle",
        "Severely infected branches display twig bark cracking, defoliation, and reduced fruit vigor",
      ],
      causes: "Parasitic green alga thriving in unpruned dense orchards with poor sunlight penetration and wet foliage.",
      favorableWeather: "24°C - 32°C with persistent cloud cover and poor air circulation",
      organicRemedies: [
        {
          title: "Bordeaux Mixture (1%) or Copper Hydroxide Wash",
          recipe: "10g Copper Sulfate + 10g Hydrated Lime per 1 Liter water.",
          application: "Prune dense inner canopy branches for airflow, then spray copper wash thoroughly.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Copper Oxychloride 50% WP",
          ingredient: "Copper Oxychloride",
          dosage: "3.0 g / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Copper Hydroxide 77% WP Orchard Wash",
          type: "Organic Fungicide",
          dosage: "2.5 g / Liter",
          benefit: "Eradicates parasitic algal colonies from guava foliage and twigs.",
          searchQuery: "copper hydroxide for guava algal leaf spot cephaleuros",
          price: "$15.00 / ₹410",
        },
      ],
      videoTutorials: [
        {
          title: "Treating Algal Leaf Spot (Red Rust) on Guava Trees",
          channel: "Orchard Agronomy Channel",
          query: "guava algal leaf spot red rust cephaleuros virescens copper spray",
          duration: "7:45",
        },
      ],
    },
  ],

  // 23. Pomegranate
  "crop-pomegranate": [
    {
      id: "dis-pomegranate-anthracnose",
      cropId: "crop-pomegranate",
      cropName: "Pomegranate",
      name: "Pomegranate Anthracnose",
      scientificName: "Colletotrichum gloeosporioides",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1541344999736-83eca872f241?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Small, dark brown circular to irregular spots on leaves surrounded by a yellow chlorotic halo",
        "Sunken, dark circular spots on the fruit rind with salmon-pink concentric spore masses",
        "Spots coalesce causing fruit splitting and unmarketable black dry rot of arils",
      ],
      causes: "Monsoon rainfall, high relative humidity, and unsterilized pruning shear contamination.",
      favorableWeather: "25°C - 32°C with continuous rainy overcast weather",
      organicRemedies: [
        {
          title: "Liquid Copper Octanoate + Neem Oil Emulsion",
          recipe: "4 ml Liquid Copper Octanoate + 4 ml Neem Oil per 1 Liter water.",
          application: "Apply at flower emergence, fruit set, and repeated every 15 days in rainy season.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Difenoconazole 25% EC or Azoxystrobin 23% SC",
          ingredient: "Difenoconazole",
          dosage: "1.0 ml / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Copper Octanoate Organic Bio-Fungicide",
          type: "Organic Fungicide",
          dosage: "4 ml / Liter",
          benefit: "Gentle copper soap formulation preventing pomegranate fruit spotting without russeting.",
          searchQuery: "copper octanoate organic fungicide for pomegranate anthracnose",
          price: "$17.00 / ₹460",
        },
      ],
      videoTutorials: [
        {
          title: "Pomegranate Anthracnose & Fruit Spot: Symptoms & Spray Schedule",
          channel: "Pomegranate Research Hub",
          query: "pomegranate anthracnose fruit spot colletotrichum management",
          duration: "9:10",
        },
      ],
    },
    {
      id: "dis-pomegranate-wilt",
      cropId: "crop-pomegranate",
      cropName: "Pomegranate",
      name: "Pomegranate Wilt Disease",
      scientificName: "Ceratocystis fimbriata",
      pathogenType: "Fungal",
      severityDefault: "Severe",
      referenceImageUrl: "https://images.unsplash.com/photo-1541344999736-83eca872f241?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Yellowing and wilting of leaves on a single branch or one side of the canopy ('one-sided wilt')",
        "Leaves dry, turn brown, but remain stubbornly attached to the dead branch",
        "Cross-section of the stem base or roots reveals deep grayish-black radial streaks in the wood",
      ],
      causes: "Soil-borne fungus entering via root injuries caused by root-knot nematodes or tractor cultivation.",
      favorableWeather: "25°C - 35°C in alkaline soils with poor drainage",
      organicRemedies: [
        {
          title: "Trichoderma harzianum + Pseudomonas Basin Drench",
          recipe: "50g Trichoderma harzianum + 50g Pseudomonas fluorescens per tree basin in 20 L water.",
          application: "Drench tree basin twice annually (before monsoon in May and post-monsoon in October).",
        },
      ],
      chemicalRemedies: [
        {
          title: "Propiconazole 25% EC (Soil Drench)",
          ingredient: "Propiconazole",
          dosage: "2.0 ml / Liter water (Drench 10 Liters per tree basin)",
        },
      ],
      recommendedInputs: [
        {
          name: "Trichoderma harzianum Bio-Fungicide Powder",
          type: "Organic Fungicide",
          dosage: "50 g / tree basin",
          benefit: "Suppresses soil-borne Ceratocystis fimbriata hyphae in pomegranate orchards.",
          searchQuery: "trichoderma harzianum for pomegranate wilt ceratocystis fimbriata",
          price: "$13.50 / ₹350",
        },
      ],
      videoTutorials: [
        {
          title: "Pomegranate Wilt (Ceratocystis): Early Symptoms, Drenching & Prevention",
          channel: "Arid Fruit Agronomy",
          query: "pomegranate wilt ceratocystis fimbriata soil drench propiconazole",
          duration: "11:00",
        },
      ],
    },
  ],

  // 24. Strawberry
  "crop-strawberry": [
    {
      id: "dis-strawberry-botrytis-gray-mold",
      cropId: "crop-strawberry",
      cropName: "Strawberry",
      name: "Gray Mold (Botrytis Fruit Rot)",
      scientificName: "Botrytis cinerea",
      pathogenType: "Fungal",
      severityDefault: "Severe",
      referenceImageUrl: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Light brown water-soaked soft rot appearing on green and ripening berries, especially under calyx caps",
        "Berries become engulfed in a fuzzy, velvety gray-brown carpet of airborne fungal spores",
        "Rotted berries turn into dried, shriveled, mummified gray fruit clusters",
      ],
      causes: "Cool, wet weather during blooming and fruiting periods with poorly ventilated plastic tunnels.",
      favorableWeather: "15°C - 22°C with relative humidity >90% or rain during blossom",
      organicRemedies: [
        {
          title: "Bacillus subtilis Bio-Fungicide (Serenade) at Bloom",
          recipe: "5 ml Bacillus subtilis concentrate per 1 Liter water.",
          application: "Spray every 7 days from first blossom through harvest to colonize floral calyx.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Cyprodinil + Fludioxonil (Switch 62.5 WG)",
          ingredient: "Cyprodinil + Fludioxonil",
          dosage: "0.8 g / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Bacillus subtilis QST 713 Bio-Fungicide",
          type: "Organic Fungicide",
          dosage: "5 ml / Liter",
          benefit: "OMRI-certified berry fungicide with zero-day pre-harvest interval against gray mold.",
          searchQuery: "bacillus subtilis qst 713 bio fungicide for strawberry botrytis",
          price: "$22.00 / ₹580",
        },
      ],
      videoTutorials: [
        {
          title: "Managing Botrytis Gray Mold in Strawberries Organically",
          channel: "Berry Care Channel",
          query: "strawberry botrytis gray mold organic treatment bacillus subtilis",
          duration: "9:15",
        },
      ],
    },
    {
      id: "dis-strawberry-powdery-mildew",
      cropId: "crop-strawberry",
      cropName: "Strawberry",
      name: "Powdery Mildew",
      scientificName: "Podosphaera aphanis (Sphaerotheca macularis)",
      pathogenType: "Fungal",
      severityDefault: "Moderate",
      referenceImageUrl: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Upward curling and rolling of leaf margins exposing purplish or reddish leaf undersides",
        "Delicate white powdery mycelium on the underside of leaves and young flower petals",
        "Developing green berries fail to size, harden, and develop a dull white dusty coating with crack marks",
      ],
      causes: "Moderate temperatures (18-25°C) with high atmospheric humidity and shaded tunnel foliage.",
      favorableWeather: "18°C - 26°C with moderate humidity and low sunlight in tunnels",
      organicRemedies: [
        {
          title: "Potassium Bicarbonate + Pure Horticultural Oil",
          recipe: "3g Potassium Bicarbonate + 3ml Horticultural Oil per 1 Liter water.",
          application: "Apply immediately upon first upward leaf curling; leaves 0 chemical residue on ripe berries.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Myclobutanil 40% WP or Quinoxyfen",
          ingredient: "Myclobutanil",
          dosage: "0.5 g / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Potassium Bicarbonate Organic Mildew Cure",
          type: "Organic Fungicide",
          dosage: "3 g / Liter",
          benefit: "Safe food-grade curative for strawberry powdery mildew with zero pre-harvest waiting time.",
          searchQuery: "potassium bicarbonate organic fungicide for strawberry powdery mildew",
          price: "$16.50 / ₹430",
        },
      ],
      videoTutorials: [
        {
          title: "Strawberry Powdery Mildew: Upward Leaf Curl Diagnosis & Control",
          channel: "Strawberry Masterclass",
          query: "strawberry powdery mildew podosphaera aphanis symptoms management",
          duration: "8:20",
        },
      ],
    },
  ],

  // 25. Watermelon & Melons
  "crop-watermelon": [
    {
      id: "dis-watermelon-gummy-stem",
      cropId: "crop-watermelon",
      cropName: "Watermelon & Melons",
      name: "Gummy Stem Blight & Black Rot",
      scientificName: "Stagonosporopsis cucurbitacearum (Didymella bryoniae)",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Circular to wedge-shaped brown lesions on leaves expanding from the margins inwards",
        "Water-soaked lesions on the main vine crown that turn tan-white and exude a sticky amber-colored gum",
        "Fruit develop sunken circular black rot lesions studded with black pycnidia pimples",
      ],
      causes: "Warm, rainy weather and overhead sprinkler irrigation splashing spores from old vine debris.",
      favorableWeather: "22°C - 30°C with prolonged leaf wetness (>6 hours)",
      organicRemedies: [
        {
          title: "Copper Hydroxide + Bacillus subtilis Wash",
          recipe: "2g Copper Hydroxide + 5g Bacillus subtilis per 1 Liter water.",
          application: "Spray vines at first runner formation and repeat after major rainstorms.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Difenoconazole + Cyprodinil (Inspire Super) or Mancozeb",
          ingredient: "Difenoconazole + Cyprodinil",
          dosage: "1.0 ml / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Copper Hydroxide 77% WP Bio-Fungicide",
          type: "Organic Fungicide",
          dosage: "2 g / Liter",
          benefit: "Protects watermelon crowns and fruit rinds from gummy stem exudation and black rot.",
          searchQuery: "copper hydroxide bio fungicide for watermelon gummy stem blight",
          price: "$15.50 / ₹420",
        },
      ],
      videoTutorials: [
        {
          title: "Watermelon Gummy Stem Blight: Amber Gum Symptoms & Spray Plan",
          channel: "Cucurbit Production Guide",
          query: "watermelon gummy stem blight didymella bryoniae symptoms treatment",
          duration: "9:35",
        },
      ],
    },
    {
      id: "dis-watermelon-fusarium-wilt",
      cropId: "crop-watermelon",
      cropName: "Watermelon & Melons",
      name: "Fusarium Wilt of Watermelon",
      scientificName: "Fusarium oxysporum f. sp. niveum",
      pathogenType: "Fungal",
      severityDefault: "Severe",
      referenceImageUrl: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "One or more vine runners wilt during hot sunny afternoons, recovering overnight",
        "Permanent wilting of the entire vine within days with foliage turning dull brown and desiccated",
        "Brown to purple vascular discoloration in the taproot and lower crown when split longitudinally",
      ],
      causes: "Soil-borne pathogen surviving as chlamydospores in soil for 5-10 years.",
      favorableWeather: "25°C - 32°C in warm, sandy, acidic soils (pH 5.5 - 6.5)",
      organicRemedies: [
        {
          title: "Grafting on Resistant Gourd Rootstocks + Trichoderma",
          recipe: "Graft watermelon scions onto bottle gourd/squash rootstocks + 10g Trichoderma/plant basin.",
          application: "Rootstock provides immunity while Trichoderma colonizes root zone against soil fungi.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Thiophanate-Methyl 70% WP Root Furrow Drench",
          ingredient: "Thiophanate-Methyl",
          dosage: "1.5 g / Liter water (Drench planting furrows)",
        },
      ],
      recommendedInputs: [
        {
          name: "Trichoderma harzianum Root Drench WP",
          type: "Organic Fungicide",
          dosage: "10 g / plant basin",
          benefit: "Biological root shield blocking Fusarium niveum fungal penetration in watermelon fields.",
          searchQuery: "trichoderma harzianum for watermelon fusarium wilt",
          price: "$14.00 / ₹370",
        },
      ],
      videoTutorials: [
        {
          title: "Managing Watermelon Fusarium Wilt: Grafting & Soil Biocontrol",
          channel: "Melon Science Lab",
          query: "watermelon fusarium wilt fusarium oxysporum niveum grafting trichoderma",
          duration: "10:15",
        },
      ],
    },
  ],

  // 26. Soybean
  "crop-soybean": [
    {
      id: "dis-soybean-frogeye",
      cropId: "crop-soybean",
      cropName: "Soybean",
      name: "Frogeye Leaf Spot",
      scientificName: "Cercospora sojina",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Small circular to angular spots with light gray to tan centers surrounded by narrow dark red/purple borders",
        "Spots resemble a frog's eye and coalesce into large necrotic blighted areas across the upper canopy",
        "Infected seed coats develop brown to purple staining and cracking, lowering germination",
      ],
      causes: "Infected seed and crop residues releasing airborne conidia during warm humid weather.",
      favorableWeather: "25°C - 30°C with relative humidity >90% and frequent rainfall",
      organicRemedies: [
        {
          title: "Copper Hydroxide + Neem Seed Kernel Extract (5%)",
          recipe: "2g Copper Hydroxide + 50g NSKE filtrate per 1 Liter water.",
          application: "Spray at R1 (beginning bloom) and R3 (beginning pod) stages.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Pyraclostrobin + Fluxapyroxad (Priaxor)",
          ingredient: "Pyraclostrobin + Fluxapyroxad",
          dosage: "0.8 ml / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Copper Hydroxide 77% WP Bio-Fungicide",
          type: "Organic Fungicide",
          dosage: "2 g / Liter",
          benefit: "Protects soybean pods and upper trifoliate leaves from frogeye fungal conidia.",
          searchQuery: "copper hydroxide 77 wp for soybean frogeye leaf spot",
          price: "$15.00 / ₹410",
        },
      ],
      videoTutorials: [
        {
          title: "Soybean Frogeye Leaf Spot Identification & Fungicide Timing",
          channel: "Soybean Agronomy Hub",
          query: "soybean frogeye leaf spot cercospora sojina symptoms management",
          duration: "9:00",
        },
      ],
    },
    {
      id: "dis-soybean-charcoal-rot",
      cropId: "crop-soybean",
      cropName: "Soybean",
      name: "Charcoal Rot",
      scientificName: "Macrophomina phaseolina",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Premature yellowing and drying of leaves that remain firmly attached to petioles during pod fill",
        "Lower stem and taproot peel back to reveal a dusty, silver-gray charcoal-like dusting of black microsclerotia",
        "Plants mature prematurely with poorly developed, shriveled, flat seed pods",
      ],
      causes: "Prolonged drought stress accompanied by high soil and air temperatures during flowering.",
      favorableWeather: "28°C - 35°C in dry soils under moisture deficit stress",
      organicRemedies: [
        {
          title: "Trichoderma viride Seed Inoculation & Deep Tillage",
          recipe: "Coat seed with 10g Trichoderma viride WP per kg seed + maintain conservation crop residue.",
          application: "Builds root mycorrhizal associations and outcompetes soil microsclerotia.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Carbendazim 50% WP (Seed Treatment)",
          ingredient: "Carbendazim",
          dosage: "2.0 g / kg seed",
        },
      ],
      recommendedInputs: [
        {
          name: "Trichoderma viride Certified Seed Inoculant",
          type: "Organic Fungicide",
          dosage: "10 g / kg seed",
          benefit: "Coats soybean seeds to protect emerging radicles from soil-borne charcoal rot.",
          searchQuery: "trichoderma viride seed treatment for soybean charcoal rot",
          price: "$11.50 / ₹300",
        },
      ],
      videoTutorials: [
        {
          title: "Soybean Charcoal Rot: Diagnosis Under Drought Conditions",
          channel: "Legume Science Network",
          query: "soybean charcoal rot macrophomina phaseolina microsclerotia",
          duration: "8:45",
        },
      ],
    },
  ],

  // 27. Groundnut / Peanut
  "crop-groundnut": [
    {
      id: "dis-groundnut-rust",
      cropId: "crop-groundnut",
      cropName: "Groundnut / Peanut",
      name: "Groundnut Rust",
      scientificName: "Puccinia arachidis",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1567892328127-1473950ef256?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Small, circular, orange-brown pustules (uredinia) bursting through the lower epidermis of leaves",
        "Unlike Tikka spots, the lower epidermis ruptures to release masses of powdery cinnamon-brown spores",
        "Severely infected leaves curl, dry, become brittle, and remain attached without immediate dropping",
      ],
      causes: "Airborne urediniospores traveling on warm wind currents during humid monsoon weather.",
      favorableWeather: "22°C - 28°C with high relative humidity (>85%) and heavy dew",
      organicRemedies: [
        {
          title: "Wettable Sulfur (80% WDG) + Neem Oil Foliar Spray",
          recipe: "3g Wettable Sulfur + 4ml Cold-Pressed Neem Oil per 1 Liter water.",
          application: "Apply at 45 and 60 days after sowing to coat developing foliage.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Tebuconazole 25.9% EC or Hexaconazole 5% EC",
          ingredient: "Tebuconazole",
          dosage: "1.0 ml / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Micronized Wettable Sulfur 80% WDG",
          type: "Organic Fungicide",
          dosage: "3 g / Liter",
          benefit: "Dual-action organic protectant against groundnut rust and sulfur plant nutrient.",
          searchQuery: "wettable sulfur 80 wdg for groundnut peanut rust puccinia arachidis",
          price: "$13.00 / ₹350",
        },
      ],
      videoTutorials: [
        {
          title: "Groundnut Rust vs Tikka Leaf Spot Identification",
          channel: "Oilseed Crops Guide",
          query: "groundnut peanut rust puccinia arachidis symptoms management",
          duration: "9:20",
        },
      ],
    },
    {
      id: "dis-groundnut-collar-rot",
      cropId: "crop-groundnut",
      cropName: "Groundnut / Peanut",
      name: "Collar Rot / Stem Rot",
      scientificName: "Aspergillus niger / Sclerotium rolfsii",
      pathogenType: "Fungal",
      severityDefault: "Severe",
      referenceImageUrl: "https://images.unsplash.com/photo-1567892328127-1473950ef256?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Water-soaked dark brown collar rot at the soil line on emerging seedlings",
        "Collar region becomes covered with dense black powdery conidial masses or white fan-like mycelial fans",
        "Seedlings collapse suddenly, dry up, and pull out easily from the ground",
      ],
      causes: "Seed-borne Aspergillus or soil-borne Sclerotium attacking tender hypocotyls during warm rainy planting periods.",
      favorableWeather: "28°C - 35°C in moist soils during germination and emergence",
      organicRemedies: [
        {
          title: "Trichoderma harzianum Seed Coating + Neem Cake",
          recipe: "Coat seed with 10g Trichoderma harzianum per kg seed + apply 100 kg Neem cake/acre.",
          application: "Protects hypocotyl during initial 20 days of seedling emergence.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Carboxin 37.5% + Thiram 37.5% (Vitavax)",
          ingredient: "Carboxin + Thiram",
          dosage: "2.5 g / kg seed (Pre-sowing seed treatment)",
        },
      ],
      recommendedInputs: [
        {
          name: "Trichoderma harzianum Certified Seed Dressing",
          type: "Organic Fungicide",
          dosage: "10 g / kg seed",
          benefit: "Guards groundnut seeds against Aspergillus crown rot and Sclerotium stem rot.",
          searchQuery: "trichoderma harzianum seed treatment for groundnut collar rot",
          price: "$12.50 / ₹320",
        },
      ],
      videoTutorials: [
        {
          title: "Groundnut Collar Rot Prevention: Seed Treatment Techniques",
          channel: "Peanut Science Lab",
          query: "groundnut collar rot aspergillus niger stem rot treatment",
          duration: "8:10",
        },
      ],
    },
  ],

  // 28. Ginger
  "crop-ginger": [
    {
      id: "dis-ginger-bacterial-wilt",
      cropId: "crop-ginger",
      cropName: "Ginger",
      name: "Bacterial Wilt of Ginger",
      scientificName: "Ralstonia pseudosolanacearum",
      pathogenType: "Bacterial",
      severityDefault: "Severe",
      referenceImageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Water-soaked dark green borders on the margin of lower leaves that curl upward along the midrib",
        "Incipient yellowing that spreads rapidly to upper leaves while pseudostem collar turns brown-black",
        "Clear water stream test of cut pseudostem reveals distinct milky bacterial ooze streaming from vascular bundles",
      ],
      causes: "Infected seed rhizomes and waterborne bacteria swimming through waterlogged raised beds.",
      favorableWeather: "25°C - 32°C with torrential monsoon rains and high soil saturation",
      organicRemedies: [
        {
          title: "Hot Water Seed Rhizome Treatment (47°C) + Pseudomonas Drench",
          recipe: "Soak seed rhizomes at 47°C for 30 minutes, then dip in Pseudomonas fluorescens (10g/L).",
          application: "Thermal sanitization eradicates internal bacterial vascular plugs before planting.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Streptocycline + Copper Oxychloride Soil Drench",
          ingredient: "Streptomycin + COC",
          dosage: "0.2 g Streptocycline + 2.5 g COC per Liter water drenched in beds",
        },
      ],
      recommendedInputs: [
        {
          name: "Pseudomonas fluorescens Bio-Control for Ginger",
          type: "Organic Fungicide",
          dosage: "10 g / Liter",
          benefit: "National Spice Research Institute recommended biocontrol for ginger bacterial wilt.",
          searchQuery: "pseudomonas fluorescens for ginger bacterial wilt ralstonia",
          price: "$13.00 / ₹330",
        },
      ],
      videoTutorials: [
        {
          title: "Ginger Bacterial Wilt vs Soft Rot: How to Tell the Difference",
          channel: "Spice Crops Academy",
          query: "ginger bacterial wilt ralstonia ooze test treatment",
          duration: "9:40",
        },
      ],
    },
  ],

  // 29. Turmeric
  "crop-turmeric": [
    {
      id: "dis-turmeric-taphrina-blotch",
      cropId: "crop-turmeric",
      cropName: "Turmeric",
      name: "Taphrina Leaf Blotch",
      scientificName: "Taphrina maculans",
      pathogenType: "Fungal",
      severityDefault: "Moderate",
      referenceImageUrl: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Small, oval to rectangular spots on both leaf surfaces that turn reddish-brown to dirty yellow",
        "Spots coalesce into large yellowish-brown blotches covering extensive portions of the leaf blade",
        "Heavily infected leaves turn yellow, curl up, and dry prematurely, reducing rhizome bulb filling",
      ],
      causes: "High humidity, prolonged leaf wetness, and splashing conidia during monsoon months.",
      favorableWeather: "23°C - 30°C with relative humidity >80%",
      organicRemedies: [
        {
          title: "Copper Hydroxide + Turmeric Leaf Extract Spray",
          recipe: "2g Copper Hydroxide + 20 ml fresh boiled turmeric leaf decoction per 1 Liter water.",
          application: "Spray every 15 days starting at 60 days after rhizome emergence.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Mancozeb 75% WP or Propiconazole 25% EC",
          ingredient: "Mancozeb",
          dosage: "2.5 g / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Copper Hydroxide 77% WP Bio-Fungicide",
          type: "Organic Fungicide",
          dosage: "2 g / Liter",
          benefit: "Protects turmeric foliage from Taphrina blotch and Colletotrichum leaf spot.",
          searchQuery: "copper hydroxide bio fungicide for turmeric leaf blotch taphrina",
          price: "$15.00 / ₹410",
        },
      ],
      videoTutorials: [
        {
          title: "Turmeric Leaf Blotch (Taphrina) Symptoms & Management",
          channel: "Spice Agronomy Extension",
          query: "turmeric leaf blotch taphrina maculans spray schedule",
          duration: "8:10",
        },
      ],
    },
  ],

  // 30. Coffee
  "crop-coffee": [
    {
      id: "dis-coffee-berry-disease",
      cropId: "crop-coffee",
      cropName: "Coffee",
      name: "Coffee Berry Disease (CBD)",
      scientificName: "Colletotrichum kahawae",
      pathogenType: "Fungal",
      severityDefault: "Severe",
      referenceImageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Small, dark, sunken necrotic spots on young green developing coffee berries",
        "Spots expand rapidly to engulf the entire berry, causing it to rot into a black, hard, mummified bean cluster",
        "Mummified berries drop off or remain attached to fruiting nodes, causing up to 80% crop loss",
      ],
      causes: "High rainfall, prolonged mist, and cool wet conditions during green berry expansion.",
      favorableWeather: "16°C - 22°C with persistent rainfall and high altitude mist",
      organicRemedies: [
        {
          title: "Bordeaux Mixture (1%) Preventive Application",
          recipe: "10g Copper Sulfate + 10g Hydrated Lime per 1 Liter water.",
          application: "Spray beginning at pinhead stage and repeated every 4 weeks through rainy season.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Pyraclostrobin 20% WG or Dithianon",
          ingredient: "Pyraclostrobin",
          dosage: "1.0 g / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Bordeaux Mixture Organic Copper Protectant",
          type: "Organic Fungicide",
          dosage: "10 g / Liter",
          benefit: "Standard certified organic protectant halting Coffee Berry Disease on high-altitude estates.",
          searchQuery: "bordeaux mixture copper fungicide for coffee berry disease",
          price: "$14.50 / ₹390",
        },
      ],
      videoTutorials: [
        {
          title: "Coffee Berry Disease: Early Detection & Spray Timings",
          channel: "Coffee Plantation Research",
          query: "coffee berry disease colletotrichum kahawae symptoms bordeaux spray",
          duration: "10:15",
        },
      ],
    },
    {
      id: "dis-coffee-black-rot",
      cropId: "crop-coffee",
      cropName: "Coffee",
      name: "Black Rot / Koleroga",
      scientificName: "Corticium koleroga (Pellicularia koleroga)",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Blackening and rotting of leaves, developing berries, and green twigs during heavy monsoon",
        "Affected leaves detach from the branch but remain dangling suspended by a delicate silvery fungal hyphal thread",
        "Berries rot and drop, leaving bare branches with empty nodes",
      ],
      causes: "Dense canopy shade, torrential monsoon downpours, and stagnant humid air.",
      favorableWeather: "20°C - 26°C with continuous rainfall and dense plantation shade",
      organicRemedies: [
        {
          title: "Canopy Shade Regulation + Bordeaux Mixture (1%)",
          recipe: "Thin shade trees by 30% prior to monsoon + spray 1% Bordeaux mixture on lower canopy.",
          application: "Increases air circulation and sunlight penetration while copper halts mycelial cords.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Carbendazim 50% WP or Copper Oxychloride 50% WP",
          ingredient: "Carbendazim / COC",
          dosage: "1.0 g Carbendazim or 3.0 g COC per Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Copper Oxychloride 50% WP Plantation Protectant",
          type: "Organic Fungicide",
          dosage: "3 g / Liter",
          benefit: "Provides strong adhesion during torrential monsoon rains against coffee black rot.",
          searchQuery: "copper oxychloride 50 wp for coffee black rot koleroga",
          price: "$15.00 / ₹400",
        },
      ],
      videoTutorials: [
        {
          title: "Managing Coffee Koleroga / Black Rot in Monsoon Seasons",
          channel: "Highland Agronomy Guide",
          query: "coffee black rot koleroga corticium symptoms shade management",
          duration: "9:05",
        },
      ],
    },
  ],

  // 31. Tea
  "crop-tea": [
    {
      id: "dis-tea-red-rust",
      cropId: "crop-tea",
      cropName: "Tea",
      name: "Red Rust of Tea",
      scientificName: "Cephaleuros parasiticus (Parasitic Green Alga)",
      pathogenType: "Fungal",
      severityDefault: "Moderate",
      referenceImageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Raised circular orange-red to rusty velvety patches appearing on the upper surface of mature leaves",
        "Algal filaments invade stem bark of young branches, producing longitudinal bark cracks and dieback",
        "Infected tea bushes become debilitated, unthrifty, with poor plucking flush yield",
      ],
      causes: "Poor soil drainage, low potassium levels, and high humidity in waterlogged tea gardens.",
      favorableWeather: "22°C - 30°C with prolonged cloudy weather and high moisture",
      organicRemedies: [
        {
          title: "Copper Oxychloride + Potassium Nutrition",
          recipe: "2.5 g Copper Oxychloride + 5 g Muriate of Potash per 1 Liter water.",
          application: "Apply post-pruning and during pre-monsoon flush to eradicate algal fruiting bodies.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Copper Hydroxide 77% WP",
          ingredient: "Copper Hydroxide",
          dosage: "2.0 g / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Copper Hydroxide 77% WP Tea Fungicide",
          type: "Organic Fungicide",
          dosage: "2 g / Liter",
          benefit: "Certified tea protectant stopping parasitic algal growth on shoots and foliage.",
          searchQuery: "copper hydroxide 77 wp for tea red rust algal disease",
          price: "$15.50 / ₹410",
        },
      ],
      videoTutorials: [
        {
          title: "Tea Red Rust Algal Disease: Identification & Post-Pruning Spray",
          channel: "Tea Research Association",
          query: "tea red rust cephaleuros parasiticus symptoms copper spray",
          duration: "8:30",
        },
      ],
    },
  ],

  // 32. Mustard & Rapeseed
  "crop-mustard": [
    {
      id: "dis-mustard-alternaria-blight",
      cropId: "crop-mustard",
      cropName: "Mustard & Rapeseed",
      name: "Alternaria Black Spot / Blight",
      scientificName: "Alternaria brassicae / brassicicola",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "/src/assets/images/mustard_white_rust_1792629988832.jpg",
      healthyReferenceUrl: "/src/assets/images/mustard_crop_plant_1792629989141.jpg",
      symptoms: [
        "Small, dark brown to pitch black circular spots with distinct concentric rings on leaves and stems",
        "Spots on seed pods (siliques) become sunken, black, causing premature pod shattering and shriveled seeds",
        "Premature leaf yellowing and defoliation reducing seed oil content drastically by up to 35%",
      ],
      causes: "Cool moist winter periods (15-25°C) with morning dew and intermittent light showers.",
      favorableWeather: "15°C - 24°C with relative humidity >80%",
      organicRemedies: [
        {
          title: "Garlic Extract + Trichoderma viride Spray",
          recipe: "10 ml garlic extract + 10g Trichoderma viride WP per 1 Liter water.",
          application: "Spray at 45 and 60 days after sowing to protect emerging flowering racemes.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Mancozeb 75% WP or Iprodione 50% WP",
          ingredient: "Mancozeb",
          dosage: "2.5 g / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Trichoderma viride Bio-Fungicide Powder",
          type: "Organic Fungicide",
          dosage: "10 g / Liter",
          benefit: "Biological protectant that inhibits Alternaria conidial germination on mustard siliques.",
          searchQuery: "trichoderma viride for mustard alternaria blight brassicae",
          price: "$12.00 / ₹310",
        },
      ],
      videoTutorials: [
        {
          title: "Mustard Alternaria Blight: Symptoms, Seed Loss & Spray Plan",
          channel: "Oilseed Science Hub",
          query: "mustard alternaria blight alternaria brassicae symptoms spray schedule",
          duration: "9:10",
        },
      ],
    },
    {
      id: "dis-mustard-sclerotinia-rot",
      cropId: "crop-mustard",
      cropName: "Mustard & Rapeseed",
      name: "Sclerotinia Stem Rot (White Rot)",
      scientificName: "Sclerotinia sclerotiorum",
      pathogenType: "Fungal",
      severityDefault: "Severe",
      referenceImageUrl: "/src/assets/images/mustard_white_rust_1792629988832.jpg",
      healthyReferenceUrl: "/src/assets/images/mustard_crop_plant_1792629989141.jpg",
      symptoms: [
        "Elongated water-soaked lesions on the main stem that bleach into chalky white, brittle lesions",
        "White cottony fungal mycelium growing on the outside and hollow inside of the stem",
        "Large, hard, black mouse-dropping-like sclerotia resting bodies packed inside the hollow pith",
      ],
      causes: "Sclerotia germinating into airborne ascospores during flowering in dense, well-watered winter canopies.",
      favorableWeather: "12°C - 20°C with high relative humidity and continuous soil wetness",
      organicRemedies: [
        {
          title: "Deep Summer Plowing + Coniothyrium minitans Biocontrol",
          recipe: "Apply 2 kg Coniothyrium minitans or Trichoderma harzianum per acre into soil.",
          application: "Biological hyperparasites destroy over-wintering Sclerotinia sclerotia in the soil.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Carbendazim 50% WP or Boscalid",
          ingredient: "Carbendazim",
          dosage: "1.5 g / Liter water (At 20-50% flowering)",
        },
      ],
      recommendedInputs: [
        {
          name: "Trichoderma harzianum Granular Biocontrol",
          type: "Organic Fungicide",
          dosage: "5 kg / acre",
          benefit: "Degrades sclerotial bodies in soil before apothecia can release airborne spores.",
          searchQuery: "trichoderma harzianum for mustard sclerotinia stem rot",
          price: "$14.00 / ₹370",
        },
      ],
      videoTutorials: [
        {
          title: "Mustard Sclerotinia Stem Rot: Identification & Bloom Fungicide Spray",
          channel: "Brassica Agronomy Hub",
          query: "mustard sclerotinia stem rot white rot carbendazim spray",
          duration: "8:50",
        },
      ],
    },
  ],

  // 33. Rose & Ornamentals
  "crop-rose": [
    {
      id: "dis-rose-powdery-mildew",
      cropId: "crop-rose",
      cropName: "Rose & Ornamentals",
      name: "Rose Powdery Mildew",
      scientificName: "Podosphaera pannosa",
      pathogenType: "Fungal",
      severityDefault: "Moderate",
      referenceImageUrl: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "White powdery fungal coating on tender young leaves, shoots, and developing flower buds",
        "Leaves become curled, twisted, stunted, and blistered with purplish discoloration",
        "Flower buds fail to open or produce malformed, discolored blooms",
      ],
      causes: "Warm, dry days with high relative humidity at night and shaded garden locations.",
      favorableWeather: "18°C - 26°C with moderate relative humidity (60-80%)",
      organicRemedies: [
        {
          title: "Potassium Bicarbonate + Horticultural Oil Spray",
          recipe: "3g Potassium Bicarbonate + 3ml pure Horticultural Oil per 1 Liter water.",
          application: "Spray every 7-10 days at first sign of white powder on new flushes.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Myclobutanil 40% WP or Trifloxystrobin",
          ingredient: "Myclobutanil",
          dosage: "0.5 g / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Organic Potassium Bicarbonate Rose Shield",
          type: "Organic Fungicide",
          dosage: "3 g / Liter",
          benefit: "Quickly halts powdery mildew and black spot without burning delicate rose petals.",
          searchQuery: "potassium bicarbonate organic rose powdery mildew spray",
          price: "$16.00 / ₹420",
        },
      ],
      videoTutorials: [
        {
          title: "How to Eradicate Rose Powdery Mildew Naturally in 24 Hours",
          channel: "Rose Garden Expert",
          query: "rose powdery mildew podosphaera pannosa potassium bicarbonate neem",
          duration: "7:20",
        },
      ],
    },
    {
      id: "dis-rose-dieback",
      cropId: "crop-rose",
      cropName: "Rose & Ornamentals",
      name: "Rose Dieback Disease",
      scientificName: "Botryodiplodia theobromae / Diplodia rosarum",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Drying and blackening of canes starting from the pruned tip downwards towards the crown",
        "Infected stem tissue turns dark brown to jet black with wrinkled, shriveled bark",
        "Internal vascular browning causes sudden wilting and death of entire rose branches",
      ],
      causes: "Unsterilized pruning shears, improper pruning angle, and open wounds exposed to rain.",
      favorableWeather: "25°C - 34°C with humid conditions and unsealed pruning cuts",
      organicRemedies: [
        {
          title: "Sterilized 45° Pruning & Copper Oxychloride Paste",
          recipe: "Prune dead wood 5 cm into green healthy cane at 45° angle + apply Copper Oxychloride paste.",
          application: "Seals cut surfaces immediately to prevent fungal spore germination.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Carbendazim 50% WP + Mancozeb 75% WP",
          ingredient: "Carbendazim + Mancozeb",
          dosage: "2.0 g / Liter water (Foliar spray and pruning cut painting)",
        },
      ],
      recommendedInputs: [
        {
          name: "Copper Oxychloride Pruning Sealant Paste",
          type: "Organic Fungicide",
          dosage: "50 g / Liter paste",
          benefit: "Antiseptic pruning paste preventing rose dieback and stem rot.",
          searchQuery: "copper oxychloride paste for rose dieback pruning wounds",
          price: "$12.00 / ₹310",
        },
      ],
      videoTutorials: [
        {
          title: "Rose Dieback Prevention: Pruning Cuts & Copper Paste Guide",
          channel: "Horticulture Mastery",
          query: "rose dieback disease symptoms pruning copper paste treatment",
          duration: "8:15",
        },
      ],
    },
  ],

  // 34. Carrot
  "crop-carrot": [
    {
      id: "dis-carrot-cavity-spot",
      cropId: "crop-carrot",
      cropName: "Carrot",
      name: "Cavity Spot & Root Dieback",
      scientificName: "Pythium violae / Pythium sulcatum",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Small, elliptical, horizontal sunken dark lesions (cavities) on the carrot taproot surface",
        "Cavities enlarge and rupture, forming rough corky scars that degrade root quality",
        "Severe early infection causes 'forking' and stunted, unmarketable root shapes",
      ],
      causes: "Excessive soil moisture, poor field drainage, and saturated cool soil conditions.",
      favorableWeather: "12°C - 20°C in heavy, compacted, waterlogged soils",
      organicRemedies: [
        {
          title: "Raised Deep-Bed Cultivation & Trichoderma Soil Amending",
          recipe: "Sow on 25 cm raised loose beds + incorporate 5 kg Trichoderma harzianum per acre.",
          application: "Improves drainage away from carrot taproots while biological fungus outcompetes Pythium.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Metalaxyl-M (Mefenoxam) Soil Drench",
          ingredient: "Mefenoxam",
          dosage: "1.0 ml / Liter water (Applied at sowing or within 2 weeks of emergence)",
        },
      ],
      recommendedInputs: [
        {
          name: "Trichoderma harzianum Soil Bio-Inoculant",
          type: "Organic Fungicide",
          dosage: "10 g / Liter",
          benefit: "Suppresses soil-borne Pythium oospores causing cavity spot in root crops.",
          searchQuery: "trichoderma harzianum for carrot cavity spot pythium",
          price: "$13.50 / ₹350",
        },
      ],
      videoTutorials: [
        {
          title: "Carrot Cavity Spot: Soil Moisture Management & Prevention",
          channel: "Root Crop Research",
          query: "carrot cavity spot pythium violae symptoms drainage control",
          duration: "9:20",
        },
      ],
    },
    {
      id: "dis-carrot-powdery-mildew",
      cropId: "crop-carrot",
      cropName: "Carrot",
      name: "Powdery Mildew of Carrot",
      scientificName: "Erysiphe heraclei",
      pathogenType: "Fungal",
      severityDefault: "Moderate",
      referenceImageUrl: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "White powdery fungal coating on feathery foliage and petioles",
        "Leaves become chlorotic, brittle, dry, and brown prematurely",
        "Weakened tops break during mechanical harvesting, leading to lost taproots in the soil",
      ],
      causes: "Warm, dry weather combined with dense foliar canopy and low air movement.",
      favorableWeather: "20°C - 28°C with moderate humidity and dry sunny days",
      organicRemedies: [
        {
          title: "Potassium Bicarbonate + Cold-Pressed Neem Oil",
          recipe: "3g Potassium Bicarbonate + 4ml Neem Oil per 1 Liter water.",
          application: "Spray every 10 days starting at 60 days after sowing.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Azoxystrobin 23% SC or Difenoconazole",
          ingredient: "Azoxystrobin",
          dosage: "1.0 ml / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Organic Potassium Bicarbonate Fungicide",
          type: "Organic Fungicide",
          dosage: "3 g / Liter",
          benefit: "Fast-acting organic cure for powdery mildew on carrot tops with zero residue.",
          searchQuery: "potassium bicarbonate organic bio fungicide for carrot powdery mildew",
          price: "$16.00 / ₹420",
        },
      ],
      videoTutorials: [
        {
          title: "Carrot Powdery Mildew: Protecting Foliage for Mechanical Harvest",
          channel: "Vegetable Farming Guide",
          query: "carrot powdery mildew erysiphe heraclei symptoms spray",
          duration: "7:45",
        },
      ],
    },
  ],

  // 35. Cauliflower & Broccoli
  "crop-cauliflower": [
    {
      id: "dis-cauliflower-downy-mildew",
      cropId: "crop-cauliflower",
      cropName: "Cauliflower & Broccoli",
      name: "Downy Mildew",
      scientificName: "Hyaloperonospora brassicae (Peronospora parasitica)",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Pale yellow to chlorotic irregular angular patches on upper leaf surfaces",
        "White to grayish-purple downy mold growth on corresponding undersides during humid mornings",
        "Internal grayish-black discolored streaks inside curds, reducing head quality",
      ],
      causes: "Cool nights, heavy fog or dew, and continuous moisture in nursery and field beds.",
      favorableWeather: "10°C - 18°C with high relative humidity (>85%)",
      organicRemedies: [
        {
          title: "Copper Hydroxide + Potassium Phosphonate Foliar Wash",
          recipe: "2g Copper Hydroxide + 3ml Potassium Phosphonate per 1 Liter water.",
          application: "Spray seedlings in nursery trays and repeat 2 weeks after field planting.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Metalaxyl 8% + Mancozeb 64% WP (Ridomil)",
          ingredient: "Metalaxyl + Mancozeb",
          dosage: "2.5 g / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Potassium Phosphonate Plant Immunizer",
          type: "Organic Fungicide",
          dosage: "3 ml / Liter",
          benefit: "Induces systemic phytoalexin production against brassica downy mildew.",
          searchQuery: "potassium phosphonate systemic bio fungicide for downy mildew",
          price: "$17.00 / ₹460",
        },
      ],
      videoTutorials: [
        {
          title: "Cauliflower Downy Mildew: Nursery & Field Protection",
          channel: "Crucifer Specialist",
          query: "cauliflower downy mildew hyaloperonospora symptoms control",
          duration: "8:50",
        },
      ],
    },
    {
      id: "dis-cauliflower-alternaria",
      cropId: "crop-cauliflower",
      cropName: "Cauliflower & Broccoli",
      name: "Alternaria Leaf Spot & Head Blight",
      scientificName: "Alternaria brassicae / brassicicola",
      pathogenType: "Fungal",
      severityDefault: "Moderate",
      referenceImageUrl: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Small, dark brown to black circular lesions with distinct target-like concentric rings",
        "Spots coalesce, causing leaf yellowing, shot-holes, and premature leaf dropping",
        "Brown to black sunken spots on curd florets rendering heads unmarketable",
      ],
      causes: "Warm rain and wind-splashed conidia from infected seed or volunteer brassica weeds.",
      favorableWeather: "20°C - 28°C with high relative humidity and dews",
      organicRemedies: [
        {
          title: "Bordeaux Mixture (1%) or Copper Soap Spray",
          recipe: "10g Copper Sulfate + 10g Slaked Lime per 1 Liter water.",
          application: "Apply at first sign of target spots on outer leaves.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Iprodione 50% WP or Mancozeb 75% WP",
          ingredient: "Iprodione / Mancozeb",
          dosage: "2.0 g / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Copper Hydroxide 77% WP Bio-Fungicide",
          type: "Organic Fungicide",
          dosage: "2 g / Liter",
          benefit: "Provides preventative copper shield against Alternaria leaf and curd spotting.",
          searchQuery: "copper hydroxide 77 wp for cauliflower alternaria leaf spot",
          price: "$15.00 / ₹410",
        },
      ],
      videoTutorials: [
        {
          title: "Cauliflower Alternaria Blight: Symptoms & Prevention Guide",
          channel: "Vegetable Pathology Lab",
          query: "cauliflower alternaria brassicae leaf spot curd blight spray",
          duration: "8:10",
        },
      ],
    },
  ],

  // 36. Spinach
  "crop-spinach": [
    {
      id: "dis-spinach-anthracnose",
      cropId: "crop-spinach",
      cropName: "Spinach",
      name: "Spinach Anthracnose",
      scientificName: "Colletotrichum spinaciae",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Small, circular, water-soaked spots that turn papery, translucent, and dirty tan-white",
        "Spots develop tiny black acervuli dots in concentric rings under moist conditions",
        "Severe infection causes leaves to become riddled with holes, drying up completely",
      ],
      causes: "Warm rain splashes carrying fungal conidia in dense, unthinned plantings.",
      favorableWeather: "22°C - 30°C with persistent leaf wetness",
      organicRemedies: [
        {
          title: "Liquid Copper Soap + Bacillus amyloliquefaciens",
          recipe: "3 ml Copper Octanoate + 5 ml Bacillus culture per 1 Liter water.",
          application: "Safe low-residue application suitable for organic edible greens.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Azoxystrobin 23% SC (Heritage)",
          ingredient: "Azoxystrobin",
          dosage: "0.8 ml / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Copper Octanoate Organic Liquid Fungicide",
          type: "Organic Fungicide",
          dosage: "4 ml / Liter",
          benefit: "OMRI-certified copper soap that controls anthracnose with zero leaf scorching.",
          searchQuery: "copper octanoate organic fungicide for spinach anthracnose",
          price: "$18.00 / ₹480",
        },
      ],
      videoTutorials: [
        {
          title: "Spinach Anthracnose: Identification and Organic Protection",
          channel: "Organic Greens Extension",
          query: "spinach anthracnose colletotrichum spinaciae organic control",
          duration: "7:35",
        },
      ],
    },
  ],

  // 37. Lettuce
  "crop-lettuce": [
    {
      id: "dis-lettuce-bottom-rot",
      cropId: "crop-lettuce",
      cropName: "Lettuce",
      name: "Bottom Rot of Lettuce",
      scientificName: "Rhizoctonia solani",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Rust-colored to brown sunken lesions on leaf midribs touching moist soil",
        "Lower leaves rot into a slimy brown mass covered with tan-brown mycelial webbing",
        "Rot spreads upward into the lettuce head, resulting in complete head collapse",
      ],
      causes: "Warm, moist soil touching mature lower leaves as lettuce heads expand.",
      favorableWeather: "20°C - 28°C with high soil moisture and warm nights",
      organicRemedies: [
        {
          title: "Raised Bed Cultivation + Trichoderma harzianum Barrier",
          recipe: "Incorporate 10g Trichoderma harzianum WP per square meter of raised bed.",
          application: "Suppresses Rhizoctonia mycelium in top 5 cm of soil contacting lettuce leaves.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Azoxystrobin 23% SC or Iprodione 50% WP",
          ingredient: "Azoxystrobin",
          dosage: "1.0 ml / Liter water (Directed at base of heads)",
        },
      ],
      recommendedInputs: [
        {
          name: "Trichoderma harzianum Granular Bio-Shield",
          type: "Organic Fungicide",
          dosage: "10 g / sq meter",
          benefit: "Forms protective biological layer on soil surface preventing bottom rot.",
          searchQuery: "trichoderma harzianum for lettuce bottom rot rhizoctonia",
          price: "$14.50 / ₹380",
        },
      ],
      videoTutorials: [
        {
          title: "Preventing Lettuce Bottom Rot (Rhizoctonia) in Field & High Tunnels",
          channel: "Salad Crop Agronomy",
          query: "lettuce bottom rot rhizoctonia solani symptoms prevention",
          duration: "8:25",
        },
      ],
    },
  ],

  // 38. Barley & Oats
  "crop-barley": [
    {
      id: "dis-barley-scald",
      cropId: "crop-barley",
      cropName: "Barley & Oats",
      name: "Barley Scald / Leaf Blotch",
      scientificName: "Rhynchosporium secalis (Rhynchosporium commune)",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Water-soaked, bluish-gray oval lesions that bleach into pale tan/straw-colored centers",
        "Lesions surrounded by prominent dark brown to purple-brown scalloped margins",
        "Spots coalesce, scorching entire leaf blades as if burnt with scalding water",
      ],
      causes: "Cool, rainy weather and splashing spores from infected barley stubble.",
      favorableWeather: "10°C - 18°C with frequent precipitation and leaf wetness",
      organicRemedies: [
        {
          title: "Crop Stubble Tillage + Trichoderma Seed Coating",
          recipe: "10g Trichoderma viride WP per kg seed before planting.",
          application: "Suppresses seed-borne inocula and builds vigorous early root system.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Prothioconazole + Tebuconazole (Prosaro)",
          ingredient: "Prothioconazole + Tebuconazole",
          dosage: "1.0 ml / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Trichoderma viride Certified Cereal Seed Dressing",
          type: "Organic Fungicide",
          dosage: "10 g / kg seed",
          benefit: "Bio-fungicide protecting cereal seedlings from seed-borne scald and net blotch.",
          searchQuery: "trichoderma viride seed treatment for barley scald",
          price: "$11.00 / ₹290",
        },
      ],
      videoTutorials: [
        {
          title: "Barley Scald (Rhynchosporium): Identification & Spray Decisions",
          channel: "Cereal Grain Agronomy",
          query: "barley scald rhynchosporium secalis symptoms control",
          duration: "9:15",
        },
      ],
    },
  ],

  // 39. Sorghum & Millets
  "crop-sorghum": [
    {
      id: "dis-sorghum-ergot",
      cropId: "crop-sorghum",
      cropName: "Sorghum & Millets",
      name: "Sorghum Ergot / Sugary Disease",
      scientificName: "Claviceps africana (Sphacelia sorghi)",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Sticky, sweet, pinkish to amber-colored liquid ('honeydew') dripping from unfertilized flower florets",
        "Honeydew becomes colonized by secondary white powdery molds, attracting swarms of insects",
        "Ovaries are converted into hard, grayish, sclerotial bodies replacing grain kernels",
      ],
      causes: "Cool night temperatures (<19°C) during flowering causing male sterility and open florets.",
      favorableWeather: "18°C - 28°C with high relative humidity (>80%) at flowering",
      organicRemedies: [
        {
          title: "Synchronized Sowing & Seed Salt Brine Flotation",
          recipe: "Float seed in 10% salt water to remove light sclerotia, then wash and dry.",
          application: "Ensures clean seed and avoids cool flowering periods.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Propiconazole 25% EC or Tebuconazole",
          ingredient: "Propiconazole",
          dosage: "1.0 ml / Liter water (At 50% flowering)",
        },
      ],
      recommendedInputs: [
        {
          name: "Propiconazole 25% EC Systemic Protectant",
          type: "Organic Fungicide",
          dosage: "1 ml / Liter",
          benefit: "Provides systemic triazole barrier protecting open sorghum floret ovaries.",
          searchQuery: "propiconazole 25 ec for sorghum ergot sugary disease",
          price: "$16.00 / ₹420",
        },
      ],
      videoTutorials: [
        {
          title: "Sorghum Ergot (Sugary Disease): Honeydew Symptoms & Timing",
          channel: "Dryland Crops Guide",
          query: "sorghum ergot claviceps africana sugary disease management",
          duration: "8:40",
        },
      ],
    },
  ],

  // 40. Pineapple
  "crop-pineapple": [
    {
      id: "dis-pineapple-black-rot",
      cropId: "crop-pineapple",
      cropName: "Pineapple",
      name: "Pineapple Black Rot / Water Blister",
      scientificName: "Ceratocystis paradoxa (Thielaviopsis paradoxa)",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Water-soaked soft rot starting at the fruit stalk cut or harvest wound",
        "Pulp liquefies and turns deep jet black with a sweet fermenting odor",
        "Planting setts rot internally, leaving hollow fibrous shells with zero bud emergence",
      ],
      causes: "Wound-invading fungus entering through harvesting stem snaps or planting sett cuts.",
      favorableWeather: "24°C - 32°C with high relative humidity and bruised fruit rinds",
      organicRemedies: [
        {
          title: "Trichoderma Sett Dip & Curing of Stalk Wounds",
          recipe: "Dip harvest stalk cuts in 10g Trichoderma harzianum/L + air dry in shade for 24 hours.",
          application: "Seals vascular wound before Ceratocystis spores can penetrate.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Carbendazim 50% WP (Post-Harvest Stalk Dip)",
          ingredient: "Carbendazim",
          dosage: "1.0 g / Liter water (Dip stalk cut for 1 minute)",
        },
      ],
      recommendedInputs: [
        {
          name: "Trichoderma harzianum Post-Harvest Protectant",
          type: "Organic Fungicide",
          dosage: "10 g / Liter",
          benefit: "Antagonistic biological agent preventing post-harvest black rot on fruit stems.",
          searchQuery: "trichoderma harzianum for pineapple black rot water blister",
          price: "$14.00 / ₹370",
        },
      ],
      videoTutorials: [
        {
          title: "Pineapple Black Rot: Post-Harvest Stalk Treatment & Wound Care",
          channel: "Tropical Fruit Agronomy",
          query: "pineapple black rot water blister ceratocystis paradoxa treatment",
          duration: "9:05",
        },
      ],
    },
  ],

  // 41. Avocado
  "crop-avocado": [
    {
      id: "dis-avocado-root-rot",
      cropId: "crop-avocado",
      cropName: "Avocado",
      name: "Phytophthora Root Rot",
      scientificName: "Phytophthora cinnamomi",
      pathogenType: "Fungal",
      severityDefault: "Severe",
      referenceImageUrl: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Small feeder roots turn black, brittle, and rot completely away instead of being firm and white",
        "Tree canopy thins progressively with pale, wilted, small leaves that sunburn and drop",
        "Twig dieback in upper canopy ('staghead') with exposed small, sunburned fruit",
      ],
      causes: "Devastating oomycete pathogen attacking feeder roots in poorly drained, waterlogged soils.",
      favorableWeather: "20°C - 30°C in saturated soils with poor drainage",
      organicRemedies: [
        {
          title: "Coarse Woodchip Mulch (15 cm) + Phosphonate Trunk Spray",
          recipe: "Apply 15 cm coarse woodchip mulch up to canopy dripline + spray Potassium Phosphite (3ml/L).",
          application: "Stimulates cellulase enzymes that digest Phytophthora cell walls.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Potassium Phosphonate (Aliette / Phosgard) Trunk Injection",
          ingredient: "Potassium Phosphonate",
          dosage: "20% solution injected into trunk bark during spring and summer flushes",
        },
      ],
      recommendedInputs: [
        {
          name: "Potassium Phosphonate 40% Plant Immunizer",
          type: "Organic Fungicide",
          dosage: "3 ml / Liter",
          benefit: "Standard world-recognized treatment stimulating root regeneration in avocado orchards.",
          searchQuery: "potassium phosphonate for avocado phytophthora root rot",
          price: "$19.00 / ₹490",
        },
      ],
      videoTutorials: [
        {
          title: "Avocado Phytophthora Root Rot: Mulching & Phosphite Injection Guide",
          channel: "Avocado Farming Society",
          query: "avocado root rot phytophthora cinnamomi phosphite trunk injection",
          duration: "11:30",
        },
      ],
    },
  ],

  // 42. Cardamom & Black Pepper
  "crop-black-pepper": [
    {
      id: "dis-black-pepper-pollu",
      cropId: "crop-black-pepper",
      cropName: "Cardamom & Black Pepper",
      name: "Anthracnose / Pollu Disease",
      scientificName: "Colletotrichum gloeosporioides",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Circular to irregular dark brown spots with chlorotic yellow halos on leaves",
        "Developing green berries turn black, dry, crack, and become hollow chaffy shells ('pollu')",
        "Entire fruit spikes drop prematurely, slashing black pepper yield significantly",
      ],
      causes: "Monsoon showers combined with pollu beetle (Longitarsus nigripennis) puncture wounds.",
      favorableWeather: "22°C - 30°C with high relative humidity and rainfall",
      organicRemedies: [
        {
          title: "Bordeaux Mixture (1%) + Cold-Pressed Neem Oil Spray",
          recipe: "10g Copper Sulfate + 10g Slaked Lime + 5ml Neem Oil per 1 Liter water.",
          application: "Apply in June/July (pre-monsoon) and August (mid-monsoon) to protect spikes.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Carbendazim 12% + Mancozeb 63% WP (Saaf)",
          ingredient: "Carbendazim + Mancozeb",
          dosage: "2.0 g / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Bordeaux Mixture 1% Protectant Kit",
          type: "Organic Fungicide",
          dosage: "10 g / Liter",
          benefit: "Certified organic protective shield stopping pollu berry rot in spice plantations.",
          searchQuery: "bordeaux mixture for black pepper pollu anthracnose",
          price: "$14.00 / ₹370",
        },
      ],
      videoTutorials: [
        {
          title: "Black Pepper Pollu Disease & Anthracnose Spike Rot Management",
          channel: "Spices Research Institute",
          query: "black pepper pollu disease anthracnose colletotrichum spray",
          duration: "9:50",
        },
      ],
    },
  ],

  // 43. Sunflower
  "crop-sunflower": [
    {
      id: "dis-sunflower-alternaria",
      cropId: "crop-sunflower",
      cropName: "Sunflower",
      name: "Alternaria Leaf & Stem Blight",
      scientificName: "Alternaria helianthi",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Small, dark brown to black circular lesions surrounded by a yellow chlorotic halo on leaves",
        "Linear black streaks and lesions on main stems and petiole bases causing stem lodging",
        "Heavily blighted leaves wither and drop, leaving flower heads small and poorly filled",
      ],
      causes: "Warm rain and high humidity during vegetative and ray-floret emergence stages.",
      favorableWeather: "25°C - 32°C with frequent rain and high relative humidity (>80%)",
      organicRemedies: [
        {
          title: "Copper Hydroxide + Neem Seed Kernel Extract (5%)",
          recipe: "2.5 g Copper Hydroxide + 50g NSKE filtrate per 1 Liter water.",
          application: "Spray at 35 and 50 days after sowing to safeguard upper canopy foliage.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Mancozeb 75% WP or Propiconazole 25% EC",
          ingredient: "Mancozeb",
          dosage: "2.5 g / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Copper Hydroxide 77% WP Bio-Fungicide",
          type: "Organic Fungicide",
          dosage: "2 g / Liter",
          benefit: "Protects sunflower leaves and flower heads from Alternaria blight infection.",
          searchQuery: "copper hydroxide bio fungicide for sunflower alternaria blight",
          price: "$15.00 / ₹410",
        },
      ],
      videoTutorials: [
        {
          title: "Sunflower Alternaria Blight: Symptoms, Seed Loss & Spray Timing",
          channel: "Oilseed Science Hub",
          query: "sunflower alternaria blight alternaria helianthi symptoms spray",
          duration: "8:50",
        },
      ],
    },
  ],

  // 44. Chickpea & Bengal Gram
  "crop-chickpea": [
    {
      id: "dis-chickpea-ascochyta-blight",
      cropId: "crop-chickpea",
      cropName: "Chickpea & Bengal Gram",
      name: "Ascochyta Blight",
      scientificName: "Ascochyta rabiei",
      pathogenType: "Fungal",
      severityDefault: "Severe",
      referenceImageUrl: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Circular brown spots with dark margins and concentric rings of black pycnidia dots on leaves and pods",
        "Girdling elongated cankers on stems causing branches to break and snap in moderate winds",
        "Pods develop sunken circular lesions that penetrate and discolor developing seeds",
      ],
      causes: "Infected seed and airborne conidia spreading rapidly during cool, cloudy, rainy weather.",
      favorableWeather: "15°C - 22°C with high relative humidity and frequent showers",
      organicRemedies: [
        {
          title: "Hot Water Seed Treatment (50°C) + Trichoderma viride",
          recipe: "Soak seed at 50°C for 20 minutes, followed by 10g Trichoderma viride/kg seed dressing.",
          application: "Destroys seed-borne mycelium before sowing in cool winter fields.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Chlorothalonil 75% WP or Azoxystrobin 23% SC",
          ingredient: "Chlorothalonil",
          dosage: "2.0 g / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Trichoderma viride Certified Seed Dressing",
          type: "Organic Fungicide",
          dosage: "10 g / kg seed",
          benefit: "Protects pulse seedlings from Ascochyta blight and soil-borne root rots.",
          searchQuery: "trichoderma viride seed treatment for chickpea ascochyta blight",
          price: "$11.00 / ₹290",
        },
      ],
      videoTutorials: [
        {
          title: "Chickpea Ascochyta Blight: Early Scouting & Fungicide Decisions",
          channel: "Pulse Agronomy Hub",
          query: "chickpea ascochyta blight ascochyta rabiei symptoms management",
          duration: "10:15",
        },
      ],
    },
    {
      id: "dis-chickpea-fusarium-wilt",
      cropId: "crop-chickpea",
      cropName: "Chickpea & Bengal Gram",
      name: "Fusarium Wilt of Chickpea",
      scientificName: "Fusarium oxysporum f. sp. ciceris",
      pathogenType: "Fungal",
      severityDefault: "Severe",
      referenceImageUrl: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Sudden drooping of petioles and rachis with dull gray-green foliage wilting within 3-4 days",
        "Internal split taproot reveals prominent dark brown to black vascular discoloration in the xylem",
        "Canopy completely dries up and turns straw-colored while adjacent resistant plants remain healthy",
      ],
      causes: "Soil-borne chlamydospores surviving in soil for over 6 years entering through roots.",
      favorableWeather: "22°C - 30°C in warm dry soils during flowering and pod fill",
      organicRemedies: [
        {
          title: "Trichoderma harzianum + Pseudomonas fluorescens Seed & Soil Inoculation",
          recipe: "10g Trichoderma + 10g Pseudomonas per kg seed; apply 2.5 kg each per acre with compost.",
          application: "Colonizes chickpea rhizosphere to block Fusarium fungal penetration.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Carboxin 37.5% + Thiram 37.5% (Vitavax)",
          ingredient: "Carboxin + Thiram",
          dosage: "2.5 g / kg seed",
        },
      ],
      recommendedInputs: [
        {
          name: "Trichoderma harzianum Pulse Bio-Protectant",
          type: "Organic Fungicide",
          dosage: "10 g / kg seed",
          benefit: "Suppresses soil-borne Fusarium wilt inocula around the chickpea root zone.",
          searchQuery: "trichoderma harzianum for chickpea fusarium wilt ciceris",
          price: "$13.00 / ₹340",
        },
      ],
      videoTutorials: [
        {
          title: "Chickpea Fusarium Wilt: Symptoms, Root Discoloration & Management",
          channel: "Grain Legume Research",
          query: "chickpea fusarium wilt fusarium oxysporum ciceris control",
          duration: "9:30",
        },
      ],
    },
  ],

  // 45. Pea & Green Peas
  "crop-pea": [
    {
      id: "dis-pea-powdery-mildew",
      cropId: "crop-pea",
      cropName: "Pea & Green Peas",
      name: "Pea Powdery Mildew",
      scientificName: "Erysiphe pisi",
      pathogenType: "Fungal",
      severityDefault: "High",
      referenceImageUrl: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "White powdery circular fungal spots on upper leaf surfaces rapidly spreading to cover the entire canopy",
        "Stems, tendrils, and pods become encrusted with dirty white dusty mycelium",
        "Infected pods become discolored, small, and develop a bitter unpleasant off-flavor",
      ],
      causes: "Warm dry days (20-25°C) with humid nights during late winter/spring pod formation.",
      favorableWeather: "18°C - 26°C with moderate relative humidity",
      organicRemedies: [
        {
          title: "Wettable Sulfur (80% WDG) or Potassium Bicarbonate Spray",
          recipe: "2.5 g Wettable Sulfur or 3 g Potassium Bicarbonate per 1 Liter water.",
          application: "Spray every 10 days starting at first flower bud emergence.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Hexaconazole 5% EC or Difenoconazole 25% EC",
          ingredient: "Hexaconazole",
          dosage: "1.0 ml / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Micronized Wettable Sulfur 80% WDG",
          type: "Organic Fungicide",
          dosage: "2.5 g / Liter",
          benefit: "Safe organic protectant halting pea powdery mildew spore germination.",
          searchQuery: "wettable sulfur 80 wdg for pea powdery mildew erysiphe pisi",
          price: "$13.00 / ₹350",
        },
      ],
      videoTutorials: [
        {
          title: "Pea Powdery Mildew: Identification, Prevention & Organic Spray",
          channel: "Legume Care Channel",
          query: "pea powdery mildew erysiphe pisi symptoms control wettable sulfur",
          duration: "8:20",
        },
      ],
    },
    {
      id: "dis-pea-downy-mildew",
      cropId: "crop-pea",
      cropName: "Pea & Green Peas",
      name: "Pea Downy Mildew",
      scientificName: "Peronospora viciae (Peronospora pisi)",
      pathogenType: "Fungal",
      severityDefault: "Moderate",
      referenceImageUrl: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=800&q=80",
      healthyReferenceUrl: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=800&q=80",
      symptoms: [
        "Pale yellow to chlorotic patches on the upper surface of leaflets",
        "Fluffy purplish-gray downy mold carpet on the corresponding leaf underside",
        "Pods develop yellowish patches with internal white cottony fungal growth on developing peas",
      ],
      causes: "Cool, wet, overcast weather during early vegetative and flowering stages.",
      favorableWeather: "10°C - 18°C with high relative humidity (>85%) and heavy dew",
      organicRemedies: [
        {
          title: "Copper Hydroxide + Potassium Phosphonate Protectant",
          recipe: "2g Copper Hydroxide + 3ml Potassium Phosphonate per 1 Liter water.",
          application: "Spray at 3-4 leaf node stage and repeat before flowering if overcast weather persists.",
        },
      ],
      chemicalRemedies: [
        {
          title: "Metalaxyl 8% + Mancozeb 64% WP",
          ingredient: "Metalaxyl + Mancozeb",
          dosage: "2.5 g / Liter water",
        },
      ],
      recommendedInputs: [
        {
          name: "Potassium Phosphonate Plant Immunizer",
          type: "Organic Fungicide",
          dosage: "3 ml / Liter",
          benefit: "Elicits natural defense enzymes against oomycete pea downy mildew.",
          searchQuery: "potassium phosphonate for pea downy mildew peronospora",
          price: "$17.00 / ₹460",
        },
      ],
      videoTutorials: [
        {
          title: "Pea Downy Mildew: Scouting, Symptoms & Treatment Plan",
          channel: "Vegetable Agronomy Hub",
          query: "pea downy mildew peronospora viciae symptoms management",
          duration: "7:55",
        },
      ],
    },
  ],
};

/**
 * Additional high-priority agricultural crops to complete the universal encyclopedia
 */
export const ADDITIONAL_CROPS: CropEncyclopediaItem[] = [
  {
    id: "crop-chickpea",
    name: "Chickpea & Bengal Gram",
    scientificName: "Cicer arietinum",
    category: "Legumes & Pulses",
    imageUrl: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80",
    description: "Vital protein-rich pulse crop cultivated in drylands, highly susceptible to Ascochyta Blight and Fusarium Wilt.",
    idealSoil: "Well-drained light to heavy fertile loam, pH 6.0 - 7.8",
    idealTemp: "15°C - 28°C",
    diseases: EXPANDED_CROP_DISEASES["crop-chickpea"] || [],
  },
  {
    id: "crop-pea",
    name: "Pea & Green Peas",
    scientificName: "Pisum sativum",
    category: "Legumes & Pulses",
    imageUrl: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=800&q=80",
    description: "Cool-season sweet legume vegetable harvested for fresh pods and dry pulse, frequently challenged by Powdery Mildew and Downy Mildew.",
    idealSoil: "Friable, well-drained loamy soil, pH 6.0 - 7.5",
    idealTemp: "13°C - 22°C",
    diseases: EXPANDED_CROP_DISEASES["crop-pea"] || [],
  },
];
