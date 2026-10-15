/**
 * Regal Oilfield Equipments Trading LLC - Factual Company Data Repository
 * 100% verified against original source https://www.regaloilfield.ae/
 */

export const COMPANY_INFO = {
  name: "Regal Oilfield Equipments Trading LLC",
  shortName: "Regal Oilfield",
  establishedLocation: "Mussaffah, Abu Dhabi, United Arab Emirates",
  poBox: "P.O.Box 128697",
  address: "P.O.Box 128697, Mussaffah Industrial Area, Abu Dhabi, UAE",
  phone: "+971-2-5535851",
  fax: "+971-2-5535652",
  mobile1: "+971-50-7949521",
  mobile2: "+971-55-8821109",
  whatsapp1: "971507949521",
  whatsapp2: "971558821109",
  email: "regal53@regaloilfield.ae",
  tagline: "Mechanical & Instrumentation Service Provider",
  standing: "Trusted SHUTDOWN SPECIALIST & Engineering Stockist in UAE and MENA Region",
  overview: "Regal oilfield equipments trading LLC is a leading trading and service providing company for Oil, Gas, Power & Water, Petrochemical & Marine Industries. Regal is based in Abu Dhabi and has positioned itself as one of the leading organizations through cooperation with our international reputed principals. Regal acts as an agent and stockist in UAE for a diverse range of products from reputed manufacturers from all over the world specialized in Mechanical and Instrumentation.",
  shutdownRole: "Regal Oilfield is also one of the trusted SHUTDOWN SPECIALISTS and is committed to clients' complete satisfaction. We specialize in fast-track procurement, expedited stock delivery, and mission-critical turnaround supplies for complex refinery, offshore, and industrial plant shutdowns.",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.9865840907714!2d54.47674831499269!3d24.34695998429873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6666fa5ff45f%3A0xfa7eb09570784518!2sRegal+Oil-Field+Equipments+Trading!5e0!3m2!1sen!2sin!4v1542816755331",
  googleMapsLink: "https://maps.google.com/?q=24.34695998429873,54.47674831499269",
  workingHours: "Monday – Friday: 8:00 AM – 5:30 PM (Saturday by appointment for emergency turnaround)"
};

export const VERIFIED_CLIENTELE = [
  {
    name: "ADNOC GROUP",
    role: "Abu Dhabi National Oil Company",
    description: "Supply of high-pressure API fittings, valves, clad pipes, instrumentation manifolds, and turnaround shutdown materials.",
    category: "National Oil Company"
  },
  {
    name: "ADWEA",
    role: "Abu Dhabi Water & Electricity Authority",
    description: "Heat exchanger tubes, finned exchangers, structural steel, and water transmission piping components.",
    category: "Power & Utilities"
  },
  {
    name: "EPC Contractors",
    role: "Engineering, Procurement & Construction",
    description: "Turnkey project supply, specialized forged components, high-spec alloys, and spark-tested lined piping.",
    category: "Major EPCs"
  },
  {
    name: "Shipbuilding & Marine",
    role: "Shipyards & Offshore Fabrication",
    description: "CuNi 90/10 & 70/30 piping, marine cables, Durmetal coldwelding, Belzona coatings, and sacrificial zinc/aluminum anodes.",
    category: "Marine & Offshore"
  }
];

