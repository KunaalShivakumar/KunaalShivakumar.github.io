"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  Menu,
  Send,
  X
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  achievements,
  certifications,
  contactItems,
  credibilityDocuments,
  experience,
  navItems,
  profile,
  projects,
  publications,
  skillGroups,
  stats
} from "@/lib/data";
import { cn } from "@/lib/utils";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 }
};

const heroActions: Array<{
  label: string;
  href: string;
  icon: LucideIcon;
  primary?: boolean;
}> = [
  { label: "View Projects", href: "#projects", icon: ArrowUpRight, primary: true },
  { label: "Download Resume", href: "/documents/kunaal-shivakumar-resume.pdf", icon: Download },
  { label: "Contact Me", href: "#contact", icon: Mail }
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBasePath = (href: string) => {
  if (!basePath || !href.startsWith("/")) {
    return href;
  }

  return `${basePath}${href}`;
};

const socialLinks: Array<{
  label: string;
  href: string;
  icon: LucideIcon;
}> = [
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", href: profile.github, icon: Github }
];

function SectionHeading({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={reveal}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="mb-10 max-w-3xl"
    >
      <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.28em] text-cyanflare">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {copy ? <p className="mt-4 text-base leading-7 text-mist sm:text-lg">{copy}</p> : null}
    </motion.div>
  );
}

function useActiveSection(items: typeof navItems) {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -58% 0px", threshold: [0.18, 0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return activeSection;
}

function Header() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection(navItems);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <>
      <motion.div className="fixed left-0 right-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-cyanflare via-emeraldflare to-gold" style={{ scaleX }} />
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-ink/74 backdrop-blur-2xl">
        <nav className="section-shell grid h-16 grid-cols-[auto_1fr_auto] items-center">
          <a href="#home" className="focus-surface rounded-xl font-display text-lg font-semibold text-white" aria-label="Kunaal Shivakumar home">
            KS<span className="text-cyanflare">.</span>
          </a>
          <div className="mx-auto hidden items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.035] p-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                className={cn(
                  "focus-surface rounded-xl px-3 py-2 text-sm text-mist transition hover:bg-white/[0.07] hover:text-white",
                  activeSection === item.href.slice(1) ? "bg-white/10 text-white shadow-glow" : ""
                )}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            className="focus-surface col-start-3 inline-grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
          >
            <Menu size={20} />
          </button>
        </nav>
      </header>
      {open ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 bg-ink/95 p-6 backdrop-blur-2xl md:hidden">
          <div className="flex items-center justify-between">
            <span className="font-display text-lg font-semibold">Kunaal Shivakumar</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close navigation" className="focus-surface grid h-10 w-10 place-items-center rounded-xl border border-white/10">
              <X size={20} />
            </button>
          </div>
          <div className="mt-12 grid gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="focus-surface rounded-xl border-b border-white/10 px-2 py-4 font-display text-2xl">
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      ) : null}
    </>
  );
}

