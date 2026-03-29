import {
  Award,
  BookOpen,
  ChevronRight,
  Code2,
  Download,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Star,
  Trophy,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ---------- Intersection Observer hook ----------
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ---------- Data ----------
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Summary", href: "#summary" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const EDUCATION = [
  {
    degree: "Master of Commerce (M.Com)",
    field: "Advanced Accounting",
    institute: "Navgujarat Commerce College, Gandhinagar",
    year: "2027 (Pursuing)",
    status: "pursuing",
  },
  {
    degree: "Bachelor of Commerce (B.Com)",
    field: "Advanced Accounting",
    institute: "Shankersinh Vaghela Bapu Institute of Commerce, Gandhinagar",
    year: "2025",
    status: "completed",
  },
  {
    degree: "High Secondary Certificate (12th Grade)",
    field: "",
    institute: "Sheth M B School, Pethapur, Gandhinagar",
    year: "2022",
    status: "completed",
  },
  {
    degree: "Secondary School Certificate (10th Grade)",
    field: "",
    institute: "Sheth M B School, Pethapur, Gandhinagar",
    year: "2020",
    status: "completed",
  },
];

const SKILLS = [
  {
    category: "Accounting Software",
    items: ["Tally ERP 9 (Certified)", "Tally Prime"],
  },
  { category: "Office Suite", items: ["MS Excel", "MS Word", "MS PowerPoint"] },
  { category: "IT Skills", items: ["CCC Certified"] },
  {
    category: "Data Management",
    items: ["Data Entry", "Excel Formulas", "Gujarati Typing"],
  },
];

const CERTIFICATIONS = [
  { name: "Tally ERP 9 – Professional", issuer: "Tally Solutions" },
  { name: "Course on Computer Concepts (CCC)", issuer: "AICE INDIA" },
];

const LANGUAGES = [
  { name: "English", level: "Proficient" },
  { name: "Gujarati", level: "Native" },
  { name: "Hindi", level: "Proficient" },
];

