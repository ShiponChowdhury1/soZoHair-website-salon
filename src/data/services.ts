// ============================================================
// SoZo Hair Spa & Wigs — Unified Services Data
// ============================================================

export type PricingTable = {
  name: string;
  sub?: string;
  columns: string[];
  rows: string[][];
};

export type SimpleTable = {
  columns: string[];
  rows: string[][];
};

export type Benefit = {
  icon: string;
  title: string;
  desc: string;
};

export type FAQ = {
  q: string;
  a: string;
};

export type StatItem = {
  num: string;
  label: string;
};

export type ExtraContent = {
  title: string;
  body: string;
};

export type ServiceType =
  | "pricing-multi"    // Hair Cuts, Specialty (multi-column price table)
  | "pricing-simple"   // Waxing, Lash/Brow (2-col price table)
  | "info-benefits"    // Extensions, Scalp Facial (benefit cards)
  | "info-faq"         // Pure Plasma (benefits + FAQs)
  | "faq-stats";       // CryoSkin (stats + FAQs)

export type Service = {
  id: string;
  title: string;
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: string;   // path to image, e.g. "/landing/services/hair-cuts.png"
  heroDetailImage?: string; // detail page hero banner image
  galleryImages?: string[];
  intro: string;
  type: ServiceType;

  // pricing-multi
  tables?: PricingTable[];

  // pricing-simple
  tableNote?: string;
  simpleTable?: SimpleTable;

  // info-benefits / info-faq
  highlights?: Benefit[];
  benefits?: Benefit[];
  extraContent?: ExtraContent;
  treats?: string[];   // Pure Plasma "what it treats" list

  // faq-stats
  stats?: StatItem[];

  // shared optional
  faqs?: FAQ[];
  notes?: string[];
  details?: string;
};

// ============================================================
// SERVICE DATA
// ============================================================

