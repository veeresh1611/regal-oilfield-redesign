# Regal Oilfield Equipments Trading LLC — Corporate Website Redesign

Modern, high-performance, and visually captivating redesign of the official corporate website for **Regal Oilfield Equipments Trading LLC** ([https://www.regaloilfield.ae/](https://www.regaloilfield.ae/)).

Preserves **100% of authentic factual company content**, technical product specifications, international manufacturer principals, verified client ecosystems (ADNOC Group, ADWEA, EPC contractors, and shipbuilding yards), and Abu Dhabi contact records.

---

## 🛠️ Technology Stack

* **Core**: React 19 with Vite 8 (Ultra-fast HMR, ES modules, minimal bundle footprint)
* **Styling**: Tailwind CSS with custom industrial energy-sector design tokens
* **Animations**: Motion for React (`motion/react` & `framer-motion`) with reduced-motion accessibility
* **Iconography**: `lucide-react`
* **State & Inquiry Flow**: Custom React Context (`RFQContext`) with persistent local storage

---

## 🏗️ Architecture & Component Organization

```
regal-oilfield-redesign/
├── public/
│   ├── assets/
│   │   ├── logo-original.png        # Original corporate logo
│   │   ├── hero-offshore.jpg        # Cinematic Arabian Gulf offshore visual
│   │   ├── engineering-valves.jpg   # Heavy valves & manifold fabrication visual
│   │   ├── products/                # 16 authentic original product line photographs
│   │   └── banners/                 # Original archive banners
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky header with UAE credentials, hotline & RFQ badge
│   │   ├── Hero.jsx                 # High-impact cinematic hero, stats & quick spec search
│   │   ├── AboutSection.jsx         # Corporate narrative, Mussaffah heritage, 6 procurement pillars
│   │   ├── ProductsCatalog.jsx      # Filterable & searchable 16-division technical catalog
│   │   ├── ProductDetailModal.jsx   # Engineering specifications table, standards & ASTM grades
│   │   ├── ShutdownSpecialist.jsx   # Spotlight on turnaround stock allocation & 24/7 hotline
│   │   ├── PrincipalsAndClients.jsx # Verified client ecosystem & 19 international brand principals
│   │   ├── ContactSection.jsx       # Verified contact directory, map embed, and RFQ form
│   │   ├── RFQDrawer.jsx            # Interactive technical RFQ basket with WhatsApp & Email submittal
│   │   └── Footer.jsx               # Legal notices, quick links, technical division directory
│   ├── context/
│   │   └── RFQContext.jsx           # State management for technical inquiry basket
│   ├── data/
│   │   └── companyData.js           # 100% verified factual data repository
│   ├── App.jsx                      # Main root application layout
│   ├── index.css                    # Design tokens, glassmorphism, scrollbars, accessibility
│   └── main.jsx                     # Application entry point
├── package.json
└── vite.config.js
```

---

## 📋 100% Verified Content Inventory

All 16 technical product lines from the reference website are preserved and enhanced with structured engineering data:

1. **API Fittings**: Flanges, Adapter Flanges, Swivel Flanges, Double Studded Adapter Flanges (DSAF), Companion Flanges, Flange-to-Union Crossover Pup Joints, Swivel Joints, Studded Crosses & Tees, Hammer Unions (*1-5/8” to 30”, up to 30,000 PSI*).
2. **Heat Exchanger Tubes & U-Bend Tubes**: ASME/ASTM A179, A192, A210 (Gr A1, C), A334 (Gr 1, 6), A209 (T1, T1a), A213 (T5, T11, T12, T22), A556, A199, A268, A269, A312, A376, A789, A790, B338, B861; BS 3059 Pt I/II, DIN 17175; U-Bend Tubes ASME/ASTM A213/A688 & TEMA R 23C (*OD 9.53mm - 50.80mm, legs up to 14m*).
3. **Finned Tubes**: Extruded Aluminium (Bimetallic), Helically Wound High Fin ('G' Fin, 'L' Fin, 'KL' Fin), Integral Low Fin (*Fin thk 0.8–3mm, OD 30–280mm*).
4. **Special Forge Components**: Forged Bars, Shafts, Tube Sheets, Shell Forgings, Hollow Shafts, Rings, Die Blocks & BOP / Valve Bodies.
5. **Pipes & Butt Weld Fittings**: Size 1/2” to 158”. ASTM A106, A312, A358, A671, A672. Inconel 625/825 cladding, spark-tested Cement/PTFE/PVDF linings.
6. **Forged Fittings & Flanges**: Fittings 1/8” to 4”, 2000–9000 lbs (SW & NPT). Flanges 1/2” to 72”+, Class 150–2500 / PN10–PN100 / 5k–30k (RF, FF, RTJ).
7. **Forged & Cast Steel Valves & Strainers**: Size 1/2” to 42”+. Ball, Gate, Globe, Check, Butterfly, Piston, Plug, Control Valves. Strainers: Y, Basket, Tee, Duplex, Conical. Inconel/SS overlay & linings.
8. **Instrumentation Tubes & Fittings**: Tubes 1/8” to 2”, thk 0.028”–0.18”. Austenitic (304/304L, 316/316L, 316Ti, 321, 347, 904L, 6Mo, 254SMO), Ferritic, Duplex, Nickel Alloys. Double-ferrule compression fittings 1/8” to 2”.
9. **Tube Clamps, Instrumentation Valves & Manifolds**: Valves 1/8” to 2”, 3,000–30,000 PSI (Needle, Ball, Check, Union Bonnet). 2/3/5-Way Manifolds. DIN 3015 Clamps.
10. **Pressure Gauges, Thermometers & Thermowells**: Gauges: Dial 1/2” to 6”, 15 to 30,000 PSI, accuracy 0.05–1%. Thermometers: Bimetal angle/straight/adjustable, V-shape with thermowell & siphon.
11. **CuNi (Copper-Nickel)**: CuNi 90/10 & CuNi 70/30 Pipes, Buttweld Fittings, Forged Flanges, Sheets, Round, Hex & Flat Bars.
12. **Structural Steel & Mesh**: Beams, Channels, Plates, Hollow sections to ASTM/DIN/EN/BS/JIS/GOST. Fine, Crimped, Coarse & Expanded Metal mesh.
13. **Cathodic Protection, Repair Composites & Protective Coatings**: VELODUR® / DURMETAL® cold welding systems, BELZONA® metal repair & corrosion compounds, Zinc & Aluminium sacrificial anodes.
14. **Cables & Accessories**: HV/LV power cables, fire performance cables, subsea & marine cables. ATEX glands, cleats, joints, and lugs.
15. **Engineering Fasteners & Gaskets**: Stud bolts, heavy hex nuts, anchor bolts (B7/2H, B8/8, SA790 UNS, Duplex) with PTFE/Xylan 1070/HDG coating. Spiral wound, Kammprofile, RTJ metallic rings, double jacketed, insulation kits.
16. **General Industrial Consumables**: Power tools, cutting/grinding discs, rigging, PPE, safety equipment for turnaround support.

---

## 🚀 Running Locally

### Prerequisites
* Node.js v18+ or v20+ / v24+
* npm v9+

### Commands
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel / Netlify
1. Connect the repository to Vercel or Netlify.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Node version: 18.x, 20.x, or 24.x

### Deploy via Docker / Nginx
```dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 🔒 Form & Backend Integration Notes

Per Phase 6 requirements:
* The contact form is a verified **frontend-first engineering form**.
* Submissions validate required technical fields and automatically generate a structured inquiry that the user can immediately transmit via **mailto (email client)** directly to `regal53@regaloilfield.ae` or transmit via **WhatsApp** to `+971-50-7949521`.
* **To connect a custom backend endpoint**: Simply point the `handleSubmit` method in `src/components/ContactSection.jsx` to your backend API or serverless function (e.g., SendGrid, Resend, or AWS SES).
