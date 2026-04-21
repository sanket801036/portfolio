export const profile = {
  name: "Sanket Kolhe",
  title: "Python Full-Stack & AI Engineer",
  roles: [
    "AI Agent Engineer",
    "Python Full-Stack Developer",
    "LangGraph & RAG Architect",
    "MCP Server Builder",
    "DevOps & Cloud Enthusiast",
  ],
  location: "Surat, Gujarat, India",
  email: "sanketkolhe801036@gmail.com",
  phone: "+91 8010364260",
  github: "https://github.com/Sanket-Kolhe",
  linkedin: "https://www.linkedin.com/in/sanket-kolhe",
  summary:
    "Full-Stack Developer with 2.5+ years of experience building scalable web and AI-driven applications using React, Django, Flask and MySQL. Skilled in CI/CD, Docker, Jenkins and AWS with hands-on integration of AI/NLP features for intelligent automation.",
};

export const stats = [
  { label: "Years of Experience", value: "2.5+" },
  { label: "AI Projects Shipped", value: "8+" },
  { label: "RAG Chatbot Uptime", value: "99.9%" },
  { label: "OCR Accuracy", value: "95%+" },
];

export const skillGroups = [
  {
    title: "AI Agents & LLMs (2026)",
    color: "from-accent-violet to-accent-pink",
    skills: [
      "Claude 4.x (Sonnet / Opus)",
      "GPT-5",
      "Gemini 2.5",
      "LangGraph",
      "LangChain",
      "AutoGen (Microsoft)",
      "DSPy",
      "MCP (Model Context Protocol)",
      "Anthropic Agent SDK",
      "OpenAI Agents SDK",
      "Ollama / Local LLMs",
      "LangSmith",
    ],
  },
  {
    title: "AI / ML & Vision",
    color: "from-accent-pink to-accent-violet",
    skills: [
      "RAG Pipelines",
      "Hugging Face Transformers",
      "Llama 4",
      "YOLOv8",
      "PaddleOCR",
      "InsightFace",
      "LayoutLMv3",
      "Whisper / Deepgram (Voice AI)",
      "Multimodal Models",
    ],
  },
  {
    title: "Frontend (2026 Stack)",
    color: "from-accent-cyan to-accent-violet",
    skills: [
      "React 19",
      "Next.js 15 (App Router)",
      "TypeScript 5",
      "Tailwind CSS 4",
      "React Server Components",
      "React Native (Expo)",
      "Angular",
    ],
  },
  {
    title: "Backend & APIs",
    color: "from-accent-lime to-accent-cyan",
    skills: [
      "Python",
      "FastAPI",
      "Django / DRF",
      "Flask",
      "REST APIs",
      "Streamlit",
    ],
  },
  {
    title: "Databases & Vector Stores",
    color: "from-accent-cyan to-accent-lime",
    skills: [
      "PostgreSQL + pgvector",
      "MySQL",
      "Redis",
      "Pinecone",
      "FAISS",
      "Supabase",
    ],
  },
  {
    title: "DevOps & Cloud",
    color: "from-accent-pink to-accent-violet",
    skills: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "AWS (ECS Fargate / ECR / App Runner)",
      "Cloudflare Workers",
      "Vercel",
      "Fly.io",
      "CI/CD Pipelines",
    ],
  },
  {
    title: "Tools & Security",
    color: "from-accent-violet to-accent-cyan",
    skills: [
      "SonarQube",
      "Trivy",
      "Grafana Cloud",
      "Selenium / Playwright",
      "AWS IAM",
      "Load Balancers",
      "OAuth 2.1 / JWT",
    ],
  },
];

export const experiences = [
  {
    company: "Leemboodi Fashion",
    location: "Surat",
    role: "Python Full-Stack / AI Developer",
    period: "Nov 2025 — Present",
    current: true,
    bullets: [
      "Architected and built Shooting Software — an enterprise studio workflow platform covering Warehouse Challan, Sourcing, Mood Board, Studio Dispatch, QC, Editing and Launch with SKU/barcode tracking, SLA alerts and PMS/ERP auto-upload.",
      "Designed an AI-powered image-based RAG system for cloth similarity search using computer-vision embeddings and vector databases.",
      "Developed Fabric Dispatch mobile app with React Native (Expo Go) + REST APIs — improved dispatch visibility and internal ops.",
      "Built the Sutton full-stack production website with React (frontend) and Flask (backend) — secure APIs, role-based access, optimized DB.",
      "Implemented large-scale e-commerce scraping pipelines for Amazon, Flipkart and Myntra with anti-block handling and structured storage.",
    ],
    tags: ["React", "Flask", "MySQL", "React Native", "Vector DB", "Computer Vision"],
  },
  {
    company: "XRDA3 Technologies Pvt. Ltd.",
    location: "Pune",
    role: "Python Full-Stack Developer",
    period: "Sep 2023 — Nov 2025",
    current: false,
    bullets: [
      "Built a scalable RAG-based AI chatbot with Dockerized Flask APIs, Jenkins CI/CD and Trivy — deployed on AWS App Runner with 99.9% uptime for 100+ users.",
      "Shipped an AI-powered Smart Lock & Face Recognition system using YOLOv8 and InsightFace for real-time face detection and user tracking.",
      "Created an OCR Menu Extraction API using PaddleOCR and fine-tuned LayoutLMv3 with 95%+ accuracy.",
      "Automated collection of 2000+ restaurant records via Selenium-based web scraping.",
    ],
    tags: ["Python", "Flask", "Docker", "Jenkins", "AWS", "LangChain"],
  },
];

