import { ArrowUpRight, Link2, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { CvButton, PageIntro } from "@/components/ui";
import { profile } from "@/data/content";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Contact",
  "Contact Arbaz Malik by email or LinkedIn about relevant finance, forecasting, and business intelligence opportunities.",
  "/contact",
);

export default function ContactPage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <PageIntro
          eyebrow="Contact"
          title="Let's start a conversation."
          description="Get in touch about relevant professional opportunities and conversations in finance, forecasting, and data-driven decision-making."
        />
        <div className="contact-layout">
          <aside className="contact-sidebar">
            <p className="eyebrow">Contact details</p>
            <a className="contact-detail-link" href={`mailto:${profile.email}`}>
              <span className="contact-detail-icon"><Mail size={18} aria-hidden="true" /></span>
              <span><small>Email</small><strong>{profile.email}</strong></span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              className="contact-detail-link"
              href={profile.linkedIn}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <span className="contact-detail-icon"><Link2 size={18} aria-hidden="true" /></span>
              <span><small>LinkedIn</small><strong>Connect professionally</strong></span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <div className="contact-detail-link contact-location">
              <span className="contact-detail-icon"><MapPin size={18} aria-hidden="true" /></span>
              <span><small>Location</small><strong>{profile.location}</strong></span>
            </div>
            <div className="contact-cv">
              <p>Would you like a copy of my CV?</p>
              <CvButton variant="secondary" />
            </div>
            <p className="contact-privacy">
              No phone number is published. Messages submitted here are not stored
              by this website.
            </p>
          </aside>
          <section className="contact-form-panel" aria-labelledby="contact-form-title">
            <p className="eyebrow">Send a message</p>
            <h2 id="contact-form-title">What would you like to discuss?</h2>
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  );
}
