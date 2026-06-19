import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { ArrowRight, ChevronRight, ExternalLink, Mail, Menu, Sparkles } from 'lucide-react';
import { DivisionPageLayout } from './components/DivisionPageLayout.jsx';
import { divisions, getDivisionBySlug } from './data/divisions.js';
import './styles.css';

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const title = location.pathname === '/' ? 'Baloyi Pioneering Group (BPG)' : `${getDivisionBySlug(location.pathname.slice(1))?.name ?? 'BPG'} | Baloyi Pioneering Group`;
    document.title = title;

    if (location.hash) {
      const target = document.querySelector(location.hash);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return null;
}

function Button({ to, children, variant = 'primary' }) {
  return (
    <Link className={`btn btn-${variant}`} to={to}>
      <span>{children}</span>
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const closeMobileNav = () => setMobileNavOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="brand" to="/" aria-label="BPG home" onClick={closeMobileNav}>
          <span className="brand-mark">BPG</span>
          <span>Baloyi Pioneering Group</span>
        </Link>
        <div className="nav-links" aria-label="Section links">
          <Link to="/#about">About</Link>
          <Link to="/#divisions">Divisions</Link>
          <Link to="/#vision">Vision</Link>
          <Link to="/#contact">Contact</Link>
        </div>
        <Link className="nav-contact" to="/#contact">
          Contact Us
        </Link>
        <button
          className="mobile-menu"
          type="button"
          aria-label="Menu"
          aria-expanded={mobileNavOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileNavOpen((open) => !open)}
        >
          <Menu size={22} aria-hidden="true" />
        </button>
      </nav>
      <div id="mobile-navigation" className={`mobile-nav-panel ${mobileNavOpen ? 'is-open' : ''}`}>
        <Link to="/#about" onClick={closeMobileNav}>
          About
        </Link>
        <Link to="/#divisions" onClick={closeMobileNav}>
          Divisions
        </Link>
        <Link to="/#vision" onClick={closeMobileNav}>
          Vision
        </Link>
        <Link to="/#contact" onClick={closeMobileNav}>
          Contact
        </Link>
      </div>
    </header>
  );
}

function DivisionCard({ division, index }) {
  const Icon = division.icon;

  return (
    <article className="division-card reveal" style={{ animationDelay: `${index * 90}ms` }}>
      <div
        className="division-image"
        style={{
          backgroundImage: 'url(/assets/bpg-division-panels.png)',
          backgroundPosition: division.imagePosition,
        }}
        aria-hidden="true"
      />
      <div className="division-content">
        <div className="division-heading">
          <span className="division-icon">
            <Icon size={21} aria-hidden="true" />
          </span>
          <h3>{division.name}</h3>
        </div>
        <p>{division.description}</p>
        <Link className="learn-link" to={division.href} aria-label={`Learn more about ${division.name}`}>
          Learn More
          <ChevronRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

function HomePage() {
  return (
    <main id="top" className="page-transition">
      <section className="hero section-dark">
        <div className="hero-bg" aria-hidden="true" />
        <div className="section-inner hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              Global technology group
            </p>
            <h1>Baloyi Pioneering Group (BPG)</h1>
            <p className="hero-subtitle">Technology. Intelligence. Innovation. Across industries.</p>
            <div className="hero-actions">
              <Button to="/#divisions">Explore Divisions</Button>
              <Button to="/#contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="hero-visual reveal" style={{ animationDelay: '120ms' }}>
            <img src="/assets/bpg-division-panels.png" alt="Technology, AI, healthtech, consulting, and smart city visuals" />
            <div className="metric metric-one">
              <strong>5</strong>
              <span>divisions</span>
            </div>
            <div className="metric metric-two">
              <strong>Global</strong>
              <span>innovation focus</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-light">
        <div className="section-inner split-section">
          <div className="section-label reveal">About BPG</div>
          <div className="section-copy reveal">
            <h2>A unified group for practical technology leadership.</h2>
            <p>
              BPG is a multi-disciplinary group focused on software, AI, healthcare technology, consulting, and property
              innovation. We build, integrate, and advise on systems that help organizations operate with more
              intelligence, speed, and resilience.
            </p>
          </div>
        </div>
      </section>

      <section id="divisions" className="section-dark divisions-section">
        <div className="section-inner">
          <div className="section-heading reveal">
            <p className="eyebrow">Divisions</p>
            <h2>One group. Multiple innovation engines.</h2>
            <p>
              Each BPG division is designed to scale independently while contributing to one integrated technology
              vision.
            </p>
          </div>
          <div className="division-grid">
            {divisions.map((division, index) => (
              <DivisionCard key={division.name} division={division} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="vision" className="section-light vision-section">
        <div className="section-inner vision-grid">
          <div className="vision-copy reveal">
            <p className="eyebrow">Vision</p>
            <h2>Building scalable systems across industries using technology and innovation.</h2>
          </div>
          <p className="vision-text reveal">
            BPG’s long-term ambition is to pioneer durable platforms, intelligent workflows, and connected
            infrastructure that help industries modernize without losing sight of people, performance, and trust.
          </p>
        </div>
      </section>
    </main>
  );
}

function DivisionRoute() {
  const { slug } = useParams();
  const division = getDivisionBySlug(slug);

  if (!division) {
    return (
      <main className="page-transition not-found section-dark">
        <div className="section-inner">
          <p className="eyebrow">BPG</p>
          <h1>Division not found</h1>
          <Button to="/">Return Home</Button>
        </div>
      </main>
    );
  }

  return <DivisionPageLayout division={division} />;
}

function Footer() {
  return (
    <footer id="contact" className="footer section-dark">
      <div className="section-inner footer-grid">
        <div>
          <Link className="brand footer-brand" to="/" aria-label="BPG home">
            <span className="brand-mark">BPG</span>
            <span>Baloyi Pioneering Group</span>
          </Link>
          <p>Technology. Intelligence. Innovation. Across industries.</p>
        </div>
        <div className="footer-links">
          <a href="mailto:contact@bpg.example">
            <Mail size={17} aria-hidden="true" />
            contact@bpg.example
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <ExternalLink size={17} aria-hidden="true" />
            LinkedIn
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            X / Twitter
          </a>
        </div>
      </div>
      <div className="section-inner copyright">© 2026 Baloyi Pioneering Group. All rights reserved.</div>
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<DivisionRoute />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
