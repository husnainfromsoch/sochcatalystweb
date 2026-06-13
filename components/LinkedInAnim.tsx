"use client";
import { useEffect, useRef } from "react";

type NotifDef =
  | { type: "person"; bg: string; initials: string; photo?: string; title: string; sub: string; dx: number; dy: number }
  | { type: "li"; title: string; sub: string; dx: number; dy: number }
  | { type: "icon"; emoji: string; bg: string; title: string; sub: string; dx: number; dy: number };

const NOTIF_DEFS: NotifDef[] = [
  { type: "person", bg: "#0a66c2", initials: "AR", photo: "https://randomuser.me/api/portraits/men/32.jpg", title: "Ahmed Rahman sent you a message", sub: '"This is exactly why I backed EdTech…"', dx: -225, dy: -175 },
  { type: "li", title: "Your post is trending 🔥", sub: "Reaching 3× more people than usual", dx: 150, dy: -135 },
  { type: "person", bg: "#44712e", initials: "JM", photo: "https://randomuser.me/api/portraits/men/67.jpg", title: "Mark Jensen wants to connect", sub: "Partner · Andreessen Horowitz", dx: -228, dy: 28 },
  { type: "icon", emoji: "📞", bg: "#e8f4fd", title: "Investor call booked", sub: "$500k seed discussion · Tomorrow 9am", dx: 148, dy: 58 },
  { type: "icon", emoji: "🔔", bg: "#fef9e7", title: "You appeared in 84 searches", sub: "Up 312% this week", dx: -65, dy: -198 },
  { type: "person", bg: "#6c3483", initials: "TP", photo: "https://randomuser.me/api/portraits/women/17.jpg", title: "Priya Nair accepted your request", sub: "CPO · Coursera · San Francisco", dx: 65, dy: 188 },
];

