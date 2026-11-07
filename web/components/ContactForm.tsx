"use client";
import { useEffect, useState } from "react";
import { SITE_URL, profile } from "@/lib/data";

const TOPICS = ["Job opportunity", "Internship", "Project idea", "Just saying hi"];
type State = { kind: "idle" } | { kind: "sending" } | { kind: "sent"; name: string } | { kind: "error"; msg: string };

export default function ContactForm() {
  const [state, setState] = useState<State>({ kind: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    if (q.get("sent") === "1") {
      setState({ kind: "sent", name: "" });
      window.history.replaceState(null, "", window.location.pathname + "#contact");
      document.getElementById("contact")?.scrollIntoView();
    }
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("_honey")) return; // bot filled the hidden field
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();
    const errs: Record<string, string> = {};
    if (!name) errs.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Please use a valid email so I can reply.";
    if (message.length < 10) errs.message = "A few more words, please (10+ characters).";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setState({ kind: "sending" });
    // Plain form POST to FormSubmit: no cross-site fetch, so browser privacy tools and extensions can't block it.
    // FormSubmit then redirects back here with ?sent=1.
    const subject = form.querySelector<HTMLInputElement>('input[name="_subject"]');
    if (subject) subject.value = `Portfolio: ${String(fd.get("topic") || "New message")} from ${name}`;
    const replyto = form.querySelector<HTMLInputElement>('input[name="_replyto"]');
    if (replyto) replyto.value = email;
    form.submit();
  }

  if (state.kind === "sent") {
    return (
      <div className="form" role="status" aria-live="polite">
        <span className="mono" style={{ fontSize: 13, color: "var(--blue)" }}>200 OK</span>
        <h3 style={{ margin: 0, fontFamily: "var(--display)", fontSize: 28 }}>Thanks{state.name ? `, ${state.name}` : ""}! Message sent.</h3>
        <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.55 }}>
          It’s in my inbox now. I usually reply within a day or two at the email you gave.
        </p>
        <button type="button" className="btn btn-light" style={{ alignSelf: "flex-start" }} onClick={() => setState({ kind: "idle" })}>
          Send another
        </button>
      </div>
    );
  }

  const busy = state.kind === "sending";
  return (
    <form className="form" onSubmit={onSubmit} noValidate aria-label="Contact form" action={`https://formsubmit.co/${profile.email}`} method="POST">
      <input type="hidden" name="_subject" value="New portfolio contact" />
      <input type="hidden" name="_replyto" value="" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={`${SITE_URL}/?sent=1#contact`} />
      <span className="mono" style={{ fontSize: 13, color: "var(--blue)" }}>POST /say-hello</span>
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" style={{ display: "none" }} aria-hidden="true" />
      <div className="two">
        <label>
          Name
          <input name="name" type="text" maxLength={100} placeholder="Your name" autoComplete="name" aria-invalid={!!errors.name} />
          {errors.name && <span className="field-err">{errors.name}</span>}
        </label>
        <label>
          Email
          <input name="email" type="email" maxLength={150} placeholder="you@company.com" autoComplete="email" aria-invalid={!!errors.email} />
          {errors.email && <span className="field-err">{errors.email}</span>}
        </label>
      </div>
      <label>
        <span>Phone <span className="optional">(optional)</span></span>
        <input name="phone" type="tel" maxLength={30} placeholder="+1 555 123 4567" autoComplete="tel" />
      </label>
      <fieldset className="topics">
        <legend>What’s it about?</legend>
        {TOPICS.map((tp, i) => (
          <label key={tp}>
            <input type="radio" name="topic" value={tp} defaultChecked={i === 0} />
            <span className="chip">{tp}</span>
          </label>
        ))}
      </fieldset>
      <label>
        Message
        <textarea name="message" maxLength={2000} placeholder="Hi Thushar, I’d love to talk about…" aria-invalid={!!errors.message} />
        {errors.message && <span className="field-err">{errors.message}</span>}
      </label>
      {state.kind === "error" && (
        <div className="form-status err" role="alert">
          {state.msg} You can also email me directly at{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </div>
      )}
      <button type="submit" className="btn btn-blue" disabled={busy} style={{ alignSelf: "flex-start", boxShadow: "4px 4px 0 var(--lime)" }}>
        {busy ? "Sending…" : "Send message →"}
      </button>
    </form>
  );
}
