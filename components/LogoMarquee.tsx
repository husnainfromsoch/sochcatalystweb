import { CLIENT_LOGOS } from "@/lib/content";

/** Trust strip — placeholder client wordmarks, gently scrolling. */
export function LogoMarquee() {
  const row = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section className="border-b border-line bg-white py-10">
      <div className="container-x">
        <p className="text-center text-[0.8rem] font-medium text-muted">
          Trusted by founders &amp; operators building category authority
        </p>
        <div className="relative mt-7 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-14 pr-14">
            {row.map((name, i) => (
              <span
                key={i}
                className="select-none whitespace-nowrap text-lg font-bold uppercase tracking-tight text-ink/35 transition-colors hover:text-ink/60"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