const CSS = `
.licard-card{width:100%;max-width:390px;background:#fff;border-radius:8px;box-shadow:0 0 0 1px rgba(0,0,0,.08),0 2px 4px rgba(0,0,0,.05);overflow:hidden;position:relative;filter:saturate(0.05) brightness(0.82);transition:filter 1.7s ease;font-family:'Source Sans 3',-apple-system,BlinkMacSystemFont,system-ui,sans-serif;font-size:14px;color:rgba(0,0,0,.9)}
.licard-card.alive{filter:saturate(1) brightness(1)}
.licard-scan{position:absolute;left:0;right:0;height:3px;top:-6px;z-index:40;opacity:0;background:linear-gradient(90deg,transparent 0%,rgba(10,102,194,0.95) 50%,transparent 100%);box-shadow:0 0 16px 6px rgba(10,102,194,0.4),0 0 40px 12px rgba(10,102,194,0.15)}
.licard-veil{position:absolute;inset:0;z-index:30;background:rgba(255,255,255,0.7);pointer-events:none;border-radius:8px;transition:opacity 1.1s ease}
.licard-veil.off{opacity:0}
.licard-banner{width:100%;height:104px;position:relative;overflow:hidden;display:block}
.licard-banner svg{width:100%;height:100%;display:block}
.licard-av-section{padding:0 16px;display:flex;align-items:flex-start;justify-content:space-between;margin-top:-38px;margin-bottom:4px}
.licard-av-wrap{position:relative;flex-shrink:0;width:76px;height:76px}
.licard-av-initials{width:76px;height:76px;border-radius:50%;border:3.5px solid #fff;display:flex;align-items:center;justify-content:center;background:#0a66c2;color:#fff;font-size:24px;font-weight:700;box-shadow:0 0 0 1px rgba(0,0,0,.1);box-sizing:border-box}
.licard-av-actions{display:flex;gap:7px;padding-top:44px;align-items:center}
.licard-btn-connect{font-family:'Source Sans 3',sans-serif;font-size:13px;font-weight:600;color:#0a66c2;background:#fff;border:1.5px solid #0a66c2;padding:5px 16px;border-radius:20px;cursor:pointer;line-height:1.4}
.licard-btn-more{width:32px;height:32px;border-radius:50%;background:transparent;border:1.5px solid rgba(0,0,0,.4);cursor:pointer;display:flex;align-items:center;justify-content:center;color:rgba(0,0,0,.55);font-size:18px;font-weight:900;letter-spacing:.5px;line-height:1}
.licard-info{padding:0 16px}
.licard-pname{font-size:20px;font-weight:700;color:rgba(0,0,0,.9);line-height:1.2;display:flex;align-items:center;gap:5px;margin-bottom:1px}
.licard-verify-icon{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:50%;background:#0a66c2;flex-shrink:0}
.licard-pronouns{font-size:13px;font-weight:400;color:rgba(0,0,0,.45)}
.licard-headline{font-size:14px;color:rgba(0,0,0,.9);line-height:1.43;margin-bottom:3px;font-weight:400}
.licard-location-line{font-size:12px;color:rgba(0,0,0,.6);margin-bottom:2px;display:flex;align-items:center;gap:3px;flex-wrap:wrap}
.licard-loc-link{color:#0a66c2;font-weight:600;cursor:pointer}
.licard-followers-line{font-size:12px;color:rgba(0,0,0,.6);margin-bottom:10px}
.licard-followers-line b{color:#0a66c2;font-weight:600;cursor:pointer}
.licard-mutuals{display:flex;align-items:center;gap:7px;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid rgba(0,0,0,.08)}
.licard-mutual-avs{display:flex}
.licard-mav{width:16px;height:16px;border-radius:50%;border:1.5px solid #fff;margin-left:-4px;font-size:7px;font-weight:700;display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0;box-sizing:border-box}
.licard-mav:first-child{margin-left:0}
.licard-mutual-txt{font-size:12px;color:rgba(0,0,0,.6);line-height:1.3}
.licard-mutual-txt b{color:rgba(0,0,0,.75);font-weight:600}
.licard-activity-row{margin:0 16px 10px;display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:#f3f2ef;border-radius:6px}
.licard-act-left{display:flex;align-items:center;gap:7px}
.licard-act-pulse{width:8px;height:8px;border-radius:50%;background:#0a66c2;animation:licard-pulse 1.8s ease-in-out infinite}
@keyframes licard-pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.4);opacity:.5}}
.licard-act-txt{font-size:12px;color:rgba(0,0,0,.65)}
.licard-act-val{font-size:12.5px;font-weight:700;color:#0a66c2}
.licard-divider{height:1px;background:rgba(0,0,0,.08);margin:0 0 10px}
.licard-post-wrap{margin:0 16px 14px}
.licard-post-card{border:1px solid rgba(0,0,0,.1);border-radius:4px;overflow:hidden}
.licard-post-header{padding:10px 12px 7px;display:flex;align-items:flex-start;gap:8px}
.licard-post-av-initials{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#0a66c2;color:#fff;font-size:12px;font-weight:700;flex-shrink:0}
.licard-post-meta{flex:1;min-width:0}
.licard-post-name{font-size:14px;font-weight:700;color:rgba(0,0,0,.9);line-height:1.2}
.licard-post-name span{font-weight:400;color:rgba(0,0,0,.45);font-size:13px}
.licard-post-sub{font-size:12px;color:rgba(0,0,0,.5);line-height:1.3}
.licard-post-time{font-size:12px;color:rgba(0,0,0,.45);display:flex;align-items:center;gap:3px}
.licard-post-more{width:32px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:50%;color:rgba(0,0,0,.5);font-size:20px;font-weight:900;letter-spacing:.5px;line-height:1;flex-shrink:0}
.licard-post-body{font-size:14px;color:rgba(0,0,0,.9);line-height:1.5;padding:0 12px 10px}
.licard-see-more{color:#0a66c2;font-weight:600;cursor:pointer}
.licard-reactions-bar{padding:4px 12px 6px;display:flex;align-items:center;justify-content:space-between}
.licard-react-left{display:flex;align-items:center;gap:4px}
.licard-react-emojis{display:flex;align-items:center}
.licard-re{width:17px;height:17px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;border:1.5px solid #fff;margin-left:-4px;flex-shrink:0;z-index:1;box-sizing:border-box}
.licard-re:first-child{margin-left:0;z-index:3}
.licard-re:nth-child(2){z-index:2}
.licard-react-count{font-size:12px;color:rgba(0,0,0,.6);margin-left:4px}
.licard-react-right{font-size:12px;color:rgba(0,0,0,.6)}
.licard-react-right span{cursor:pointer}
.licard-react-right span+span::before{content:' · '}
.licard-post-actions{border-top:1px solid rgba(0,0,0,.08);display:flex}
.licard-pa{flex:1;display:flex;align-items:center;justify-content:center;gap:5px;padding:10px 4px;font-size:13px;font-weight:600;color:rgba(0,0,0,.6);cursor:pointer;border-radius:2px;transition:background .15s;white-space:nowrap}
.licard-pa:hover{background:rgba(0,0,0,.05)}
.licard-pa svg{width:16px;height:16px;flex-shrink:0;opacity:.7}
.licard-notif{position:absolute;z-index:2;pointer-events:none;background:#fff;border:1px solid rgba(0,0,0,.1);border-radius:6px;padding:8px 12px;display:flex;align-items:center;gap:9px;white-space:nowrap;opacity:0;box-shadow:0 4px 12px rgba(0,0,0,.15),0 0 0 1px rgba(0,0,0,.06);transform:translateY(8px) scale(.9);transition:opacity .38s ease,transform .38s cubic-bezier(.34,1.56,.64,1);font-family:'Source Sans 3',-apple-system,BlinkMacSystemFont,system-ui,sans-serif}
.licard-n-avatar{width:28px;height:28px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#fff}
.licard-n-title{font-size:12px;font-weight:700;color:rgba(0,0,0,.85);line-height:1.2}
.licard-n-sub{font-size:11.5px;color:rgba(0,0,0,.55);line-height:1.3}
.licard-n-icon-wrap{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0}
.licard-n-li{width:28px;height:28px;border-radius:4px;background:#0a66c2;display:flex;align-items:center;justify-content:center;flex-shrink:0}
`;

