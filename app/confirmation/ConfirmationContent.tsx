"use client"

import { useRef, useState, useEffect } from 'react'
import { ConfirmationBookBtn } from "@/components/ConfirmationBookBtn"

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
]

const REVIEW_ITEMS = [
  {
    num: "01",
    title: "Your First Impression",
    desc: "Most profiles lose the right person in the first ten seconds. I find exactly where that happens on yours.",
  },
  {
    num: "02",
    title: "Your Positioning Clarity",
    desc: "Does a stranger immediately understand why you over everyone else? I tell you yes or no.",
  },
  {
    num: "03",
    title: "Your Content Narrative",
    desc: "Are your posts building toward something or just filling a feed? The answer shows up in your inbound.",
  },
  {
    num: "04",
    title: "Your Conversion Architecture",
    desc: "When someone ready to hire lands on your profile, what does it do with them?",
  },
]

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
  {
    quote:
      "Before this, my entire pipeline came from people who already knew me. Now the content does the introduction. By the time someone books a call, they have already decided I am the right person.",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEPW0neV8fQrA/profile-displayphoto-crop_800_800/B4DZkkgP2THsAI-/0/1757254059122?e=1782950400&v=beta&t=mgmnxulxv_s2Yuno-AdYbwJK7qA8imxV7c73EPYzI9s",
    name: "Shahzad Akhtar",
    title: "Founder & MD, Strateasy Consulting",
  },
]

const useScrollAnimation = (threshold = 0.15) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible] as const
}

const fadeUp = (visible: boolean, delay = 0): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(32px)',
  transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  willChange: 'opacity, transform',
})

const slideLeft = (visible: boolean, delay = 0): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateX(0)' : 'translateX(-20px)',
  transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  willChange: 'opacity, transform',
})

const fadeIn = (visible: boolean): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transition: 'opacity 0.6s ease',
  willChange: 'opacity',
})

