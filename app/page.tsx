"use client";
import { useEffect, useRef, useState } from "react";

/* ═══ LOGO — FIX #6: larger (36px) ═══ */
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
  { id: "pm", label: "Project Managers", title: "Project Managers", pain: "Correspondence chains fragment decisions. Multiple-day email threads become the only record of a critical approval.", mechanism: "Panovia threads decisions, approvals and changes into a traceable, searchable record.", result: "Decisions have an evidence trail. Follow-up becomes reliable, not reactive." },
  { id: "arch", label: "Architects", title: "Architects", pain: "Drawings evolve across revisions, but the field keeps working from outdated versions.", mechanism: "Panovia tracks the current accepted revision state and connects it to related decisions and approvals.", result: "The right drawing, with its full context, is reachable without asking." },
  { id: "field", label: "Field Teams", title: "Field Executors", pain: "The field works from outdated drawings because the latest revision never reaches the site clearly.", mechanism: "Panovia surfaces the current, approved version with supporting context — accessible without navigating admin systems.", result: "Site teams work from the right information, not the most recently downloaded file." },
  { id: "gov", label: "Governance", title: "Governance & Compliance", pain: "Audit trails and evidence records are scattered across inboxes, folders and systems.", mechanism: "Panovia maintains a connected, verifiable record of decisions, approvals and changes.", result: "Evidence is available when it is needed — not reconstructed under pressure." },
];

