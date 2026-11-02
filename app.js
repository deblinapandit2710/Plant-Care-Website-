/**
 * FloraPulse — Plant Care Guide & Interactive Encyclopedia
 * Pure Vanilla JavaScript Application Logic
 */

// ========================================================
// 1. PLANT KNOWLEDGEBASE DATA
// ========================================================
const PLANT_DATABASE = [
  {
    id: "monstera-deliciosa",
    name: "Monstera Deliciosa",
    botanicalName: "Monstera deliciosa Liebm.",
    category: "indoor",
    tags: ["indoor", "air-purifying"],
    difficulty: "Beginner",
    image: "assets/monstera-deliciosa.jpg",
    light: "Bright Indirect",
    lightLevel: 3,
    lightDetail: "Thrives best in bright, filtered light (East-facing window or 3-5 ft from South window). Avoid harsh direct noon sun, which burns leaf fenestrations.",
    water: "Every 1–2 Weeks",
    waterLevel: 2,
    waterDetail: "Allow top 50% to 75% of soil to dry out between waterings. Always pour until water drains from the bottom. In winter, reduce watering to once every 2–3 weeks.",
    fertilizer: "Monthly in Spring/Summer",
    fertLevel: 3,
    fertDetail: "Feed with balanced 20-20-20 liquid houseplant fertilizer diluted to half strength once a month from April through September. Cease feeding in winter dormancy.",
    temperature: "18°C – 30°C (65°F – 85°F)",
    humidity: "60%+ Humidity (benefits from misting)",
    soil: "Chunky, aerated aroid mix: 40% standard potting soil, 30% perlite, 20% orchid bark, 10% worm castings.",
    petSafe: false,
    toxicityDetail: "Toxic to dogs and cats. Contains sharp calcium oxalate crystals that cause oral irritation, excessive drooling, and difficulty swallowing.",
    pruning: "Prune yellow or damaged bottom leaves at stem base using clean sterilized shears. Wipe leaves with a damp cloth monthly to clear dust.",
    propagation: "Stem cuttings: Cut 1 inch below a node with an aerial root. Place in filtered water until roots reach 2 inches, then pot in soil.",
    overview: "Famous for its dramatic perforated split leaves ('Swiss Cheese Plant'). Highly adaptable, robust grower that can climb moss poles up to 10 feet indoors.",
    troubleshooting: [
      { problem: "Yellowing lower leaves", solution: "Usually overwatering or poor drainage. Check soil moisture and ensure pot drainage holes aren't blocked." },
      { problem: "Leaves lack splits (fenestrations)", solution: "Insufficient light. Move closer to a bright window." },
      { problem: "Brown crispy leaf edges", solution: "Air is too dry or underwatered. Increase humidity with a pebble tray or humidifier." }
    ]
  },
  {
    id: "snake-plant",
    name: "Snake Plant",
    botanicalName: "Dracaena trifasciata (Sansevieria)",
    category: "low-light",
    tags: ["indoor", "low-light", "air-purifying"],
    difficulty: "Beginner",
    image: "assets/snake-plant.jpg",
    light: "Low to Bright Indirect",
    lightLevel: 1,
    lightDetail: "Indestructible light tolerance. Survives in dark office corners, but grows faster and displays deeper variegation in moderate indirect light.",
    water: "Every 2–4 Weeks",
    waterLevel: 1,
    waterDetail: "Extremely drought-tolerant. Allow soil to dry out 100% completely before soaking. When in doubt, do not water. In winter, water only once a month.",
    fertilizer: "Twice a Year",
    fertLevel: 1,
    fertDetail: "Very light feeder. Apply half-strength cactus/succulent fertilizer once in spring and once in mid-summer. Never fertilize in winter.",
    temperature: "15°C – 32°C (59°F – 90°F)",
    humidity: "Average room humidity (30% – 50%)",
    soil: "Fast-draining cactus and succulent mix: 50% potting mix, 50% pumice, perlite, or coarse sand.",
    petSafe: false,
    toxicityDetail: "Toxic to pets due to saponins. Ingestion causes nausea, vomiting, and diarrhea in dogs and cats.",
    pruning: "Trim damaged leaf blades cleanly near the soil line. Leaf cuttings can also be rooted.",
    propagation: "Division during repotting (separate underground rhizomes) or leaf cuttings in water/soil.",
    overview: "One of the toughest houseplants on earth. NASA clean air certified to filter airborne toxins like benzene, formaldehyde, and xylene overnight.",
    troubleshooting: [
      { problem: "Mushy, soft, smelly leaf bases", solution: "Root rot from overwatering. Cease watering immediately, cut away rotten rhizomes, and repot in dry soil." },
      { problem: "Wrinkled, puckered leaves", solution: "Severe underwatering. Give a deep, thorough soak until water drains freely." }
    ]
  },
  {
    id: "fiddle-leaf-fig",
    name: "Fiddle Leaf Fig",
    botanicalName: "Ficus lyrata",
    category: "indoor",
    tags: ["indoor"],
    difficulty: "Moderate",
    image: "assets/fiddle-leaf-fig.jpg",
    light: "Bright Indirect to Filtered Sun",
    lightLevel: 4,
    lightDetail: "Demands abundant bright, filtered sunlight (at least 5-6 hours daily). East or South-facing exposure with light filtration is optimal.",
    water: "Every 7–10 Days",
    waterLevel: 3,
    waterDetail: "Water thoroughly when the top 2 inches of soil feel dry. Do not let it sit in a saucer of standing water.",
    fertilizer: "Every 2 Weeks in Spring/Summer",
    fertLevel: 3,
    fertDetail: "High nitrogen liquid fertilizer (NPK 3-1-2) diluted to half strength every 2 weeks during peak growth season. Stop feeding from October to March.",
    temperature: "18°C – 24°C (65°F – 75°F)",
    humidity: "Moderate to high (50% – 65%). Sensitive to AC and heating drafts.",
    soil: "Rich, well-draining potting soil enriched with peat moss, pine bark, and perlite with pH 5.5 to 7.0.",
    petSafe: false,
    toxicityDetail: "Toxic to cats and dogs. Milky sap contains furocoumarins that irritate the digestive tract and skin.",
    pruning: "Prune top growth ('notching') in spring to encourage branching into a bushier canopy.",
    propagation: "Stem tip cutting with 2 leaves in water, or air layering on mature specimens.",
    overview: "Beloved architectural houseplant with massive violin-shaped leathery leaves. Thrives on consistency in watering and lighting placement.",
    troubleshooting: [
      { problem: "Dropping lower green leaves", solution: "Cold draft, sudden relocation, or inconsistent watering cycles. Keep away from vents." },
      { problem: "Dark brown spots in center of leaves", solution: "Root rot from waterlogged soil. Reduce watering frequency and ensure container drains freely." },
      { problem: "Tiny red freckles on new leaves", solution: "Edema (inconsistent cell water uptake). Regulate watering schedule." }
    ]
  },
  {
    id: "peace-lily",
    name: "Peace Lily",
    botanicalName: "Spathiphyllum wallisii",
    category: "flowering",
    tags: ["flowering", "low-light", "air-purifying"],
    difficulty: "Easy",
    image: "assets/peace-lily.jpg",
    light: "Low to Medium Indirect",
    lightLevel: 2,
    lightDetail: "Tolerates low light environments well. For frequent pure white flower blooms, place in medium to bright indirect light.",
    water: "Every 5–7 Days",
    waterLevel: 4,
    waterDetail: "Keep soil consistently lightly moist. Peace Lilies dramatically droop when thirsty, serving as a built-in thirst alert.",
    fertilizer: "Every 6 Weeks in Spring/Summer",
    fertLevel: 2,
    fertDetail: "Balanced 20-20-20 liquid houseplant feed diluted to 1/4 strength every 6 weeks. Excessive fertilizer burns tender flower spathes.",
    temperature: "18°C – 27°C (65°F – 80°F)",
    humidity: "High humidity (60%+). Appreciates daily misting or a bathroom window.",
    soil: "Moisture-retentive, loose organic mix: potting soil, peat moss, and perlite.",
    petSafe: false,
    toxicityDetail: "Toxic to dogs and cats. Contains calcium oxalates which cause oral burning, swollen lips, and upset stomach.",
    pruning: "Snip spent brown bloom stems right at the base and remove aging lower yellow leaves.",
    propagation: "Root ball division during spring repotting. Divide crowns with separate root clumps.",
    overview: "Renowned for glossy deep green foliage and elegant white flower spathes. Superior air-filtering plant that absorbs formaldehyde and acetone.",
    troubleshooting: [
      { problem: "Dramatic collapse/drooping leaves", solution: "Soil is bone dry. Thoroughly bottom-water for 20 minutes; it will perk up in 2 hours." },
      { problem: "Black or brown leaf tips", solution: "Sensitivity to fluoride and chlorine in tap water. Switch to rainwater or filtered water." }
    ]
  },
  {
    id: "golden-pothos",
    name: "Golden Pothos",
    botanicalName: "Epipremnum aureum",
    category: "indoor",
    tags: ["indoor", "low-light", "air-purifying"],
    difficulty: "Beginner",
    image: "assets/golden-pothos.jpg",
    light: "Low to Bright Indirect",
    lightLevel: 2,
    lightDetail: "Adaptable to nearly any light setting. Variegated gold patterns stay brightest under medium to bright indirect illumination.",
    water: "Every 1–2 Weeks",
    waterLevel: 2,
    waterDetail: "Allow top 50% of the soil to dry out between waterings. Will exhibit slightly limp leaves when in need of moisture.",
    fertilizer: "Monthly in Spring/Summer",
    fertLevel: 2,
    fertDetail: "General indoor plant liquid fertilizer diluted to half strength once a month while actively trailing.",
    temperature: "15°C – 29°C (60°F – 85°F)",
    humidity: "Adaptable (40% – 70%). Handles dry winter air effortlessly.",
    soil: "Standard all-purpose potting soil with added perlite (70/30 ratio) for aeration.",
    petSafe: false,
    toxicityDetail: "Toxic to pets due to calcium oxalate crystals. Keep on high shelves or in hanging planters out of reach.",
    pruning: "Trim trailing vines to encourage fuller, bushier top growth and promote new branching.",
    propagation: "Easiest plant to propagate! Snip vine cutting with 2 leaves and a root node; roots in water in 7 days.",
    overview: "Nicknamed 'Devil's Ivy' because it is nearly impossible to kill. Vigorous trailing vine that cascades beautifully from hanging baskets.",
    troubleshooting: [
      { problem: "Leaves turning entirely yellow", solution: "Overwatering or soggy soil. Allow pot to dry out before next hydration." },
      { problem: "Vine losing golden variegation", solution: "Insufficient light. Move closer to indirect sunlight." }
    ]
  },
  {
    id: "zz-plant",
    name: "ZZ Plant",
    botanicalName: "Zamioculcas zamiifolia",
    category: "low-light",
    tags: ["indoor", "low-light", "air-purifying"],
    difficulty: "Beginner",
    image: "assets/zz-plant.jpg",
    light: "Low to Bright Indirect",
    lightLevel: 1,
    lightDetail: "Survives in windowless offices under fluorescent tubes as well as bright indirect spaces. Keep away from direct harsh sun.",
    water: "Every 3–4 Weeks",
    waterLevel: 1,
    waterDetail: "Stores water in underground potato-like rhizomes. Let soil dry out 100% between waterings. Water sparingly in winter.",
    fertilizer: "Every 2–3 Months in Summer",
    fertLevel: 1,
    fertDetail: "Needs minimal feeding. Balanced liquid fertilizer diluted to 1/4 strength two or three times a year is plenty.",
    temperature: "16°C – 28°C (60°F – 82°F)",
    humidity: "Low to average indoor humidity (30% – 50%).",
    soil: "Well-aerated succulent/cactus blend with high drainage (sand, perlite, pumice).",
    petSafe: false,
    toxicityDetail: "Toxic to cats and dogs if consumed. Wash hands after handling sap to prevent mild skin irritation.",
    pruning: "Prune yellow or aged stems at soil line. Clean shiny waxy leaves with water.",
    propagation: "Rhizome separation during repotting or leaf stalk cuttings (leaf cuttings take several months to sprout rhizomes).",
    overview: "Boasts naturally glossy, mirror-like leaves that look polished with wax. One of the lowest maintenance houseplants in existence.",
    troubleshooting: [
      { problem: "Yellowing lower stalks", solution: "Root rot from excessive moisture. The potato-like rhizomes are drowning. Cease watering." },
      { problem: "Stems bending/arching outward", solution: "Reaching for sunlight in extreme low light. Rotate pot periodically." }
    ]
  },
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    botanicalName: "Aloe barbadensis miller",
    category: "succulent",
    tags: ["succulent"],
    difficulty: "Beginner",
    image: "assets/aloe-vera.jpg",
    light: "Direct Sun to Bright Light",
    lightLevel: 4,
    lightDetail: "Loves bright sunshine. Requires at least 6 hours of bright light daily (South or West windowsill).",
    water: "Every 2–3 Weeks",
    waterLevel: 1,
    waterDetail: "Soak and dry method. Water deeply until liquid runs out of drainage hole, then let dry out completely before next session.",
    fertilizer: "Once in Spring",
    fertLevel: 1,
    fertDetail: "Feed only once a year in spring with balanced 10-10-10 succulent fertilizer diluted to half strength.",
    temperature: "15°C – 28°C (59°F – 82°F)",
    humidity: "Low humidity (arid environment preferred). Avoid humid bathrooms.",
    soil: "Gritty, well-draining cactus and succulent mix with perlite, pumice, and gravel.",
    petSafe: false,
    toxicityDetail: "Toxic to dogs and cats. The latex layer beneath the rind contains aloin which acts as a strong laxative.",
    pruning: "Harvest outermost mature fleshy leaves near the stem base for soothing minor burns and cuts.",
    propagation: "Separate baby 'pups' (offshoots) that sprout at the base once they reach 3 inches in size.",
    overview: "A centuries-old medicinal succulent packed with soothing gel. Thrives in terra cotta pots that allow soil to dry quickly.",
    troubleshooting: [
      { problem: "Leaves turning brown or orange", solution: "Sun stress from sudden move to intense sun. Acclimate gradually." },
      { problem: "Mushy translucent leaves", solution: "Overwatering and root rot. Ensure pot has drainage and reduce water." }
    ]
  },
  {
    id: "spider-plant",
    name: "Spider Plant",
    botanicalName: "Chlorophytum comosum",
    category: "pet-safe",
    tags: ["pet-safe", "indoor", "air-purifying"],
    difficulty: "Beginner",
    image: "assets/spider-plant.jpg",
    light: "Bright Indirect Light",
    lightLevel: 2,
    lightDetail: "Prefers medium to bright indirect light. Avoid direct scorching sun, which bleaches and browns the arching variegated stripes.",
    water: "Every 7–10 Days",
    waterLevel: 2,
    waterDetail: "Keep slightly moist in spring and summer. Tolerates occasional missed waterings due to thick moisture-storing tuberous roots.",
    fertilizer: "Every 3–4 Weeks in Spring/Summer",
    fertLevel: 2,
    fertDetail: "Feed every 3 to 4 weeks during active growth with balanced houseplant fertilizer. Avoid excess fertilizer which burns leaf ends.",
    temperature: "13°C – 27°C (55°F – 80°F)",
    humidity: "Moderate humidity (40% – 60%). Enjoys occasional misting.",
    soil: "Well-aerated, loamy potting soil with good drainage.",
    petSafe: true,
    toxicityDetail: "100% Non-toxic and safe for cats and dogs! (Cats are often fascinated by its mild natural hallucinogenic effect, similar to catnip).",
    pruning: "Trim dead brown leaf tips and prune off excess runner baby spiders when you want mother plant to grow larger.",
    propagation: "Clip off miniature 'spiderette' plantlets that hang from runners and root them directly in water or soil.",
    overview: "One of the most prolific and forgiving house plants. Produces arching stems full of baby spiderettes and tiny white flowers.",
    troubleshooting: [
      { problem: "Crisp brown leaf tips", solution: "Mineral or fluoride sensitivity from tap water. Use filtered, distilled, or rainwater." },
      { problem: "Pale washed out foliage", solution: "Too much direct sunlight. Relocate further into the room." }
    ]
  },
  {
    id: "calathea-orbifolia",
    name: "Calathea Orbifolia",
    botanicalName: "Goeppertia orbifolia",
    category: "pet-safe",
    tags: ["pet-safe", "indoor"],
    difficulty: "Advanced",
    image: "assets/calathea-orbifolia.jpg",
    light: "Medium Indirect / Dappled",
    lightLevel: 2,
    lightDetail: "Requires gentle, filtered medium indirect light. Direct sunlight will permanently fade the silver-striped pattern and scorch margins.",
    water: "Every 5–7 Days",
    waterLevel: 4,
    waterDetail: "Needs consistently moist soil, but never waterlogged. Strictly avoid hard tap water; use distilled, distilled, or reverse osmosis water.",
    fertilizer: "Monthly at 1/4 Strength",
    fertLevel: 2,
    fertDetail: "Very sensitive to chemical burns. Use organic seaweed or balanced fertilizer diluted to 1/4 strength once monthly in spring/summer.",
    temperature: "18°C – 25°C (65°F – 77°F)",
    humidity: "High humidity essential (65% – 80%). Needs a humidifier nearby.",
    soil: "Moisture-retaining yet airy mix: 50% peat moss, 25% perlite, 25% orchid bark.",
    petSafe: true,
    toxicityDetail: "Non-toxic to cats, dogs, and horses. Completely pet safe.",
    pruning: "Prune brown or dried leaves at the stem base using sterile scissors.",
    propagation: "Crown division only during spring repotting. Calatheas cannot be grown from stem or leaf cuttings.",
    overview: "A showstopping prayer plant with oversized round leaves patterned in metallic silver and emerald green stripes that fold upward at night.",
    troubleshooting: [
      { problem: "Curling leaves into tight tubes", solution: "Air is too dry or plant is thirsty. Check soil and turn on room humidifier." },
      { problem: "Crispy edges with yellow halos", solution: "Chemical burns from tap water minerals. Switch to distilled water." }
    ]
  },
  {
    id: "rubber-tree",
    name: "Rubber Tree",
    botanicalName: "Ficus elastica",
    category: "indoor",
    tags: ["indoor", "air-purifying"],
    difficulty: "Easy",
    image: "assets/rubber-tree.jpg",
    light: "Bright Indirect Light",
    lightLevel: 3,
    lightDetail: "Loves bright indirect light with a few hours of gentle morning sun. Dark burgundy leaves maintain intensity under high light.",
    water: "Every 1–2 Weeks",
    waterLevel: 2,
    waterDetail: "Allow top 2 to 3 inches of potting medium to dry out before watering thoroughly. Never let pot sit in collected water.",
    fertilizer: "Every 4 Weeks in Spring/Summer",
    fertLevel: 3,
    fertDetail: "Apply balanced water-soluble fertilizer monthly during the growing season. Cease in fall and winter.",
    temperature: "16°C – 27°C (60°F – 80°F)",
    humidity: "Medium humidity (45% – 60%). Wipe broad leaves to remove dust build-up.",
    soil: "Well-aerated, well-draining potting mix containing peat, pine bark, and coarse perlite.",
    petSafe: false,
    toxicityDetail: "Toxic to cats and dogs. Milky latex sap irritates pet gastrointestinal tract and causes skin rashes.",
    pruning: "Pinch or prune main growing stem in spring to stimulate bushier side branching.",
    propagation: "Stem tip cuttings rooted in moist perlite or water, or air layering on thicker woody trunks.",
    overview: "Bold indoor statement tree with thick, glossy, leathery oval leaves. Can grow rapidly up to 8 feet indoors in good lighting.",
    troubleshooting: [
      { problem: "Dropping bottom leaves suddenly", solution: "Overwatering or cold draft from air conditioners. Stabilize room climate." },
      { problem: "Dull, dusty leaf surface", solution: "Dust blocks photosynthesis. Wipe each leaf monthly with lukewarm water and a microfiber cloth." }
    ]
  },
  {
    id: "english-lavender",
    name: "English Lavender",
    botanicalName: "Lavandula angustifolia",
    category: "flowering",
    tags: ["flowering"],
    difficulty: "Moderate",
    image: "assets/english-lavender.jpg",
    light: "Full Direct Sun (6+ Hours)",
    lightLevel: 4,
    lightDetail: "Needs maximum direct sunlight. Best suited for sunny south-facing windowsills, balconies, or outdoor planters.",
    water: "Every 1–2 Weeks",
    waterLevel: 1,
    waterDetail: "Drought tolerant once established. Let top 2 inches dry out completely. Hates wet feet; excess moisture causes rapid stem rot.",
    fertilizer: "Once in Early Spring",
    fertLevel: 1,
    fertDetail: "Very light feeder. A gentle slow-release organic fertilizer in spring. Excess nitrogen prevents flower blooming and weakens stems.",
    temperature: "15°C – 26°C (60°F – 80°F)",
    humidity: "Low humidity. Requires high air circulation to avoid fungal mildew.",
    soil: "Lean, sandy, alkaline soil (pH 6.5–7.5) with exceptional gravel drainage.",
    petSafe: false,
    toxicityDetail: "Mildly toxic to pets in large quantities. Contains linalool which can cause gastrointestinal upset if heavily ingested.",
    pruning: "Prune back by one-third after summer flowers fade to maintain a compact, bushy habit and prevent woodiness.",
    propagation: "Semi-hardwood stem cuttings taken in late summer dipped in rooting hormone.",
    overview: "Prized worldwide for its fragrant purple floral spikes, aromatic grey-green foliage, and soothing essential oils.",
    troubleshooting: [
      { problem: "Black, droopy foliage at base", solution: "Root rot from soggy soil and poor drainage. Allow to dry thoroughly." },
      { problem: "No flower blooms", solution: "Insufficient direct sunlight or too much nitrogen fertilizer." }
    ]
  },
  {
    id: "moth-orchid",
    name: "Moth Orchid",
    botanicalName: "Phalaenopsis",
    category: "flowering",
    tags: ["flowering", "pet-safe"],
    difficulty: "Moderate",
    image: "assets/moth-orchid.jpg",
    light: "Bright Indirect Light",
    lightLevel: 2,
    lightDetail: "Bright, dappled indirect light. Leaves should be a bright olive green; dark green indicates too little light, yellow indicates sunburn.",
    water: "Every 7–10 Days",
    waterLevel: 2,
    waterDetail: "Water when the orchid bark is dry and the aerial roots turn silvery-gray. Soak pot under running water for 30 seconds and drain thoroughly.",
    fertilizer: "Weekly, Weakly (1/4 Strength)",
    fertLevel: 2,
    fertDetail: "Specialized orchid fertilizer (20-20-20 with trace minerals) at 1/4 strength every 2 weeks while in growth. Flush with clean water monthly.",
    temperature: "18°C – 28°C (65°F – 82°F)",
    humidity: "50% – 70% humidity. Place on a humidity tray with wet pebbles.",
    soil: "100% chunky pine/fir orchid bark, sphagnum moss, and charcoal chunks. Never standard soil.",
    petSafe: true,
    toxicityDetail: "100% Non-toxic to cats and dogs. Certified safe by the ASPCA.",
    pruning: "Once flowers drop, cut spike right above a node for a second flush, or cut to base if spike turns brown.",
    propagation: "Keiki offshoots (baby plantlets that occasionally sprout along flower spikes).",
    overview: "The most popular indoor flowering orchid. Blooms last up to 3 months with stunning, wing-like petals in white, pink, and purple.",
    troubleshooting: [
      { problem: "Wrinkled, leathery leaves", solution: "Dehydrated roots or rotted roots that cannot take in water. Inspect roots: green/silver = good, black/mushy = rotted." },
      { problem: "Flower buds turning yellow and dropping before opening ('Bud Blast')", solution: "Sudden temperature change, low humidity, or fruit ethylene gas nearby." }
    ]
  },
  {
    id: "jade-plant",
    name: "Jade Plant",
    botanicalName: "Crassula ovata",
    category: "succulent",
    tags: ["succulent"],
    difficulty: "Beginner",
    image: "assets/jade-plant.jpg",
    light: "Full Sun to Bright Direct",
    lightLevel: 4,
    lightDetail: "Needs at least 4 to 6 hours of bright direct sun daily. Red edges develop on plump fleshy leaves with good sun exposure.",
    water: "Every 2–3 Weeks",
    waterLevel: 1,
    waterDetail: "Allow soil to dry out completely. The fleshy leaves store water; water only when leaves begin to feel slightly soft rather than plump and firm.",
    fertilizer: "Every 2 Months in Spring/Summer",
    fertLevel: 2,
    fertDetail: "Feed every two months with a half-strength balanced 10-10-10 liquid fertilizer. Never feed bone-dry soil.",
    temperature: "18°C – 24°C (65°F – 75°F)",
    humidity: "Low humidity. Tolerates dry household heating easily.",
    soil: "Extremely porous cactus mix with pumice, perlite, and coarse granite grit.",
    petSafe: false,
    toxicityDetail: "Toxic to cats and dogs. Ingestion causes vomiting, lethargy, and depressed heart rate.",
    pruning: "Prune branches to encourage thick woody bonsai-like trunk development.",
    propagation: "Remarkably easy: root individual leaf cuttings or stem cuttings in dry soil.",
    overview: "Symbol of good luck and prosperity. Classic succulent with miniature tree structure that can thrive for decades.",
    troubleshooting: [
      { problem: "Shriveled, wrinkled leaves", solution: "Underwatering. Give a deep, thorough soak." },
      { problem: "Dropping plump green leaves", solution: "Overwatering or extreme lack of light." }
    ]
  },
  {
    id: "monstera-adansonii",
    name: "Monstera Adansonii",
    botanicalName: "Monstera adansonii",
    category: "indoor",
    tags: ["indoor", "air-purifying"],
    difficulty: "Easy",
    image: "assets/monstera-adansonii.jpg",
    light: "Bright Indirect Light",
    lightLevel: 3,
    lightDetail: "Bright indirect light encourages dense foliage and intricate window-like leaf holes (fenestrations). Protect from harsh direct rays.",
    water: "Every 7–10 Days",
    waterLevel: 3,
    waterDetail: "Water when the top 1–2 inches of soil are dry to the touch. Prefers consistent moisture without remaining waterlogged.",
    fertilizer: "Every 3 Weeks in Spring/Summer",
    fertLevel: 3,
    fertDetail: "Balanced indoor liquid fertilizer diluted to half strength every three weeks during active spring and summer growth.",
    temperature: "18°C – 28°C (65°F – 82°F)",
    humidity: "60%+ humidity. Appreciates bathrooms or close proximity to a humidifier.",
    soil: "Well-aerated aroid blend with peat, perlite, and orchid bark.",
    petSafe: false,
    toxicityDetail: "Toxic to cats and dogs due to insoluble calcium oxalates.",
    pruning: "Trim leggy vines to keep the plant bushy, or train it to climb up a moss pole.",
    propagation: "Roots quickly in water from stem node cuttings in 10 to 14 days.",
    overview: "Known as the 'Monkey Mask Plant' or 'Swiss Cheese Vine'. Features oval leaves completely perforated with natural holes.",
    troubleshooting: [
      { problem: "Yellowing leaves with brown spots", solution: "Overwatering or soil holding too much moisture. Improve potting mix drainage." },
      { problem: "Leaves curling inward", solution: "Low room humidity or under-watering." }
    ]
  },
  {
    id: "maranta-prayer-plant",
    name: "Red Prayer Plant",
    botanicalName: "Maranta leuconeura var. erythroneura",
    category: "pet-safe",
    tags: ["pet-safe", "indoor"],
    difficulty: "Easy",
    image: "assets/maranta-prayer-plant.jpg",
    light: "Medium Indirect Light",
    lightLevel: 2,
    lightDetail: "Thrives in medium to low indirect light. Avoid direct sun, which will bleach the striking magenta herring-bone veins.",
    water: "Every 5–7 Days",
    waterLevel: 3,
    waterDetail: "Keep soil consistently moist like a wrung-out sponge. Sensitive to hard tap water; use filtered or distilled water.",
    fertilizer: "Every 2 Weeks at Half Strength",
    fertLevel: 2,
    fertDetail: "Balanced water-soluble houseplant fertilizer diluted to half strength from spring through fall.",
    temperature: "18°C – 27°C (65°F – 80°F)",
    humidity: "High humidity (60%+). Enjoys warm, humid air.",
    soil: "Well-draining, peat-rich potting soil with perlite.",
    petSafe: true,
    toxicityDetail: "100% Non-toxic and safe for all household pets.",
    pruning: "Trim dead leaves and pinch stems back in spring to promote fuller growth.",
    propagation: "Stem cuttings taken below a node root rapidly in water or damp sphagnum moss.",
    overview: "Fascinating foliage plant whose leaves fold vertically together like hands in prayer each evening at sundown.",
    troubleshooting: [
      { problem: "Leaves stay flat at night", solution: "Plant might be getting too much light at night or needs higher humidity." },
      { problem: "Crisp brown leaf margins", solution: "Low air humidity or minerals in tap water." }
    ]
  },
  {
    id: "dracaena-marginata",
    name: "Dragon Tree",
    botanicalName: "Dracaena marginata",
    category: "low-light",
    tags: ["indoor", "low-light", "air-purifying"],
    difficulty: "Beginner",
    image: "assets/dracaena-marginata.jpg",
    light: "Low to Medium Indirect",
    lightLevel: 2,
    lightDetail: "Tolerates low light well, though growth will be slower. Bright indirect light promotes richer red margins.",
    water: "Every 2–3 Weeks",
    waterLevel: 1,
    waterDetail: "Allow top half of soil to dry out before watering thoroughly. Never let roots sit in water.",
    fertilizer: "Monthly in Spring/Summer",
    fertLevel: 2,
    fertDetail: "Feed with half-strength balanced liquid fertilizer once a month during spring and summer only.",
    temperature: "18°C – 26°C (65°F – 79°F)",
    humidity: "Average room humidity (40% – 50%).",
    soil: "Loose, well-draining potting soil with pumice or perlite.",
    petSafe: false,
    toxicityDetail: "Toxic to cats and dogs due to saponins. Keep away from curious chewers.",
    pruning: "Prune tall canes to desired height; new tufts of leaves will sprout right below the cut.",
    propagation: "Top cane cuttings rooted in water or directly in moist potting mix.",
    overview: "Slender architectural plant with ribbon-like leaves edged in deep crimson red atop curving woody canes.",
    troubleshooting: [
      { problem: "Yellowing lower leaves and shedding", solution: "Normal aging if gradual; if sudden, indicates overwatering or root rot." },
      { problem: "Brown tips on needle-like leaves", solution: "Sensitive to fluoride in tap water. Switch to rainwater or distilled water." }
    ]
  }
];

