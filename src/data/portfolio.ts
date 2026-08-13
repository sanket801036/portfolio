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
  github: "https://github.com/sanket801036",
  linkedin: "https://www.linkedin.com/in/sanket-kolhe",
  summary:
    "Python Full-Stack & AI Developer with 3 years of experience designing scalable web applications, AI-powered systems and automation solutions using Django, Flask, FastAPI, React and MySQL. Hands-on with RAG, Computer Vision, OCR, Web Scraping and Generative AI — shipping production-ready software with Docker, Kubernetes, Jenkins, AWS and CI/CD pipelines.",
};

export const stats = [
  { label: "Years of Experience", value: "3" },
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
      "Groq API",
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
      "AstraDB",
      "Elasticsearch",
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
      "CircleCI",
      "GitHub Actions",
      "AWS (ECS Fargate / ECR / App Runner)",
      "Nginx / Gunicorn",
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
      "Prometheus / Grafana",
      "ELK Stack (Logstash, Kibana)",
      "Selenium / Playwright",
      "BeautifulSoup",
      "Undetected-Chromedriver",
      "Proxy / VPN Rotation",
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
      "Designed an enterprise e-commerce scraping portal where users upload Excel (XLSX) sheets of target URLs to autonomously scrape 10,000+ daily product records across Amazon, Flipkart and Myntra — eliminating reliance on costly third-party credit-based APIs.",
      "Built fault-tolerant anti-bot scraping pipelines using mobile SIM network routing, VPN switching, randomized human-like click delays, Chrome profiles and cookie serialization (.pkl) to bypass CAPTCHAs and prevent IP bans.",
      "Extracted 10+ critical attributes per product — multi-seller pricing, Buybox competition, Amazon BSR and star-rating distributions — powering competitive inventory pricing strategies.",
      "Designed an AI-powered Image RAG system for cloth similarity search using computer-vision embeddings, FAISS/Pinecone and Flask APIs.",
      "Developed Fabric Dispatch mobile app with React Native (Expo) + REST APIs and a Flask backend for real-time dispatch verification.",
      "Built the Sutton full-stack production website with React, Flask and MySQL — secure authentication and role-based access.",
    ],
    tags: ["React", "Flask", "MySQL", "Selenium", "React Native", "Vector DB", "Computer Vision"],
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
    link: "https://github.com/sanket801036",
    featured: true,
    gradient: "from-accent-pink via-accent-violet to-accent-cyan",
  },
  {
    title: "Multi-AI Agent System",
    description:
      "Enterprise-grade multi-agent AI platform built with FastAPI, LangChain and LangGraph — containerized with Docker, deployed on AWS ECS via Jenkins CI/CD with SonarQube code-quality gates.",
    tags: ["FastAPI", "LangChain", "LangGraph", "Docker", "Jenkins", "AWS ECS"],
    link: "https://github.com/sanket801036",
    featured: true,
    gradient: "from-accent-violet via-accent-pink to-accent-cyan",
  },
  {
    title: "RAG Chatbot — Production",
    description:
      "Enterprise RAG chatbot serving 100+ users with 99.9% uptime. Dockerized Flask APIs, Trivy-scanned images, AWS App Runner deployment.",
    tags: ["RAG", "Flask", "Docker", "AWS"],
    link: "https://github.com/sanket801036",
    featured: true,
    gradient: "from-accent-cyan via-accent-violet to-accent-pink",
  },
  {
    title: "AI Smart Lock + Face Recognition",
    description:
      "Real-time smart lock built with YOLOv8 for detection and InsightFace for recognition. Automated face-based access and user tracking.",
    tags: ["YOLOv8", "InsightFace", "Computer Vision"],
    link: "https://github.com/sanket801036",
    featured: false,
    gradient: "from-accent-lime via-accent-cyan to-accent-violet",
  },
  {
    title: "OCR Menu Extraction API",
    description:
      "PaddleOCR + fine-tuned LayoutLMv3 pipeline that extracts structured menu data from restaurant images at 95%+ accuracy.",
    tags: ["PaddleOCR", "LayoutLMv3", "FastAPI"],
    link: "https://github.com/sanket801036",
    featured: false,
    gradient: "from-accent-pink via-accent-violet to-accent-cyan",
  },
  {
    title: "Image-RAG Cloth Similarity Search",
    description:
      "Image-based Retrieval-Augmented Generation using CV embeddings + vector DB for fast visual product matching in fashion e-commerce.",
    tags: ["Vector DB", "Embeddings", "RAG"],
    link: "https://github.com/sanket801036",
    featured: false,
    gradient: "from-accent-violet via-accent-cyan to-accent-lime",
  },
  {
    title: "Fabric Dispatch Mobile App",
    description:
      "React Native (Expo Go) mobile app for fabric dispatch & verification. Integrated REST APIs, improved dispatch visibility for internal ops.",
    tags: ["React Native", "Expo", "REST API"],
    link: "https://github.com/sanket801036",
    featured: false,
    gradient: "from-accent-cyan via-accent-pink to-accent-violet",
  },
  {
    title: "Flipkart Product Recommendation System",
    description:
      "Scalable e-commerce recommendation engine using AstraDB for vector storage and semantic retrieval — deployed on Kubernetes with Prometheus and Grafana monitoring.",
    tags: ["Python", "Kubernetes", "AstraDB", "Prometheus", "Grafana"],
    link: "https://github.com/sanket801036",
    featured: false,
    gradient: "from-accent-lime via-accent-violet to-accent-pink",
  },
  {
    title: "Celebrity Detector & QA System",
    description:
      "Computer Vision + LLM-powered celebrity question-answering system using OpenCV and Groq Llama 4 models — automated deployment with Kubernetes and CircleCI.",
    tags: ["OpenCV", "Flask", "Groq API", "Llama 4", "Kubernetes", "CircleCI"],
    link: "https://github.com/sanket801036",
    featured: false,
    gradient: "from-accent-pink via-accent-cyan to-accent-lime",
  },
  {
    title: "AI Travel Planner",
    description:
      "AI-based travel planning application with centralized logging via the ELK Stack (Elasticsearch, Logstash, Kibana) — cloud-native services deployed on Kubernetes.",
    tags: ["Python", "Kubernetes", "Elasticsearch", "ELK Stack"],
    link: "https://github.com/sanket801036",
    featured: false,
    gradient: "from-accent-violet via-accent-lime to-accent-cyan",
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Dr. Vithalrao Vikhe Patil Foundation's IBMRD",
    university: "Pune University | CGPA 7.04/10",
    year: "2025",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Institute of Management Studies Mahavidyalaya, Warud",
    university: "77.32% (CGPA 7.73/10)",
    year: "2022",
  },
];
