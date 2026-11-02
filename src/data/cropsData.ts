import { CropEncyclopediaItem, SampleLeafImage, DiseaseEncyclopediaItem } from "../types";
import { EXPANDED_CROP_DISEASES, ADDITIONAL_CROPS } from "./cropDiseasesExpanded";

export const SAMPLE_LEAF_IMAGES: SampleLeafImage[] = [
  {
    id: "sample-tomato-early-blight",
    crop: "Tomato",
    disease: "Early Blight (Alternaria solani)",
    label: "Tomato Early Blight",
    imageUrl: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80",
    badge: "Fungal • Concentric Rings",
  },
  {
    id: "sample-potato-late-blight",
    crop: "Potato",
    disease: "Late Blight (Phytophthora infestans)",
    label: "Potato Late Blight",
    imageUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
    badge: "Severe Water-Soaked Lesions",
  },
  {
    id: "sample-corn-rust",
    crop: "Corn / Maize",
    disease: "Common Rust (Puccinia sorghi)",
    label: "Corn Leaf Rust",
    imageUrl: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
    badge: "Fungal • Golden Pustules",
  },
  {
    id: "sample-grape-mildew",
    crop: "Grapevine",
    disease: "Powdery Mildew (Uncinula necator)",
    label: "Grape Powdery Mildew",
    imageUrl: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80",
    badge: "White Powdery Foliage",
  },
  {
    id: "sample-chili-leaf-curl",
    crop: "Chili / Pepper",
    disease: "Chili Leaf Curl Virus",
    label: "Chili Leaf Curl",
    imageUrl: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80",
    badge: "Viral • Puckering & Dwarfism",
  },
  {
    id: "sample-rice-blast",
    crop: "Rice / Paddy",
    disease: "Rice Blast (Magnaporthe oryzae)",
    label: "Rice Leaf Blast",
    imageUrl: "/src/assets/images/rice_blast_leaf_1792629988264.jpg",
    badge: "Diamond Lesions • High Threat",
  },
  {
    id: "sample-cotton-blight",
    crop: "Cotton",
    disease: "Bacterial Blight / Angular Leaf Spot",
    label: "Cotton Bacterial Blight",
    imageUrl: "/src/assets/images/cotton_leaf_blight_1792629405149.jpg",
    badge: "Bacterial • Angular Spots",
  },
  {
    id: "sample-cotton-healthy",
    crop: "Cotton",
    disease: "Healthy Foliage & Bolls",
    label: "Healthy Cotton Crop",
    imageUrl: "/src/assets/images/cotton_crop_plant_1792629404896.jpg",
    badge: "100% Healthy • Vigorous Crop",
  },
  {
    id: "sample-citrus-canker",
    crop: "Citrus",
    disease: "Citrus Canker (Xanthomonas)",
    label: "Citrus Canker",
    imageUrl: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=800&q=80",
    badge: "Corky Raised Halos",
  },
  {
    id: "sample-banana-sigatoka",
    crop: "Banana",
    disease: "Black Sigatoka (Pseudocercospora fijiensis)",
    label: "Banana Sigatoka",
    imageUrl: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80",
    badge: "Necrotic Leaf Streaks",
  },
  {
    id: "sample-wheat-rust",
    crop: "Wheat",
    disease: "Stripe / Yellow Rust (Puccinia striiformis)",
    label: "Wheat Yellow Rust",
    imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    badge: "Linear Yellow Pustules",
  },
  {
    id: "sample-sunflower-rust",
    crop: "Sunflower",
    disease: "Sunflower Rust (Puccinia helianthi)",
    label: "Sunflower Rust",
    imageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80",
    badge: "Fungal • Red-Brown Pustules",
  },
  {
    id: "sample-carrot-blight",
    crop: "Carrot",
    disease: "Alternaria Leaf Blight",
    label: "Carrot Leaf Blight",
    imageUrl: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80",
    badge: "Feathery Dark Foliage Necrosis",
  },
  {
    id: "sample-spinach-downy-mildew",
    crop: "Spinach",
    disease: "Spinach Downy Mildew",
    label: "Spinach Downy Mildew",
    imageUrl: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
    badge: "Chlorotic Yellowing & Purple Felt",
  },
  {
    id: "sample-avocado-anthracnose",
    crop: "Avocado",
    disease: "Avocado Anthracnose",
    label: "Avocado Anthracnose",
    imageUrl: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=800&q=80",
    badge: "Necrotic Leaf Tip & Fruit Spots",
  },
  {
    id: "sample-black-pepper-wilt",
    crop: "Cardamom & Black Pepper",
    disease: "Quick Wilt / Foot Rot (Phytophthora)",
    label: "Black Pepper Quick Wilt",
    imageUrl: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80",
    badge: "Sudden Foliage Droop & Collar Rot",
  },
  {
    id: "sample-cauliflower-black-rot",
    crop: "Cauliflower & Broccoli",
    disease: "Black Rot (Xanthomonas)",
    label: "Cauliflower Black Rot",
    imageUrl: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=800&q=80",
    badge: "V-Shaped Marginal Chlorosis",
  },
  {
    id: "sample-onion-purple-blotch",
    crop: "Onion",
    disease: "Purple Blotch (Alternaria porri)",
    label: "Onion Purple Blotch",
    imageUrl: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=800&q=80",
    badge: "Purple Sunken Lesions",
  },
  {
    id: "sample-healthy-pepper",
    crop: "Bell Pepper",
    disease: "Healthy Foliage",
    label: "Healthy Bell Pepper",
    imageUrl: "/src/assets/images/bell_pepper_plant_1792629403792.jpg",
    badge: "100% Healthy • Vigorous Plant",
  },
  {
    id: "sample-bell-pepper-spot",
    crop: "Bell Pepper / Capsicum",
    disease: "Bacterial Leaf Spot",
    label: "Bell Pepper Bacterial Spot",
    imageUrl: "/src/assets/images/bell_pepper_leaf_1792629404913.jpg",
    badge: "Bacterial • Necrotic Halo Lesions",
  },
  {
    id: "sample-guava-wilt",
    crop: "Guava",
    disease: "Guava Wilt & Foliar Spot",
    label: "Guava Wilt & Leaf Spot",
    imageUrl: "/src/assets/images/guava_leaf_disease_1792629402944.jpg",
    badge: "Fungal • Ring Lesions & Chlorosis",
  },
  {
    id: "sample-guava-healthy",
    crop: "Guava",
    disease: "Healthy Foliage & Fruit",
    label: "Healthy Guava Plant",
    imageUrl: "/src/assets/images/guava_plant_branch_1792629401977.jpg",
    badge: "100% Healthy • Vigorous Foliage",
  },
  {
    id: "sample-rice-healthy",
    crop: "Rice / Paddy",
    disease: "Healthy Foliage & Tillers",
    label: "Healthy Rice Crop",
    imageUrl: "/src/assets/images/rice_paddy_crop_1792629987130.jpg",
    badge: "100% Healthy • Vigorous Paddy",
  },
  {
    id: "sample-sugarcane-red-rot",
    crop: "Sugarcane",
    disease: "Red Rot of Sugarcane",
    label: "Sugarcane Red Rot",
    imageUrl: "/src/assets/images/sugarcane_red_rot_1792629986592.jpg",
    badge: "Fungal • Internal Red Rot & Stalk Wilt",
  },
  {
    id: "sample-sugarcane-healthy",
    crop: "Sugarcane",
    disease: "Healthy Foliage & Canes",
    label: "Healthy Sugarcane Crop",
    imageUrl: "/src/assets/images/sugarcane_crop_plant_1792629986075.jpg",
    badge: "100% Healthy • Vigorous Canes",
  },
  {
    id: "sample-mustard-white-rust",
    crop: "Mustard & Rapeseed",
    disease: "White Rust / White Blister",
    label: "Mustard White Rust",
    imageUrl: "/src/assets/images/mustard_white_rust_1792629988832.jpg",
    badge: "Fungal • White Pustules & Chlorosis",
  },
  {
    id: "sample-mustard-healthy",
    crop: "Mustard & Rapeseed",
    disease: "Healthy Canopy & Flowers",
    label: "Healthy Mustard Crop",
    imageUrl: "/src/assets/images/mustard_crop_plant_1792629989141.jpg",
    badge: "100% Healthy • Blooming Yellow",
  },
];