// Fallback botanical SVG generator in case external images are offline
function getBotanicalSvgFallback(name) {
  const cleanName = (name || "Botanical Specimen")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#064e3b"/>
        <stop offset="100%" stop-color="#042f24"/>
      </linearGradient>
      <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#34d399"/>
        <stop offset="100%" stop-color="#059669"/>
      </linearGradient>
    </defs>
    <rect width="600" height="400" fill="url(#bgGrad)"/>
    <circle cx="300" cy="170" r="95" fill="#10b981" opacity="0.2"/>
    <path d="M300 80 C350 135, 380 205, 300 265 C220 205, 250 135, 300 80 Z" fill="url(#leafGrad)"/>
    <path d="M300 110 Q300 190 300 250" stroke="#064e3b" stroke-width="3" stroke-linecap="round"/>
    <path d="M300 150 Q325 140 335 145" stroke="#064e3b" stroke-width="2" stroke-linecap="round"/>
    <path d="M300 180 Q275 170 265 175" stroke="#064e3b" stroke-width="2" stroke-linecap="round"/>
    <path d="M300 210 Q325 200 335 205" stroke="#064e3b" stroke-width="2" stroke-linecap="round"/>
    <text x="300" y="320" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="700" text-anchor="middle">${cleanName}</text>
    <text x="300" y="350" fill="#a7f3d0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="500" letter-spacing="1.5" text-anchor="middle">BOTANICAL PROFILE</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// ========================================================
// 2. STATE MANAGEMENT & LOCAL STORAGE
// ========================================================
let savedPlantIds = [];
try {
  savedPlantIds = JSON.parse(localStorage.getItem("florapulse_saved_plants") || "[]");
  if (!Array.isArray(savedPlantIds)) savedPlantIds = [];
} catch (e) {
  savedPlantIds = [];
}
let currentCategory = "all";
let currentSearchTerm = "";
let currentFilterLight = "all";
let currentFilterWater = "all";
let currentFilterDifficulty = "all";
let showSavedOnly = false;
let activeModalPlant = null;

// ========================================================
// 3. DOM ELEMENTS
// ========================================================
const plantGrid = document.getElementById("plantGrid");
const plantSearchInput = document.getElementById("plantSearchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const heroSearchInput = document.getElementById("heroSearchInput");
const heroSearchBtn = document.getElementById("heroSearchBtn");
const categoryPills = document.getElementById("categoryPills");
const filterLight = document.getElementById("filterLight");
const filterWater = document.getElementById("filterWater");
const filterDifficulty = document.getElementById("filterDifficulty");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const resultsCountText = document.getElementById("resultsCountText");
const emptyState = document.getElementById("emptyState");
const emptyResetBtn = document.getElementById("emptyResetBtn");
const savedOnlyCheckbox = document.getElementById("savedOnlyCheckbox");
const savedCount = document.getElementById("savedCount");
const savedPlantsBtn = document.getElementById("savedPlantsBtn");

// Mobile Drawer Elements
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileDrawer = document.getElementById("mobileDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const closeDrawerBtn = document.getElementById("closeDrawerBtn");

// Modal Elements
const plantModalOverlay = document.getElementById("plantModalOverlay");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalPlantTitle = document.getElementById("modalPlantTitle");
const modalBotanicalName = document.getElementById("modalBotanicalName");
const modalCategory = document.getElementById("modalCategory");
const modalHeaderBadges = document.getElementById("modalHeaderBadges");
const modalImage = document.getElementById("modalImage");
const modalDifficultyBadge = document.getElementById("modalDifficultyBadge");
const modalOverview = document.getElementById("modalOverview");
const modalLightSummary = document.getElementById("modalLightSummary");
const modalLightFill = document.getElementById("modalLightFill");
const modalWaterSummary = document.getElementById("modalWaterSummary");
const modalWaterFill = document.getElementById("modalWaterFill");
const modalFertSummary = document.getElementById("modalFertSummary");
const modalFertFill = document.getElementById("modalFertFill");
const modalTempSummary = document.getElementById("modalTempSummary");
const modalHumiditySummary = document.getElementById("modalHumiditySummary");
const modalWaterDetail = document.getElementById("modalWaterDetail");
const modalFertDetail = document.getElementById("modalFertDetail");
const modalLightDetail = document.getElementById("modalLightDetail");
const modalToxicityDetail = document.getElementById("modalToxicityDetail");
const modalSoilDetail = document.getElementById("modalSoilDetail");
const modalPruningDetail = document.getElementById("modalPruningDetail");
const modalPropDetail = document.getElementById("modalPropDetail");
const modalTroubleshootingList = document.getElementById("modalTroubleshootingList");
const modalSavePlantBtn = document.getElementById("modalSavePlantBtn");
const modalOpenCalcBtn = document.getElementById("modalOpenCalcBtn");

// Calculator Elements
const careCalcForm = document.getElementById("careCalcForm");
const calcPlantSelect = document.getElementById("calcPlantSelect");
const calcResult = document.getElementById("calcResult");
const calcResultPlantName = document.getElementById("calcResultPlantName");
const calcResultSeason = document.getElementById("calcResultSeason");
const calcWaterVal = document.getElementById("calcWaterVal");
const calcFertVal = document.getElementById("calcFertVal");
const calcSunVal = document.getElementById("calcSunVal");
const calcSoilCheckVal = document.getElementById("calcSoilCheckVal");
const calcTipVal = document.getElementById("calcTipVal");

// Contact Form Elements
const contactForm = document.getElementById("contactForm");
const contactSubmitBtn = document.getElementById("contactSubmitBtn");
const newsletterForm = document.getElementById("newsletterForm");

// ========================================================
// 4. RENDERING & FILTERING
// ========================================================
function renderPlants() {
  const filtered = PLANT_DATABASE.filter(plant => {
    // 1. Text search
    const searchMatch = !currentSearchTerm || 
      plant.name.toLowerCase().includes(currentSearchTerm) ||
      plant.botanicalName.toLowerCase().includes(currentSearchTerm) ||
      plant.overview.toLowerCase().includes(currentSearchTerm);

    // 2. Category pill
    let catMatch = true;
    if (currentCategory === "indoor") catMatch = plant.tags.includes("indoor");
    else if (currentCategory === "low-light") catMatch = plant.tags.includes("low-light");
    else if (currentCategory === "succulent") catMatch = plant.tags.includes("succulent");
    else if (currentCategory === "flowering") catMatch = plant.tags.includes("flowering");
    else if (currentCategory === "pet-safe") catMatch = plant.petSafe === true;
    else if (currentCategory === "air-purifying") catMatch = plant.tags.includes("air-purifying");

    // 3. Light filter
    let lightMatch = true;
    if (currentFilterLight === "low") lightMatch = plant.lightLevel <= 2;
    else if (currentFilterLight === "medium") lightMatch = plant.lightLevel === 2 || plant.lightLevel === 3;
    else if (currentFilterLight === "bright") lightMatch = plant.lightLevel >= 3;

    // 4. Water filter
    let waterMatch = true;
    if (currentFilterWater === "low") waterMatch = plant.waterLevel === 1;
    else if (currentFilterWater === "medium") waterMatch = plant.waterLevel === 2 || plant.waterLevel === 3;
    else if (currentFilterWater === "high") waterMatch = plant.waterLevel >= 4;

    // 5. Difficulty filter
    let diffMatch = true;
    if (currentFilterDifficulty !== "all") {
      diffMatch = plant.difficulty.toLowerCase() === currentFilterDifficulty.toLowerCase();
    }

    // 6. Saved only
    let savedMatch = true;
    if (showSavedOnly) {
      savedMatch = savedPlantIds.includes(plant.id);
    }

    return searchMatch && catMatch && lightMatch && waterMatch && diffMatch && savedMatch;
  });

  // Update counts
  resultsCountText.innerHTML = `Showing <strong>${filtered.length}</strong> of ${PLANT_DATABASE.length} plants`;

  // Render cards
  if (filtered.length === 0) {
    plantGrid.innerHTML = "";
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
    plantGrid.innerHTML = filtered.map(plant => createPlantCardHtml(plant)).join("");
    attachCardEventListeners();
  }

  updateSavedCounter();
}

function createPlantCardHtml(plant) {
  const isSaved = savedPlantIds.includes(plant.id);
  const petBadge = plant.petSafe 
    ? `<span class="badge-tag pet-safe">🐾 Pet Safe</span>`
    : `<span class="badge-tag toxic">⚠️ Toxic to Pets</span>`;

  return `
    <article class="plant-card" data-id="${plant.id}">
      <div class="card-image-wrap">
        <img 
          src="${plant.image}" 
          alt="${plant.name}" 
          class="card-img" 
          loading="lazy"
          onerror="this.onerror=null; this.src='${getBotanicalSvgFallback(plant.name)}';"
        >
        <div class="card-badges">
          <span class="badge-tag category">${plant.category.toUpperCase()}</span>
          ${petBadge}
        </div>
        <button class="btn-card-favorite ${isSaved ? 'saved' : ''}" data-id="${plant.id}" aria-label="Save ${plant.name}" title="Toggle Favorite">
          ${isSaved ? '❤️' : '🤍'}
        </button>
      </div>

      <div class="card-content">
        <div class="card-header-info">
          <h3 class="plant-name">${plant.name}</h3>
          <p class="botanical-name">${plant.botanicalName}</p>
        </div>

        <p class="plant-short-desc">${plant.overview}</p>

        <div class="care-metrics-bar">
          <div class="metric-pill">
            <span class="metric-icon">☀️</span>
            <div class="metric-text">
              <span class="metric-label">Light</span>
              <span class="metric-val" title="${plant.light}">${plant.light}</span>
            </div>
          </div>

          <div class="metric-pill">
            <span class="metric-icon">💧</span>
            <div class="metric-text">
              <span class="metric-label">Water</span>
              <span class="metric-val" title="${plant.water}">${plant.water}</span>
            </div>
          </div>

          <div class="metric-pill">
            <span class="metric-icon">🧪</span>
            <div class="metric-text">
              <span class="metric-label">Fertilizer</span>
              <span class="metric-val" title="${plant.fertilizer}">${plant.fertilizer}</span>
            </div>
          </div>

          <div class="metric-pill">
            <span class="metric-icon">🌱</span>
            <div class="metric-text">
              <span class="metric-label">Difficulty</span>
              <span class="metric-val">${plant.difficulty}</span>
            </div>
          </div>
        </div>

        <div class="card-action">
          <button class="btn-view-profile" data-id="${plant.id}">
            <span>View Full Care Profile</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `;
}

function attachCardEventListeners() {
  // Favorite button clicks
  document.querySelectorAll(".btn-card-favorite").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      toggleSavePlant(id);
    });
  });

  // Profile button clicks
  document.querySelectorAll(".btn-view-profile").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      openPlantModal(id);
    });
  });

  // Card whole-area click opens modal
  document.querySelectorAll(".plant-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      openPlantModal(id);
    });
  });
}

