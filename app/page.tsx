import AuditForm from "./components/AuditForm";

const automateCategories = [
  {
    title: "Follow-Up & Leads",
    items: [
      "Lead follow-up",
      "Missed-call text back",
      "Lead routing & notifications",
      "Proposal follow-up",
      "Appointment reminders",
      "Review requests",
    ],
  },
  {
    title: "Admin & Data",
    items: [
      "Data entry between systems",
      "Form-to-CRM workflows",
      "CRM updates",
      "Document collection",
      "Spreadsheet cleanup",
      "File organization",
    ],
  },
  {
    title: "Customer Experience",
    items: [
      "Client intake & onboarding",
      "Appointment confirmations",
      "Status updates",
      "Payment reminders",
      "Customer follow-up emails",
      "Internal handoffs",
    ],
  },
  {
    title: "Reporting & Visibility",
    items: [
      "Weekly reports",
      "Sales pipeline reports",
      "Owner dashboards",
      "Call summaries",
      "Project status updates",
      "KPI tracking",
    ],
  },
];

const faqs = [
  {
    q: "My business is small. Is this worth it?",
    a: "Yes. The smaller the team, the more each person's time matters. Many small businesses have more to automate than they realize because so much work is still handled through memory, spreadsheets, email, and manual follow-up.",
  },
  {
    q: "Do I have to switch tools?",
    a: "No. In most cases, we build around the tools you already use — your CRM, email, spreadsheets, forms, calendar, accounting software, project management tools, or other systems already in place.",
  },
  {
    q: "Is this just AI chatbots?",
    a: "No. Chatbots are only one small piece of automation. Most of the value is in connecting your tools, reducing manual data entry, automating follow-up, creating reminders, routing tasks, generating reports, and helping work move through the business without someone manually pushing every step.",
  },
  {
    q: "How long does the audit take?",
    a: "The audit starts with one working session. After that, you get a clear recommendation for what should be automated first and what a build would cost.",
  },
  {
    q: "How much does the build cost?",
    a: "Every build is quoted after the audit because the scope depends on the workflow. Simple automations may be smaller projects, while more complex workflows involving multiple tools, data sources, or approvals may require a larger build.",
  },
  {
    q: "Will my team actually use it?",
    a: "Good automation should remove steps, not add more. We focus on workflows your team already does and look for ways to make those steps faster, cleaner, and less manual.",
  },
  {
    q: "Can AI make mistakes?",
    a: "Yes, which is why important workflows should be designed with the right checks, approvals, and human review where needed. We do not recommend blindly automating sensitive or high-risk decisions.",
  },
];

