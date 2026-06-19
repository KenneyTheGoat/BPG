import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import { EnquiryForm } from './EnquiryForm.jsx';

export function DivisionPageLayout({ division }) {
  const Icon = division.icon;

  return (
    <main className="page-transition">
      <section className="division-page-hero section-dark">
        <div className="hero-bg" aria-hidden="true" />
        <div className="section-inner division-page-grid">
          <div className="division-page-copy reveal">
            <Link className="back-link" to="/">
              <ArrowLeft size={17} aria-hidden="true" />
              Back to BPG
            </Link>
            <p className="eyebrow">
              <Icon size={16} aria-hidden="true" />
              Division
            </p>
            <h1>{division.name}</h1>
            <p className="hero-subtitle">{division.tagline}</p>
          </div>
          <div className="division-page-visual reveal" style={{ animationDelay: '120ms' }}>
            <div
              className="division-page-image"
              style={{
                backgroundImage: 'url(/assets/bpg-division-panels.png)',
                backgroundPosition: division.imagePosition,
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <section className="section-light division-detail-section">
        <div className="section-inner detail-grid">
          <div className="detail-intro reveal">
            <p className="section-label">What We Do</p>
            <h2>Focused capabilities for real operational progress.</h2>
          </div>
          <ul className="service-list reveal">
            {division.services.map((service) => (
              <li key={service}>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-dark use-case-section">
        <div className="section-inner">
          <div className="section-heading reveal">
            <p className="eyebrow">Use Cases</p>
            <h2>Business examples</h2>
          </div>
          <div className="use-case-grid">
            {division.useCases.map((useCase, index) => (
              <article className="use-case-card reveal" style={{ animationDelay: `${index * 90}ms` }} key={useCase.problem}>
                <div>
                  <span>Problem</span>
                  <p>{useCase.problem}</p>
                </div>
                <ChevronRight size={18} aria-hidden="true" />
                <div>
                  <span>Solution</span>
                  <p>{useCase.solution}</p>
                </div>
                <ChevronRight size={18} aria-hidden="true" />
                <div>
                  <span>Outcome</span>
                  <p>{useCase.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light capabilities-section">
        <div className="section-inner detail-grid">
          <div className="detail-intro reveal">
            <p className="section-label">Approach</p>
            <h2>Technology and methodology shaped around the work.</h2>
          </div>
          <div className="capability-list reveal">
            {division.capabilities.map((capability) => (
              <p key={capability}>{capability}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark enquiry-section">
        <div className="section-inner enquiry-grid">
          <div className="enquiry-copy reveal">
            <p className="eyebrow">Enquiry</p>
            <h2>Start a conversation with {division.name}.</h2>
            <p>
              Send a focused enquiry and the message will open in your email client with the division subject already
              prepared.
            </p>
          </div>
          <div className="enquiry-panel reveal">
            <EnquiryForm divisionName={division.name} emailSubject={division.emailSubject} />
          </div>
        </div>
      </section>
    </main>
  );
}
