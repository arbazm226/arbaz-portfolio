"use client";

import { useState } from "react";
import {
  projectCategories,
  projects,
} from "@/data/content";
import { ProjectCard } from "@/components/project-card";

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof projectCategories)[number]>("All");
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <div className="filter-list" role="group" aria-label="Filter projects by category">
        {projectCategories.map((category) => (
          <button
            className={`filter-button${activeCategory === category ? " is-active" : ""}`}
            type="button"
            key={category}
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {filteredProjects.length > 0 ? (
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="empty-state" role="status">
          No projects are currently listed in this category.
        </p>
      )}
      <p className="project-disclaimer">
        These are proposed portfolio projects, not completed client or employer
        deliverables. No employer data or findings are presented.
      </p>
    </>
  );
}
