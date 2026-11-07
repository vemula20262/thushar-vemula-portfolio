export const SITE_URL = "https://thushar-reddy-vemula.vercel.app";
export const GH = "https://github.com/vemula20262";

export const profile = {
  name: "Thushar Reddy Vemula",
  email: "vemulathusharreddy@gmail.com",
  linkedin: "https://www.linkedin.com/in/thusharvemula",
  github: GH,
  location: "Tempe, Arizona",
};

export type Visual =
  | { kind: "image"; src: string; alt: string }
  | { kind: "anim"; name: AnimName };

export type AnimName =
  | "elastic"
  | "skillshift"
  | "federated"
  | "compiler"
  | "cache"
  | "robot"
  | "court"
  | "microbiome";

export type Category = "ai" | "cloud" | "sys" | "data";
export type Project = {
  slug: string;
  cat?: Category;
  title: string;
  tag: string;
  label: "real" | "live" | "sim";
  blurb: string;
  stack: string[];
  repo?: string;
  links?: { label: string; href: string }[];
  visual: Visual;
};

export const featured: Project[] = [
  {
    slug: "forma",
    title: "Forma",
    tag: "local ai · hackathon",
    label: "real",
    blurb:
      "A local voice agent for everyday tasks between apps. Speak a task, fill in details, approve every browser read.",
    stack: ["React", "FastAPI", "LangGraph", "Ollama", "Playwright", "whisper.cpp"],
    repo: `${GH}/Multi-App-AI-Agent`,
    links: [
      {
        label: "Demo video",
        href: "https://drive.google.com/drive/folders/1x_2qVAZMDhQYZL67fGum5WOdTqex_FG1?usp=drive_link",
      },
    ],
    visual: { kind: "image", src: "/assets/forma-real-hd.jpg", alt: "Forma voice agent interface running locally" },
  },
  {
    slug: "clickless",
    title: "ClickLess AI",
    tag: "voice travel · team project",
    label: "live",
    blurb: "Voice-first travel planning. My part: real-time streaming speech input with Speechmatics.",
    stack: ["Next.js", "TypeScript", "Speechmatics", "Supabase"],
    repo: `${GH}/clickless-AI-travel-agent`,
    links: [{ label: "Live site", href: "https://clickless-ai.vercel.app/" }],
    visual: {
      kind: "image",
      src: "/assets/clickless-real.jpg",
      alt: "ClickLess AI live site: conversational travel agent landing page",
    },
  },
  {
    slug: "interviewcoach",
    title: "InterviewCoach",
    tag: "voice ai · hackasu 2026",
    label: "real",
    blurb: "AI mock interviews in a 3D office scene, with structured STAR feedback you can revisit.",
    stack: ["Next.js", "TypeScript", "Three.js", "Gemini", "PostgreSQL"],
    repo: `${GH}/InterviewCoach-AI`,
    visual: { kind: "image", src: "/assets/interviewcoach-real.png", alt: "InterviewCoach landing page" },
  },
  {
    slug: "elastic",
    title: "Elastic Vision",
    tag: "aws · cloud computing · 100/100",
    label: "sim",
    blurb: "Queue-driven face recognition with a custom autoscaling controller.",
    stack: ["Python", "Flask", "EC2", "SQS", "S3", "DynamoDB", "PyTorch"],
    repo: `${GH}/CSE546-Project1-Face-Recognition`,
    visual: { kind: "anim", name: "elastic" },
  },
  {
    slug: "skillshift",
    title: "SkillShift",
    tag: "llm agents · research · cse 572",
    label: "sim",
    blurb:
      "Source-balanced feedback so self-improving agents don't overreact to one broken input. Team research on 120 SpreadsheetBench tasks.",
    stack: ["Python", "LLM agents", "SkillOpt", "Data mining"],
    repo: `${GH}/skillshift`,
    visual: { kind: "anim", name: "skillshift" },
  },
];

