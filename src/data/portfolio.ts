export const profile = {
  name: "Sanket Kolhe",
  title: "Python Full-Stack & AI Engineer",
  location: "Surat, Gujarat, India",
  email: "sanketkolhe801036@gmail.com",
  phone: "+91 8010364260",
  github: "https://github.com/sanket801036",
  linkedin: "https://www.linkedin.com/in/sanket-kolhe",
  // Drop a resume.pdf into public/ and set this to "resume.pdf" to show the resume link.
  resumeUrl: "",
  lead:
    "I build RAG systems, computer-vision pipelines and the infrastructure that keeps them running in production.",
  summary:
    "Python Full-Stack & AI Developer with 3 years of experience designing scalable web applications, AI-powered systems and automation solutions. I work across Django, Flask, FastAPI, React and MySQL — and ship them with Docker, Kubernetes, Jenkins, AWS and CI/CD pipelines. Day to day that means retrieval-augmented generation, OCR, face recognition, large-scale web scraping and vector search.",
};

// Short "what I'm on right now" strip under the hero. Keep this current —
// bump `updated` whenever you edit it, and drop the section if it goes stale.
export const now = {
  updated: "August 2026",
  items: [
    {
      text: "Triaging bugs in docling, IBM's open-source document-parsing library.",
      href: "https://github.com/docling-project/docling",
    },
    {
      text: "Building Image-RAG cloth similarity search and scraping infrastructure at Leemboodi.",
    },
  ],
};

export const openSource = [
  {
    project: "docling",
    org: "docling-project · IBM",
    scale: "64k+ stars",
    date: "August 2026",
    title: "Root-caused issue #2476 — VLM pipeline MD/HTML conversion",
    description:
      "A ValueError reported against v2.57.0 had sat unreproduced for ten months. I showed the traceback could not have come from that version: the failing line number maps to code deleted by PR #2458, so the reporting environment was running a stale module in a long-lived uvicorn process. To rule out a real defect I also drove MarkdownDocumentBackend and DoclingDocument.concatenate over nine markdown shapes a VLM plausibly emits — nested lists, tables, mixed pages, inline images, code blocks — on both the reported stack and current main. Nothing reproduced. A maintainer closed the issue on that analysis.",
    link: "https://github.com/docling-project/docling/issues/2476#issuecomment-5288696027",
    tags: ["Python", "Root-cause analysis", "Issue triage"],
  },
];

export const stats = [
  { value: "3", label: "Years building production software" },
  { value: "10k+", label: "Product records scraped daily" },
  { value: "95%+", label: "OCR extraction accuracy" },
  { value: "99.9%", label: "RAG chatbot uptime" },
];

export const focusAreas = [
  {
    title: "Retrieval & agents",
    body: "RAG pipelines over enterprise documents and images — LangChain, LangGraph, FAISS and Pinecone behind Flask and FastAPI services.",
  },
  {
    title: "Computer vision & OCR",
    body: "Face recognition with YOLOv8 and InsightFace, document understanding with PaddleOCR and fine-tuned LayoutLMv3.",
  },
  {
    title: "Resilient automation",
    body: "Selenium scraping pipelines that survive anti-bot defences — proxy rotation, session persistence and human-like pacing.",
  },
  {
    title: "Ship and keep it up",
    body: "Docker images scanned with Trivy, Jenkins and CircleCI pipelines, Kubernetes and AWS ECS/App Runner, watched by Prometheus, Grafana and the ELK stack.",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "Backend",
    skills: ["Django", "Django REST Framework", "Flask", "FastAPI", "REST APIs", "Streamlit"],
  },
  {
    label: "Frontend",
    skills: ["React", "Angular", "React Native (Expo)", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    label: "AI, NLP & Vision",
    skills: [
      "LangChain",
      "LangGraph",
      "RAG",
      "Hugging Face",
      "Llama 2",
      "Groq API",
      "PaddleOCR",
      "LayoutLMv3",
      "YOLOv8",
      "InsightFace",
      "OpenCV",
      "Pandas",
      "NumPy",
    ],
  },
  {
    label: "Scraping & Automation",
    skills: [
      "Selenium",
      "BeautifulSoup",
      "Requests",
      "OpenPyXL",
      "Undetected-Chromedriver",
      "Proxy / VPN rotation",
      "Session persistence (.pkl)",
    ],
  },
  {
    label: "Data & Vector Stores",
    skills: ["MySQL", "PostgreSQL", "Redis", "FAISS", "Pinecone", "AstraDB", "Elasticsearch"],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "CircleCI",
      "CI/CD",
      "Linux",
      "Nginx",
      "Gunicorn",
      "AWS ECS",
      "AWS ECR",
      "AWS App Runner",
      "AWS IAM",
      "Application Load Balancer",
    ],
  },
  {
    label: "Tooling & Observability",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "SonarQube",
      "Trivy",
      "Prometheus",
      "Grafana",
      "ELK Stack",
    ],
  },
];

