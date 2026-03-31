export type LinkItem = {
  href: string;
  label: string;
};

export const companyName = "Jim's Roofing & Construction";
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://jims-roofing-construction.vercel.app";
export const siteDescription =
  "Roofing, siding, tree removal, and remodeling help for Pinckney-area homeowners from a GAF Master Elite, licensed and insured local contractor.";

export const contactInfo = {
  phoneDisplay: "888-301-6335",
  phoneHref: "tel:8883016335",
  phonePlain: "888-301-6335",
  email: "jimpurdy@charter.net",
  addressLine1: "550 Rush Lake Rd",
  addressLine2: "Pinckney, MI 48169-8530",
  mapsHref:
    "https://maps.google.com/maps?q=550+Rush+Lake+Rd%2C+Pinckney%2C+MI%2C+48169%2C+United+States(Jim%27s+Roofing+%26amp%3B+Construction)&sll=42.4748,-83.92552",
  reviewHref: "https://hibu.us/merchants/3079-jim-s-roofing-construction"
};

export const primaryNav: LinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/roofing", label: "Roofing" },
  { href: "/siding", label: "Siding" },
  { href: "/tree-removal", label: "Tree Removal" },
  { href: "/additions", label: "Additions" },
  { href: "/service-area", label: "Service Area" },
  { href: "/contact", label: "Contact" }
];

export const footerLinks: LinkItem[] = [
  { href: "/kitchen-remodeling", label: "Kitchen Remodeling" },
  { href: "/bathroom-remodeling", label: "Bathroom Remodeling" },
  { href: "/crane-service", label: "Crane Service" },
  { href: contactInfo.reviewHref, label: "Read Reviews" }
];

export const trustBadges = [
  "GAF Master Elite",
  "Licensed & insured",
  "20+ years local",
  "Insurance work welcome"
];

export const homeServiceCards = [
  {
    href: "/roofing",
    eyebrow: "Flagship service",
    title: "Roofing",
    description:
      "Roof replacement, repair, inspections, and storm-damage help.",
    accent: "Dominant"
  },
  {
    href: "/siding",
    eyebrow: "Exterior upgrade",
    title: "Siding",
    description: "New siding that improves curb appeal and weather protection.",
    accent: "Bright"
  },
  {
    href: "/tree-removal",
    eyebrow: "Safety first",
    title: "Tree Removal",
    description: "Safe removal for hazardous or storm-damaged trees near your home.",
    accent: "Grounded"
  },
  {
    href: "/additions",
    eyebrow: "Expanded living",
    title: "Additions & Remodeling",
    description: "Add space or update key rooms with one local team.",
    accent: "Support"
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Inspect the project",
    description: "We inspect the issue and tell you what we see."
  },
  {
    step: "02",
    title: "Explain the right scope",
    description: "You get a clear recommendation on the next step."
  },
  {
    step: "03",
    title: "Complete the work with care",
    description: "We show up prepared, protect the property, and get the job done."
  },
  {
    step: "04",
    title: "Walk it with you",
    description: "We review the finished work with you before we call it done."
  }
];

export const reviewSummary = {
  rating: "5.0",
  count: "5 ratings",
  countValue: 5,
  highlights: [
    "The linked review profile currently shows a 5.0 out of 5 rating.",
    "Local homeowners point to responsive service and dependable work.",
    "You can check reviews quickly before you call."
  ]
};

export const serviceAreas = [
  "Pinckney",
  "Hamburg",
  "Brighton",
  "Dexter",
  "Chelsea",
  "Howell",
  "Fowlerville",
  "Livingston County",
  "Washtenaw County"
];

export const seoKeywordMap = {
  "/": [
    "Pinckney roofing contractor",
    "GAF Master Elite Pinckney",
    "roof repair Pinckney MI",
    "roof replacement Pinckney MI"
  ],
  "/roofing": [
    "roofing Pinckney MI",
    "roof repair Pinckney MI",
    "roof replacement Pinckney MI",
    "storm damage roofing Pinckney"
  ],
  "/siding": [
    "siding contractor Pinckney MI",
    "siding replacement Pinckney MI",
    "home siding Pinckney"
  ],
  "/tree-removal": [
    "tree removal Pinckney MI",
    "hazard tree removal Pinckney",
    "storm damaged tree removal Pinckney"
  ],
  "/additions": [
    "home additions Pinckney MI",
    "room additions Pinckney",
    "home improvement contractor Pinckney"
  ],
  "/kitchen-remodeling": [
    "kitchen remodeling Pinckney MI",
    "kitchen remodel contractor Pinckney"
  ],
  "/bathroom-remodeling": [
    "bathroom remodeling Pinckney MI",
    "bathroom remodel contractor Pinckney"
  ],
  "/crane-service": [
    "crane service Pinckney MI",
    "lifting support contractor Pinckney"
  ],
  "/service-area": [
    "roofing contractor Livingston County",
    "roofing contractor Washtenaw County",
    "Pinckney contractor service area"
  ],
  "/contact": [
    "contact Jim's Roofing & Construction",
    "Pinckney roofing estimate",
    "roofing quote Pinckney MI"
  ]
} satisfies Record<string, string[]>;

export const homeFaqs = [
  {
    question: "Do you handle insurance-related work?",
    answer: "Yes. Call early if insurance is part of the project."
  },
  {
    question: "How do I know if I need a repair or a full replacement?",
    answer: "Start with an inspection. We will tell you whether a repair or replacement makes more sense."
  },
  {
    question: "Can you inspect storm damage?",
    answer: "Yes. Call as soon as you notice storm damage."
  },
  {
    question: "Do you only handle roofing projects?",
    answer: "No. We also handle siding, tree removal, additions, remodeling, and crane service."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve Pinckney and nearby communities across Livingston and Washtenaw County."
  },
  {
    question: "How do I start with an estimate?",
    answer: "Call us or use the estimate form and tell us what you need."
  }
];

export const roofingFaqs = [
  {
    question: "How do I know if I need a repair or a replacement?",
    answer: "It depends on the roof's age and damage. Start with an inspection and we will explain the best option."
  },
  {
    question: "Do you help with insurance-related roofing work?",
    answer: "Yes. Let us know early if insurance is involved."
  },
  {
    question: "How quickly can you inspect storm damage?",
    answer: "Call as soon as possible so we can look at it before it gets worse."
  },
  {
    question: "What should I expect from the estimate process?",
    answer: "Expect a straightforward conversation about the problem, the scope, and the next step."
  }
];

export const serviceAreaFaqs = [
  {
    question: "Do you work outside Pinckney?",
    answer: "Yes. We also serve nearby towns in Livingston and Washtenaw County."
  },
  {
    question: "What kinds of projects do you handle in these areas?",
    answer: "We handle roofing, siding, tree removal, additions, remodeling, and crane service."
  },
  {
    question: "Can I call if I am near the edge of the service area?",
    answer: "Yes. A quick call is the fastest way to confirm coverage."
  }
];