export const more: Project[] = [
  {
    slug: "carbon",
    cat: "ai",
    title: "Carbon Cruncher AI",
    tag: "project logo · mlh hackathon",
    label: "real",
    blurb: "Spots household waste in a photo with a custom MobileNet model, estimates its carbon footprint and suggests greener swaps.",
    stack: ["Python", "TensorFlow", "MobileNet", "GenAI"],
    repo: `${GH}/Hackathon_MLH`,
    links: [{ label: "Demo video", href: "https://youtu.be/4_E2qDs5Qcc" }],
    visual: { kind: "image", src: "/assets/carbon-cruncher.jpg", alt: "Carbon Cruncher AI project logo" },
  },
  {
    slug: "citytraffic",
    cat: "cloud",
    title: "CityTraffic NLQ",
    tag: "team project · data",
    label: "real",
    blurb: "Infrastructure, database design and load testing for NYC collision analytics.",
    stack: ["MongoDB", "Python", "Airflow", "Flask", "AWS"],
    repo: `${GH}/city-traffic-nlq`,
    visual: { kind: "image", src: "/assets/citytraffic-real.jpg", alt: "CityTraffic NLQ team dashboard" },
  },
  {
    slug: "federated",
    cat: "cloud",
    title: "Federated Learning & Edge",
    tag: "distributed ml · edge · 100/100",
    label: "sim",
    blurb: "10 EC2 workers plus a Raspberry Pi; Lambda averages weights over MQTT.",
    stack: ["PyTorch", "Lambda", "MQTT", "Greengrass"],
    repo: `${GH}/CSE546-Project2-Federated-Learning`,
    visual: { kind: "anim", name: "federated" },
  },
  {
    slug: "compiler",
    cat: "sys",
    title: "Polynomial Compiler",
    tag: "languages · c++",
    label: "sim",
    blurb: "Recursive-descent parser with semantic validation and evaluation.",
    stack: ["C++", "Parsing", "Semantic analysis"],
    visual: { kind: "anim", name: "compiler" },
  },
  {
    slug: "cache",
    cat: "sys",
    title: "Multicore Cache Coherence",
    tag: "computer architecture",
    label: "sim",
    blurb: "Directory-based coherence with N-way sets, LRU and latency plots.",
    stack: ["Python", "Matplotlib"],
    repo: `${GH}/CA_Project_Cache_Coherence_Protocols`,
    visual: { kind: "anim", name: "cache" },
  },
  {
    slug: "robot",
    cat: "sys",
    title: "Robot Path Planning",
    tag: "robotics · team project",
    label: "sim",
    blurb: "Potential fields, visibility checks and obstacle-aware rerouting.",
    stack: ["Python", "NumPy", "Pygame"],
    repo: `${GH}/robotics_project`,
    visual: { kind: "anim", name: "robot" },
  },
  {
    slug: "mailr",
    cat: "data",
    title: "Mailr",
    tag: "project banner · contribution",
    label: "real",
    blurb: "Personalized bulk email from a CSV, with attachments and a delivery report.",
    stack: ["Next.js", "TypeScript", "tRPC", "Nodemailer"],
    repo: `${GH}/Mailr_T`,
    links: [{ label: "Live", href: "https://mailr.gjd.one" }],
    visual: { kind: "image", src: "/assets/mailr-banner.png", alt: "Mailr project banner from its repository" },
  },
  {
    slug: "court",
    cat: "data",
    title: "CourtCase Extractor",
    tag: "data automation · sample rows",
    label: "sim",
    blurb: "Multithreaded parsing of court HTML into clean CSV datasets.",
    stack: ["Python", "BeautifulSoup", "Pandas"],
    repo: `${GH}/Case_Extractor`,
    visual: { kind: "anim", name: "court" },
  },
  {
    slug: "microbiome",
    cat: "data",
    title: "Microbiome Informatics",
    tag: "bioinformatics · b.tech thesis",
    label: "sim",
    blurb: "Clustering genomes by enzyme families with HMMER and CAZy.",
    stack: ["Python", "HMMER", "CAZy"],
    visual: { kind: "anim", name: "microbiome" },
  },
];

export const roles = [
  { org: "Arizona State University", role: "Software Automation Aide", place: "Tempe, AZ", dates: "Jul 2026 to now", logo: "/assets/asu.png", current: true },
  { org: "SimCoach", role: "Software Engineer · Founding Project", place: "", dates: "Dec 2025 to May 2026", logo: "/assets/simcoach.svg" },
  { org: "MyWanderLust.in", role: "Full Stack Developer", place: "Delhi, India", dates: "Aug 2024 to Jul 2025", logo: "/assets/mywanderlust.png" },
  { org: "Invisible AI", role: "AI Data Engineer · Freelance", place: "Remote, India", dates: "Sep 2024 to Feb 2025", logo: "/assets/invisible-ai.webp" },
  { org: "MIDAS Lab · IIIT Delhi", role: "Undergraduate Research Assistant", place: "New Delhi, India", dates: "Aug 2022 to Jan 2023", logo: "/assets/iiit-delhi.png" },
];

export type Tech = { name: string; icon?: string; color: string };
const t = (name: string, icon: string | undefined, color: string): Tech => ({ name, icon: icon && `/assets/tech/${icon}.svg`, color });

