export default function ThankYou() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-100 rounded-full mb-6">
            <svg
              className="w-7 h-7 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            You&apos;re Booked — Here&apos;s How to Prepare
          </h1>
          <p className="text-lg text-slate-600">
            Your calendar confirmation is on the way. Before the call, take a
            few minutes to think through the repetitive work your team handles
            every week.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
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
                <span className="text-indigo-500 flex-shrink-0 mt-0.5">→</span>
                <span className="text-slate-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-500 text-sm mt-8 pt-6 border-t border-slate-100">
            The more specific you can be, the more useful the audit will be.
          </p>
        </div>

        <div className="text-center mt-8">
          <a
            href="/"
            className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
          >
            ← Back to home
          </a>
        </div>
      </div>
    </div>
  );
}
