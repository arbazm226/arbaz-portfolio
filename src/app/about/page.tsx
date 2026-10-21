import { Check, Compass, ShieldCheck, Sparkles } from "lucide-react";
import { PageIntro, SectionHeading } from "@/components/ui";
import { skills, profile } from "@/data/content";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "About",
  "Learn about Arbaz Malik's finance background, working approach, and core skills in reporting, forecasting, SAP, and analysis.",
  "/about",
);

const approach = [
  {
    icon: Check,
    title: "Accuracy and validation",
    copy: "Check underlying data and reports before drawing conclusions.",
  },
  {
    icon: Compass,
    title: "Structured analysis",
    copy: "Organise financial questions into a clear, traceable analytical process.",
  },
  {
    icon: ShieldCheck,
    title: "Governance awareness",
    copy: "Work with attention to controls, compliance, and documentation.",
  },
  {
    icon: Sparkles,
    title: "Clear communication",
    copy: "Translate financial information into concise, decision-ready reporting.",
  },
];

export default function AboutPage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <PageIntro
          eyebrow="About"
          title="Finance, with context and clarity."
          description="A background in accounting and finance, MBA studies, and practical finance placements inform an analytical and collaborative way of working."
        />

        <section className="about-introduction">
          <div className="about-initials" aria-hidden="true">AM</div>
          <div>
            <p className="eyebrow">Professional introduction</p>
            <h2>{profile.headline}</h2>
            <p>{profile.summary}</p>
            <p>
              My experience spans financial reporting, forecasting, SAP-based
              project data, variance analysis, monthly SOX controls, and
              stakeholder support. My MBA studies with Professional Practice
              at the University of Sunderland build on a
              foundation in Accounting &amp; Finance.
            </p>
          </div>
        </section>

        <section className="page-section">
          <SectionHeading
            eyebrow="Working approach"
            title="Careful with the detail. Clear on the outcome."
            description="A set of practical capabilities applied to financial analysis and reporting."
          />
          <div className="approach-grid">
            {approach.map((item) => {
              const Icon = item.icon;
              return (
                <article className="approach-card" key={item.title}>
                  <span className="icon-tile"><Icon size={19} aria-hidden="true" /></span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="page-section">
          <SectionHeading
            eyebrow="Core skills"
            title="A practical analytical toolkit."
            description="Skills listed in the supplied project brief, without unsupported proficiency ratings."
          />
          <ul className="skills-grid">
            {skills.map((skill) => (
              <li key={skill}><Check size={16} aria-hidden="true" />{skill}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
