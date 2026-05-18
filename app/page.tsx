"use client";
import { useEffect, useRef, useState } from "react";

function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 190 215" width={size} height={Math.round(size * 1.13)} fill="none">
      <g transform="translate(0,215) scale(.1,-.1)" fill="currentColor">
        <path d="M905 1846c-43-19-646-375-669-395-44-38-46-59-46-481 0-429 1-442 51-486 13-11 168-106 344-210 320-189 320-189 380-189 53 0 69 5 135 44 87 51 111 71 105 81-5 8-96 62-515 308-107 63-205 125-217 139-23 24-23 28-23 303 0 190 4 287 12 304 17 39 457 296 506 296 49 0 475-249 503-294 18-29 19-50 17-303-3-317 8-285-135-368-48-27-88-55-90-61-5-14 220-144 249-144 36 0 187 91 208 126 19 30 20 52 20 450 0 398-1 421-20 451-10 18-36 43-57 56-88 56-591 351-628 368-47 22-89 23-130 5z" />
        <path d="M863 1143l-93-55 0-118 0-119 100-56 100-57 97 59 98 58 0 115 0 115-95 57c-52 32-99 58-105 57-5 0-52-25-102-56z" />
      </g>
    </svg>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
      <div className="faq-q"><span>{q}</span><span className="faq-icon">+</span></div>
      <div className={`faq-a ${open ? "open" : ""}`}>{a}</div>
    </div>
  );
}

