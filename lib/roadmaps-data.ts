export type RoadmapDomain =
  | "Software"
  | "AI & Data"
  | "Core Programming"
  | "Mechanical"
  | "Electronics"
  | "Commerce & Management"

export type Roadmap = {
  id: string
  title: string
  domain: RoadmapDomain
  description: string
  /** Ordered learning steps */
  steps: Array<{
    title: string
    items: string[]
    icon: string
    youtube: Array<{ label: string; url: string }>
  }>
  /** Optional practice links */
  practiceLinks?: Array<{ label: string; url: string }>
}

export const roadmaps: Roadmap[] = [
  {
    id: "fullstack-web",
    title: "Full‑Stack Web Developer Roadmap",
    domain: "Software",
    description:
      "A practical step-by-step path to become a full‑stack developer (frontend + backend + deployment).",
    steps: [
      {
        title: "Basics",
        icon: "FileCode",
        items: ["HTML", "CSS (Flexbox, Grid)", "JavaScript fundamentals"],
        youtube: [
          {
            label: "freeCodeCamp: HTML/CSS/JavaScript (playlist)",
            url: "https://www.youtube.com/playlist?list=PLCVs_S8Skwp9YGULQkGbKJgKhj0_UemVY",
          },
          {
            label: "freeCodeCamp: Responsive Web Design (playlist)",
            url: "https://www.youtube.com/playlist?list=PLw22eAkGZn-1OiYoJPvvhJfUIEjGEKr_j",
          },
          { label: "JavaScript fundamentals (search)", url: "https://www.youtube.com/results?search_query=javascript+fundamentals+beginner" },
        ],
      },
      {
        title: "Frontend",
        icon: "Layout",
        items: ["React.js", "Routing", "State management", "UI basics"],
        youtube: [
          { label: "React (course)", url: "https://www.youtube.com/watch?v=4UZrsTqkcW4" },
          { label: "The Net Ninja (playlists)", url: "https://www.youtube.com/c/TheNetNinja/playlists" },
          { label: "React routing (search)", url: "https://www.youtube.com/results?search_query=react+router+tutorial" },
        ],
      },
      {
        title: "Backend",
        icon: "Server",
        items: ["Node.js + Express", "REST APIs", "Auth basics (JWT/Sessions)"],
        youtube: [
          {
            label: "freeCodeCamp: Node & Express (playlist)",
            url: "https://www.youtube.com/playlist?list=PLUvKRKFIL7gulsPOezFqEC79m7oK6QUes",
          },
          { label: "Build REST APIs (search)", url: "https://www.youtube.com/results?search_query=node+express+rest+api+tutorial" },
          { label: "JWT authentication (search)", url: "https://www.youtube.com/results?search_query=jwt+authentication+express" },
        ],
      },
      {
        title: "Database",
        icon: "Database",
        items: ["SQL basics", "PostgreSQL/MySQL OR MongoDB", "ORM basics"],
        youtube: [
          { label: "SQL basics (search)", url: "https://www.youtube.com/results?search_query=sql+basics+for+beginners" },
          { label: "PostgreSQL tutorial (search)", url: "https://www.youtube.com/results?search_query=postgresql+tutorial+beginner" },
        ],
      },
      {
        title: "Tools",
        icon: "GitBranch",
        items: ["Git & GitHub", "Debugging", "Testing basics"],
        youtube: [
          { label: "Git & GitHub (search)", url: "https://www.youtube.com/results?search_query=git+github+for+beginners" },
          { label: "Testing basics (search)", url: "https://www.youtube.com/results?search_query=unit+testing+javascript+basics" },
        ],
      },
      {
        title: "Deployment",
        icon: "Rocket",
        items: ["Vercel/Netlify", "Docker basics", "CI/CD basics"],
        youtube: [
          { label: "Deploy React/Next (search)", url: "https://www.youtube.com/results?search_query=deploy+nextjs+vercel+tutorial" },
          { label: "Docker basics (search)", url: "https://www.youtube.com/results?search_query=docker+basics+beginner" },
        ],
      },
      {
        title: "Projects",
        icon: "FolderKanban",
        items: ["Portfolio (3 projects)", "Real CRUD app", "Capstone project"],
        youtube: [
          { label: "Fullstack project ideas (search)", url: "https://www.youtube.com/results?search_query=full+stack+project+ideas" },
          { label: "Build CRUD app (search)", url: "https://www.youtube.com/results?search_query=crud+app+react+node+mongodb" },
        ],
      },
    ],
    practiceLinks: [
      { label: "MDN Web Docs", url: "https://developer.mozilla.org/" },
      { label: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
    ],
  },
  {
    id: "ai-ml",
    title: "AI / Machine Learning Roadmap",
    domain: "AI & Data",
    description: "From Python + maths to building ML models and deploying them.",
    steps: [
      {
        title: "Programming",
        icon: "Code",
        items: ["Python", "Numpy, Pandas", "Matplotlib/Seaborn"],
        youtube: [
          { label: "Corey Schafer (playlists)", url: "https://www.youtube.com/c/Coreyms/playlists" },
          {
            label: "Python + Pandas/Numpy (search)",
            url: "https://www.youtube.com/results?search_query=python+pandas+numpy+beginner",
          },
          { label: "Matplotlib/Seaborn (search)", url: "https://www.youtube.com/results?search_query=matplotlib+seaborn+tutorial" },
        ],
      },
      {
        title: "Math",
        icon: "Sigma",
        items: ["Linear algebra basics", "Statistics & probability", "Calculus basics"],
        youtube: [
          { label: "Linear algebra", url: "https://www.youtube.com/results?search_query=linear+algebra+for+machine+learning" },
          { label: "Statistics basics", url: "https://www.youtube.com/results?search_query=statistics+probability+for+machine+learning" },
        ],
      },
      {
        title: "ML Fundamentals",
        icon: "Brain",
        items: ["Regression", "Classification", "Model evaluation", "Feature engineering"],
        youtube: [
          {
            label: "StatQuest: Machine Learning (playlist)",
            url: "https://www.youtube.com/playlist?list=PLng25Lwn1Xd11NzZFwn8ZyLr-cwWvZi59",
          },
          { label: "ML basics (search)", url: "https://www.youtube.com/results?search_query=machine+learning+basics+regression+classification" },
          { label: "Feature engineering", url: "https://www.youtube.com/results?search_query=feature+engineering+tutorial" },
        ],
      },
      {
        title: "Deep Learning",
        icon: "Network",
        items: ["Neural nets basics", "CNN/RNN basics", "Transformers overview"],
        youtube: [
          { label: "Neural networks", url: "https://www.youtube.com/results?search_query=neural+networks+basics" },
          { label: "Transformers", url: "https://www.youtube.com/results?search_query=transformers+explained+nlp" },
        ],
      },
      {
        title: "Projects",
        icon: "FolderKanban",
        items: ["2–3 ML projects", "Kaggle notebook portfolio", "End-to-end ML pipeline"],
        youtube: [
          { label: "Kaggle projects", url: "https://www.youtube.com/results?search_query=kaggle+project+walkthrough" },
          { label: "End-to-end ML", url: "https://www.youtube.com/results?search_query=end+to+end+machine+learning+project" },
        ],
      },
      {
        title: "Deployment",
        icon: "Rocket",
        items: ["APIs for models", "Model monitoring basics", "Cloud basics"],
        youtube: [
          { label: "Deploy ML model", url: "https://www.youtube.com/results?search_query=deploy+machine+learning+model+fastapi" },
          { label: "MLOps basics", url: "https://www.youtube.com/results?search_query=mlops+basics" },
        ],
      },
    ],
    practiceLinks: [
      { label: "Kaggle", url: "https://www.kaggle.com/" },
      { label: "arXiv cs.LG", url: "https://arxiv.org/list/cs.LG/recent" },
    ],
  },
  {
    id: "c-language",
    title: "C Language Roadmap",
    domain: "Core Programming",
    description: "Strong foundation for programming, embedded, and systems.",
    steps: [
      {
        title: "Basics",
        icon: "Terminal",
        items: ["Syntax", "Loops", "Functions", "Arrays & Strings"],
        youtube: [
          { label: "Neso Academy (playlists)", url: "https://www.youtube.com/c/nesoacademy/playlists" },
          { label: "C basics (search)", url: "https://www.youtube.com/results?search_query=c+programming+basics+for+beginners" },
        ],
      },
      {
        title: "Memory",
        icon: "MemoryStick",
        items: ["Pointers", "Dynamic memory (malloc/free)", "Structs"],
        youtube: [
          { label: "Pointers explained", url: "https://www.youtube.com/results?search_query=c+pointers+explained" },
        ],
      },
      {
        title: "File & OS",
        icon: "HardDrive",
        items: ["File I/O", "Command line", "Compilation (gcc)"],
        youtube: [
          { label: "File I/O in C", url: "https://www.youtube.com/results?search_query=file+handling+in+c" },
        ],
      },
      {
        title: "Problem solving",
        icon: "Puzzle",
        items: ["DSA basics in C", "Practice 100 problems"],
        youtube: [
          { label: "DSA in C", url: "https://www.youtube.com/results?search_query=data+structures+in+c" },
        ],
      },
    ],
  },
  {
    id: "python",
    title: "Python Roadmap",
    domain: "Core Programming",
    description: "Python for development, data, and automation.",
    steps: [
      {
        title: "Core",
        icon: "Code",
        items: ["Syntax", "Data structures", "OOP basics", "Modules"],
        youtube: [
          {
            label: "Corey Schafer: Intermediate Python (playlist)",
            url: "https://www.youtube.com/playlist?list=PLaL2yxczKLcDWDRB0ZrxsuKlupJU0Njje",
          },
          { label: "Python core (search)", url: "https://www.youtube.com/results?search_query=python+core+concepts+beginner" },
        ],
      },
      {
        title: "Tools",
        icon: "Wrench",
        items: ["Virtual env", "pip", "Testing basics"],
        youtube: [{ label: "venv + pip", url: "https://www.youtube.com/results?search_query=python+venv+pip+tutorial" }],
      },
      {
        title: "Tracks",
        icon: "Route",
        items: ["Web (Django/Flask)", "Data (Pandas)", "Automation (Scripting)"],
        youtube: [{ label: "Choose a track", url: "https://www.youtube.com/results?search_query=python+django+flask+pandas+roadmap" }],
      },
      {
        title: "Projects",
        icon: "FolderKanban",
        items: ["Automation script", "API project", "Mini data project"],
        youtube: [{ label: "Python projects", url: "https://www.youtube.com/results?search_query=python+project+ideas+beginner" }],
      },
    ],
  },
  {
    id: "java",
    title: "Java Roadmap",
    domain: "Core Programming",
    description: "Java for backend, enterprise, and DSA interview prep.",
    steps: [
      {
        title: "Core Java",
        icon: "Coffee",
        items: ["OOP", "Collections", "Exception handling", "Generics"],
        youtube: [
          { label: "Telusko (playlists)", url: "https://www.youtube.com/@Telusko/playlists" },
          { label: "Core Java (search)", url: "https://www.youtube.com/results?search_query=core+java+oop+collections" },
        ],
      },
      {
        title: "DSA",
        icon: "Puzzle",
        items: ["Arrays/Strings", "Stacks/Queues", "Trees/Graphs", "DP basics"],
        youtube: [{ label: "DSA in Java", url: "https://www.youtube.com/results?search_query=dsa+in+java+complete+course" }],
      },
      {
        title: "Backend",
        icon: "Server",
        items: ["Spring Boot basics", "REST APIs", "JPA/ORM basics"],
        youtube: [{ label: "Spring Boot", url: "https://www.youtube.com/results?search_query=spring+boot+rest+api+tutorial" }],
      },
      {
        title: "Projects",
        icon: "FolderKanban",
        items: ["REST API", "Auth + DB project", "Mini microservice (optional)"],
        youtube: [{ label: "Java backend projects", url: "https://www.youtube.com/results?search_query=java+spring+boot+project" }],
      },
    ],
  },
  {
    id: "mechanical-core",
    title: "Mechanical Engineering Roadmap (Core)",
    domain: "Mechanical",
    description: "Skills roadmap for mechanical core jobs + internships.",
    steps: [
      {
        title: "Core subjects",
        icon: "BookOpen",
        items: ["Thermodynamics", "Strength of materials", "Manufacturing", "Fluid mechanics"],
        youtube: [
          {
            label: "NPTEL Thermodynamics (playlist)",
            url: "https://www.youtube.com/playlist?list=PLig8lVIZAZbK10NScy1hvY2tRC6UznW_N",
          },
          { label: "Mechanical core subjects (search)", url: "https://www.youtube.com/results?search_query=mechanical+engineering+core+subjects" },
        ],
      },
      {
        title: "Design",
        icon: "PenTool",
        items: ["Engineering drawing", "CAD (SolidWorks/AutoCAD)", "GD&T basics"],
        youtube: [{ label: "CAD basics", url: "https://www.youtube.com/results?search_query=solidworks+basics+tutorial" }],
      },
      {
        title: "Production",
        icon: "Factory",
        items: ["QC basics", "Lean basics", "Safety", "Excel"],
        youtube: [{ label: "Lean + QC basics", url: "https://www.youtube.com/results?search_query=lean+manufacturing+quality+control+basics" }],
      },
      {
        title: "Projects",
        icon: "FolderKanban",
        items: ["CAD portfolio", "Mini manufacturing project", "Internship + report"],
        youtube: [{ label: "Mechanical project ideas", url: "https://www.youtube.com/results?search_query=mechanical+engineering+project+ideas" }],
      },
    ],
  },
  {
    id: "ece-embedded",
    title: "Embedded / IoT Roadmap",
    domain: "Electronics",
    description: "For ECE students targeting embedded/IoT internships and roles.",
    steps: [
      {
        title: "Programming",
        icon: "Code",
        items: ["C/C++ basics", "Data structures basics", "Debugging"],
        youtube: [{ label: "Embedded C basics", url: "https://www.youtube.com/results?search_query=embedded+c+programming+basics" }],
      },
      {
        title: "Electronics",
        icon: "Cpu",
        items: ["Digital basics", "Microcontrollers", "Sensors", "UART/I2C/SPI"],
        youtube: [{ label: "Microcontrollers basics", url: "https://www.youtube.com/results?search_query=microcontroller+basics+uart+i2c+spi" }],
      },
      {
        title: "Projects",
        icon: "FolderKanban",
        items: ["2 MCU projects", "IoT demo", "GitHub portfolio"],
        youtube: [{ label: "IoT projects", url: "https://www.youtube.com/results?search_query=iot+projects+using+arduino+esp32" }],
      },
    ],
  },
  {
    id: "business-analytics",
    title: "Business Analytics Roadmap",
    domain: "Commerce & Management",
    description: "For commerce/management students aiming at analyst roles.",
    steps: [
      {
        title: "Basics",
        icon: "BarChart3",
        items: ["Excel (advanced)", "PowerPoint", "Business communication"],
        youtube: [{ label: "Advanced Excel", url: "https://www.youtube.com/results?search_query=advanced+excel+for+business+analytics" }],
      },
      {
        title: "Analytics",
        icon: "Database",
        items: ["SQL basics", "Power BI/Tableau basics", "KPIs & metrics"],
        youtube: [{ label: "Power BI basics", url: "https://www.youtube.com/results?search_query=power+bi+tutorial+beginner" }],
      },
      {
        title: "Projects",
        icon: "FolderKanban",
        items: ["Dashboard project", "Case study portfolio", "Internship experience"],
        youtube: [{ label: "Dashboard projects", url: "https://www.youtube.com/results?search_query=business+analytics+dashboard+project" }],
      },
    ],
  },
]