function updateSavedCounter() {
  savedCount.textContent = savedPlantIds.length;
}

function toggleSavePlant(plantId) {
  const index = savedPlantIds.indexOf(plantId);
  const plant = PLANT_DATABASE.find(p => p.id === plantId);
  const plantTitle = plant ? plant.name : "Plant";

  if (index === -1) {
    savedPlantIds.push(plantId);
    showToast(`Added ${plantTitle} to favorites! ❤️`);
  } else {
    savedPlantIds.splice(index, 1);
    showToast(`Removed ${plantTitle} from favorites`);
  }

  try {
    localStorage.setItem("florapulse_saved_plants", JSON.stringify(savedPlantIds));
  } catch (e) {
    console.warn("Could not save to localStorage", e);
  }
  renderPlants();

  // If active modal is for this plant, update modal button
  if (activeModalPlant && activeModalPlant.id === plantId) {
    updateModalSaveButton();
  }
}

// ========================================================
// 5. MODAL LOGIC
// ========================================================
function openPlantModal(plantId) {
  const plant = PLANT_DATABASE.find(p => p.id === plantId);
  if (!plant) return;

  activeModalPlant = plant;

  modalPlantTitle.textContent = plant.name;
  modalBotanicalName.textContent = plant.botanicalName;
  modalCategory.textContent = plant.category.toUpperCase();

  // Badges
  if (plant.petSafe) {
    modalHeaderBadges.innerHTML = `<span class="badge-tag pet-safe">🐾 ASPCA Pet Safe</span>`;
  } else {
    modalHeaderBadges.innerHTML = `<span class="badge-tag toxic">⚠️ Toxic if Ingested</span>`;
  }

  modalImage.src = plant.image;
  modalImage.alt = plant.name;
  modalImage.onerror = () => {
    modalImage.src = getBotanicalSvgFallback(plant.name);
  };
  modalDifficultyBadge.textContent = `${plant.difficulty} Care`;
  modalOverview.textContent = plant.overview;

  // Meters
  modalLightSummary.textContent = plant.light;
  modalLightFill.style.width = `${(plant.lightLevel / 4) * 100}%`;

  modalWaterSummary.textContent = plant.water;
  modalWaterFill.style.width = `${(plant.waterLevel / 4) * 100}%`;

  modalFertSummary.textContent = plant.fertilizer;
  modalFertFill.style.width = `${(plant.fertLevel / 4) * 100}%`;

  modalTempSummary.textContent = plant.temperature;
  modalHumiditySummary.textContent = plant.humidity;

  // Detailed tabs
  modalWaterDetail.textContent = plant.waterDetail;
  modalFertDetail.textContent = plant.fertDetail;
  modalLightDetail.textContent = plant.lightDetail;
  modalToxicityDetail.textContent = plant.toxicityDetail;

  modalSoilDetail.textContent = plant.soil;
  modalPruningDetail.textContent = plant.pruning;
  modalPropDetail.textContent = plant.propagation;

  // Troubleshooting list
  modalTroubleshootingList.innerHTML = plant.troubleshooting.map(t => `
    <div class="trouble-item">
      <strong>⚠️ ${t.problem}:</strong>
      <p>${t.solution}</p>
    </div>
  `).join("");

  updateModalSaveButton();

  // Reset tab to first tab
  document.querySelectorAll(".modal-tab-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
  document.querySelector('.modal-tab-btn[data-tab="care-details"]').classList.add("active");
  document.getElementById("tab-care-details").classList.add("active");

  // Open modal with smooth animation
  plantModalOverlay.classList.add("active");
  plantModalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closePlantModal() {
  plantModalOverlay.classList.remove("active");
  plantModalOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  activeModalPlant = null;
}

function updateModalSaveButton() {
  if (!activeModalPlant) return;
  const isSaved = savedPlantIds.includes(activeModalPlant.id);
  if (isSaved) {
    modalSavePlantBtn.innerHTML = `<span>Saved in Favorites</span> ❤️`;
    modalSavePlantBtn.classList.add("btn-saved-active");
  } else {
    modalSavePlantBtn.innerHTML = `<span>Save to My Favorites</span> 🤍`;
    modalSavePlantBtn.classList.remove("btn-saved-active");
  }
}

// Modal Tab Switcher
document.querySelectorAll(".modal-tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const tabName = btn.getAttribute("data-tab");
    document.querySelectorAll(".modal-tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));

    btn.classList.add("active");
    const targetPane = document.getElementById(`tab-${tabName}`);
    if (targetPane) targetPane.classList.add("active");
  });
});

