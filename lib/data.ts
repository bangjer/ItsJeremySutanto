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

export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer?: string;
}

export const site = {
  name: "Jeremy Sutanto",
  location: "Based in Indonesia",
  // Update with your preferred contact email.
  email: "jeremysuta@gmail.com",
  // Replace with your LinkedIn profile URL.
  linkedin: "https://www.linkedin.com/in/your-profile",
  // The CV file lives in /public — replace the PDF to update it.
  cvPath: "/Jeremy-Sutanto-CV.pdf",
};

export const navLinks: NavLink[] = [
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
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
];

export const projects: Project[] = [
  {
    title: "Corporate Finance Analysis",
    description:
      "Company valuation and capital structure analysis applying discounted cash flow and " +
      "comparable company methods.",
    tags: ["Valuation", "Corporate Finance"],
  },
  {
    title: "Market Research & Commentary",
    description: "Written market commentary covering equities, macro themes and industry trends.",
    tags: ["Research", "Writing"],
  },
  {
    title: "Merger & Digital Economy Research",
    description: "Research into merger activity and competition dynamics across digital markets.",
    tags: ["M&A", "Digital Economy"],
  },
  {
    title: "Financial Modelling Practice",
    description: "Three-statement, scenario and sensitivity modelling built in Excel.",
    tags: ["Modelling", "Excel"],
  },
  {
    title: "Equity & Fixed Income Analysis",
    description: "Security analysis and portfolio thinking across equity and fixed income markets.",
    tags: ["Equities", "Fixed Income"],
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
  { name: "Bloomberg Market Concepts", issuer: "Bloomberg" },
  { name: "Bloomberg ESG", issuer: "Bloomberg" },
  { name: "Excel Associate", issuer: "Microsoft" },
  { name: "Financial Foundations: Risk Management" },
];

export const interests: string[] = [
  "Indonesian Equity Markets",
  "ASEAN Financial Markets",
  "ESG & Sustainable Finance",
  "Institutional Investment",
];

export const about =
  "I am focused on building a career across finance and business, combining postgraduate " +
  "study in the UK with practical experience in treasury, funding, accounting and financial " +
  "analysis. My interests sit across capital markets, corporate finance, ASEAN financial " +
  "markets and sustainable finance.";
