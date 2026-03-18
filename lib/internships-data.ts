import type { CareerDomain } from "@/lib/assessment-data"

export type InternshipOpportunity = {
  id: string
  title: string
  type: "Remote" | "On-site" | "Hybrid"
  duration: string
  stipendINR: string
  skills: string[]
  whereToApply: Array<{ label: string; url: string }>
  notes: string[]
}

export type InternshipBranch = {
  domain: CareerDomain
  branchName: string
  opportunities: InternshipOpportunity[]
}

export const internshipData: InternshipBranch[] = [
  {
    domain: "Engineering",
    branchName: "Computer Science Engineering",
    opportunities: [
      {
        id: "cse-swe",
        title: "Software Engineering Internship (Web/Backend)",
        type: "Hybrid",
        duration: "8–12 weeks",
        stipendINR: "₹10k–₹50k/month (varies)",
        skills: ["DSA basics", "JavaScript/TypeScript", "React/Node", "Git"],
        whereToApply: [
          { label: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
          { label: "Internshala", url: "https://internshala.com/" },
          { label: "AngelList / Wellfound", url: "https://wellfound.com/jobs" },
        ],
        notes: ["Build 2–3 strong projects", "Add GitHub + resume", "Practice coding tests"],
      },
      {
        id: "cse-data",
        title: "Data / Analytics Internship",
        type: "Remote",
        duration: "6–12 weeks",
        stipendINR: "₹5k–₹35k/month (varies)",
        skills: ["SQL", "Python", "Excel", "Basic statistics"],
        whereToApply: [
          { label: "Kaggle (projects)", url: "https://www.kaggle.com/" },
          { label: "Internshala", url: "https://internshala.com/" },
          { label: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
        ],
        notes: ["Create portfolio dashboards", "Show 1–2 case studies"],
      },
      {
        id: "cse-cyber",
        title: "Cybersecurity Internship (Entry)",
        type: "Remote",
        duration: "6–10 weeks",
        stipendINR: "₹8k–₹35k/month (varies)",
        skills: ["Networking basics", "Linux", "Web security basics", "Scripting"],
        whereToApply: [
          { label: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
          { label: "Internshala", url: "https://internshala.com/" },
        ],
        notes: ["Try OWASP labs", "Write a small security report as portfolio"],
      },
    ],
  },
  {
    domain: "Engineering",
    branchName: "Mechanical Engineering",
    opportunities: [
      {
        id: "mech-cad",
        title: "Mechanical Design / CAD Internship",
        type: "On-site",
        duration: "4–8 weeks",
        stipendINR: "₹5k–₹20k/month (varies)",
        skills: ["SolidWorks/AutoCAD", "Basics of manufacturing", "GD&T basics"],
        whereToApply: [
          { label: "Naukri", url: "https://www.naukri.com/" },
          { label: "Internshala", url: "https://internshala.com/" },
        ],
        notes: ["Prepare a CAD portfolio", "Highlight mini-projects (Design/Manufacturing)"],
      },
      {
        id: "mech-ev",
        title: "EV / Automotive Internship (Testing/Production)",
        type: "Hybrid",
        duration: "6–12 weeks",
        stipendINR: "₹8k–₹30k/month (varies)",
        skills: ["Vehicle basics", "Testing mindset", "Excel", "Communication"],
        whereToApply: [
          { label: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
          { label: "Company careers pages", url: "https://www.google.com/search?q=automotive+internship+india" },
        ],
        notes: ["Follow EV companies and apply early", "Be ready for aptitude + interviews"],
      },
      {
        id: "mech-quality",
        title: "Quality / Production Internship",
        type: "On-site",
        duration: "4–8 weeks",
        stipendINR: "₹5k–₹22k/month (varies)",
        skills: ["Manufacturing basics", "QC tools (basic)", "Excel", "Communication"],
        whereToApply: [
          { label: "Naukri", url: "https://www.naukri.com/" },
          { label: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
        ],
        notes: ["Learn basic QC tools (5 Why, Pareto)", "Show mini-projects in manufacturing"],
      },
    ],
  },
  {
    domain: "Engineering",
    branchName: "Electronics & Communication Engineering",
    opportunities: [
      {
        id: "ece-embedded",
        title: "Embedded Systems Internship",
        type: "On-site",
        duration: "8–12 weeks",
        stipendINR: "₹8k–₹30k/month (varies)",
        skills: ["C/C++", "Microcontrollers", "UART/I2C/SPI", "Debugging"],
        whereToApply: [
          { label: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
          { label: "Internshala", url: "https://internshala.com/" },
        ],
        notes: ["Show simple MCU projects", "Know basics of electronics and sensors"],
      },
      {
        id: "ece-vlsi",
        title: "VLSI / Digital Design Internship (Entry)",
        type: "Hybrid",
        duration: "8–12 weeks",
        stipendINR: "₹10k–₹40k/month (varies)",
        skills: ["Digital design basics", "Verilog basics", "Problem solving", "Attention to detail"],
        whereToApply: [
          { label: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
          { label: "Company careers pages", url: "https://www.google.com/search?q=vlsi+internship+india" },
        ],
        notes: ["Build simple Verilog modules", "Revise digital fundamentals (FSM, timing)"],
      },
    ],
  },
  {
    domain: "Engineering",
    branchName: "Civil Engineering",
    opportunities: [
      {
        id: "civil-site",
        title: "Site Engineer / Construction Internship",
        type: "On-site",
        duration: "4–8 weeks",
        stipendINR: "₹5k–₹20k/month (varies)",
        skills: ["AutoCAD basics", "Site safety", "Measurement & estimation", "Communication"],
        whereToApply: [
          { label: "Internshala", url: "https://internshala.com/" },
          { label: "Naukri", url: "https://www.naukri.com/" },
        ],
        notes: ["Learn site supervision basics", "Understand drawings and BOQ"],
      },
      {
        id: "civil-bim",
        title: "BIM / Planning Internship (Revit / Primavera)",
        type: "Hybrid",
        duration: "6–10 weeks",
        stipendINR: "₹8k–₹25k/month (varies)",
        skills: ["Revit basics", "MS Project/Primavera basics", "Excel", "Attention to detail"],
        whereToApply: [
          { label: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
          { label: "Company careers pages", url: "https://www.google.com/search?q=bim+internship+india" },
        ],
        notes: ["Build 1–2 BIM sample models", "Show planning schedules as portfolio"],
      },
    ],
  },
  {
    domain: "Engineering",
    branchName: "Information Technology",
    opportunities: [
      {
        id: "it-cloud",
        title: "Cloud / DevOps Internship (Beginner)",
        type: "Remote",
        duration: "6–12 weeks",
        stipendINR: "₹8k–₹40k/month (varies)",
        skills: ["Linux", "Git", "Docker basics", "CI/CD basics"],
        whereToApply: [
          { label: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
          { label: "Wellfound", url: "https://wellfound.com/jobs" },
        ],
        notes: ["Build a CI/CD demo project", "Learn basic cloud (AWS/Azure/GCP)"],
      },
    ],
  },
  {
    domain: "Commerce",
    branchName: "Banking & Insurance",
    opportunities: [
      {
        id: "comm-fin-analyst",
        title: "Finance / Accounts Internship",
        type: "On-site",
        duration: "4–12 weeks",
        stipendINR: "₹3k–₹20k/month (varies)",
        skills: ["Excel", "Accounting basics", "Tally (optional)", "Communication"],
        whereToApply: [
          { label: "Internshala", url: "https://internshala.com/" },
          { label: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
        ],
        notes: ["Create a simple financial model", "Learn GST/TDS basics for entry roles"],
      },
      {
        id: "comm-risk",
        title: "Risk / Operations Internship (BFSI)",
        type: "Hybrid",
        duration: "6–12 weeks",
        stipendINR: "₹5k–₹25k/month (varies)",
        skills: ["Excel", "Attention to detail", "Communication", "Basic finance"],
        whereToApply: [
          { label: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
          { label: "Naukri", url: "https://www.naukri.com/" },
        ],
        notes: ["Highlight accuracy and process mindset", "Add a small case study on risk/ops"],
      },
    ],
  },
  {
    domain: "Management",
    branchName: "Marketing & Business Development",
    opportunities: [
      {
        id: "mgmt-bd",
        title: "Business Development / Sales Internship",
        type: "Remote",
        duration: "6–12 weeks",
        stipendINR: "₹5k–₹30k/month (varies + incentives)",
        skills: ["Communication", "Pitching", "CRM basics", "Negotiation"],
        whereToApply: [
          { label: "Internshala", url: "https://internshala.com/" },
          { label: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
        ],
        notes: ["Track outreach metrics", "Learn basics of sales funnels"],
      },
      {
        id: "mgmt-product",
        title: "Product / Operations Internship (Entry)",
        type: "Hybrid",
        duration: "8–12 weeks",
        stipendINR: "₹10k–₹40k/month (varies)",
        skills: ["Excel", "Problem Solving", "Basic analytics", "Documentation"],
        whereToApply: [
          { label: "Wellfound", url: "https://wellfound.com/jobs" },
          { label: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
        ],
        notes: ["Write 1–2 product case studies", "Show ownership of small projects"],
      },
    ],
  },
  {
    domain: "Medical",
    branchName: "Pharmacy",
    opportunities: [
      {
        id: "pharma-clinical",
        title: "Clinical Research / Pharma Internship (Entry)",
        type: "On-site",
        duration: "6–12 weeks",
        stipendINR: "₹5k–₹25k/month (varies)",
        skills: ["Basics of pharmacology", "Documentation", "Communication", "Attention to detail"],
        whereToApply: [
          { label: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
          { label: "Naukri", url: "https://www.naukri.com/" },
        ],
        notes: ["Learn GCP basics", "Highlight lab/clinical exposure"],
      },
    ],
  },
  {
    domain: "Arts",
    branchName: "Journalism & Mass Communication",
    opportunities: [
      {
        id: "arts-content",
        title: "Content Writing / Media Internship",
        type: "Remote",
        duration: "4–12 weeks",
        stipendINR: "₹3k–₹20k/month (varies)",
        skills: ["Writing", "Research", "Editing", "Social media basics"],
        whereToApply: [
          { label: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
          { label: "Internshala", url: "https://internshala.com/" },
        ],
        notes: ["Create 5–10 writing samples", "Show published work if possible"],
      },
      {
        id: "arts-social",
        title: "Social Media / Community Internship",
        type: "Remote",
        duration: "6–12 weeks",
        stipendINR: "₹3k–₹25k/month (varies)",
        skills: ["Content planning", "Canva basics", "Analytics basics", "Communication"],
        whereToApply: [
          { label: "Internshala", url: "https://internshala.com/" },
          { label: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
        ],
        notes: ["Create a content calendar sample", "Track metrics (reach, CTR)"],
      },
    ],
  },
  {
    domain: "Medical",
    branchName: "General Medicine (MBBS)",
    opportunities: [
      {
        id: "mbbs-hospital",
        title: "Hospital Observership / Clinical Internship (UG level)",
        type: "On-site",
        duration: "2–8 weeks",
        stipendINR: "Often unpaid / stipend varies",
        skills: ["Clinical basics", "Communication", "Professional ethics"],
        whereToApply: [
          { label: "Hospital academic offices", url: "https://www.google.com/search?q=clinical+observership+india" },
        ],
        notes: ["Follow institution guidelines", "Maintain logbook/learning notes"],
      },
    ],
  },
  {
    domain: "Arts",
    branchName: "Design (Fashion / Interior / Graphic)",
    opportunities: [
      {
        id: "design-uiux",
        title: "UI/UX / Graphic Design Internship",
        type: "Remote",
        duration: "6–12 weeks",
        stipendINR: "₹5k–₹30k/month (varies)",
        skills: ["Figma", "Design fundamentals", "Portfolio", "Communication"],
        whereToApply: [
          { label: "Behance (portfolio)", url: "https://www.behance.net/" },
          { label: "Dribbble", url: "https://dribbble.com/" },
          { label: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
        ],
        notes: ["Build case studies (problem → process → outcome)", "Add 2–3 strong projects"],
      },
    ],
  },
]

