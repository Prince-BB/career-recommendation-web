export type CareerDomain =
  | "Engineering"
  | "Medical"
  | "Commerce"
  | "Arts"
  | "Management"

export interface Question {
  id: number
  text: string
  /** Which domain this question primarily measures */
  domain: CareerDomain
}

export interface College {
  name: string
  location: string
  annualFee: string
  ranking: string
}

export interface Branch {
  name: string
  description: string
  careerOpportunities: string[]
  salaryRange: string
  feeStructure: string
  topColleges: College[]
}

export interface CareerResult {
  domain: CareerDomain
  description: string
  branches: Branch[]
  courses: string[]
  icon: string
}

// ---------------------------------------------------------------------------
// Likert Scale Options (same for every question)
// ---------------------------------------------------------------------------
export const likertOptions = [
  { label: "Strongly Agree", value: 5 },
  { label: "Agree", value: 4 },
  { label: "Neutral", value: 3 },
  { label: "Disagree", value: 2 },
  { label: "Strongly Disagree", value: 1 },
]

// ---------------------------------------------------------------------------
// 20 Interpersonal & Interest-Based Questions (4 per domain)
// ---------------------------------------------------------------------------
export const questions: Question[] = [
  // --- Engineering (4 questions) ---
  { id: 1, domain: "Engineering", text: "I enjoy understanding how machines, gadgets, and systems work." },
  { id: 2, domain: "Engineering", text: "I like solving mathematical or logical puzzles in my free time." },
  { id: 3, domain: "Engineering", text: "I get excited about building or fixing things with my hands." },
  { id: 4, domain: "Engineering", text: "I am drawn to technology and enjoy coding or tinkering with electronics." },

  // --- Medical (4 questions) ---
  { id: 5, domain: "Medical", text: "I feel a strong desire to help people who are sick or in pain." },
  { id: 6, domain: "Medical", text: "I find human biology and anatomy fascinating." },
  { id: 7, domain: "Medical", text: "I am comfortable working in high-pressure, life-or-death situations." },
  { id: 8, domain: "Medical", text: "I can stay calm and empathetic when someone is going through a health crisis." },

  // --- Commerce (4 questions) ---
  { id: 9, domain: "Commerce", text: "I enjoy working with numbers, budgets, and financial data." },
  { id: 10, domain: "Commerce", text: "I am interested in stock markets, banking, and economic trends." },
  { id: 11, domain: "Commerce", text: "I like negotiating and convincing people to see my point of view." },
  { id: 12, domain: "Commerce", text: "I often think about starting my own business someday." },

  // --- Arts (4 questions) ---
  { id: 13, domain: "Arts", text: "I express my emotions through drawing, painting, music, or writing." },
  { id: 14, domain: "Arts", text: "I find inspiration in movies, theatre, dance, or cultural events." },
  { id: 15, domain: "Arts", text: "I value creativity and original thinking above strict rules." },
  { id: 16, domain: "Arts", text: "I would love a career where I can create something visually or artistically meaningful." },

  // --- Management (4 questions) ---
  { id: 17, domain: "Management", text: "I naturally take charge and organise groups during team activities." },
  { id: 18, domain: "Management", text: "I am good at resolving conflicts and bringing people together." },
  { id: 19, domain: "Management", text: "I enjoy planning events, setting goals, and making strategies." },
  { id: 20, domain: "Management", text: "I believe strong leadership can solve most organisational problems." },
]

