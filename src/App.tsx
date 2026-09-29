import { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Menu, Linkedin, X, MapPin, PenTool, Search, Sparkles, Layers, BookOpen, Wrench, ArrowUpRight } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'summary', label: 'Summary' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Selected Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'publications', label: 'Publications' },
  { id: 'contact', label: 'Contact' }
];

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const { id } of navItems) {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Product Designer with 6+ years of experience designing consumer, SaaS, and enterprise products across healthcare, commerce, and Human-AI experiences. Experienced in simplifying complex workflows through user research, interaction design, prototyping, experimentation, and scalable design systems. Designed experiences used by 2.4M+ users and partnered closely with product, engineering, research, and AI/ML teams to turn user insights into measurable product improvements.";

  const experience = [
    {
      company: "Apple",
      role: "UX Researcher Moderator (Contract)",
      location: "Cupertino, CA",
      dates: "Feb 2026 – Present",
      highlights: [
        "Evaluate multimodal AI and LLM experiences with Apple’s AI/ML team, identifying usability gaps and interaction breakdowns across complex user journeys and translating findings into actionable product insights.",
        "Partner with research stakeholders to define study protocols and evaluation frameworks for multimodal AI experiences, capturing consistent behavioral and usability insights across studies.",
        "Identify interaction issues during research sessions, synthesize reproducible findings, and collaborate with engineering and research teams to inform iterative improvements to AI experiences."
      ]
    },
    {
      company: "Practo Technologies",
      role: "Product Designer",
      location: "Bengaluru, India",
      dates: "Apr 2021 – May 2023",
      highlights: [
        "Redesigned medicine and diagnostics experiences serving 2.4M+ users, improving prescription ordering, appointment booking, payment flows, and key conversion points across the customer journey.",
        "Identified purchase-funnel friction across search, listings, product detail, and checkout experiences, then facilitated cross-functional workshops to align teams on design improvements, contributing to a 22% increase in average order value while maintaining a 4.2/5 CSAT score.",
        "Built and scaled a centralized component library for medicine e-commerce and diagnostics order tracking, standardizing reusable UI components and improving design consistency across product workflows.",
        "Developed and evaluated A/B tests for map-based versus form-based address selection, identifying checkout friction and informing product decisions through behavioral data and usability findings.",
        "Established design QA processes across product design, engineering, and quality assurance teams, improving UI implementation accuracy and reducing design-to-development rework during product releases."
      ]
    },
    {
      company: "Practo Technologies",
      role: "Associate Product Designer",
      location: "Bengaluru, India",
      dates: "Dec 2019 – Apr 2021",
      highlights: [
        "Redesigned doctor onboarding and clinic management for Practo Prime, introducing self-service workflows that cut provider activation time from 4–6 days to under 4 hours.",
        "Designed B2B2C corporate health plan dashboards for HR administrators and employees, improving benefits discovery, claims tracking, and utilization visibility while driving 15–20% quarter-over-quarter growth in plan utilization.",
        "Launched a provider earnings and payout dashboard serving 400K+ users, enabling self-service financial reconciliation and reducing reliance on sales and operations teams for payout-related queries.",
        "Improved accessibility across web and mobile products using WCAG 2.1 AA standards, strengthening color contrast, keyboard navigation, screen reader compatibility, and inclusive interaction patterns."
      ]
    },
    {
      company: "Novaders LLP",
      role: "UX Designer",
      location: "Bengaluru, India",
      dates: "Nov 2017 – Oct 2019",
      highlights: [
        "Led UX design across HR, EdTech, inventory management, and oil & gas products, translating complex SaaS and B2B workflows into intuitive user journeys, information architecture, and interaction design.",
        "Redesigned navigation, information architecture, and visual design for a selfie-based attendance platform across mobile and admin interfaces, increasing user engagement by 20% and reducing complaints by 50%.",
        "Designed an accounting platform from concept through high-fidelity UI, simplifying invoicing, expense management, financial reporting, and data-intensive workflows for individual users and business teams.",
        "Created the company’s first design system, defining reusable UI components, interaction patterns, and design documentation that improved design-engineering collaboration and supported scalable product development."
      ]
    }
  ];

  const selectedWork = [
    {
      category: "Healthcare Commerce",
      title: "Medicine & Diagnostics Redesign",
      org: "Practo",
      metric: "+22%",
      metricLabel: "Average order value",
      description: "Redesigned prescription ordering, appointment booking, payment, and checkout flows for 2.4M+ users — aligning teams through cross-functional workshops while holding a 4.2/5 CSAT."
    },
    {
      category: "Provider Experience",
      title: "Practo Prime Self-Service Onboarding",
      org: "Practo",
      metric: "4–6 days → <4 hrs",
      metricLabel: "Provider activation time",
      description: "Reimagined doctor onboarding and clinic management with self-service workflows, removing operational bottlenecks from provider activation."
    },
    {
      category: "Enterprise Dashboards",
      title: "Provider Earnings & Payouts",
      org: "Practo",
      metric: "400K+",
      metricLabel: "Users served",
      description: "Launched a payout dashboard enabling self-service financial reconciliation and reducing reliance on sales and operations teams for payout queries."
    },
    {
      category: "B2B2C Health Benefits",
      title: "Corporate Health Plan Dashboards",
      org: "Practo",
      metric: "15–20%",
      metricLabel: "QoQ growth in plan utilization",
      description: "Designed dashboards for HR administrators and employees that improved benefits discovery, claims tracking, and utilization visibility."
    },
    {
      category: "Mobile & Admin",
      title: "Selfie-Based Attendance Platform",
      org: "Novaders",
      metric: "−50%",
      metricLabel: "User complaints · +20% engagement",
      description: "Redesigned navigation, information architecture, and visual design across mobile and admin interfaces."
    },
    {
      category: "Human-AI Interaction",
      title: "Multimodal AI & LLM Evaluation",
      org: "Apple",
      metric: "AI/ML",
      metricLabel: "Research partnership",
      description: "Defining study protocols and evaluation frameworks for multimodal AI experiences, surfacing interaction breakdowns and reproducible findings for engineering and research teams."
    }
  ];

  const skillCategories = [
    {
      icon: PenTool,
      title: 'Product & UX Design',
      skills: ['Product Design', 'UX Design', 'UI Design', 'Interaction Design', 'Wireframing', 'Rapid Prototyping', 'High-Fidelity UI', 'User Flows', 'Journey Mapping', 'Information Architecture', 'Design Systems', 'Service Design', 'Enterprise UX', 'Admin Platforms', 'Data Visualization', 'Dashboard Design', 'Conversational UX']
    },
    {
      icon: Sparkles,
      title: 'AI & Emerging Experience Design',
      skills: ['Human-AI Interaction', 'Multimodal Interaction Design', 'LLM Experience Design', 'Prompt Design', 'Immersive Design', 'VR Design']
    },
    {
      icon: Search,
      title: 'UX Research & Optimization',
      skills: ['User Research', 'User Interviews', 'Surveys', 'Usability Testing', 'A/B Testing', 'Thematic Analysis', 'Accessibility', 'WCAG 2.1 AA', 'Inclusive Design']
    },
    {
      icon: Wrench,
      title: 'Tools',
      skills: ['Figma', 'Figma Make', 'Claude', 'Stitch', 'Adobe Creative Suite', 'Miro', 'Google Analytics', 'Dovetail', 'Notion', 'Airtable']
    }
  ];

  const education = [
    {
      school: "San Jose State University",
      degree: "M.S. in Human-Computer Interaction",
      location: "San Jose, CA",
      dates: "Aug 2023 – Dec 2025"
    },
    {
      school: "Global Academy of Technology",
      degree: "Bachelor of Engineering in Computer Science",
      location: "Bengaluru, India",
      dates: "May 2013 – Jun 2017"
    }
  ];

  const publications = [
    { title: "VR Micromobility & Team Collaboration Usability Study", venue: "HFES 2025", status: "Published" },
    { title: "OSHA Wildland Firefighter Tools: Usability Evaluation", venue: "AHFE 2026", status: "Published" },
    { title: "VR-Based Mindfulness: Effectiveness vs. Traditional Practices", venue: "Capstone Research · AHFE 2026", status: "Published" }
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="relative flex items-center justify-center">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center gap-5 lg:gap-8 flex-shrink-0">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden font-display text-black tracking-widest text-sm">MANASA HEGDE</div>
            <button
              className="absolute right-0 md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              {photoFailed ? (
                <div className="w-36 h-36 rounded-full mx-auto mb-6 bg-black text-white flex items-center justify-center border-4 border-brown/30 shadow-lg">
                  <span className="text-5xl font-display tracking-wide">MH</span>
                </div>
              ) : (
                <img
                  src="images/image.png"
                  alt="Manasa Hegde"
                  onError={() => setPhotoFailed(true)}
                  className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
                />
              )}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-black mb-6 tracking-wide leading-tight break-words">
              MANASA HEGDE
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Product Designer · Human-AI Experiences · Healthcare & Enterprise UX
            </div>
            <div className="text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-brown/80 mb-1 flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" /> San Jose, CA
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mt-6 mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('work')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                VIEW SELECTED WORK
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16 text-center">
            {[
              { label: 'EXPERIENCE', value: '6+ Yrs', detail: 'Consumer, SaaS & Enterprise' },
              { label: 'USERS REACHED', value: '2.4M+', detail: 'Medicine & Diagnostics' },
              { label: 'ORDER VALUE', value: '+22%', detail: 'Average Order Value Lift' },
              { label: 'PUBLICATIONS', value: '3', detail: 'HFES & AHFE Research' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Designing clear, inclusive experiences for complex products — from healthcare commerce and enterprise dashboards to multimodal AI.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Layers,
                title: 'Simplifying Complexity',
                detail: 'Turns data-intensive SaaS and B2B workflows into intuitive journeys — cutting provider activation from 4–6 days to under 4 hours and powering dashboards for 400K+ users.'
              },
              {
                icon: Search,
                title: 'Research-Led Decisions',
                detail: 'Grounds design in user research, usability testing, and A/B experiments, translating behavioral data into product decisions that lifted average order value by 22%.'
              },
              {
                icon: Sparkles,
                title: 'Human-AI Experiences',
                detail: 'Evaluates multimodal AI and LLM experiences with Apple’s AI/ML team, backed by an M.S. in HCI and published research in VR and usability.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Product design and UX research across Apple, Practo Technologies, and Novaders.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SELECTED WORK</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Highlights from healthcare, enterprise, and AI product design — measured by outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedWork.map((work, index) => (
              <div
                key={index}
                className="bg-cream p-8 rounded-sm border border-brown/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {work.category}
                  </span>
                  <span className="text-xs tracking-widest text-brown/70 uppercase">{work.org}</span>
                </div>
                <div className="text-3xl font-display text-black mb-1">{work.metric}</div>
                <div className="text-xs tracking-widest text-brown/70 uppercase mb-6">{work.metricLabel}</div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {work.title}
                </h3>
                <p className="text-brown leading-relaxed font-light text-sm">
                  {work.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in the full case studies?
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 italic"
              >
                Reach out for a portfolio walkthrough.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Product and interaction design, AI experience design, and research expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} · {edu.dates}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">PUBLICATIONS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Human factors research in VR, usability, and safety-critical tools.
            </p>
          </div>
          <div className="space-y-8">
            {publications.map((paper, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10 flex items-start gap-6">
                <div className="w-12 h-12 bg-black flex-shrink-0 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display text-black tracking-wide mb-2">{paper.title}</h3>
                  <p className="text-brown font-light">
                    {paper.venue} · <span className="font-medium">{paper.status}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-8 tracking-wide leading-tight break-words">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's talk about product design, Human-AI experiences, or UX research opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+14088297150"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (408) 829-7150
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:manasahegde225@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                manasahegde225@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/hegde-manasa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors inline-flex items-center"
              >
                LinkedIn <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-brown mr-6" />
              <span className="text-white/80 font-light">San Jose, CA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © {new Date().getFullYear()} Manasa Hegde · Product Design & Human-AI Experiences.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