const BASE_CROPS_DATABASE: CropEncyclopediaItem[] = [
  // 1. Tomato
  {
    id: "crop-tomato",
    name: "Tomato",
    scientificName: "Solanum lycopersicum",
    category: "Vegetables",
    imageUrl: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80",
    description: "Major solanaceous crop susceptible to foliar blights, mosaic viruses, and bacterial spots in warm humid climates.",
    idealSoil: "Well-drained loamy soil, pH 6.0 - 6.8 rich in organic matter",
    idealTemp: "21°C - 29°C (70°F - 85°F)",
    diseases: [
      {
        id: "dis-tomato-early-blight",
        cropId: "crop-tomato",
        cropName: "Tomato",
        name: "Early Blight",
        scientificName: "Alternaria solani",
        pathogenType: "Fungal",
        severityDefault: "Moderate",
        referenceImageUrl: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Target-like dark brown concentric rings on older lower leaves",
          "Surrounding yellow chlorotic halo around leaf spots",
          "Lower foliage premature yellowing, drying, and leaf drop",
          "Collar rot lesions at the soil level on seedlings",
        ],
        causes: "Warm temperatures (24-29°C) combined with high humidity, dew, or overhead sprinkler irrigation.",
        favorableWeather: "24°C - 30°C with >80% relative humidity",
        organicRemedies: [
          {
            title: "Cold-Pressed Neem Oil & Soap Emulsion",
            recipe: "Mix 5 ml pure Neem Oil + 2 ml liquid castile soap into 1 Liter of lukewarm water.",
            application: "Spray foliar canopy thoroughly every 5-7 days in early morning or sunset.",
          },
          {
            title: "Baking Soda Bio-Fungicide Spray",
            recipe: "1 tbsp sodium bicarbonate + 1 tsp vegetable oil + 1 liter water.",
            application: "Alkalizes leaf surface, arresting fungal spore germination.",
          },
          {
            title: "Trichoderma viride Bio-Shield",
            recipe: "10g Trichoderma viride WP per 1 Liter water as foliar & soil drench.",
            application: "Colonizes leaf and rhizosphere, outcompeting Alternaria mycelium.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Copper Oxychloride 50% WP",
            ingredient: "Copper Oxychloride (50%)",
            dosage: "2.5 g / Liter water (Wait 3 days before harvesting)",
          },
          {
            title: "Mancozeb 75% WP",
            ingredient: "Mancozeb",
            dosage: "2.0 g / Liter water (Pre-harvest interval 7 days)",
          },
        ],
        recommendedInputs: [
          {
            name: "Organic Cold-Pressed Neem Oil 10,000 PPM",
            type: "Neem Spray",
            dosage: "5 ml / Liter",
            benefit: "Natural antifeedant and broad-spectrum antifungal spore inhibitor.",
            searchQuery: "organic cold pressed neem oil 10000 ppm for plant disease",
            price: "$14.99 / ₹380",
          },
          {
            name: "Trichoderma viride Bio-Fungicide WP",
            type: "Organic Fungicide",
            dosage: "10 g / Liter",
            benefit: "Biological antagonistic fungus controlling soil and foliar blights.",
            searchQuery: "trichoderma viride bio fungicide organic powder",
            price: "$11.50 / ₹290",
          },
        ],
        videoTutorials: [
          {
            title: "Identifying & Treating Tomato Early Blight Organically",
            channel: "Organic Gardening & Farming Hub",
            query: "how to identify and treat tomato early blight organically",
            duration: "8:45",
          },
        ],
      },
      {
        id: "dis-tomato-leaf-curl",
        cropId: "crop-tomato",
        cropName: "Tomato",
        name: "Tomato Yellow Leaf Curl Virus (TYLCV)",
        scientificName: "Begomovirus",
        pathogenType: "Viral",
        severityDefault: "Severe",
        referenceImageUrl: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Severe upward curling and cupping of leaflets",
          "Interveinal chlorosis and yellow margins",
          "Stunted, bushy plant architecture with flower drop",
        ],
        causes: "Transmitted by Bemisia tabaci (Silverleaf Whitefly) vector during dry warm weather.",
        favorableWeather: "28°C - 38°C with active whitefly populations",
        organicRemedies: [
          {
            title: "Yellow Sticky Traps & Neem Repellent",
            recipe: "Place 15-20 yellow sticky traps per acre + spray 5ml Neem Oil/Liter weekly.",
            application: "Traps adult whiteflies and disrupts reproductive cycle.",
          },
          {
            title: "Beauveria bassiana Bio-Insecticide",
            recipe: "5g Beauveria bassiana wettable powder per 1 Liter water.",
            application: "Entomopathogenic fungus that parasitizes and destroys whiteflies.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Acetamiprid 20% SP",
            ingredient: "Acetamiprid",
            dosage: "0.4 g / Liter water (Targeting whitefly vectors)",
          },
        ],
        recommendedInputs: [
          {
            name: "Beauveria bassiana Bio-Pesticide",
            type: "Bio-Pesticide",
            dosage: "5 g / Liter",
            benefit: "Organic bio-agent eradicating whiteflies, thrips, and aphids.",
            searchQuery: "beauveria bassiana organic bio insecticide for whiteflies",
            price: "$15.20 / ₹420",
          },
        ],
        videoTutorials: [
          {
            title: "Managing Tomato Yellow Leaf Curl Virus and Whiteflies",
            channel: "Integrated Pest Management Guide",
            query: "how to control tomato leaf curl virus whitefly management",
            duration: "10:15",
          },
        ],
      },
    ],
  },

  // 2. Potato
  {
    id: "crop-potato",
    name: "Potato",
    scientificName: "Solanum tuberosum",
    category: "Vegetables",
    imageUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
    description: "Cool-season tuber crop highly vulnerable to devastating late blight outbreaks during cool, misty weather.",
    idealSoil: "Loose, well-aerated sandy loam, pH 5.2 - 6.4",
    idealTemp: "15°C - 20°C (59°F - 68°F)",
    diseases: [
      {
        id: "dis-potato-late-blight",
        cropId: "crop-potato",
        cropName: "Potato",
        name: "Late Blight",
        scientificName: "Phytophthora infestans",
        pathogenType: "Fungal",
        severityDefault: "Severe",
        referenceImageUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Large, irregular water-soaked dark green/black lesions on leaf tips and margins",
          "White fluffy sporulation on leaf underside in humid conditions",
          "Rapid collapse of foliage with foul decaying odor within 48-72 hours",
        ],
        causes: "Oomycete pathogen thriving in cool (12-20°C), foggy, rain-soaked overcast weather.",
        favorableWeather: "10°C - 22°C with >90% humidity or continuous rain",
        organicRemedies: [
          {
            title: "Bordeaux Mixture / Copper Sulfate Protectant",
            recipe: "1% Bordeaux mixture (10g copper sulfate + 10g slaked lime per 1 Liter water).",
            application: "Apply proactively before rain events to protect healthy foliage.",
          },
          {
            title: "Potassium Phosphonate (Phosphite) Bio-Elicitor",
            recipe: "3 ml Potassium Phosphonate per 1 Liter water.",
            application: "Stimulates systemic acquired resistance (SAR) in potato plants against Phytophthora.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Metalaxyl 8% + Mancozeb 64% WP",
            ingredient: "Metalaxyl + Mancozeb (Ridomil MZ)",
            dosage: "2.5 g / Liter water (Systemic curative and contact protectant)",
          },
          {
            title: "Cymoxanil 8% + Mancozeb 64% WP",
            ingredient: "Cymoxanil + Mancozeb",
            dosage: "2.0 g / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Bordeaux Mixture Organic Copper Protectant",
            type: "Organic Fungicide",
            dosage: "10 g / Liter",
            benefit: "Proven certified organic shield preventing late blight spore entry.",
            searchQuery: "bordeaux mixture copper fungicide organic for potato late blight",
            price: "$12.80 / ₹340",
          },
          {
            name: "Potassium Phosphonate Plant Immunizer",
            type: "Organic Fungicide",
            dosage: "3 ml / Liter",
            benefit: "Activates crop phytoalexins against oomycete pathogens.",
            searchQuery: "potassium phosphonate systemic bio fungicide",
            price: "$19.00 / ₹490",
          },
        ],
        videoTutorials: [
          {
            title: "Controlling Potato Late Blight Organic vs Chemical",
            channel: "AgriScience Tuber Care",
            query: "potato late blight phytophthora management organic fungicides",
            duration: "11:20",
          },
        ],
      },
    ],
  },

  // 3. Eggplant / Brinjal
  {
    id: "crop-eggplant",
    name: "Eggplant / Brinjal",
    scientificName: "Solanum melongena",
    category: "Vegetables",
    imageUrl: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
    description: "Warm-season nightshade vegetable subject to Phomopsis fruit and leaf rot, bacterial wilt, and shoot borer attacks.",
    idealSoil: "Deep, fertile, well-drained loam, pH 6.2 - 7.0",
    idealTemp: "22°C - 32°C",
    diseases: [
      {
        id: "dis-eggplant-phomopsis",
        cropId: "crop-eggplant",
        cropName: "Eggplant / Brinjal",
        name: "Phomopsis Blight & Fruit Rot",
        scientificName: "Phomopsis vexans",
        pathogenType: "Fungal",
        severityDefault: "High",
        referenceImageUrl: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Circular, light brown to dark brown spots on leaves that turn irregular and necrotic",
          "Tiny black pycnidia dots visible in concentric rows inside old spots",
          "Pale, sunken soft spots on maturing fruits that rot the entire pulp",
        ],
        causes: "Warm rain and wind-splashed spores from soil debris and uncertified seed.",
        favorableWeather: "25°C - 32°C with high humidity",
        organicRemedies: [
          {
            title: "Copper Hydroxide + Trichoderma Spray",
            recipe: "2g Copper Hydroxide per Liter foliar spray, followed 4 days later by Trichoderma viride drench.",
            application: "Eradicates active fungal fruiting bodies and protects emerging foliage.",
          },
          {
            title: "Panchagavya Organic Bio-Booster",
            recipe: "30 ml fermented Panchagavya per 1 Liter water.",
            application: "Enhances foliar immunity and thickens leaf cuticular barrier.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Carbendazim 50% WP",
            ingredient: "Carbendazim",
            dosage: "1.0 g / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Pure Cold-Pressed Organic Neem Oil",
            type: "Neem Spray",
            dosage: "5 ml / Liter",
            benefit: "Prevents borer entry and fungal spore attachment.",
            searchQuery: "organic neem oil spray for brinjal eggplant pests",
            price: "$13.50 / ₹350",
          },
        ],
        videoTutorials: [
          {
            title: "Managing Brinjal Phomopsis Blight & Fruit Rot",
            channel: "Horticulture Care Channel",
            query: "brinjal phomopsis blight identification and organic remedy",
            duration: "7:40",
          },
        ],
      },
    ],
  },

  // 4. Chili / Hot Pepper
  {
    id: "crop-chili",
    name: "Chili & Hot Pepper",
    scientificName: "Capsicum annuum",
    category: "Vegetables",
    imageUrl: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80",
    description: "Widely cultivated spicy solanaceous fruit sensitive to leaf curl complex (thrips/mites/begomovirus) and anthracnose dieback.",
    idealSoil: "Well-drained sandy loam or clay loam, pH 6.5 - 7.5",
    idealTemp: "20°C - 35°C",
    diseases: [
      {
        id: "dis-chili-leaf-curl",
        cropId: "crop-chili",
        cropName: "Chili & Hot Pepper",
        name: "Chili Leaf Curl Virus & Thrips Infestation",
        scientificName: "Chili Leaf Curl Begomovirus / Scirtothrips dorsalis",
        pathogenType: "Viral",
        severityDefault: "High",
        referenceImageUrl: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Upward boat-shaped curling of leaves caused by thrips feeding",
          "Downward inverted boat curling when broad mites attack",
          "Severe crinkling, thickening of leaf veins, and stunted fruiting branches",
        ],
        causes: "Sucking insects (thrips, yellow mites, whiteflies) spreading viral particles during warm dry spells.",
        favorableWeather: "27°C - 36°C with dry sunny conditions",
        organicRemedies: [
          {
            title: "Sour Buttermilk & Fermented Garlic-Chili Extract",
            recipe: "50 ml sour churned buttermilk + 10 ml fresh garlic extract per 1 Liter water.",
            application: "Sulfur in garlic and lactic acid repel mites and boost surface resilience.",
          },
          {
            title: "Wettable Sulfur + Cold-Pressed Neem Oil",
            recipe: "2 g Wettable Sulfur + 4 ml Neem Oil per 1 Liter water.",
            application: "Knocks down both yellow mites and powdery mildew in one application.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Fipronil 5% SC or Diafenthiuron 50% WP",
            ingredient: "Diafenthiuron (50% WP)",
            dosage: "1.2 g / Liter water (Targeting sucking pest vectors)",
          },
        ],
        recommendedInputs: [
          {
            name: "Organic Wettable Sulfur 80% WDG",
            type: "Organic Fungicide",
            dosage: "2 g / Liter",
            benefit: "Dual action acaricide for mites and organic fungicide for mildew.",
            searchQuery: "organic wettable sulfur 80 wdg for chili powdery mildew mites",
            price: "$14.00 / ₹370",
          },
        ],
        videoTutorials: [
          {
            title: "Stop Chili Leaf Curl: Natural Organic Recipe",
            channel: "Agri Expert Field Guide",
            query: "how to control chili leaf curl organically sour buttermilk neem",
            duration: "9:10",
          },
        ],
      },
    ],
  },

  // 5. Bell Pepper / Capsicum
  {
    id: "crop-bell-pepper",
    name: "Bell Pepper / Capsicum",
    scientificName: "Capsicum annuum var. grossum",
    category: "Vegetables",
    imageUrl: "/src/assets/images/bell_pepper_plant_1792629403792.jpg",
    description: "High-value sweet pepper grown in polyhouses and open fields, prone to bacterial spot and blossom end rot.",
    idealSoil: "Rich loamy soil with high organic matter, pH 6.0 - 6.8",
    idealTemp: "18°C - 28°C",
    diseases: [
      {
        id: "dis-capsicum-bacterial-spot",
        cropId: "crop-bell-pepper",
        cropName: "Bell Pepper / Capsicum",
        name: "Bacterial Leaf Spot",
        scientificName: "Xanthomonas campestris pv. vesicatoria",
        pathogenType: "Bacterial",
        severityDefault: "Moderate",
        referenceImageUrl: "/src/assets/images/bell_pepper_leaf_1792629404913.jpg",
        healthyReferenceUrl: "/src/assets/images/bell_pepper_plant_1792629403792.jpg",
        symptoms: [
          "Small, circular to irregular water-soaked spots on leaves",
          "Spots turn dark brown with straw-colored centers and greasy margins",
          "Extensive defoliation exposing peppers to sunscald",
        ],
        causes: "Bacterial contamination through stomata during heavy rainstorms or wet greenhouse condensation.",
        favorableWeather: "24°C - 30°C with high relative humidity (>85%)",
        organicRemedies: [
          {
            title: "Liquid Copper Octanoate Spray",
            recipe: "4 ml Copper Octanoate per 1 Liter water.",
            application: "Safe organic copper soap that controls bacterial blights with low residue.",
          },
          {
            title: "Pseudomonas fluorescens Bio-Bactericide",
            recipe: "10 g Pseudomonas fluorescens powder per 1 Liter water.",
            application: "Produces phenazine antibiotics that suppress Xanthomonas colonization.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Copper Oxychloride + Streptocycline",
            ingredient: "Streptomycin sulphate + COC",
            dosage: "0.1g Streptocycline + 2.5g Copper Oxychloride / Liter",
          },
        ],
        recommendedInputs: [
          {
            name: "Pseudomonas fluorescens Bio-Bactericide WP",
            type: "Organic Fungicide",
            dosage: "10 g / Liter",
            benefit: "Biological antagonistic bacterium protecting roots and foliage.",
            searchQuery: "pseudomonas fluorescens bio bactericide powder",
            price: "$12.00 / ₹310",
          },
        ],
        videoTutorials: [
          {
            title: "Managing Bacterial Spot in Capsicum & Greenhouse Bell Peppers",
            channel: "Greenhouse Tech Hub",
            query: "capsicum bacterial spot management xanthomonas",
            duration: "8:25",
          },
        ],
      },
    ],
  },

  // 6. Cucumber
  {
    id: "crop-cucumber",
    name: "Cucumber",
    scientificName: "Cucumis sativus",
    category: "Vegetables",
    imageUrl: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=800&q=80",
    description: "Fast-growing vine crop prone to downy mildew, powdery mildew, and mosaic viruses.",
    idealSoil: "Well-drained sandy loam, pH 6.0 - 7.0",
    idealTemp: "20°C - 30°C",
    diseases: [
      {
        id: "dis-cucumber-downy-mildew",
        cropId: "crop-cucumber",
        cropName: "Cucumber",
        name: "Downy Mildew",
        scientificName: "Pseudoperonospora cubensis",
        pathogenType: "Fungal",
        severityDefault: "Severe",
        referenceImageUrl: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Angular, bright yellow chlorotic patches strictly restricted by leaf veins ('checkerboard pattern')",
          "Purplish-grey to black downy mold growth on leaf undersides during moist mornings",
          "Leaves turn brown, curl up, and scorch as if burnt by frost",
        ],
        causes: "Airborne spores carried by humid breezes during cool nights followed by warm dewy mornings.",
        favorableWeather: "15°C - 24°C with leaf wetness > 6 hours",
        organicRemedies: [
          {
            title: "Hydrogen Peroxide (3%) & Potassium Bicarbonate",
            recipe: "10 ml 3% Hydrogen Peroxide + 3 g Potassium Bicarbonate per 1 Liter water.",
            application: "Instantly oxidizes active sporangia and raises pH to prevent reinfection.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Dimethomorph 50% WP or Cymoxanil",
            ingredient: "Dimethomorph",
            dosage: "1.0 g / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Potassium Bicarbonate Organic Bio-Fungicide",
            type: "Organic Fungicide",
            dosage: "4 g / Liter",
            benefit: "Eco-friendly broad-spectrum curative cure for downy and powdery mildews.",
            searchQuery: "potassium bicarbonate organic bio fungicide for cucurbits",
            price: "$16.50 / ₹430",
          },
        ],
        videoTutorials: [
          {
            title: "Cucumber Downy Mildew Symptoms & Immediate Organic Fix",
            channel: "Market Gardener Hub",
            query: "cucumber downy mildew identification treatment organic",
            duration: "7:15",
          },
        ],
      },
    ],
  },

  // 7. Cabbage & Cauliflower
  {
    id: "crop-cabbage",
    name: "Cabbage & Cauliflower",
    scientificName: "Brassica oleracea",
    category: "Vegetables",
    imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=800&q=80",
    description: "Cruciferous brassica crops susceptible to Black Rot, Clubroot, and Diamondback Moth (DBM) caterpillars.",
    idealSoil: "Heavy, well-drained loamy soil, pH 6.5 - 7.5",
    idealTemp: "15°C - 22°C",
    diseases: [
      {
        id: "dis-cabbage-black-rot",
        cropId: "crop-cabbage",
        cropName: "Cabbage & Cauliflower",
        name: "Black Rot",
        scientificName: "Xanthomonas campestris pv. campestris",
        pathogenType: "Bacterial",
        severityDefault: "High",
        referenceImageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Distinct V-shaped yellow chlorotic lesions starting at leaf margins with point facing the midrib",
          "Leaf veins inside the yellow lesion turn dark brown to pitch black",
          "Cross-section of stem shows a distinct black vascular ring with soft rot",
        ],
        causes: "Bacteria enter through hydathodes (water pores on leaf edges) during warm dewy mornings.",
        favorableWeather: "25°C - 30°C with persistent rain or dew",
        organicRemedies: [
          {
            title: "Hot Water Seed Treatment + Neem Spray",
            recipe: "Soak seeds at 50°C for 25 minutes prior to sowing + spray 5ml Neem Oil/L.",
            application: "Kills seed-borne bacterial inoculum before transplanting.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Copper Oxychloride + Streptocycline",
            ingredient: "COC 50% WP + Streptomycin",
            dosage: "2.5 g COC + 0.1 g Streptocycline per Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Bacillus subtilis Bio-Fungicide & Bactericide",
            type: "Organic Fungicide",
            dosage: "5 g / Liter",
            benefit: "Naturally colonizes crucifer leaf pores to block bacterial entry.",
            searchQuery: "bacillus subtilis bio fungicide organic bactericide powder",
            price: "$17.00 / ₹460",
          },
        ],
        videoTutorials: [
          {
            title: "Crucifer Black Rot: Identification & Cultural Control",
            channel: "Brassica Care Experts",
            query: "cabbage black rot xanthomonas symptoms prevention",
            duration: "9:00",
          },
        ],
      },
    ],
  },

  // 8. Okra / Ladyfinger
  {
    id: "crop-okra",
    name: "Okra / Ladyfinger",
    scientificName: "Abelmoschus esculentus",
    category: "Vegetables",
    imageUrl: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=800&q=80",
    description: "Heat-tolerant vegetable crop known for high fiber pods, frequently devastated by Yellow Vein Mosaic Virus (YVMV).",
    idealSoil: "Sandy loam to clay loam, pH 6.0 - 7.5",
    idealTemp: "25°C - 35°C",
    diseases: [
      {
        id: "dis-okra-yvmv",
        cropId: "crop-okra",
        cropName: "Okra / Ladyfinger",
        name: "Yellow Vein Mosaic Virus (YVMV)",
        scientificName: "Bhendi Yellow Vein Mosaic Begomovirus",
        pathogenType: "Viral",
        severityDefault: "Severe",
        referenceImageUrl: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Complete yellowing of leaf veins forming a bright yellow network on a green background",
          "Severe vein thickening, dwarfing, and hardening of leaves",
          "Pods turn pale, yellowish-white, deformed, and small",
        ],
        causes: "Whitefly (Bemisia tabaci) vectors spreading virus rapidly across fields.",
        favorableWeather: "28°C - 38°C with dry conditions",
        organicRemedies: [
          {
            title: "Yellow Sticky Sheets & Neem Azadirachtin Spray",
            recipe: "Azadirachtin 10,000 ppm at 3 ml/Liter every 5 days.",
            application: "Repels whitefly vector and prevents feeding transmission.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Thiamethoxam 25% WG",
            ingredient: "Thiamethoxam",
            dosage: "0.5 g / Liter water (Systemic vector control)",
          },
        ],
        recommendedInputs: [
          {
            name: "High-Potency Neem Azadirachtin 10000 PPM",
            type: "Neem Spray",
            dosage: "3 ml / Liter",
            benefit: "Blocks whitefly feeding and halts viral transmission in okra.",
            searchQuery: "azadirachtin 10000 ppm organic neem extract for whiteflies",
            price: "$18.00 / ₹480",
          },
        ],
        videoTutorials: [
          {
            title: "Okra Yellow Vein Mosaic Virus: Complete Management",
            channel: "Vegetable Farming Guide",
            query: "okra yellow vein mosaic virus control organic chemical",
            duration: "8:50",
          },
        ],
      },
    ],
  },

  // 9. Onion
  {
    id: "crop-onion",
    name: "Onion",
    scientificName: "Allium cepa",
    category: "Vegetables",
    imageUrl: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=800&q=80",
    description: "Essential bulb crop heavily affected by Purple Blotch, Stemphylium blight, and thrips.",
    idealSoil: "Friable sandy loam with good drainage, pH 6.0 - 7.0",
    idealTemp: "13°C - 28°C",
    diseases: [
      {
        id: "dis-onion-purple-blotch",
        cropId: "crop-onion",
        cropName: "Onion",
        name: "Purple Blotch",
        scientificName: "Alternaria porri",
        pathogenType: "Fungal",
        severityDefault: "High",
        referenceImageUrl: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Small, sunken, water-soaked lesions with distinct purple to dark violet centers on tubular leaves",
          "Lesions expand rapidly with concentric rings, turning yellow and collapsing foliage",
          "Premature dying of foliage leading to undersized, rotten bulbs",
        ],
        causes: "Spreads in warm humid weather and overhead sprinkler irrigation.",
        favorableWeather: "22°C - 30°C with >80% relative humidity",
        organicRemedies: [
          {
            title: "Garlic + Wood Ash Bio-Extract",
            recipe: "50g wood ash + 20g crushed garlic strained in 1 Liter water + 2ml sticker.",
            application: "Provides potassium and silica while allicin suppresses fungal growth.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Mancozeb 75% WP + Difenoconazole",
            ingredient: "Difenoconazole 25% EC",
            dosage: "1.0 ml / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Organic Liquid Sulfur & Bio-Fungicide",
            type: "Organic Fungicide",
            dosage: "3 ml / Liter",
            benefit: "Strengthens allium leaf wax and inhibits Alternaria conidia.",
            searchQuery: "organic bio fungicide for onion purple blotch alternaria",
            price: "$14.50 / ₹390",
          },
        ],
        videoTutorials: [
          {
            title: "Controlling Onion Purple Blotch & Stemphylium Blight",
            channel: "Allium Growers Network",
            query: "onion purple blotch alternaria porri chemical organic control",
            duration: "10:05",
          },
        ],
      },
    ],
  },

  // 10. Garlic
  {
    id: "crop-garlic",
    name: "Garlic",
    scientificName: "Allium sativum",
    category: "Spices & Herbs",
    imageUrl: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=800&q=80",
    description: "High-value pungent culinary bulb susceptible to Allium rust, basal rot, and white rot in cool soils.",
    idealSoil: "Rich sandy loam high in organic matter, pH 6.2 - 7.0",
    idealTemp: "12°C - 24°C",
    diseases: [
      {
        id: "dis-garlic-rust",
        cropId: "crop-garlic",
        cropName: "Garlic",
        name: "Garlic Leaf Rust",
        scientificName: "Puccinia allii",
        pathogenType: "Fungal",
        severityDefault: "Moderate",
        referenceImageUrl: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Small, circular to elongated bright orange-yellow pustules on leaf surface",
          "Pustules rupture releasing powdery orange urediniospores",
          "Severe infection causes premature drying of foliage and stunted bulb development",
        ],
        causes: "High humidity (>90%) with cool temperatures (10-15°C) and excessive nitrogen fertilization.",
        favorableWeather: "10°C - 18°C with frequent dew",
        organicRemedies: [
          {
            title: "Potassium Silicate + Neem Oil",
            recipe: "2 ml Potassium Silicate + 4 ml Neem Oil per 1 Liter water.",
            application: "Silica deposits in leaf cuticle making it impenetrable to rust haustoria.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Azoxystrobin 23% SC",
            ingredient: "Azoxystrobin",
            dosage: "1.0 ml / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Potassium Silicate Plant Strengthener",
            type: "Micro-Nutrient",
            dosage: "2 ml / Liter",
            benefit: "Deposits natural silica shield blocking fungal rust penetration.",
            searchQuery: "potassium silicate organic foliar spray for plant resistance",
            price: "$15.00 / ₹410",
          },
        ],
        videoTutorials: [
          {
            title: "Garlic Rust: Identification, Prevention, and Cure",
            channel: "Garlic Gardening Academy",
            query: "how to identify and treat garlic rust puccinia allii",
            duration: "8:10",
          },
        ],
      },
    ],
  },

  // 11. Rice / Paddy
  {
    id: "crop-rice",
    name: "Rice / Paddy",
    scientificName: "Oryza sativa",
    category: "Cereals & Grains",
    imageUrl: "/src/assets/images/rice_paddy_crop_1792629987130.jpg",
    description: "Primary staple food crop grown worldwide under flooded conditions, vulnerable to Rice Blast and Bacterial Leaf Blight.",
    idealSoil: "Heavy clay or clay loam holding moisture, pH 5.5 - 6.5",
    idealTemp: "22°C - 32°C",
    diseases: [
      {
        id: "dis-rice-blast",
        cropId: "crop-rice",
        cropName: "Rice / Paddy",
        name: "Rice Blast (Magnaporthe oryzae)",
        scientificName: "Pyricularia oryzae / Magnaporthe oryzae",
        pathogenType: "Fungal",
        severityDefault: "Severe",
        referenceImageUrl: "/src/assets/images/rice_blast_leaf_1792629988264.jpg",
        healthyReferenceUrl: "/src/assets/images/rice_paddy_crop_1792629987130.jpg",
        symptoms: [
          "Spindle-shaped / diamond-shaped lesions with gray or whitish centers and reddish-brown margins",
          "Neck blast causing blackening of panicle base and empty, bleached grains ('whiteheads')",
          "Rapid coalescing of lesions causing total seedling wilting ('blast burn')",
        ],
        causes: "Excessive chemical nitrogen application, long dew periods, and cool night temperatures (18-24°C).",
        favorableWeather: "20°C - 26°C with >90% humidity and heavy dew",
        organicRemedies: [
          {
            title: "Pseudomonas fluorescens Seed & Foliar Treatment",
            recipe: "10g Pseudomonas fluorescens / kg seed treatment + 5g/Liter foliar spray at tillering.",
            application: "Induces systemic resistance and produces 2,4-diacetylphloroglucinol against blast.",
          },
          {
            title: "Fermented Panchagavya + Cow Urine Bio-Spray",
            recipe: "30 ml Panchagavya + 20 ml cow urine per 1 Liter water.",
            application: "Supplies beneficial microbes and plant nutrients without fungal-attracting nitrate spikes.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Tricyclazole 75% WP",
            ingredient: "Tricyclazole",
            dosage: "0.6 g / Liter water (Targeting leaf and neck blast)",
          },
          {
            title: "Isoprothiolane 40% EC",
            ingredient: "Isoprothiolane",
            dosage: "1.5 ml / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Pseudomonas fluorescens Bio-Control for Rice",
            type: "Organic Fungicide",
            dosage: "10 g / Liter",
            benefit: "Official ICAR-recommended bio-control for blast and sheath blight.",
            searchQuery: "pseudomonas fluorescens bio control powder for paddy rice blast",
            price: "$13.00 / ₹320",
          },
          {
            name: "Organic Liquid Silica Bio-Stimulant",
            type: "Micro-Nutrient",
            dosage: "3 ml / Liter",
            benefit: "Strengthens rice culms and leaf silica cells, stopping blast penetration.",
            searchQuery: "organic liquid silica fertilizer for rice blast resistance",
            price: "$17.50 / ₹450",
          },
        ],
        videoTutorials: [
          {
            title: "Complete Rice Blast Disease Management (Leaf & Neck Blast)",
            channel: "Rice Farming Academy",
            query: "rice blast disease identification tricyclazole pseudomonas",
            duration: "12:40",
          },
        ],
      },
    ],
  },

  // 12. Wheat
  {
    id: "crop-wheat",
    name: "Wheat",
    scientificName: "Triticum aestivum",
    category: "Cereals & Grains",
    imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    description: "Major temperate cereal grain crop susceptible to yellow/stripe rust, leaf rust, and loose smut.",
    idealSoil: "Well-drained fertile loam, pH 6.0 - 7.5",
    idealTemp: "12°C - 25°C",
    diseases: [
      {
        id: "dis-wheat-yellow-rust",
        cropId: "crop-wheat",
        cropName: "Wheat",
        name: "Yellow / Stripe Rust",
        scientificName: "Puccinia striiformis f. sp. tritici",
        pathogenType: "Fungal",
        severityDefault: "Severe",
        referenceImageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Narrow, bright yellow to orange stripes formed by parallel rows of powdery pustules on leaves",
          "Leaves turn yellow, dry up, and appear as if scorched by heat",
          "Shrinkage of wheat grains and massive yield losses up to 70%",
        ],
        causes: "Airborne urediniospores carried over long distances during cool, humid winter/spring seasons.",
        favorableWeather: "10°C - 15°C with intermittent mist and high humidity",
        organicRemedies: [
          {
            title: "Potassium Silicate + Bacillus subtilis Spray",
            recipe: "3g Potassium Silicate + 5g Bacillus subtilis per 1 Liter water.",
            application: "Fortifies leaf epidermis and colonizes leaf microflora.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Propiconazole 25% EC (Tilt)",
            ingredient: "Propiconazole",
            dosage: "1.0 ml / Liter water",
          },
          {
            title: "Tebuconazole 25.9% EC",
            ingredient: "Tebuconazole",
            dosage: "1.0 ml / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Propiconazole 25% EC Systemic Fungicide",
            type: "Organic Fungicide",
            dosage: "1 ml / Liter",
            benefit: "Highly potent triazole fungicide arresting wheat stripe rust instantly.",
            searchQuery: "propiconazole 25 ec fungicide for wheat yellow rust",
            price: "$16.00 / ₹420",
          },
        ],
        videoTutorials: [
          {
            title: "Wheat Stripe / Yellow Rust Identification & Spray Schedule",
            channel: "Cereal Science & Agronomy",
            query: "wheat yellow stripe rust symptoms propiconazole spray",
            duration: "9:50",
          },
        ],
      },
    ],
  },

  // 13. Corn / Maize
  {
    id: "crop-corn",
    name: "Corn / Maize",
    scientificName: "Zea mays",
    category: "Cereals & Grains",
    imageUrl: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
    description: "Versatile grain crop providing food, feed, and biofuel. Frequently attacked by Common Rust and Northern Leaf Blight.",
    idealSoil: "Well-drained, deep fertile loam, pH 5.8 - 7.0",
    idealTemp: "21°C - 32°C",
    diseases: [
      {
        id: "dis-corn-rust",
        cropId: "crop-corn",
        cropName: "Corn / Maize",
        name: "Common Rust",
        scientificName: "Puccinia sorghi",
        pathogenType: "Fungal",
        severityDefault: "Moderate",
        referenceImageUrl: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Small, circular to elongated golden-brown to cinnamon-brown pustules scattered across both leaf surfaces",
          "Pustules rupture epidermal tissue releasing rusty brown spores",
          "Severe chlorosis and premature browning of main ear leaves",
        ],
        causes: "Moderate temperatures (16-25°C) with high relative humidity (>95%) and night dew.",
        favorableWeather: "16°C - 25°C with heavy morning dews",
        organicRemedies: [
          {
            title: "Neem Seed Kernel Extract (NSKE 5%) + Sulfur",
            recipe: "50g NSKE + 2g Wettable Sulfur per 1 Liter water.",
            application: "Suppresses rust spore germination while deterring fall armyworm larvae.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Azoxystrobin + Difenoconazole",
            ingredient: "Azoxystrobin 18.2% + Difenoconazole 11.4% SC",
            dosage: "1.0 ml / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Organic Micronized Wettable Sulfur 80% WDG",
            type: "Organic Fungicide",
            dosage: "2.5 g / Liter",
            benefit: "Multi-site organic fungicide preventing rust pustule outbreaks.",
            searchQuery: "organic wettable sulfur 80 wdg fungicide for corn rust",
            price: "$13.50 / ₹360",
          },
        ],
        videoTutorials: [
          {
            title: "Identifying Common Rust vs Southern Rust in Corn",
            channel: "Maize Production Hub",
            query: "corn common rust puccinia sorghi symptoms management",
            duration: "8:30",
          },
        ],
      },
    ],
  },

  // 14. Cotton
  {
    id: "crop-cotton",
    name: "Cotton",
    scientificName: "Gossypium hirsutum",
    category: "Cash Crops",
    imageUrl: "/src/assets/images/cotton_crop_plant_1792629404896.jpg",
    description: "Crucial commercial fiber crop vulnerable to Bacterial Blight (Blackarm), Leaf Curl Virus, and Bollworm complexes.",
    idealSoil: "Deep black cotton soils or well-drained alluvial soils, pH 6.5 - 8.0",
    idealTemp: "21°C - 35°C",
    diseases: [
      {
        id: "dis-cotton-bacterial-blight",
        cropId: "crop-cotton",
        cropName: "Cotton",
        name: "Bacterial Blight / Angular Leaf Spot",
        scientificName: "Xanthomonas citri pv. malvacearum",
        pathogenType: "Bacterial",
        severityDefault: "High",
        referenceImageUrl: "/src/assets/images/cotton_leaf_blight_1792629405149.jpg",
        healthyReferenceUrl: "/src/assets/images/cotton_crop_plant_1792629404896.jpg",
        symptoms: [
          "Angular, water-soaked dark brown spots restricted by leaf vein boundaries",
          "Black lesions on main stems and branches causing girdling ('Blackarm phase')",
          "Premature boll dropping and stained lint quality",
        ],
        causes: "Bacteria enter through stomata and insect wounds during hot, wet, windy weather.",
        favorableWeather: "28°C - 35°C with wind-driven rain",
        organicRemedies: [
          {
            title: "Copper Hydroxide + Cow Urine Spray",
            recipe: "2g Copper Hydroxide + 50 ml fermented Cow Urine per 1 Liter water.",
            application: "Traditional bio-enhancer that inhibits bacterial replication.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Streptocycline + Copper Oxychloride",
            ingredient: "Streptocycline (100 ppm) + COC (0.2%)",
            dosage: "0.1 g Streptocycline + 2.5 g Copper Oxychloride per Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Copper Hydroxide 77% WP Bio-Bactericide",
            type: "Organic Fungicide",
            dosage: "2 g / Liter",
            benefit: "High elemental copper release that halts bacterial progression.",
            searchQuery: "copper hydroxide bactericide for cotton angular leaf spot",
            price: "$16.00 / ₹440",
          },
        ],
        videoTutorials: [
          {
            title: "Cotton Bacterial Blight Identification & Management",
            channel: "Cotton Farming Research Hub",
            query: "cotton bacterial blight xanthomonas management",
            duration: "6:50",
          },
        ],
      },
    ],
  },

  // 15. Sugarcane
  {
    id: "crop-sugarcane",
    name: "Sugarcane",
    scientificName: "Saccharum officinarum",
    category: "Cash Crops",
    imageUrl: "/src/assets/images/sugarcane_crop_plant_1792629986075.jpg",
    description: "Perennial tropical grass yielding cane sugar and ethanol, threatened by Red Rot, Smut, and Wilt.",
    idealSoil: "Deep, well-drained loamy soil, pH 6.5 - 7.5",
    idealTemp: "26°C - 38°C",
    diseases: [
      {
        id: "dis-sugarcane-red-rot",
        cropId: "crop-sugarcane",
        cropName: "Sugarcane",
        name: "Red Rot of Sugarcane",
        scientificName: "Colletotrichum falcatum",
        pathogenType: "Fungal",
        severityDefault: "Severe",
        referenceImageUrl: "/src/assets/images/sugarcane_red_rot_1792629986592.jpg",
        healthyReferenceUrl: "/src/assets/images/sugarcane_crop_plant_1792629986075.jpg",
        symptoms: [
          "Yellowing and drying of the third or fourth leaf from the top canopy",
          "Internal stalk shows dark red discoloration interrupted by distinctive white horizontal cross-bands",
          "Characteristic alcoholic sour smell when split cane is inspected",
        ],
        causes: "Infected setts and fungal survival in soil during waterlogged monsoon periods.",
        favorableWeather: "28°C - 35°C with high soil moisture and rainfall",
        organicRemedies: [
          {
            title: "Trichoderma harzianum Sett Dipping",
            recipe: "10g Trichoderma harzianum WP per 1 Liter water for 30 min sett soaking.",
            application: "Biological sett coating preventing pathogen colonization.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Carbendazim 50% WP",
            ingredient: "Carbendazim",
            dosage: "1.0 g / Liter water (Sett dip & soil drench)",
          },
        ],
        recommendedInputs: [
          {
            name: "Trichoderma harzianum Organic Sett Treatment",
            type: "Organic Fungicide",
            dosage: "10 g / Liter",
            benefit: "Protects sugarcane setts from soil-borne red rot and wilt.",
            searchQuery: "trichoderma harzianum for sugarcane red rot control",
            price: "$14.00 / ₹360",
          },
        ],
        videoTutorials: [
          {
            title: "Sugarcane Red Rot: Symptoms, Sett Treatment & Management",
            channel: "Sugar Crop Research",
            query: "sugarcane red rot colletotrichum falcatum symptoms treatment",
            duration: "10:30",
          },
        ],
      },
    ],
  },

  // 16. Banana
  {
    id: "crop-banana",
    name: "Banana",
    scientificName: "Musa acuminata",
    category: "Fruits",
    imageUrl: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80",
    description: "Vital tropical fruit tree vulnerable to Black Sigatoka, Panama Wilt (Fusarium), and Bunchy Top virus.",
    idealSoil: "Deep, rich, fertile alluvial soil with high drainage, pH 6.0 - 7.5",
    idealTemp: "26°C - 32°C",
    diseases: [
      {
        id: "dis-banana-sigatoka",
        cropId: "crop-banana",
        cropName: "Banana",
        name: "Black Sigatoka (Leaf Spot)",
        scientificName: "Pseudocercospora fijiensis / Mycosphaerella fijiensis",
        pathogenType: "Fungal",
        severityDefault: "Severe",
        referenceImageUrl: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Tiny reddish-brown specks running parallel to leaf veins",
          "Specks expand into dark brown to black streaks with sunken gray centers and yellow halos",
          "Premature leaf drying leading to small, improperly filled, unevenly ripening fruit bunches",
        ],
        causes: "Warm, rainy tropical climates with high leaf wetness and wind-blown ascospores.",
        favorableWeather: "25°C - 32°C with high relative humidity (>85%)",
        organicRemedies: [
          {
            title: "Petroleum Spray Oil + Copper Hydroxide Emulsion",
            recipe: "10 ml horticultural mineral oil + 2 g Copper Hydroxide per 1 Liter water.",
            application: "Mineral oil disrupts spore germination and inhibits hyphal growth inside leaf tissue.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Propiconazole 25% EC or Mancozeb",
            ingredient: "Propiconazole",
            dosage: "1.0 ml / Liter water (Mixed with 5ml mineral oil)",
          },
        ],
        recommendedInputs: [
          {
            name: "Horticultural Mineral Spray Oil",
            type: "Organic Fungicide",
            dosage: "10 ml / Liter",
            benefit: "Organic synergist that stops Sigatoka ascospore germination.",
            searchQuery: "horticultural mineral spray oil for banana sigatoka control",
            price: "$15.50 / ₹390",
          },
        ],
        videoTutorials: [
          {
            title: "Managing Black Sigatoka Disease in Banana Plantations",
            channel: "Tropical Fruit Agronomy",
            query: "banana black sigatoka disease management organic spray",
            duration: "11:15",
          },
        ],
      },
    ],
  },

  // 17. Mango
  {
    id: "crop-mango",
    name: "Mango",
    scientificName: "Mangifera indica",
    category: "Fruits",
    imageUrl: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
    description: "King of tropical fruits, often challenged by Blossom Anthracnose, Powdery Mildew, and Dieback.",
    idealSoil: "Deep, well-drained loamy soil, pH 5.5 - 7.5",
    idealTemp: "24°C - 36°C",
    diseases: [
      {
        id: "dis-mango-anthracnose",
        cropId: "crop-mango",
        cropName: "Mango",
        name: "Mango Anthracnose",
        scientificName: "Colletotrichum gloeosporioides",
        pathogenType: "Fungal",
        severityDefault: "High",
        referenceImageUrl: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Small, dark brown to black circular spots on tender young leaves and panicles",
          "Spots coalesce causing leaf distortion, 'shot hole' tears, and flower drop ('blossom blight')",
          "Black tear-stain streaks on ripening mango fruits with deep rot",
        ],
        causes: "Frequent rain or fog during new leaf flush and flowering stages.",
        favorableWeather: "22°C - 30°C with >80% humidity during flowering",
        organicRemedies: [
          {
            title: "Liquid Copper Octanoate + Neem Oil",
            recipe: "4 ml Liquid Copper Octanoate + 4 ml Neem Oil per 1 Liter water.",
            application: "Apply at panicle emergence and fruit set to prevent blossom blight.",
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
            name: "Copper Octanoate Organic Bio-Fungicide",
            type: "Organic Fungicide",
            dosage: "4 ml / Liter",
            benefit: "Certified organic copper formulation that doesn't burn delicate mango blossoms.",
            searchQuery: "copper octanoate organic fungicide for mango anthracnose",
            price: "$17.00 / ₹470",
          },
        ],
        videoTutorials: [
          {
            title: "Controlling Mango Anthracnose & Blossom Blight Organically",
            channel: "Orchard Care Experts",
            query: "mango anthracnose blossom blight control spray schedule",
            duration: "9:20",
          },
        ],
      },
    ],
  },

  // 18. Citrus (Lemon, Orange, Lime)
  {
    id: "crop-citrus",
    name: "Citrus (Lemon, Orange, Lime)",
    scientificName: "Citrus spp.",
    category: "Fruits",
    imageUrl: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=800&q=80",
    description: "Perennial evergreen citrus trees yielding vitamin C-rich fruits. Threatened by Citrus Canker, Greening (HLB), and Gummosis.",
    idealSoil: "Well-drained sandy loam, pH 6.0 - 7.5",
    idealTemp: "13°C - 38°C",
    diseases: [
      {
        id: "dis-citrus-canker",
        cropId: "crop-citrus",
        cropName: "Citrus (Lemon, Orange, Lime)",
        name: "Citrus Canker",
        scientificName: "Xanthomonas axonopodis pv. citri",
        pathogenType: "Bacterial",
        severityDefault: "High",
        referenceImageUrl: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Raised, corky, crater-like brown lesions with an oily yellow halo on leaves, twigs, and fruit rinds",
          "Lesions appear on both top and bottom surfaces of leaves",
          "Premature fruit and leaf drop, severe dieback on twigs",
        ],
        causes: "Bacterial pathogen spread by splashing rain, wind gusts, and citrus leafminer insect larvae punctures.",
        favorableWeather: "20°C - 30°C with rainy periods",
        organicRemedies: [
          {
            title: "Copper Octanoate + Neem Leafminer Defense",
            recipe: "Mix 5 ml Liquid Copper Octanoate + 4 ml Cold-Pressed Neem Oil per 1 Liter water.",
            application: "Repels leafminers to prevent entry wounds while copper kills surface bacteria.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Copper Oxychloride + Kasugamycin",
            ingredient: "Kasugamycin 5% + Copper Oxychloride 45% WP",
            dosage: "1.5 g / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Organic Liquid Copper Canker Shield",
            type: "Organic Fungicide",
            dosage: "5 ml / Liter",
            benefit: "Broad spectrum organic bacterial & fungal protectant for citrus orchards.",
            searchQuery: "organic liquid copper fungicide for citrus canker",
            price: "$18.50 / ₹510",
          },
          {
            name: "Citrus Micronutrient Blend (Zinc, Iron, Manganese)",
            type: "Micro-Nutrient",
            dosage: "3 g / Liter",
            benefit: "Prevents deficiency chlorosis that weakens tree immunity against canker.",
            searchQuery: "chelated citrus tree micronutrient foliar spray zinc iron",
            price: "$14.00 / ₹370",
          },
        ],
        videoTutorials: [
          {
            title: "Treating Citrus Canker in Lemon & Orange Trees",
            channel: "Citrus Care & Orchard Extension",
            query: "how to identify and treat citrus canker organically",
            duration: "9:30",
          },
        ],
      },
    ],
  },

  // 19. Grapevine
  {
    id: "crop-grape",
    name: "Grapevine",
    scientificName: "Vitis vinifera",
    category: "Fruits",
    imageUrl: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80",
    description: "High-value fruit vine cultivated for table grapes, raisins, and wine. Heavily prone to Powdery Mildew and Downy Mildew.",
    idealSoil: "Well-drained gravelly or sandy loam, pH 6.0 - 7.5",
    idealTemp: "15°C - 35°C",
    diseases: [
      {
        id: "dis-grape-powdery-mildew",
        cropId: "crop-grape",
        cropName: "Grapevine",
        name: "Powdery Mildew",
        scientificName: "Uncinula necator / Erysiphe necator",
        pathogenType: "Fungal",
        severityDefault: "High",
        referenceImageUrl: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "White to ash-gray powdery fungal coating on upper and lower leaf surfaces",
          "Leaves curl upward, become brittle, and drop prematurely",
          "Berries become russeted, crack open, and fail to ripen",
        ],
        causes: "Warm (20-27°C), dry weather with high atmospheric humidity and dense shaded canopy.",
        favorableWeather: "20°C - 28°C with moderate humidity and shaded foliage",
        organicRemedies: [
          {
            title: "Potassium Bicarbonate + Horticultural Oil",
            recipe: "3g Potassium Bicarbonate + 5ml pure Horticultural Oil per 1 Liter water.",
            application: "Instantly eradicates powdery mildew mycelium without sulfur burn risk.",
          },
          {
            title: "Milk & Whey Bio-Fungicide (1:9 dilution)",
            recipe: "100 ml fresh whole milk + 900 ml water sprayed in direct sunlight.",
            application: "Milk proteins react with sunlight to produce free radicals that kill fungal spores.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Hexaconazole 5% EC or Penconazole",
            ingredient: "Hexaconazole",
            dosage: "1.0 ml / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Potassium Bicarbonate Organic Mildew Cure",
            type: "Organic Fungicide",
            dosage: "3.5 g / Liter",
            benefit: "OMRI-listed curative for grape powdery mildew with 0-day harvest interval.",
            searchQuery: "potassium bicarbonate organic powdery mildew fungicide for grapes",
            price: "$17.50 / ₹460",
          },
        ],
        videoTutorials: [
          {
            title: "Grapevine Powdery Mildew: Organic & Chemical Strategies",
            channel: "Viticulture Academy",
            query: "grapevine powdery mildew organic remedies potassium bicarbonate",
            duration: "10:45",
          },
        ],
      },
    ],
  },

  // 20. Apple
  {
    id: "crop-apple",
    name: "Apple",
    scientificName: "Malus domestica",
    category: "Fruits",
    imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80",
    description: "Premier temperate fruit tree prone to Apple Scab (Venturia inaequalis), Powdery Mildew, and Cedar Apple Rust.",
    idealSoil: "Well-drained, fertile loamy soil, pH 6.0 - 7.0",
    idealTemp: "10°C - 24°C (requires winter chilling)",
    diseases: [
      {
        id: "dis-apple-scab",
        cropId: "crop-apple",
        cropName: "Apple",
        name: "Apple Scab",
        scientificName: "Venturia inaequalis",
        pathogenType: "Fungal",
        severityDefault: "High",
        referenceImageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Olive-green to dull velvety black circular lesions on leaf surfaces",
          "Leaves become crinkled, distorted, and drop prematurely in mid-summer",
          "Rough, corky, dark scabby spots on fruit skins causing deformed, cracked apples",
        ],
        causes: "Frequent spring rainstorms keeping emerging green leaves wet for over 9-12 hours.",
        favorableWeather: "12°C - 22°C with persistent rainfall and high humidity",
        organicRemedies: [
          {
            title: "Lime Sulfur & Copper Soap Spray",
            recipe: "5 ml Liquid Lime Sulfur + 2 ml organic spreader per 1 Liter water.",
            application: "Apply at green tip and pink bud stage to prevent primary ascospore infection.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Difenoconazole 25% EC or Captan 50% WP",
            ingredient: "Difenoconazole",
            dosage: "0.5 ml / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Liquid Lime Sulfur Organic Scab Shield",
            type: "Organic Fungicide",
            dosage: "5 ml / Liter",
            benefit: "Protects emerging apple blossoms and leaves from scab ascospores.",
            searchQuery: "liquid lime sulfur organic apple scab fungicide",
            price: "$19.00 / ₹520",
          },
        ],
        videoTutorials: [
          {
            title: "Controlling Apple Scab: Spring Spray Timing Guide",
            channel: "Apple Orchard Extension",
            query: "apple scab venturia inaequalis organic spray timing",
            duration: "9:40",
          },
        ],
      },
    ],
  },

  // 21. Papaya
  {
    id: "crop-papaya",
    name: "Papaya",
    scientificName: "Carica papaya",
    category: "Fruits",
    imageUrl: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?auto=format&fit=crop&w=800&q=80",
    description: "Fast-growing tropical herbaceous tree challenged by Papaya Ringspot Virus (PRSV) and Anthracnose.",
    idealSoil: "Well-drained sandy loam rich in organic matter, pH 6.0 - 6.8",
    idealTemp: "24°C - 34°C",
    diseases: [
      {
        id: "dis-papaya-ringspot",
        cropId: "crop-papaya",
        cropName: "Papaya",
        name: "Papaya Ringspot Virus (PRSV)",
        scientificName: "Papaya ringspot potyvirus",
        pathogenType: "Viral",
        severityDefault: "Severe",
        referenceImageUrl: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Severe yellow mosaic mottling and leaf blister puckering ('shoestring' appearance)",
          "Water-soaked dark green greasy streaks on petioles and upper trunk",
          "Distinctive dark green concentric circular rings on fruit skins",
        ],
        causes: "Aphid vectors (Myzus persicae, Aphis gossypii) transmitting virus non-persistently.",
        favorableWeather: "25°C - 35°C with active aphid migrations",
        organicRemedies: [
          {
            title: "Silver Reflective Mulch & Neem Insecticide",
            recipe: "Lay silver reflective plastic mulch + spray 5ml Cold-Pressed Neem Oil/L.",
            application: "Reflects UV light to deter aphids from landing on papaya trees.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Dimethoate 30% EC",
            ingredient: "Dimethoate",
            dosage: "1.5 ml / Liter water (Targeting aphid vectors)",
          },
        ],
        recommendedInputs: [
          {
            name: "Organic Neem Oil 10000 PPM Vector Repellent",
            type: "Neem Spray",
            dosage: "5 ml / Liter",
            benefit: "Deters aphid vectors and disrupts viral transmission.",
            searchQuery: "organic neem oil 10000 ppm for aphid vector management",
            price: "$14.50 / ₹380",
          },
        ],
        videoTutorials: [
          {
            title: "Managing Papaya Ringspot Virus (PRSV) in Orchards",
            channel: "Tropical Fruit Farming Guide",
            query: "papaya ringspot virus symptoms aphid vector control",
            duration: "8:45",
          },
        ],
      },
    ],
  },

  // 22. Guava
  {
    id: "crop-guava",
    name: "Guava",
    scientificName: "Psidium guajava",
    category: "Fruits",
    imageUrl: "/src/assets/images/guava_plant_branch_1792629401977.jpg",
    description: "Hardy tropical fruit tree susceptible to devastating Guava Wilt (Fusarium/Gliocladium) and Anthracnose.",
    idealSoil: "Well-drained loamy soil, pH 5.5 - 7.5",
    idealTemp: "20°C - 35°C",
    diseases: [
      {
        id: "dis-guava-wilt",
        cropId: "crop-guava",
        cropName: "Guava",
        name: "Guava Wilt Disease",
        scientificName: "Fusarium oxysporum f. sp. psidii",
        pathogenType: "Fungal",
        severityDefault: "Severe",
        referenceImageUrl: "/src/assets/images/guava_leaf_disease_1792629402944.jpg",
        healthyReferenceUrl: "/src/assets/images/guava_plant_branch_1792629401977.jpg",
        symptoms: [
          "Yellowing and slight curling of leaves along terminal branches",
          "Leaves turn brown, wither, and drop prematurely leaving branches bare",
          "Browning and vascular discoloration in root and stem vascular bundles",
        ],
        causes: "Soil-borne fungus entering through root nematode injuries during rainy monsoon seasons.",
        favorableWeather: "25°C - 34°C with moist alkaline soils",
        organicRemedies: [
          {
            title: "Trichoderma viride + Enriched Farmyard Manure Drench",
            recipe: "50g Trichoderma viride per 5kg well-rotted FYM applied per tree basin.",
            application: "Suppresses soil-borne Fusarium inocula around the root zone.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Carbendazim 50% WP Soil Drench",
            ingredient: "Carbendazim",
            dosage: "2.0 g / Liter water (Drench 5-10 liters per tree basin)",
          },
        ],
        recommendedInputs: [
          {
            name: "Trichoderma viride Bio-Fungicide Granules",
            type: "Organic Fungicide",
            dosage: "50 g / tree basin",
            benefit: "Antagonistic biological fungus preventing guava root vascular wilts.",
            searchQuery: "trichoderma viride bio fungicide for guava wilt disease",
            price: "$13.50 / ₹340",
          },
        ],
        videoTutorials: [
          {
            title: "How to Prevent and Treat Guava Wilt Disease Organically",
            channel: "Orchard Agronomy Channel",
            query: "guava wilt fusarium identification trichoderma treatment",
            duration: "10:15",
          },
        ],
      },
    ],
  },

  // 23. Pomegranate
  {
    id: "crop-pomegranate",
    name: "Pomegranate",
    scientificName: "Punica granatum",
    category: "Fruits",
    imageUrl: "https://images.unsplash.com/photo-1541344999736-83eca872f241?auto=format&fit=crop&w=800&q=80",
    description: "Arid fruit crop prized for antioxidant arils, severely affected by Bacterial Blight (Oily Spot) and Fruit Borer.",
    idealSoil: "Well-drained deep loamy soil, pH 6.5 - 7.5",
    idealTemp: "25°C - 38°C",
    diseases: [
      {
        id: "dis-pomegranate-bacterial-blight",
        cropId: "crop-pomegranate",
        cropName: "Pomegranate",
        name: "Bacterial Blight / Oily Spot (Telya)",
        scientificName: "Xanthomonas axonopodis pv. punicae",
        pathogenType: "Bacterial",
        severityDefault: "Severe",
        referenceImageUrl: "https://images.unsplash.com/photo-1541344999736-83eca872f241?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Small, water-soaked, dark brown to black circular or angular oily spots on leaves",
          "Brownish-black node cankers on stems leading to branch breakage",
          "Prominent 'L' or 'Y' shaped dark brown cracks with oily margins on fruit rinds",
        ],
        causes: "Bacterial pathogen spread by wind-splashed rain and unsterilized pruning shears.",
        favorableWeather: "25°C - 35°C with high humidity (>70%) and cloudy rainy weather",
        organicRemedies: [
          {
            title: "Bordeaux Mixture (1%) + Streptocycline Paste",
            recipe: "1% Bordeaux mixture spray + Copper Oxychloride paste on stem cankers.",
            application: "Seals pruning wounds and prevents bacterial penetration.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Streptocycline + Copper Oxychloride",
            ingredient: "Streptomycin (200 ppm) + COC (0.25%)",
            dosage: "0.2 g Streptocycline + 2.5 g Copper Oxychloride per Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Copper Oxychloride 50% WP Bio-Bactericide",
            type: "Organic Fungicide",
            dosage: "2.5 g / Liter",
            benefit: "Proven bactericide shield halting pomegranate oily spot progression.",
            searchQuery: "copper oxychloride 50 wp for pomegranate bacterial blight telya",
            price: "$15.00 / ₹410",
          },
        ],
        videoTutorials: [
          {
            title: "Pomegranate Bacterial Blight (Telya): Complete Prevention Guide",
            channel: "Pomegranate Research Hub",
            query: "pomegranate bacterial blight xanthomonas punicae telya spray",
            duration: "11:50",
          },
        ],
      },
    ],
  },

  // 24. Strawberry
  {
    id: "crop-strawberry",
    name: "Strawberry",
    scientificName: "Fragaria × ananassa",
    category: "Fruits",
    imageUrl: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80",
    description: "High-value berry fruit grown on plastic mulch, prone to Gray Mold (Botrytis), Leaf Spot, and Spider Mites.",
    idealSoil: "Rich sandy loam with high drainage, pH 5.5 - 6.5",
    idealTemp: "15°C - 26°C",
    diseases: [
      {
        id: "dis-strawberry-leaf-spot",
        cropId: "crop-strawberry",
        cropName: "Strawberry",
        name: "Common Leaf Spot / Bird's Eye Spot",
        scientificName: "Mycosphaerella fragariae",
        pathogenType: "Fungal",
        severityDefault: "Moderate",
        referenceImageUrl: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Small, circular purplish-red spots that develop tan to bleached white centers ('bird's eye spot')",
          "Lesions on leaf runners and fruit caps (calyx) that dry out the berry neck",
          "Reduced photosynthesis and stunted strawberry runner production",
        ],
        causes: "Frequent rain and overhead sprinkler splashing spores from old infected plant crowns.",
        favorableWeather: "18°C - 24°C with prolonged leaf wetness",
        organicRemedies: [
          {
            title: "Potassium Bicarbonate & Liquid Copper Soap",
            recipe: "3g Potassium Bicarbonate + 3ml Copper Octanoate per 1 Liter water.",
            application: "Safe foliar spray that does not leave toxic residue on edible berries.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Captan 50% WP or Azoxystrobin",
            ingredient: "Captan",
            dosage: "2.0 g / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Organic Potassium Bicarbonate Bio-Fungicide",
            type: "Organic Fungicide",
            dosage: "3 g / Liter",
            benefit: "Eco-friendly protection for strawberry foliage with zero harvest delay.",
            searchQuery: "organic potassium bicarbonate bio fungicide for strawberry leaf spot",
            price: "$16.00 / ₹430",
          },
        ],
        videoTutorials: [
          {
            title: "Strawberry Leaf Spot and Gray Mold Organic Management",
            channel: "Berry Care Channel",
            query: "strawberry common leaf spot mycosphaerella organic treatment",
            duration: "8:15",
          },
        ],
      },
    ],
  },

  // 25. Watermelon & Melons
  {
    id: "crop-watermelon",
    name: "Watermelon & Melons",
    scientificName: "Citrullus lanatus",
    category: "Fruits",
    imageUrl: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    description: "Trailing vine crop producing succulent fruits, frequently affected by Anthracnose, Gummy Stem Blight, and Fusarium Wilt.",
    idealSoil: "Well-drained sandy loam, pH 6.0 - 6.8",
    idealTemp: "24°C - 35°C",
    diseases: [
      {
        id: "dis-watermelon-anthracnose",
        cropId: "crop-watermelon",
        cropName: "Watermelon & Melons",
        name: "Anthracnose",
        scientificName: "Colletotrichum orbiculare",
        pathogenType: "Fungal",
        severityDefault: "High",
        referenceImageUrl: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Small, circular to irregular water-soaked spots on leaves that turn dark brown to pitch black",
          "Leaves appear scorched, dry, and develop shot-hole tears",
          "Sunken, circular dark lesions on watermelon rinds covered with pinkish-salmon spore masses",
        ],
        causes: "Warm, rainy weather with overhead irrigation splashing spores across vine runners.",
        favorableWeather: "22°C - 30°C with >80% relative humidity",
        organicRemedies: [
          {
            title: "Copper Hydroxide + Baking Soda Emulsion",
            recipe: "2g Copper Hydroxide + 2g Baking Soda per 1 Liter water.",
            application: "Controls fungal sporulation on both leaves and developing melons.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Mancozeb 75% WP or Chlorothalonil",
            ingredient: "Chlorothalonil 75% WP",
            dosage: "2.0 g / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Copper Hydroxide 77% WP Bio-Fungicide",
            type: "Organic Fungicide",
            dosage: "2 g / Liter",
            benefit: "Prevents watermelon anthracnose and gummy stem blight.",
            searchQuery: "copper hydroxide bio fungicide for watermelon anthracnose",
            price: "$15.50 / ₹420",
          },
        ],
        videoTutorials: [
          {
            title: "Controlling Anthracnose & Gummy Stem Blight in Watermelon",
            channel: "Cucurbit Production Guide",
            query: "watermelon anthracnose symptoms organic chemical treatment",
            duration: "9:05",
          },
        ],
      },
    ],
  },

  // 26. Soybean
  {
    id: "crop-soybean",
    name: "Soybean",
    scientificName: "Glycine max",
    category: "Legumes & Pulses",
    imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80",
    description: "Major oilseed and protein crop vulnerable to Asian Soybean Rust, Frogeye Leaf Spot, and Yellow Mosaic Virus.",
    idealSoil: "Well-drained fertile loam, pH 6.0 - 7.0",
    idealTemp: "20°C - 30°C",
    diseases: [
      {
        id: "dis-soybean-rust",
        cropId: "crop-soybean",
        cropName: "Soybean",
        name: "Asian Soybean Rust",
        scientificName: "Phakopsora pachyrhizi",
        pathogenType: "Fungal",
        severityDefault: "Severe",
        referenceImageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Tiny, gray-brown polygonal lesions on lower leaves, rapidly turning tan to reddish-brown",
          "Volcano-like uredinia pustules protruding from the underside of leaves",
          "Rapid defoliation from bottom upward causing complete pod abortion",
        ],
        causes: "Airborne spores carried by wind during warm, continuous wet leaf canopy periods.",
        favorableWeather: "18°C - 28°C with >8 hours of continuous leaf wetness",
        organicRemedies: [
          {
            title: "Neem Oil & Micronized Sulfur Foliar Spray",
            recipe: "5 ml Neem Oil + 2.5 g Wettable Sulfur per 1 Liter water.",
            application: "Apply at flowering and pod formation stages as protective barrier.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Azoxystrobin 18.2% + Cyproconazole 7.3% SC",
            ingredient: "Azoxystrobin + Cyproconazole",
            dosage: "1.0 ml / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Micronized Wettable Sulfur 80% WDG",
            type: "Organic Fungicide",
            dosage: "2.5 g / Liter",
            benefit: "Organic rust spore inhibitor and sulfur plant nutrient.",
            searchQuery: "wettable sulfur 80 wdg for soybean rust organic control",
            price: "$13.00 / ₹350",
          },
        ],
        videoTutorials: [
          {
            title: "Asian Soybean Rust: Early Identification & Fungicide Timing",
            channel: "Soybean Agronomy Hub",
            query: "asian soybean rust phakopsora pachyrhizi symptoms management",
            duration: "10:20",
          },
        ],
      },
    ],
  },

  // 27. Groundnut / Peanut
  {
    id: "crop-groundnut",
    name: "Groundnut / Peanut",
    scientificName: "Arachis hypogaea",
    category: "Legumes & Pulses",
    imageUrl: "https://images.unsplash.com/photo-1567892328127-1473950ef256?auto=format&fit=crop&w=800&q=80",
    description: "Important subterranean legume oilseed crop challenged by Tikka Leaf Spot (Cercospora) and Peanut Rust.",
    idealSoil: "Sandy loam or loamy sand with good calcium availability, pH 5.8 - 6.5",
    idealTemp: "22°C - 32°C",
    diseases: [
      {
        id: "dis-groundnut-tikka",
        cropId: "crop-groundnut",
        cropName: "Groundnut / Peanut",
        name: "Tikka Leaf Spot (Cercospora Leaf Spot)",
        scientificName: "Cercospora arachidicola / Cercosporidium personatum",
        pathogenType: "Fungal",
        severityDefault: "High",
        referenceImageUrl: "https://images.unsplash.com/photo-1567892328127-1473950ef256?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Early Tikka: Small reddish-brown spots with prominent bright yellow halos on upper leaf surface",
          "Late Tikka: Nearly black, circular spots without bright halos on leaf underside",
          "Severe premature defoliation leaving bare stems and poorly filled peanut pods",
        ],
        causes: "Warm humid monsoon weather with splashing raindrops carrying conidia from soil crop debris.",
        favorableWeather: "24°C - 30°C with high relative humidity (>85%)",
        organicRemedies: [
          {
            title: "Fermented Buttermilk & Neem Leaf Extract",
            recipe: "50 ml sour churned buttermilk + 30 ml boiled neem leaf decoction per 1 Liter water.",
            application: "Foliar spray at 35 and 50 days after sowing to check Cercospora sporulation.",
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
            name: "Pseudomonas fluorescens Bio-Control for Groundnut",
            type: "Organic Fungicide",
            dosage: "10 g / Liter",
            benefit: "Biological agent proven to reduce Tikka leaf spot severity.",
            searchQuery: "pseudomonas fluorescens for groundnut peanut tikka leaf spot",
            price: "$12.50 / ₹320",
          },
        ],
        videoTutorials: [
          {
            title: "Groundnut Tikka Leaf Spot Identification and Control",
            channel: "Oilseed Crops Guide",
            query: "groundnut tikka leaf spot cercospora symptoms management",
            duration: "8:50",
          },
        ],
      },
    ],
  },

  // 28. Ginger
  {
    id: "crop-ginger",
    name: "Ginger",
    scientificName: "Zingiber officinale",
    category: "Spices & Herbs",
    imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    description: "High-value aromatic rhizome crop challenged by Soft Rot (Pythium), Bacterial Wilt, and Phyllosticta Leaf Spot.",
    idealSoil: "Rich sandy loam high in organic humus with excellent drainage, pH 5.5 - 6.5",
    idealTemp: "25°C - 35°C",
    diseases: [
      {
        id: "dis-ginger-soft-rot",
        cropId: "crop-ginger",
        cropName: "Ginger",
        name: "Soft Rot / Rhizome Rot",
        scientificName: "Pythium aphanidermatum",
        pathogenType: "Fungal",
        severityDefault: "Severe",
        referenceImageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Water-soaked collar rot at the soil level on pseudostems",
          "Lower leaves turn yellow, gradually spreading upwards along leaf margins",
          "Rhizome turns soft, watery, and rots into a foul-smelling decomposing mass",
        ],
        causes: "Waterlogged soils and poor drainage during heavy monsoon rains.",
        favorableWeather: "25°C - 32°C with high soil moisture and continuous rain",
        organicRemedies: [
          {
            title: "Trichoderma harzianum + Neem Cake Drench",
            recipe: "50g Trichoderma harzianum + 100g Neem cake per ginger bed basin.",
            application: "Apply at planting and at first earthing-up to prevent Pythium zoospore attack.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Metalaxyl 8% + Mancozeb 64% WP",
            ingredient: "Metalaxyl + Mancozeb",
            dosage: "2.5 g / Liter water (Soil drench around rhizomes)",
          },
        ],
        recommendedInputs: [
          {
            name: "Trichoderma harzianum Bio-Control WP",
            type: "Organic Fungicide",
            dosage: "10 g / Liter",
            benefit: "Biological root shield that devours Pythium fungal mycelium.",
            searchQuery: "trichoderma harzianum for ginger rhizome soft rot",
            price: "$14.00 / ₹370",
          },
        ],
        videoTutorials: [
          {
            title: "Managing Ginger Soft Rot (Rhizome Rot) Organically",
            channel: "Spice Crops Academy",
            query: "ginger soft rot pythium rhizome rot symptoms treatment",
            duration: "10:40",
          },
        ],
      },
    ],
  },

  // 29. Turmeric
  {
    id: "crop-turmeric",
    name: "Turmeric",
    scientificName: "Curcuma longa",
    category: "Spices & Herbs",
    imageUrl: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80",
    description: "Golden spice crop rich in curcumin, frequently affected by Colletotrichum Leaf Spot and Taphrina Leaf Blotch.",
    idealSoil: "Well-drained sandy or clay loam rich in organic matter, pH 5.5 - 7.0",
    idealTemp: "20°C - 35°C",
    diseases: [
      {
        id: "dis-turmeric-leaf-spot",
        cropId: "crop-turmeric",
        cropName: "Turmeric",
        name: "Colletotrichum Leaf Spot",
        scientificName: "Colletotrichum capsici",
        pathogenType: "Fungal",
        severityDefault: "Moderate",
        referenceImageUrl: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Elliptical to oblong brown spots on leaves with yellow halo borders",
          "Centers of spots turn grayish-white with concentric rings of black dots (acervuli)",
          "Leaves dry up and tear along veins, reducing rhizome bulb filling",
        ],
        causes: "Spreads during warm, humid monsoon conditions with continuous leaf wetness.",
        favorableWeather: "24°C - 30°C with >80% relative humidity",
        organicRemedies: [
          {
            title: "Pseudomonas fluorescens + Cow Dung Slurry Spray",
            recipe: "10g Pseudomonas fluorescens + 20 ml filtered cow dung slurry per 1 Liter water.",
            application: "Suppresses Colletotrichum spores while providing micro-nutrients.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Mancozeb 75% WP or Azoxystrobin",
            ingredient: "Mancozeb",
            dosage: "2.5 g / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Pseudomonas fluorescens Bio-Control",
            type: "Organic Fungicide",
            dosage: "10 g / Liter",
            benefit: "Biological antagonistic foliar protectant for turmeric leaf spots.",
            searchQuery: "pseudomonas fluorescens for turmeric leaf spot colletotrichum",
            price: "$13.00 / ₹330",
          },
        ],
        videoTutorials: [
          {
            title: "Turmeric Leaf Spot & Blotch Disease Control",
            channel: "Spice Agronomy Extension",
            query: "turmeric leaf spot colletotrichum capsici spray schedule",
            duration: "8:20",
          },
        ],
      },
    ],
  },

  // 30. Coffee
  {
    id: "crop-coffee",
    name: "Coffee",
    scientificName: "Coffea arabica / canephora",
    category: "Cash Crops",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    description: "Global beverage crop grown in tropical shade plantations, historically ravaged by Coffee Leaf Rust.",
    idealSoil: "Deep, porous, well-drained volcanic or loamy soil, pH 5.5 - 6.5",
    idealTemp: "18°C - 28°C",
    diseases: [
      {
        id: "dis-coffee-leaf-rust",
        cropId: "crop-coffee",
        cropName: "Coffee",
        name: "Coffee Leaf Rust",
        scientificName: "Hemileia vastatrix",
        pathogenType: "Fungal",
        severityDefault: "Severe",
        referenceImageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Small, yellowish oily spots on upper leaf surfaces",
          "Underside of spots covered with powdery, bright orange-yellow urediniospores",
          "Massive defoliation causing branch dieback and biennial coffee yield collapse",
        ],
        causes: "Warm rain and wind-blown spores under shaded, humid canopy conditions.",
        favorableWeather: "21°C - 25°C with heavy rainfall and shade",
        organicRemedies: [
          {
            title: "Bordeaux Mixture (0.5% - 1.0%) Protective Spray",
            recipe: "5g Copper Sulfate + 5g Hydrated Lime per 1 Liter water.",
            application: "Apply before pre-monsoon showers and post-monsoon to coat leaves.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Epoxiconazole + Pyraclostrobin (Opera)",
            ingredient: "Epoxiconazole + Pyraclostrobin",
            dosage: "1.0 ml / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Bordeaux Mixture Organic Copper Fungicide",
            type: "Organic Fungicide",
            dosage: "10 g / Liter",
            benefit: "Official standard certified organic protectant against Coffee Leaf Rust.",
            searchQuery: "bordeaux mixture copper fungicide for coffee leaf rust hemileia",
            price: "$14.50 / ₹390",
          },
        ],
        videoTutorials: [
          {
            title: "Managing Coffee Leaf Rust (Hemileia vastatrix) Organically",
            channel: "Coffee Plantation Research",
            query: "coffee leaf rust hemileia vastatrix symptoms management bordeaux",
            duration: "12:10",
          },
        ],
      },
    ],
  },

  // 31. Tea
  {
    id: "crop-tea",
    name: "Tea",
    scientificName: "Camellia sinensis",
    category: "Cash Crops",
    imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    description: "Perennial evergreen plantation shrub yielding tea leaves, vulnerable to Blister Blight, Red Rust, and Grey Blight.",
    idealSoil: "Acidic, well-drained loamy soil, pH 4.5 - 5.5",
    idealTemp: "18°C - 30°C",
    diseases: [
      {
        id: "dis-tea-blister-blight",
        cropId: "crop-tea",
        cropName: "Tea",
        name: "Blister Blight",
        scientificName: "Exobasidium vexans",
        pathogenType: "Fungal",
        severityDefault: "Severe",
        referenceImageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Small, pale yellowish-green circular spots on tender young tea shoots and leaves",
          "Upper surface becomes blister-like depressed, while underside bulges with white powdery spores",
          "Destruction of tender harvestable 'two leaves and a bud' flushes",
        ],
        causes: "Continuous misty weather, heavy cloud cover, and high relative humidity (>85%).",
        favorableWeather: "15°C - 22°C with low sunshine hours (<4 hrs/day) and frequent rain",
        organicRemedies: [
          {
            title: "Copper Hydroxide + Trichoderma viride",
            recipe: "2g Copper Hydroxide per 1 Liter water applied immediately after plucking.",
            application: "Protects freshly cut stem wounds from fungal spore infection.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Hexaconazole 5% EC + Copper Oxychloride",
            ingredient: "Hexaconazole + COC",
            dosage: "1.0 ml Hexaconazole + 2.0 g COC per Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Copper Oxychloride 50% WP Tea Fungicide",
            type: "Organic Fungicide",
            dosage: "2 g / Liter",
            benefit: "Official Tea Board recommended protectant for blister blight.",
            searchQuery: "copper oxychloride 50 wp for tea blister blight exobasidium",
            price: "$15.00 / ₹400",
          },
        ],
        videoTutorials: [
          {
            title: "Tea Blister Blight Identification & Spray Schedule",
            channel: "Tea Research Association Hub",
            query: "tea blister blight exobasidium vexans control spray",
            duration: "9:15",
          },
        ],
      },
    ],
  },

  // 32. Mustard & Rapeseed
  {
    id: "crop-mustard",
    name: "Mustard & Rapeseed",
    scientificName: "Brassica juncea",
    category: "Legumes & Pulses",
    imageUrl: "/src/assets/images/mustard_crop_plant_1792629989141.jpg",
    description: "Major cruciferous winter oilseed crop frequently affected by White Rust (Albugo candida) and Alternaria Blight.",
    idealSoil: "Well-drained light to heavy loam, pH 6.0 - 7.5",
    idealTemp: "10°C - 25°C",
    diseases: [
      {
        id: "dis-mustard-white-rust",
        cropId: "crop-mustard",
        cropName: "Mustard & Rapeseed",
        name: "White Rust / White Blister",
        scientificName: "Albugo candida",
        pathogenType: "Fungal",
        severityDefault: "High",
        referenceImageUrl: "/src/assets/images/mustard_white_rust_1792629988832.jpg",
        healthyReferenceUrl: "/src/assets/images/mustard_crop_plant_1792629989141.jpg",
        symptoms: [
          "Shiny, porcelain-white, raised pustules/blisters on the lower surface of leaves",
          "Upper surface corresponding to pustules shows bright yellow chlorotic spots",
          "Systemic infection leads to severe floral malformation ('staghead') and sterile pods",
        ],
        causes: "Cool moist winter weather (12-18°C) with morning fog and heavy dew.",
        favorableWeather: "12°C - 18°C with >80% humidity",
        organicRemedies: [
          {
            title: "Wettable Sulfur + Garlic Extract",
            recipe: "2.5 g Wettable Sulfur + 10 ml garlic extract per 1 Liter water.",
            application: "Controls white rust pustules while repelling mustard aphids.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Metalaxyl 8% + Mancozeb 64% WP (Ridomil)",
            ingredient: "Metalaxyl + Mancozeb",
            dosage: "2.0 g / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Micronized Wettable Sulfur 80% WDG",
            type: "Organic Fungicide",
            dosage: "2.5 g / Liter",
            benefit: "Dual organic action: controls white rust and boosts oil content in seeds.",
            searchQuery: "wettable sulfur 80 wdg for mustard white rust albugo candida",
            price: "$13.00 / ₹350",
          },
        ],
        videoTutorials: [
          {
            title: "Mustard White Rust and Staghead Management",
            channel: "Oilseed Science Channel",
            query: "mustard white rust albugo candida staghead treatment",
            duration: "8:35",
          },
        ],
      },
    ],
  },

  // 33. Rose & Ornamentals
  {
    id: "crop-rose",
    name: "Rose & Ornamentals",
    scientificName: "Rosa spp.",
    category: "Floriculture",
    imageUrl: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80",
    description: "Beloved garden flower and commercial cut flower crop prone to Black Spot (Diplocarpon rosae) and Powdery Mildew.",
    idealSoil: "Rich, well-drained loamy soil with abundant compost, pH 6.2 - 6.8",
    idealTemp: "15°C - 28°C",
    diseases: [
      {
        id: "dis-rose-black-spot",
        cropId: "crop-rose",
        cropName: "Rose & Ornamentals",
        name: "Rose Black Spot",
        scientificName: "Diplocarpon rosae",
        pathogenType: "Fungal",
        severityDefault: "Moderate",
        referenceImageUrl: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Circular, feathery-edged black spots on upper leaf surfaces",
          "Surrounding leaf tissue turns bright yellow chlorotic",
          "Premature severe defoliation starting from the lower branches upwards",
        ],
        causes: "Frequent overhead watering or rainy weather leaving leaves wet for over 7 hours.",
        favorableWeather: "20°C - 27°C with wet foliage",
        organicRemedies: [
          {
            title: "Baking Soda + Neem Oil Rose Tonic",
            recipe: "1 tbsp Baking Soda + 1 tsp Cold-Pressed Neem Oil + 1 Liter lukewarm water.",
            application: "Alkalizes leaf surface and coats foliage to stop fungal spore penetration.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Propiconazole 25% EC or Trifloxystrobin",
            ingredient: "Propiconazole",
            dosage: "1.0 ml / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Organic Neem Oil 10000 PPM Garden Spray",
            type: "Neem Spray",
            dosage: "5 ml / Liter",
            benefit: "Eco-friendly broad spectrum shield against rose black spot and aphids.",
            searchQuery: "organic neem oil 10000 ppm for rose black spot powdery mildew",
            price: "$14.00 / ₹370",
          },
        ],
        videoTutorials: [
          {
            title: "Curing Rose Black Spot Naturally: Easy Kitchen Recipe",
            channel: "Rose Garden Expert",
            query: "how to get rid of rose black spot naturally baking soda neem",
            duration: "7:45",
          },
        ],
      },
    ],
  },

  // 34. Carrot
  {
    id: "crop-carrot",
    name: "Carrot",
    scientificName: "Daucus carota subsp. sativus",
    category: "Vegetables",
    imageUrl: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80",
    description: "Root vegetable rich in beta-carotene, frequently challenged by Alternaria Leaf Blight, Powdery Mildew, and Cavity Spot.",
    idealSoil: "Deep, loose, sandy loam free of rocks and stones, pH 6.0 - 6.8",
    idealTemp: "15°C - 20°C",
    diseases: [
      {
        id: "dis-carrot-alternaria-blight",
        cropId: "crop-carrot",
        cropName: "Carrot",
        name: "Alternaria Leaf Blight",
        scientificName: "Alternaria dauci",
        pathogenType: "Fungal",
        severityDefault: "High",
        referenceImageUrl: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Small, dark brown to black irregular spots with yellow halos on older leaf margins",
          "Leaflets curl, brown, and dry up giving foliage a scorched, burnt appearance",
          "Petioles develop elongated brown lesions that weaken tops, hindering mechanical harvesting",
        ],
        causes: "Seed-borne fungal spores spreading via wind and water splashes in warm humid weather.",
        favorableWeather: "20°C - 28°C with extended foliar wetness (dew or overhead irrigation)",
        organicRemedies: [
          {
            title: "Copper Hydroxide & Compost Tea Foliar Spray",
            recipe: "Mix 2.5 g Copper Hydroxide with aerated microbial compost tea per Liter water.",
            application: "Apply at first sign of canopy closure or when weather favors blight.",
          },
          {
            title: "Neem Seed Kernel Extract (5%)",
            recipe: "50g NSKE soaked overnight per Liter water, filtered and sprayed.",
            application: "Provides protective antifungal coating and repels carrot psyllids.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Azoxystrobin 18.2% + Difenoconazole 11.4% SC",
            ingredient: "Azoxystrobin + Difenoconazole",
            dosage: "1.0 ml / Liter water",
          },
          {
            title: "Iprodione 50% WP or Chlorothalonil 75% WP",
            ingredient: "Iprodione / Chlorothalonil",
            dosage: "2.0 g / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Copper Hydroxide 77% WP Bio-Fungicide",
            type: "Organic Fungicide",
            dosage: "2 g / Liter",
            benefit: "Certified organic protectant preventing spore germination on carrot leaves.",
            searchQuery: "copper hydroxide 77 wp for carrot alternaria leaf blight",
            price: "$15.00 / ₹420",
          },
        ],
        videoTutorials: [
          {
            title: "Carrot Alternaria Leaf Blight: Identification & Prevention",
            channel: "Horticulture Extension",
            query: "carrot alternaria leaf blight dauci symptoms management",
            duration: "8:10",
          },
        ],
      },
    ],
  },

  // 35. Cauliflower & Broccoli
  {
    id: "crop-cauliflower",
    name: "Cauliflower & Broccoli",
    scientificName: "Brassica oleracea var. botrytis",
    category: "Vegetables",
    imageUrl: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=800&q=80",
    description: "Cool-season brassica vegetables susceptible to Black Rot (Xanthomonas), Downy Mildew, and Clubroot.",
    idealSoil: "Fertile, moist, well-drained loam rich in organic matter, pH 6.5 - 7.5",
    idealTemp: "15°C - 22°C",
    diseases: [
      {
        id: "dis-cauliflower-black-rot",
        cropId: "crop-cauliflower",
        cropName: "Cauliflower & Broccoli",
        name: "Black Rot",
        scientificName: "Xanthomonas campestris pv. campestris",
        pathogenType: "Bacterial",
        severityDefault: "Severe",
        referenceImageUrl: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Distinct yellow V-shaped lesions along leaf margins pointing towards the main vein",
          "Veins within chlorotic lesions turn prominent dark brown to black",
          "Cross-section of the stem or petiole reveals a ring of blackened vascular bundles",
        ],
        causes: "Bacterial pathogen entering through hydathodes along leaf margins during warm rainy periods.",
        favorableWeather: "25°C - 30°C with free water from rain, dew, or sprinkler irrigation",
        organicRemedies: [
          {
            title: "Hot Water Seed Treatment + Bacillus subtilis",
            recipe: "Soak seeds in 50°C hot water for 25 min, followed by Bacillus subtilis foliar spray (5g/L).",
            application: "Eliminates seed-borne inoculum and colonizes leaf stomata.",
          },
          {
            title: "Copper Hydroxide Protective Spray",
            recipe: "2.0 g Copper Hydroxide per 1 Liter water applied during early seedling stage.",
            application: "Inactivates bacterial cells on leaf margins before systemic entry.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Streptocycline + Copper Oxychloride 50% WP",
            ingredient: "Streptomycin Sulfate + COC",
            dosage: "0.2 g Streptocycline + 2.5 g COC per Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Bacillus subtilis Bio-Bactericide WP",
            type: "Organic Fungicide",
            dosage: "5 g / Liter",
            benefit: "Biological antagonistic barrier preventing Xanthomonas black rot infection.",
            searchQuery: "bacillus subtilis bio bactericide for cauliflower black rot",
            price: "$16.00 / ₹430",
          },
        ],
        videoTutorials: [
          {
            title: "Cauliflower Black Rot (Xanthomonas): Symptoms & Control",
            channel: "Vegetable Pathology Hub",
            query: "cauliflower black rot xanthomonas campestris symptoms control",
            duration: "9:30",
          },
        ],
      },
    ],
  },

  // 36. Spinach
  {
    id: "crop-spinach",
    name: "Spinach",
    scientificName: "Spinacia oleracea",
    category: "Vegetables",
    imageUrl: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
    description: "Nutrient-dense leafy green highly vulnerable to Spinach Downy Mildew, Anthracnose, and Fusarium Wilt.",
    idealSoil: "Rich, well-drained loamy soil, pH 6.5 - 7.5",
    idealTemp: "12°C - 20°C",
    diseases: [
      {
        id: "dis-spinach-downy-mildew",
        cropId: "crop-spinach",
        cropName: "Spinach",
        name: "Downy Mildew (Blue Mold)",
        scientificName: "Peronospora effusa / farinosa",
        pathogenType: "Fungal",
        severityDefault: "Severe",
        referenceImageUrl: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Dull pale yellow to chlorotic lesions on upper leaf surfaces",
          "Purplish-gray downy fungal sporulation covering corresponding underside of leaves",
          "Leaves become curled, stunted, puckered, and completely unmarketable",
        ],
        causes: "Oospore contamination in soil or airborne sporangia active during cool humid conditions.",
        favorableWeather: "10°C - 18°C with high relative humidity (>85%) and dense planting",
        organicRemedies: [
          {
            title: "Potassium Bicarbonate + Bacillus amyloliquefaciens",
            recipe: "3g Potassium Bicarbonate + 5ml Bacillus culture per 1 Liter water.",
            application: "Disrupts mildew cell walls and establishes beneficial bio-antagonists.",
          },
          {
            title: "Copper Octanoate (Copper Soap)",
            recipe: "5 ml Copper Soap solution per Liter water.",
            application: "Broad spectrum low-residue fungicide safe for organic leafy greens.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Mandipropamid 23.4% SC or Dimethomorph 50% WP",
            ingredient: "Mandipropamid / Dimethomorph",
            dosage: "1.0 ml Mandipropamid or 1.5 g Dimethomorph per Liter water",
          },
          {
            title: "Metalaxyl-M + Chlorothalonil SC",
            ingredient: "Mefenoxam + Chlorothalonil",
            dosage: "2.0 ml / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Copper Octanoate Organic Liquid Fungicide",
            type: "Organic Fungicide",
            dosage: "5 ml / Liter",
            benefit: "OMRI-listed copper soap that halts downy mildew without leaf burn.",
            searchQuery: "copper octanoate organic fungicide for spinach downy mildew",
            price: "$18.50 / ₹490",
          },
        ],
        videoTutorials: [
          {
            title: "Controlling Spinach Downy Mildew Organically & Commercially",
            channel: "Organic Grower Guide",
            query: "spinach downy mildew peronospora effusa organic control",
            duration: "7:50",
          },
        ],
      },
    ],
  },

  // 37. Lettuce
  {
    id: "crop-lettuce",
    name: "Lettuce",
    scientificName: "Lactuca sativa",
    category: "Vegetables",
    imageUrl: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=800&q=80",
    description: "Popular salad crop grown open-field and hydroponically, susceptible to Bremia Downy Mildew, Bottom Rot, and Tipburn.",
    idealSoil: "Loose, nutrient-rich soil with good water retention, pH 6.0 - 7.0",
    idealTemp: "15°C - 21°C",
    diseases: [
      {
        id: "dis-lettuce-downy-mildew",
        cropId: "crop-lettuce",
        cropName: "Lettuce",
        name: "Lettuce Downy Mildew",
        scientificName: "Bremia lactucae",
        pathogenType: "Fungal",
        severityDefault: "High",
        referenceImageUrl: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Angular, light green to yellow patches bounded by main leaf veins",
          "Fluffy white sporulation on the underside of yellow angular areas",
          "Outer older leaves turn brown and rot, leading to systemic secondary bacterial soft rot",
        ],
        causes: "Airborne sporangia germinating on wet leaf surfaces during cool, overcast weather.",
        favorableWeather: "12°C - 17°C with relative humidity >90%",
        organicRemedies: [
          {
            title: "Hydrogen Dioxide / Peroxyacetic Acid Bio-Sanitizer",
            recipe: "3 ml dilute Peroxyacetic Acid per Liter water.",
            application: "Kills surface spores rapidly on contact without leaving harmful residue.",
          },
          {
            title: "Trichoderma harzianum Foliar Barrier",
            recipe: "5g Trichoderma powder per 1 Liter water with non-ionic sticker.",
            application: "Colonizes leaf tissue and outcompetes Bremia germ tubes.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Fluopicolide + Propamocarb Hydrochloride",
            ingredient: "Fluopicolide + Propamocarb",
            dosage: "1.5 ml / Liter water",
          },
          {
            title: "Cyazofamid 34.5% SC",
            ingredient: "Cyazofamid",
            dosage: "0.5 ml / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Bio-Fungicide Bacillus subtilis QST 713",
            type: "Organic Fungicide",
            dosage: "5 ml / Liter",
            benefit: "Biological preventative spray certified for greenhouse & field lettuce.",
            searchQuery: "bacillus subtilis qst 713 for lettuce downy mildew bremia",
            price: "$21.00 / ₹550",
          },
        ],
        videoTutorials: [
          {
            title: "Lettuce Downy Mildew: Management in Field & Greenhouse",
            channel: "Hydroponics & Farm Lab",
            query: "lettuce downy mildew bremia lactucae control organic",
            duration: "8:40",
          },
        ],
      },
    ],
  },

  // 38. Barley & Oats
  {
    id: "crop-barley",
    name: "Barley & Oats",
    scientificName: "Hordeum vulgare / Avena sativa",
    category: "Cereals & Grains",
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
    description: "Versatile cereal grain used for malting, feed, and human nutrition, susceptible to Net Blotch, Barley Scald, and Stripe Rust.",
    idealSoil: "Well-drained fertile loam or clay loam, pH 6.5 - 7.8",
    idealTemp: "12°C - 24°C",
    diseases: [
      {
        id: "dis-barley-net-blotch",
        cropId: "crop-barley",
        cropName: "Barley & Oats",
        name: "Net Blotch of Barley",
        scientificName: "Pyrenophora teres (Drechslera teres)",
        pathogenType: "Fungal",
        severityDefault: "High",
        referenceImageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Dark brown net-like crisscross patterns of longitudinal and transverse streaks on leaves",
          "Surrounding leaf tissue turns chlorotic yellow, leading to premature leaf death",
          "Spots merge into large necrotic stripes, reducing photosynthetic flag leaf area",
        ],
        causes: "Infected seed and stubble debris releasing airborne conidia during cool rainy cycles.",
        favorableWeather: "15°C - 25°C with frequent precipitation or heavy dews",
        organicRemedies: [
          {
            title: "Crop Rotation + Trichoderma Seed Inoculation",
            recipe: "Coat seeds with 10g Trichoderma viride WP per kg seed before planting.",
            application: "Suppresses seed-borne mycelium and builds robust seedling immunity.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Pyraclostrobin + Fluxapyroxad (Priaxor)",
            ingredient: "Pyraclostrobin + Fluxapyroxad",
            dosage: "0.8 ml / Liter water",
          },
          {
            title: "Propiconazole 25% EC or Tebuconazole 25.9% EC",
            ingredient: "Propiconazole / Tebuconazole",
            dosage: "1.0 ml / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Trichoderma viride Certified Seed Treatment",
            type: "Organic Fungicide",
            dosage: "10 g / kg seed",
            benefit: "Biological defense stopping fungal colonization on cereal seedlings.",
            searchQuery: "trichoderma viride seed treatment for barley net blotch",
            price: "$11.00 / ₹290",
          },
        ],
        videoTutorials: [
          {
            title: "Barley Net Blotch: Early Scouting and Fungicide Decisions",
            channel: "Cereal Grain Agronomy",
            query: "barley net blotch pyrenophora teres identification control",
            duration: "10:10",
          },
        ],
      },
    ],
  },

  // 39. Sorghum & Millets
  {
    id: "crop-sorghum",
    name: "Sorghum & Millets",
    scientificName: "Sorghum bicolor / Pennisetum glaucum",
    category: "Cereals & Grains",
    imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    description: "Drought-resilient climate-smart staple grain, vulnerable to Anthracnose & Red Rot, Grain Mold, and Ergot.",
    idealSoil: "Wide range from light sandy loam to heavy clay, pH 5.5 - 8.2",
    idealTemp: "25°C - 34°C",
    diseases: [
      {
        id: "dis-sorghum-anthracnose",
        cropId: "crop-sorghum",
        cropName: "Sorghum & Millets",
        name: "Anthracnose & Red Rot",
        scientificName: "Colletotrichum sublineolum",
        pathogenType: "Fungal",
        severityDefault: "High",
        referenceImageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Small circular to elliptical red, orange, or purple-bordered spots with straw-colored centers",
          "Tiny black pustules (acervuli with setae) visible in the center of leaf lesions",
          "Stem develops internal red rot and stalk breakage under wind, causing lodging",
        ],
        causes: "Warm humid periods with rain splashing conidia from infected residue and wild grass hosts.",
        favorableWeather: "26°C - 32°C with high relative humidity (>80%)",
        organicRemedies: [
          {
            title: "Pseudomonas fluorescens Seed Treatment & Foliar Spray",
            recipe: "10g Pseudomonas per 1 Liter water sprayed at vegetative stage.",
            application: "Induces systemic resistance and suppresses fungal spore germination.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Azoxystrobin 23% SC or Mancozeb 75% WP",
            ingredient: "Azoxystrobin / Mancozeb",
            dosage: "1.0 ml Azoxystrobin or 2.5 g Mancozeb per Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Pseudomonas fluorescens Bio-Control Liquid",
            type: "Organic Fungicide",
            dosage: "5 ml / Liter",
            benefit: "Bio-fungicide that triggers natural plant immunity against anthracnose.",
            searchQuery: "pseudomonas fluorescens for sorghum anthracnose red rot",
            price: "$13.50 / ₹340",
          },
        ],
        videoTutorials: [
          {
            title: "Sorghum Anthracnose and Red Rot Identification",
            channel: "Dryland Crops Guide",
            query: "sorghum anthracnose colletotrichum sublineolum symptoms control",
            duration: "8:55",
          },
        ],
      },
    ],
  },

  // 40. Pineapple
  {
    id: "crop-pineapple",
    name: "Pineapple",
    scientificName: "Ananas comosus",
    category: "Fruits",
    imageUrl: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
    description: "Tropical bromeliad fruit crop rich in bromelain, prone to Heart Rot (Phytophthora), Black Rot, and Mealybug Wilt.",
    idealSoil: "Well-drained, acidic sandy loam soil, pH 4.5 - 5.5",
    idealTemp: "22°C - 32°C",
    diseases: [
      {
        id: "dis-pineapple-heart-rot",
        cropId: "crop-pineapple",
        cropName: "Pineapple",
        name: "Heart Rot / Top Rot",
        scientificName: "Phytophthora nicotianae / cinnamomi",
        pathogenType: "Fungal",
        severityDefault: "Severe",
        referenceImageUrl: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Central young leaves turn pale green, yellow, or bronze-colored and droop",
          "Heart leaves pull out effortlessly with a light tug, showing rotten base",
          "Soft, watery, foul-smelling rot at the base of the central whorl with distinct brown border",
        ],
        causes: "Waterlogged soils and soil splashing into heart whorls during heavy rainfall.",
        favorableWeather: "20°C - 28°C with saturated soil conditions and poor drainage",
        organicRemedies: [
          {
            title: "Raised Bed Mounding + Trichoderma Dipping",
            recipe: "Dip suckers/slips in 10g Trichoderma harzianum WP per Liter water for 15 min prior to planting.",
            application: "Prevents oospore infection and promotes early root colonization.",
          },
          {
            title: "Phosphorous Acid (Potassium Phosphite) Foliar Spray",
            recipe: "3 ml Potassium Phosphite per Liter water.",
            application: "Systemic elicitor stimulating pineapple natural phytoalexin defense.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Fosetyl-Al 80% WP (Aliette)",
            ingredient: "Fosetyl-Aluminium",
            dosage: "2.5 g / Liter water (Foliar and heart drench)",
          },
          {
            title: "Metalaxyl-M 4% + Mancozeb 64% WP",
            ingredient: "Mefenoxam + Mancozeb",
            dosage: "2.0 g / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Fosetyl-Al 80% WP Systemic Heart Rot Shield",
            type: "Organic Fungicide",
            dosage: "2.5 g / Liter",
            benefit: "Two-way systemic activity moving up and down to protect pineapple hearts.",
            searchQuery: "fosetyl al 80 wp aliette for pineapple heart rot top rot",
            price: "$19.00 / ₹490",
          },
        ],
        videoTutorials: [
          {
            title: "Pineapple Heart Rot (Phytophthora) Prevention & Management",
            channel: "Tropical Fruit Agronomy",
            query: "pineapple heart rot phytophthora nicotianae control treatment",
            duration: "11:20",
          },
        ],
      },
    ],
  },

  // 41. Avocado
  {
    id: "crop-avocado",
    name: "Avocado",
    scientificName: "Persea americana",
    category: "Fruits",
    imageUrl: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=800&q=80",
    description: "High-value subtropical orchard tree prized for buttery nutrient-rich fruit, threatened by Phytophthora Root Rot and Anthracnose.",
    idealSoil: "Deep, well-aerated, exceptionally well-drained loamy soil, pH 6.0 - 6.8",
    idealTemp: "18°C - 28°C",
    diseases: [
      {
        id: "dis-avocado-anthracnose",
        cropId: "crop-avocado",
        cropName: "Avocado",
        name: "Avocado Anthracnose & Black Spot",
        scientificName: "Colletotrichum gloeosporioides",
        pathogenType: "Fungal",
        severityDefault: "High",
        referenceImageUrl: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Small, brown to black circular lesions on leaf edges and tips that dry and tear",
          "Twig dieback in upper canopy with dark brown sunken lesions",
          "Sunken black spots on fruit rind expanding rapidly into flesh as fruit ripens",
        ],
        causes: "High humidity, rain splashes carrying fungal conidia from dead wood onto tender fruit and leaves.",
        favorableWeather: "22°C - 30°C with prolonged rain and dense unpruned tree canopy",
        organicRemedies: [
          {
            title: "Bordeaux Mixture (1%) + Canopy Air Pruning",
            recipe: "10g Copper Sulfate + 10g Hydrated Lime per 1 Liter water.",
            application: "Apply post-flowering and during fruit set to prevent latent fungal penetration.",
          },
          {
            title: "Bacillus subtilis Bio-Protective Wash",
            recipe: "5g Bacillus subtilis WP per Liter water applied every 14 days.",
            application: "Inhibits Colletotrichum appressoria formation on fruit surface.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Azoxystrobin 23% SC or Pyraclostrobin 20% WG",
            ingredient: "Azoxystrobin / Pyraclostrobin",
            dosage: "1.0 ml Azoxystrobin or 1.0 g Pyraclostrobin per Liter water",
          },
          {
            title: "Copper Hydroxide 77% WP",
            ingredient: "Copper Hydroxide",
            dosage: "2.0 g / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Copper Hydroxide 77% WP Avocado Spray",
            type: "Organic Fungicide",
            dosage: "2 g / Liter",
            benefit: "Proven protective shield against avocado anthracnose and fruit spotting.",
            searchQuery: "copper hydroxide 77 wp for avocado anthracnose colletotrichum",
            price: "$17.50 / ₹460",
          },
        ],
        videoTutorials: [
          {
            title: "Avocado Anthracnose: Field Management & Spray Timings",
            channel: "Avocado Farming Society",
            query: "avocado anthracnose colletotrichum fruit spot control",
            duration: "9:45",
          },
        ],
      },
    ],
  },

  // 42. Cardamom & Black Pepper
  {
    id: "crop-black-pepper",
    name: "Cardamom & Black Pepper",
    scientificName: "Piper nigrum / Elettaria cardamomum",
    category: "Spices & Herbs",
    imageUrl: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80",
    description: "King of spices grown in tropical rainforest canopies, vulnerable to Quick Wilt (Phytophthora Foot Rot) and Pollu Disease.",
    idealSoil: "Humus-rich, loamy virgin forest soil with excellent drainage, pH 5.5 - 6.5",
    idealTemp: "20°C - 32°C",
    diseases: [
      {
        id: "dis-black-pepper-quick-wilt",
        cropId: "crop-black-pepper",
        cropName: "Cardamom & Black Pepper",
        name: "Quick Wilt / Foot Rot",
        scientificName: "Phytophthora capsici",
        pathogenType: "Fungal",
        severityDefault: "Severe",
        referenceImageUrl: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "One or more dark green water-soaked lesions appear on leaves, expanding rapidly with fimbriate margins",
          "Blackening and rotting of collar region (foot rot) at the soil line",
          "Sudden drooping, flaccid yellowing, and total collapse of the entire vine within days ('Quick Wilt')",
        ],
        causes: "Heavy southwest monsoon showers creating saturated soil and cool misty humidity.",
        favorableWeather: "22°C - 28°C with continuous torrential rain and poor drainage",
        organicRemedies: [
          {
            title: "Trichoderma harzianum + Neem Cake Root Incorporation",
            recipe: "50g Trichoderma harzianum + 1 kg Neem Cake per vine basin before monsoon.",
            application: "Bio-barrier in the root zone neutralizing Phytophthora swimming zoospores.",
          },
          {
            title: "Bordeaux Mixture (1%) Foliar Spray & Basin Drench",
            recipe: "10g Copper Sulfate + 10g Lime per 1 Liter water (1% Bordeaux).",
            application: "Apply before monsoon onset (May/June) and mid-monsoon (August).",
          },
        ],
        chemicalRemedies: [
          {
            title: "Potassium Phosphonate (Akomin 40%)",
            ingredient: "Potassium Phosphonate",
            dosage: "3.0 ml / Liter water (Foliar spray and soil drench)",
          },
          {
            title: "Metalaxyl-M 4% + Mancozeb 64% WP",
            ingredient: "Mefenoxam + Mancozeb",
            dosage: "2.5 g / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Potassium Phosphonate 40% Systemic Foot Rot Shield",
            type: "Organic Fungicide",
            dosage: "3 ml / Liter",
            benefit: "Standard spice research institute recommended remedy for quick wilt in black pepper.",
            searchQuery: "potassium phosphonate 40 akomin for black pepper quick wilt phytophthora",
            price: "$16.00 / ₹420",
          },
        ],
        videoTutorials: [
          {
            title: "Black Pepper Quick Wilt (Phytophthora) Complete Protection",
            channel: "Spices Research Institute",
            query: "black pepper quick wilt foot rot phytophthora capsici treatment",
            duration: "12:30",
          },
        ],
      },
    ],
  },

  // 43. Sunflower
  {
    id: "crop-sunflower",
    name: "Sunflower",
    scientificName: "Helianthus annuus",
    category: "Cash Crops",
    imageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80",
    description: "Major golden oilseed crop cultivated worldwide, susceptible to Sunflower Rust (Puccinia), Alternaria Blight, and Head Rot.",
    idealSoil: "Well-drained, deep loamy to clay loam soil, pH 6.0 - 7.5",
    idealTemp: "20°C - 30°C",
    diseases: [
      {
        id: "dis-sunflower-rust",
        cropId: "crop-sunflower",
        cropName: "Sunflower",
        name: "Sunflower Rust",
        scientificName: "Puccinia helianthi",
        pathogenType: "Fungal",
        severityDefault: "High",
        referenceImageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80",
        healthyReferenceUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80",
        symptoms: [
          "Small, circular, reddish-brown powdery pustules (uredinia) scattered on both leaf surfaces",
          "Pustules darken to brownish-black telia late in the season",
          "Heavily infected leaves dry up, turn brown, and wither, drastically lowering seed weight and oil yield",
        ],
        causes: "Airborne rust urediniospores traveling on warm wind currents during humid weather.",
        favorableWeather: "20°C - 28°C with morning dew and leaf wetness >6 hours",
        organicRemedies: [
          {
            title: "Wettable Sulfur + Neem Oil Eco-Spray",
            recipe: "3 g Wettable Sulfur + 5 ml cold-pressed Neem Oil per 1 Liter water.",
            application: "Apply at button stage and ray floret opening to protect top leaves.",
          },
          {
            title: "Pseudomonas fluorescens Bio-Protectant",
            recipe: "10g Pseudomonas powder per 1 Liter water.",
            application: "Foliar spray to suppress urediniospore germination.",
          },
        ],
        chemicalRemedies: [
          {
            title: "Tebuconazole 25.9% EC or Propiconazole 25% EC",
            ingredient: "Tebuconazole / Propiconazole",
            dosage: "1.0 ml / Liter water",
          },
          {
            title: "Azoxystrobin 18.2% + Difenoconazole 11.4% SC",
            ingredient: "Azoxystrobin + Difenoconazole",
            dosage: "1.0 ml / Liter water",
          },
        ],
        recommendedInputs: [
          {
            name: "Micronized Wettable Sulfur 80% WDG",
            type: "Organic Fungicide",
            dosage: "3 g / Liter",
            benefit: "Controls sunflower rust pustules while providing essential sulfur nutrient for oil synthesis.",
            searchQuery: "wettable sulfur 80 wdg for sunflower rust puccinia helianthi",
            price: "$13.00 / ₹350",
          },
        ],
        videoTutorials: [
          {
            title: "Sunflower Rust & Alternaria Blight: Symptoms & Spray Plan",
            channel: "Oilseed Science Hub",
            query: "sunflower rust puccinia helianthi symptoms control spray",
            duration: "8:40",
          },
        ],
      },
    ],
  },
];

