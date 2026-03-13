import type { CareerDomain } from "./assessment-data"

export interface CompetitiveExam {
  name: string
  conductingBody: string
  eligibility: string
  opportunities: string[]
  frequency: string
  pattern: string
}

export interface DomainExams {
  domain: CareerDomain
  description: string
  exams: CompetitiveExam[]
}

export const examsByDomain: DomainExams[] = [
  {
    domain: "Engineering",
    description:
      "Competitive exams that open doors to top engineering colleges and advanced technical careers in India.",
    exams: [
      {
        name: "JEE Main",
        conductingBody: "National Testing Agency (NTA)",
        eligibility:
          "Class 12 passed or appearing with Physics, Chemistry, and Mathematics. Age: no upper limit.",
        opportunities: [
          "NITs",
          "IIITs",
          "GFTIs",
          "State engineering colleges",
          "Private universities accepting JEE scores",
        ],
        frequency: "Twice a year (January & April sessions)",
        pattern:
          "MCQ & numerical-based. 90 questions from Physics, Chemistry, Mathematics. 3 hours duration.",
      },
      {
        name: "JEE Advanced",
        conductingBody: "IITs (rotating basis)",
        eligibility:
          "Must qualify JEE Main (top 2,50,000 ranks). Maximum 2 attempts in consecutive years. Age limit applies.",
        opportunities: [
          "IITs",
          "IISc Bangalore",
          "IISER",
          "Top research institutes",
        ],
        frequency: "Once a year (May/June)",
        pattern:
          "Two papers of 3 hours each. MCQ, numerical, and matching-type questions from PCM.",
      },
      {
        name: "GATE",
        conductingBody: "IITs & IISc (rotating basis)",
        eligibility:
          "B.Tech / B.E. final year or graduated. Also open to M.Sc. and equivalent degrees.",
        opportunities: [
          "M.Tech in IITs/NITs",
          "PSU recruitment (BHEL, ONGC, ISRO, etc.)",
          "Research fellowships",
          "PhD admissions",
        ],
        frequency: "Once a year (February)",
        pattern:
          "65 questions. MCQ + NAT (Numerical Answer Type). 3 hours. Subject-specific paper.",
      },
      {
        name: "TNEA (Tamil Nadu Engineering Admissions)",
        conductingBody: "Anna University / DOTE",
        eligibility:
          "Class 12 passed from Tamil Nadu board or equivalent with PCM. Based on 12th marks (no entrance exam).",
        opportunities: [
          "Anna University colleges",
          "Government engineering colleges in TN",
          "Private engineering colleges in TN",
        ],
        frequency: "Once a year (June-July counselling)",
        pattern:
          "Merit-based on Class 12 marks. No separate entrance test. Online counselling process.",
      },
      {
        name: "BITSAT",
        conductingBody: "BITS Pilani",
        eligibility:
          "Class 12 with minimum 75% aggregate in PCM. Must have passed with first attempt.",
        opportunities: [
          "BITS Pilani",
          "BITS Goa",
          "BITS Hyderabad",
        ],
        frequency: "Once a year (May-June)",
        pattern:
          "150 MCQs from Physics, Chemistry, Mathematics, English & Logical Reasoning. 3 hours online.",
      },
    ],
  },
  {
    domain: "Medical",
    description:
      "Exams that lead to medical, dental, pharmacy, and allied health science programs across India.",
    exams: [
      {
        name: "NEET UG",
        conductingBody: "National Testing Agency (NTA)",
        eligibility:
          "Class 12 passed or appearing with Physics, Chemistry, and Biology. Minimum 50% aggregate (40% for reserved).",
        opportunities: [
          "MBBS",
          "BDS",
          "BAMS / BHMS",
          "B.Sc Nursing",
          "BVSc",
          "Government & private medical colleges",
        ],
        frequency: "Once a year (May)",
        pattern:
          "200 MCQs (180 to attempt) from Physics, Chemistry, Botany, Zoology. 3 hours 20 minutes. Pen & paper.",
      },
      {
        name: "NEET PG",
        conductingBody: "National Board of Examinations (NBE)",
        eligibility:
          "MBBS degree with completion of internship. Must hold a valid registration with MCI/State Medical Council.",
        opportunities: [
          "MD / MS specialisations",
          "DNB courses",
          "Government hospital postings",
          "Super-speciality pathway",
        ],
        frequency: "Once a year (March)",
        pattern:
          "200 MCQs. Computer-based test. 3.5 hours duration. Covers all MBBS subjects.",
      },
      {
        name: "AIIMS INI-CET",
        conductingBody: "AIIMS New Delhi",
        eligibility:
          "MBBS degree holders for PG admissions into AIIMS, JIPMER, PGIMER, NIMHANS, and other INIs.",
        opportunities: [
          "AIIMS PG courses",
          "JIPMER PG courses",
          "PGIMER Chandigarh",
          "NIMHANS Bangalore",
        ],
        frequency: "Twice a year (January & July sessions)",
        pattern:
          "200 MCQs. Computer-based. 3 hours. Subject-wise from clinical and pre-clinical MBBS.",
      },
      {
        name: "NEET MDS",
        conductingBody: "National Board of Examinations (NBE)",
        eligibility:
          "BDS degree with one year internship. Valid dental council registration.",
        opportunities: [
          "MDS specialisations (Orthodontics, Prosthodontics, Oral Surgery, etc.)",
          "Dental teaching positions",
          "Government dental hospitals",
        ],
        frequency: "Once a year (January-March)",
        pattern:
          "240 MCQs. Computer-based. 3 hours. All BDS subjects covered.",
      },
    ],
  },
  {
    domain: "Commerce",
    description:
      "Professional and competitive exams for careers in finance, accounting, banking, and business.",
    exams: [
      {
        name: "CA Foundation",
        conductingBody: "Institute of Chartered Accountants of India (ICAI)",
        eligibility:
          "Class 12 passed from any stream. Must register with ICAI after Class 10.",
        opportunities: [
          "Chartered Accountant (CA)",
          "Audit firms",
          "Corporate finance",
          "Taxation consulting",
          "CFO roles",
        ],
        frequency: "Twice a year (May & November)",
        pattern:
          "4 papers: Accounting, Business Law, Quantitative Aptitude, Business Economics. Mix of subjective & MCQ.",
      },
      {
        name: "CMA Foundation",
        conductingBody: "Institute of Cost Accountants of India (ICMAI)",
        eligibility:
          "Class 12 passed or appearing. Registration with ICMAI required.",
        opportunities: [
          "Cost & Management Accountant",
          "Management consulting",
          "Cost auditing",
          "Financial planning",
        ],
        frequency: "Twice a year (June & December)",
        pattern:
          "4 papers covering Fundamentals of Economics, Accounting, Law, and Business Mathematics.",
      },
      {
        name: "CS Foundation",
        conductingBody: "Institute of Company Secretaries of India (ICSI)",
        eligibility:
          "Class 12 passed from any stream. Must register with ICSI.",
        opportunities: [
          "Company Secretary",
          "Corporate governance",
          "Legal compliance",
          "Board advisory roles",
        ],
        frequency: "Twice a year (June & December)",
        pattern:
          "4 papers: Business Environment, Business Management, Business Economics, Fundamentals of Accounting.",
      },
      {
        name: "CAT (Common Admission Test)",
        conductingBody: "IIMs (rotating basis)",
        eligibility:
          "Bachelor's degree with minimum 50% (45% for reserved). Final year students can also apply.",
        opportunities: [
          "MBA at IIMs",
          "MBA at top B-schools",
          "Executive MBA programs",
          "Management consulting careers",
        ],
        frequency: "Once a year (November)",
        pattern:
          "3 sections: VARC, DILR, Quantitative Ability. MCQ + TITA. 2 hours duration. Computer-based.",
      },
      {
        name: "GMAT",
        conductingBody: "GMAC (Graduate Management Admission Council)",
        eligibility:
          "Bachelor's degree from a recognized university. No age limit. Valid for international MBA programs.",
        opportunities: [
          "International MBA programs",
          "Top global B-schools",
          "ISB Hyderabad",
          "Executive education",
        ],
        frequency: "Available year-round (appointment-based)",
        pattern:
          "Quantitative, Verbal, Integrated Reasoning, Analytical Writing. 3 hours 7 minutes. Computer-adaptive.",
      },
    ],
  },
  {
    domain: "Arts",
    description:
      "Entrance exams for creative, design, humanities, and performing arts programs.",
    exams: [
      {
        name: "CUET (Common University Entrance Test)",
        conductingBody: "National Testing Agency (NTA)",
        eligibility:
          "Class 12 passed or appearing. Required by most central universities for UG admissions.",
        opportunities: [
          "Delhi University",
          "JNU",
          "BHU",
          "Jamia Millia Islamia",
          "Central universities across India",
        ],
        frequency: "Once a year (May-June)",
        pattern:
          "Domain-specific subjects + General Test + Language. MCQ-based. Computer-based. Flexible subject choice.",
      },
      {
        name: "NID DAT (Design Aptitude Test)",
        conductingBody: "National Institute of Design (NID)",
        eligibility:
          "Class 12 passed or appearing from any stream. For B.Des admission at NID campuses.",
        opportunities: [
          "NID Ahmedabad",
          "NID Gandhinagar",
          "NID Haryana",
          "Product design",
          "Communication design",
        ],
        frequency: "Once a year (January prelims, March/April mains)",
        pattern:
          "Prelims: MCQ on design aptitude, visual reasoning, GK. Mains: Studio test + interview.",
      },
      {
        name: "NIFT Entrance",
        conductingBody: "National Institute of Fashion Technology (NIFT)",
        eligibility:
          "Class 12 passed or appearing for B.Des / B.FTech. Graduation for M.Des / M.FTech / MFM.",
        opportunities: [
          "NIFT campuses across India",
          "Fashion design",
          "Textile design",
          "Fashion management",
          "Knitwear design",
        ],
        frequency: "Once a year (February)",
        pattern:
          "GAT (General Ability Test) + CAT (Creative Ability Test). Written test followed by situation test & interview.",
      },
      {
        name: "UCEED (Undergraduate Common Entrance Exam for Design)",
        conductingBody: "IIT Bombay",
        eligibility:
          "Class 12 passed or appearing. For B.Des admissions at IIT Bombay, IIT Guwahati, IIITDM Jabalpur.",
        opportunities: [
          "IIT Bombay (B.Des)",
          "IIT Guwahati (B.Des)",
          "IIITDM Jabalpur",
          "Industrial design careers",
        ],
        frequency: "Once a year (January)",
        pattern:
          "MCQ + NAT + MSQ on visualization, observation, design thinking. 3 hours. Computer-based.",
      },
      {
        name: "FTII Entrance (JET)",
        conductingBody: "Film and Television Institute of India, Pune",
        eligibility:
          "Graduation in any discipline for most courses. Age and experience criteria vary by specialisation.",
        opportunities: [
          "Film direction",
          "Cinematography",
          "Sound recording",
          "Film editing",
          "Art direction",
        ],
        frequency: "Once a year (varies)",
        pattern:
          "Written test on general awareness, analytical thinking, and film appreciation. Followed by interview.",
      },
    ],
  },
  {
    domain: "Management",
    description:
      "Exams for MBA admissions, civil services, and leadership-track careers in government and business.",
    exams: [
      {
        name: "CAT (Common Admission Test)",
        conductingBody: "IIMs (rotating basis)",
        eligibility:
          "Bachelor's degree with minimum 50% (45% for reserved). Final year students eligible.",
        opportunities: [
          "IIMs",
          "FMS Delhi",
          "MDI Gurgaon",
          "SPJIMR Mumbai",
          "IIT MBA programs",
        ],
        frequency: "Once a year (November)",
        pattern:
          "3 sections: VARC, DILR, QA. MCQ + TITA. 2 hours. Computer-based adaptive test.",
      },
      {
        name: "XAT (Xavier Aptitude Test)",
        conductingBody: "XLRI Jamshedpur",
        eligibility:
          "Bachelor's degree (any discipline). Final year students eligible.",
        opportunities: [
          "XLRI Jamshedpur",
          "XIMB",
          "XIME",
          "GIM Goa",
          "100+ XAT-accepting colleges",
        ],
        frequency: "Once a year (January)",
        pattern:
          "Verbal & Logical Ability, Decision Making, Quantitative Ability. 3 hours. Computer-based.",
      },
      {
        name: "MAT (Management Aptitude Test)",
        conductingBody: "All India Management Association (AIMA)",
        eligibility:
          "Bachelor's degree in any discipline from a recognized university.",
        opportunities: [
          "600+ B-schools across India",
          "MBA programs",
          "PGDM programs",
          "Mid-tier management colleges",
        ],
        frequency: "4 times a year (Feb, May, Sep, Dec)",
        pattern:
          "5 sections: Language, Intelligence, Data Analysis, Mathematics, Indian & Global Environment. 150 mins.",
      },
      {
        name: "UPSC CSE (Civil Services Examination)",
        conductingBody: "Union Public Service Commission (UPSC)",
        eligibility:
          "Bachelor's degree in any discipline. Age: 21-32 years (relaxation for reserved). Indian citizen.",
        opportunities: [
          "IAS (Indian Administrative Service)",
          "IPS (Indian Police Service)",
          "IFS (Indian Foreign Service)",
          "IRS",
          "Central government services",
        ],
        frequency: "Once a year (Prelims in June, Mains in Sep-Oct)",
        pattern:
          "3 stages: Prelims (MCQ), Mains (descriptive essays & papers), Interview. Year-long process.",
      },
      {
        name: "CMAT (Common Management Admission Test)",
        conductingBody: "National Testing Agency (NTA)",
        eligibility:
          "Bachelor's degree with minimum 50%. Final year students eligible.",
        opportunities: [
          "JBIMS Mumbai",
          "GIM Goa",
          "KJ Somaiya",
          "AICTE-approved MBA colleges",
        ],
        frequency: "Once a year (January-March)",
        pattern:
          "4 sections: Quantitative, Logical Reasoning, Language, General Awareness. 3 hours. 100 MCQs.",
      },
    ],
  },
]
