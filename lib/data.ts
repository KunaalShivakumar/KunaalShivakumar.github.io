import {
  Award,
  BookOpenCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  FlaskConical,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Medal,
  Rocket,
  Sparkles,
  Trophy,
} from "lucide-react";

export const profile = {
  name: "Kunaal Shivakumar",
  title: "Software Developer in Test | AI-Driven Test Automation",
  tagline:
    "Building reliable test automation for enterprise financial software with Python, Selenium, Jenkins, and Claude Skills & Agents.",
  location: "Bengaluru, India",
  email: "knsk0035@gmail.com",
  linkedin: "https://www.linkedin.com/in/kunaal-shivakumar-6a2a49245",
  github: "https://github.com/KunaalShivakumar",
  bio:
    "I am a Software Developer in Test at Q2 Software, building and validating Python-Selenium automation for enterprise financial applications. I also develop Claude Skills and Agents workflows that analyze repositories, identify reusable test coverage, and automate test contributions through validation and pull request creation. My background includes Jenkins CI/CD, API testing, and IEEE-published research in deep learning and decentralized finance.",
  typingRoles: [
    "Software Developer in Test",
    "IEEE Research Author"
  ]
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Certifications", href: "#credentials" },
  { label: "Contact", href: "#contact" }
];

export const stats = [
  { value: "2+", label: "Years Industry Experience" },
  { value: "2", label: "IEEE Publications" },
  { value: "Best", label: "Paper Presenter Award" },
  { value: "100+", label: "Automated Test Cases" },
  { value: "8.47", label: "CGPA" }
];

export const experience = [
  {
    company: "Q2 Software",
    role: "Software Developer in Test",
    period: "August 2026 - Present",
    icon: BriefcaseBusiness,
    points: [
      "Improved Python-Selenium automation frameworks and integrated new automation workflows into CI/CD for enterprise financial applications",
      "Developed Claude Skills and Agents workflows to analyze repositories, existing test cases, and automation patterns to identify reusable automation coverage",
      "Automated the test contribution workflow from repository analysis and implementation through execution validation, failure handling, and pull request creation",
      "Validated AI-generated automated tests in headed and headless modes for stability, correctness, and CI compatibility",
      "Managed Jenkins CI/CD automation and regression execution to shorten feedback cycles and improve release validation"
    ]
  },
  {
    company: "Q2 Software",
    role: "Associate SDET",
    period: "August 2024 - July 2026",
    icon: BriefcaseBusiness,
    points: [
      "Designed and maintained Python-Selenium automation suites using unittest for enterprise financial applications, automating 100+ critical regression test cases",
      "Developed API automation and smoke test suites in Postman, achieving 95%+ endpoint coverage for backend services",
      "Integrated automated regression suites with Jenkins CI/CD pipelines for continuous testing and faster feedback on code changes",
      "Developed a Jenkins Reporting Agent using Claude Skills and Agents for 26 Financial Institution pipelines, automating failure reports, fix recommendations, and quality trend analysis"
    ]
  }
];

export const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "BMS Institute of Technology and Management (BMSIT&M)",
    location: "Bengaluru",
    university: "Visvesvaraya Technological University (VTU)",
    period: "June 2024",
    result: "CGPA: 8.47/10"
  }
];

export const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Python", level: 92 },
      { name: "Java", level: 78 },
      { name: "C", level: 70 }
    ]
  },
  {
    title: "Web Technologies",
    icon: Rocket,
    skills: [
      { name: "HTML", level: 88 },
      { name: "CSS", level: 84 },
      { name: "JavaScript", level: 80 },
      { name: "Selenium", level: 92 }
    ]
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", level: 84 },
      { name: "Microsoft SQL Server", level: 78 }
    ]
  },
  {
    title: "Automation & Testing Tools",
    icon: BrainCircuit,
    skills: [
      { name: "Jenkins", level: 86 },
      { name: "Postman", level: 86 },
      { name: "BrowserStack", level: 80 },
      { name: "TensorFlow", level: 82 },
      { name: "Claude Skills & Agents", level: 84 },
      { name: "LangChain", level: 82 },
      { name: "LangGraph", level: 82 }
    ]
  }
];

