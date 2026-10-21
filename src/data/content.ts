export interface Experience {
  company: string;
  title: string;
  location: string;
  dates: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  status: string;
  tools: string[];
}

export const CV_FILE_AVAILABLE = false;

export const profile = {
  name: "Arbaz Malik",
  headline: "Forecasting Specialist | Financial Intelligence",
  location: "United Kingdom",
  email: "arbazm74@gmail.com",
  linkedIn: "https://www.linkedin.com/in/arbaz-malik915850198/",
  summary:
    "MBA graduate with professional placement and internship experience in financial reporting, forecasting, SOX controls, and SAP-based data analysis. Experienced in stakeholder support, variance analysis, project financial data, and translating financial information into clear, decision-ready insights.",
  heroSummary:
    "I turn financial data into clear, actionable insights through forecasting, financial analysis, reporting, and structured problem-solving.",
  researchTitle:
    "Assessing Employee Perceptions of Staff Engagement and Productivity in Finance Roles",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
] as const;

export const expertise = [
  {
    title: "Financial Reporting & Analysis",
    description:
      "Structured reporting and analysis to make financial information clear and useful for business decisions.",
    icon: "chart",
  },
  {
    title: "Forecasting & Budgeting",
    description:
      "Forecast preparation, budget updates, and cash flow forecasting using SAP-based data.",
    icon: "trend",
  },
  {
    title: "Variance Analysis",
    description:
      "Forecast-versus-actual review, investigation, and interpretation of financial variances.",
    icon: "search",
  },
  {
    title: "SAP & Financial Data",
    description:
      "Experience with SAP project structures, WBS elements, master data, and report validation.",
    icon: "database",
  },
  {
    title: "Governance & Compliance",
    description:
      "Monthly SOX controls, compliance awareness, and audit-ready documentation.",
    icon: "shield",
  },
  {
    title: "Stakeholder Collaboration",
    description:
      "Investigating financial queries with onshore and offshore stakeholders.",
    icon: "people",
  },
] as const;

export const skills = [
  "Financial Reporting & Analysis",
  "Forecasting & Budgeting",
  "Variance Analysis",
  "SAP Project Structures",
  "SAP WBS & Master Data",
  "Microsoft Excel & Pivot Tables",
  "Financial Modelling",
  "SOX Compliance & Internal Controls",
  "Client & Stakeholder Support",
  "Research Writing & Problem-Solving",
] as const;

export const experience: Experience[] = [
  {
    company: "Siemens Energy",
    title: "Finance & Commercial Intern",
    location: "United Kingdom",
    dates: "October 2024 – May 2026",
    summary:
      "Completed an MBA placement that was extended by a further seven months, working within a multicultural finance function at a global technology company serving the energy, utility, industrial, and oil and gas sectors.",
    responsibilities: [
      "Investigated stakeholder queries using SAP data and report validation.",
      "Executed monthly SOX controls and maintained audit-ready documentation.",
      "Supported forecasting, budget updates, and forecast-versus-actual variance analysis.",
      "Maintained SAP project structures, WBS elements, and master data.",
      "Built SAP-based cash flow forecasts supporting commercial decision-making and project planning.",
      "Collaborated with onshore and offshore stakeholders to investigate variances.",
    ],
    skills: [
      "SAP",
      "Forecasting",
      "Variance analysis",
      "SOX controls",
      "Stakeholder support",
    ],
  },
  {
    company: "Fauji Power Company Limited",
    title: "Finance Intern",
    location: "Pakistan",
    dates: "July – September 2022",
    summary: "",
    responsibilities: [
      "Prepared monthly reports and financial statements.",
      "Maintained financial records in line with governance and compliance standards.",
      "Liaised with end users to support project management and communication.",
    ],
    skills: ["Financial reporting", "Governance", "Communication"],
  },
];

export const education = [
  {
    name: "MBA with Professional Practice",
    institution: "University of Sunderland",
    location: "United Kingdom",
    dates: "2024 – 2026",
  },
  {
    name: "BS in Accounting & Finance",
    institution: "COMSATS University Islamabad",
    location: "Pakistan",
    dates: "2019 – 2023",
  },
] as const;

export const development = [
  {
    name: "ACCA Part-Qualified",
    provider: "ACCA",
    status: "Ongoing",
    detail: "",
  },
  {
    name: "Microsoft Power BI Data Analyst",
    provider: "Microsoft",
    status: "Certified (as stated in the supplied brief)",
    detail: "Credential link and issue date were not supplied.",
  },
  {
    name: "Curriculum for Heads of Finance",
    provider: "Siemens Energy",
    status: "Professional development · 2025",
    detail:
      "Organisation & Compliance, Accounting, Project Management, Treasury & Financing.",
  },
  {
    name: "Introduction to UK Financial Regulation & Professional Integrity",
    provider: "CIFA",
    status: "In progress",
    detail: "",
  },
  {
    name: "Google Project Management",
    provider: "Google",
    status: "Professional development (completion status not supplied)",
    detail: "",
  },
  {
    name: "Google Digital Marketing & E-commerce",
    provider: "Google",
    status: "Professional development (completion status not supplied)",
    detail: "",
  },
  {
    name: "SAP-related professional development",
    provider: "Details not supplied",
    status: "Additional details to confirm",
    detail: "",
  },
] as const;

export const projectCategories = [
  "All",
  "Financial Analysis",
  "Forecasting",
  "Business Intelligence",
  "Research",
] as const;

export type ProjectCategory = Exclude<
  (typeof projectCategories)[number],
  "All"
>;

export const projects: Project[] = [
  {
    slug: "financial-forecasting-cash-flow",
    title: "Financial Forecasting & Cash Flow Analysis",
    category: "Forecasting",
    summary:
      "Proposed portfolio project exploring a clear structure for forecast assumptions and cash flow trends.",
    status: "Proposed portfolio project",
    tools: ["Financial modelling", "Forecasting"],
  },
  {
    slug: "forecast-actual-variance",
    title: "Forecast vs Actual Variance Analysis",
    category: "Financial Analysis",
    summary:
      "Proposed analysis template for organising forecast-versus-actual comparisons and explanatory commentary.",
    status: "Proposed portfolio project",
    tools: ["Variance analysis", "Reporting"],
  },
  {
    slug: "power-bi-financial-dashboard",
    title: "Power BI Financial Performance Dashboard",
    category: "Business Intelligence",
    summary:
      "Proposed dashboard concept for presenting financial measures with a clear, decision-focused layout.",
    status: "Proposed portfolio project",
    tools: ["Power BI", "Data visualisation"],
  },
  {
    slug: "sap-financial-data-analysis",
    title: "SAP Financial Data Analysis",
    category: "Financial Analysis",
    summary:
      "Proposed educational case study on structuring project finance data for analysis.",
    status: "Proposed portfolio project",
    tools: ["SAP concepts", "Financial data"],
  },
  {
    slug: "financial-reporting-insights",
    title: "Financial Reporting & Management Insights",
    category: "Financial Analysis",
    summary:
      "Proposed reporting exercise focused on concise, structured financial communication.",
    status: "Proposed portfolio project",
    tools: ["Financial reporting", "Analysis"],
  },
  {
    slug: "employee-engagement-research",
    title: "Employee Engagement and Productivity Research",
    category: "Research",
    summary:
      "MBA dissertation topic examining employee perceptions of engagement and productivity in finance roles.",
    status: "Academic research · details limited",
    tools: ["Applied research", "Structured analysis"],
  },
];
