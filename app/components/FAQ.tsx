"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do we have to come up with the topics?",
    a: "No. We help plan the topics, questions, stories, and talking points before the shoot.",
  },
  {
    q: "Do you film the content?",
    a: "Yes. Our production team films the content. Remote recording may also be available depending on your location and package.",
  },
  {
    q: "Is this just social media management?",
    a: "No. Posting is part of it, but the real offer is the full Content Engine: planning, filming, repurposing, organizing, and posting.",
  },
  {
    q: "Will this generate leads?",
    a: "Content can absolutely help generate leads when it is done consistently and connected to the right strategy. The Content Engine is designed to help your business stay visible, build trust, educate prospects, and give people more reasons to contact you. For businesses that want to go further, we can also help connect the content to ads, landing pages, funnels, email follow-up, and CRM automation.",
  },
  {
    q: "Will the content feel natural?",
    a: "Yes. The content is built around guided conversations, planned topics, and educational ideas, so it sounds like you — not a scripted influencer.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="card"
          style={{ padding: 0, overflow: "hidden" }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
            style={{ background: "transparent", border: "none", cursor: "pointer" }}
          >
            <span
              className="font-semibold text-base"
              style={{ color: "var(--color-text)" }}
            >
              {faq.q}
            </span>
            <span
              className="flex-shrink-0 text-xl font-light transition-transform duration-200"
              style={{
                color: "var(--color-forest)",
                transform: open === i ? "rotate(45deg)" : "rotate(0)",
                display: "inline-block",
                lineHeight: 1,
              }}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-2)" }}>
                {faq.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