export const projects = [
  {
    title: "Bone Tumour Detection and Classification Using Deep Learning",
    badge: "Featured Project",
    description:
      "Preprocessed and augmented 6,000 CT images, then trained and fine-tuned CNN, VGG-16, and DenseNet121 models for bone tumour classification. DenseNet121 achieved 91.3% accuracy and a 0.89 F1-score; the model was deployed in a Flask web app for real-time classification.",
    technologies: ["Python", "TensorFlow", "CNN", "VGG16", "DenseNet121", "Flask", "Machine Learning"],
    highlights: ["91.3% Accuracy", "6000+ Medical Images", "IEEE Publication", "Best Paper Presenter Award"],
    icon: BrainCircuit,
    tone: "cyan",
    githubHref: "https://github.com/KunaalShivakumar/Bone-Tumor",
    publicationHref: "https://ieeexplore.ieee.org/document/10699180?denied="
  },
  {
    title: "Tourism Management System",
    badge: "Full-Stack Project",
    description:
      "Designed and developed a full-stack online tourism management system for browsing travel packages, managing bookings, handling user authentication, and supporting administrative operations. The platform included package listing, customer booking flows, CRUD-based admin management, and a responsive interface built for practical end-to-end travel service handling.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    highlights: ["User Authentication", "Tour Booking", "Admin Dashboard", "CRUD Operations", "Responsive Design"],
    icon: FlaskConical,
    tone: "gold",
    githubHref: "https://github.com/KunaalShivakumar/Online-Tourism-Management"
  }
];

export const publications = [
  {
    title: "Bone Tumour Detection and Classification Using Deep Learning Based on Computed Tomography",
    venue: "IEEE Xplore",
    year: "2024",
    documentId: "IEEE Document 10699180",
    href: "https://ieeexplore.ieee.org/document/10699180?denied=",
    abstract:
      "A deep learning research contribution exploring automated CT-based bone tumour detection and classification with convolutional neural networks and transfer learning architectures."
  },
  {
    title: "Decoding DeFi: A Comparative Analysis of Popular and High-Traffic Decentralized Finance Applications",
    venue: "IEEE Xplore",
    year: "2025",
    documentId: "IEEE Document 11188973",
    href: "https://ieeexplore.ieee.org/document/11188973",
    abstract:
      "A comparative study of high-traffic decentralized finance applications across architecture, adoption, security posture, scalability, and ecosystem maturity."
  }
];

export const achievements = [
  {
    title: "Best Paper Presenter Award",
    detail: "IEEE NMITCON 2024",
    icon: Trophy,
    href: "/documents/nmitcon-2024-best-paper.pdf"
  },
  { title: "IEEE Published Research Author", detail: "2 peer-reviewed publications", icon: BookOpenCheck },
  { title: "VTU North Zone Cricket Tournament Winner", detail: "Competitive university sports", icon: Medal },
  { title: "4th Place, VTU State-Level Inter-Collegiate Cricket Tournament", detail: "February 2024", icon: Award },
  { title: "Student Placement Coordinator", detail: "Campus leadership", icon: Sparkles },
  { title: "Student Sports Coordinator", detail: "Team coordination and events", icon: Trophy }
];

export const certifications = [
  {
    title: "Complete Agentic AI Bootcamp With LangGraph and LangChain",
    issuer: "Udemy · September 2026 · 45.5 hours",
    href: "/documents/complete-agentic-ai-bootcamp-langgraph-langchain.pdf"
  },
  {
    title: "Introduction to Prompt Engineering for Generative AI",
    issuer: "LinkedIn Learning · 2026",
    href: "/documents/prompt-engineering-generative-ai.pdf"
  },
  {
    title: "Claude with the Anthropic API",
    issuer: "Anthropic · 2026",
    href: "/documents/claude-anthropic-api.pdf"
  },
  {
    title: "Python Automation and Testing",
    issuer: "LinkedIn Learning · October 2024"
  },
  {
    title: "Jenkins Essential Training",
    issuer: "LinkedIn Learning · June 2024",
    href: "/documents/jenkins-essential-training.pdf"
  },
  {
    title: "Postman Essential Training",
    issuer: "LinkedIn Learning · May 2024",
    href: "/documents/postman-essential-training.pdf"
  },
  {
    title: "Python Essential Training",
    issuer: "LinkedIn Learning · April 2024"
  }
];

export const credibilityDocuments = [
  {
    title: "Download Resume",
    detail: "Clean resume copy with education, experience, projects, and skills.",
    href: "/documents/kunaal-shivakumar-resume.pdf"
  },
  {
    title: "Best Paper Proof",
    detail: "NMITCON 2024 best paper recognition document.",
    href: "/documents/nmitcon-2024-best-paper.pdf"
  },
  {
    title: "Certificate Folder",
    detail: "Verified course certificates linked below as PDF evidence.",
    href: "#credentials"
  }
];

export const contactItems = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "kunaal-shivakumar-6a2a49245", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", value: "KunaalShivakumar", href: profile.github, icon: Github },
  { label: "Location", value: profile.location, href: "#contact", icon: MapPin }
];
