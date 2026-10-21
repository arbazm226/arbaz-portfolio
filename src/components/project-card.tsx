import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card-art" aria-hidden="true">
        <div className="project-art-grid" />
        <span className="project-art-icon">
          <BriefcaseBusiness size={21} strokeWidth={1.5} />
        </span>
        <span className="project-art-label">Portfolio concept</span>
      </div>
      <div className="project-card-content">
        <div className="project-card-meta">
          <span className="category-label">{project.category}</span>
          <span className="status-label">{project.status}</span>
        </div>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.summary}</p>
        <ul className="tag-list" aria-label="Tools and skills">
          {project.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        <Link className="project-link" href={`/projects/${project.slug}`}>
          View project details <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
