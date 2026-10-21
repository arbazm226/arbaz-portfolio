import { PageIntro } from "@/components/ui";
import { ProjectGallery } from "@/components/project-gallery";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Projects",
  "Explore proposed portfolio concepts in financial analysis, forecasting, business intelligence, and academic research.",
  "/projects",
);

export default function ProjectsPage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <PageIntro
          eyebrow="Portfolio"
          title="Analysis worth exploring."
          description="A foundation for future portfolio work across financial analysis, forecasting, business intelligence, and research."
        />
        <section className="page-section projects-section">
          <ProjectGallery />
        </section>
      </div>
    </div>
  );
}
