/**
 * All site content lives in this file. Edit the values below to update the
 * website without touching any component code.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface Highlight {
  title: string;
  description: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  grade: string;
  detail?: string;
  focus: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  summary: string;
  tags: string[];
}

export interface LeadershipItem {
  role: string;
  organisation: string;
  summary: string;
  focus: string[];
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
  /** Path to the proof document, served from /public. */
  href: string;
}

export interface PersonalInterest {
  label: string;
  /** Optional achievement or detail shown alongside the label. */
  note?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  /** Intrinsic pixel dimensions, used to reserve space and avoid layout shift. */
  width: number;
  height: number;
}

export const site = {
  name: "Jeremy Sutanto",
  location: "Based in Indonesia",
  email: "jeremysuta280604@gmail.com",
  linkedin: "https://www.linkedin.com/in/jeremy-sutanto/",
  // The CV file lives in /public — replace the PDF to update it.
  cvPath: "/Jeremy-Sutanto-CV.pdf",
};

export const navLinks: NavLink[] = [
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const highlights: Highlight[] = [
  {
    title: "Treasury & Funding",
    description: "Hands-on internship experience across treasury operations and corporate funding.",
  },
  {
    title: "Capital Markets",
    description: "Exposure to funding transactions, market instruments and execution workflows.",
  },
  {
    title: "Financial Analysis",
    description: "Analysis, reconciliation and reporting across finance and accounting functions.",
  },
  {
    title: "UK Finance Education",
    description: "MSc at Warwick Business School, BSc Economics & Finance at Leeds.",
  },
  {
    title: "Bloomberg & Excel Certified",
    description: "Bloomberg Market Concepts, Bloomberg ESG and Microsoft Excel certifications.",
  },
];

export const education: EducationItem[] = [
  {
    school: "Warwick Business School",
    degree: "MSc Business and Finance",
    period: "Sep 2025 — Present",
    grade: "Distinction (expected)",
    detail: "Expected graduation July 2026",
    focus: ["Corporate Finance", "Investment & Markets", "Business Strategy"],
  },
  {
    school: "University of Leeds",
    degree: "BSc Economics and Finance",
    period: "Sep 2022 — Jun 2025",
    grade: "2:1 Honours",
    focus: ["Economics", "Econometrics", "Financial Markets"],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Treasury & Funding Intern",
    company: "FIFGROUP",
    summary:
      "Supported treasury operations and corporate funding activity at an Indonesian " +
      "multifinance company.",
    tags: ["Treasury & Funding", "Capital Markets Support", "Transaction Coordination"],
  },
  {
    role: "Finance Intern",
    company: "PT Samudra Utama Narapati",
    summary: "Assisted day-to-day finance operations, financial analysis and reporting.",
    tags: ["Financial Analysis", "Reconciliation & Reporting"],
  },
  {
    role: "Accounting & Tax Intern",
    company: "PT Pelangi Dwiputra Kimiaraya",
    summary: "Supported accounting processes, reconciliation and tax administration.",
    tags: ["Accounting & Tax", "Reconciliation & Reporting"],
  },
];

export const leadership: LeadershipItem[] = [
  {
    role: "Marketing & Recruitment Ambassador",
    organisation: "Warwick Business School",
    summary: "Representing the school across recruitment events and communications.",
    focus: ["Communication", "Presentation"],
  },
  {
    role: "Financial Analyst",
    organisation: "Leeds Trading & Investment Society",
    summary: "Equity research and market analysis within a student investment society.",
    focus: ["Research", "Equity Analysis"],
  },
  {
    role: "News Editor",
    organisation: "Leeds Finsights Newsletter",
    summary: "Writing and editing finance news and market commentary.",
    focus: ["Writing", "Markets"],
  },
  {
    role: "MinuteFinance",
    organisation: "Finance Education & Market Commentary",
    summary:
      "Creating finance-related educational content and market commentary, simplifying " +
      "financial topics for a broader audience.",
    focus: ["Finance Education", "Market Commentary"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    group: "Finance",
    items: [
      "Corporate Finance",
      "Capital Markets",
      "Treasury",
      "Financial Analysis",
      "Equity Analysis",
      "Fixed Income Analysis",
      "Financial Modelling",
    ],
  },
  {
    group: "Technical",
    items: ["Excel", "PowerPoint", "Python", "Bloomberg Terminal"],
  },
  {
    group: "Business",
    items: [
      "Research",
      "Presentation",
      "Written Communication",
      "Stakeholder Coordination",
      "Strategic Analysis",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "Bloomberg Market Concepts",
    issuer: "Bloomberg for Education",
    href: "/certificates/bloomberg-market-concepts.png",
  },
  {
    name: "Bloomberg ESG",
    issuer: "Bloomberg for Education",
    href: "/certificates/bloomberg-esg.png",
  },
  {
    name: "Excel Associate (Microsoft 365 Apps)",
    issuer: "Microsoft",
    year: "2024",
    href: "/certificates/excel-associate.pdf",
  },
  {
    name: "Mergers & Acquisitions Simulation — Top Performance",
    issuer: "AmplifyME · UBS",
    year: "2024",
    href: "/certificates/mergers-acquisitions-simulation.pdf",
  },
  {
    name: "Global Financial Markets and Instruments",
    issuer: "Rice University · Coursera",
    year: "2024",
    href: "/certificates/global-financial-markets-and-instruments.pdf",
  },
  {
    name: "Behavioral Finance",
    issuer: "Duke University · Coursera",
    year: "2023",
    href: "/certificates/behavioral-finance.pdf",
  },
  {
    name: "Biases and Portfolio Selection",
    issuer: "Rice University · Coursera",
    year: "2024",
    href: "/certificates/biases-and-portfolio-selection.pdf",
  },
  {
    name: "Trading Algorithms",
    issuer: "Indian School of Business · Coursera",
    year: "2024",
    href: "/certificates/trading-algorithms.pdf",
  },
  {
    name: "Decentralized Finance (DeFi) Infrastructure",
    issuer: "Duke University · Coursera",
    year: "2024",
    href: "/certificates/defi-infrastructure.pdf",
  },
  {
    name: "Blockchain and Cryptocurrency Explained",
    issuer: "University of Michigan · Coursera",
    year: "2024",
    href: "/certificates/blockchain-and-cryptocurrency-explained.pdf",
  },
  {
    name: "Programming for Everybody (Getting Started with Python)",
    issuer: "University of Michigan · Coursera",
    year: "2024",
    href: "/certificates/programming-for-everybody-python.pdf",
  },
  {
    name: "Finance Foundations: Risk Management",
    issuer: "LinkedIn Learning",
    year: "2024",
    href: "/certificates/finance-foundations-risk-management.pdf",
  },
  {
    name: "Emotional Intelligence: Cultivating Immensely Human Interactions",
    issuer: "University of Michigan · Coursera",
    year: "2024",
    href: "/certificates/emotional-intelligence.pdf",
  },
];

export const interests: string[] = [
  "Indonesian Equity Markets",
  "ASEAN Financial Markets",
  "ESG & Sustainable Finance",
  "Institutional Investment",
];

export const personalInterests: PersonalInterest[] = [
  { label: "Hyrox", note: "No. 9 fastest Indonesian, Doubles Pro Men" },
  { label: "Running", note: "46-minute 10K" },
  { label: "Gym" },
];

export const internshipGallery: GalleryImage[] = [
  {
    src: "/gallery/hsbc-iipc-event.jpg",
    alt: "Jeremy Sutanto with others holding books at an HSBC and IIPC event",
    caption: "HSBC × IIPC · Investment event",
    width: 1206,
    height: 1600,
  },
  {
    src: "/gallery/fifgroup-closing-dinner.jpg",
    alt: "FIFGROUP internship closing dinner group photo in traditional Betawi dress",
    caption: "FIFGROUP · Internship closing dinner",
    width: 1600,
    height: 1067,
  },
  {
    src: "/gallery/fifgroup-team.jpg",
    alt: "Jeremy Sutanto with the FIFGROUP team in the office",
    caption: "FIFGROUP · The team",
    width: 1600,
    height: 1200,
  },
  {
    src: "/gallery/fifgroup-gathering.jpg",
    alt: "Large FIFGROUP team gathering in batik attire",
    caption: "FIFGROUP · Team gathering",
    width: 1600,
    height: 900,
  },
  {
    src: "/gallery/pdk-team-gathering.jpg",
    alt: "Team gathering during the internship at PT Pelangi Dwiputra Kimiaraya",
    caption: "PT Pelangi Dwiputra Kimiaraya · Team",
    width: 1600,
    height: 1200,
  },
];

export const athleticGallery: GalleryImage[] = [
  {
    src: "/gallery/hyrox-manchester-sled.jpg",
    alt: "Pushing a weighted sled at HYROX Manchester",
    caption: "HYROX Manchester · Sled push",
    width: 1152,
    height: 1536,
  },
  {
    src: "/gallery/hyrox-sandbag.jpg",
    alt: "Carrying a sandbag at a HYROX event",
    caption: "HYROX · Sandbag carry",
    width: 1193,
    height: 1536,
  },
  {
    src: "/gallery/hyrox-run.jpg",
    alt: "Running at a HYROX event",
    caption: "HYROX · Race day",
    width: 865,
    height: 1536,
  },
  {
    src: "/gallery/london-half-marathon.jpg",
    alt: "Finisher medals with friends at a London half marathon",
    caption: "London Half Marathon",
    width: 1152,
    height: 1536,
  },
];

export const about =
  "I am focused on building a career across finance and business, combining postgraduate " +
  "study in the UK with practical experience in treasury, funding, accounting and financial " +
  "analysis. My interests sit across capital markets, corporate finance, ASEAN financial " +
  "markets and sustainable finance.";