// ---------- Hero section ----------
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "oklch(96.8% 0.008 250)" }}
    >
      {/* Geometric background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-30"
          style={{ background: "oklch(81% 0.05 75)" }}
        />
        <div
          className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full opacity-20"
          style={{ background: "oklch(68% 0.025 230)" }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-5 h-5 rounded-full opacity-40"
          style={{ background: "oklch(81% 0.05 75)" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full opacity-30"
          style={{ background: "oklch(68% 0.025 230)" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-4 h-4 rounded-full opacity-30"
          style={{ background: "oklch(68% 0.025 230)" }}
        />
        <div
          className="absolute top-8 right-1/3 w-48 h-48 rounded-full opacity-15"
          style={{
            border: "2px solid oklch(22% 0.045 255)",
            transform: "rotate(-20deg)",
          }}
        />
        <div
          className="absolute bottom-16 left-1/2 w-32 h-32 rounded-full opacity-10"
          style={{ border: "1.5px solid oklch(22% 0.045 255)" }}
        />
        {/* Diagonal line accent */}
        <svg
          className="absolute top-0 right-0 w-full h-full opacity-5"
          viewBox="0 0 800 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
        >
          <line
            x1="600"
            y1="0"
            x2="800"
            y2="200"
            stroke="#1F2A44"
            strokeWidth="1"
          />
          <line
            x1="700"
            y1="0"
            x2="800"
            y2="100"
            stroke="#1F2A44"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="500"
            x2="200"
            y2="700"
            stroke="#1F2A44"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Avatar */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div
                className="absolute inset-0 -m-8 rounded-full animate-float"
                style={{
                  background:
                    "radial-gradient(circle, oklch(81% 0.05 75 / 0.35) 0%, oklch(68% 0.025 230 / 0.15) 60%, transparent 80%)",
                }}
              />
              <div
                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden"
                style={{
                  border: "4px solid oklch(81% 0.05 75 / 0.5)",
                  boxShadow:
                    "0 0 0 8px oklch(81% 0.05 75 / 0.15), 0 16px 48px oklch(22% 0.045 255 / 0.15)",
                }}
              >
                <img
                  src="/assets/uploads/profile-019d377d-fedb-715e-b7de-46bda6e208f8-1.jpg"
                  alt="Chintan Mistri"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 bg-white px-3 py-2 rounded-xl shadow-lg flex items-center gap-2"
                style={{ border: "1px solid oklch(92.5% 0.012 250)" }}
              >
                <GraduationCap
                  size={16}
                  style={{ color: "oklch(22% 0.045 255)" }}
                />
                <span className="text-xs font-600 text-foreground">
                  M.Com Student
                </span>
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <p
                className="text-sm font-600 tracking-widest uppercase animate-fade-in"
                style={{
                  color: "oklch(68% 0.025 230)",
                  animationDelay: "0.1s",
                }}
              >
                👋 Hello, I am
              </p>
              <h1
                className="text-5xl lg:text-6xl font-800 leading-tight animate-fade-up"
                style={{
                  color: "oklch(16% 0.035 255)",
                  animationDelay: "0.2s",
                }}
              >
                Chintan
                <br />
                <span style={{ color: "oklch(22% 0.045 255)" }}>Mistri</span>
              </h1>
            </div>

            <div
              className="animate-fade-up"
              style={{ animationDelay: "0.35s" }}
            >
              <p
                className="text-lg font-700 mb-1"
                style={{ color: "oklch(22% 0.045 255)" }}
              >
                Commerce Postgraduate Student
              </p>
              <p
                className="text-base"
                style={{ color: "oklch(50% 0.018 255)" }}
              >
                Detail-oriented M.Com student specializing in{" "}
                <strong style={{ color: "oklch(22% 0.045 255)" }}>
                  Accounting
                </strong>{" "}
                and{" "}
                <strong style={{ color: "oklch(22% 0.045 255)" }}>
                  Office Administration
                </strong>
                .
              </p>
            </div>

            <ul
              className="space-y-2 animate-fade-up"
              style={{ animationDelay: "0.45s" }}
            >
              {[
                "Tally ERP 9 Certified Professional",
                "Advanced MS Excel & Data Entry",
                "Trilingual: English, Gujarati, Hindi",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "oklch(50% 0.018 255)" }}
                >
                  <ChevronRight
                    size={14}
                    style={{ color: "oklch(81% 0.05 75)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div
              className="flex flex-wrap gap-4 pt-2 animate-fade-up"
              style={{ animationDelay: "0.55s" }}
            >
              <a
                href="#contact"
                className="btn-primary"
                data-ocid="hero.primary_button"
              >
                <Mail size={16} />
                Get In Touch
              </a>
              <a
                href="#summary"
                className="btn-secondary"
                data-ocid="hero.secondary_button"
              >
                <BookOpen size={16} />
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Header ----------
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "oklch(100% 0 0 / 0.95)"
          : "oklch(100% 0 0 / 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid oklch(92.5% 0.012 250)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 20px oklch(22% 0.045 255 / 0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="font-800 text-lg tracking-wide"
            style={{ color: "oklch(16% 0.035 255)" }}
            data-ocid="nav.link"
          >
            CHINTAN MISTRI
          </a>

          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              type="button"
              className="btn-primary text-sm"
              data-ocid="nav.primary_button"
              onClick={() =>
                window.open(
                  "/assets/uploads/chintan-mistri-flowcv-resume-20260208-019d377a-35fd-722c-a449-2309ef6da6b7-1.pdf",
                  "_blank",
                )
              }
            >
              <Download size={14} />
              Download CV
            </button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg"
            style={{ color: "oklch(16% 0.035 255)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden py-4 px-6 border-t"
          style={{
            background: "oklch(100% 0 0 / 0.98)",
            borderColor: "oklch(92.5% 0.012 250)",
          }}
        >
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-base"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              className="btn-primary mt-2 w-full justify-center"
              data-ocid="nav.primary_button"
              onClick={() =>
                window.open(
                  "/assets/uploads/chintan-mistri-flowcv-resume-20260208-019d377a-35fd-722c-a449-2309ef6da6b7-1.pdf",
                  "_blank",
                )
              }
            >
              <Download size={14} />
              Download CV
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

// ---------- Professional Summary ----------
function SummarySection() {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal">
      <div className="portfolio-card h-full" id="summary">
        <p className="section-title">
          <BookOpen size={14} />
          Professional Summary
        </p>
        <h2
          className="text-2xl font-700 mb-4"
          style={{ color: "oklch(16% 0.035 255)" }}
        >
          Building a Career in Commerce
        </h2>
        <p
          className="text-base leading-relaxed mb-6"
          style={{ color: "oklch(50% 0.018 255)" }}
        >
          Detail-oriented Commerce student with a strong foundation in
          Accounting and Office Administration. Currently pursuing M.Com at
          Navgujarat Commerce College, Gandhinagar, committed to excellence in
          financial management and data accuracy.
        </p>
        <div className="space-y-3">
          {[
            {
              icon: <Code2 size={16} />,
              title: "Accounting",
              desc: "Tally ERP 9/Prime, Journal Entries, and GST basics",
            },
            {
              icon: <Star size={16} />,
              title: "Data Management",
              desc: "MS Excel, typing (English & Gujarati), accurate data entry",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 p-3 rounded-xl"
              style={{ background: "oklch(96.8% 0.008 250)" }}
            >
              <div
                className="mt-0.5 p-1.5 rounded-lg"
                style={{
                  background: "oklch(22% 0.045 255 / 0.1)",
                  color: "oklch(22% 0.045 255)",
                }}
              >
                {item.icon}
              </div>
              <div>
                <p
                  className="font-600 text-sm"
                  style={{ color: "oklch(16% 0.035 255)" }}
                >
                  {item.title}
                </p>
                <p
                  className="text-sm"
                  style={{ color: "oklch(50% 0.018 255)" }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------- Education Timeline ----------
function EducationSection() {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal reveal-delay-1">
      <div className="portfolio-card h-full" id="education">
        <p className="section-title">
          <GraduationCap size={14} />
          Education
        </p>
        <div className="space-y-0">
          {EDUCATION.map((edu, idx) => (
            <div
              key={edu.degree}
              className="timeline-item flex gap-4 pb-6 last:pb-0"
            >
              <div className="flex flex-col items-center">
                <div className="timeline-node mt-1" />
                {idx < EDUCATION.length - 1 && (
                  <div
                    className="w-px flex-1 mt-2"
                    style={{
                      background: "oklch(92.5% 0.012 250)",
                      minHeight: "2rem",
                    }}
                  />
                )}
              </div>
              <div className="flex-1 pb-2">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <h3
                    className="font-700 text-sm"
                    style={{ color: "oklch(16% 0.035 255)" }}
                  >
                    {edu.degree}
                  </h3>
                  <span
                    className="text-xs font-600 px-2 py-0.5 rounded-full flex-shrink-0"
                    style={{
                      background:
                        edu.status === "pursuing"
                          ? "oklch(81% 0.05 75 / 0.25)"
                          : "oklch(22% 0.045 255 / 0.1)",
                      color:
                        edu.status === "pursuing"
                          ? "oklch(50% 0.07 75)"
                          : "oklch(22% 0.045 255)",
                    }}
                  >
                    {edu.year}
                  </span>
                </div>
                {edu.field && (
                  <p
                    className="text-xs font-500 mt-0.5"
                    style={{ color: "oklch(68% 0.025 230)" }}
                  >
                    {edu.field}
                  </p>
                )}
                <p
                  className="text-xs mt-1"
                  style={{ color: "oklch(50% 0.018 255)" }}
                >
                  {edu.institute}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------- Technical Skills ----------
function SkillsSection() {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" id="skills">
      <div className="portfolio-card h-full">
        <p className="section-title">
          <Code2 size={14} />
          Technical Skills
        </p>
        <div className="space-y-5">
          {SKILLS.map((group) => (
            <div key={group.category}>
              <p
                className="text-xs font-700 uppercase tracking-wider mb-2"
                style={{ color: "oklch(68% 0.025 230)" }}
              >
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <div key={skill} className="skill-tile">
                    <span
                      className="text-sm font-500"
                      style={{ color: "oklch(22% 0.045 255)" }}
                    >
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-6 pt-6"
          style={{ borderTop: "1px solid oklch(92.5% 0.012 250)" }}
        >
          <p className="section-title">
            <Languages size={14} />
            Languages
          </p>
          <div className="flex flex-wrap gap-3">
            {LANGUAGES.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-2 px-3 py-2 rounded-xl"
                style={{
                  background: "oklch(96.8% 0.008 250)",
                  border: "1px solid oklch(92.5% 0.012 250)",
                }}
              >
                <span
                  className="text-sm font-600"
                  style={{ color: "oklch(16% 0.035 255)" }}
                >
                  {lang.name}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "oklch(50% 0.018 255)" }}
                >
                  · {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Certifications ----------
function CertificationsSection() {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal reveal-delay-1">
      <div className="portfolio-card h-full">
        <p className="section-title">
          <Award size={14} />
          Certifications
        </p>
        <div className="space-y-3">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.name} className="cert-badge">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "oklch(81% 0.05 75 / 0.25)",
                  color: "oklch(50% 0.07 75)",
                }}
              >
                <Award size={20} />
              </div>
              <div>
                <p
                  className="font-600 text-sm"
                  style={{ color: "oklch(16% 0.035 255)" }}
                >
                  {cert.name}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "oklch(50% 0.018 255)" }}
                >
                  Issued by {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-6 pt-6"
          style={{ borderTop: "1px solid oklch(92.5% 0.012 250)" }}
          id="achievements"
        >
          <p className="section-title">
            <Trophy size={14} />
            Achievements
          </p>
          <div
            className="p-4 rounded-xl flex items-start gap-3"
            style={{
              background:
                "linear-gradient(135deg, oklch(22% 0.045 255 / 0.06) 0%, oklch(68% 0.025 230 / 0.08) 100%)",
              border: "1px solid oklch(22% 0.045 255 / 0.12)",
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "oklch(81% 0.05 75 / 0.3)",
                color: "oklch(50% 0.07 75)",
              }}
            >
              <Trophy size={20} />
            </div>
            <div>
              <p
                className="font-700 text-sm"
                style={{ color: "oklch(16% 0.035 255)" }}
              >
                Top Scorer
              </p>
              <p className="text-sm" style={{ color: "oklch(50% 0.018 255)" }}>
                Wonderbrine Quiz Competition
              </p>
              <span
                className="inline-block mt-1 text-xs font-600 px-2 py-0.5 rounded-full"
                style={{
                  background: "oklch(81% 0.05 75 / 0.3)",
                  color: "oklch(45% 0.07 75)",
                }}
              >
                City Level
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Contact ----------
function ContactSection() {
  const ref = useReveal();
  const contacts = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "chintanmistry707@gmail.com",
      href: "mailto:chintanmistry707@gmail.com",
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      value: "linkedin.com/in/chintanmistri07",
      href: "https://www.linkedin.com/in/chintanmistri07",
    },
    {
      icon: <MapPin size={18} />,
      label: "Location",
      value: "Gandhinagar, Gujarat, India 382610",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="text-center mb-12">
            <p
              className="text-sm font-700 tracking-widest uppercase mb-2"
              style={{ color: "oklch(68% 0.025 230)" }}
            >
              Get In Touch
            </p>
            <h2
              className="text-3xl font-800"
              style={{ color: "oklch(16% 0.035 255)" }}
            >
              Contact Me
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contacts.map((contact) => (
              <div
                key={contact.label}
                className="portfolio-card text-center"
                data-ocid="contact.card"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3"
                  style={{
                    background: "oklch(22% 0.045 255 / 0.08)",
                    color: "oklch(22% 0.045 255)",
                  }}
                >
                  {contact.icon}
                </div>
                <p
                  className="text-xs font-700 uppercase tracking-wider mb-1"
                  style={{ color: "oklch(68% 0.025 230)" }}
                >
                  {contact.label}
                </p>
                {contact.href ? (
                  <a
                    href={contact.href}
                    className="text-sm font-500 break-all hover:underline"
                    style={{ color: "oklch(22% 0.045 255)" }}
                    target={contact.label === "LinkedIn" ? "_blank" : undefined}
                    rel={
                      contact.label === "LinkedIn"
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p
                    className="text-sm font-500"
                    style={{ color: "oklch(22% 0.045 255)" }}
                  >
                    {contact.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(window.location.hostname);
  return (
    <footer
      className="py-8 px-6 lg:px-12 text-center"
      style={{
        background: "oklch(16% 0.035 255)",
        color: "oklch(70% 0.01 250)",
      }}
    >
      <p className="text-sm">
        © {year} Chintan Mistri. Built with ❤️ using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-80"
          style={{ color: "oklch(81% 0.05 75)" }}
        >
          caffeine.ai
        </a>
      </p>
    </footer>
  );
}

// ---------- App ----------
export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <section className="py-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <SummarySection />
              <EducationSection />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SkillsSection />
              <CertificationsSection />
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