export default function Home() {
  return (
    <div style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}>

      {/* ── Nav ── */}
      <nav
        style={{ background: "rgba(12,10,8,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        className="sticky top-0 z-50"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span
            className="font-display text-base font-semibold tracking-tight"
            style={{ color: "var(--color-cream)", fontFamily: "var(--font-display), Georgia, serif" }}
          >
            AI Workflow Audit
          </span>
          <a
            href="#audit"
            className="btn-primary text-sm font-semibold px-5 py-2.5 rounded-lg"
          >
            Book Free Audit
          </a>
        </div>
      </nav>

      {/* ── 1. Hero ── */}
      <section style={{ background: "var(--color-canvas)" }} className="relative overflow-hidden">
        {/* Decorative radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 60% 50%, rgba(200,151,58,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 py-28 lg:py-36 grid lg:grid-cols-[1fr_auto] gap-16 items-center relative">
          <div>
            <p
              className="hero-1 text-xs font-semibold tracking-[0.18em] uppercase mb-7"
              style={{ color: "var(--color-amber)" }}
            >
              For small businesses drowning in admin work
            </p>
            <h1
              className="hero-2 font-display leading-[1.04] tracking-tight mb-7"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2.6rem, 5vw, 4.5rem)",
                fontWeight: 700,
                color: "var(--color-cream)",
                fontVariationSettings: '"opsz" 144',
              }}
            >
              Before You Hire Another Admin, See What AI Can Already Handle
            </h1>
            <p
              className="hero-3 text-lg leading-relaxed mb-3 max-w-2xl"
              style={{ color: "var(--color-cream-2)" }}
            >
              We review how your business runs, identify the repetitive work
              costing your team hours every week, and show you what can be
              automated using the tools you already have.
            </p>
            <p
              className="hero-4 text-sm mb-10"
              style={{ color: "rgba(122,106,86,0.9)" }}
            >
              Follow-up · Reporting · CRM updates · Data entry · Reminders · Document collection · Internal handoffs
            </p>
            <div className="hero-5 flex flex-col sm:flex-row gap-4 items-start">
              <a href="#audit" className="btn-primary text-sm px-7 py-3.5 rounded-xl">
                Find Out What You Can Automate
              </a>
              <a href="#automate" className="btn-secondary text-sm px-7 py-3.5 rounded-xl font-semibold">
                See What We Automate
              </a>
            </div>
            <p className="hero-5 text-xs mt-4" style={{ color: "rgba(122,106,86,0.7)" }}>
              Free audit · No obligation · Clear roadmap and fixed-price quote if there&apos;s a fit
            </p>
          </div>

          {/* Decorative stat — desktop only */}
          <div className="hidden lg:block text-right select-none">
            <p
              className="font-display leading-none font-bold"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "10rem",
                color: "var(--color-amber)",
                opacity: 0.12,
                fontVariationSettings: '"opsz" 144',
              }}
            >
              500
            </p>
            <p className="text-xs tracking-[0.2em] uppercase font-semibold -mt-6" style={{ color: "var(--color-amber)", opacity: 0.5 }}>
              hours / year
            </p>
            <p className="text-xs mt-2" style={{ color: "rgba(122,106,86,0.5)" }}>
              of work a system could handle
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. Business Type ── */}
      <section style={{ background: "var(--color-surface)" }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="font-display mb-5"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "var(--color-cream)",
              fontVariationSettings: '"opsz" 72',
            }}
          >
            Built for Service-Based Small Businesses
          </h2>
          <p className="text-base leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "var(--color-cream-2)" }}>
            This is for businesses where admin work, follow-up, reporting, scheduling, and
            internal handoffs are starting to slow the team down.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "Law firms", "Accounting firms", "Home service companies",
              "Agencies", "Medical offices", "Real estate teams",
              "Property managers", "Consultants",
            ].map((type) => (
              <span
                key={type}
                className="text-sm font-medium px-4 py-2 rounded-full"
                style={{
                  background: "var(--color-ghost)",
                  color: "var(--color-cream-2)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {type}
              </span>
            ))}
            <span
              className="text-sm italic px-4 py-2 rounded-full"
              style={{ color: "rgba(122,106,86,0.6)" }}
            >
              and other service businesses with repeatable workflows
            </span>
          </div>
        </div>
      </section>

      {/* ── 3. Problem ── LIGHT SECTION ── */}
      <section style={{ background: "var(--color-parchment)" }} className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="font-display mb-5"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--color-ink)",
                fontVariationSettings: '"opsz" 72',
              }}
            >
              Manual Work Costs More Than Time
            </h2>
            <p className="text-base leading-relaxed mb-5 max-w-2xl mx-auto" style={{ color: "var(--color-ink-2)" }}>
              Repetitive work does not just eat hours. It creates missed
              opportunities, mistakes, delays, and pressure to hire before your
              systems are ready.
            </p>
            <p
              className="text-base font-medium max-w-2xl mx-auto leading-relaxed"
              style={{ color: "var(--color-ink)" }}
            >
              If one person on your team spends just 10 hours a week on
              repetitive admin, that&apos;s more than{" "}
              <span
                className="font-display font-bold"
                style={{ fontFamily: "var(--font-display), Georgia, serif", color: "var(--color-amber)", fontVariationSettings: '"opsz" 24' }}
              >
                500 hours a year
              </span>{" "}
              spent on work a system could handle.
            </p>
          </div>

          <div
            className="rounded-2xl p-8"
            style={{ background: "var(--color-parchment-2)", border: "1px solid rgba(30,20,8,0.08)" }}
          >
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase mb-6"
              style={{ color: "var(--color-ink-2)" }}
            >
              Common signs your business has automation opportunities
            </p>
            <ul className="space-y-4">
              {[
                "Leads go cold because no one followed up fast enough.",
                "Customers or clients get missed because a reminder lived in someone's head.",
                "Reports come out wrong because data was copied by hand.",
                "Your team keeps updating the same spreadsheets every week.",
                "Information gets copied between email, forms, CRMs, spreadsheets, and project management tools.",
                "Your best people spend too much time on work a system could do.",
                "Every bit of growth feels like it requires hiring another person just to keep up.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: "var(--color-amber)" }} className="flex-shrink-0 mt-0.5 font-bold">→</span>
                  <span className="text-sm leading-relaxed" style={{ color: "var(--color-ink)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-center text-sm mt-8" style={{ color: "var(--color-ink-2)" }}>
            Before you hire another admin, add another tool, or keep patching the problem manually —{" "}
            <span className="font-semibold" style={{ color: "var(--color-ink)" }}>
              we&apos;ll show you what can be automated first.
            </span>
          </p>
        </div>
      </section>

      {/* ── 4. Solution ── */}
      <section style={{ background: "var(--color-canvas)" }} className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="font-display mb-6"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "var(--color-cream)",
              fontVariationSettings: '"opsz" 72',
            }}
          >
            Less Manual Work. Fewer Things Slipping Through.
          </h2>
          <p className="text-base leading-relaxed mb-4 max-w-2xl mx-auto" style={{ color: "var(--color-cream-2)" }}>
            We identify the repeatable workflows in your business and help
            automate them using the tools you already have — your CRM, email,
            spreadsheets, forms, calendars, project management software,
            accounting tools, and AI.
          </p>
          <p className="text-base leading-relaxed mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-cream-2)" }}>
            You do not need to replace your entire tech stack. We build around
            what you already use, then create workflows that reduce manual steps,
            improve follow-up, and give you better visibility into what is
            happening inside your business.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              "Less manual work",
              "Fewer missed follow-ups",
              "Cleaner handoffs",
              "Better visibility",
              "More capacity without adding payroll",
            ].map((result) => (
              <div
                key={result}
                className="rounded-xl p-4 text-center"
                style={{
                  background: "var(--color-amber-dim)",
                  border: "1px solid rgba(200,151,58,0.15)",
                }}
              >
                <p className="text-xs font-semibold leading-snug" style={{ color: "var(--color-amber-light)" }}>
                  {result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. How the Audit Works ── */}
      <section style={{ background: "var(--color-surface)" }} className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-display text-center mb-14"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "var(--color-cream)",
              fontVariationSettings: '"opsz" 72',
            }}
          >
            Three Steps, No Guesswork
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "We map your workflows.",
                body: "We walk through how your business actually operates day to day — where leads come from, how customers are followed up with, where information is stored, what gets repeated, and where things slow down.",
              },
              {
                step: "02",
                title: "We find and rank the opportunities.",
                body: "You see which tasks are worth automating, what could save the most time, and what should be fixed first.",
              },
              {
                step: "03",
                title: "You get a clear next step.",
                body: "We outline what's worth automating first, the tools involved, and — if you want us to build it — a fixed-price quote before you commit to anything.",
              },
            ].map(({ step, title, body }) => (
              <div
                key={step}
                className="card-lift rounded-2xl p-8"
                style={{
                  background: "var(--color-surface-2)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <p
                  className="font-display font-bold leading-none mb-5"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "3.5rem",
                    color: "var(--color-amber)",
                    opacity: 0.25,
                    fontVariationSettings: '"opsz" 72',
                  }}
                >
                  {step}
                </p>
                <h3 className="font-semibold mb-3 text-base" style={{ color: "var(--color-cream)" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-cream-2)" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. What We Can Automate ── */}
      <section id="automate" style={{ background: "var(--color-canvas)" }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-display text-center mb-14"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "var(--color-cream)",
              fontVariationSettings: '"opsz" 72',
            }}
          >
            Real Examples of Work We Take Off Your Plate
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {automateCategories.map(({ title, items }) => (
              <div
                key={title}
                className="card-lift rounded-2xl p-6"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderTop: "2px solid var(--color-amber)",
                }}
              >
                <h3 className="font-semibold text-sm mb-5" style={{ color: "var(--color-amber)" }}>
                  {title}
                </h3>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: "var(--color-cream-2)" }}>
                      <span style={{ color: "rgba(200,151,58,0.4)" }} className="flex-shrink-0 mt-0.5">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. After the Audit ── */}
      <section
        className="py-24 px-6"
        style={{
          background: "var(--color-amber-dim)",
          borderTop: "1px solid rgba(200,151,58,0.12)",
          borderBottom: "1px solid rgba(200,151,58,0.12)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-display mb-6"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "var(--color-cream)",
              fontVariationSettings: '"opsz" 72',
            }}
          >
            When You&apos;re Ready to Build It, We Can
          </h2>
          <p className="text-base leading-relaxed mb-5" style={{ color: "var(--color-cream-2)" }}>
            The audit shows you what to automate and where to start. If you want
            those workflows built, we can build them for you.
          </p>
          <p className="text-base leading-relaxed mb-10" style={{ color: "var(--color-cream-2)" }}>
            Most builds fall into lead follow-up, customer onboarding, internal
            task routing, reporting dashboards, CRM cleanup, or document
            collection — but the scope is always shaped by your actual workflows.
          </p>
          <div
            className="inline-flex items-center gap-3 rounded-xl px-7 py-4"
            style={{
              background: "rgba(200,151,58,0.1)",
              border: "1px solid rgba(200,151,58,0.25)",
            }}
          >
            <span className="text-sm font-semibold" style={{ color: "var(--color-amber-light)" }}>
              Every build is quoted at a fixed price before work begins.
            </span>
          </div>
        </div>
      </section>

      {/* ── 8. Proof ── LIGHT SECTION ── */}
      <section style={{ background: "var(--color-parchment)" }} className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-display text-center mb-10"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "var(--color-ink)",
              fontVariationSettings: '"opsz" 72',
            }}
          >
            Real Workflow Problems. Practical Automation Solutions.
          </h2>
          <div
            className="rounded-2xl p-10 relative"
            style={{
              background: "var(--color-parchment-2)",
              border: "1px solid rgba(30,20,8,0.08)",
              borderLeft: "3px solid var(--color-amber)",
            }}
          >
            <p
              className="font-display italic text-4xl leading-none mb-6 select-none"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                color: "var(--color-amber)",
                opacity: 0.25,
                fontVariationSettings: '"opsz" 72',
              }}
            >
              &ldquo;
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--color-ink)" }}>
              We are currently helping a professional service firm reduce manual
              bookkeeping and reconciliation steps by mapping their weekly and
              monthly reporting process, identifying repetitive handoffs, and
              building automation around the work their team was previously doing
              by hand.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-2)" }}>
              The goal is simple: reduce repetitive admin, improve accuracy, and
              give the team back time without forcing them to replace the tools
              they already use.
            </p>
          </div>
        </div>
      </section>

      {/* ── 9 & 10. Fit / Not Fit ── */}
      <section style={{ background: "var(--color-surface)" }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
          <div
            className="rounded-2xl p-8"
            style={{
              background: "var(--color-surface-2)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <h2
              className="font-display mb-7 text-xl"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontWeight: 700,
                color: "var(--color-cream)",
                fontVariationSettings: '"opsz" 24',
              }}
            >
              This Is a Good Fit If…
            </h2>
            <ul className="space-y-4">
              {[
                "You run a small business with repeatable manual workflows.",
                "Your team spends hours on follow-up, data entry, reporting, scheduling, or admin tasks.",
                "You are considering hiring another admin person just to keep up.",
                "You use tools like a CRM, spreadsheets, forms, email, calendars, project management software, or accounting software.",
                "You know things are falling through the cracks, but you are not sure what to automate first.",
                "You want practical automation, not AI hype.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-xs font-bold flex-shrink-0 mt-1" style={{ color: "var(--color-amber)" }}>✓</span>
                  <span className="text-sm leading-relaxed" style={{ color: "var(--color-cream-2)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-2xl p-8"
            style={{
              background: "var(--color-surface-2)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <h2
              className="font-display mb-7 text-xl"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontWeight: 700,
                color: "var(--color-cream)",
                fontVariationSettings: '"opsz" 24',
              }}
            >
              This Is Not a Fit If…
            </h2>
            <ul className="space-y-4">
              {[
                "You want a random AI tool with no process behind it.",
                "You are not open to changing how work flows inside the business.",
                "You want automation to fully replace human review for important decisions.",
                "You are looking for a magic button instead of a practical workflow improvement.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-xs font-bold flex-shrink-0 mt-1" style={{ color: "rgba(122,106,86,0.5)" }}>✕</span>
                  <span className="text-sm leading-relaxed" style={{ color: "var(--color-cream-2)", opacity: 0.7 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 11. Audit Offer ── */}
      <section style={{ background: "var(--color-canvas)" }} className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-display mb-4"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "var(--color-cream)",
              fontVariationSettings: '"opsz" 72',
            }}
          >
            Book Your Free AI Workflow Audit
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: "var(--color-cream-2)" }}>
            We&apos;ll help you identify where your business is losing time to
            repetitive work and show you what can be automated first.
          </p>
          <div
            className="rounded-2xl p-8 mb-8 text-left"
            style={{
              background: "var(--color-surface)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase mb-6"
              style={{ color: "var(--color-amber)", opacity: 0.7 }}
            >
              You&apos;ll walk away with:
            </p>
            <ul className="space-y-3">
              {[
                "A review of your current workflow bottlenecks",
                "A prioritized list of automation opportunities",
                "A practical recommendation for what to fix first",
                "An estimate of where time could be saved",
                "Recommended tools or system improvements",
                "A clear next step if you want us to build it",
                "A fixed-price quote if you'd like us to build it",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--color-amber)" }}>→</span>
                  <span className="text-sm" style={{ color: "var(--color-cream-2)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs mb-8" style={{ color: "rgba(122,106,86,0.7)" }}>
            The audit is free. There is no obligation. If we identify a good
            opportunity, you&apos;ll know exactly what the build would include
            and what it would cost before making a decision.
          </p>
          <a href="#audit" className="btn-primary inline-block text-sm px-9 py-4 rounded-xl font-semibold">
            Find Out What You Can Automate
          </a>
        </div>
      </section>

      {/* ── 12. FAQ ── */}
      <section style={{ background: "var(--color-surface)" }} className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-display text-center mb-12"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "var(--color-cream)",
              fontVariationSettings: '"opsz" 72',
            }}
          >
            Common Questions
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className="rounded-2xl p-7"
                style={{
                  background: "var(--color-surface-2)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <h3 className="font-semibold text-sm mb-3" style={{ color: "var(--color-cream)" }}>
                  {q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-cream-2)" }}>
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. Final CTA ── */}
      <section style={{ background: "var(--color-canvas)" }} className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-display mb-5"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 700,
              color: "var(--color-cream)",
              fontVariationSettings: '"opsz" 72',
              lineHeight: 1.1,
            }}
          >
            Before You Hire Another Admin, Find Out What Can Be Automated
          </h2>
          <p className="text-base leading-relaxed mb-9" style={{ color: "var(--color-cream-2)" }}>
            If your team is buried in repetitive follow-up, reporting, data
            entry, reminders, or manual handoffs, we&apos;ll help you find the
            best place to start.
          </p>
          <a href="#audit" className="btn-primary inline-block text-sm px-10 py-4 rounded-xl font-semibold mb-3">
            Book Your Free AI Workflow Audit
          </a>
          <p className="text-xs" style={{ color: "rgba(122,106,86,0.6)" }}>
            Free, no obligation, and built around the tools you already use.
          </p>
        </div>
      </section>

      {/* ── 14. Form ── LIGHT SECTION ── */}
      <section id="audit" style={{ background: "var(--color-parchment)" }} className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="font-display mb-4"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--color-ink)",
                fontVariationSettings: '"opsz" 72',
              }}
            >
              Book Your Free AI Workflow Audit
            </h2>
            <p className="text-base" style={{ color: "var(--color-ink-2)" }}>
              Answer a few quick questions so we can understand where your
              business may be losing time.
            </p>
          </div>
          <div
            className="rounded-2xl p-8 sm:p-10"
            style={{
              background: "#fff",
              border: "1px solid rgba(30,20,8,0.1)",
              boxShadow: "0 4px 32px rgba(30,20,8,0.06)",
            }}
          >
            <AuditForm />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{ background: "var(--color-canvas)", borderTop: "1px solid rgba(255,255,255,0.05)" }}
        className="py-8 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs" style={{ color: "rgba(122,106,86,0.5)" }}>
            &copy; {new Date().getFullYear()} AI Workflow Audit. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
