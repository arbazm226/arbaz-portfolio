import { Award, GraduationCap } from "lucide-react";
import { PageIntro, SectionHeading } from "@/components/ui";
import { development, education } from "@/data/content";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Education & Development",
  "Education, ongoing qualifications, and professional development listed in Arbaz Malik's supplied portfolio brief.",
  "/education",
);

export default function EducationPage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <PageIntro
          eyebrow="Education & development"
          title="A foundation in finance. Continued learning."
          description="Formal qualifications and professional development are distinguished by status; credential links and issue dates can be added when verified."
        />
        <section className="page-section">
          <SectionHeading eyebrow="Education" title="Academic qualifications." />
          <div className="qualification-grid">
            {education.map((item) => (
              <article className="qualification-card" key={item.name}>
                <span className="icon-tile"><GraduationCap size={20} aria-hidden="true" /></span>
                <p className="eyebrow">{item.dates}</p>
                <h2>{item.name}</h2>
                <p>{item.institution}</p>
                <span className="qualification-location">{item.location}</span>
              </article>
            ))}
          </div>
        </section>
        <section className="page-section">
          <SectionHeading
            eyebrow="Professional development"
            title="Courses and continued study."
            description="Items are labelled according to the status stated in the supplied brief; unverified accreditation is not implied."
          />
          <div className="development-list">
            {development.map((item) => (
              <article className="development-item" key={item.name}>
                <span className="development-icon"><Award size={17} aria-hidden="true" /></span>
                <div className="development-main">
                  <h3>{item.name}</h3>
                  <p>{item.provider}</p>
                  {item.detail ? <p className="development-detail">{item.detail}</p> : null}
                </div>
                <span className="development-status">{item.status}</span>
              </article>
            ))}
          </div>
          <p className="content-note">
            Credential IDs, certificate images, and verification links were not supplied.
          </p>
        </section>
      </div>
    </div>
  );
}