export const CROPS_DATABASE: CropEncyclopediaItem[] = [
  ...BASE_CROPS_DATABASE.map((crop) => ({
    ...crop,
    diseases: [
      ...crop.diseases,
      ...(EXPANDED_CROP_DISEASES[crop.id] || []),
    ],
  })),
  ...ADDITIONAL_CROPS,
];

/**
 * Fast helper to match a crop or disease name against the reference database
 * for the visual comparison tool (Normal & Fast)
 */
export function findCropOrDiseaseReference(
  cropName?: string,
  diseaseName?: string
): {
  diseaseReferenceUrl: string;
  healthyReferenceUrl: string;
  matchedCrop: CropEncyclopediaItem | null;
  hallmarkNotes: string;
} {
  const fallbackHealthy =
    "https://images.unsplash.com/photo-1526346698789-22482c444383?auto=format&fit=crop&w=800&q=80";
  const fallbackDisease =
    "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80";

  if (!cropName && !diseaseName) {
    return {
      diseaseReferenceUrl: fallbackDisease,
      healthyReferenceUrl: fallbackHealthy,
      matchedCrop: CROPS_DATABASE[0],
      hallmarkNotes: "Standard foliar inspection baseline.",
    };
  }

  const cLower = (cropName || "").toLowerCase();
  const dLower = (diseaseName || "").toLowerCase();

  // Find best matching crop
  const matchedCrop =
    CROPS_DATABASE.find(
      (c) =>
        c.name.toLowerCase().includes(cLower) ||
        cLower.includes(c.name.toLowerCase()) ||
        c.scientificName.toLowerCase().includes(cLower)
    ) || null;

  if (matchedCrop) {
    // Find best matching disease inside this crop
    const matchedDisease = matchedCrop.diseases.find(
      (d) =>
        d.name.toLowerCase().includes(dLower) ||
        dLower.includes(d.name.toLowerCase()) ||
        d.scientificName.toLowerCase().includes(dLower)
    );

    if (matchedDisease) {
      return {
        diseaseReferenceUrl: matchedDisease.referenceImageUrl || matchedCrop.imageUrl,
        healthyReferenceUrl: matchedDisease.healthyReferenceUrl || fallbackHealthy,
        matchedCrop,
        hallmarkNotes: matchedDisease.symptoms[0] || "Distinct pathological hallmark pattern.",
      };
    }

    // If disease not matched directly, use the first disease in the matched crop
    if (matchedCrop.diseases.length > 0) {
      const firstDis = matchedCrop.diseases[0];
      return {
        diseaseReferenceUrl: firstDis.referenceImageUrl || matchedCrop.imageUrl,
        healthyReferenceUrl: firstDis.healthyReferenceUrl || fallbackHealthy,
        matchedCrop,
        hallmarkNotes: firstDis.symptoms[0] || "Characteristic foliar symptoms.",
      };
    }

    return {
      diseaseReferenceUrl: matchedCrop.imageUrl,
      healthyReferenceUrl: fallbackHealthy,
      matchedCrop,
      hallmarkNotes: "Standard healthy vs affected foliage reference.",
    };
  }

  return {
    diseaseReferenceUrl: fallbackDisease,
    healthyReferenceUrl: fallbackHealthy,
    matchedCrop: CROPS_DATABASE[0],
    hallmarkNotes: "General plant pathology reference sample.",
  };
}