export const services: Service[] = [
  // ── 1. Hair Cuts & Color ──────────────────────────────────
  {
    id: "hair-cuts-color",
    title: "Hair Cuts & Color",
    badge: "HAIR CUTS & COLOR",
    heroTitle: "The Art of Beautiful Hair Cuts & Color",
    heroSubtitle: "Every visit is a personalized transformation designed around you.",
    heroImage: "/landing/services/hair-cuts.png",
    heroDetailImage: "/landing/services/hair-color-and-cuts-details.png",
    intro:
      "Great hair coloring and hair cuts are just minutes away in West Chester. Our hair artists will satisfy and delight you with their experience, talent and skill! Consider adding hair highlighting, or get an updo for that special occasion. After your hair appointment, be sure to stay for a manicure and pedicure and a therapeutic massage to complete your SoZo HAIR by Bajon Salon & Spa experience.",
    type: "pricing-multi",
    tables: [
      {
        name: "Artistic Cuts",
        sub: "Artistic cut always includes shampoo & style",
        columns: ["Service", "Hair Artist", "Advanced", "Master", "Sr Master", "Expert"],
        rows: [
          ["Women's Cut & Style", "$53", "$59", "$66", "$73", "$80"],
          ["Long Cut & Style", "$63", "$70", "$77", "$84", "$92"],
          ["Women's Dry Cut", "$43", "$49", "$56", "$63", "$70"],
          ["Men's Cut & Style", "$41", "$45", "$47", "$52", "$57"],
          ["Men's Dry Cut", "$36", "$36", "$36", "$41", "$43"],
          ["Kids Girl Cut (Under 10)", "$36", "$40", "$42", "$46", "$50"],
          ["Kids Boys Cut (Under 10)", "$31", "$34", "$37", "$41", "$45"],
          ["Shampoo Blowout", "$46", "$49", "$52", "$56", "$62"],
          ["Ironwork Dry Style", "$32", "$32", "$37", "$37", "$40"],
          ["Ironwork Add On", "$24", "$24", "$24", "$28", "$30"],
          ["Formal Finish (standard)", "$66", "$71", "$76", "$81", "$90"],
          ["Formal Finish (extravagant)", "$78", "$81", "$86", "$191", "$102"],
          ["Scalp Facial", "$95", "$101", "$108", "$115", "$120"],
          ["Deep Conditioning Treatment", "$42", "$42", "$42", "$42", "$42"],
          ["Bang Trim", "$31", "$31", "$32", "$34", "$37"],
          ["Wig Cutting Service", "$55 & up", "$55 & up", "$55 & up", "$55 & up", "$55 & up"],
          ["Red Light Scalp Therapy", "$25", "$25", "$25", "$25", "$25"],
          ["Tape-In Extensions", "By Consultation", "By Consultation", "By Consultation", "By Consultation", "By Consultation"],
        ],
      },
      {
        name: "Salon Color",
        sub: "Prices do not include artistic cut or blowdry",
        columns: ["Service", "Hair Artist", "Advanced", "Master", "Sr Master", "Expert"],
        rows: [
          ["Full Highlight", "$95", "$105", "$115", "$125", "$140"],
          ["Virgin Full Highlight", "$122", "$132", "$142", "$152", "$167"],
          ["Partial Highlight", "$80", "$90", "$100", "$110", "$123"],
          ["Virgin Partial Highlight", "$102", "$112", "$122", "$132", "$145"],
          ["Panel Highlight", "$52", "$55", "$60", "$65", "$71"],
          ["1/2 Panel Highlight", "$38", "$46", "$51", "$55", "$61"],
          ["Tint Re-Touch", "$68", "$73", "$80", "$85", "$95"],
          ["All Over Color", "$88", "$95", "$100", "$105", "$115"],
          ["Blending Color for Men", "$51", "$52", "$54", "$56", "$63"],
          ["Blowout with Color (& up)", "$26", "$26", "$31", "$35", "$38"],
          ["Toning", "$50", "$55", "$60", "$65", "$73"],
          ["Sealer & Restructuring Treatment", "$40", "$40", "$40", "$40", "$43"],
          ["Deep Conditioning Treatment", "$39", "$39", "$39", "$39", "$42"],
          ["Glossing", "$50", "$55", "$60", "$65", "$72"],
          ["Premium Illumina Color (Additional)", "$23", "$24", "$25", "$26", "$31"],
          ["Wig Color Services", "+$32", "+$34", "+$37", "+$40", "+$43"],
          ["Olaplex", "$41", "$41", "$41", "$41", "$43"],
          ["B3", "$61", "$61", "$61", "$61", "$63"],
          ["Ombre/Balayage Color", "By consultation", "By consultation", "By consultation", "By consultation", "By consultation"],
          ["Corrective or Specialized Color", "By consultation", "By consultation", "By consultation", "By consultation", "By consultation"],
        ],
      },
    ],
    notes: [
      "**Permanent Straighteners and Euro Hair Extensions require a consultation 2–4 days prior to service. A $250 deposit is required at the consultation. Please allow approximately four (4) hours for each service.",
      "* Prices vary according to the Hair Artist's level and experience.",
      "* Please arrive 5-10 minutes early for your first visit so that we may take care of administrative details.",
      "* Parties greater than 3 people and gift packages require a 50% deposit at time of booking and must be cancelled 7 days in advance to receive your refund.",
      "* We also ask that if you need to cancel an appointment that you do so 24-hours in advance.",
      "* Prices are subject to change without notice.",
      "* Gratuity IS NOT included in any of our prices or packages.",
    ],
  },

  // ── 2. Specialty Hair Services ────────────────────────────
  {
    id: "specialty-hair",
    title: "Specialty Hair Services",
    badge: "SPECIALTY SERVICES",
    heroTitle: "Specialty Hair Services",
    heroSubtitle:
      "Advanced to Expert artists. Premium perms, smoothing treatments, and blowouts. Specialty hair, served with style.",
    heroImage: "/landing/services/speeialty-hair.png",
    heroDetailImage: "/landing/services/specialty-hair-services-details.png",
    details:"/landing/services/hair-cut",
    intro:
      "We believe your hair deserves a little sweetness without sacrificing an ounce of edge. Our Specialty Hair Services are crafted for those who crave show-stopping results, whether it's bouncy perms, silky-smooth keratin treatments, or frizz-defying Brazilian blowouts. Every service is tailored to your hair's unique personality, because one-size-fits-all simply isn't our style.",
    type: "pricing-multi",
    tables: [
      {
        name: "Specialty Hair Services",
        sub: "",
        columns: ["Service", "Hair Artist", "Advanced", "Master", "Sr Master", "Expert"],
        rows: [
          ["Perms", "$95", "$100", "$105", "$110", "$120"],
          ["Manetamer", "$105", "$110", "$115", "$120", "$121"],
          ["Keratin Treatment", "$247", "$257", "$267", "$277", "$305"],
          ["Permanent Straighteners (per hour)", "xxx", "$102", "$108", "$118", "$135"],
          ["Brazilian Blowout", "$283", "$283", "$283", "$283", "$306"],
          ["Brazilian Blowout Express", "$130", "$130", "$130", "$130", "$149"],
          ["Brazilian Blowout Split End Treatment", "$55", "$55", "$55", "$55", "$61"],
          ["Tape-In Extensions", "By Consultation", "By Consultation", "By Consultation", "By Consultation", "By Consultation"],
        ],
      },
      {
        name: "Salon Color",
        sub: "Prices do not include artistic cut or blowdry",
        columns: ["Salon Color Service", "Advanced", "Master", "Sr Master", "Expert"],
        rows: [
          ["Full Highlight", "$105", "$115", "$125", "$140"],
          ["Virgin Full Highlight", "$132", "$142", "$152", "$167"],
          ["Partial Highlight", "$90", "$100", "$110", "$123"],
          ["Virgin Partial Highlight", "$112", "$122", "$132", "$145"],
          ["Panel Highlight", "$55", "$60", "$65", "$71"],
          ["1/2 Panel Highlight", "$46", "$51", "$55", "$61"],
          ["Tint Re-Touch", "$73", "$80", "$85", "$95"],
          ["All Over Color", "$95", "$100", "$105", "$115"],
          ["Blending Color for Men", "$52", "$54", "$56", "$63"],
          ["Blowout with Color (& up)", "$26", "$31", "$35", "$38"],
          ["Toning", "$55", "$60", "$65", "$73"],
          ["Sealer & Restructuring Treatment", "$40", "$40", "$40", "$43"],
          ["Deep Conditioning Treatment", "$39", "$39", "$39", "$42"],
          ["Glossing", "$55", "$60", "$65", "$72"],
          ["Premium Illumina Color (Additional)", "$24", "$25", "$26", "$31"],
          ["Wig Color Services", "+$34", "+$37", "+$40", "+$43"],
          ["Olaplex", "$41", "$41", "$41", "$43"],
          ["B3", "$61", "$61", "$61", "$63"],
          ["Ombre/Balayage Color", "By consultation", "By consultation", "By consultation", "By consultation"],
          ["Corrective or Specialized Color", "By consultation", "By consultation", "By consultation", "By consultation"],
        ],
      },
    ],
    notes: [
      "* Prices vary according to the Hair Artist's level and experience.",
      "* Please arrive 5-10 minutes early for your first visit.",
      "* Parties greater than 3 people require a 50% deposit at time of booking and must be cancelled 7 days in advance.",
      "* Cancellations must be made 24-hours in advance.",
      "* Prices are subject to change without notice.",
      "* Gratuity IS NOT included in any of our prices or packages.",
    ],
  },

  // ── 3. Extensions & Texturizing ───────────────────────────
  {
    id: "extensions-texturizing",
    title: "Extensions & Texturizing",
    badge: "EXTENSIONS SERVICES",
    heroTitle: "Extensions And Texturizing",
    heroSubtitle:
      "Go from short-to-long, fine-to-full, blonde to brunette in ONE visit!",
    heroImage: "/landing/services/hair-extensions.png",
    heroDetailImage: "/landing/services/hair-extensions-details.png",
    intro:
      "SoZo HAIR by Bajon Salon & Spa’s hair extensions are made of the finest human hair and we use the most advanced system to attach them. In about four (4) hours, we can take your hair from short-to-long, fine-to-full, add length, color, texture and fullness. Add as much length as you want AND highlight your hair without coloring it by weaving in extensions that are lighter or darker than your own hair color. Your NEW hair looks like your own and will last for months with proper care and maintenance!",
    type: "info-benefits",
    highlights: [
      {
        icon: "✂️",
        title: "FINEST HUMAN HAIR",
        desc: "Extensions made from 100% real human hair for the most natural look and feel.",
      },
      {
        icon: "⏱️",
        title: "4-HOUR TRANSFORMATION",
        desc: "Complete transformation in approximately 4 hours — short-to-long, fine-to-full.",
      },
      {
        icon: "🎨",
        title: "NATURAL COLOR MATCH",
        desc: "Highlight your hair without coloring it by weaving in lighter or darker extensions.",
      },
      {
        icon: "💎",
        title: "TAPE-IN TECHNOLOGY",
        desc: "Seamless, undetectable adhesive weft extensions — completely natural looking and comfortable.",
      },
    ],
    extraContent: {
      title: "Tape-In Hair Extensions**",
      body: "Tape-In Extensions are real human hair and because they’re installed with a specialty tape (adhesive weft extensions), they are completely seamless and undetectable in the hair!! They’re so natural and comfortable you’ll forget they’re there and you’ll sleep with ease. Plus, since they’re no longer installed strand-by-strand, the time to install them is about half of what it used to be!\n\n**Tape-In Extensions require a consultation 5-6 days prior to service. The consultation is free, however, if you decide to get Tape-In Extensions, then a deposit is due that ranges from $250 -$450 depending on the amount of hair ordered.",
    },
    galleryImages: [
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423131/Rectangle_4570_2_ia4dke.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423131/Rectangle_4568_2_hyxo1y.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423131/Rectangle_4569_2_wngonu.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423131/Rectangle_4567_2_nvunwi.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423131/Rectangle_4570_1_fzlnga.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423132/Rectangle_4570_h1iw23.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423132/Rectangle_4569_1_plqvww.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423132/Rectangle_4568_u3xsqt.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423132/Rectangle_4569_sqvum4.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423132/Rectangle_4567_1_fraecy.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423133/Rectangle_4567_yvmqg9.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423132/Rectangle_4568_1_nrstm8.png",
      
    ],
    notes: [
      "* Prices vary according to the Hair Artist's level and experience.",
      "* Please arrive 5-10 minutes early for your first visit so that we may take care of administrative details.",
      "* Cancellations must be made 24-hours in advance.",
      "* Prices are subject to change without notice.",
      "* Gratuity IS NOT included in any of our prices or packages.",
    ],
  },

  // ── 4. Waxing Services ────────────────────────────────────
  {
    id: "waxing",
    title: "Waxing Services",
    badge: "WAXING SERVICES",
    heroTitle: "Waxing – Smooth, Polished, Pampered",
    heroSubtitle:
      "From quick brow touch-ups to full-face waxing, our experienced professionals help you relax.",
    heroImage: "/landing/services/waxing.png",
    heroDetailImage: "/landing/services/waxing-service-details.png",
    intro:
      "With the best waxing treatments in the Cincinnati area, you'll relax knowing you're in the hands of experienced professionals catering to your every need and pampering you with loving care.",
    type: "pricing-simple",
    tableNote: "When extra time or product is required, pricing will be adjusted",
    simpleTable: {
      columns: ["Treatment", "Rate"],
      rows: [
        ["Brow, Lip or Chin Wax", "$24"],
        ["Full Face Wax", "$56"],
        ["Neck Wax (hairline)", "$31"],
      ],
    },
    notes: [
      "* Please arrive 5-10 minutes early for your first visit.",
      "* Cancellations must be made 24-hours in advance.",
      "* Prices are subject to change without notice.",
      "* Gratuity IS NOT included in any of our prices or packages.",
    ],
  },

  // ── 5. Eyelash & Brow Services ───────────────────────────
  {
    id: "lash-brow",
    title: "Lash & Brow Services",
    badge: "EYELASH AND BROW SERVICES",
    heroTitle: "Beautifully Defined Brows & Lashes That Elevate Your Natural Look",
    heroSubtitle:
      "Precision-crafted eyelash and brow services designed to bring out your natural beauty.",
    heroImage: "/landing/services/lash-brow.png",
    heroDetailImage: "/landing/services/eyelash-and-brow services-details.png",
    intro:
      "Enhance your features with precision-crafted eyelash and brow services designed to bring out your natural beauty. From shaping to tinting, every detail is carefully tailored to suit your unique look.",
    type: "pricing-simple",
    tableNote: "",
    simpleTable: {
      columns: ["Treatment", "Rate"],
      rows: [
        ["Brow Wax", "$24"],
        ["Brow/Lash Tint", "$31"],
      ],
    },
    notes: [
      "* Please arrive 5-10 minutes early for your first visit.",
      "* Parties greater than 3 people and gift packages require a 50% deposit at time of booking and must be cancelled 7 days in advance.",
      "* Cancellations must be made 24-hours in advance.",
      "* Prices are subject to change without notice.",
      "* Gratuity IS NOT included in any of our prices or packages.",
    ],
  },

  // ── 6. CryoSkin Fat Loss ──────────────────────────────────
  {
    id: "cryoskin",
    title: "CryoSkin Fat Loss",
    badge: "CRYOSKIN COLD CRYO THERAPY",
    heroTitle: "CryoSkin Fat Loss and Body Contouring",
    heroSubtitle:
      "Look good! Feel great! Let go of insecurities! That's the power of cryoslimming with Cryoskin.",
    heroImage: "/landing/services/cryosking.png",
    heroDetailImage: "/landing/services/cryoskin-details.png",
    intro:
      "Cryoskin is a revolutionary machine from Europe which uses cold temperatures to permanently eliminate fat cells. The technology can be applied using both the traditional massage technique and a new application using static.",
    type: "faq-stats",
    highlights: [
      { icon: "❄️", title: "Slimming", desc: "The CryoSlimming® treatment uses cold temperatures to reduce fat. Cryoskin will help you achieve the look you've been striving for." },
      { icon: "✨", title: "Lift", desc: "CryoFacial reduces the appearance of fine lines and wrinkles by boosting collagen and improving your skin." },
      { icon: "💎", title: "Tone", desc: "With CryoToning®, there's finally a real, non-invasive solution to help you to improve loose skin, cellulite, and signs of aging." },
    ],
    tables: [
      {
        name: "Cryoskin Body Packages",
        sub: "Cryoskin Body (Slimming & Toning)",
        columns: ["Package", "Single Visit Price", "Discounted Package Price", "Full Price", "% Discount", "Savings"],
        rows: [
          ["Single Session", "$356.50", "$356.50", "$356.50", "0.00%", "—"],
          ["3 Sessions", "$356.50", "$1,016.00", "$1,069.50", "5.00%", "$52.88"],
          ["5 Sessions", "$356.50", "$1,604.25", "$1,782.50", "10.00%", "$178.25"],
          ["10 Sessions", "$356.50", "$2,852.00", "$3,565.00", "20.00%", "$713.00"],
          ["20 Sessions", "$356.50", "$4,991.00", "$7,130.00", "30.00%", "$2,139.00"],
        ],
      },
      {
        name: "Cryoskin Facial Packages",
        sub: "Cryoskin Facial",
        columns: ["Package", "Single Visit Price", "Discounted Package Price", "Full Price", "% Discount", "Savings"],
        rows: [
          ["Single Session", "$253.50", "$253.50", "$253.50", "0.00%", "—"],
          ["3 Sessions", "$253.50", "$722.48", "$760.50", "5.00%", "$38.02"],
          ["5 Sessions", "$253.50", "$1,140.75", "$1,267.50", "10.00%", "$126.75"],
          ["10 Sessions", "$253.50", "$2,028.00", "$2,535.00", "20.00%", "$507.00"],
          ["20 Sessions", "$253.50", "$3,549.00", "$5,070.00", "30.00%", "$1,521.00"],
        ],
      },
      {
        name: "Cryoskin Hair Packages",
        sub: "Cryoskin Alopecia/Hair Thinning",
        columns: ["Package", "Single Visit Price", "Discounted Package Price", "Full Price", "% Discount", "Savings"],
        rows: [
          ["Single Session", "$253.50", "$252.50", "$252.50", "0.00%", "$0.00"],
          ["3 Sessions", "$253.50", "$722.48", "$760.50", "5.00%", "$38.02"],
          ["5 Sessions", "$253.50", "$1,140.75", "$1,267.50", "10.00%", "$126.75"],
          ["10 Sessions", "$253.50", "$2,028.00", "$2,535.00", "20.00%", "$507.00"],
          ["20 Sessions", "$253.50", "$3,549.00", "$5,070.00", "30.00%", "$1,521.00"],
        ],
      },
    ],
    stats: [
      { num: "19%", label: "Reduction of Subcutaneous Fat" },
      { num: "1.85\"", label: "Average Loss of Inches" },
      { num: "100%", label: "Boost in Confidence" },
    ],
    galleryImages: [
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423131/Rectangle_4570_2_ia4dke.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423131/Rectangle_4568_2_hyxo1y.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423131/Rectangle_4569_2_wngonu.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423131/Rectangle_4567_2_nvunwi.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423131/Rectangle_4570_1_fzlnga.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423132/Rectangle_4570_h1iw23.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423132/Rectangle_4569_1_plqvww.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423132/Rectangle_4568_u3xsqt.png",
    ],
    faqs: [
      { q: "How does it work?", a: "The treatment lasts for 20-40 minutes depending on the desired treatment area. The purpose of the CryoSlimming® treatment is to lower the temperature of the fat cells enough to reduce fat without harming surrounding tissue." },
      { q: "What are the benefits?", a: "CryoSkin treatments offer fat reduction, skin tightening, cellulite reduction, and improved skin tone. Results are visible after just a few sessions with no surgery or downtime required." },
      { q: "How does it feel?", a: "The treatment feels like a relaxing cold massage. Most clients find it very comfortable and even enjoyable." },
      { q: "Who would benefit most from Cryoskin?", a: "Anyone looking to reduce stubborn fat in specific areas and improve body contour without surgery or downtime." },
      { q: "How long does a Cryoskin session last?", a: "Sessions typically last 20-40 minutes depending on the area being treated." },
      { q: "How often can I do it?", a: "CryoSlimming treatments can be done once every 2 weeks. CryoToning and CryoFacial treatments can be done more frequently." },
      { q: "Can I have Cryoskin if I'm pregnant?", a: "No, CryoSkin treatments are not recommended during pregnancy." },
      { q: "How effective is Cryoskin?", a: "Clinical studies show a 19% reduction in subcutaneous fat and an average loss of 1.85 inches from the treated area." },
      { q: "Why can I only have the CryoSlimming treatment once every 2 weeks?", a: "To allow the body adequate time to eliminate the destroyed fat cells and for optimal results." },
      { q: "Can I workout before/after my treatment?", a: "It is recommended to avoid intense exercise 2 hours before and after your treatment. Light activity is fine." },
      { q: "How quickly will I see results?", a: "Many clients see results within 2 weeks of their first session, with optimal results after a series of treatments." },
      { q: "How long will the results last?", a: "Results are permanent as long as a healthy lifestyle is maintained. The destroyed fat cells do not regenerate." },
      { q: "How can I enhance my results?", a: "Maintaining a healthy diet, staying hydrated, and regular exercise will help enhance and maintain your CryoSkin results." },
    ],
    notes: [],
  },

  // ── 7. Pure Plasma ────────────────────────────────────────
  {
    id: "pure-plasma",
    title: "Pure Plasma",
    badge: "SKIN CARE",
    heroTitle: "Pure Plasma Skin Treatments",
    heroSubtitle:
      "FDA-approved technology that uses ionized gas to form plasma — delivered directly to the skin's surface.",
    heroImage: "/landing/services/pure-plasma.png",
    heroDetailImage: "/landing/services/pure-plasma-skin-treatments.-details.png",
    intro:
      "Pure Plasma is an FDA-approved treatment that uses ionized gas to form plasma, which delivers heated plasma directly to the skin's surface without damaging the surrounding tissue. The thermal effect produced by the plasma energy works to stimulate collagen and elastin production in the skin.",
    type: "info-faq",
    highlights: [
      { icon: "🔬", title: "NON-INVASIVE", desc: "No cutting, no stitching. Pure Plasma treats skin conditions without any downtime or scarring." },
      { icon: "✨", title: "STIMULATES COLLAGEN", desc: "The thermal effect produced by plasma energy works to stimulate collagen and elastin production in the skin." },
      { icon: "⚡", title: "LATEST TECHNOLOGY", desc: "A revolutionary treatment using plasma-based thermal energy to improve the skin's appearance and quality." },
      { icon: "🏥", title: "FDA APPROVED", desc: "Pure Plasma uses FDA-approved technology ensuring safety and effectiveness for all skin types." },
    ],
    treats: [
      "Fine, deep wrinkles and lines",
      "Sagging, Loose skin",
      "Skin discoloration and pigmentation",
      "Photodamage and age spots",
      "Reduces depth of acne scars",
      "Laxity, or looseness of skin",
      "Soft blepharplasty",
      "Poor skin tone and texture",
      "Bacterial control, AND MORE",
    ],
    galleryImages: [
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423131/Rectangle_4570_2_ia4dke.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423131/Rectangle_4568_2_hyxo1y.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423131/Rectangle_4569_2_wngonu.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423131/Rectangle_4567_2_nvunwi.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423131/Rectangle_4570_1_fzlnga.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423132/Rectangle_4570_h1iw23.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423132/Rectangle_4569_1_plqvww.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423132/Rectangle_4568_u3xsqt.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423132/Rectangle_4569_sqvum4.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423132/Rectangle_4567_1_fraecy.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423133/Rectangle_4567_yvmqg9.png",
      "https://res.cloudinary.com/dau8sazoh/image/upload/v1779423132/Rectangle_4568_1_nrstm8.png",
    ],
    faqs: [
      { q: "What is Pure Plasma and how does it work?", a: "PURE PLASMA is an NON-INVASIVE, FDA Approved, skin treatment that uses medical-grade Nitrogen gas, which is ionized through a high energy probe tip, to form nitrogen plasma. Plasma is an ionized gas that is formed when electrical energy passes through a gas, in this case nitrogen, at a high temperature. It is composed of positively charged ions and electrons. Plasma has been used in the past to remove tattoos and other skin abnormalities without damaging the surrounding tissue. Unlike lasers, the plasma energy does not destroy tissues." },
      { q: "Which areas of the body are commonly treated?", a: "Face, neck, décolletage, hands, and other areas with visible signs of aging or skin conditions." },
      { q: "How long does it take to get a Pure Plasma treatment?", a: "Each Pure Plasma session typically takes approximately 15-45 minutes depending on the treatment area and condition being addressed." },
      { q: "Do you have payment options where I could pay over time?", a: "Yes, we offer flexible payment plans. Please contact us to discuss the payment options available for your treatment." },
      { q: "Who can get the Pure Plasma treatments?", a: "Most adults looking to improve skin texture, reduce wrinkles, or treat specific skin conditions are good candidates. A consultation is required to determine if the treatment is right for you." },
      { q: "Are Pure Plasma treatments the same as Plasma Fibroblast Therapy?", a: "No. While both use plasma energy, Pure Plasma uses FDA-approved medical-grade nitrogen gas technology, which is different from fibroblast therapy. Pure Plasma is non-invasive and does not destroy tissue." },
      { q: "How long does it take to see results?", a: "Initial results are visible within a few weeks, with full results appearing as collagen production increases over several months." },
      { q: "How long is the recovery time?", a: "Recovery typically takes 5-7 days, during which the skin may appear red and form small carbon crusts that naturally fall off." },
      { q: "Is it painful?", a: "A topical anesthetic is applied before the treatment. Most clients experience minimal discomfort during the procedure." },
      { q: "How many treatments do I need?", a: "Most conditions are significantly improved with 1-3 treatments, depending on the severity and area being treated." },
      { q: "How long do results last?", a: "Results can last 2-5 years depending on the individual and the area treated." },
      { q: "Are there things I should do before my Pure Plasma treatment?", a: "Yes, avoid sun exposure, retinoids, and blood-thinning medications for at least 1 week prior to your treatment. Your specialist will provide detailed pre-treatment instructions during your consultation." },
      { q: "What do I do after my Pure Plasma treatment?", a: "Follow all post-treatment care instructions provided by your specialist, including keeping the treated area clean, avoiding direct sunlight, and applying recommended healing ointments." },
      { q: "How much does it cost for Pure Plasma treatments?", a: "Pricing varies based on the treatment area and number of sessions. Please schedule a consultation for a personalized quote." },
      { q: "How many treatments will I need?", a: "Most clients see significant improvement with 1-3 sessions. Your specialist will create a customized treatment plan based on your specific needs and goals." },
      { q: "What will my skin look like after a treatment?", a: "Immediately after treatment, the skin may appear pink or red with small carbon crusts. These typically fall off within 5-7 days, revealing smoother, rejuvenated skin underneath." },
    ],
    notes: [],
  },

  // ── 8. Scalp Facial ───────────────────────────────────────
  {
    id: "scalp-facial",
    title: "Scalp Facial",
    badge: "SCALP TREATMENT",
    heroTitle: "The Relaxing Scalp Facial Treatment",
    heroSubtitle:
      "Achieve a state of relaxation and rejuvenation for both your body and mind.",
    heroImage: "/landing/services/the-relaxing-Scalp-facial.png",
    heroDetailImage: "/landing/services/scalp-facial-deatils.png",
    intro:
      "Our head is a reservoir of vital force energy channels and acupressure points. Through the gentle art of massage, the Relaxing Scalp Facial seeks to harmonize these energies, fostering equilibrium and holistic well-being both physically and mentally.",
    type: "info-benefits",

    notes: [
      "* Please arrive 5-10 minutes early for your first visit.",
      "* Parties greater than 3 people and gift packages require a 50% deposit at time of booking and must be cancelled 7 days in advance.",
      "* Cancellations must be made 24-hours in advance.",
      "* Prices are subject to change without notice.",
      "* Gratuity IS NOT included in any of our prices or packages.",
    ],
  },
];

// Helper: find by slug/id
export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

// Helper: all slugs (for generateStaticParams)
export function getAllServiceIds(): string[] {
  return services.map((s) => s.id);
}