const tools = [
  { name: "Google Drive", icon: "📁", sub: "Cloud storage" },
  { name: "Gmail", icon: "✉️", sub: "Email" },
  { name: "WhatsApp", icon: "💬", sub: "Messaging" },
  { name: "Microsoft Teams", icon: "👥", sub: "Collaboration" },
  { name: "OneDrive", icon: "☁️", sub: "Cloud storage" },
  { name: "Google Meet", icon: "📹", sub: "Meetings" },
  { name: "Google Docs", icon: "📄", sub: "Documents" },
  { name: "Google Sheets", icon: "📊", sub: "Spreadsheets" },
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

  return (<>
    {/* ═══ NAV — #5 lighter links, #6 bigger logo ═══ */}
    <nav className={`nav ${navScrolled ? "scrolled" : ""}`}>
      <a className="brand" href="#">
        <span className="brand-icon"><Logo size={36} /></span>
        <span className="brand-text"><strong>panovia</strong><small>by Attimo</small></span>
      </a>
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
      {/* ═══ HERO — #4 two-line slogan, #3 equal buttons ═══ */}
      <div className="scroll-video-container" ref={scrollRef}>
        <div className="scroll-video-sticky">
          <video ref={videoRef} muted playsInline preload="auto" className="scroll-video">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="scroll-overlay" />

          <div className="scroll-text" style={{ opacity: scrollPct < 0.15 ? 1 : Math.max(0, 1 - (scrollPct - 0.15) * 8) }}>
            <span className="eyebrow-pill"><span className="pulse-dot" />Panovia — by Attimo</span>
            <h1>Turn scattered project information<br />into reliable knowledge.</h1>
            <p className="hero-sub">Panovia helps AEC teams find the right context, connect the right decisions and move work forward — without forcing a new system on the team.</p>
            <div className="cta-row" style={{ justifyContent: "center", marginTop: 36 }}>
              <a className="btn btn-primary" href="#demo">Watch the Demo</a>
              <a className="btn btn-secondary" href="#product">See the Workflow</a>
            </div>
          </div>

          <div className="scroll-text" style={{ opacity: scrollPct > 0.3 && scrollPct < 0.6 ? Math.min(1, (scrollPct - 0.3) * 6) : scrollPct >= 0.6 ? Math.max(0, 1 - (scrollPct - 0.6) * 6) : 0 }}>
            <p className="scroll-caption">Context instead of search.<br />Memory instead of storage.</p>
          </div>

          <div className="scroll-text" style={{ opacity: scrollPct > 0.72 ? Math.min(1, (scrollPct - 0.72) * 5) : 0 }}>
            <p className="scroll-caption">Reliable knowledge for teams where the cost of unreliable knowledge is measurable.</p>
          </div>

          <div className="scroll-hint" style={{ opacity: scrollPct < 0.05 ? 1 : 0 }}>
            <span className="scroll-hint-label">Scroll to explore</span>
            <span className="scroll-hint-arrow">↓</span>
          </div>
        </div>
      </div>

      <div className="proof-strip">
        {["No migration required", "Cited outputs", "Human verification", "Role-based context", "Offline capable"].map((item) => (
          <div key={item} className="proof-item"><span className="proof-dot" />{item}</div>
        ))}
      </div>

      {/* ═══ #2 LARGE PRODUCT SHOWCASE ═══ */}
      <section id="product" className="sec">
        <div className="wrap">
          <span className="sec-label rv">What Panovia does.</span>
          <h2 className="sec-title rv center"><strong>See how context becomes<br />reliable knowledge.</strong></h2>

          <div className="showcase-frame rv">
            <div className="showcase-bar">
              <span className="dot g" /><span className="dot y" /><span className="dot r" />
              <span className="showcase-bar-title">Panovia — Live Project Context</span>
            </div>
            <div className="showcase-body">
              <div className="showcase-left">
                <div className="showcase-chat">
                  <div className="showcase-q">What is the current approved revision for Drawing A-201?</div>
                  <div className="showcase-a">
                    <strong>Revision C</strong>, approved 12 May 2026 by J. Malik via RFI-0042.
                    <br /><br />
                    This revision supersedes Rev B (issued 28 March 2026). The structural amendment was requested following the load calculation review in §2.4.
                    <div className="showcase-cite">
                      <span className="cite-badge">Source</span>
                      RFI-0042 — Page 3, §2.4 · Drawing Register v12
                    </div>
                  </div>
                </div>
              </div>
              <div className="showcase-right">
                <div className="showcase-badge"><span className="pulse-dot" />Current Revision · Verified</div>
                {[
                  { label: "Drawing", value: "A-201 · Rev C", cls: "" },
                  { label: "Source", value: "RFI-0042 · Cited", cls: "" },
                  { label: "Approved by", value: "J. Malik", cls: "" },
                  { label: "Status", value: "Human Verified", cls: "verified" },
                  { label: "Supersedes", value: "Rev B · 28 Mar", cls: "" },
                ].map((row, i) => (
                  <div key={i} className="showcase-row">
                    <span className="sr-label">{row.label}</span>
                    <span className={`sr-value ${row.cls}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BENEFITS (bolder cards) ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="bento-grid">
            {[
              { num: "01", title: "Find the right context", body: "Surface the right file, version, decision and related history — without making teams dig through folders or ask around." },
              { num: "02", title: "Keep decisions traceable", body: "Approvals, changes, meeting notes and rationale turned into a traceable memory of decisions — what changed, why and who owns it." },
              { num: "03", title: "Coordinate across roles", body: "Office, site, consultants and reviewers see the same current project context. Responsibilities, next steps and supporting context — visible across the full workflow." },
              { num: "04", title: "Work with your current tools", body: "Panovia sits on top of Google Drive, Docs, email and fragmented systems to make them more reliable — without replacing the tools your team already uses." },
            ].map((card) => (
              <div key={card.num} className="bento-card rv">
                <span className="card-num">{card.num}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <span className="bento-link">See the workflow →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ #7 LIGHT SECTION — "From disconnected to connected" ═══ */}
      <section className="light-section">
        <div className="wrap">
          <span className="sec-label rv center" style={{ textAlign: "center", display: "block" }}>How it connects</span>
          <h2 className="sec-title rv center"><strong>From disconnected records</strong><br /><span className="dim">to connected context.</span></h2>

          <div className="light-connect-grid rv">
            <div className="connect-col">
              <span className="connect-col-label">Scattered inputs</span>
              {["WhatsApp approval", "Email thread", "Drawing revision", "Site update", "Meeting note"].map((item) => (
                <div key={item} className="connect-item">{item}</div>
              ))}
            </div>
            <div className="connect-center">
              <div className="connect-arrow">Panovia connects</div>
            </div>
            <div className="connect-col">
              <span className="connect-col-label">Connected output</span>
              {[
                { text: "Current Revision", status: "Verified", cls: "green" },
                { text: "Cited Source", status: "Linked", cls: "blue" },
                { text: "Decision Owner", status: "Confirmed", cls: "green" },
                { text: "Next Action", status: "Traceable", cls: "blue" },
                { text: "Evidence Trail", status: "Intact", cls: "green" },
              ].map((item) => (
                <div key={item.text} className="connect-output">
                  <span>{item.text}</span>
                  <span className={`connect-status ${item.cls}`}>{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="light-exit" />

      {/* ═══ WORKFLOW STEPS ═══ */}
      <section id="how-it-works" className="sec">
        <div className="wrap">
          <span className="sec-label rv">How Panovia works.</span>
          <h2 className="sec-title rv center"><strong>Four steps.</strong> <span className="dim">Scattered inputs to reliable knowledge.</span></h2>

          {/* Step 1: Channel Capture */}
          <div className="step-row rv">
            <div className="step-info"><span className="step-num">01</span><span className="step-tag">Channel Capture</span><h3>Collects from the tools teams already use.</h3><p>WhatsApp messages, emails, voice notes, meetings and uploaded files — without changing how your team communicates.</p></div>
            <div className="step-mock">
              <div className="mock-panel"><div className="mock-bar"><span className="dot g" /><span className="dot y" /><span className="dot r" /><span className="mock-title">Capture</span></div><div className="mock-body">
                {[{ icon: "✉️", text: "Email — Structural Rev C approval", st: "ok" }, { icon: "💬", text: "WhatsApp — Site photo + confirmation", st: "ok" }, { icon: "🎙️", text: "Voice note — Subcontractor update", st: "pending" }].map((r, i) => (
                  <div key={i} className="mock-row"><span className="mock-icon">{r.icon}</span><span className="mock-text">{r.text}</span><span className={`mock-status ${r.st}`}>{r.st === "ok" ? "Captured" : "Processing"}</span></div>
                ))}
              </div></div>
            </div>
          </div>

          {/* Step 2: Knowledge Vault */}
          <div className="step-row reverse rv">
            <div className="step-info"><span className="step-num">02</span><span className="step-tag">Knowledge Vault</span><h3>Connects records into a living project memory.</h3><p>Documents, revisions, decisions and approvals in a structured graph. Not a folder. A traceable record of what happened, why and who owns it.</p></div>
            <div className="step-mock">
              <div className="mock-panel"><div className="mock-bar"><span className="dot g" /><span className="dot y" /><span className="dot r" /><span className="mock-title">Neural Map</span></div><div className="mock-body">
                <div className="mock-nodes">{["Drawing A-201", "RFI-0042", "Rev C"].map((n) => <span key={n} className="mock-node">{n}</span>)}<span className="mock-node active">Approval ✓</span><span className="mock-node">Obligation</span><span className="mock-node">Handover</span></div>
              </div></div>
            </div>
          </div>

          {/* Step 3: AI Copilot */}
          <div className="step-row rv">
            <div className="step-info"><span className="step-num">03</span><span className="step-tag">AI Copilot</span><h3>Answers with cited sources. Page, section, revision.</h3><p>Grounded in project sources with citations attached. Every answer shows where it came from.</p></div>
            <div className="step-mock">
              <div className="mock-panel"><div className="mock-bar"><span className="dot g" /><span className="dot y" /><span className="dot r" /><span className="mock-title">Cited Answer</span></div><div className="mock-body">
                <div className="mock-q">Current approved revision for Drawing A-201?</div>
                <div className="mock-a"><strong>Revision C</strong>, approved 12 May 2026 by J. Malik.<div className="mock-cite"><span className="cite-badge">Source</span>RFI-0042 — Page 3, §2.4</div></div>
              </div></div>
            </div>
          </div>

          {/* Step 4: Task Tribunal */}
          <div className="step-row reverse rv">
            <div className="step-info"><span className="step-num">04</span><span className="step-tag">Task Tribunal</span><h3>Critical actions require explicit human approval.</h3><p>Human-to-Agent-to-Human governance. No unchecked automation in any workflow.</p></div>
            <div className="step-mock">
              <div className="mock-panel"><div className="mock-bar"><span className="dot g" /><span className="dot y" /><span className="dot r" /><span className="mock-title">Verification</span></div><div className="mock-body">
                <div className="mock-approval">
                  <div className="ap-row"><span className="ap-label">Action</span>Issue drawing set to site team</div>
                  <div className="ap-row"><span className="ap-label">Source</span>RFI-0042 → Rev C</div>
                  <div className="ap-row"><span className="ap-label">Status</span><span className="ap-pending">⏳ Awaiting approval</span></div>
                  <div className="ap-actions"><button className="ap-btn ok">✓ Approve</button><button className="ap-btn no">✕ Reject</button></div>
                </div>
              </div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OUTCOMES ═══ */}
      <section className="sec">
        <div className="wrap">
          <span className="sec-label rv">What changes when Panovia is in place.</span>
          <h2 className="sec-title rv center"><strong>Measurable outcomes.</strong> <span className="dim">Not feature descriptions.</span></h2>
          <div className="outcome-grid">
            <div className="outcome-card rv"><span className="outcome-stat">52%</span><h3>Less time finding information</h3><p>Teams stop navigating folders, chasing email threads and asking the same questions again. The right version, with the right context, is reachable.</p></div>
            <div className="outcome-card rv" style={{ transitionDelay: ".08s" }}><span className="outcome-stat">$31B</span><h3>Fewer wrong-version errors</h3><p>Rework driven by outdated drawings, missed approvals and unclear handovers is reduced. The current revision state is always visible.</p></div>
            <div className="outcome-card rv" style={{ transitionDelay: ".16s" }}><span className="outcome-stat">14h</span><h3>Reclaimed per person, per week</h3><p>Approvals do not go missing. Decisions have an evidence trail. Responsibilities are confirmed, not assumed.</p></div>
          </div>
        </div>
      </section>

      {/* ═══ ROLES ═══ */}
      <section id="roles" className="sec">
        <div className="wrap">
          <span className="sec-label rv">Built for the realities of documentation-heavy work.</span>
          <h2 className="sec-title rv"><strong>The right context,</strong> <span className="dim">in the right hands.</span></h2>
          <p className="sec-body rv" style={{ marginBottom: 32 }}>Different roles hit the same broken system in different ways. Panovia helps each one work with the right information and clearer follow-through.</p>
          <div className="role-tabs rv">{roles.map((r) => (<button key={r.id} className={`role-tab ${activeRole === r.id ? "active" : ""}`} onClick={() => setActiveRole(r.id)}>{r.label}</button>))}</div>
          <div className="role-content rv">
            <h3>{currentRole.title}</h3>
            <div className="role-detail">
              <div className="role-detail-item"><label>Pain</label><p>{currentRole.pain}</p></div>
              <div className="role-detail-item"><label>Mechanism</label><p>{currentRole.mechanism}</p></div>
              <div className="role-detail-item"><label>Result</label><p>{currentRole.result}</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST ═══ */}
      <section id="trust" className="sec">
        <div className="wrap">
          <h2 className="sec-title rv center"><strong>Control, verifiability</strong> <span className="dim">and security are the foundation.</span></h2>
          <div className="trust-grid">
            {[["Human verification", "Panovia supports human sign-off at key decision points. Semi-automation does not mean unchecked automation."], ["Source-linked answers", "Every answer cites its source: page, section, revision. No black box in any Panovia output."], ["Messy data ready", "Works with fragmented repositories, legacy formats and imperfect inputs — without requiring a clean-up project first."], ["Works with existing tools", "Google Drive, OneDrive, WhatsApp, Gmail, Teams and more. A layer, not a forced migration."], ["IP protection", "Client content and proprietary assets are not used to train models or shared beyond the scope of your workspace."], ["Standards enforcement", "Configurable naming conventions, approval protocols and organisational policies — not a generic default."]].map(([t, d], i) => (
              <div key={i} className="trust-card rv" style={{ transitionDelay: `${(i % 3) * 0.08}s` }}><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ #9 INTEGRATIONS — HIGHLIGHTED ═══ */}
      <section className="int-section">
        <div className="wrap center">
          <span className="sec-label rv">Integrations</span>
          <h2 className="sec-title rv center">Works with the tools<br />your team already uses.</h2>
          <div className="tool-grid rv">
            {tools.map((t) => (
              <div key={t.name} className="tool-card">
                <div className="tool-icon">{t.icon}</div>
                <div><div className="tool-name">{t.name}</div><div className="tool-sub">{t.sub}</div></div>
              </div>
            ))}
          </div>
          <div className="format-row rv" style={{ marginTop: 28 }}>
            {["IFC", "BIM / Revit", "DWG", "CAD", "PDF", "XLSX", "DOCX"].map((fmt) => (
              <span key={fmt} className="format-tag">{fmt}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RESOURCES ═══ */}
      <section className="sec">
        <div className="wrap">
          <span className="sec-label rv">Learn how teams use Panovia.</span>
          <h2 className="sec-title rv">Resources</h2>
          <div className="resource-grid">
            <div className="resource-card rv"><span className="resource-tag">Playbook</span><h3>The decision traceability playbook for AEC teams</h3><span className="resource-link">Get the playbook →</span></div>
            <div className="resource-card rv" style={{ transitionDelay: ".08s" }}><span className="resource-tag">Event</span><h3>How to reduce wrong-version errors in live projects</h3><span className="resource-link">Join the event →</span></div>
            <div className="resource-card rv" style={{ transitionDelay: ".16s" }}><span className="resource-tag">Use Case</span><h3>Approval and handover tracking for architecture firms</h3><span className="resource-link">Read the use case →</span></div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="sec">
        <div className="wrap">
          <h2 className="sec-title rv center">Common questions.</h2>
          <div className="faq-wrap rv">
            <FAQ q="Does Panovia replace our current tools?" a="No. Panovia sits on top of the tools your team already uses — including Google Drive, OneDrive, WhatsApp, Gmail, Microsoft Teams and Google Meet." />
            <FAQ q="How does Panovia handle AI outputs?" a="Every answer includes a cited source. Teams can verify what the output is based on — there is no black box." />
            <FAQ q="Can Panovia work with WhatsApp and email?" a="Yes. Channel Capture ingests messages, emails and voice notes into structured project records — without changing how your team communicates." />
            <FAQ q="Can it identify the current approved revision?" a="Yes. The Current Truth Engine determines what is current, superseded, draft, pending or unresolved." />
            <FAQ q="How does human verification work?" a="Human-to-Agent-to-Human governance. Every external action requires explicit human approval before it moves." />
            <FAQ q="Can it work with messy project data?" a="Yes. Built for fragmented, real-world inputs — not idealised clean data environments. No clean-up project required." />
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section id="demo" className="final-cta">
        <div className="wrap">
          <h2 className="sec-title rv center">Ready to see Panovia<br />in action?</h2>
          <p className="sec-body center rv" style={{ marginBottom: 36 }}>A focused walkthrough for your specific coordination and documentation challenges.</p>
          <div className="cta-row center rv">
            <a className="btn btn-accent" href="mailto:hello@panovia.com">Watch the Demo</a>
            <a className="btn btn-secondary" href="#">Get the Playbook</a>
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