export const experiences = [
  {
    company: "Leemboodi",
    location: "Surat",
    role: "Python Full-Stack / AI Developer",
    period: "Nov 2025 — Present",
    current: true,
    bullets: [
      "Designed an enterprise e-commerce scraping portal where users upload XLSX sheets of target URLs to autonomously scrape 10,000+ daily product records across Amazon, Flipkart and Myntra — removing the dependency on costly credit-based third-party APIs.",
      "Built fault-tolerant anti-bot pipelines using mobile SIM network routing, VPN switching, randomised human-like delays, Chrome profiles and pickled cookie sessions to get past CAPTCHAs and avoid IP bans.",
      "Extracted 10+ attributes per product — multi-seller pricing, Buybox competition, Amazon BSR and star-rating distributions — feeding inventory pricing strategy.",
      "Developed an Image-RAG system for cloth similarity search using computer-vision embeddings, FAISS/Pinecone and Flask APIs.",
      "Shipped a Fabric Dispatch mobile app in React Native (Expo) backed by Flask REST APIs for real-time dispatch verification.",
      "Built the Sutton production website on React, Flask and MySQL with secure authentication and role-based access.",
      "Architected Shooting Software, a studio workflow platform covering Warehouse Challan, Sourcing, Mood Board, Studio Dispatch, QC, Editing and Launch with SKU/barcode tracking, SLA alerts and PMS/ERP auto-upload.",
    ],
    tags: ["React", "Flask", "MySQL", "Selenium", "React Native", "FAISS", "Computer Vision"],
  },
  {
    company: "XRDA3 Technologies Pvt. Ltd.",
    location: "Pune",
    role: "Python Full-Stack Developer",
    period: "Sep 2023 — Nov 2025",
    current: false,
    bullets: [
      "Developed a production-grade RAG chatbot on Flask, LangChain, FAISS and Docker, deployed to AWS App Runner — cutting response latency for enterprise document search.",
      "Designed a real-time face recognition system with YOLOv8 and InsightFace for automated authentication, attendance and user tracking.",
      "Built OCR menu-extraction APIs with PaddleOCR and a fine-tuned LayoutLMv3, reaching 95%+ accuracy across multilingual restaurant menus.",
      "Created scalable Selenium scraping pipelines that collected 2,000+ structured restaurant records with automated scheduling and validation.",
    ],
    tags: ["Python", "Flask", "LangChain", "Docker", "Jenkins", "AWS"],
  },
];