export const REPUTED_PRINCIPALS = [
  { name: "SWAGELOK", category: "Instrumentation & Valves" },
  { name: "BELZONA", category: "Repair Composites & Coatings" },
  { name: "WIKA", category: "Pressure & Temperature Gauges" },
  { name: "SANDVIK", category: "Seamless Stainless & Nickel Alloys" },
  { name: "TUBACEX", category: "Exchanger & Line Tubing" },
  { name: "VELODUR / DURMETAL", category: "Cold Welding Systems" },
  { name: "BOTH-WELL", category: "High Pressure Forged Fittings" },
  { name: "ERNE FITTINGS", category: "Butt Weld Fittings" },
  { name: "FLUID CONTROLS", category: "Valves & Manifolds" },
  { name: "KRYSTAL STEEL", category: "Stainless Steel & Alloys" },
  { name: "NEUMIRA", category: "Industrial Piping" },
  { name: "ULMA", category: "Forged Flanges" },
  { name: "SMITH GASKETS", category: "Sealing Solutions" },
  { name: "PETROFAST", category: "Engineering Fasteners" },
  { name: "REOTEMP", category: "Thermowells & Bimetal" },
  { name: "VIAR", category: "Weldolets & Branch Fittings" },
  { name: "MELESI", category: "Flanges & Forgings" },
  { name: "VIRAJ", category: "Fasteners & Stainless Steel" },
  { name: "SUMITOMO METALS", category: "High Alloy Tubulars" }
];

export const PRODUCT_CATEGORIES = [
  "All",
  "Mechanical & Piping",
  "Instrumentation & Valves",
  "Heat Transfer & Tubes",
  "Sealing & Fasteners",
  "Marine & Protective"
];

