import { ArrowLeft, ArrowUpRight, CircleHelp } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/ui";
import { projects } from "@/data/content";
import { pageMetadata } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return {};
  return pageMetadata(project.title, project.summary, `/projects/${project.slug}`);
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <div className="page-wrap">
      <div className="container">
        <Link className="back-link" href="/projects">
          <ArrowLeft size={15} aria-hidden="true" /> All portfolio concepts
        </Link>
        <PageIntro
          eyebrow={`${project.category} · ${project.status}`}
          title={project.title}
          description={project.summary}
        />
        <article className="project-detail">
          <div className="project-detail-banner">
            <CircleHelp size={25} aria-hidden="true" />
            <div>
              <p className="eyebrow">Proposed portfolio work</p>
              <h2>This concept is not presented as a completed project.</h2>
            </div>
          </div>
          <div className="project-detail-content">
            <section>
              <p className="eyebrow">Overview</p>
              <p>
                This is a proposed portfolio direction. No completed deliverable,
                employer data, analysis results, or performance findings have
                been supplied for publication.
              </p>
            </section>
            <section>
              <p className="eyebrow">Planned focus</p>
              <ul className="responsibility-list">
                <li>{project.summary}</li>
                <li>Build a clear, reproducible example using authorised or explicitly synthetic materials.</li>
                <li>Document assumptions, methodology, limitations, and findings after the work is completed.</li>
              </ul>
            </section>
            <section>
              <p className="eyebrow">Tools and skills</p>
              <ul className="tag-list">
                {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
            </section>
            <p className="content-note">
              Dataset, assumptions, visualisations, findings, and downloads will
              be added only when verified project materials are available.
            </p>
          </div>
        </article>
        <Link className="text-link project-detail-return" href="/projects">
          Return to portfolio concepts <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