export const projects = [
  {
    title: "Shooting Software — Leemboodi Fashion",
    description:
      "Enterprise studio-workflow system managing end-to-end product photo/video pipeline — Warehouse Challan, Sourcing, Mood Board, Studio Dispatch, QC, Editing and Launch. SKU/barcode-based tracking across departments, batch-wise mood boards, SLA alerts, pending dashboards, PMS/ERP auto-upload, role-based access and mobile QC entry for 1000+ SKUs/month.",
    tags: ["React", "Flask", "MySQL", "Barcode/SKU", "SLA Workflow", "ERP Integration"],
    link: "https://github.com/Sanket-Kolhe",
    featured: true,
    gradient: "from-accent-pink via-accent-violet to-accent-cyan",
  },
  {
    title: "Multi-AI Agent System",
    description:
      "Orchestrated multi-agent system using LangChain for autonomous task completion — containerized with Docker, CI/CD via Jenkins, deployed on AWS Fargate.",
    tags: ["LangChain", "Docker", "Jenkins", "AWS Fargate"],
    link: "https://github.com/Sanket-Kolhe",
    featured: true,
    gradient: "from-accent-violet via-accent-pink to-accent-cyan",
  },
  {
    title: "RAG Chatbot — Production",
    description:
      "Enterprise RAG chatbot serving 100+ users with 99.9% uptime. Dockerized Flask APIs, Trivy-scanned images, AWS App Runner deployment.",
    tags: ["RAG", "Flask", "Docker", "AWS"],
    link: "https://github.com/Sanket-Kolhe",
    featured: true,
    gradient: "from-accent-cyan via-accent-violet to-accent-pink",
  },
  {
    title: "AI Smart Lock + Face Recognition",
    description:
      "Real-time smart lock built with YOLOv8 for detection and InsightFace for recognition. Automated face-based access and user tracking.",
    tags: ["YOLOv8", "InsightFace", "Computer Vision"],
    link: "https://github.com/Sanket-Kolhe",
    featured: false,
    gradient: "from-accent-lime via-accent-cyan to-accent-violet",
  },
  {
    title: "OCR Menu Extraction API",
    description:
      "PaddleOCR + fine-tuned LayoutLMv3 pipeline that extracts structured menu data from restaurant images at 95%+ accuracy.",
    tags: ["PaddleOCR", "LayoutLMv3", "FastAPI"],
    link: "https://github.com/Sanket-Kolhe",
    featured: false,
    gradient: "from-accent-pink via-accent-violet to-accent-cyan",
  },
  {
    title: "Image-RAG Cloth Similarity Search",
    description:
      "Image-based Retrieval-Augmented Generation using CV embeddings + vector DB for fast visual product matching in fashion e-commerce.",
    tags: ["Vector DB", "Embeddings", "RAG"],
    link: "https://github.com/Sanket-Kolhe",
    featured: false,
    gradient: "from-accent-violet via-accent-cyan to-accent-lime",
  },
  {
    title: "Fabric Dispatch Mobile App",
    description:
      "React Native (Expo Go) mobile app for fabric dispatch & verification. Integrated REST APIs, improved dispatch visibility for internal ops.",
    tags: ["React Native", "Expo", "REST API"],
    link: "https://github.com/Sanket-Kolhe",
    featured: false,
    gradient: "from-accent-cyan via-accent-pink to-accent-violet",
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Dr. Vithalrao Vikhe Patil Foundation's IBMRD",
    university: "Pune University",
    year: "2025",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Institute of Management Studies Mahavidyalaya, Warud",
    university: "77.32% (CGPA 7.73/10)",
    year: "2022",
  },
];
