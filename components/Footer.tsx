import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/Icons";
import { NAV, CTAS, SERVICES, SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="container-x">
        {/* CTA strip */}
        <div className="flex flex-col items-start gap-6 border-b border-white/10 py-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-h2 text-white">
              Your audience is already on LinkedIn.
            </h2>
            <p className="mt-3 text-white/65">
              Let&apos;s put you in front of them. Book a discovery call or get a
              free audit. No pitch, just a clear plan.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={CTAS.primary.href} variant="primary" size="lg">
              {CTAS.primary.label}
            </Button>
            <Button href={CTAS.secondary.href} variant="light" size="lg">
              {CTAS.secondary.label}
            </Button>
          </div>
        </div>

        {/* link columns */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              A LinkedIn agency for B2B founders and CEOs. We run your profile,
              content and outreach, so the platform brings you work.
            </p>
          </div>

          <FooterCol title="Company">
            {NAV.map((n) => (
              <FooterLink key={n.href} href={n.href}>
                {n.label}
              </FooterLink>
            ))}
            <FooterLink href="/about">About</FooterLink>
          </FooterCol>

          <FooterCol title="Services">
            {SERVICES.slice(0, 5).map((s) => (
              <FooterLink key={s.slug} href={`/services#${s.slug}`}>
                {s.title.replace("LinkedIn ", "")}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Get started">
            <FooterLink href={CTAS.primary.href}>Book a discovery call</FooterLink>
            <FooterLink href={CTAS.secondary.href}>Free LinkedIn audit</FooterLink>
            <FooterLink href={`mailto:${SITE.email}`}>{SITE.email}</FooterLink>
          </FooterCol>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm sm:flex-row">
          <p className="text-white/50">
            © {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Soch Catalyst on LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-white/15 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Icon name="linkedin" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h3>
      <ul className="mt-4 flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-white/60 transition-colors hover:text-brand-light"
      >
        {children}
      </Link>
    </li>
  );
}
