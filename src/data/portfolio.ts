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
      text: "Contributing parser and generator fixes to sqlglot, the SQL parser and transpiler.",
      href: "https://github.com/tobymao/sqlglot/pulls?q=author%3Asanket801036",
    },
    {
      text: "Building Image-RAG cloth similarity search and scraping infrastructure at Leemboodi.",
    },
  ],
};

// Open-source contributions. `caseStudy` is optional — when a card has one it grows a
// "More information" button that expands into the full write-up. Every claim in here should
// be checkable against the linked thread; an interviewer will click through.
export type OpenSourceEntry = {
  project: string;
  org: string;
  scale: string;
  date: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
  status?: { label: string; tone: "merged" | "open" | "closed" };
  caseStudy?: {
    stack: string[];
    sections: { heading: string; body: string; code?: string }[];
    links: { label: string; href: string }[];
  };
};

export const openSource: OpenSourceEntry[] = [
  {
    project: "sqlglot",
    org: "tobymao · SQL parser & transpiler",
    scale: "9.5k+ stars",
    date: "August 2026",
    title: "Merged PR #8185 — ClickHouse VALUES rewrite was not idempotent",
    description:
      "Transpiling ClickHouse SQL and re-parsing the result added a layer of parentheses on every pass, so any pipeline that round-trips SQL corrupted its own output. I found it with a harness that asserts f(f(x)) == f(x), traced it to a type check that missed one node shape, and fixed it in a single line. Merged by the maintainer in about a day.",
    link: "https://github.com/tobymao/sqlglot/pull/8185",
    tags: ["Python", "Parsers & compilers", "SQL", "Property-based testing"],
    status: { label: "Merged", tone: "merged" },
    caseStudy: {
      stack: ["Python", "sqlglot AST", "unittest", "GitHub Actions"],
      sections: [
        {
          heading: "The problem",
          body: "sqlglot parses SQL into an AST and generates it back out in another dialect, which makes it the transpilation layer inside tools that rewrite queries repeatedly. That use forces a property: generating SQL and re-parsing it has to be a fixed point, so the second pass produces exactly what the first pass produced. For ClickHouse VALUES clauses it was not. Each round trip added another layer of parentheses, and the test suite never saw it because every existing test ran a single pass.",
          code: "INSERT INTO t (a, b) VALUES (1, 2)\n-> INSERT INTO t (a, b) VALUES ((1), (2))\n-> INSERT INTO t (a, b) VALUES (((1)), ((2)))\n-> INSERT INTO t (a, b) VALUES ((((1))), (((2))))",
        },
        {
          heading: "How I found it",
          body: "Nobody had reported this, so there was no issue to pick up. I wrote a harness that ran 100 real-world statements through 17 dialects and asserted three properties per statement: no crash with a non-sqlglot exception, generation is idempotent, and an A → B → A round trip returns the original tree. The idempotence check is what caught this, because it compares pass one against pass two — precisely the axis a single-pass suite cannot see. The same harness surfaced two further defects in other dialects.",
        },
        {
          heading: "Root cause",
          body: "ClickHouse reads SELECT * FROM VALUES (1, 2, 3) as three single-column rows rather than one three-column row, so the parser rewrites the clause into a tuple of tuples. It guarded against re-wrapping by checking whether the last expression was already a Tuple. The gap: a single-value tuple is generated as (x), and (x) parses back into a Paren, not a Tuple. The guard therefore never fired on the second pass, so the rewrite ran again — and again on every pass after that.",
          code: "# sqlglot/parsers/clickhouse.py\n# A single-value tuple is generated as \"(x)\", which is parsed back into a Paren\n# rather than a Tuple, so it's unwrapped here to keep this rewrite idempotent\nif values and not isinstance(expressions[-1], exp.Tuple):\n    value.set(\n        \"expressions\",\n        [self.expression(exp.Tuple(expressions=[expr.unnest()])) for expr in expressions],\n    )",
        },
        {
          heading: "The fix",
          body: "One call to the existing expr.unnest() helper, which strips the Paren before re-wrapping and makes the rewrite a fixed point. I deliberately did not add a new helper or reshape the guard: the first pass produces byte-identical output to before, so every expected value already in the suite still holds and the reviewer can see there is no regression without running anything.",
        },
        {
          heading: "Outcome",
          body: "Merged by the maintainer about a day after opening, CI green across Python 3.9 to 3.14. Final diff: one line of parser change plus two test assertions covering the second pass — the ones that would have caught the bug in the first place.",
        },
        {
          heading: "What I took from it",
          body: "A round-trip property test finds a class of bug that example-based tests structurally cannot, because the assertion is about the relationship between two runs rather than any single expected output. The same session also taught me the opposite lesson: a second PR of mine was closed because the SQL that triggered the bug was not valid in the real engine, only in sqlglot's deliberately permissive parser. A defect is worth fixing once you have shown a real database accepts the input that reaches it — that check now comes first.",
        },
      ],
      links: [
        { label: "PR #8185", href: "https://github.com/tobymao/sqlglot/pull/8185" },
        {
          label: "Merge commit",
          href: "https://github.com/tobymao/sqlglot/commit/6874e1c4bfa398d8dc2b4310fcadd304a0715d16",
        },
      ],
    },
  },
  {
    project: "sqlglot",
    org: "tobymao · SQL parser & transpiler",
    scale: "9.5k+ stars",
    date: "August 2026",
    title: "PR #8223 — DROP TABLE could only parse one table",
    description:
      "DROP TABLE t1, t2 is documented grammar in MySQL, PostgreSQL and SQL Server, and sqlglot rejected it outright in every dialect. The parser change is small; the work was choosing a representation that did not break the ALTER statement path, which routes through the same function.",
    link: "https://github.com/tobymao/sqlglot/pull/8223",
    tags: ["Python", "Parsers & compilers", "SQL", "Regression analysis"],
    status: { label: "Open · CI green", tone: "open" },
    caseStudy: {
      stack: ["Python", "sqlglot AST", "mypy", "ruff", "GitHub Actions"],
      sections: [
        {
          heading: "The problem",
          body: "An issue was filed reporting that MySQL's DROP TABLE t1, t2 raised a ParseError. Before touching anything I checked two things. First, whether it was actually MySQL-specific — it was not, the same input failed in every dialect I tried, which put the defect in the shared base parser rather than the MySQL one. Second, whether the input was real SQL at all: MySQL 8.4, PostgreSQL 17 and SQL Server all document a comma-separated list in that position. Both answers had to hold before the fix was worth writing.",
          code: "ParseError: Invalid expression / Unexpected token. Line 1, Col: 14.\n  DROP TABLE t1, t2\n\nmysql / postgres / tsql / duckdb / snowflake / default  →  all fail identically",
        },
        {
          heading: "Why it was not a one-liner",
          body: "The parser read a single table into the node's `this` slot and stopped at the comma. The obvious fix — reuse the node's existing `expressions` list — is wrong: the generator prints that list inside parentheses, because it exists to hold type signatures like DROP FUNCTION f(INT, INT). Putting tables there emits DROP TABLE t1 (t2). The next idea, moving every table into a new list and leaving `this` empty, crashes the T-SQL generator, which reaches into `expression.this` directly to strip the catalog off a view name.",
        },
        {
          heading: "The landmine",
          body: "The function I was changing is also called from the ALTER path, and ALTER parses its own actions as a comma-separated list. Making DROP greedily consume commas would have made it swallow the next action and break ALTER TABLE t DROP COLUMN a, DROP COLUMN b — syntax that already works and is already covered by a fixture in the suite. Finding that meant grepping for every caller of the function rather than reasoning only about my own input. Gating the new list on kind == \"TABLE\" leaves the ALTER path untouched, since its actions are always COLUMN, CONSTRAINT or PARTITION.",
        },
        {
          heading: "The design",
          body: "Rather than invent a shape, I looked for how the codebase already models this. exp.Delete carries a `tables` argument for MySQL's multiple-table DELETE syntax, so exp.Drop got the same argument under the same name. `this` keeps holding the first table, which leaves every dialect override that reaches for it working unchanged, and the generator only touches `this` when the list is non-empty — so single-table output stays byte-for-byte identical and the regression surface is provably zero.",
          code: "# sqlglot/parser.py\n# MySQL, Postgres and T-SQL accept a list of tables here. This is restricted to TABLE\n# because ALTER parses its actions with _parse_csv, so consuming the comma for kinds\n# like COLUMN would swallow the next action, e.g. ALTER TABLE t DROP a, DROP b\ntables = (\n    self._parse_csv(lambda: self._parse_table_parts(schema=True))\n    if kind == \"TABLE\" and self._match(TokenType.COMMA)\n    else None\n)",
        },
        {
          heading: "Verification",
          body: "20 added lines across 5 files, no deletions. Before writing anything I captured the existing output for the single-table, IF EXISTS, CASCADE, PURGE, quoted-identifier and DROP FUNCTION forms, then re-checked each one after — the cheapest regression proof there is. The full suite passes at 1,229 tests and 19,320 subtests, mypy is clean across 183 source files, and ruff reports the same error count before and after, so the diff introduces none. CI is green on Python 3.9 through 3.14.",
        },
        {
          heading: "Scope discipline",
          body: "PostgreSQL also allows a comma-separated list for DROP VIEW, DROP INDEX and DROP SEQUENCE, and covering all of them was tempting. I left them out and said so in the PR: VIEW in particular would drag in that T-SQL generator override, and bundling unrelated changes is the pattern I had already watched get PRs closed in this repository. One reviewable change, with the follow-up offered rather than assumed.",
        },
      ],
      links: [
        { label: "PR #8223", href: "https://github.com/tobymao/sqlglot/pull/8223" },
        { label: "Issue #8222", href: "https://github.com/tobymao/sqlglot/issues/8222" },
      ],
    },
  },
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
    status: { label: "Closed on my analysis", tone: "closed" },
    caseStudy: {
      stack: ["Python", "docling", "uvicorn", "Git archaeology"],
      sections: [
        {
          heading: "The problem",
          body: "An issue reported ValueError: Can not append a child with children from docling's VLM pipeline, pinned to v2.57.0. It had been open ten months with nobody able to reproduce it. The temptation with a report like that is to go hunting for the edge-case document. I started somewhere else — with whether the evidence in the report was internally consistent.",
        },
        {
          heading: "The forensics",
          body: "A traceback names a file and a line number. I checked out the exact tag the reporter named and read what was actually on that line. It did not match: the code the traceback describes had been deleted by PR #2458, which landed before that tag. A traceback cannot come from code that is not in the build, so the reporting environment was not running the version it claimed — a long-lived uvicorn process holding a stale module in memory explains it exactly.",
        },
        {
          heading: "Ruling out a real defect",
          body: "Showing the report was inconsistent is not the same as showing there is no bug, so I drove MarkdownDocumentBackend and DoclingDocument.concatenate directly over nine markdown shapes a vision-language model plausibly emits — nested lists, tables, mixed pages, inline images, fenced code blocks — against both the reported stack and current main. Nothing reproduced on either.",
        },
        {
          heading: "Outcome",
          body: "A maintainer agreed with the analysis and closed the issue. No patch: the right outcome here was retiring a ten-month-old ghost from the tracker with enough evidence that it stays retired.",
        },
      ],
      links: [
        {
          label: "My analysis",
          href: "https://github.com/docling-project/docling/issues/2476#issuecomment-5288696027",
        },
        { label: "Issue #2476", href: "https://github.com/docling-project/docling/issues/2476" },
      ],
    },
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

export type DemoCredential = { role: string; username: string; password: string };

export type Project = {
  title: string;
  year: string;
  description: string;
  /** A few specifics, for the projects where the interesting part is what is
   *  inside rather than what it is. Rendered only on featured cards. */
  highlights?: string[];
  tags: string[];
  link: string;
  featured: boolean;
  demoUrl?: string;
  demoCredentials?: DemoCredential[];
};

export const projects: Project[] = [
  {
    title: "College ERP Portal",
    year: "2026",
    description:
      "Took over a legacy Django 2.1 / MySQL college ERP and rebuilt it into something a college could actually run: PostgreSQL, Django 5.2, role-based access for students, teachers and admins, and 727 tests covering the rules that matter. Deployed to Render via a Blueprint (gunicorn, whitenoise, managed Postgres).",
    highlights: [
      "Request-and-approve workflows with full audit trails — mark re-evaluation, leave applications (approved leave is excluded from the 75% attendance denominator, not counted as present) and attendance corrections.",
      "Self-service password reset over email OTP: hashed single-use codes, ten-minute expiry, attempt limits, request rate limiting, and identical responses whether or not the account exists.",
      "Notifications as data, not just mail — an in-app inbox plus idempotent scheduled digests for fee reminders, low-attendance warnings, released marks and notices; re-running the job never sends the same thing twice.",
      "Attendance and CIE analytics drawn as inline SVG (no chart library, no CDN), plus PDF marks cards and fee receipts.",
      "Documented REST API — token auth, Swagger/ReDoc, pagination and throttling — sharing its validation layer with the web forms so the two cannot drift.",
      "Authorization, N+1 and data-loss bugs found by writing tests against the running app: query counts on the heaviest pages fell from 62 and 57 to 15 and 4.",
      "CI gates every push on ruff, pip-audit and a migrations check; Docker Compose for local Postgres; dark mode across the app.",
    ],
    tags: ["Django 5.2", "PostgreSQL", "REST Framework", "Celery-free scheduling", "Docker", "GitHub Actions", "Render"],
    link: "https://github.com/sanket801036/College-ERP-master",
    demoUrl: "https://college-erp-rlyy.onrender.com",
    demoCredentials: [
      { role: "Admin", username: "admin", password: "admin12345" },
      { role: "Student", username: "teststud", password: "testpass123" },
      { role: "Teacher", username: "testteach", password: "testpass123" },
    ],
    featured: true,
  },
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
