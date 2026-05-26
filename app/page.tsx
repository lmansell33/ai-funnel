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
    <div className="bg-white text-slate-900">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-semibold text-slate-900 text-sm tracking-tight">
            AI Workflow Audit
          </span>
          <a
            href="#audit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-150"
          >
            Book Free Audit
          </a>
        </div>
      </nav>

      {/* 1. Hero */}
      <section className="pt-20 pb-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-6">
            For small businesses drowning in admin work
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
            Before You Hire Another Admin, See What AI Can Already Handle
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-4 max-w-3xl mx-auto">
            We review how your business runs, identify the repetitive work
            costing your team hours every week, and show you what can be
            automated using the tools you already have.
          </p>
          <p className="text-slate-500 text-base mb-10">
            Follow-up. Reporting. CRM updates. Data entry. Reminders. Document
            collection. Internal handoffs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#audit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors duration-150 w-full sm:w-auto text-center"
            >
              Find Out What You Can Automate
            </a>
            <a
              href="#automate"
              className="text-slate-700 hover:text-slate-900 font-semibold text-base px-8 py-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors duration-150 w-full sm:w-auto text-center"
            >
              See What We Automate
            </a>
          </div>
          <p className="text-sm text-slate-400 mt-4">
            Free audit. No obligation. If there&apos;s a fit, you&apos;ll get a
            clear roadmap and fixed-price quote.
          </p>
        </div>
      </section>

      {/* 2. Business Type */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Built for Service-Based Small Businesses
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-3xl mx-auto">
            This is for businesses where admin work, follow-up, reporting,
            scheduling, and internal handoffs are starting to slow the team
            down.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Law firms",
              "Accounting firms",
              "Home service companies",
              "Agencies",
              "Medical offices",
              "Real estate teams",
              "Property managers",
              "Consultants",
            ].map((type) => (
              <span
                key={type}
                className="bg-slate-100 text-slate-700 text-sm font-medium px-4 py-2 rounded-full"
              >
                {type}
              </span>
            ))}
            <span className="bg-slate-100 text-slate-500 text-sm px-4 py-2 rounded-full italic">
              and other service businesses with repeatable workflows
            </span>
          </div>
        </div>
      </section>

      {/* 3. Problem */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Manual Work Costs More Than Time
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Repetitive work does not just eat hours. It creates missed
              opportunities, mistakes, delays, and pressure to hire before your
              systems are ready.
            </p>
            <p className="text-lg text-slate-700 font-medium">
              If one person on your team spends just 10 hours a week on
              repetitive admin, that&apos;s more than{" "}
              <span className="text-indigo-600 font-bold">500 hours a year</span>{" "}
              spent on work a system could handle.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
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
                  <span className="mt-1 text-indigo-500 flex-shrink-0">→</span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-center text-slate-600 mt-8 text-base">
            Before you hire another admin, add another tool, or keep patching
            the problem manually —{" "}
            <span className="font-semibold text-slate-800">
              we&apos;ll show you what can be automated first.
            </span>
          </p>
        </div>
      </section>

      {/* 4. Solution */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Less Manual Work. Fewer Things Slipping Through.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6 max-w-3xl mx-auto">
            We identify the repeatable workflows in your business and help
            automate them using the tools you already have — your CRM, email,
            spreadsheets, forms, calendars, project management software,
            accounting tools, and AI.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-3xl mx-auto">
            You do not need to replace your entire tech stack. We build around
            what you already use, then create workflows that reduce manual steps,
            improve follow-up, and give you better visibility into what is
            happening inside your business.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Less manual work",
              "Fewer missed follow-ups",
              "Cleaner handoffs",
              "Better visibility",
              "More capacity without adding payroll",
            ].map((result) => (
              <div
                key={result}
                className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 text-center"
              >
                <p className="text-indigo-800 font-semibold text-sm leading-snug">
                  {result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How the Audit Works */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-14">
            Three Steps, No Guesswork
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
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
                className="bg-white rounded-2xl border border-slate-200 p-8"
              >
                <p className="text-4xl font-bold text-indigo-100 mb-4">
                  {step}
                </p>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. What We Can Automate */}
      <section id="automate" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-14">
            Real Examples of Work We Take Off Your Plate
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {automateCategories.map(({ title, items }) => (
              <div key={title} className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 text-base mb-4">
                  {title}
                </h3>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <span className="text-indigo-400 mt-0.5 flex-shrink-0">
                        ·
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. After the Audit */}
      <section className="py-20 px-6 bg-indigo-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            When You&apos;re Ready to Build It, We Can
          </h2>
          <p className="text-indigo-100 text-lg leading-relaxed mb-6">
            The audit shows you what to automate and where to start. If you want
            those workflows built, we can build them for you.
          </p>
          <p className="text-indigo-100 text-lg leading-relaxed mb-8">
            Most builds fall into lead follow-up, customer onboarding, internal
            task routing, reporting dashboards, CRM cleanup, or document
            collection — but the scope is always shaped by your actual
            workflows.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-6 py-4">
            <span className="text-white font-semibold text-base">
              Every build is quoted at a fixed price before work begins.
            </span>
          </div>
        </div>
      </section>

      {/* 8. Proof */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-10">
            Real Workflow Problems. Practical Automation Solutions.
          </h2>
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-10">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We are currently helping a professional service firm reduce manual
              bookkeeping and reconciliation steps by mapping their weekly and
              monthly reporting process, identifying repetitive handoffs, and
              building automation around the work their team was previously
              doing by hand.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The goal is simple: reduce repetitive admin, improve accuracy, and
              give the team back time without forcing them to replace the tools
              they already use.
            </p>
          </div>
        </div>
      </section>

      {/* 9 & 10. Who This Is / Isn't For */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
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
                  <span className="text-emerald-500 font-bold flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
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
                  <span className="text-slate-400 font-bold flex-shrink-0 mt-0.5">
                    ✕
                  </span>
                  <span className="text-slate-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 11. Audit Offer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Book Your Free AI Workflow Audit
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            We&apos;ll help you identify where your business is losing time to
            repetitive work and show you what can be automated first.
          </p>
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 mb-8 text-left">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-5">
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
                  <span className="text-indigo-500 flex-shrink-0 mt-0.5">
                    →
                  </span>
                  <span className="text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-slate-500 text-sm mb-8">
            The audit is free. There is no obligation. If we identify a good
            opportunity, you&apos;ll know exactly what the build would include
            and what it would cost before making a decision.
          </p>
          <a
            href="#audit"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base px-10 py-4 rounded-xl transition-colors duration-150"
          >
            Find Out What You Can Automate
          </a>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
            Common Questions
          </h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className="bg-white rounded-2xl border border-slate-200 p-7"
              >
                <h3 className="font-bold text-slate-900 mb-3 text-base">{q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Final CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Before You Hire Another Admin, Find Out What Can Be Automated
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            If your team is buried in repetitive follow-up, reporting, data
            entry, reminders, or manual handoffs, we&apos;ll help you find the
            best place to start.
          </p>
          <a
            href="#audit"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base px-10 py-4 rounded-xl transition-colors duration-150 mb-3"
          >
            Book Your Free AI Workflow Audit
          </a>
          <p className="text-sm text-slate-400 mt-3">
            Free, no obligation, and built around the tools you already use.
          </p>
        </div>
      </section>

      {/* 14. Form */}
      <section id="audit" className="py-20 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Book Your Free AI Workflow Audit
            </h2>
            <p className="text-lg text-slate-600">
              Answer a few quick questions so we can understand where your
              business may be losing time.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10">
            <AuditForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} AI Workflow Audit. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