export const PRODUCTS_CATALOG = [
  {
    id: "api-fittings",
    slug: "api-fittings",
    name: "API Fittings",
    category: "Mechanical & Piping",
    badge: "High Pressure up to 30K PSI",
    image: "/assets/products/API-Fittings.jpg",
    subtitle: "Flanges, Adapters, Hammer Unions, Swivel Joints & Spools",
    description: "Engineered high-pressure flow control fittings and connections for onshore and offshore drilling, wellheads, and severe service manifold environments.",
    specs: [
      { label: "Types", value: "Flanges, Adapter Flanges, Swivel Flanges, Double Studded Adapter Flange (DSAF), Companion Flange, Flange to Union Crossover Pup Joint, Swivel Joint, Studded Crosses & Tees & Hammer Unions" },
      { label: "Size Range", value: "1-5/8” To 30”" },
      { label: "Max Pressure", value: "Up to 30,000 PSI" }
    ],
    highlights: ["API 6A / 16A Standards", "Sour Service NACE MR0175 compliance", "Full material traceability"],
    originalPage: "api-fittings.php"
  },
  {
    id: "heat-exchanger-tubes",
    slug: "heat-exchanger-tubes",
    name: "Heat Exchanger Tubes & U-Bend Tubes",
    category: "Heat Transfer & Tubes",
    badge: "Precision Engineered",
    image: "/assets/products/Heat-Exchanger-Tubes-&-U-Bend-Tubes.jpg",
    subtitle: "High-spec seamless & welded tubulars for thermal process units",
    description: "High-integrity tubes manufactured according to ASME, DIN, EN, BS, JIS, and GOST standards for shell-and-tube exchangers, coolers, and boilers.",
    specs: [
      { label: "Standards", value: "ASME, DIN, EN, BS, NFA, JIS, GOST and others" },
      { label: "ASTM Grades", value: "A 179, A 192, A 210 (Grade A1, C), A 334 (Grade 1, 6), A 209 (Grade T1, T1a), A 213 (Grade T5, T11, T12, T22), A 556 (Grade-A2- B2-C2), A 199(T5), A 268, A 269, A 312, A 376, A 789, A 790, B 338 & B 861" },
      { label: "BS 3059", value: "Part I (Grade 320), Part II (Grade 360, 440) BS 3602 PT-1, CFS 360, BS-980(CDS-1)" },
      { label: "DIN 17175", value: "ST35.8, ST45.8, 15 MO3, 10CrMo44, 13CrMo910" },
      { label: "U-Bend Standards", value: "ASME / ASTM A213 / A688 & TEMA R 23C" },
      { label: "U-Bend OD", value: "9.53 mm to 50.80 mm" },
      { label: "Thickness", value: "0.5 mm to 3.68 mm" },
      { label: "Leg Length", value: "Up to 14 Meters Leg Length" }
    ],
    highlights: ["TEMA R compliant U-bending", "Hydrotested & Eddy-current tested", "Titanium & Duplex available"],
    originalPage: "heat-exchanger-tubes.php"
  },
  {
    id: "finned-tubes",
    slug: "finned-tubes",
    name: "Finned Tubes",
    category: "Heat Transfer & Tubes",
    badge: "Air-Cooled Exchangers",
    image: "/assets/products/Finned-Tubes.jpg",
    subtitle: "Extruded Aluminium, 'G' Fin, 'L' Fin, 'KL' Fin & Integral Low Fin",
    description: "High-efficiency heat transfer tubes engineered for Air Cooled Heat Exchangers (ACHE), fin-fan coolers, economizers, and gas turbine cooling.",
    specs: [
      { label: "Types", value: "Extruded Aluminium Fin Tubes (Bimetallic Fin Tube), Helically Wound High Fin Tubes 'G' Fin (Embedded Fin / Edge Grooved Fin), 'L' Fin (Shoulder Tension Fins / Wrap on Fins), 'KL' Fin (Knurled 'L' Fins), Integral Low Fin Tubes" },
      { label: "Fin Thickness", value: "Minimum 0.8 mm to Maximum 3 mm" },
      { label: "Fin Height", value: "Minimum 0.25” (6.35 mm) to 1.5” (38 mm) (depending on bare tube OD)" },
      { label: "Fin Density", value: "Minimum 46 fins/meter to maximum 287 fins/meter (depending on thickness)" },
      { label: "Fin Material", value: "Carbon Steel, Stainless Steel (304, 316, 310, 410, 321, 347 etc.), Alloy Steel (P5, P9, P11, P22 etc.), Inconel, High Chrome, High Nickel & Incoloy (Any Ferrous Material)" },
      { label: "Tube Diameter", value: "30 mm OD minimum to 280 mm OD maximum" },
      { label: "Tube Thickness", value: "Minimum 2 mm" },
      { label: "Tube Material", value: "Carbon Steel, Stainless Steel (304, 316, 310, 410, 321, 347 etc.), Alloy Steel (P5, P9, P11, P22 etc.), Inconel, High Chrome, High Nickel & Incoloy" }
    ],
    highlights: ["High thermodynamic efficiency", "Vibration resistant", "Severe desert atmospheric protection"],
    originalPage: "finned-tubes.php"
  },
  {
    id: "special-forge-components",
    slug: "special-forge-components",
    name: "Special Forge Components",
    category: "Mechanical & Piping",
    badge: "Custom Engineering",
    image: "/assets/products/Special-Forge-Components-for-Oil-&-Gas.jpg",
    subtitle: "Forged Bars, Shafts, Tube Sheets, Rings & BOP Bodies",
    description: "Custom heavy-forged and precision-machined elements fabricated to exact client drawings and proprietary oilfield engineering specifications.",
    specs: [
      { label: "Components Scope", value: "Forged Bars, Shaft & Step Shaft, Tube Sheets, Shell Forgings, Forged Pipe & Hollow Shaft Forgings, Rings, Die Blocks & Round BOP & Valve Bodies, Heavy Machined Products as per client’s requirements / drawings" },
      { label: "Execution", value: "Engineered as per client proprietary drawings & Lloyd's/DNV/Third-Party inspection" }
    ],
    highlights: ["100% UT tested", "Forged integrity for high-shock applications", "Fast-track forging programs"],
    originalPage: "special-forge-components.php"
  },
  {
    id: "pipes-butt-weld-fittings",
    slug: "pipes-butt-weld-fittings",
    name: "Pipes & Butt Weld Fittings",
    category: "Mechanical & Piping",
    badge: "Up to 158 Inches",
    image: "/assets/products/Pipes-&-Butt-Weld-Fittings.jpg",
    subtitle: "Large diameter seamless and welded piping systems with lining options",
    description: "Complete piping packages for upstream gathering, transmission lines, refinery processing, and heavy industrial plant construction.",
    specs: [
      { label: "Size", value: "1/2” To 158”" },
      { label: "Types of Fittings", value: "Elbows (SR, LR & 5D), Equal & Reducing Tees, Caps, Concentric and Eccentric Reducers" },
      { label: "Pipe Specification", value: "ASTM A106, A312, A358, A671, A672, and related API specifications" },
      { label: "Material", value: "Nickel Alloy, Stainless Steel, Alloy Steel, Carbon Steel, High Tensile / Low Temperature CS" },
      { label: "Special Cladding", value: "Stainless Steel & Inconel 625 / 825 Cladding" },
      { label: "Lining Options", value: "Cement / PTFE / PVDF Lining (Supplied With Spark Test Certification)" }
    ],
    highlights: ["Spark tested corrosion barrier", "3D & 5D induction bends", "Heavy wall thickness capability"],
    originalPage: "pipes-butt-weld-fittings.php"
  },
  {
    id: "forged-fittings-flanges",
    slug: "forged-fittings-flanges",
    name: "Forged Fittings & Flanges",
    category: "Mechanical & Piping",
    badge: "Class 150 to 2500 LBS",
    image: "/assets/products/Forged-Fittings-&-Flanges.jpg",
    subtitle: "High-pressure threaded & socket-weld fittings and industrial flanges",
    description: "Full spectrum forged pressure retaining fittings and flanged connections for process piping, manifolds, and skid assemblies.",
    specs: [
      { label: "Fittings Size", value: "1/8” to 4”" },
      { label: "Fittings Rating", value: "2000, 3000, 6000 & 9000 lbs" },
      { label: "Fittings Types (SW & NPT)", value: "Elbows, Tees, Crosses, Couplings, Caps, Plugs (Sq/Hex/Rd), Unions, O'Lets (Weldolet, Sockolet, Threadolet), Bushings, Swage / Pipe Nipples" },
      { label: "Flanges Size", value: "From 1/2\" to 72” & above" },
      { label: "Flanges Rating", value: "150 to 2500 lbs / PN 10 to PN 100 / 5k to 30K" },
      { label: "Flanges Standards", value: "ASTM / ASME / ANSI / AISI / DIN / BS / JIS" },
      { label: "Flange Facings & Types", value: "RF (Raised Face), FF (Flat Face), RTJ (Ring Type Joint) — Weld Neck, Blind, Slip-On, Socket Weld, Threaded, Lap Joint" }
    ],
    highlights: ["High-pressure ASME B16.11 & B16.5", "Full MTC to EN 10204 3.1 / 3.2", "Duplex, Super Duplex & Inconel"],
    originalPage: "forged-fittings-flanges.php"
  },
  {
    id: "steel-valves-strainers",
    slug: "steel-valves-strainers",
    name: "Forged & Cast Steel Valves & Strainers",
    category: "Instrumentation & Valves",
    badge: "Up to 42” & Above",
    image: "/assets/products/Forged-Cast-Steel-Valves-&-Strainers.jpg",
    subtitle: "Critical isolation, throttling, flow control & pipeline protection",
    description: "Heavy duty industrial valves and filtration strainers certified for harsh sour oilfield services, high temperature steam, and cryogenic applications.",
    specs: [
      { label: "Size Range", value: "1/2” TO 42” & above" },
      { label: "Valve Types", value: "Ball, Gate, Globe, Check, Butterfly, Piston, Plug & Double Check Ball, Control Valves" },
      { label: "Strainer Types", value: "Y-Type, Basket, Tee, Duplex & Conical Strainers" },
      { label: "Service Application", value: "Oil, Gas, Industrial, Marine & Cryogenic Service" },
      { label: "Material Metallurgy", value: "Super Duplex, Duplex, Nickel Alloys, Stainless Steel, Carbon Steel (Standard & Low Temp)" },
      { label: "Design Standards & Ratings", value: "API 6D, API 600, API 602, BS, ANSI, ASME" },
      { label: "Connections", value: "SW, Flanged, Threaded, Beveled, Conduit Type" },
      { label: "Special Coatings / Overlays", value: "Nickel / SS Overlay on Body / Trim & Rubber / Cement / PVDF / PTFE Lining on body" }
    ],
    highlights: ["Fugitive emission tested", "Fire-safe certified API 607", "Cryogenic extension bonnets"],
    originalPage: "steel-valves-strainers.php"
  },
  {
    id: "instrumentation-tubes-fittings",
    slug: "instrumentation-tubes-fittings",
    name: "Instrumentation Tubes & Fittings",
    category: "Instrumentation & Valves",
    badge: "Leak-Free Compression",
    image: "/assets/products/Instrumentation-Tubes-&-Fittings.jpg",
    subtitle: "Seamless precision tubes & double-ferrule compression connectors",
    description: "Ultra-clean hydraulic and pneumatic instrumentation tubing engineered for measurement loops, control panels, chemical injection, and analyzer systems.",
    specs: [
      { label: "Tubes Size Range", value: "1/8” (3.175 mm) to 2” (50.8 mm)" },
      { label: "Wall Thickness", value: "0.028” (0.71 mm) to 0.18” (4.57 mm)" },
      { label: "Tube Specifications", value: "ASME & ASTM A 213 / A 268 / A 269 / A 312 / A 789 / A 790 / SB 165 / SB 338 / SB 423 / SB 444 / SB 729 / SB 829 / EN 10216-5 / EN 10297-2 / DIN 2391" },
      { label: "Austenitic Grades", value: "304/304L, 1.4306, 304H, 310S, 316/316L, 316Ti, 317L, 321/321H, 347H, 904 L, UNS No. S31254 (254 SMO)" },
      { label: "Ferritic Grades", value: "409/L, 410, 430/Ti, 436, 439" },
      { label: "Duplex Steel", value: "UNS 31254, 31500, 31803, 32205" },
      { label: "Nickel Alloys", value: "Alloy 8020, Alloy 8028, Monel 400, Inconel 6600, Inconel 6625, Inconel 8800, Inconel 8825 & Hastelloy C - 276, 6Mo" },
      { label: "Tube Fittings Sizes", value: "1/8” (3.175 mm) to 2” (50.8 mm)" },
      { label: "Fittings Material", value: "Carbon Steel ASTM A 105, Stainless Steel ASTM A 479 / A182 F 304, F316, F304L, F316L, F321, Cupro Nickel, Monel, Inconel, Hastelloy 'C', Titanium, 6Mo" }
    ],
    highlights: ["Double ferrule positive seal", "Swagelok interchangeability", "Severe offshore sour gas tested"],
    originalPage: "instrumentation-tubes-fittings.php"
  },
  {
    id: "tube-clamps-instrumentation-valves-manifolds",
    slug: "tube-clamps-instrumentation-valves-manifolds",
    name: "Tube Clamps, Instrumentation Valves & Manifolds",
    category: "Instrumentation & Valves",
    badge: "Up to 30,000 PSI",
    image: "/assets/products/Tube-Clamps-Instrumentation-Valves-&-Manifolds.jpg",
    subtitle: "Needle valves, 2/3/5-way manifolds & DIN 3015 mounting clamps",
    description: "Comprehensive panel and line mounting systems along with precision isolation and bleed manifolds for transmitters and pressure switches.",
    specs: [
      { label: "Valve Sizes", value: "1/8” to 2”" },
      { label: "Pressure Rating", value: "3,000, 6,000, 10,000 & 30,000 PSI" },
      { label: "Types of Valves", value: "Needle, Ball, Check & Union Bonnet Valves" },
      { label: "Types of Manifolds", value: "2-Way, 3-Way & 5-Way Manifolds" },
      { label: "Valves / Manifolds Material", value: "ASTM A105, A 479 SS304, A479 SS316, A182 Gr. F316, Monel & Hastelloy" },
      { label: "Tube Clamps Types", value: "Standard Duty & Heavy Duty Tube Clamps" },
      { label: "Clamp Installations", value: "Vertical, Horizontal Multiple, Horizontal Back to Back, Channel Mounting with or without Top Plate" },
      { label: "Clamp Assemblies", value: "With Weld Plate & Screws, With Weld Plate, Top Plate & Hex Bolts & Channel Mounting Rail" }
    ],
    highlights: ["Non-rotating tip design", "DIN 3015 vibration dampening", "Integral gauge vent valves"],
    originalPage: "tube-clamps-instrumentation-valves-manifolds.php"
  },
  {
    id: "pressure-gauges-thermometers-thermowells",
    slug: "pressure-gauges-thermometers-thermowells",
    name: "Pressure Gauges, Thermometers & Thermowells",
    category: "Instrumentation & Valves",
    badge: "0.05% Accuracy",
    image: "/assets/products/Pressure-Gauges-Thermometers-&-Thermowells.jpg",
    subtitle: "Precision pressure and temperature measurement for process safety",
    description: "Industrial gauges and temperature sensors manufactured to withstand high vibration, pulsating pressures, corrosive fluids, and extreme temperatures.",
    specs: [
      { label: "Gauge Types", value: "Standard, Diaphragm, Differential, Test Gauges With or Without Glycerin Filled" },
      { label: "Dial Size", value: "1/2” to 6”" },
      { label: "Accuracy", value: "0.05 / 1 / 2 / 3 %" },
      { label: "Pressure Range", value: "15 to 30,000 PSI" },
      { label: "Gauge Material", value: "Anodized Aluminium, Stainless Steel with Brass / SS Process Connection with Wetted parts SS / Monel / Inconel" },
      { label: "Thermometer Types", value: "Bimetal (Angle Form, Straight Form, Adjustable (ANY) Angle Form), V Shape Thermometer With Thermowell Syphon" },
      { label: "Thermometer Body", value: "Nickel Alloy / SS / Anodized Aluminum Material" },
      { label: "Process Connection", value: "Brass / SS / Nickel Alloy" },
      { label: "Wetted Parts", value: "SS / Nickel Alloys" },
      { label: "Temperature Accuracy", value: "± 1% of the scale, temperature readings stabilized within 40 seconds" }
    ],
    highlights: ["WIKA / REOTEMP compatible calibration", "Explosion-proof casings", "Solid-front blowout safety"],
    originalPage: "pressure-gauges-thermometers-thermowells.php"
  },
  {
    id: "cuni",
    slug: "cuni",
    name: "CUNI (Copper-Nickel Alloys)",
    category: "Marine & Protective",
    badge: "Seawater Corrosion Proof",
    image: "/assets/products/cuni.jpg",
    subtitle: "CuNi 90/10 & CuNi 70/30 Pipes, Fittings, Flanges & Bars",
    description: "Specialized non-ferrous copper-nickel alloy products engineered for seawater cooling systems, offshore oil rigs, ship piping, and desalination plants.",
    specs: [
      { label: "Items Scope", value: "CuNi Pipes, Buttweld Fittings, Forged Fittings & Flanges, Sheets, Round, Hex & Flat Bars" },
      { label: "Grade Specifications", value: "CuNi 90/10 (C70600) & CuNi 70/30 (C71500)" }
    ],
    highlights: ["Bio-fouling resistance", "Exceptional marine durability", "Desalination plant approved"],
    originalPage: "cuni.php"
  },
  {
    id: "structural-steel-mesh",
    slug: "structural-steel-mesh",
    name: "Structural Steel & Mesh",
    category: "Mechanical & Piping",
    badge: "Certified Mill Standard",
    image: "/assets/products/Structural-Steel-&-Mesh.jpg",
    subtitle: "Heavy structural elements and custom perforated / woven wire mesh",
    description: "Prime quality beams, columns, plates, and industrial meshes delivered for offshore platform topsides, refinery structures, and heavy civil foundations.",
    specs: [
      { label: "Structural Steel Scope", value: "In any standard and non-standard grade, dimension and shape. Individual special forms on request. Cutting, machining and marking according to client requirements. Elements delivered acc. to ASTM, DIN, EN, BS, NFA, JIS, GOST and other standards & grades." },
      { label: "Mesh Types", value: "Fine Wire Mesh, Crimped Wire Mesh, Coarse Wire Mesh, Expanded Metal Sheet, Welded Mesh, etc." },
      { label: "Mesh Material Grades", value: "SS 304, 304L, 316, 316L, Monel, Inconel, Spring Steel, Mild Steel, GI Wires & grades as per client’s requirement" }
    ],
    highlights: ["Offshore topside framing", "Custom hole perforation patterns", "Complete 3.2 mill test certs"],
    originalPage: "structural-steel-mesh.php"
  },
  {
    id: "cathodic-protection",
    slug: "cathodic-protection",
    name: "Cathodic Protection, Repair Composites & Protective Coating",
    category: "Marine & Protective",
    badge: "BELZONA & VELODUR",
    image: "/assets/products/Cathodic-Protection-Repair-Composites-&-Protective-Coating.jpg",
    subtitle: "VELODUR / DURMETAL Coldwelding, BELZONA Coatings & Sacrificial Anodes",
    description: "World-renowned industrial maintenance cold-repair systems, protective polymer coatings, and cathodic galvanic protection for severe corrosive exposure.",
    specs: [
      { label: "Repair Composites", value: "VELODUR® / DURMETAL® Coldwelding System for Power Plants (Nuclear & Utility Companies), Refineries (Oil & Gas), Offshore Ship & Marine Industries, Chemical & Petrochemical Industries" },
      { label: "Protective Coating (BELZONA)", value: "Metal Repair / Rebuilding Compounds, Erosion Corrosion Protection, Rubber Repair & Protection, Abrasion Resistant Linings, Casting / Injection Materials, High Temperature Coatings, Corrosion Protection" },
      { label: "Cathodic Protection", value: "Zinc & Aluminium Sacrificial Anodes — Standard & as per Client’s requirements / drawings for Oil, Gas & Marine Industries" }
    ],
    highlights: ["No-heat cold repair safety", "Emergency leak sealing during operation", "DNV / ABS marine approved anodes"],
    originalPage: "cathodic-protection.php"
  },
  {
    id: "cables-accessories",
    slug: "cables-accessories",
    name: "Cables & Accessories",
    category: "Marine & Protective",
    badge: "Flame Retardant & Subsea",
    image: "/assets/products/Cables-&-Accessories.jpg",
    subtitle: "HV/LV power cables, fire performance cables & explosion-proof glands",
    description: "Certified marine, offshore, instrumentation, and power cabling systems engineered for harsh maritime and hazardous industrial plant zones.",
    specs: [
      { label: "Cable Types", value: "Copper Rod & Wires, High Voltage Cables, Low Voltage Cables, Fire Performance Cables, Instrumentation & Control Cables, Marine & Subsea Cables" },
      { label: "Cable Accessories Types", value: "Cable Glands, Connectors & Tooling, Cleats & Cable Fixings, Cable Joints & Terminations, Cable Lugs" }
    ],
    highlights: ["ATEX / IECEx certified glands", "Halogen-free fire survival", "Marine offshore Lloyds approval"],
    originalPage: "cables-accessories.php"
  },
  {
    id: "fasteners-gaskets",
    slug: "fasteners-gaskets",
    name: "Engineering Fasteners & Gaskets",
    category: "Sealing & Fasteners",
    badge: "API & PTFE Coated",
    image: "/assets/products/Engineering-Fasteners-&-Gaskets.jpg",
    subtitle: "High-tensile stud bolts, heavy hex nuts & spiral wound / RTJ gaskets",
    description: "Critical pressure boundary bolting and flange sealing systems engineered to maintain joint integrity under thermal cycling and extreme pressures.",
    specs: [
      { label: "Fasteners Types", value: "Engineering Studs, Machine Bolts, Nuts, Washers, U-Bolts, Anchor Bolts (J, L, Straight Type), Collar Studs as per drawings" },
      { label: "Fasteners Material", value: "Super Duplex, Duplex, Stainless Steel, Carbon Steel" },
      { label: "Fasteners Grades", value: "ASTM SA 790 UNS / B8 / B7 / 8 / 7 / 4 / 2 / H / M" },
      { label: "Protective Coatings", value: "PTFE, XYLAN 1070, Hot Dipped Galvanized (HDG), Cadmium, etc." },
      { label: "Gasket Types", value: "Spiral Wound, Ring Joint (RTJ), Rubber, Metal Jacketed, Double Jacketed Gaskets & Flange Insulation Sets" },
      { label: "Gasket Materials", value: "Duplex, Super Duplex, Stainless Steel, Carbon Steel, Rubber, Graphite, PTFE, etc." }
    ],
    highlights: ["Anti-galling XYLAN coatings", "Flange insulation kits for dielectric protection", "Full traceability stampings"],
    originalPage: "fasteners-gaskets.php"
  },
  {
    id: "general-items",
    slug: "general-items",
    name: "General Industrial Consumables",
    category: "Mechanical & Piping",
    badge: "MRO Turnaround Support",
    image: "/assets/products/General-Items.jpg",
    subtitle: "Daily consumables, cutting & grinding discs, hand/power tools, safety PPE",
    description: "Comprehensive maintenance, repair, and operational consumables essential for ongoing industrial maintenance, shutdowns, and construction works.",
    specs: [
      { label: "Scope of Consumables", value: "Daily consumables, such as Hand Tools, Cutting Tools, Power Tools, Cutting & Grinding Discs, Safety items (PPE), Rigging hardware, etc." }
    ],
    highlights: ["Same-day warehouse dispatch in Abu Dhabi", "EN / ANSI safety compliance", "Bulk turnaround supply packages"],
    originalPage: "general-items.php"
  }
];

