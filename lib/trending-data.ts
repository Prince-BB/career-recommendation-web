export type TrendingDomain =
  | "AI & Data"
  | "Cybersecurity"
  | "Cloud & DevOps"
  | "Product & Design"
  | "Core Engineering"
  | "Medical & Bio"
  | "Arts & Media"

export type ResearchLink = {
  label: string
  url: string
}

export type TrendingCourse = {
  id: string
  title: string
  domain: TrendingDomain
  whoItsFor: string
  scope: string[]
  currentDevelopments: string[]
  recommendedSkills: string[]
  researchPages: ResearchLink[]
}

export const trendingDomains: TrendingDomain[] = [
  "AI & Data",
  "Cybersecurity",
  "Cloud & DevOps",
  "Product & Design",
  "Core Engineering",
  "Medical & Bio",
  "Arts & Media",
]

export const trendingCourses: TrendingCourse[] = [
  {
    id: "ai-ml",
    title: "Artificial Intelligence & Machine Learning",
    domain: "AI & Data",
    whoItsFor: "Students interested in math, coding, and building intelligent systems.",
    scope: [
      "ML Engineer / Applied Scientist",
      "AI Product Engineer",
      "Data Scientist / Analyst",
      "Research Assistant (AI labs)",
    ],
    currentDevelopments: [
      "Foundation models, multimodal AI, and agentic workflows",
      "Responsible AI, evaluation, and model monitoring",
      "Edge AI on mobile/IoT devices",
    ],
    recommendedSkills: ["Python", "Linear Algebra", "Statistics", "ML basics", "Model deployment"],
    researchPages: [
      { label: "arXiv: Machine Learning", url: "https://arxiv.org/list/cs.LG/recent" },
      { label: "arXiv: AI", url: "https://arxiv.org/list/cs.AI/recent" },
      { label: "NeurIPS", url: "https://neurips.cc/" },
      { label: "ICML", url: "https://icml.cc/" },
    ],
  },
  {
    id: "data-engineering",
    title: "Data Engineering & Analytics",
    domain: "AI & Data",
    whoItsFor: "Students who like building pipelines, working with databases, and analytics.",
    scope: ["Data Engineer", "Analytics Engineer", "BI Developer", "Platform Engineer (Data)"],
    currentDevelopments: [
      "Lakehouse architectures and streaming pipelines",
      "Data quality, lineage, and governance",
      "Real-time analytics for products",
    ],
    recommendedSkills: ["SQL", "Python", "ETL/ELT", "Cloud basics", "Data modeling"],
    researchPages: [
      { label: "arXiv: Databases", url: "https://arxiv.org/list/cs.DB/recent" },
      { label: "VLDB", url: "https://vldb.org/" },
      { label: "SIGMOD", url: "https://sigmod.org/" },
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Ethical Hacking",
    domain: "Cybersecurity",
    whoItsFor: "Students interested in networks, security, and problem-solving.",
    scope: ["SOC Analyst", "Penetration Tester", "Security Engineer", "GRC Analyst"],
    currentDevelopments: [
      "Zero-trust and identity-first security",
      "Cloud security posture management",
      "AI-powered phishing and defense",
    ],
    recommendedSkills: ["Networking", "Linux", "Web security basics", "Threat modeling", "Scripting"],
    researchPages: [
      { label: "arXiv: Cryptography & Security", url: "https://arxiv.org/list/cs.CR/recent" },
      { label: "USENIX Security", url: "https://www.usenix.org/conference/usenixsecurity" },
      { label: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud Computing & DevOps",
    domain: "Cloud & DevOps",
    whoItsFor: "Students who like systems, automation, and running software reliably.",
    scope: ["DevOps Engineer", "SRE", "Cloud Engineer", "Platform Engineer"],
    currentDevelopments: [
      "Platform engineering and internal developer platforms",
      "Kubernetes + service meshes + GitOps",
      "Observability (logs/metrics/traces) as a standard practice",
    ],
    recommendedSkills: ["Linux", "Docker", "Kubernetes basics", "CI/CD", "Cloud fundamentals"],
    researchPages: [
      { label: "CNCF Projects", url: "https://www.cncf.io/projects/" },
      { label: "Kubernetes Docs", url: "https://kubernetes.io/docs/" },
      { label: "Google SRE", url: "https://sre.google/" },
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX & Product Design",
    domain: "Product & Design",
    whoItsFor: "Students who enjoy design, psychology, and building user-friendly products.",
    scope: ["UI/UX Designer", "Product Designer", "UX Researcher", "Design Systems Designer"],
    currentDevelopments: [
      "Design systems and accessibility-first design",
      "AI-assisted design workflows",
      "UX research with analytics + experimentation",
    ],
    recommendedSkills: ["Design fundamentals", "Figma", "User research", "Information architecture"],
    researchPages: [
      { label: "Nielsen Norman Group", url: "https://www.nngroup.com/" },
      { label: "ACM Digital Library (HCI)", url: "https://dl.acm.org/" },
      { label: "CHI Conference", url: "https://chi2026.acm.org/" },
    ],
  },
  {
    id: "embedded-iot",
    title: "Embedded Systems & IoT",
    domain: "Core Engineering",
    whoItsFor: "Students who like electronics, hardware, and low-level programming.",
    scope: ["Embedded Engineer", "IoT Engineer", "Firmware Developer", "Robotics Engineer (entry)"],
    currentDevelopments: [
      "Edge AI on microcontrollers",
      "Secure IoT device lifecycle (updates, identity, provisioning)",
      "Industry 4.0 adoption and smart manufacturing",
    ],
    recommendedSkills: ["C/C++", "Microcontrollers", "Basic electronics", "RTOS basics", "Networking"],
    researchPages: [
      { label: "arXiv: Embedded Systems", url: "https://arxiv.org/list/cs.AR/recent" },
      { label: "IEEE IoT Journal", url: "https://ieee-iotj.org/" },
      { label: "TinyML", url: "https://www.tinyml.org/" },
    ],
  },
  {
    id: "biotech",
    title: "Biotechnology & Bioinformatics",
    domain: "Medical & Bio",
    whoItsFor: "Students interested in biology + data, genetics, and research.",
    scope: ["Bioinformatician (entry)", "Research Assistant (Wet/Dry lab)", "Clinical Data Analyst"],
    currentDevelopments: [
      "Genomics and personalized medicine",
      "Drug discovery with AI + high-throughput screening",
      "Single-cell sequencing and multi-omics",
    ],
    recommendedSkills: ["Biology basics", "Statistics", "Python/R", "Genomics concepts"],
    researchPages: [
      { label: "NCBI", url: "https://www.ncbi.nlm.nih.gov/" },
      { label: "Nature Biotechnology", url: "https://www.nature.com/nbt/" },
      { label: "bioRxiv", url: "https://www.biorxiv.org/" },
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Content Strategy",
    domain: "Arts & Media",
    whoItsFor: "Students interested in branding, writing, growth, and analytics.",
    scope: ["Content Strategist", "SEO Specialist", "Performance Marketer", "Social Media Manager"],
    currentDevelopments: [
      "Short-form video and creator economy growth",
      "AI tools for content generation and A/B testing",
      "Privacy changes affecting ad targeting and measurement",
    ],
    recommendedSkills: ["Copywriting", "SEO basics", "Analytics", "Campaign planning", "Creativity"],
    researchPages: [
      { label: "Google Search Central", url: "https://developers.google.com/search" },
      { label: "Meta Business", url: "https://www.facebook.com/business" },
      { label: "Think with Google", url: "https://www.thinkwithgoogle.com/" },
    ],
  },
]

