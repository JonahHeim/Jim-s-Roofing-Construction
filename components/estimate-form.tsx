"use client";

import { FormEvent, useMemo, useState } from "react";
import { contactInfo } from "@/lib/site-data";

type EstimateFormProps = {
  context?: string;
};

export function EstimateForm({ context = "General estimate request" }: EstimateFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [launched, setLaunched] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`${context} from ${name || "website visitor"}`);
    const body = encodeURIComponent(
      [
        `Project type: ${context}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        "Project details:",
        message
      ].join("\n")
    );

    return `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  }, [context, email, message, name, phone]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLaunched(true);
    window.location.href = mailtoHref;
  };

  return (
    <form className="surface-card space-y-5 p-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-foreground" htmlFor="estimate-name">
          Name
        </label>
        <input
          className="field-input"
          id="estimate-name"
          onChange={(event) => setName(event.target.value)}
          required
          type="text"
          value={name}
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground" htmlFor="estimate-email">
            Email
          </label>
          <input
            className="field-input"
            id="estimate-email"
            onChange={(event) => setEmail(event.target.value)}
            required
            type="email"
            value={email}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground" htmlFor="estimate-phone">
            Phone
          </label>
          <input
            className="field-input"
            id="estimate-phone"
            onChange={(event) => setPhone(event.target.value)}
            type="tel"
            value={phone}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-foreground" htmlFor="estimate-message">
          Project details
        </label>
        <textarea
          className="field-input min-h-36 resize-y"
          id="estimate-message"
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Tell us what is going on and what kind of help you need."
          required
          value={message}
        />
      </div>

      <button
        className="inline-flex w-full items-center justify-center rounded-pill bg-navy px-5 py-3 text-sm font-semibold text-white transition-all duration-[var(--duration-fast)] ease-premium hover:-translate-y-0.5 hover:brightness-110"
        type="submit"
      >
        Launch estimate email
      </button>

      <p className="text-sm leading-6 text-muted">
        This form opens your email app so your request can be sent directly to {contactInfo.email}.
      </p>

      {launched ? (
        <div className="rounded-card border border-[color:rgba(31,138,99,0.2)] bg-[color:rgba(31,138,99,0.1)] px-4 py-3 text-sm leading-6 text-foreground">
          If your email app did not open, send your request directly to{" "}
          <a className="font-semibold text-navy" href={`mailto:${contactInfo.email}`}>
            {contactInfo.email}
          </a>{" "}
          or call{" "}
          <a className="font-semibold text-navy" href={contactInfo.phoneHref}>
            {contactInfo.phoneDisplay}
          </a>
          .
        </div>
      ) : null}
    </form>
  );
}
