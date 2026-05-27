import FAQ from "./components/FAQ";

/* ─── SVG Icons ──────────────────────────────────────────────────── */

function IconCheck() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2.2} style={{ color: "var(--color-forest)", flexShrink: 0, marginTop: 2 }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.5l3 3 7-7" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ flexShrink: 0 }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

/* ─── Data ───────────────────────────────────────────────────────── */

const howSteps = [
  {
    num: "1",
    title: "Plan",
    body: "We map out your content topics, talking points, questions, and scripts so you know exactly what to say before the camera turns on.",
  },
  {
    num: "2",
    title: "Shoot",
    body: "Our production team films a focused content session designed to capture your expertise in a natural, professional way.",
  },
  {
    num: "3",
    title: "Repurpose",
    body: "We turn the footage into a full library of content for your website, email, social media, YouTube, and other marketing channels.",
  },
  {
    num: "4",
    title: "Post",
    body: "We organize, schedule, and post the content so your business stays consistent without you having to manage every detail.",
  },
];

const outputItems = [
  "Instagram Reels",
  "TikToks",
  "YouTube Shorts",
  "Facebook Posts",
  "LinkedIn Posts",
  "X/Twitter Posts",
  "Captions",
  "Email Articles",
  "Blog Posts",
  "Hashtags",
];

const businessTypes = [
  "Law firms",
  "Medical practices",
  "Wealth advisors",
  "Consultants",
  "Agencies",
  "Nonprofits",
  "Gyms and performance facilities",
  "Real estate professionals",
  "Insurance professionals",
  "High-ticket local service businesses",
];

const plans = [
  {
    name: "Starter Content Engine",
    price: "Starting at $1,500/mo",
    description:
      "For businesses that want consistent content without managing the process themselves.",
    features: [
      "Monthly content planning",
      "Topic outlines and talking points",
      "One focused content shoot or remote recording session",
      "6–8 short-form videos",
      "Captions and titles",
      "Basic hashtag sets",
      "Basic content calendar",
      "Organized delivery folder",
    ],
    cta: "Start Creating Content",
    featured: false,
  },
  {
    name: "Professional Content Engine",
    price: "Starting at $2,500/mo",
    description:
      "Best for businesses that want a complete monthly content system.",
    badge: "Most Popular",
    features: [
      "Monthly content strategy",
      "Topic planning and scripting",
      "One professional content shoot",
      "10–12 short-form videos",
      "1–2 longer educational videos",
      "Platform-specific captions",
      "LinkedIn and Facebook post versions",
      "Email article repurposing",
      "Blog post repurposing",
      "YouTube titles and descriptions",
      "Hashtag sets",
      "Organized content library",
      "Posting and scheduling support",
    ],
    cta: "Build My Content Engine",
    featured: true,
  },
  {
    name: "Growth Content Engine",
    price: "Starting at $4,000/mo",
    description:
      "For businesses that want content connected to their broader marketing system.",
    features: [
      "Everything in Professional Content Engine",
      "Additional content volume",
      "Ad creative variations",
      "Landing page or VSL content support",
      "Email nurture content",
      "Sales follow-up content",
      "GHL/CRM content support",
      "Monthly content performance review",
      "Posting and scheduling support",
    ],
    cta: "Connect Content to Growth",
    featured: false,
    note: "This package helps your content support ads, follow-up, landing pages, and sales conversations.",
  },
];

/* ─── Page ───────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div style={{ fontFamily: "var(--font-sans), 'DM Sans', system-ui, sans-serif" }}>

      {/* ── Nav ── */}
      <nav
        className="sticky top-0 z-50"
        style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid var(--color-border-2)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-decoration-none">
            <span
              className="font-bold text-base tracking-tight"
              style={{ color: "var(--color-forest)" }}
            >
              Mansell Productions
            </span>
          </a>
          <div className="flex items-center gap-4">
            <a
              href="tel:+19546994950"
              className="hidden sm:flex items-center gap-2 text-sm font-medium"
              style={{ color: "var(--color-text-2)" }}
            >
              <IconPhone />
              (954) 699-4950
            </a>
            <a href="/book-call" className="btn-primary" style={{ padding: "10px 20px", fontSize: "14px" }}>
              Create Sales-Generating Content Now!
            </a>
          </div>
        </div>
      </nav>

      {/* ── 1. Hero ── */}
      <section className="px-6 text-center" style={{ background: "#fff", paddingTop: "48px", paddingBottom: "40px" }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-5">

          {/* Eyebrow */}
          <span
            className="inline-block font-bold px-6 py-3 rounded-full"
            style={{
              fontSize: "1.35rem",
              background: "var(--color-sage)",
              color: "var(--color-forest-dark)",
              border: "2px solid var(--color-sage-2)",
            }}
          >
            Professional Services Businesses
          </span>

          {/* Headline */}
          <h1
            className="font-bold tracking-tight"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.1rem)",
              color: "var(--color-text)",
              lineHeight: 1.12,
              paddingLeft: "60px",
              paddingRight: "60px",
            }}
          >
            Turn One Video Session Into 100+ Pieces of Content
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text-2)", maxWidth: "680px" }}
          >
            Upload your footage or let us shoot it for you. Our Content Engine turns one focused video session into Reels, Shorts, blogs, emails, captions, hashtags, and social posts — organized and ready to publish.
          </p>

          {/* Hero image */}
          <div className="w-full flex items-center justify-center" style={{ marginTop: "8px", marginBottom: "8px" }}>
            <img
              src="/hero-diagram.png"
              alt="One content shoot becomes blog articles, email articles, short-form reels, captions, and social posts"
              style={{ width: "100%", maxWidth: "816px", height: "auto", display: "block" }}
            />
          </div>

          {/* CTA */}
          <a href="/book-call" className="btn-primary">
            Create Sales-Generating Content Now!
          </a>

          {/* Phone */}
          <div
            className="flex items-center justify-center gap-2 text-sm font-medium"
            style={{ color: "var(--color-text-2)" }}
          >
            <IconPhone />
            <span>Or Call: (954) 699-4950</span>
          </div>

        </div>
      </section>

      {/* ── 2. How the Content Engine Works ── */}
      <section className="py-20 px-6" style={{ background: "var(--color-cream)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="font-bold"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", color: "var(--color-text)" }}
            >
              How the Content Engine Works
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {howSteps.map((step) => (
              <div key={step.num} className="card">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "var(--color-forest)", color: "#fff" }}
                >
                  <span className="text-sm font-bold">{step.num}</span>
                </div>
                <h3
                  className="font-bold text-lg mb-3"
                  style={{ color: "var(--color-text)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-2)" }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. What One Shoot Can Become ── */}
      <section className="py-20 px-6" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", color: "var(--color-text)" }}
          >
            What One Shoot Can Become
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: "var(--color-text-2)" }}>
            One focused content shoot can be turned into platform-ready content for your main marketing channels.
          </p>

          {/* Output grid */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {outputItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 px-4 py-3 rounded-xl"
                style={{
                  background: "var(--color-sage)",
                  border: "1px solid var(--color-sage-2)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: "var(--color-forest)" }}
                />
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p
            className="text-base font-semibold"
            style={{ color: "var(--color-text-2)" }}
          >
            One shoot gives your business a full library of platform-ready content to use across your main marketing channels.
          </p>
        </div>
      </section>

      {/* ── 4. Built for Businesses Where Trust Is the Sale ── */}
      <section
        className="py-20 px-6"
        style={{ background: "var(--color-sage)", borderTop: "1px solid var(--color-sage-2)", borderBottom: "1px solid var(--color-sage-2)" }}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2
              className="font-bold mb-6"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", color: "var(--color-text)", lineHeight: 1.2 }}
            >
              Built for Businesses Where Trust Is the Sale
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--color-text-2)" }}>
              Professional service businesses need clear, helpful, educational content that makes their expertise easier to understand.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-text-2)" }}>
              We help you create content that answers real questions, explains your services, builds credibility, and positions your business as a trusted authority in your market.
            </p>
            <a href="/book-call" className="btn-primary">
              Create Sales-Generating Content Now!
            </a>
          </div>
          <div>
            <p className="font-semibold text-sm mb-5" style={{ color: "var(--color-text-3)", letterSpacing: "0.05em" }}>
              IDEAL FOR:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {businessTypes.map((type) => (
                <div
                  key={type}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    background: "#fff",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "var(--color-forest)" }}
                  />
                  <span className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                    {type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Choose Your Content Engine ── */}
      <section className="py-20 px-6" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="font-bold"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", color: "var(--color-text)" }}
            >
              Choose Your Content Engine
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={plan.featured ? "card-featured" : "card"}
                style={{ height: "100%", display: "flex", flexDirection: "column" }}
              >
                {plan.badge && (
                  <div className="mb-4">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        background: "var(--color-forest)",
                        color: "#fff",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}
                <h3
                  className="font-bold text-xl mb-1"
                  style={{ color: "var(--color-text)" }}
                >
                  {plan.name}
                </h3>
                <p
                  className="font-bold text-2xl mb-4"
                  style={{ color: "var(--color-forest)" }}
                >
                  {plan.price}
                </p>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{
                    color: "var(--color-text-2)",
                    paddingBottom: "20px",
                    borderBottom: "1px solid var(--color-border-2)",
                  }}
                >
                  {plan.description}
                </p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <IconCheck />
                      <span className="text-sm leading-relaxed" style={{ color: "var(--color-text-2)" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                {plan.note && (
                  <p
                    className="text-xs leading-relaxed mb-5 italic"
                    style={{ color: "var(--color-text-3)" }}
                  >
                    {plan.note}
                  </p>
                )}
                <a
                  href="/book-call"
                  className={plan.featured ? "btn-primary" : "btn-outline"}
                  style={{ textAlign: "center" }}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ── */}
      <section className="py-20 px-6" style={{ background: "var(--color-cream)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="font-bold"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", color: "var(--color-text)" }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── 7. Final CTA ── */}
      <section
        className="py-24 px-6"
        style={{ background: "var(--color-forest-deep)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-bold mb-5"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              color: "#fff",
              lineHeight: 1.15,
            }}
          >
            Stop Starting From Scratch Every Week
          </h2>
          <p
            className="text-base leading-relaxed mb-9 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            We plan, shoot, repurpose, organize, and post professional content for your business — so one focused shoot can become months of videos, blogs, emails, captions, hashtags, social posts, and platform-ready assets.
          </p>
          <a
            href="/book-call"
            style={{
              display: "inline-block",
              background: "#fff",
              color: "var(--color-forest-deep)",
              fontWeight: 700,
              fontSize: "15px",
              padding: "15px 32px",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "opacity 0.15s",
              marginBottom: "16px",
            }}
          >
            Create Sales-Generating Content Now!
          </a>
          <div
            className="flex items-center justify-center gap-2 text-sm"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            <IconPhone />
            <span>Or Call: (954) 699-4950</span>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="py-8 px-6"
        style={{
          background: "var(--color-forest-deep)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>
            Mansell Productions
          </span>
          <a
            href="tel:+19546994950"
            className="flex items-center gap-2 text-sm"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <IconPhone />
            (954) 699-4950
          </a>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            &copy; {new Date().getFullYear()} Mansell Productions. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
