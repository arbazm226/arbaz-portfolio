import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Compass,
  Link2,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { ExpertiseGrid } from "@/components/expertise-grid";
import { HeroArtwork } from "@/components/hero-artwork";
import { JourneyPreview } from "@/components/journey-preview";
import { ProjectCard } from "@/components/project-card";
import { CvButton, SectionHeading } from "@/components/ui";
import { education, experience, profile, projects } from "@/data/content";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Forecasting Specialist | Financial Intelligence",
  "Meet Arbaz Malik, a finance professional focused on forecasting, financial analysis, reporting, SAP data, and business intelligence.",
  "/",
);

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Finance · Forecasting · Business Intelligence
            </p>
            <h1>
              Financial clarity
              <br />
              <span>for better decisions.</span>
            </h1>
            <p className="hero-name">{profile.name}</p>
            <p className="hero-title">{profile.headline}</p>
            <p className="hero-description">{profile.heroSummary}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/projects">
                Explore my work <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <CvButton variant="secondary" />
            </div>
            <div className="hero-location">
              <Compass size={15} aria-hidden="true" />
              <span>{profile.location}</span>
              <span className="location-divider" aria-hidden="true">/</span>
              <span>Finance & analysis</span>
            </div>
          </div>
          <HeroArtwork />
        </div>
        <div className="container hero-bottom-line" aria-hidden="true">
          <span>Professional portfolio</span>
          <span>Accuracy · Structure · Insight</span>
        </div>
      </section>

      <section className="section section-surface" id="expertise">
        <div className="container">
          <div className="section-intro-row">
            <SectionHeading
              eyebrow="What I do"
              title="Finance expertise, grounded in analysis."
              description="A practical foundation across reporting, forecasting, controls, financial data, and stakeholder support."
            />
            <Link className="text-link section-aside-link" href="/about">
              More about my approach <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <ExpertiseGrid />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro-row">
            <SectionHeading
              eyebrow="Selected portfolio"
              title="Ideas for practical financial analysis."
              description="Portfolio concepts are clearly marked as proposed until genuine project materials are available."
            />
            <Link className="text-link section-aside-link" href="/projects">
              Browse all concepts <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="project-grid home-project-grid">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container journey-layout">
          <div className="journey-copy">
            <SectionHeading
              eyebrow="Professional journey"
              title="Experience and education."
              description="Finance placements and academic study have shaped a thoughtful, detail-oriented approach to financial work."
            />
            <div className="journey-summary-card">
              <span className="journey-summary-icon">
                <BriefcaseBusiness size={19} aria-hidden="true" />
              </span>
              <p>
                <strong>{experience[0].company}</strong>
                <span>{experience[0].title} · {experience[0].dates}</span>
              </p>
            </div>
            <p className="journey-footnote">
              {education[0].name} · {education[0].institution}
            </p>
          </div>
          <JourneyPreview />
        </div>
      </section>

      <section className="section">
        <div className="container research-highlight">
          <div className="research-mark" aria-hidden="true">
            <span>R</span>
            <i />
            <i />
            <i />
          </div>
          <div className="research-highlight-copy">
            <p className="eyebrow">Academic research</p>
            <h2>{profile.researchTitle}</h2>
            <p>
              MBA dissertation topic focused on employee perceptions of
              engagement and productivity in finance roles. Further research
              details are not published without approved source material.
            </p>
            <Link className="text-link" href="/research">
              Explore the research overview <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="research-highlight-meta">
            <span>01</span>
            <span>Research focus</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-banner">
          <div className="contact-banner-copy">
            <p className="eyebrow">Start a conversation</p>
            <h2>Let&apos;s connect over finance, forecasting, and data-driven decision-making.</h2>
            <p>Open to relevant professional opportunities and conversations.</p>
          </div>
          <div className="contact-banner-actions">
            <Link className="button button-primary" href="/contact">
              Contact me <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a className="contact-email-link" href={`mailto:${profile.email}`}>
              <Mail size={16} aria-hidden="true" /> {profile.email}
            </a>
            <a
              className="contact-email-link"
              href={profile.linkedIn}
              target="_blank"
              rel="noreferrer"
              aria-label="Connect with Arbaz Malik on LinkedIn (opens in a new tab)"
            >
              <Link2 size={16} aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