export const projects = [
  {
    title: "Multi-AI Agent System",
    year: "2025",
    description:
      "Enterprise multi-agent platform built on FastAPI, LangChain and LangGraph. Containerised with Docker and deployed to AWS ECS through a Jenkins pipeline gated by SonarQube code-quality checks.",
    tags: ["FastAPI", "LangChain", "LangGraph", "Docker", "Jenkins", "AWS ECS", "SonarQube"],
    link: "https://github.com/sanket801036",
    featured: true,
  },
  {
    title: "Enterprise Scraping Portal",
    year: "2026",
    description:
      "In-house platform where teams upload XLSX sheets of target URLs and get back 10,000+ structured product records a day from Amazon, Flipkart and Myntra — multi-seller pricing, Buybox state, BSR and rating distributions.",
    tags: ["Selenium", "BeautifulSoup", "Flask", "MySQL", "openpyxl", "Anti-bot"],
    link: "https://github.com/sanket801036",
    featured: true,
  },
  {
    title: "Production RAG Chatbot",
    year: "2024",
    description:
      "Retrieval-augmented chatbot for enterprise document search. Dockerised Flask APIs with FAISS retrieval and Trivy-scanned images, running on AWS App Runner at 99.9% uptime.",
    tags: ["RAG", "LangChain", "FAISS", "Flask", "Docker", "AWS App Runner"],
    link: "https://github.com/sanket801036",
    featured: true,
  },
  {
    title: "Smart Lock & Face Recognition",
    year: "2024",
    description:
      "Real-time authentication and attendance system using YOLOv8 for detection and InsightFace for recognition.",
    tags: ["YOLOv8", "InsightFace", "OpenCV"],
    link: "https://github.com/sanket801036",
    featured: false,
  },
  {
    title: "OCR Menu Extraction API",
    year: "2024",
    description:
      "PaddleOCR and fine-tuned LayoutLMv3 pipeline that turns multilingual menu images into structured data at 95%+ accuracy.",
    tags: ["PaddleOCR", "LayoutLMv3", "Flask"],
    link: "https://github.com/sanket801036",
    featured: false,
  },
  {
    title: "Image-RAG Cloth Similarity Search",
    year: "2026",
    description:
      "Visual retrieval for fashion catalogues — CV embeddings indexed in FAISS/Pinecone and served through Flask APIs.",
    tags: ["Computer Vision", "FAISS", "Pinecone", "Flask"],
    link: "https://github.com/sanket801036",
    featured: false,
  },
  {
    title: "Fabric Dispatch Mobile App",
    year: "2026",
    description:
      "React Native (Expo) app for real-time fabric dispatch verification, backed by a Flask REST API.",
    tags: ["React Native", "Expo", "REST API", "Flask"],
    link: "https://github.com/sanket801036",
    featured: false,
  },
  {
    title: "Flipkart Recommendation System",
    year: "2025",
    description:
      "Semantic product recommendation engine using AstraDB vector storage, deployed on Kubernetes with Prometheus and Grafana monitoring.",
    tags: ["Python", "AstraDB", "Kubernetes", "Prometheus", "Grafana"],
    link: "https://github.com/sanket801036",
    featured: false,
  },
  {
    title: "Celebrity Detector & QA",
    year: "2025",
    description:
      "Vision plus LLM question-answering system pairing OpenCV detection with Groq-hosted Llama models, deployed via CircleCI to Kubernetes.",
    tags: ["OpenCV", "Groq API", "Flask", "Kubernetes", "CircleCI"],
    link: "https://github.com/sanket801036",
    featured: false,
  },
  {
    title: "AI Travel Planner",
    year: "2025",
    description:
      "Cloud-native travel planning app on Kubernetes with centralised logging through Elasticsearch, Logstash and Kibana.",
    tags: ["Python", "Kubernetes", "Elasticsearch", "Logstash", "Kibana"],
    link: "https://github.com/sanket801036",
    featured: false,
  },
];

export const education = [
  {
    degree: "Master of Computer Applications",
    school: "Dr. Vithalrao Vikhe Patil Foundation's IBMRD, Pune University",
    detail: "CGPA 7.04 / 10",
    year: "2025",
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "Institute of Management Studies Mahavidyalaya, Warud",
    detail: "77.32% — CGPA 7.73 / 10",
    year: "2022",
  },
];

export const certifications = [
  {
    title: "LLMOps & AIOps Bootcamp — 8 End-to-End Projects",
    issuer: "Udemy · KRISHAI Technologies",
    detail:
      "Production deployment of AI systems with Kubernetes, Docker, Jenkins CI/CD, the ELK stack, Prometheus/Grafana and LangChain/LangGraph.",
    year: "2025",
  },
  {
    title: "AI Python Programming Industrial Training (200 hrs)",
    issuer: "NSDC Skill India · I D Tech Solutions",
    detail:
      "Graded 'A' for practical industrial training in advanced Python, machine learning and AI application development.",
    year: "2024",
  },
];