const roles = [
  { id: "pm", label: "Project Managers", title: "Project Managers", pain: "Correspondence chains fragment decisions. Email threads become the only record of a critical approval.", mechanism: "Panovia threads decisions, approvals and changes into a traceable, searchable record.", result: "Decisions have an evidence trail. Follow-up becomes reliable, not reactive." },
  { id: "arch", label: "Architects", title: "Architects", pain: "Drawings evolve across revisions, but the field keeps working from outdated versions.", mechanism: "Panovia tracks the current accepted revision state and connects it to related decisions.", result: "The right drawing, with its full context, is reachable without asking." },
  { id: "field", label: "Field Teams", title: "Field Executors", pain: "No reliable way to confirm the right version without calling the office. No connectivity on site.", mechanism: "Panovia surfaces the current, approved version — accessible without navigating admin systems.", result: "Site teams work from the right information, not the most recently downloaded file." },
  { id: "gov", label: "Governance", title: "Governance & Compliance", pain: "Audit trails are scattered across inboxes, folders and systems.", mechanism: "Panovia maintains a connected, verifiable record of decisions, approvals and changes.", result: "Evidence is available when needed — not reconstructed under pressure." },
];

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollPct, setScrollPct] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeRole, setActiveRole] = useState("pm");

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 40);
      if (!scrollRef.current || !videoRef.current) return;
      const rect = scrollRef.current.getBoundingClientRect();
      const scrollH = scrollRef.current.offsetHeight - window.innerHeight;
      const progress = Math.min(Math.max(-rect.top / scrollH, 0), 1);
      setScrollPct(progress);
      if (videoRef.current.duration) videoRef.current.currentTime = progress * videoRef.current.duration;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ro = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add("vis"); }), { threshold: 0.08 });
    document.querySelectorAll(".rv").forEach((el) => ro.observe(el));
    return () => ro.disconnect();
  }, []);

  const currentRole = roles.find((r) => r.id === activeRole) || roles[0];
  const overlayOpacity = Math.max(0.12, 0.98 - Math.max(0, scrollPct - 0.3) * 2.5);

  return (<>
    <nav className={`nav ${navScrolled ? "scrolled" : ""}`}>
      <a className="brand" href="#"><span className="brand-icon"><Logo size={36} /></span><span className="brand-text"><strong>panovia</strong><small>by Attimo</small></span></a>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#product" onClick={() => setMenuOpen(false)}>Product</a>
        <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a>
        <a href="#roles" onClick={() => setMenuOpen(false)}>Use Cases</a>
        <a href="#trust" onClick={() => setMenuOpen(false)}>Trust</a>
        <a className="nav-cta" href="#demo" onClick={() => setMenuOpen(false)}>Watch Demo</a>
      </div>
      <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><span /><span /><span /></button>
    </nav>

    <main>
      {/* ═══ 1. HERO ═══ */}
      <div className="scroll-video-container" ref={scrollRef}>
        <div className="scroll-video-sticky">
          <video ref={videoRef} muted playsInline preload="auto" className="scroll-video"><source src="/hero-video.mp4" type="video/mp4" /></video>
          <div className="scroll-overlay" style={{ background: `rgba(5,10,18,${overlayOpacity})` }} />

          <div className="scroll-text" style={{ opacity: scrollPct < 0.15 ? 1 : Math.max(0, 1 - (scrollPct - 0.15) * 8) }}>
            <span className="eyebrow-pill"><span className="pulse-dot" />Panovia — by Attimo</span>
            <h1>Reliable knowledge.<br />Traceable action.</h1>
            <p className="hero-sub">Panovia connects scattered project information into cited answers, verified revisions and traceable decisions — without replacing the tools your team already uses.</p>
            <div className="cta-row" style={{ justifyContent: "center", marginTop: 36 }}>
              <a className="btn btn-primary" href="#demo">Watch the Demo</a>
              <a className="btn btn-secondary" href="#product">See the Workflow</a>
            </div>
          </div>

          <div className="scroll-text" style={{ opacity: scrollPct > 0.35 && scrollPct < 0.65 ? Math.min(1, (scrollPct - 0.35) * 6) : scrollPct >= 0.65 ? Math.max(0, 1 - (scrollPct - 0.65) * 6) : 0 }}>
            <p className="scroll-caption">Context instead of search.<br />Memory instead of storage.</p>
          </div>

          <div className="scroll-hint" style={{ opacity: scrollPct < 0.05 ? 1 : 0 }}>
            <span className="scroll-hint-label">Scroll to explore</span>
            <span className="scroll-hint-arrow">↓</span>
          </div>
        </div>
      </div>

      <div className="proof-strip">
        {["No migration required", "Cited outputs", "Human verification", "Offline capable"].map((item) => (
          <div key={item} className="proof-item"><span className="proof-dot" />{item}</div>
        ))}
      </div>

      {/* ═══ 2. PRODUCT SHOWCASE (light) ═══ */}
      <section id="product" className="light-sec">
        <div className="wrap">
          <span className="sec-label rv">What Panovia does.</span>
          <h2 className="sec-title rv"><strong>Cited answers. Traceable decisions.<br />Verified revisions.</strong></h2>

          <div className="showcase-frame rv">
            <div className="showcase-bar">
              <span className="dot g" /><span className="dot y" /><span className="dot r" />
              <span className="showcase-bar-title">Panovia — Live Project Context</span>
            </div>
            <div className="showcase-body">
              <div className="showcase-left">
                <div className="showcase-chat">
                  <div className="showcase-q">Current approved revision for Drawing A-201?</div>
                  <div className="showcase-a">
                    <strong>Revision C</strong>, approved 12 May 2026 by J. Malik via RFI-0042. Supersedes Rev B following load calculation review.
                    <div className="showcase-cite"><span className="cite-badge">Source</span>RFI-0042 — Page 3, §2.4</div>
                  </div>
                </div>
              </div>
              <div className="showcase-right">
                <div className="showcase-badge"><span className="pulse-dot" />Current Revision · Verified</div>
                <div className="showcase-row"><span className="sr-label">Drawing</span><span className="sr-value">A-201 · Rev C</span></div>
                <div className="showcase-row"><span className="sr-label">Source</span><span className="sr-value">RFI-0042 · Cited</span></div>
                <div className="showcase-row"><span className="sr-label">Approved by</span><span className="sr-value">J. Malik</span></div>
                <div className="showcase-row"><span className="sr-label">Status</span><span className="sr-value verified">Human Verified</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. HOW IT WORKS — 3 steps (dark) ═══ */}
      <section id="how-it-works" className="dark-sec">
        <div className="wrap">
          <span className="sec-label rv">How Panovia works.</span>
          <h2 className="sec-title rv center"><strong>Three steps.</strong> <span className="dim">Scattered inputs to reliable knowledge.</span></h2>

          <div className="step-row rv">
            <div className="step-info"><span className="step-num">01</span><span className="step-tag">Channel Capture</span><h3>Collects from the tools teams already use.</h3><p>WhatsApp, emails, voice notes and uploaded files — without changing how your team communicates.</p></div>
            <div className="step-mock"><div className="mock-panel"><div className="mock-bar"><span className="dot g" /><span className="dot y" /><span className="dot r" /><span className="mock-title">Capture</span></div><div className="mock-body">
              {[{ icon: "✉️", text: "Email — Rev C approval", st: "ok" }, { icon: "💬", text: "WhatsApp — Site confirmation", st: "ok" }, { icon: "🎙️", text: "Voice — Subcontractor update", st: "pending" }].map((r, i) => (
                <div key={i} className="mock-row"><span className="mock-icon">{r.icon}</span><span className="mock-text">{r.text}</span><span className={`mock-status ${r.st}`}>{r.st === "ok" ? "Captured" : "Processing"}</span></div>
              ))}
            </div></div></div>
          </div>

          <div className="step-row reverse rv">
            <div className="step-info"><span className="step-num">02</span><span className="step-tag">AI Copilot</span><h3>Cited answers from your project memory.</h3><p>Every answer grounded in project sources — page, section, revision. No black box.</p></div>
            <div className="step-mock"><div className="mock-panel"><div className="mock-bar"><span className="dot g" /><span className="dot y" /><span className="dot r" /><span className="mock-title">Cited Answer</span></div><div className="mock-body"><div className="mock-q">Current revision for A-201?</div><div className="mock-a"><strong>Revision C</strong>, approved 12 May by J. Malik.<div className="mock-cite"><span className="cite-badge">Source</span>RFI-0042 — §2.4</div></div></div></div></div>
          </div>

          <div className="step-row rv">
            <div className="step-info"><span className="step-num">03</span><span className="step-tag">Human Verification</span><h3>Critical actions require explicit approval.</h3><p>Human-to-Agent-to-Human governance. No unchecked automation.</p></div>
            <div className="step-mock"><div className="mock-panel"><div className="mock-bar"><span className="dot g" /><span className="dot y" /><span className="dot r" /><span className="mock-title">Verification</span></div><div className="mock-body"><div className="mock-approval"><div className="ap-row"><span className="ap-label">Action</span>Issue drawing set to site</div><div className="ap-row"><span className="ap-label">Source</span>RFI-0042 → Rev C</div><div className="ap-row"><span className="ap-label">Status</span><span className="ap-pending">⏳ Awaiting approval</span></div><div className="ap-actions"><button className="ap-btn ok">✓ Approve</button><button className="ap-btn no">✕ Reject</button></div></div></div></div></div>
          </div>
        </div>
      </section>

      {/* ═══ 4. OUTCOMES (light) ═══ */}
      <section className="light-sec">
        <div className="wrap">
          <h2 className="sec-title rv center"><strong>Measurable outcomes.</strong></h2>
          <div className="outcome-grid">
            <div className="outcome-card rv"><span className="outcome-stat">52%</span><h3>Less time finding information</h3><p>The right version, with the right context, is reachable without chasing email threads.</p></div>
            <div className="outcome-card rv" style={{ transitionDelay: ".08s" }}><span className="outcome-stat">$31B</span><h3>Fewer wrong-version errors</h3><p>Rework driven by outdated drawings and missed approvals is reduced.</p></div>
            <div className="outcome-card rv" style={{ transitionDelay: ".16s" }}><span className="outcome-stat">14h</span><h3>Reclaimed per person, per week</h3><p>Decisions have an evidence trail. Responsibilities are confirmed, not assumed.</p></div>
          </div>
        </div>
      </section>

      {/* ═══ 5. ROLES (dark) ═══ */}
      <section id="roles" className="dark-sec">
        <div className="wrap">
          <span className="sec-label rv">Use cases.</span>
          <h2 className="sec-title rv"><strong>The right context,</strong> <span className="dim">in the right hands.</span></h2>
          <div className="role-tabs rv">{roles.map((r) => (<button key={r.id} className={`role-tab ${activeRole === r.id ? "active" : ""}`} onClick={() => setActiveRole(r.id)}>{r.label}</button>))}</div>
          <div className="role-content rv"><h3>{currentRole.title}</h3><div className="role-detail"><div className="role-detail-item"><label>Pain</label><p>{currentRole.pain}</p></div><div className="role-detail-item"><label>Mechanism</label><p>{currentRole.mechanism}</p></div><div className="role-detail-item"><label>Result</label><p>{currentRole.result}</p></div></div></div>
        </div>
      </section>

      {/* ═══ 6. TRUST + TOOLS (light) ═══ */}
      <section id="trust" className="light-sec">
        <div className="wrap">
          <h2 className="sec-title rv center"><strong>Built for teams that need<br />to trust what they use.</strong></h2>
          <div className="trust-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            {[["Source-linked answers", "Every answer cites its source: page, section, revision. No black box."], ["Human verification", "Human sign-off at key decision points. No unchecked automation."], ["Messy data ready", "Works with fragmented repositories and legacy formats — no clean-up required."], ["Works with existing tools", "Google Drive, OneDrive, WhatsApp, Gmail, Teams. A layer, not a migration."]].map(([t, d], i) => (
              <div key={i} className="trust-card rv" style={{ transitionDelay: `${(i % 2) * 0.08}s` }}><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>

          <div style={{ marginTop: 80 }}>
            <h2 className="sec-title rv center">Works with your tools.</h2>
            <div className="tool-grid rv">
              {[{ n: "Google Drive", i: "📁" }, { n: "Gmail", i: "✉️" }, { n: "WhatsApp", i: "💬" }, { n: "Teams", i: "👥" }, { n: "OneDrive", i: "☁️" }, { n: "Meet", i: "📹" }, { n: "Docs", i: "📄" }, { n: "Sheets", i: "📊" }].map((t) => (
                <div key={t.n} className="tool-card"><div className="tool-icon">{t.i}</div><div className="tool-name">{t.n}</div></div>
              ))}
            </div>
            <div className="format-row rv" style={{ marginTop: 20 }}>
              {["IFC", "Revit", "DWG", "CAD", "PDF", "XLSX"].map((f) => (<span key={f} className="format-tag">{f}</span>))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7. FAQ (dark) ═══ */}
      <section className="dark-sec">
        <div className="wrap">
          <h2 className="sec-title rv center">Common questions.</h2>
          <div className="faq-wrap rv">
            <FAQ q="Does Panovia replace our current tools?" a="No. Panovia sits on top of the tools your team already uses — Google Drive, OneDrive, WhatsApp, Gmail, Teams." />
            <FAQ q="How does Panovia handle AI outputs?" a="Every answer includes a cited source. Teams can verify what the output is based on — no black box." />
            <FAQ q="Can it work with messy project data?" a="Yes. Built for fragmented, real-world inputs — not idealised clean data environments." />
            <FAQ q="How does human verification work?" a="Human-to-Agent-to-Human governance. Every external action requires explicit human approval." />
          </div>
        </div>
      </section>

      {/* ═══ 8. FINAL CTA (light) ═══ */}
      <section id="demo" className="light-sec final-cta">
        <div className="wrap">
          <h2 className="sec-title rv center">See Panovia in action.</h2>
          <p className="sec-body center rv" style={{ marginBottom: 36 }}>A focused walkthrough for your coordination and documentation challenges.</p>
          <div className="cta-row center rv">
            <a className="btn btn-accent" href="mailto:hello@panovia.com">Watch the Demo</a>
            <a className="btn btn-secondary-dark" href="#">Get the Playbook</a>
          </div>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="wrap footer-inner">
        <span className="footer-left">© 2026 <a href="https://attimo.com">Panovia</a>, built by Attimo. <a href="https://attimo.com">Learn about our suite →</a></span>
        <span className="footer-right">The right context, at the right moment, in the right hands.</span>
      </div>
    </footer>
  </>);
}
