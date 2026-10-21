import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import Link from "next/link";
import { education, experience } from "@/data/content";

export function JourneyPreview() {
  const entries = [
    {
      icon: BriefcaseBusiness,
      label: "Professional experience",
      title: experience[0].title,
      organization: experience[0].company,
      dates: experience[0].dates,
    },
    {
      icon: GraduationCap,
      label: "Education",
      title: education[0].name,
      organization: education[0].institution,
      dates: education[0].dates,
    },
    {
      icon: BriefcaseBusiness,
      label: "Professional experience",
      title: experience[1].title,
      organization: experience[1].company,
      dates: experience[1].dates,
    },
    {
      icon: GraduationCap,
      label: "Education",
      title: education[1].name,
      organization: education[1].institution,
      dates: education[1].dates,
    },
  ];

  return (
    <div className="journey-preview">
      {entries.map((entry) => {
        const Icon = entry.icon;
        return (
          <article className="journey-item" key={`${entry.title}-${entry.organization}`}>
            <span className="journey-icon">
              <Icon size={18} aria-hidden="true" />
            </span>
            <div>
              <p className="journey-type">{entry.label}</p>
              <h3>{entry.title}</h3>
              <p className="journey-organization">{entry.organization}</p>
            </div>
            <span className="journey-date">{entry.dates}</span>
          </article>
        );
      })}
      <Link className="journey-more" href="/experience">
        Explore experience and education <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
