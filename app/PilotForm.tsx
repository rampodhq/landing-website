"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, Mail } from "lucide-react";

export function PilotForm() {
  const [prepared, setPrepared] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const company = String(data.get("company") || "");
    const email = String(data.get("email") || "");
    const stack = String(data.get("stack") || "");
    const readiness = String(data.get("readiness") || "");
    const issue = String(data.get("issue") || "");

    const body = [
      "Hi Rampod,",
      "",
      "I would like to discuss a founding pilot task.",
      "",
      `Name: ${name}`,
      `Company: ${company}`,
      `Work email: ${email}`,
      `Primary stack: ${stack}`,
      `Repository readiness: ${readiness}`,
      "",
      "Issue summary:",
      issue,
      "",
      "No credentials or sensitive repository information are included in this request.",
    ].join("\n");

    setPrepared(true);
    window.location.href = `mailto:hello@rampod.co?subject=${encodeURIComponent(
      `Founding pilot request from ${company || name}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="pilot-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <Mail aria-hidden="true" size={21} />
        <div><span>FOUNDING PILOT INTAKE</span><h3>Tell us about one task.</h3></div>
      </div>

      <div className="form-grid">
        <label>Your name<input name="name" type="text" autoComplete="name" required placeholder="Aarav Mehta" /></label>
        <label>Work email<input name="email" type="email" autoComplete="email" required placeholder="aarav@company.com" /></label>
        <label>Company<input name="company" type="text" autoComplete="organization" required placeholder="Acme Labs" /></label>
        <label>
          Primary stack
          <select name="stack" required defaultValue="">
            <option value="" disabled>Select a stack</option>
            <option>React / Next.js</option>
            <option>Node.js / TypeScript</option>
            <option>React and Node.js</option>
            <option>Another web stack</option>
          </select>
        </label>
      </div>

      <label>
        Can the repository run without production secrets?
        <select name="readiness" required defaultValue="">
          <option value="" disabled>Select the closest answer</option>
          <option>Yes, with local services or test accounts</option>
          <option>Partly, some integrations need staging</option>
          <option>No, we need help preparing it</option>
          <option>Not sure yet</option>
        </select>
      </label>

      <label>
        Issue summary
        <textarea name="issue" required rows={5} placeholder="What is happening, what should happen, and how your team currently reproduces it?" />
      </label>

      <p className="form-safety">Do not include credentials, private repository links, customer data, or confidential code. We only need enough context for an initial fit check.</p>
      <button className="button form-submit" type="submit">Prepare pilot request <ArrowUpRight aria-hidden="true" size={17} /></button>
      <p className="form-helper">Opens a pre-filled email to hello@rampod.co.</p>
      {prepared && <p className="form-prepared" role="status"><Check aria-hidden="true" size={15} /> Your request is ready in your email app.</p>}
    </form>
  );
}
