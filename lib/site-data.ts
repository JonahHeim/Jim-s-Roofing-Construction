export type LinkItem = {
  href: string;
  label: string;
};

export const companyName = "Jim's Roofing & Construction";
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://jims-roofing-construction.vercel.app";
export const siteDescription =
  "Roofing-first protection for homeowners in Pinckney and surrounding communities, backed by local accountability, recognized credentials, and a clear next step.";

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
      "Roof replacement, repair, inspections, and storm-related help built around clear communication and durable work.",
    accent: "Dominant"
  },
  {
    href: "/siding",
    eyebrow: "Exterior upgrade",
    title: "Siding",
    description:
      "Refresh curb appeal, strengthen weather protection, and make the home feel finished again.",
    accent: "Bright"
  },
  {
    href: "/tree-removal",
    eyebrow: "Safety first",
    title: "Tree Removal",
    description:
      "Protect the home, roofline, and driveway with a safety-focused approach to hazardous trees.",
    accent: "Grounded"
  },
  {
    href: "/additions",
    eyebrow: "Expanded living",
    title: "Additions & Remodeling",
    description:
      "Plan additions, kitchen updates, and bathroom remodels with one dependable local team.",
    accent: "Support"
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Inspect the project",
    description:
      "We look at the issue carefully, document what matters, and help you understand the condition of the home."
  },
  {
    step: "02",
    title: "Explain the right scope",
    description:
      "You get a clear conversation about the best next step, whether that means repair, replacement, or a broader plan."
  },
  {
    step: "03",
    title: "Complete the work with care",
    description:
      "We show up prepared, respect the property, and keep communication straightforward while the job is underway."
  },
  {
    step: "04",
    title: "Walk it with you",
    description:
      "Before the project is considered done, we review the finished result and make sure you know what was completed."
  }
];

export const reviewSummary = {
  rating: "5.0",
  count: "5 ratings",
  countValue: 5,
  highlights: [
    "Local homeowners already point to the company for responsive communication and dependable service.",
    "The current linked review profile shows a 5.0 out of 5 rating, which gives the rebuild a strong trust anchor.",
    "This site keeps that proof on-page instead of forcing visitors to leave before they feel confident."
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
    answer:
      "Yes. Insurance work is part of the current business positioning, and the site should make it easy to start that conversation early."
  },
  {
    question: "How do I know if I need a repair or a full replacement?",
    answer:
      "That starts with an inspection and a straightforward explanation. The goal is to help you understand the right scope before you commit."
  },
  {
    question: "Can you inspect storm damage?",
    answer:
      "Yes. Storm-damage concerns are a core reason homeowners search for roofing help, so the site treats that as a first-class path."
  },
  {
    question: "Do you only handle roofing projects?",
    answer:
      "Roofing leads the brand story, but the company also supports siding, tree removal, additions, remodeling, and crane-service needs."
  },
  {
    question: "What areas do you serve?",
    answer:
      "The current service-area copy includes Pinckney, Hamburg, Brighton, Dexter, Chelsea, Howell, Fowlerville, Livingston County, and Washtenaw County."
  },
  {
    question: "How do I start with an estimate?",
    answer:
      "Use the estimate form or call directly. The fastest route is a short conversation about the issue, the property, and the next step."
  }
];

export const roofingFaqs = [
  {
    question: "How do I know if I need a repair or a replacement?",
    answer:
      "The right answer depends on the age of the roof, the extent of damage, and how much of the system is affected. Start with an inspection and a clear explanation."
  },
  {
    question: "Do you help with insurance-related roofing work?",
    answer:
      "Yes. Insurance-related projects are part of the service story, and they should be addressed early in the conversation."
  },
  {
    question: "How quickly can you inspect storm damage?",
    answer:
      "If storm damage is the concern, call as soon as possible so the problem can be evaluated before it worsens."
  },
  {
    question: "What should I expect from the estimate process?",
    answer:
      "Expect a practical conversation about what is going on, what the roof likely needs, and what the right next step looks like."
  }
];

export const serviceAreaFaqs = [
  {
    question: "Do you work outside Pinckney?",
    answer:
      "Yes. The current service-area messaging covers nearby towns and broader county coverage in Livingston and Washtenaw."
  },
  {
    question: "What kinds of projects do you handle in these areas?",
    answer:
      "Roofing, siding, tree removal, additions, remodeling, and crane-service requests are all part of the route plan."
  },
  {
    question: "Can I call if I am near the edge of the service area?",
    answer:
      "Yes. If you are nearby, the fastest way to confirm fit is a quick call."
  }
];