export const SHUTDOWN_SERVICES = {
  title: "Trusted Turnaround & Shutdown Specialist",
  badge: "Mission Critical Readiness",
  intro: "Regal Oilfield has earned its standing among Abu Dhabi's premier energy operators as the trusted SHUTDOWN SPECIALIST. We understand that during refinery, petrochemical, and power plant turnarounds, every hour of unplanned downtime incurs tremendous costs.",
  capabilities: [
    {
      title: "Immediate Stock Allocation",
      description: "Direct access to our Mussaffah stockyard for emergency replacement of valves, gaskets, stud bolts, and high-pressure fittings.",
      icon: "ShieldAlert"
    },
    {
      title: "Special Alloy Expediting",
      description: "Global rapid sourcing network for exotic metals (Inconel 625/825, Hastelloy C-276, Super Duplex, Titanium) when unexpected corrosion is discovered.",
      icon: "Clock"
    },
    {
      title: "Cold Repair Solutions",
      description: "Emergency cold-welding systems (VELODUR / DURMETAL) and BELZONA metal rebuilding compounds allowing in-situ pipe and vessel repair without hot work permits.",
      icon: "Wrench"
    },
    {
      title: "Pre-Shutdown BOM Kitting",
      description: "Complete pre-packaging of all required flanges, fasteners, insulation kits, and tube bundles organized by plant unit and work pack.",
      icon: "PackageCheck"
    }
  ],
  verifiedClients: ["ADNOC Refining", "ADNOC Gas Processing", "ADNOC Offshore", "ADWEA Power Stations", "Regional EPC Turnarounds"]
};
