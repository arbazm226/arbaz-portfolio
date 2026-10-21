import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { CV_FILE_AVAILABLE, profile } from "@/data/content";

interface CvButtonProps {
  className?: string;
  variant?: "primary" | "secondary" | "text";
}

export function CvButton({
  className = "",
  variant = "primary",
}: CvButtonProps) {
  const buttonClass = `button button-${variant}${className ? ` ${className}` : ""}`;

  if (CV_FILE_AVAILABLE) {
    return (
      <a
        className={buttonClass}
        href="/Arbaz-Malik-CV.pdf"
        download="Arbaz-Malik-CV.pdf"
      >
        Download CV <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    );
  }

  return (
    <a
      className={buttonClass}
      href={`mailto:${profile.email}?subject=Request%20for%20CV`}
      aria-label="Request Arbaz Malik's CV by email; a download file is not currently available"
    >
      Request CV <Mail size={15} aria-hidden="true" />
    </a>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link className="text-link" href={href}>
      {children} <ArrowRight size={15} aria-hidden="true" />
    </Link>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-intro-description">{description}</p>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="muted-copy">{description}</p> : null}
    </div>
  );
}