modalSavePlantBtn.addEventListener("click", () => {
  if (activeModalPlant) {
    toggleSavePlant(activeModalPlant.id);
  }
});

modalOpenCalcBtn.addEventListener("click", () => {
  if (activeModalPlant) {
    const plantId = activeModalPlant.id;
    closePlantModal();
    const calcSection = document.getElementById("calculator");
    calcSection.scrollIntoView({ behavior: "smooth" });
    calcPlantSelect.value = plantId;
    calculatePlantSchedule();
  }
});

modalCloseBtn.addEventListener("click", closePlantModal);
plantModalOverlay.addEventListener("click", (e) => {
  if (e.target === plantModalOverlay) {
    closePlantModal();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && plantModalOverlay.classList.contains("active")) {
    closePlantModal();
  }
});

// ========================================================
// 6. CARE CALCULATOR & WATER SCHEDULER
// ========================================================
function populateCalculatorOptions() {
  calcPlantSelect.innerHTML = PLANT_DATABASE.map(p => `
    <option value="${p.id}">${p.name} (${p.botanicalName})</option>
  `).join("");
}

function calculatePlantSchedule(shouldScroll = true) {
  const selectedId = calcPlantSelect.value;
  const plant = PLANT_DATABASE.find(p => p.id === selectedId) || PLANT_DATABASE[0];
  const potSize = document.getElementById("calcPotSize").value;
  const season = document.getElementById("calcSeason").value;
  const environment = document.getElementById("calcEnvironment").value;
  const temp = document.getElementById("calcTemperature").value;

  // Base interval in days from waterLevel
  // 1: low (every 21 days), 2: medium-low (every 12 days), 3: medium (every 8 days), 4: high (every 5 days)
  let baseDays = 12;
  if (plant.waterLevel === 1) baseDays = 21;
  else if (plant.waterLevel === 2) baseDays = 12;
  else if (plant.waterLevel === 3) baseDays = 8;
  else if (plant.waterLevel === 4) baseDays = 5;

  // Pot size modifier (small pots dry faster, large pots retain water longer)
  if (potSize === "small") baseDays *= 0.75;
  else if (potSize === "large") baseDays *= 1.35;

  // Season modifier (winter = slower evaporation, active summer = faster transpiration)
  if (season === "winter") baseDays *= 1.5;

  // Environment light modifier (high light = faster water usage)
  if (environment === "high") baseDays *= 0.85;
  else if (environment === "low") baseDays *= 1.25;

  // Temperature modifier
  if (temp === "warm") baseDays *= 0.85;
  else if (temp === "cool") baseDays *= 1.3;

  const finalMinDays = Math.max(3, Math.round(baseDays * 0.9));
  const finalMaxDays = Math.max(finalMinDays + 2, Math.round(baseDays * 1.15));

  // Fertilizer recommendation based on season
  let fertText = "";
  if (season === "winter") {
    fertText = "Withhold Fertilizer (Winter Dormancy)";
  } else {
    fertText = plant.fertilizer;
  }

  // Sunlight Target
  const sunText = `${plant.light} (${environment === 'high' ? 'Sunny window' : 'Bright room ambient'})`;

  // Soil check guidance
  let checkText = "Top 2 inches completely dry";
  if (plant.waterLevel === 1) checkText = "100% bone-dry down to roots";
  else if (plant.waterLevel === 4) checkText = "Top 1/2 inch slightly dry (keep moist)";

  // Render Result
  calcResultPlantName.textContent = plant.name;
  calcResultSeason.textContent = season === "winter" ? "Fall / Winter Regimen ❄️" : "Spring / Summer Regimen ☀️";
  calcWaterVal.textContent = `Every ${finalMinDays} – ${finalMaxDays} Days`;
  calcFertVal.textContent = fertText;
  calcSunVal.textContent = sunText;
  calcSoilCheckVal.textContent = checkText;

  calcTipVal.innerHTML = `💡 <strong>Pro Tip:</strong> ${plant.troubleshooting[0] ? plant.troubleshooting[0].solution : "Always do the finger test before watering."}`;

  calcResult.style.display = "block";
  if (shouldScroll) {
    calcResult.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

careCalcForm.addEventListener("submit", (e) => {
  e.preventDefault();
  calculatePlantSchedule(true);
});

// ========================================================
// 7. SEARCH & FILTERS CONTROLS
// ========================================================
function setupFiltersAndSearch() {
  // Live search input
  plantSearchInput.addEventListener("input", (e) => {
    currentSearchTerm = e.target.value.trim().toLowerCase();
    clearSearchBtn.style.display = currentSearchTerm ? "block" : "none";
    renderPlants();
  });

  clearSearchBtn.addEventListener("click", () => {
    plantSearchInput.value = "";
    currentSearchTerm = "";
    clearSearchBtn.style.display = "none";
    renderPlants();
    plantSearchInput.focus();
  });

  // Hero search
  heroSearchBtn.addEventListener("click", () => {
    const val = heroSearchInput.value.trim();
    if (val) {
      currentSearchTerm = val.toLowerCase();
      plantSearchInput.value = val;
      clearSearchBtn.style.display = "block";
    }
    document.getElementById("plants").scrollIntoView({ behavior: "smooth" });
    renderPlants();
  });

  heroSearchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      heroSearchBtn.click();
    }
  });

  // Hero quick tags
  document.querySelectorAll(".tag-pill").forEach(tag => {
    tag.addEventListener("click", () => {
      const filterVal = tag.getAttribute("data-filter");
      if (filterVal === "low-light" || filterVal === "pet-safe") {
        setActiveCategory(filterVal);
      } else {
        currentSearchTerm = filterVal.toLowerCase();
        plantSearchInput.value = filterVal;
        clearSearchBtn.style.display = "block";
        renderPlants();
      }
      document.getElementById("plants").scrollIntoView({ behavior: "smooth" });
    });
  });

  // Category buttons
  categoryPills.addEventListener("click", (e) => {
    if (e.target.classList.contains("category-btn")) {
      const cat = e.target.getAttribute("data-category");
      setActiveCategory(cat);
    }
  });

  // Dropdown filters
  filterLight.addEventListener("change", (e) => {
    currentFilterLight = e.target.value;
    renderPlants();
  });

  filterWater.addEventListener("change", (e) => {
    currentFilterWater = e.target.value;
    renderPlants();
  });

  filterDifficulty.addEventListener("change", (e) => {
    currentFilterDifficulty = e.target.value;
    renderPlants();
  });

  // Saved only checkbox
  savedOnlyCheckbox.addEventListener("change", (e) => {
    showSavedOnly = e.target.checked;
    renderPlants();
  });

  // Reset Filters
  function resetAllFilters() {
    currentSearchTerm = "";
    plantSearchInput.value = "";
    heroSearchInput.value = "";
    clearSearchBtn.style.display = "none";

    currentCategory = "all";
    document.querySelectorAll(".category-btn").forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-category") === "all");
    });

    currentFilterLight = "all";
    filterLight.value = "all";

    currentFilterWater = "all";
    filterWater.value = "all";

    currentFilterDifficulty = "all";
    filterDifficulty.value = "all";

    showSavedOnly = false;
    savedOnlyCheckbox.checked = false;

    renderPlants();
  }

  resetFiltersBtn.addEventListener("click", resetAllFilters);
  emptyResetBtn.addEventListener("click", resetAllFilters);

  // Saved Plants navbar button toggles favorites view
  savedPlantsBtn.addEventListener("click", () => {
    showSavedOnly = !showSavedOnly;
    savedOnlyCheckbox.checked = showSavedOnly;
    document.getElementById("plants").scrollIntoView({ behavior: "smooth" });
    renderPlants();
    showToast(showSavedOnly ? "Showing your saved favorites ❤️" : "Showing all plant profiles 🌿");
  });
}

function setActiveCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-category") === cat);
  });
  renderPlants();
}

// Footer category links
document.querySelectorAll(".footer-cat-link").forEach(link => {
  link.addEventListener("click", (e) => {
    const cat = link.getAttribute("data-cat");
    if (cat) {
      setActiveCategory(cat);
    }
  });
});

// ========================================================
// 8. MOBILE DRAWER NAVIGATION
// ========================================================
function setupMobileDrawer() {
  function openDrawer() {
    mobileDrawer.classList.add("open");
    drawerBackdrop.classList.add("open");
    hamburgerBtn.setAttribute("aria-expanded", "true");
    mobileDrawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    mobileDrawer.classList.remove("open");
    drawerBackdrop.classList.remove("open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    mobileDrawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  hamburgerBtn.addEventListener("click", openDrawer);
  closeDrawerBtn.addEventListener("click", closeDrawer);
  drawerBackdrop.addEventListener("click", closeDrawer);

  document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}

// ========================================================
// 9. FAQ ACCORDION
// ========================================================
function setupFaqAccordion() {
  document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains("active");

      // Close other accordion items
      document.querySelectorAll(".faq-item").forEach(other => {
        other.classList.remove("active");
        other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });

      if (!isActive) {
        item.classList.add("active");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

// ========================================================
// 10. CONTACT FORM WITH VALIDATION & ANIMATION
// ========================================================
function setupContactForm() {
  const nameInput = document.getElementById("contactName");
  const emailInput = document.getElementById("contactEmail");
  const messageInput = document.getElementById("contactMessage");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Clear errors on typing
  nameInput.addEventListener("input", () => {
    nameInput.classList.remove("input-error");
    nameError.classList.remove("active");
  });

  emailInput.addEventListener("input", () => {
    emailInput.classList.remove("input-error");
    emailError.classList.remove("active");
  });

  messageInput.addEventListener("input", () => {
    messageInput.classList.remove("input-error");
    messageError.classList.remove("active");
  });

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    // Name validation
    if (!nameInput.value.trim()) {
      nameInput.classList.add("input-error");
      nameError.classList.add("active");
      isValid = false;
    }

    // Email validation
    if (!validateEmail(emailInput.value.trim())) {
      emailInput.classList.add("input-error");
      emailError.classList.add("active");
      isValid = false;
    }

    // Message validation
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      messageInput.classList.add("input-error");
      messageError.textContent = "Please provide at least 10 characters detailing your issue";
      messageError.classList.add("active");
      isValid = false;
    }

    if (!isValid) return;

    // Simulate sending with spinner animation
    const btnText = contactSubmitBtn.querySelector(".btn-text");
    const btnSpinner = contactSubmitBtn.querySelector(".btn-spinner");

    btnText.style.display = "none";
    btnSpinner.style.display = "inline-block";
    contactSubmitBtn.disabled = true;

    setTimeout(() => {
      btnText.style.display = "inline-block";
      btnSpinner.style.display = "none";
      contactSubmitBtn.disabled = false;

      // Show success toast
      showToast("🌿 Care inquiry received! Our horticulturists will reply within 24 hours.", "success");
      contactForm.reset();
    }, 1200);
  });
}

// Newsletter subscription handler
function setupNewsletterForm() {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("newsletterEmail").value.trim();
    if (email) {
      showToast("Thank you for joining the FloraPulse newsletter! 🌱", "success");
      newsletterForm.reset();
    }
  });
}

// ========================================================
// 11. TOAST NOTIFICATION SYSTEM
// ========================================================
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast ${type === "error" ? "toast-error" : ""}`;
  toast.innerHTML = `
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ========================================================
// 12. NAVBAR SCROLL EFFECT & ACTIVE LINK HIGHLIGHT
// ========================================================
function setupScrollEffects() {
  const navbar = document.getElementById("navbar");
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-item");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Update active nav link
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItems.forEach(item => {
          if (item.getAttribute("href") === `#${sectionId}`) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }
    });
  });
}

// ========================================================
// 13. INITIALIZATION
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
  renderPlants();
  populateCalculatorOptions();
  calculatePlantSchedule(false);
  setupFiltersAndSearch();
  setupMobileDrawer();
  setupFaqAccordion();
  setupContactForm();
  setupNewsletterForm();
  setupScrollEffects();
});


