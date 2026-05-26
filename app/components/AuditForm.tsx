"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuditForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    businessType: "",
    teamSize: "",
    hoursLost: "",
    timeline: "",
    repetitiveWork: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Wire to your form backend (Formspree, Make webhook, etc.)
    await new Promise((r) => setTimeout(r, 600));
    router.push("/thank-you");
  }

  const inputStyle = {
    width: "100%",
    border: "1px solid rgba(30,20,8,0.15)",
    borderRadius: "10px",
    padding: "12px 16px",
    fontSize: "14px",
    color: "var(--color-ink)",
    background: "#fff",
    outline: "none",
    transition: "border-color 0.15s",
    fontFamily: "inherit",
  } as React.CSSProperties;

  const labelStyle = {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--color-ink)",
    marginBottom: "10px",
  } as React.CSSProperties;

  function PillOption({
    name,
    value,
    checked,
    onChange,
    label,
  }: {
    name: string;
    value: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
  }) {
    return (
      <label
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "9px 18px",
          borderRadius: "100px",
          border: `1px solid ${checked ? "var(--color-amber)" : "rgba(30,20,8,0.15)"}`,
          background: checked ? "var(--color-amber)" : "transparent",
          color: checked ? "var(--color-ink)" : "var(--color-ink-2)",
          fontSize: "13px",
          fontWeight: 500,
          cursor: "pointer",
          transition: "all 0.15s",
          userSelect: "none",
        }}
      >
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          required
          className="sr-only"
        />
        {label}
      </label>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
      <div>
        <label style={labelStyle}>
          What type of business do you run?
        </label>
        <input
          name="businessType"
          value={form.businessType}
          onChange={handleChange}
          required
          placeholder="e.g. Law firm, home services, accounting practice…"
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = "var(--color-amber)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(30,20,8,0.15)")}
        />
      </div>

      <div>
        <label style={labelStyle}>How many people are on your team?</label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {["Just me", "2–5", "6–15", "16+"].map((opt) => (
            <PillOption
              key={opt}
              name="teamSize"
              value={opt}
              label={opt}
              checked={form.teamSize === opt}
              onChange={handleChange}
            />
          ))}
        </div>
      </div>

      <div>
        <label style={labelStyle}>
          Roughly how many hours per week do you think are lost to manual work?
        </label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {["Under 5", "5–15", "15–30", "Not sure"].map((opt) => (
            <PillOption
              key={opt}
              name="hoursLost"
              value={opt}
              label={opt}
              checked={form.hoursLost === opt}
              onChange={handleChange}
            />
          ))}
        </div>
      </div>

      <div>
        <label style={labelStyle}>When are you looking to make a change?</label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {["Next 30 days", "Next 90 days", "Just exploring"].map((opt) => (
            <PillOption
              key={opt}
              name="timeline"
              value={opt}
              label={opt}
              checked={form.timeline === opt}
              onChange={handleChange}
            />
          ))}
        </div>
      </div>

      <div>
        <label style={{ ...labelStyle, fontWeight: 500 }}>
          What feels most repetitive right now?{" "}
          <span style={{ color: "var(--color-ink-2)", fontWeight: 400 }}>(optional)</span>
        </label>
        <textarea
          name="repetitiveWork"
          value={form.repetitiveWork}
          onChange={handleChange}
          rows={3}
          placeholder="e.g. Following up on leads, copying data between systems, building weekly reports…"
          style={{ ...inputStyle, resize: "vertical" }}
          onFocus={(e) => (e.target.style.borderColor = "var(--color-amber)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(30,20,8,0.15)")}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary"
        style={{
          width: "100%",
          padding: "16px 32px",
          borderRadius: "12px",
          fontSize: "15px",
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? "Submitting…" : "Book My Free Audit"}
      </button>

      <p style={{ textAlign: "center", fontSize: "12px", color: "var(--color-ink-2)" }}>
        Free. No obligation. Built around the tools you already use.
      </p>
    </form>
  );
}
