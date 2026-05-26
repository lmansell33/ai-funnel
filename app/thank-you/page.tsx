export default function ThankYou() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      style={{ background: "var(--color-parchment)" }}
    >
      <div className="max-w-2xl w-full">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-7"
            style={{ background: "rgba(200,151,58,0.12)", border: "1px solid rgba(200,151,58,0.2)" }}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color: "var(--color-amber)" }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1
            className="font-display mb-4"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "var(--color-ink)",
              fontVariationSettings: '"opsz" 72',
            }}
          >
            You&apos;re Booked — Here&apos;s How to Prepare
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-ink-2)" }}>
            Your calendar confirmation is on the way. Before the call, take a
            few minutes to think through the repetitive work your team handles
            every week.
          </p>
        </div>

        <div
          className="rounded-2xl p-8 sm:p-10"
          style={{
            background: "#fff",
            border: "1px solid rgba(30,20,8,0.08)",
            boxShadow: "0 4px 32px rgba(30,20,8,0.06)",
          }}
        >
          <p
            className="text-xs font-semibold tracking-[0.15em] uppercase mb-6"
            style={{ color: "var(--color-ink-2)" }}
          >
            What to think about before the call
          </p>
          <ul className="space-y-4">
            {[
              "What does your team repeat every week?",
              "Where are you using spreadsheets manually?",
              "What gets copied from one system to another?",
              "Where do customers, clients, or leads fall through the cracks?",
              "What reports or reminders are created by hand?",
              "What follow-up tasks depend on someone remembering to do them?",
              "What would you most like to stop doing manually?",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5 font-bold" style={{ color: "var(--color-amber)" }}>→</span>
                <span className="text-sm leading-relaxed" style={{ color: "var(--color-ink)" }}>{item}</span>
              </li>
            ))}
          </ul>
          <p
            className="text-sm mt-8 pt-6"
            style={{
              color: "var(--color-ink-2)",
              borderTop: "1px solid rgba(30,20,8,0.08)",
            }}
          >
            The more specific you can be, the more useful the audit will be.
          </p>
        </div>

        <div className="text-center mt-8">
          <a
            href="/"
            className="text-xs font-medium transition-colors"
            style={{ color: "var(--color-ink-2)" }}
          >
            ← Back to home
          </a>
        </div>
      </div>
    </div>
  );
}
