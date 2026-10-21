"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/content";
import { CvButton } from "@/components/ui";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="wordmark"
          href="/"
          aria-label="Arbaz Malik, home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="wordmark-mark" aria-hidden="true">
            AM
          </span>
          <span>Arbaz Malik</span>
        </Link>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav
          id="primary-navigation"
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          <div className="navigation-links">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(`${item.href}/`))
                    ? "page"
                    : undefined
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <CvButton className="nav-cv-button" />
        </nav>
      </div>
    </header>
  );
}
