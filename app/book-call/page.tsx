export default function BookCall() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="max-w-lg w-full text-center">
        <div
          className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-7"
          style={{ background: "var(--color-sage)", border: "1px solid var(--color-sage-2)" }}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: "var(--color-forest)" }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h1
          className="text-3xl font-bold mb-4"
          style={{ color: "var(--color-text)" }}
        >
          Booking Coming Soon
        </h1>
        <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-text-2)" }}>
          We&apos;re setting up our scheduling page. In the meantime, call us directly to schedule your free Content Strategy Session.
        </p>
        <a
          href="tel:+19546994950"
          className="btn-primary"
        >
          Call (954) 699-4950
        </a>
        <div className="mt-8">
          <a href="/" className="text-sm" style={{ color: "var(--color-text-3)" }}>
            ← Back to home
          </a>
        </div>
      </div>
    </div>
  );
}
