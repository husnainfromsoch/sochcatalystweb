import type { Metadata } from "next";
import { ConfirmationBookBtn } from "@/components/ConfirmationBookBtn";

export const metadata: Metadata = {
  title: "Audit Submitted · Soch Catalyst",
  description:
    "Your LinkedIn profile is with us. Umair will review it personally and send you the full breakdown within 24 hours.",
};

const STEPS = [
  {
    title: "I review your profile personally within 24 hours.",
    body: "Headline, about section, featured section, last ten posts. Every section.",
  },
  {
    title: "You get the full breakdown over email.",
    body: "What is working, what is costing you, what to fix first. Specific to your profile.",
  },
  {
    title: "Book a Strategy call with me.",
    body: "Strategy call link is in the email. Take it or leave it. Completely your call.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Hands down, working with Umair completely transformed how I show up on LinkedIn. I went from posting randomly to having a clear system that actually brings inbound leads. I have had 3 discovery calls booked directly from LinkedIn in the last month alone.",
    avatar: "https://cdn.prod.website-files.com/68e7ded517d0693d2c345250/6a2fb631aa9fc98e79ae2810_1714512298914.jpg",
    name: "Gaia Ferrero",
    title: "CEO at Byzantine Finance",
  },
  {
    quote:
      "I had been on LinkedIn for four years and never once got an inbound lead. Umair fixed my profile in a week and two founders reached out cold within ten days.",
    avatar: "https://cdn.prod.website-files.com/68e7ded517d0693d2c345250/6a2fb8c5358ef1ae4b6b238c_1674503443215.jpg",
    name: "Biola Babawale",
    title: "CEO at Cycle Together",
  },
];

export default function ConfirmationPage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#FAF7F2",
          padding: "80px 24px 60px",
          textAlign: "center",
          borderTop: "4px solid #e8633e",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 6vw, 3rem)",
              fontWeight: 600,
              color: "#1a1a1a",
              lineHeight: 1.08,
              letterSpacing: "-0.015em",
              marginBottom: 20,
            }}
          >
            Your Profile Is With Us.
          </h1>

          <p
            style={{
              fontSize: 17,
              color: "#6b6560",
              lineHeight: 1.65,
              marginBottom: 36,
              maxWidth: 420,
              margin: "0 auto 36px",
            }}
          >
            That is all you needed to do. Umair will take it from here.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://assets.cdn.filesafe.space/B3a6hs9JTYdYyIDQkauN/media/69dce8884753e162ccc93ebe.jpeg"
            alt="Umair Shahzad"
            style={{
              width: "100%",
              maxWidth: 680,
              height: "auto",
              borderRadius: 16,
              margin: "32px auto 0",
              display: "block",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
          />
        </div>
      </section>

      {/* ── 2. VIDEO MESSAGE ─────────────────────────────────────────── */}
      <section style={{ background: "white", padding: "60px 24px", textAlign: "center" }}>
        <p
          style={{
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "#e8633e",
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          A MESSAGE FROM UMAIR
        </p>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 28,
            fontWeight: 600,
            color: "#1a1a1a",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            marginBottom: 32,
          }}
        >
          While you wait, watch this.
        </h2>

        {/* Replace YOUR_YOUTUBE_ID with actual YouTube video ID */}
        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            aspectRatio: "16/9",
            position: "relative",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/YOUR_YOUTUBE_ID"
            title="Message from Umair"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: 16,
            }}
          />
        </div>
      </section>

      {/* ── 3. WHAT HAPPENS NEXT ─────────────────────────────────────── */}
      <section style={{ background: "white", padding: "60px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#e8633e",
              fontWeight: 700,
              marginBottom: 8,
            }}
          >
            WHAT HAPPENS NEXT
          </p>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 32,
              fontWeight: 600,
              color: "#1a1a1a",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              marginBottom: 40,
            }}
          >
            Three things, in order.
          </h2>

          {STEPS.map((step, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
                background: "white",
                borderRadius: 12,
                padding: "20px 24px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: "#e8633e",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: 16,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </div>

              <div>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: 4,
                    lineHeight: 1.4,
                  }}
                >
                  {step.title}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: "#6b6560",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. CTA ───────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#1a1a1a",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 36,
              fontWeight: 600,
              color: "white",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              margin: "0 auto 16px",
            }}
          >
            You do not have to wait for the email.
          </h2>

          <p
            style={{
              fontSize: 15,
              color: "#a09a94",
              lineHeight: 1.65,
              marginBottom: 32,
            }}
          >
            Grab a slot now. The audit report lands either way.
          </p>

          <ConfirmationBookBtn />
        </div>
      </section>

      {/* ── 5. TESTIMONIALS ──────────────────────────────────────────── */}
      <section style={{ background: "#FAF7F2", padding: "80px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 32,
              fontWeight: 600,
              color: "#1a1a1a",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              marginBottom: 40,
            }}
          >
            Different Founders. The Same Result.
          </h2>

          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              style={{
                background: "white",
                borderRadius: 16,
                padding: 32,
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                marginBottom: 20,
                maxWidth: 600,
                margin: "0 auto 20px",
                borderLeft: "4px solid #e8633e",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  color: "#e8633e",
                  fontSize: 18,
                  letterSpacing: 3,
                  marginBottom: 16,
                }}
              >
                ★★★★★
              </div>

              <p
                style={{
                  fontSize: 15,
                  color: "#1a1a1a",
                  lineHeight: 1.7,
                  marginBottom: 20,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                    border: "2px solid #e8633e",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#1a1a1a",
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      color: "#6b6560",
                      margin: "2px 0 0",
                    }}
                  >
                    {t.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. FOOTER NOTE ───────────────────────────────────────────── */}
      <section
        style={{
          background: "white",
          padding: "32px 24px",
          textAlign: "center",
          borderTop: "1px solid #f0ece4",
        }}
      >
        <p
          style={{
            fontSize: 13,
            color: "#6b6560",
            lineHeight: 1.6,
            maxWidth: 500,
            margin: "0 auto",
          }}
        >
          Do not forget to check your inbox. The report sometimes lands in
          promotions. If you do not see it within 24 hours, check your spam or
          email{" "}
          <a
            href="mailto:umair@sochcatalyst.com"
            style={{ color: "#e8633e", textDecoration: "none", fontWeight: 600 }}
          >
            umair@sochcatalyst.com
          </a>
        </p>
      </section>
    </>
  );
}
