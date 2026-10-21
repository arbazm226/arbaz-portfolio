import { BriefcaseBusiness } from "lucide-react";
import { PageIntro, SectionHeading } from "@/components/ui";
import { experience } from "@/data/content";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Experience",
  "Professional finance experience at Siemens Energy and Fauji Power Company Limited, including reporting, forecasting, SAP data, and controls.",
  "/experience",
);

export default function ExperiencePage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <PageIntro
          eyebrow="Experience"
          title="Finance experience in practice."
          description="A chronological view of finance placements and responsibilities, presented without unsupported performance claims."
        />
        <section className="page-section">
          <SectionHeading
            eyebrow="Professional timeline"
            title="Roles and responsibilities."
          />
          <div className="experience-list">
            {experience.map((role, index) => (
              <article className="experience-card" key={role.company}>
                <div className="experience-card-marker">
                  <span><BriefcaseBusiness size={18} aria-hidden="true" /></span>
                  {index < experience.length - 1 ? <i aria-hidden="true" /> : null}
                </div>
                <div className="experience-card-main">
                  <div className="experience-header">
                    <div>
                      <p className="eyebrow">{role.dates} <span aria-hidden="true">·</span> {role.location}</p>
                      <h2>{role.title}</h2>
                      <p className="experience-company">{role.company}</p>
                    </div>
                    <span className="experience-index">0{index + 1}</span>
                  </div>
                  {role.summary ? <p className="experience-summary">{role.summary}</p> : null}
                  <ul className="responsibility-list">
                    {role.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                  <ul className="tag-list" aria-label="Skills and areas">
                    {role.skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <p className="content-note">
            Dates and role details are taken from the supplied brief. Please verify against the approved CV before publishing.
          </p>
        </section>
      </div>
    </div>
  );
}