function Hero() {
  const [portrait, setPortrait] = useState(withBasePath("/profile.jpg"));

  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden pb-16 pt-28">
      <div className="absolute inset-0 bg-radial-noise opacity-70" aria-hidden="true" />
      <div className="section-shell relative grid min-h-[calc(92vh-7rem)] items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full border border-cyanflare/25 bg-cyanflare/10 px-3 py-1 font-display text-sm uppercase text-cyanflare">Portfolio</p>
          <h1 className="text-balance font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Kunaal Shivakumar
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">{profile.title}</p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-mist sm:text-lg">{profile.tagline}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            {heroActions.map(({ label, href, icon: Icon, primary }) => (
              <a
                key={label}
                href={withBasePath(href)}
                target={href.startsWith("/documents") ? "_blank" : undefined}
                rel={href.startsWith("/documents") ? "noreferrer" : undefined}
                className={cn(
                  "focus-surface inline-flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition duration-200",
                  primary
                    ? "bg-white text-ink shadow-[0_16px_40px_rgba(255,255,255,0.12)] hover:bg-cyanflare hover:shadow-[0_18px_52px_rgba(75,228,255,0.20)]"
                    : "border border-white/10 bg-white/5 text-white hover:-translate-y-0.5 hover:border-cyanflare/60 hover:bg-white/10"
                )}
              >
                {label}
                <Icon size={16} />
              </a>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.04 }}
                className="focus-surface grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white shadow-glow transition hover:border-cyanflare/60 hover:bg-white/10"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }} className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="glass premium-card relative overflow-hidden rounded-lg p-3">
            <div className="aspect-square overflow-hidden rounded-lg">
              <Image
                src={portrait}
                onError={() => setPortrait(withBasePath("/profile-placeholder.svg"))}
                alt="Headshot of Kunaal Shivakumar"
                width={960}
                height={1200}
                priority
                className="h-full w-full scale-[1.58] object-cover object-[50%_14%]"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/10 bg-ink/72 p-4 backdrop-blur-md">
              <p className="text-sm text-mist">Based in {profile.location}</p>
              <p className="mt-1 font-display text-xl font-semibold">Software quality meets intelligent systems.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-shell py-24">
      <SectionHeading
        eyebrow="About me"
        title="A software engineer focused on dependable systems, automation, and applied AI."
        copy={profile.bio}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            className="glass premium-card rounded-2xl p-5"
          >
            <p className="font-display text-3xl font-semibold text-white">{stat.value}</p>
            <p className="mt-2 text-sm leading-5 text-mist">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-band py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Experience" title="Enterprise QA automation, CI/CD reliability, and test engineering impact." />
        <div className="relative grid gap-6">
          <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-gradient-to-b from-cyanflare via-white/20 to-transparent sm:block" />
          {experience.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.role}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={reveal}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative sm:pl-16"
              >
                <div className="absolute left-0 top-4 hidden h-10 w-10 place-items-center rounded-lg border border-cyanflare/40 bg-ink text-cyanflare sm:grid">
                  <Icon size={20} />
                </div>
                <div className="glass premium-card rounded-lg p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-white">{item.role}</h3>
                      <p className="mt-1 text-cyanflare">{item.company}</p>
                    </div>
                    <p className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-1 text-sm text-mist">{item.period}</p>
                  </div>
                  <ul className="mt-5 grid gap-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 rounded-lg bg-white/[0.025] p-3 text-sm leading-6 text-slate-300">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emeraldflare" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-shell py-24">
      <SectionHeading eyebrow="Skills" title="Focused tools for automation, web systems, data, and machine learning." />
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.article
              key={group.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={reveal}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className="glass premium-card rounded-lg p-5"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-cyanflare/10 text-cyanflare">
                  <Icon size={21} />
                </div>
                <h3 className="font-display text-xl font-semibold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill.name} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200 transition hover:border-cyanflare/40 hover:bg-white/[0.08]">
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="mt-5 grid gap-3 rounded-2xl border border-white/10 bg-ink/45 p-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Bone tumour detection architecture">
      {["CT Scan Dataset", "Preprocessing", "CNN / VGG16 / DenseNet121", "Flask Web App"].map((step, index) => (
        <div key={step} className="min-w-0 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-cyanflare/30 hover:bg-white/[0.075]">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10 font-display text-sm text-cyanflare">{index + 1}</div>
            {index < 3 ? <ChevronRight className="hidden h-4 w-4 shrink-0 text-mist xl:block" /> : null}
          </div>
          <p className="break-words text-sm leading-5 text-slate-300">{step}</p>
        </div>
      ))}
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-band py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Featured projects" title="Practical engineering projects with clear user-facing outcomes." />
        <div className="grid gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={reveal}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="glass premium-card rounded-2xl p-6"
              >
                <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                  <div className="min-w-0">
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-cyanflare">
                        <Icon size={24} />
                      </div>
                      <span className="max-w-full rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-gold">
                        {project.badge}
                      </span>
                    </div>
                    <h3 className="text-pretty break-words font-display text-2xl font-semibold text-white sm:text-3xl">{project.title}</h3>
                    <p className="mt-4 leading-7 text-mist">{project.description}</p>
                    {index === 0 ? <ArchitectureDiagram /> : null}
                  </div>
                  <div className="flex min-w-0 flex-col justify-between gap-6">
                    <div>
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="max-w-full break-words rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-cyanflare/35 hover:text-white">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">Highlights</p>
                      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                        {project.highlights.map((highlight) => (
                          <div key={highlight} className="min-w-0 break-words rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {"githubHref" in project ? (
                        <a
                          href={project.githubHref}
                          target="_blank"
                          rel="noreferrer"
                          className="focus-surface inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-white transition hover:border-cyanflare/60 hover:bg-white/10"
                        >
                          <Github size={16} /> GitHub
                        </a>
                      ) : null}
                      {"publicationHref" in project ? (
                        <a
                          href={project.publicationHref}
                          target="_blank"
                          rel="noreferrer"
                          className="focus-surface inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-cyanflare"
                        >
                          IEEE Paper <ExternalLink size={16} />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section id="research" className="section-shell py-24">
      <SectionHeading eyebrow="Research publications" title="Academic work at the intersection of deep learning, medical imaging, and decentralized systems." />
      <div className="grid gap-5 md:grid-cols-2">
        {publications.map((publication, index) => (
          <motion.article
            key={publication.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={{ y: -5 }}
            className="glass premium-card rounded-2xl p-6"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="rounded-full bg-cyanflare/10 px-3 py-1 text-sm text-cyanflare">{publication.venue}</span>
              <span className="text-sm text-mist">{publication.year}</span>
            </div>
            <h3 className="font-display text-2xl font-semibold leading-tight text-white">{publication.title}</h3>
            <p className="mt-4 leading-7 text-mist">{publication.abstract}</p>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <span className="text-sm text-slate-400">{publication.documentId}</span>
              <a
              href={publication.href}
                target="_blank"
                rel="noreferrer"
                className="focus-surface inline-flex items-center gap-2 rounded-xl px-2 py-1 text-sm font-semibold text-white hover:text-cyanflare"
              >
                IEEE Xplore <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="section-band py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Achievements" title="Recognition across research, leadership, and competitive team environments." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={reveal}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="glass premium-card rounded-2xl p-5"
              >
                <Icon className="mb-5 h-8 w-8 text-gold" />
                <h3 className="font-display text-xl font-semibold text-white">{achievement.title}</h3>
                <p className="mt-2 text-sm text-mist">{achievement.detail}</p>
                {achievement.href ? (
                  <a
                    href={withBasePath(achievement.href)}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-surface mt-5 inline-flex items-center gap-2 rounded-xl px-2 py-1 text-sm font-semibold text-white hover:text-cyanflare"
                  >
                    View proof <ArrowUpRight size={15} />
                  </a>
                ) : null}
              </motion.div>
            );
          })}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {credibilityDocuments.map((item) => (
            <a
              key={item.title}
              href={withBasePath(item.href)}
              target={item.href.startsWith("#") ? undefined : "_blank"}
              rel="noreferrer"
              className="glass premium-card focus-surface rounded-2xl p-5 transition hover:border-cyanflare/50 hover:bg-white/[0.08]"
            >
              <FileText className="mb-5 h-7 w-7 text-cyanflare" />
              <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-mist">{item.detail}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Open document <ArrowUpRight size={15} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="credentials" className="section-shell py-24">
      <SectionHeading eyebrow="Certifications" title="Continuous learning across APIs, automation, testing, and delivery tooling." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certification, index) => (
          <motion.a
            key={certification.title}
            href={withBasePath(certification.href)}
            target="_blank"
            rel="noreferrer"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
            transition={{ duration: 0.5, delay: index * 0.04 }}
            className="glass premium-card focus-surface flex min-h-44 flex-col rounded-2xl p-5 transition hover:border-cyanflare/50 hover:bg-white/[0.08]"
          >
            <CheckCircle2 className="mb-6 h-7 w-7 text-emeraldflare" />
            <p className="font-display text-lg font-semibold leading-snug text-white">{certification.title}</p>
            <p className="mt-2 text-sm text-mist">{certification.issuer}</p>
            <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-white">
              View credential <ArrowUpRight size={15} />
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setStatus("Please complete the required fields.");
      return;
    }
    setStatus("Thanks. Your email client will open with the message draft.");
    const data = new FormData(form);
    const subject = encodeURIComponent(String(data.get("subject") || "Portfolio inquiry"));
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-radial-noise opacity-80" aria-hidden="true" />
      <div className="section-shell relative">
        <SectionHeading eyebrow="Contact" title="Let's Build Something Meaningful Together" copy="Open to software development in test, automation, CI/CD, and AI research conversations." />
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div className="grid gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="glass premium-card focus-surface flex items-center gap-4 rounded-2xl p-4 transition hover:border-cyanflare/50">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-cyanflare">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-mist">{item.label}</p>
                    <p className="break-all font-medium text-white">{item.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
          <form onSubmit={handleSubmit} className="glass premium-card grid gap-4 rounded-2xl p-6" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <input required name="name" placeholder="Name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyanflare focus:bg-white/[0.075]" />
              <input required name="email" type="email" placeholder="Email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyanflare focus:bg-white/[0.075]" />
            </div>
            <input required name="subject" placeholder="Subject" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyanflare focus:bg-white/[0.075]" />
            <textarea required name="message" placeholder="Message" rows={6} className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyanflare focus:bg-white/[0.075]" />
            <button type="submit" className="focus-surface inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-ink transition hover:bg-cyanflare">
              Send Message <Send size={16} />
            </button>
            {status ? <p className="text-sm text-mist" role="status">{status}</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col gap-4 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
        <p>(c) {year} Kunaal Shivakumar. Built for performance, research, and reliability.</p>
        <div className="flex gap-4">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <a href={`mailto:${profile.email}`} className="hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Research />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