export function ConfirmationContent() {
  const [heroTextRef, heroTextVisible] = useScrollAnimation()
  const [heroImageRef, heroImageVisible] = useScrollAnimation()
  const [videoRef, videoVisible] = useScrollAnimation()
  const [stepsRef, stepsVisible] = useScrollAnimation()
  const [ctaRef, ctaVisible] = useScrollAnimation()
  const [reviewRef, reviewVisible] = useScrollAnimation()
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation()
  const [footerRef, footerVisible] = useScrollAnimation()

  return (
    <>
      <style>{`@media (max-width: 768px) { .img-wrapper { padding: 0 20px !important; } .video-wrapper { padding: 0 20px !important; } .review-grid { grid-template-columns: 1fr !important; } }`}</style>

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#FAF7F2",
          textAlign: "center",
          borderTop: "4px solid #e8633e",
        }}
      >
        <div
          ref={heroTextRef}
          style={{
            maxWidth: 680,
            margin: "0 auto",
            padding: "80px 24px 60px",
            ...fadeUp(heroTextVisible),
          }}
        >
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
        </div>

        <div
          ref={heroImageRef}
          style={{
            maxWidth: 1200,
            margin: "32px auto 0",
            padding: "0 48px",
            ...fadeUp(heroImageVisible, 100),
          }}
          className="img-wrapper"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://assets.cdn.filesafe.space/B3a6hs9JTYdYyIDQkauN/media/69dce8884753e162ccc93ebe.jpeg"
            alt="Umair Shahzad"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              borderRadius: 16,
              display: "block",
            }}
          />
        </div>
      </section>

      {/* ── 2. VIDEO MESSAGE ─────────────────────────────────────────── */}
      <section
        ref={videoRef}
        style={{
          background: "white",
          padding: 0,
          textAlign: "center",
          ...fadeUp(videoVisible),
        }}
      >
        <div style={{ padding: "48px 24px 24px" }}>
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
              marginBottom: 0,
            }}
          >
            While you wait, watch this.
          </h2>
        </div>

        <div
          className="video-wrapper"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 48px",
          }}
        >
          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              aspectRatio: "16/9",
              position: "relative",
              width: "100%",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Y_L9g_aFQsM?si=LEuiK0kaVbDKXamh"
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
                border: "none",
                borderRadius: 16,
              }}
            />
          </div>
        </div>
      </section>

      {/* ── 3. WHAT HAPPENS NEXT ─────────────────────────────────────── */}
      <section style={{ background: "white", padding: "60px 24px" }}>
        <div ref={stepsRef} style={{ maxWidth: 600, margin: "0 auto" }}>
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
                background: "#FAF7F2",
                border: "1px solid #e8e0d5",
                borderRadius: 8,
                padding: 16,
                marginBottom: 12,
                ...slideLeft(stepsVisible, i * 150),
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#EA6A47",
                  flexShrink: 0,
                  minWidth: 24,
                  lineHeight: 1.4,
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
        ref={ctaRef}
        style={{
          background: "#FAF7F2",
          padding: "80px 24px",
          textAlign: "center",
          ...fadeUp(ctaVisible),
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              color: "#1a1a1a",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: "0 auto 20px",
            }}
          >
            You do not{" "}
            <span style={{ color: "#e8633e" }}>have to wait</span>
            {" "}for the email.
          </h2>

          <p
            style={{
              fontSize: 16,
              color: "#6b6560",
              lineHeight: 1.65,
              marginBottom: 8,
            }}
          >
            Grab a slot now. The audit report lands either way.
          </p>
          <p
            style={{
              fontSize: 16,
              color: "#6b6560",
              lineHeight: 1.65,
              marginBottom: 32,
            }}
          >
            The call is for founders who want to move fast.
          </p>

          <ConfirmationBookBtn />
          <p
            style={{
              fontSize: 13,
              color: "#6b6560",
              marginTop: 12,
              textAlign: "center",
            }}
          >
            Slots fill fast. Grab yours now.
          </p>
          <p style={{ fontSize: 12, color: "#a09a94", marginTop: 4 }}>
            Limited spots available each month.
          </p>
        </div>
      </section>

      {/* ── 5. HERE IS WHAT I AM REVIEWING ──────────────────────────── */}
      <section style={{ background: "white", padding: "80px 24px" }}>
        <div ref={reviewRef} style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 40,
              fontWeight: 800,
              color: "#1a1a1a",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: 48,
              textAlign: "center",
            }}
          >
            Here Is What I Am Reviewing.
          </h2>

          <div
            className="review-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
            }}
          >
            {REVIEW_ITEMS.map((item, i) => (
              <div
                key={item.num}
                style={{
                  border: "1px solid #f0ece4",
                  borderRadius: 16,
                  padding: 32,
                  background: "white",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                  ...fadeUp(reviewVisible, (i % 2) * 150),
                }}
              >
                <p
                  style={{
                    fontSize: 13,
                    color: "#e8633e",
                    fontWeight: 700,
                    marginBottom: 12,
                    letterSpacing: "1px",
                  }}
                >
                  {item.num}
                </p>
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#1a1a1a",
                    marginBottom: 12,
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontSize: 15,
                    color: "#6b6560",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. TESTIMONIALS ──────────────────────────────────────────── */}
      <section style={{ background: "#FAF7F2", padding: "80px 24px" }}>
        <div ref={testimonialsRef} style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
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
            Different Founders. The Same.{" "}
            <span style={{ color: "#EA6A47" }}>Problem.</span>
          </h2>

          {TESTIMONIALS.map((t, i) => (
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
                ...fadeUp(testimonialsVisible, i * 150),
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

      {/* ── 7. ONE LAST THING ────────────────────────────────────────── */}
      <section
        ref={footerRef}
        style={{
          background: "#F0EDE8",
          padding: "48px 24px",
          textAlign: "center",
          borderTop: "1px solid #e8e0d5",
          ...fadeIn(footerVisible),
        }}
      >
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 22,
              fontWeight: 600,
              color: "#1a1a1a",
              marginBottom: 12,
              letterSpacing: "-0.01em",
            }}
          >
            One Last Thing
          </h3>
          <p
            style={{
              fontSize: 14,
              color: "#6b6560",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Do not forget to check your inbox. The report sometimes lands in
            promotions. If you do not see it within 24 hours, check your spam
            folder or email us directly at{" "}
            <a
              href="mailto:umair@sochcatalyst.com"
              style={{ color: "#e8633e", textDecoration: "none", fontWeight: 600 }}
            >
              umair@sochcatalyst.com
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