export const stackGroups: { title: string; dir: string; note: string; items: Tech[]; dark?: boolean }[] = [
  {
    title: "Languages",
    dir: "lang/",
    note: "The foundations I build with",
    items: [t("Python", "python", "#3776AB"), t("TypeScript", "typescript", "#3178C6"), t("JavaScript", "javascript", "#F7DF1E"), t("Java", "java", "#E76F00"), t("SQL", "sql", "#336791"), t("Go", "go", "#00ADD8"), t("C++", undefined, "#00599C")],
  },
  {
    title: "AI & LLMs",
    dir: "ai/",
    note: "Used in Forma, InterviewCoach, SkillShift, Federated Learning",
    items: [t("LangGraph", "langgraph", "#1C3C3C"), t("LangChain", "langchain", "#1C3C3C"), t("Ollama", undefined, "#0D1330"), t("Gemini", undefined, "#4285F4"), t("PyTorch", "pytorch", "#EE4C2C"), t("RAG", undefined, "#8A97D9"), t("whisper.cpp", undefined, "#FF6B5A"), t("Speechmatics", undefined, "#2340FF")],
  },
  {
    title: "Backend & APIs",
    dir: "server/",
    note: "Used in Forma, Elastic Vision, MyWanderLust.in",
    items: [t("FastAPI", "fastapi", "#009688"), t("Flask", "flask", "#000000"), t("Django", "django", "#092E20"), t("REST APIs", "rest", "#2340FF"), t("tRPC", undefined, "#398CCB"), t("Celery", "celery", "#37814A"), t("RabbitMQ", "rabbitmq", "#FF6600")],
  },
  {
    title: "Cloud & DevOps",
    dir: "infra/",
    note: "Used in Elastic Vision, Federated Learning, this site",
    items: [t("AWS", "amazonwebservices", "#FF9900"), t("EC2 · S3 · SQS", undefined, "#FF9900"), t("Lambda", undefined, "#FF9900"), t("IoT Greengrass", undefined, "#FF9900"), t("Docker", "docker", "#2496ED"), t("GitHub Actions", "githubactions", "#2088FF"), t("Linux", "linux", "#0D1330"), t("Vercel", undefined, "#0D1330"), t("Git", "git", "#F05032")],
  },
  {
    title: "Data",
    dir: "data/",
    note: "Used in CityTraffic NLQ, CourtCase, Microbiome",
    items: [t("PostgreSQL", "postgresql", "#336791"), t("MongoDB", "mongodb", "#47A248"), t("MySQL", "mysql", "#4479A1"), t("Redis", "redis", "#DC382D"), t("DynamoDB", "dynamodb", "#4053D6"), t("Supabase", "supabase", "#3ECF8E"), t("Airflow", "apacheairflow", "#017CEE"), t("Pandas", "pandas", "#150458"), t("NumPy", "numpy", "#013243")],
  },
  {
    title: "Frontend & Testing",
    dir: "client/",
    note: "Interfaces and the checks that keep them honest",
    dark: true,
    items: [t("React", "react", "#61DAFB"), t("Next.js", "nextjs", "#0D1330"), t("Tailwind", undefined, "#06B6D4"), t("Three.js", undefined, "#0D1330"), t("Framer Motion", undefined, "#E000FF"), t("Playwright", "playwright", "#2D79C7"), t("Pytest", "pytest", "#0A9EDC"), t("Locust", "locust", "#1F8F3A")],
  },
];

export const marqueeA = ["python", "typescript", "react", "nextjs", "fastapi", "langgraph", "amazonwebservices", "postgresql", "mongodb", "apacheairflow", "pytorch", "docker"];
export const marqueeB = ["django", "flask", "playwright", "supabase", "langchain", "redis", "dynamodb", "pandas", "numpy", "git", "githubactions", "linux"];
export const techLabel: Record<string, string> = {
  python: "Python", typescript: "TypeScript", react: "React", nextjs: "Next.js", fastapi: "FastAPI", langgraph: "LangGraph",
  amazonwebservices: "AWS", postgresql: "PostgreSQL", mongodb: "MongoDB", apacheairflow: "Airflow", pytorch: "PyTorch", docker: "Docker",
  django: "Django", flask: "Flask", playwright: "Playwright", supabase: "Supabase", langchain: "LangChain", redis: "Redis",
  dynamodb: "DynamoDB", pandas: "Pandas", numpy: "NumPy", git: "Git", githubactions: "GitHub Actions", linux: "Linux",
};

export const categories: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI & Agents" },
  { id: "cloud", label: "Cloud & Distributed" },
  { id: "sys", label: "Systems" },
  { id: "data", label: "Data & Web" },
];
