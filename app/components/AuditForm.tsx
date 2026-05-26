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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Wire this to your form backend (Formspree, Make webhook, etc.)
    await new Promise((r) => setTimeout(r, 600));
    router.push("/thank-you");
  }

  const radioClass =
    "flex items-center gap-2 cursor-pointer text-slate-700 text-sm";
  const inputClass =
    "w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label className="block text-sm font-semibold text-slate-900 mb-2">
          What type of business do you run?
        </label>
        <input
          name="businessType"
          value={form.businessType}
          onChange={handleChange}
          required
          placeholder="e.g. Law firm, home services, accounting practice…"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-900 mb-3">
          How many people are on your team?
        </label>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {["Just me", "2–5", "6–15", "16+"].map((opt) => (
            <label key={opt} className={radioClass}>
              <input
                type="radio"
                name="teamSize"
                value={opt}
                checked={form.teamSize === opt}
                onChange={handleChange}
                required
                className="accent-indigo-600"
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-900 mb-3">
          Roughly how many hours per week do you think are lost to manual work?
        </label>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {["Under 5", "5–15", "15–30", "Not sure"].map((opt) => (
            <label key={opt} className={radioClass}>
              <input
                type="radio"
                name="hoursLost"
                value={opt}
                checked={form.hoursLost === opt}
                onChange={handleChange}
                required
                className="accent-indigo-600"
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-900 mb-3">
          When are you looking to make a change?
        </label>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {["Next 30 days", "Next 90 days", "Just exploring"].map((opt) => (
            <label key={opt} className={radioClass}>
              <input
                type="radio"
                name="timeline"
                value={opt}
                checked={form.timeline === opt}
                onChange={handleChange}
                required
                className="accent-indigo-600"
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-900 mb-2">
          What feels most repetitive right now?{" "}
          <span className="font-normal text-slate-500">(optional)</span>
        </label>
        <textarea
          name="repetitiveWork"
          value={form.repetitiveWork}
          onChange={handleChange}
          rows={3}
          placeholder="e.g. Following up on leads, copying data between systems, building weekly reports…"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-70 text-white font-semibold text-base py-4 px-8 rounded-xl transition-colors duration-150"
      >
        {loading ? "Submitting…" : "Book My Free Audit"}
      </button>

      <p className="text-center text-sm text-slate-500">
        Free. No obligation. Built around the tools you already use.
      </p>
    </form>
  );
}