/**
 * Helper to get the associated disease encyclopedia item from a sample leaf image
 */
export function findDiseaseForSample(sample: SampleLeafImage): DiseaseEncyclopediaItem | null {
  const cLower = sample.crop.toLowerCase();
  const dLower = sample.disease.toLowerCase();

  for (const crop of CROPS_DATABASE) {
    const cropNameLower = crop.name.toLowerCase();
    if (
      cropNameLower.includes(cLower) ||
      cLower.includes(cropNameLower) ||
      (cLower.includes("pepper") && cropNameLower.includes("pepper")) ||
      (cLower.includes("corn") && cropNameLower.includes("corn")) ||
      (cLower.includes("rice") && cropNameLower.includes("rice"))
    ) {
      const match = crop.diseases.find(
        (d) =>
          d.name.toLowerCase().includes(dLower) ||
          dLower.includes(d.name.toLowerCase()) ||
          d.scientificName.toLowerCase().includes(dLower)
      );
      if (match) return match;
      if (crop.diseases.length > 0) return crop.diseases[0];
    }
  }

  // Fallback: search all diseases directly
  for (const crop of CROPS_DATABASE) {
    for (const d of crop.diseases) {
      if (d.name.toLowerCase().includes(dLower) || dLower.includes(d.name.toLowerCase())) {
        return d;
      }
    }
  }

  return CROPS_DATABASE[0].diseases[0] || null;
}

/**
 * Helper to get the associated crop encyclopedia item from a sample leaf image
 */
export function findCropForSample(sample: SampleLeafImage): CropEncyclopediaItem | null {
  const cLower = sample.crop.toLowerCase();
  for (const crop of CROPS_DATABASE) {
    const cropNameLower = crop.name.toLowerCase();
    if (
      cropNameLower.includes(cLower) ||
      cLower.includes(cropNameLower) ||
      (cLower.includes("pepper") && cropNameLower.includes("pepper")) ||
      (cLower.includes("corn") && cropNameLower.includes("corn")) ||
      (cLower.includes("rice") && cropNameLower.includes("rice"))
    ) {
      return crop;
    }
  }
  return CROPS_DATABASE[0];
}
