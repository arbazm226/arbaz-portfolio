import { BookOpenCheck, FileQuestion, Lightbulb } from "lucide-react";
import { PageIntro, SectionHeading } from "@/components/ui";
import { profile } from "@/data/content";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Research",
  "An overview of Arbaz Malik's MBA dissertation topic on employee perceptions of staff engagement and productivity in finance roles.",
  "/research",
);

export default function ResearchPage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <PageIntro
          eyebrow="Academic research · MBA dissertation"
          title={profile.researchTitle}
          description="A research topic examining behavioural factors associated with productivity within finance roles."
        />
        <section className="research-overview">
          <div className="research-overview-icon"><BookOpenCheck size={23} aria-hidden="true" /></div>
          <div>
            <p className="eyebrow">Research overview</p>
            <h2>People, engagement, and productivity in finance.</h2>
            <p>
              The dissertation topic focuses on employee perceptions of staff
              engagement and productivity in finance roles. The available brief
              describes an interest in behavioural factors, applied research,
              structured analysis, and practical relevance to finance
              management.
            </p>
          </div>
        </section>
        <section className="page-section">
          <SectionHeading
            eyebrow="Scope and publication"
            title="Only approved, supported details belong here."
            description="Research methods, participants, findings, quotations, and conclusions are not included without source material and approval."
          />
          <div className="research-cards">
            <article className="research-info-card">
              <span className="icon-tile"><Lightbulb size={19} aria-hidden="true" /></span>
              <h3>Research focus</h3>
              <p>
                Employee perceptions of engagement and productivity within
                finance roles.
              </p>
            </article>
            <article className="research-info-card">
              <span className="icon-tile"><FileQuestion size={19} aria-hidden="true" /></span>
              <h3>Details not published</h3>
              <p>
                Methodology, sample size, findings, quotations, and report
                download are not supplied in the project brief.
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}