export default function LinkedInAnim() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let nEls: HTMLElement[] = [];
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    function easeOutQuart(t: number) {
      return 1 - Math.pow(1 - t, 4);
    }

    function countTo(
      el: HTMLElement,
      from: number,
      to: number,
      dur: number,
      fmt: ((v: number) => string) | null
    ) {
      const s = performance.now();
      (function tick(now: number) {
        const p = Math.min((now - s) / dur, 1);
        const v = from + (to - from) * easeOutQuart(p);
        el.textContent = fmt ? fmt(Math.round(v)) : Math.round(v).toLocaleString();
        if (p < 1) requestAnimationFrame(tick);
      })(performance.now());
    }

    function buildNotifs() {
      nEls.forEach((n) => n.remove());
      nEls = [];
      const card = containerRef.current?.querySelector<HTMLElement>(".licard-card");
      if (!card) return;
      const r = card.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;

      NOTIF_DEFS.forEach((n) => {
        const el = document.createElement("div");
        el.className = "licard-notif";
        el.style.left = cx + n.dx - 140 + window.pageXOffset + "px";
        el.style.top = cy + n.dy - 22 + window.pageYOffset + "px";

        let lft = "";
        if (n.type === "person") {
          lft = n.photo
            ? `<div class="licard-n-avatar" style="overflow:hidden;padding:0;background:none"><img src="${n.photo}" style="width:100%;height:100%;object-fit:cover;border-radius:50%"/></div>`
            : `<div class="licard-n-avatar" style="background:${n.bg}">${n.initials}</div>`;
        } else if (n.type === "li") {
          lft = `<div class="licard-n-li"><svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.73a1.77 1.77 0 110-3.54 1.77 1.77 0 010 3.54zM20 19h-3v-5.6c0-3.37-4-3.12-4 0V19h-3V8h3v1.77c1.4-2.59 7-2.78 7 2.48V19z"/></svg></div>`;
        } else {
          lft = `<div class="licard-n-icon-wrap" style="background:${n.bg}">${n.emoji}</div>`;
        }

        el.innerHTML = `${lft}<div class="licard-n-body"><div class="licard-n-title">${n.title}</div><div class="licard-n-sub">${n.sub}</div></div>`;
        document.body.appendChild(el);
        nEls.push(el);
      });
    }

    function runScan() {
      const container = containerRef.current;
      if (!container) return;
      const sl = container.querySelector<HTMLElement>(".licard-scan");
      const card = container.querySelector<HTMLElement>(".licard-card");
      if (!sl || !card) return;
      const h = card.offsetHeight;
      sl.style.transition = "none";
      sl.style.top = "-6px";
      sl.style.opacity = "1";
      const s = performance.now();
      const dur = 1300;
      (function tick(now: number) {
        const p = Math.min((now - s) / dur, 1);
        sl.style.top = p * (h + 12) - 6 + "px";
        if (p < 1) requestAnimationFrame(tick);
        else sl.style.opacity = "0";
      })(performance.now());
    }

    function loop() {
      buildNotifs();
      const container = containerRef.current;
      if (!container) return;

      const card = container.querySelector<HTMLElement>(".licard-card");
      const veil = container.querySelector<HTMLElement>(".licard-veil");
      const follNum = container.querySelector<HTMLElement>("#licard-follNum");
      const connNum = container.querySelector<HTMLElement>("#licard-connNum");
      const actViews = container.querySelector<HTMLElement>("#licard-actViews");
      const sRe = container.querySelector<HTMLElement>("#licard-sRe");
      const sCo = container.querySelector<HTMLElement>("#licard-sCo");
      const sRp = container.querySelector<HTMLElement>("#licard-sRp");

      if (!card || !veil) return;

      card.classList.remove("alive");
      veil.classList.remove("off");
      veil.style.transition = "none";
      veil.style.opacity = "";

      if (follNum) follNum.textContent = "0";
      if (connNum) connNum.textContent = "500";
      if (actViews) actViews.textContent = "0 views";
      if (sRe) sRe.textContent = "0";
      if (sCo) sCo.textContent = "0 comments";
      if (sRp) sRp.textContent = "0 reposts";

      nEls.forEach((n) => {
        n.style.opacity = "0";
        n.style.transform = "translateY(8px) scale(.9)";
      });

      timeouts.push(setTimeout(() => runScan(), 600));

      timeouts.push(
        setTimeout(() => {
          veil.style.transition = "opacity 1.1s ease";
          card.classList.add("alive");
          veil.classList.add("off");
        }, 1500)
      );

      timeouts.push(
        setTimeout(() => {
          if (follNum) countTo(follNum, 0, 8420, 2400, (v) => v.toLocaleString());
          if (connNum) countTo(connNum, 500, 1840, 2200, (v) => v.toLocaleString());
          if (actViews)
            countTo(actViews, 0, 184000, 2200, (v) =>
              v >= 1000 ? Math.floor(v / 1000) + "k views" : v + " views"
            );
        }, 1900)
      );

      timeouts.push(
        setTimeout(() => {
          if (sRe)
            countTo(sRe, 0, 1204, 1800, (v) =>
              v >= 1000 ? (v / 1000).toFixed(1) + "k" : v.toLocaleString()
            );
          if (sCo) countTo(sCo, 0, 86, 1600, (v) => v + " comments");
          if (sRp) countTo(sRp, 0, 34, 1400, (v) => v + " reposts");
        }, 2200)
      );

      NOTIF_DEFS.forEach((_, i) => {
        timeouts.push(
          setTimeout(() => {
            const el = nEls[i];
            if (!el) return;
            el.style.opacity = "1";
            el.style.transform = "translateY(0) scale(1)";
          }, 2600 + i * 300)
        );
      });
    }

    loop();

    return () => {
      timeouts.forEach(clearTimeout);
      nEls.forEach((n) => n.remove());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full flex justify-center">
      <style>{CSS}</style>
      <div className="licard-card">
        <div className="licard-scan" />
        <div className="licard-veil" />

        {/* Banner */}
        <div className="licard-banner">
          <svg
            viewBox="0 0 390 104"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="licard-bg1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1a1a2e" />
                <stop offset="40%" stopColor="#16213e" />
                <stop offset="70%" stopColor="#0f3460" />
                <stop offset="100%" stopColor="#e8633e" />
              </linearGradient>
            </defs>
            <rect width="390" height="104" fill="url(#licard-bg1)" />
            <g stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none">
              <line x1="20" y1="80" x2="90" y2="30" />
              <line x1="90" y1="30" x2="180" y2="60" />
              <line x1="180" y1="60" x2="260" y2="20" />
              <line x1="260" y1="20" x2="350" y2="55" />
              <line x1="350" y1="55" x2="390" y2="35" />
              <line x1="90" y1="30" x2="130" y2="85" />
              <line x1="180" y1="60" x2="220" y2="95" />
              <line x1="260" y1="20" x2="300" y2="80" />
            </g>
            <g fill="rgba(255,255,255,0.25)">
              <circle cx="20" cy="80" r="3" />
              <circle cx="90" cy="30" r="3.5" />
              <circle cx="130" cy="85" r="2.5" />
              <circle cx="180" cy="60" r="3" />
              <circle cx="220" cy="95" r="2" />
              <circle cx="260" cy="20" r="3.5" />
              <circle cx="300" cy="80" r="2.5" />
              <circle cx="350" cy="55" r="3" />
            </g>
            <ellipse cx="320" cy="30" rx="80" ry="50" fill="rgba(255,255,255,0.06)" />
            <ellipse cx="60" cy="75" rx="60" ry="40" fill="rgba(255,255,255,0.04)" />
            <polyline
              points="30,90 80,75 130,80 190,55 240,60 290,38 340,42 380,25"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text
              x="14"
              y="94"
              fontFamily="'Source Sans 3',system-ui,sans-serif"
              fontSize="11"
              fontWeight="300"
              fill="rgba(255,255,255,0.6)"
            >
              Founder &amp; CEO
            </text>
          </svg>
        </div>

        {/* Avatar row */}
        <div className="licard-av-section">
          <div className="licard-av-wrap">
            <div className="licard-av-initials" style={{ overflow: "hidden", padding: 0, background: "none" }}>
              <img alt="" src="https://randomuser.me/api/portraits/women/44.jpg" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
            </div>
          </div>
          <div className="licard-av-actions">
            <button className="licard-btn-connect">Connect</button>
            <div className="licard-btn-more">···</div>
          </div>
        </div>

        {/* Profile info */}
        <div className="licard-info">
          <div className="licard-pname">
            Sarah Mitchell
            <div className="licard-verify-icon">
              <svg viewBox="0 0 16 16" fill="none" width="10" height="10">
                <path
                  d="M3 8l3.5 3.5 6.5-7"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="licard-pronouns">(she/her)</span>
          </div>
          <div className="licard-headline">
            Founder &amp; CEO · Helping B2B SaaS teams close enterprise deals
          </div>
          <div className="licard-location-line">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 1.5C5.79 1.5 4 3.29 4 5.5c0 3.25 4 9 4 9s4-5.75 4-9c0-2.21-1.79-4-4-4z"
                fill="rgba(0,0,0,.45)"
              />
              <circle cx="8" cy="5.5" r="1.5" fill="#f3f2ef" />
            </svg>
            <span>London, United Kingdom</span>
            &nbsp;·&nbsp;
            <span className="licard-loc-link">Contact info</span>
          </div>
          <div className="licard-followers-line">
            <b id="licard-follNum">0</b> followers &nbsp;·&nbsp;{" "}
            <span id="licard-connNum">500</span>+ connections
          </div>

          <div className="licard-mutuals">
            <div className="licard-mutual-avs">
              <div className="licard-mav" style={{ background: "none", overflow: "hidden", padding: 0 }}>
                <img alt="" src="https://randomuser.me/api/portraits/men/22.jpg" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
              </div>
              <div className="licard-mav" style={{ background: "none", overflow: "hidden", padding: 0 }}>
                <img alt="" src="https://randomuser.me/api/portraits/women/28.jpg" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
              </div>
              <div className="licard-mav" style={{ background: "none", overflow: "hidden", padding: 0 }}>
                <img alt="" src="https://randomuser.me/api/portraits/men/45.jpg" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
              </div>
            </div>
            <div className="licard-mutual-txt">
              <b>Mark J.</b>, <b>Priya N.</b> and 22 other mutual connections
            </div>
          </div>
        </div>

        {/* Activity */}
        <div className="licard-activity-row">
          <div className="licard-act-left">
            <div className="licard-act-pulse" />
            <div className="licard-act-txt">Course launch reaching educators now</div>
          </div>
          <div className="licard-act-val" id="licard-actViews">0 views</div>
        </div>

        <div className="licard-divider" />

        {/* Post */}
        <div className="licard-post-wrap">
          <div className="licard-post-card">
            <div className="licard-post-header">
              <div className="licard-post-av-initials" style={{ overflow: "hidden", padding: 0, background: "none" }}>
                <img alt="" src="https://randomuser.me/api/portraits/women/44.jpg" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
              </div>
              <div className="licard-post-meta">
                <div className="licard-post-name">
                  Sarah Mitchell <span>· 1st</span>
                </div>
                <div className="licard-post-sub">Founder &amp; CEO · B2B SaaS</div>
                <div className="licard-post-time">
                  3h &nbsp;·&nbsp;
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6.5" stroke="rgba(0,0,0,.45)" strokeWidth="1.5" />
                    <path
                      d="M5.5 8.5c.8.6 2 1.5 3.8.3"
                      stroke="rgba(0,0,0,.45)"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4.5 5.5c.5-.4 1.2-.5 1.8-.2M10 5c.7.4 1.3.9 1.5 1.6"
                      stroke="rgba(0,0,0,.45)"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="licard-post-more">···</div>
            </div>

            <div className="licard-post-body">
              Most students don{"'"}t fail because they lack talent. They fail because they never had
              access to the right teacher at the right time.
              <br />
              <br />
              That{"'"}s the problem Edolutions is solving.{" "}
              <span className="licard-see-more">…see more</span>
            </div>

            <div className="licard-reactions-bar">
              <div className="licard-react-left">
                <div className="licard-react-emojis">
                  <div className="licard-re" style={{ background: "#0a66c2" }}>
                    <svg viewBox="0 0 16 16" width="10" height="10" fill="#fff">
                      <path d="M1 8.5V14h3V8.5H1zm4-1V14h9l1.5-6.5H9V4c0-.8-.5-1.5-1.5-1.5L7 5l-.5 2.5H5z" />
                    </svg>
                  </div>
                  <div className="licard-re" style={{ background: "#c0392b" }}>❤️</div>
                  <div className="licard-re" style={{ background: "#e67e22" }}>💡</div>
                </div>
                <span className="licard-react-count" id="licard-sRe">0</span>
              </div>
              <div className="licard-react-right">
                <span id="licard-sCo">0 comments</span>
                <span id="licard-sRp">0 reposts</span>
              </div>
            </div>

            <div className="licard-post-actions">
              <div className="licard-pa">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.46 11l-3.91-3.91a7 7 0 00-9.89 9.89L12 23.29l6.34-6.34A6.97 6.97 0 0019.46 11zM12 19.59l-4.95-4.95a5 5 0 117.07-7.07 5 5 0 010 7.07L12 19.59z" />
                </svg>
                Like
              </div>
              <div className="licard-pa">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a7 7 0 01-7 7H8.5L4 22v-4H2a2 2 0 01-2-2V5a2 2 0 012-2h18a2 2 0 012 2v6zm-2 0V5H2v10h4v2.56L8.56 15H16a5 5 0 005-5z" />
                </svg>
                Comment
              </div>
              <div className="licard-pa">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3l-4 4v3c0 7.18-4 11.73-12 13 0-4 1.5-8 6-10H9L4 17V3z" />
                </svg>
                Repost
              </div>
              <div className="licard-pa">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z" />
                </svg>
                Send
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
