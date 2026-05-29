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
  Workflow
} from "lucide-react";

export const profile = {
  name: "Kunaal Shivakumar",
  title: "Software Developer in Test | IEEE Research Author",
  tagline:
    "Building reliable software through automation, intelligent systems, and continuous innovation.",
  location: "Bengaluru, India",
  email: "knsk0035@gmail.com",
  linkedin: "https://www.linkedin.com/in/kunaal-shivakumar-6a2a49245",
  github: "https://github.com/KunaalShivakumar",
  bio:
    "I am a Software Developer in Test specializing in automation frameworks, Selenium, Jenkins, and CI/CD, with a strong interest in Artificial Intelligence and Machine Learning. My experience ranges from developing scalable automation frameworks for enterprise financial applications to conducting IEEE-published research in deep learning for medical image analysis and decentralized finance. I am passionate about building reliable software systems, exploring emerging technologies, and leveraging intelligent solutions to solve real-world challenges at the intersection of software development, testing, and AI.",
  typingRoles: [
    "Software Developer in Test",
    "IEEE Research Author"
  ]
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
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
  { value: "150+", label: "Automated Test Cases" },
  { value: "8.47", label: "CGPA" }
];

export const experience = [
  {
    company: "Q2 Software",
    role: "Associate Software Developer in Test",
    period: "August 2024 - Present",
    icon: BriefcaseBusiness,
    points: [
      "Designing and maintaining scalable Selenium automation frameworks using Python for enterprise financial application testing",
      "Automating 150+ critical regression test cases and improving coverage across high-priority product workflows",
      "Built an AI-powered Jenkins Reporting Agent with Claude Skills and Agents for 26 Financial Institution pipelines, automating failure reports, fix recommendations, and bi-weekly trend analysis",
      "Integrating automated suites into Jenkins CI/CD pipelines to support faster regression cycles and clearer release confidence",
      "Performing functional, regression, database, and cross-browser validation while collaborating closely in Agile ceremonies and defect triage"
    ]
  },
  {
    company: "Q2 Software",
    role: "QA Intern",
    period: "April 2024 - August 2024",
    icon: Workflow,
    points: [
      "Resolved 100+ automation failures by analyzing flaky scripts, locator changes, synchronization issues, and environment-related failures",
      "Improved pipeline stability by 85% through regression debugging, test maintenance, and consistent CI execution follow-up",
      "Executed manual and automated testing across desktop and mobile platforms to validate key financial workflows before release",
      "Worked with Jenkins, BrowserStack, Selenium, and defect-tracking workflows while documenting findings for development and QA teams"
    ]
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
    title: "Web Development & Tools",
    icon: Rocket,
    skills: [
      { name: "HTML", level: 88 },
      { name: "CSS", level: 84 },
      { name: "JavaScript", level: 80 },
      { name: "PHP", level: 76 },
      { name: "Flask", level: 82 },
      { name: "Selenium", level: 92 },
      { name: "Jenkins", level: 86 }
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
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    skills: [
      { name: "TensorFlow", level: 82 },
      { name: "CNN", level: 86 },
      { name: "VGG16", level: 78 },
      { name: "DenseNet121", level: 78 },
      { name: "Machine Learning", level: 84 },
      { name: "Deep Learning", level: 82 }
    ]
  }
];

export const projects = [
  {
    title: "Bone Tumour Detection and Classification Using Deep Learning",
    badge: "Featured Project",
    description:
      "Developed a deep learning system for automated bone tumour detection from CT scans using CNN, VGG16, and DenseNet121. Achieved 91.3% accuracy and deployed the solution through a Flask-based web application.",
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
  { title: "VTU State-Level Inter-Collegiate Cricket Tournament Finalist", detail: "State-level finalist", icon: Award },
  { title: "Student Placement Coordinator", detail: "Campus leadership", icon: Sparkles },
  { title: "Student Sports Coordinator", detail: "Team coordination and events", icon: Trophy }
];

export const certifications = [
  {
    title: "API Testing Foundations",
    issuer: "LinkedIn Learning",
    href: "/documents/api-testing-foundations.pdf"
  },
  {
    title: "Postman Essential Training",
    issuer: "LinkedIn Learning",
    href: "/documents/postman-essential-training.pdf"
  },
  {
    title: "Jenkins Essential Training",
    issuer: "LinkedIn Learning",
    href: "/documents/jenkins-essential-training.pdf"
  },
  {
    title: "Learning Jenkins",
    issuer: "LinkedIn Learning",
    href: "/documents/learning-jenkins.pdf"
  },
  {
    title: "Introduction to Prompt Engineering for Generative AI",
    issuer: "LinkedIn Learning",
    href: "/documents/prompt-engineering-generative-ai.pdf"
  },
  {
    title: "Claude with the Anthropic API",
    issuer: "Anthropic API credential",
    href: "/documents/claude-anthropic-api.pdf"
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