// ---------------------------------------------------------------------------
// Career Results — each domain with rich branch data + Tamil Nadu colleges
// ---------------------------------------------------------------------------
export const careerResults: Record<CareerDomain, CareerResult> = {
  Engineering: {
    domain: "Engineering",
    description:
      "Your analytical mindset and love for building and problem-solving make Engineering a natural fit. Engineers design the systems and structures that power the modern world.",
    branches: [
      {
        name: "Computer Science Engineering",
        description: "Design software systems, algorithms, and computing infrastructure that power the digital world.",
        careerOpportunities: ["Software Engineer", "Full-Stack Developer", "System Architect", "AI/ML Engineer", "DevOps Engineer"],
        salaryRange: "6 - 40+ LPA",
        feeStructure: "1 - 12 LPA depending on college",
        topColleges: [
          { name: "IIT Madras", location: "Chennai, Tamil Nadu", annualFee: "~2.2 LPA", ranking: "#1 NIRF Engineering" },
          { name: "Anna University (CEG)", location: "Chennai, Tamil Nadu", annualFee: "~50,000/year (Govt)", ranking: "#1 TN State University" },
          { name: "NIT Trichy", location: "Tiruchirappalli, Tamil Nadu", annualFee: "~1.5 LPA", ranking: "Top 10 NIT" },
          { name: "VIT Vellore", location: "Vellore, Tamil Nadu", annualFee: "~3.5 LPA", ranking: "Top Private India" },
          { name: "PSG College of Technology", location: "Coimbatore, Tamil Nadu", annualFee: "~1.2 LPA", ranking: "Top TN Private" },
          { name: "SSN College of Engineering", location: "Chennai, Tamil Nadu", annualFee: "~2 LPA", ranking: "Top TN Engineering" },
        ],
      },
      {
        name: "Mechanical Engineering",
        description: "Design and build machines, engines, vehicles, and mechanical systems used across industries.",
        careerOpportunities: ["Mechanical Design Engineer", "Automotive Engineer", "Robotics Engineer", "HVAC Engineer", "Manufacturing Engineer"],
        salaryRange: "4 - 20+ LPA",
        feeStructure: "1 - 10 LPA depending on college",
        topColleges: [
          { name: "IIT Madras", location: "Chennai, Tamil Nadu", annualFee: "~2.2 LPA", ranking: "#1 NIRF Engineering" },
          { name: "NIT Trichy", location: "Tiruchirappalli, Tamil Nadu", annualFee: "~1.5 LPA", ranking: "Top 10 NIT" },
          { name: "Anna University (CEG)", location: "Chennai, Tamil Nadu", annualFee: "~50,000/year (Govt)", ranking: "#1 TN State" },
          { name: "Coimbatore Institute of Technology", location: "Coimbatore, Tamil Nadu", annualFee: "~60,000/year", ranking: "Top Govt TN" },
          { name: "Thiagarajar College of Engineering", location: "Madurai, Tamil Nadu", annualFee: "~1 LPA", ranking: "Top TN Autonomous" },
        ],
      },
      {
        name: "Civil Engineering",
        description: "Plan and construct roads, bridges, buildings, dams, and infrastructure for society.",
        careerOpportunities: ["Structural Engineer", "Urban Planner", "Construction Manager", "Transport Engineer", "Geotechnical Engineer"],
        salaryRange: "4 - 18+ LPA",
        feeStructure: "1 - 8 LPA depending on college",
        topColleges: [
          { name: "IIT Madras", location: "Chennai, Tamil Nadu", annualFee: "~2.2 LPA", ranking: "#1 NIRF Engineering" },
          { name: "Anna University (CEG)", location: "Chennai, Tamil Nadu", annualFee: "~50,000/year (Govt)", ranking: "#1 TN State" },
          { name: "NIT Trichy", location: "Tiruchirappalli, Tamil Nadu", annualFee: "~1.5 LPA", ranking: "Top 10 NIT" },
          { name: "SRM Institute of Science and Technology", location: "Chennai, Tamil Nadu", annualFee: "~4 LPA", ranking: "Top Private" },
          { name: "Government College of Technology", location: "Coimbatore, Tamil Nadu", annualFee: "~30,000/year (Govt)", ranking: "Top TN Govt" },
        ],
      },
      {
        name: "Electrical & Electronics Engineering",
        description: "Work with electrical systems, power generation, electronics, and energy infrastructure.",
        careerOpportunities: ["Power Systems Engineer", "Embedded Systems Engineer", "Electrical Design Engineer", "Control Systems Engineer", "VLSI Designer"],
        salaryRange: "4 - 22+ LPA",
        feeStructure: "1 - 10 LPA depending on college",
        topColleges: [
          { name: "IIT Madras", location: "Chennai, Tamil Nadu", annualFee: "~2.2 LPA", ranking: "#1 NIRF Engineering" },
          { name: "NIT Trichy", location: "Tiruchirappalli, Tamil Nadu", annualFee: "~1.5 LPA", ranking: "Top 10 NIT" },
          { name: "PSG College of Technology", location: "Coimbatore, Tamil Nadu", annualFee: "~1.2 LPA", ranking: "Top TN Private" },
          { name: "SSN College of Engineering", location: "Chennai, Tamil Nadu", annualFee: "~2 LPA", ranking: "Top TN Engineering" },
          { name: "Mepco Schlenk Engineering College", location: "Sivakasi, Tamil Nadu", annualFee: "~80,000/year", ranking: "Top TN Autonomous" },
        ],
      },
      {
        name: "Automobile Engineering",
        description: "Design, develop, and manufacture vehicles including cars, trucks, two-wheelers, and electric vehicles.",
        careerOpportunities: ["Automobile Design Engineer", "Vehicle Testing Engineer", "EV Powertrain Engineer", "Production Manager", "R&D Engineer"],
        salaryRange: "4 - 18+ LPA",
        feeStructure: "1 - 8 LPA depending on college",
        topColleges: [
          { name: "Madras Institute of Technology (MIT)", location: "Chennai, Tamil Nadu", annualFee: "~60,000/year (Govt)", ranking: "Top TN for Auto" },
          { name: "PSG College of Technology", location: "Coimbatore, Tamil Nadu", annualFee: "~1.2 LPA", ranking: "Top TN Private" },
          { name: "Anna University (CEG)", location: "Chennai, Tamil Nadu", annualFee: "~50,000/year (Govt)", ranking: "#1 TN State" },
          { name: "Kumaraguru College of Technology", location: "Coimbatore, Tamil Nadu", annualFee: "~1.5 LPA", ranking: "Top TN Autonomous" },
          { name: "Sathyabama Institute of Science & Technology", location: "Chennai, Tamil Nadu", annualFee: "~2.5 LPA", ranking: "Top TN Deemed" },
        ],
      },
      {
        name: "Electronics & Communication Engineering",
        description: "Design communication systems, embedded electronics, signal processing, and IoT devices.",
        careerOpportunities: ["Embedded Engineer", "Telecom Engineer", "Signal Processing Engineer", "IoT Developer", "Network Architect"],
        salaryRange: "4 - 25+ LPA",
        feeStructure: "1 - 10 LPA depending on college",
        topColleges: [
          { name: "IIT Madras", location: "Chennai, Tamil Nadu", annualFee: "~2.2 LPA", ranking: "#1 NIRF Engineering" },
          { name: "NIT Trichy", location: "Tiruchirappalli, Tamil Nadu", annualFee: "~1.5 LPA", ranking: "Top 10 NIT" },
          { name: "VIT Vellore", location: "Vellore, Tamil Nadu", annualFee: "~3.5 LPA", ranking: "Top Private India" },
          { name: "Thiagarajar College of Engineering", location: "Madurai, Tamil Nadu", annualFee: "~1 LPA", ranking: "Top TN Autonomous" },
          { name: "Kongu Engineering College", location: "Erode, Tamil Nadu", annualFee: "~1 LPA", ranking: "Top TN Autonomous" },
        ],
      },
      {
        name: "Information Technology",
        description: "Build and manage IT infrastructure, enterprise systems, databases, and software applications.",
        careerOpportunities: ["IT Analyst", "Database Administrator", "Cloud Engineer", "Systems Administrator", "Cybersecurity Analyst"],
        salaryRange: "5 - 30+ LPA",
        feeStructure: "1 - 10 LPA depending on college",
        topColleges: [
          { name: "Anna University (CEG)", location: "Chennai, Tamil Nadu", annualFee: "~50,000/year (Govt)", ranking: "#1 TN State" },
          { name: "NIT Trichy", location: "Tiruchirappalli, Tamil Nadu", annualFee: "~1.5 LPA", ranking: "Top 10 NIT" },
          { name: "SSN College of Engineering", location: "Chennai, Tamil Nadu", annualFee: "~2 LPA", ranking: "Top TN Engineering" },
          { name: "SRM Institute of Science and Technology", location: "Chennai, Tamil Nadu", annualFee: "~4 LPA", ranking: "Top Private" },
          { name: "Vel Tech Rangarajan Dr. Sagunthala R&D", location: "Chennai, Tamil Nadu", annualFee: "~2 LPA", ranking: "Top TN Deemed" },
        ],
      },
      {
        name: "Biomedical Engineering",
        description: "Apply engineering principles to healthcare by designing medical devices, prosthetics, and diagnostic equipment.",
        careerOpportunities: ["Biomedical Engineer", "Clinical Engineer", "Medical Device Designer", "Healthcare IT Specialist", "Research Scientist"],
        salaryRange: "4 - 20+ LPA",
        feeStructure: "1 - 8 LPA depending on college",
        topColleges: [
          { name: "IIT Madras", location: "Chennai, Tamil Nadu", annualFee: "~2.2 LPA", ranking: "#1 NIRF Engineering" },
          { name: "VIT Vellore", location: "Vellore, Tamil Nadu", annualFee: "~3.5 LPA", ranking: "Top Private India" },
          { name: "SRM Institute of Science and Technology", location: "Chennai, Tamil Nadu", annualFee: "~4 LPA", ranking: "Top Private" },
          { name: "PSG College of Technology", location: "Coimbatore, Tamil Nadu", annualFee: "~1.2 LPA", ranking: "Top TN Private" },
          { name: "Sathyabama Institute of Science & Technology", location: "Chennai, Tamil Nadu", annualFee: "~2.5 LPA", ranking: "Top TN Deemed" },
        ],
      },
    ],
    courses: [
      "B.Tech / B.E. in any engineering specialisation (4 years)",
      "Diploma in Engineering (Polytechnic - 3 years)",
      "M.Tech / M.E. for advanced specialisation (2 years)",
      "PhD in Engineering for research careers",
    ],
    icon: "Cog",
  },
  Medical: {
    domain: "Medical",
    description:
      "Your compassion, empathy, and desire to heal make you a perfect fit for Medicine. This path lets you directly improve people's health and quality of life.",
    branches: [
      {
        name: "General Medicine (MBBS)",
        description: "Diagnose and treat a wide range of illnesses and conditions as a general physician.",
        careerOpportunities: ["General Physician", "Hospital Doctor", "Public Health Officer", "Medical Researcher", "Medical Professor"],
        salaryRange: "8 - 30+ LPA",
        feeStructure: "1 - 25 LPA depending on college (govt vs private)",
        topColleges: [
          { name: "Madras Medical College", location: "Chennai, Tamil Nadu", annualFee: "~30,000/year (Govt)", ranking: "#1 TN Medical" },
          { name: "Stanley Medical College", location: "Chennai, Tamil Nadu", annualFee: "~30,000/year (Govt)", ranking: "Top TN Govt Medical" },
          { name: "CMC Vellore", location: "Vellore, Tamil Nadu", annualFee: "~70,000/year", ranking: "Top 5 Medical India" },
          { name: "Kilpauk Medical College", location: "Chennai, Tamil Nadu", annualFee: "~30,000/year (Govt)", ranking: "Top TN Govt Medical" },
          { name: "JIPMER Puducherry", location: "Puducherry", annualFee: "~1,200/year (Govt)", ranking: "Top 5 Medical India" },
          { name: "SRM Medical College", location: "Chennai, Tamil Nadu", annualFee: "~15 LPA", ranking: "Top Private Medical TN" },
        ],
      },
      {
        name: "Surgery",
        description: "Perform surgical procedures to treat injuries, diseases, deformities, and critical conditions.",
        careerOpportunities: ["General Surgeon", "Orthopaedic Surgeon", "Neurosurgeon", "Cardiac Surgeon", "Plastic Surgeon"],
        salaryRange: "15 - 60+ LPA",
        feeStructure: "10 - 30 LPA (MS/MCh post MBBS)",
        topColleges: [
          { name: "Madras Medical College", location: "Chennai, Tamil Nadu", annualFee: "~30,000/year (Govt)", ranking: "#1 TN Medical" },
          { name: "CMC Vellore", location: "Vellore, Tamil Nadu", annualFee: "~70,000/year", ranking: "Top 5 Medical India" },
          { name: "JIPMER Puducherry", location: "Puducherry", annualFee: "~1,200/year (Govt)", ranking: "Top 5 Medical India" },
          { name: "Stanley Medical College", location: "Chennai, Tamil Nadu", annualFee: "~30,000/year (Govt)", ranking: "Top TN Govt Medical" },
          { name: "Government Rajaji Hospital (MMC)", location: "Madurai, Tamil Nadu", annualFee: "~30,000/year (Govt)", ranking: "Top TN Govt" },
        ],
      },
      {
        name: "Dentistry (BDS)",
        description: "Specialise in oral health, dental surgery, cosmetic dentistry, and orthodontics.",
        careerOpportunities: ["Dentist", "Orthodontist", "Oral Surgeon", "Cosmetic Dentist", "Endodontist"],
        salaryRange: "5 - 20+ LPA",
        feeStructure: "2 - 15 LPA depending on college",
        topColleges: [
          { name: "Tamil Nadu Govt Dental College", location: "Chennai, Tamil Nadu", annualFee: "~25,000/year (Govt)", ranking: "#1 TN Dental" },
          { name: "Ragas Dental College", location: "Chennai, Tamil Nadu", annualFee: "~3 LPA", ranking: "Top TN Dental" },
          { name: "SRM Dental College", location: "Chennai, Tamil Nadu", annualFee: "~5 LPA", ranking: "Top Private Dental TN" },
          { name: "Saveetha Dental College", location: "Chennai, Tamil Nadu", annualFee: "~6 LPA", ranking: "Top Private Dental TN" },
          { name: "Sri Ramachandra Dental College", location: "Chennai, Tamil Nadu", annualFee: "~5 LPA", ranking: "Top TN Deemed" },
        ],
      },
      {
        name: "Pharmacy",
        description: "Develop, prepare, test, and dispense medications. Work in drug research and pharmaceutical companies.",
        careerOpportunities: ["Pharmacist", "Drug Inspector", "Pharma Researcher", "Clinical Research Associate", "Regulatory Affairs Specialist"],
        salaryRange: "3 - 15+ LPA",
        feeStructure: "1 - 6 LPA depending on college",
        topColleges: [
          { name: "Madras Medical College (Pharmacy)", location: "Chennai, Tamil Nadu", annualFee: "~20,000/year (Govt)", ranking: "Top TN Pharmacy" },
          { name: "JSS College of Pharmacy", location: "Ooty, Tamil Nadu", annualFee: "~2.5 LPA", ranking: "Top 10 Pharmacy India" },
          { name: "SRM College of Pharmacy", location: "Chennai, Tamil Nadu", annualFee: "~3 LPA", ranking: "Top TN Private" },
          { name: "PSG College of Pharmacy", location: "Coimbatore, Tamil Nadu", annualFee: "~1.5 LPA", ranking: "Top TN Pharmacy" },
          { name: "Annamalai University (Pharmacy)", location: "Chidambaram, Tamil Nadu", annualFee: "~1 LPA", ranking: "Top TN Govt" },
        ],
      },
      {
        name: "Physiotherapy (BPT)",
        description: "Rehabilitate patients with physical injuries, disabilities, and chronic pain through therapeutic exercises.",
        careerOpportunities: ["Physiotherapist", "Sports Physiotherapist", "Rehabilitation Specialist", "Ergonomics Consultant", "Neuro Physiotherapist"],
        salaryRange: "3 - 12+ LPA",
        feeStructure: "1 - 6 LPA depending on college",
        topColleges: [
          { name: "CMC Vellore (Physiotherapy)", location: "Vellore, Tamil Nadu", annualFee: "~50,000/year", ranking: "Top Physio India" },
          { name: "SRM College of Physiotherapy", location: "Chennai, Tamil Nadu", annualFee: "~3 LPA", ranking: "Top TN Private" },
          { name: "Sri Ramachandra Institute (Physio)", location: "Chennai, Tamil Nadu", annualFee: "~3 LPA", ranking: "Top TN Deemed" },
          { name: "Saveetha Medical College (BPT)", location: "Chennai, Tamil Nadu", annualFee: "~4 LPA", ranking: "Top TN Private" },
          { name: "PSG College of Physiotherapy", location: "Coimbatore, Tamil Nadu", annualFee: "~1.5 LPA", ranking: "Top TN" },
        ],
      },
      {
        name: "Nursing (B.Sc Nursing)",
        description: "Provide direct patient care, assist doctors, manage wards, and work in community health.",
        careerOpportunities: ["Staff Nurse", "ICU Nurse", "Nurse Educator", "Community Health Nurse", "Nursing Superintendent"],
        salaryRange: "3 - 10+ LPA",
        feeStructure: "50,000 - 4 LPA depending on college",
        topColleges: [
          { name: "CMC Vellore (Nursing)", location: "Vellore, Tamil Nadu", annualFee: "~40,000/year", ranking: "#1 Nursing India" },
          { name: "Madras Medical College (Nursing)", location: "Chennai, Tamil Nadu", annualFee: "~20,000/year (Govt)", ranking: "Top TN Govt" },
          { name: "Sri Ramachandra College of Nursing", location: "Chennai, Tamil Nadu", annualFee: "~2 LPA", ranking: "Top TN Deemed" },
          { name: "SRM College of Nursing", location: "Chennai, Tamil Nadu", annualFee: "~2.5 LPA", ranking: "Top TN Private" },
          { name: "PSG College of Nursing", location: "Coimbatore, Tamil Nadu", annualFee: "~1.5 LPA", ranking: "Top TN" },
        ],
      },
      {
        name: "Veterinary Science",
        description: "Treat animals, manage livestock health, and work in animal research and food safety.",
        careerOpportunities: ["Veterinarian", "Animal Surgeon", "Livestock Officer", "Wildlife Researcher", "Food Safety Inspector"],
        salaryRange: "4 - 15+ LPA",
        feeStructure: "50,000 - 5 LPA depending on college",
        topColleges: [
          { name: "Madras Veterinary College", location: "Chennai, Tamil Nadu", annualFee: "~15,000/year (Govt)", ranking: "#1 Veterinary TN" },
          { name: "Veterinary College & Research Institute", location: "Namakkal, Tamil Nadu", annualFee: "~15,000/year (Govt)", ranking: "Top TN Govt Vet" },
          { name: "TANUVAS", location: "Chennai, Tamil Nadu", annualFee: "~20,000/year (Govt)", ranking: "TN State Vet University" },
          { name: "Rajiv Gandhi Institute of Veterinary Education", location: "Puducherry", annualFee: "~30,000/year (Govt)", ranking: "Top Vet Puducherry" },
        ],
      },
    ],
    courses: [
      "MBBS (Bachelor of Medicine & Surgery) - 5.5 years",
      "BDS (Bachelor of Dental Surgery) - 5 years",
      "B.Pharm (Bachelor of Pharmacy) - 4 years",
      "B.Sc Nursing / BPT (Physiotherapy) - 4 years",
      "B.V.Sc (Veterinary Science) - 5 years",
    ],
    icon: "Heart",
  },
  Commerce: {
    domain: "Commerce",
    description:
      "Your strategic thinking, ambition, and financial acumen make Commerce your ideal domain. This field opens doors to finance, accounting, banking, and entrepreneurship.",
    branches: [
      {
        name: "Chartered Accountancy (CA)",
        description: "Manage financial records, auditing, taxation, and corporate financial advisory.",
        careerOpportunities: ["Chartered Accountant", "Tax Consultant", "Auditor", "CFO", "Forensic Accountant"],
        salaryRange: "7 - 40+ LPA",
        feeStructure: "~1 - 3 LPA (ICAI course fees)",
        topColleges: [
          { name: "ICAI (Institute of Chartered Accountants of India)", location: "Pan India", annualFee: "~70,000 total", ranking: "Only Certifying Body" },
          { name: "Loyola College", location: "Chennai, Tamil Nadu", annualFee: "~50,000/year", ranking: "#1 TN Commerce" },
          { name: "Stella Maris College", location: "Chennai, Tamil Nadu", annualFee: "~40,000/year", ranking: "Top TN Women's College" },
          { name: "PSG College of Arts & Science", location: "Coimbatore, Tamil Nadu", annualFee: "~40,000/year", ranking: "Top TN Arts & Science" },
          { name: "Madras Christian College", location: "Chennai, Tamil Nadu", annualFee: "~35,000/year", ranking: "Top TN Commerce" },
        ],
      },
      {
        name: "Investment Banking & Finance",
        description: "Advise on mergers, acquisitions, capital markets, portfolio management, and corporate finance.",
        careerOpportunities: ["Investment Banker", "Financial Analyst", "Portfolio Manager", "Equity Researcher", "Risk Analyst"],
        salaryRange: "10 - 50+ LPA",
        feeStructure: "5 - 25 LPA (MBA Finance)",
        topColleges: [
          { name: "IIM Trichy", location: "Tiruchirappalli, Tamil Nadu", annualFee: "~12 LPA", ranking: "Top New IIM" },
          { name: "Great Lakes Institute of Management", location: "Chennai, Tamil Nadu", annualFee: "~10 LPA", ranking: "Top 15 MBA India" },
          { name: "IFMR Graduate School of Business (KREA)", location: "Sri City (near TN border)", annualFee: "~10 LPA", ranking: "Top Finance MBA" },
          { name: "Loyola Institute of Business Administration (LIBA)", location: "Chennai, Tamil Nadu", annualFee: "~8 LPA", ranking: "Top TN MBA" },
          { name: "IIM Ahmedabad", location: "Ahmedabad, Gujarat", annualFee: "~11 LPA", ranking: "#1 MBA India" },
        ],
      },
      {
        name: "Marketing & Advertising",
        description: "Drive brand strategy, marketing campaigns, digital marketing, and consumer engagement.",
        careerOpportunities: ["Marketing Manager", "Brand Strategist", "Digital Marketing Lead", "Advertising Director", "SEO Specialist"],
        salaryRange: "5 - 30+ LPA",
        feeStructure: "3 - 20 LPA (BBA/MBA Marketing)",
        topColleges: [
          { name: "IIM Trichy", location: "Tiruchirappalli, Tamil Nadu", annualFee: "~12 LPA", ranking: "Top New IIM" },
          { name: "Great Lakes Institute of Management", location: "Chennai, Tamil Nadu", annualFee: "~10 LPA", ranking: "Top 15 MBA India" },
          { name: "LIBA Chennai", location: "Chennai, Tamil Nadu", annualFee: "~8 LPA", ranking: "Top TN MBA" },
          { name: "Anna University (DoMS)", location: "Chennai, Tamil Nadu", annualFee: "~1 LPA (Govt)", ranking: "Top TN Govt MBA" },
          { name: "MICA Ahmedabad", location: "Ahmedabad, Gujarat", annualFee: "~10 LPA", ranking: "#1 Marketing India" },
        ],
      },
      {
        name: "Entrepreneurship & Startups",
        description: "Start and run your own business ventures, innovate products, and lead teams.",
        careerOpportunities: ["Startup Founder", "Business Consultant", "Venture Capitalist", "Product Manager", "Growth Hacker"],
        salaryRange: "Variable (3 LPA to unlimited)",
        feeStructure: "Varies by programme",
        topColleges: [
          { name: "IIT Madras Research Park", location: "Chennai, Tamil Nadu", annualFee: "N/A (Incubator)", ranking: "Top Startup Incubator" },
          { name: "Anna University (CEG - Incubation Cell)", location: "Chennai, Tamil Nadu", annualFee: "N/A", ranking: "TN Govt Incubator" },
          { name: "VIT TBI", location: "Vellore, Tamil Nadu", annualFee: "N/A (Incubator)", ranking: "Top TN Incubator" },
          { name: "ISB Hyderabad", location: "Hyderabad, Telangana", annualFee: "~18 LPA", ranking: "Top MBA India" },
          { name: "IIM Bangalore (NSRCEL)", location: "Bangalore, Karnataka", annualFee: "~12 LPA", ranking: "#1 Incubator" },
        ],
      },
      {
        name: "Banking & Insurance",
        description: "Work in retail banking, corporate banking, insurance, and financial services sector.",
        careerOpportunities: ["Bank Manager", "Loan Officer", "Insurance Underwriter", "Relationship Manager", "Credit Analyst"],
        salaryRange: "4 - 20+ LPA",
        feeStructure: "1 - 5 LPA (B.Com / BBA)",
        topColleges: [
          { name: "Loyola College", location: "Chennai, Tamil Nadu", annualFee: "~50,000/year", ranking: "#1 TN Commerce" },
          { name: "Madras Christian College", location: "Chennai, Tamil Nadu", annualFee: "~35,000/year", ranking: "Top TN Commerce" },
          { name: "Presidency College", location: "Chennai, Tamil Nadu", annualFee: "~10,000/year (Govt)", ranking: "Top TN Govt" },
          { name: "PSG College of Arts & Science", location: "Coimbatore, Tamil Nadu", annualFee: "~40,000/year", ranking: "Top TN Arts & Science" },
          { name: "IBPS / SBI (Banking Exams)", location: "Pan India", annualFee: "Exam Fee Only", ranking: "Govt Banking Entry" },
        ],
      },
      {
        name: "Company Secretary (CS)",
        description: "Handle corporate governance, compliance, legal board procedures, and secretarial practices.",
        careerOpportunities: ["Company Secretary", "Compliance Officer", "Corporate Governance Advisor", "Legal Advisor", "Board Secretary"],
        salaryRange: "5 - 25+ LPA",
        feeStructure: "~50,000 - 1 LPA (ICSI course fees)",
        topColleges: [
          { name: "ICSI (Institute of Company Secretaries of India)", location: "Pan India", annualFee: "~50,000 total", ranking: "Only Certifying Body" },
          { name: "Loyola College", location: "Chennai, Tamil Nadu", annualFee: "~50,000/year", ranking: "#1 TN Commerce" },
          { name: "Ethiraj College for Women", location: "Chennai, Tamil Nadu", annualFee: "~30,000/year", ranking: "Top TN Women's College" },
          { name: "Stella Maris College", location: "Chennai, Tamil Nadu", annualFee: "~40,000/year", ranking: "Top TN Women's College" },
        ],
      },
    ],
    courses: [
      "B.Com / BBA (Bachelor of Business Administration) - 3 years",
      "CA / CMA / CS professional courses - 3-5 years",
      "MBA (Master of Business Administration) - 2 years",
      "M.Com / PGDM for specialisation",
      "B.Com (Banking & Insurance) - 3 years",
    ],
    icon: "TrendingUp",
  },
  Arts: {
    domain: "Arts",
    description:
      "Your creativity, imagination, and passion for expression make Arts a wonderful path. This field lets you communicate powerful ideas through various creative mediums.",
    branches: [
      {
        name: "Fine Arts (Painting / Sculpture)",
        description: "Create visual art through painting, sculpture, printmaking, and mixed media.",
        careerOpportunities: ["Professional Artist", "Art Director", "Gallery Curator", "Art Teacher", "Muralist"],
        salaryRange: "3 - 15+ LPA",
        feeStructure: "50,000 - 5 LPA depending on college",
        topColleges: [
          { name: "Government College of Fine Arts", location: "Chennai, Tamil Nadu", annualFee: "~5,000/year (Govt)", ranking: "#1 Fine Arts TN" },
          { name: "Government College of Fine Arts", location: "Kumbakonam, Tamil Nadu", annualFee: "~5,000/year (Govt)", ranking: "Top TN Govt Arts" },
          { name: "Sir JJ School of Art", location: "Mumbai, Maharashtra", annualFee: "~10,000/year (Govt)", ranking: "#1 Fine Arts India" },
          { name: "Faculty of Fine Arts, MSU Baroda", location: "Vadodara, Gujarat", annualFee: "~15,000/year (Govt)", ranking: "Top 3 Fine Arts" },
          { name: "Kalakshetra Foundation", location: "Chennai, Tamil Nadu", annualFee: "~10,000/year", ranking: "Historic TN Arts Institution" },
        ],
      },
      {
        name: "Performing Arts (Theatre / Dance / Music)",
        description: "Express stories and emotions through live theatre, classical dance, and music performance.",
        careerOpportunities: ["Actor", "Musician", "Choreographer", "Theatre Director", "Music Composer"],
        salaryRange: "3 - 30+ LPA (varies widely)",
        feeStructure: "30,000 - 5 LPA depending on institution",
        topColleges: [
          { name: "Kalakshetra Foundation", location: "Chennai, Tamil Nadu", annualFee: "~10,000/year", ranking: "#1 Dance/Music TN" },
          { name: "Tamil Nadu Music & Fine Arts University", location: "Chennai, Tamil Nadu", annualFee: "~10,000/year (Govt)", ranking: "TN State Arts University" },
          { name: "Madras University (Music Dept)", location: "Chennai, Tamil Nadu", annualFee: "~15,000/year (Govt)", ranking: "Top TN Govt" },
          { name: "NSD (National School of Drama)", location: "New Delhi", annualFee: "~20,000/year (Govt)", ranking: "#1 Theatre India" },
          { name: "FTII Pune", location: "Pune, Maharashtra", annualFee: "~50,000/year (Govt)", ranking: "#1 Film & Acting" },
        ],
      },
      {
        name: "Film & Media Production",
        description: "Create films, documentaries, digital media content, and manage media production.",
        careerOpportunities: ["Film Director", "Cinematographer", "Video Editor", "Content Producer", "Screenwriter"],
        salaryRange: "4 - 25+ LPA",
        feeStructure: "1 - 10 LPA depending on institution",
        topColleges: [
          { name: "LV Prasad Film & TV Academy", location: "Chennai, Tamil Nadu", annualFee: "~4 LPA", ranking: "Top Film Institute" },
          { name: "Prasad Institute of Communication & Management", location: "Chennai, Tamil Nadu", annualFee: "~3 LPA", ranking: "Top TN Media" },
          { name: "SRM School of Cinema", location: "Chennai, Tamil Nadu", annualFee: "~3 LPA", ranking: "Top TN Private Film" },
          { name: "FTII Pune", location: "Pune, Maharashtra", annualFee: "~50,000/year (Govt)", ranking: "#1 Film India" },
          { name: "Satyajit Ray Film & TV Institute", location: "Kolkata, West Bengal", annualFee: "~30,000/year (Govt)", ranking: "Top 3 Film" },
        ],
      },
      {
        name: "Design (Fashion / Interior / Graphic)",
        description: "Design clothing, interiors, graphics, and visual identities for brands and spaces.",
        careerOpportunities: ["Fashion Designer", "Interior Designer", "Graphic Designer", "UI/UX Designer", "Product Designer"],
        salaryRange: "4 - 20+ LPA",
        feeStructure: "2 - 12 LPA depending on college",
        topColleges: [
          { name: "NIFT Chennai", location: "Chennai, Tamil Nadu", annualFee: "~2.5 LPA", ranking: "#1 Fashion TN" },
          { name: "NID (National Institute of Design)", location: "Ahmedabad, Gujarat", annualFee: "~3.5 LPA", ranking: "#1 Design India" },
          { name: "SRM School of Architecture & Interior Design", location: "Chennai, Tamil Nadu", annualFee: "~3 LPA", ranking: "Top TN Private" },
          { name: "Hamstech Institute", location: "Chennai, Tamil Nadu", annualFee: "~2 LPA", ranking: "Top TN Fashion" },
          { name: "Pearl Academy", location: "New Delhi / Mumbai", annualFee: "~5 LPA", ranking: "Top Private Design" },
        ],
      },
      {
        name: "Journalism & Mass Communication",
        description: "Report news, write features, manage media content, and communicate to large audiences.",
        careerOpportunities: ["Journalist", "News Anchor", "Content Writer", "PR Manager", "Social Media Manager"],
        salaryRange: "3 - 18+ LPA",
        feeStructure: "50,000 - 5 LPA depending on college",
        topColleges: [
          { name: "Asian College of Journalism", location: "Chennai, Tamil Nadu", annualFee: "~5 LPA", ranking: "#1 Journalism TN" },
          { name: "Madras Christian College (Mass Comm)", location: "Chennai, Tamil Nadu", annualFee: "~35,000/year", ranking: "Top TN Commerce" },
          { name: "Loyola College (Visual Communication)", location: "Chennai, Tamil Nadu", annualFee: "~50,000/year", ranking: "#1 TN VisCom" },
          { name: "Anna University (Media Sciences)", location: "Chennai, Tamil Nadu", annualFee: "~50,000/year (Govt)", ranking: "Top TN Govt" },
          { name: "IIMC (Indian Institute of Mass Communication)", location: "New Delhi", annualFee: "~75,000/year (Govt)", ranking: "#1 Journalism India" },
        ],
      },
      {
        name: "Literature & Creative Writing",
        description: "Study languages, literature, and develop creative writing skills for publishing and academia.",
        careerOpportunities: ["Author", "Editor", "Literary Critic", "Copywriter", "University Lecturer"],
        salaryRange: "3 - 12+ LPA",
        feeStructure: "10,000 - 2 LPA depending on college",
        topColleges: [
          { name: "Madras University (English Dept)", location: "Chennai, Tamil Nadu", annualFee: "~10,000/year (Govt)", ranking: "Top TN Govt" },
          { name: "Loyola College (English Literature)", location: "Chennai, Tamil Nadu", annualFee: "~50,000/year", ranking: "Top TN Arts" },
          { name: "Stella Maris College", location: "Chennai, Tamil Nadu", annualFee: "~40,000/year", ranking: "Top TN Women's College" },
          { name: "Presidency College", location: "Chennai, Tamil Nadu", annualFee: "~10,000/year (Govt)", ranking: "Top TN Govt" },
          { name: "The American College", location: "Madurai, Tamil Nadu", annualFee: "~30,000/year", ranking: "Top TN Arts" },
        ],
      },
    ],
    courses: [
      "BA in Fine Arts / Performing Arts - 3 years",
      "BA in Mass Communication & Journalism - 3 years",
      "B.Des (Bachelor of Design) - 4 years",
      "BA in English Literature / Tamil Literature - 3 years",
      "B.Sc Visual Communication - 3 years",
    ],
    icon: "Palette",
  },
  Management: {
    domain: "Management",
    description:
      "Your leadership skills, strategic thinking, and ability to bring people together make Management your forte. Leaders in this field drive organisations and shape business outcomes.",
    branches: [
      {
        name: "Business Administration (MBA)",
        description: "Lead organisations with skills in strategy, operations, and people management.",
        careerOpportunities: ["Business Manager", "Operations Head", "Strategy Consultant", "CEO/COO", "Management Consultant"],
        salaryRange: "8 - 40+ LPA",
        feeStructure: "5 - 25 LPA (MBA programmes)",
        topColleges: [
          { name: "IIM Trichy", location: "Tiruchirappalli, Tamil Nadu", annualFee: "~12 LPA", ranking: "Top New IIM" },
          { name: "Great Lakes Institute of Management", location: "Chennai, Tamil Nadu", annualFee: "~10 LPA", ranking: "Top 15 MBA India" },
          { name: "LIBA (Loyola Institute of Business Admin)", location: "Chennai, Tamil Nadu", annualFee: "~8 LPA", ranking: "Top TN MBA" },
          { name: "Anna University (DoMS)", location: "Chennai, Tamil Nadu", annualFee: "~1 LPA (Govt)", ranking: "Top TN Govt MBA" },
          { name: "IIM Ahmedabad", location: "Ahmedabad, Gujarat", annualFee: "~11 LPA", ranking: "#1 MBA India" },
        ],
      },
      {
        name: "Human Resource Management",
        description: "Manage recruitment, training, employee relations, and organisational culture.",
        careerOpportunities: ["HR Manager", "Talent Acquisition Lead", "Training & Development Head", "CHRO", "OD Consultant"],
        salaryRange: "5 - 25+ LPA",
        feeStructure: "3 - 15 LPA (MBA-HR)",
        topColleges: [
          { name: "XLRI Jamshedpur (HRM)", location: "Jamshedpur, Jharkhand", annualFee: "~12 LPA", ranking: "#1 HR India" },
          { name: "TISS Mumbai", location: "Mumbai, Maharashtra", annualFee: "~1 LPA (Govt)", ranking: "Top 3 HR" },
          { name: "Great Lakes Institute of Management", location: "Chennai, Tamil Nadu", annualFee: "~10 LPA", ranking: "Top 15 MBA India" },
          { name: "LIBA Chennai", location: "Chennai, Tamil Nadu", annualFee: "~8 LPA", ranking: "Top TN MBA" },
          { name: "IIM Trichy", location: "Tiruchirappalli, Tamil Nadu", annualFee: "~12 LPA", ranking: "Top New IIM" },
        ],
      },
      {
        name: "Project Management",
        description: "Plan, execute, and deliver projects on time and within budget across industries.",
        careerOpportunities: ["Project Manager", "Scrum Master", "PMO Lead", "Delivery Manager", "Agile Coach"],
        salaryRange: "6 - 30+ LPA",
        feeStructure: "Certifications: 50K - 3 LPA",
        topColleges: [
          { name: "IIM Trichy", location: "Tiruchirappalli, Tamil Nadu", annualFee: "~12 LPA", ranking: "Top New IIM" },
          { name: "Great Lakes Chennai", location: "Chennai, Tamil Nadu", annualFee: "~10 LPA", ranking: "Top 15 MBA India" },
          { name: "Anna University (DoMS)", location: "Chennai, Tamil Nadu", annualFee: "~1 LPA (Govt)", ranking: "Top TN Govt MBA" },
          { name: "NITIE Mumbai (now IIM Mumbai)", location: "Mumbai, Maharashtra", annualFee: "~8 LPA", ranking: "Top Operations/PM" },
          { name: "SP Jain Mumbai", location: "Mumbai, Maharashtra", annualFee: "~9 LPA", ranking: "Top 10 MBA" },
        ],
      },
      {
        name: "Public Administration & Governance",
        description: "Lead government bodies, policy-making, and public service organisations.",
        careerOpportunities: ["IAS / IPS Officer", "Policy Analyst", "Government Administrator", "Public Sector Manager", "District Collector"],
        salaryRange: "6 - 25+ LPA (Govt scale + perks)",
        feeStructure: "Varies (UPSC coaching: 1-3 LPA)",
        topColleges: [
          { name: "Anna Institute of Management (AIIMS)", location: "Chennai, Tamil Nadu", annualFee: "~1 LPA (Govt)", ranking: "Top TN Govt" },
          { name: "Madras University (Public Admin)", location: "Chennai, Tamil Nadu", annualFee: "~15,000/year (Govt)", ranking: "Top TN Govt" },
          { name: "LBSNAA Mussoorie", location: "Mussoorie, Uttarakhand", annualFee: "Govt Training (Free)", ranking: "#1 Civil Services Training" },
          { name: "IIPA Delhi", location: "New Delhi", annualFee: "~30,000/year", ranking: "Top Public Admin" },
          { name: "JNU (School of International Studies)", location: "New Delhi", annualFee: "~20,000/year (Govt)", ranking: "Top Public Policy" },
        ],
      },
      {
        name: "Hospital & Healthcare Management",
        description: "Manage hospitals, clinics, and healthcare systems combining business skills with medical administration.",
        careerOpportunities: ["Hospital Administrator", "Healthcare Consultant", "Health Policy Analyst", "Clinic Manager", "Pharma Operations Lead"],
        salaryRange: "5 - 25+ LPA",
        feeStructure: "3 - 12 LPA (MBA Healthcare)",
        topColleges: [
          { name: "SRM School of Public Health", location: "Chennai, Tamil Nadu", annualFee: "~4 LPA", ranking: "Top TN Healthcare Mgmt" },
          { name: "Apollo Institute of Hospital Administration", location: "Chennai, Tamil Nadu", annualFee: "~3 LPA", ranking: "Top Hospital Admin TN" },
          { name: "Sri Ramachandra Institute (Hospital Admin)", location: "Chennai, Tamil Nadu", annualFee: "~3 LPA", ranking: "Top TN Deemed" },
          { name: "IIHMR Jaipur", location: "Jaipur, Rajasthan", annualFee: "~5 LPA", ranking: "#1 Hospital Admin India" },
          { name: "TISS Mumbai (Health Admin)", location: "Mumbai, Maharashtra", annualFee: "~1 LPA", ranking: "Top Health Admin" },
        ],
      },
      {
        name: "Event Management",
        description: "Plan and execute corporate events, conferences, weddings, and large-scale entertainment events.",
        careerOpportunities: ["Event Manager", "Wedding Planner", "Conference Organiser", "Brand Activation Lead", "Festival Director"],
        salaryRange: "3 - 15+ LPA",
        feeStructure: "1 - 5 LPA depending on programme",
        topColleges: [
          { name: "EMDI Institute of Media & Communication", location: "Chennai, Tamil Nadu", annualFee: "~2 LPA", ranking: "Top Event Mgmt TN" },
          { name: "SRM University (Event Mgmt)", location: "Chennai, Tamil Nadu", annualFee: "~3 LPA", ranking: "Top TN Private" },
          { name: "National Institute of Event Management", location: "Mumbai, Maharashtra", annualFee: "~2 LPA", ranking: "Top Event Mgmt India" },
          { name: "IIMC Delhi (Advertising & PR)", location: "New Delhi", annualFee: "~75,000/year (Govt)", ranking: "Top Communication" },
        ],
      },
    ],
    courses: [
      "BBA (Bachelor of Business Administration) - 3 years",
      "BMS (Bachelor of Management Studies) - 3 years",
      "MBA / PGDM (Post Graduate Diploma in Management) - 2 years",
      "MPA (Master of Public Administration)",
      "MBA in Hospital & Healthcare Management - 2 years",
    ],
    icon: "Briefcase",
  },
}

// ---------------------------------------------------------------------------
// All domains
// ---------------------------------------------------------------------------
const allDomains: CareerDomain[] = [
  "Engineering",
  "Medical",
  "Commerce",
  "Arts",
  "Management",
]

// ---------------------------------------------------------------------------
// Scoring: accumulate Likert values per domain
// ---------------------------------------------------------------------------
export function calculateResults(
  answers: Record<number, number>
): { domain: CareerDomain; scores: Record<CareerDomain, number> } {
  const totals = Object.fromEntries(
    allDomains.map((d) => [d, 0])
  ) as Record<CareerDomain, number>

  for (const [questionId, value] of Object.entries(answers)) {
    const question = questions.find((q) => q.id === Number(questionId))
    if (question) {
      totals[question.domain] += value
    }
  }

  const topDomain = (Object.entries(totals) as [CareerDomain, number][]).reduce(
    (max, curr) => (curr[1] > max[1] ? curr : max)
  )[0]

  return { domain: topDomain, scores: totals }
}
