"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import { profile } from "@/data/content";

interface ContactFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const fields: ContactFields = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };
    const body = [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      "",
      fields.message,
    ].join("\n");
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(fields.subject)}&body=${encodeURIComponent(body)}`;

    setStatus(
      "Your email application should open with the message prepared. It has not been sent by this website; please review and send it in your email application.",
    );
    window.location.href = mailto;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="contact-name">Name <span aria-hidden="true">*</span></label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
          />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">Email <span aria-hidden="true">*</span></label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="contact-subject">Subject <span aria-hidden="true">*</span></label>
        <input id="contact-subject" name="subject" required maxLength={160} />
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">Message <span aria-hidden="true">*</span></label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          maxLength={5000}
        />
      </div>
      <p className="form-note">
        This form opens your email application. Your message is not sent or stored
        by this website.
      </p>
      <button className="button button-primary form-submit" type="submit">
        <Mail size={16} aria-hidden="true" />
        Prepare email
        <ArrowUpRight size={15} aria-hidden="true" />
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
