import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { navigation, profile } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link className="footer-name" href="/">
              {profile.name}
            </Link>
            <p>{profile.headline}</p>
            <p className="footer-location">{profile.location} · Finance · Forecasting</p>
          </div>
          <nav className="footer-navigation" aria-label="Footer navigation">
            {navigation.slice(1).map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="footer-socials">
            <a
              href={profile.linkedIn}
              target="_blank"
              rel="noreferrer"
              aria-label="Arbaz Malik on LinkedIn (opens in a new tab)"
            >
              <ArrowUpRight size={17} aria-hidden="true" />
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>
              <Mail size={17} aria-hidden="true" />
              Email Arbaz
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Arbaz Malik</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
