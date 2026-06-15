import { CLIENT_LOGOS } from "@/lib/content";

/** Trust strip - real client logos, gently scrolling. */
export function LogoMarquee() {
  const row = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section className="border-b border-line bg-white py-10">
      <div className="container-x">
        <p className="text-center text-[18px] font-medium text-muted">
          Trusted by founders building category authority
        </p>
        <div className="relative mt-7 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-16 pr-16">
            {row.map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.name}
                style={{
                  height: 56,
                  width: "auto",
                  maxWidth: 200,
                  opacity: 0.55,
                  filter: "grayscale(100%)",
                  objectFit: "contain",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
