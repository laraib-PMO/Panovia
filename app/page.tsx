"use client";
import { useEffect, useRef, useState } from "react";

/* ═══ LOGO ═══ */
function Logo({ size = 25 }: { size?: number }) {
  return (
    <svg viewBox="0 0 190 215" width={size} height={Math.round(size * 1.13)} fill="none">
      <g transform="translate(0,215) scale(.1,-.1)" fill="currentColor">
        <path d="M905 1846c-43-19-646-375-669-395-44-38-46-59-46-481 0-429 1-442 51-486 13-11 168-106 344-210 320-189 320-189 380-189 53 0 69 5 135 44 87 51 111 71 105 81-5 8-96 62-515 308-107 63-205 125-217 139-23 24-23 28-23 303 0 190 4 287 12 304 17 39 457 296 506 296 49 0 475-249 503-294 18-29 19-50 17-303-3-317 8-285-135-368-48-27-88-55-90-61-5-14 220-144 249-144 36 0 187 91 208 126 19 30 20 52 20 450 0 398-1 421-20 451-10 18-36 43-57 56-88 56-591 351-628 368-47 22-89 23-130 5z" />
        <path d="M863 1143l-93-55 0-118 0-119 100-56 100-57 97 59 98 58 0 115 0 115-95 57c-52 32-99 58-105 57-5 0-52-25-102-56z" />
      </g>
    </svg>
  );
}

/* ═══ FAQ ═══ */
function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
      <div className="faq-q">
        <span>{q}</span>
        <span className="faq-icon">+</span>
      </div>
      <div className={`faq-a ${open ? "open" : ""}`}>{a}</div>
    </div>
  );
}

/* ═══ ROLES DATA ═══ */
const roles = [
  {
    id: "pm",
    label: "Project Managers",
    title: "Project Managers",
    pain: "Correspondence chains fragment decisions. Multiple-day email threads become the only record of a critical approval.",
    mechanism: "Panovia threads decisions, approvals and changes into a traceable, searchable record.",
    result: "Decisions have an evidence trail. Follow-up becomes reliable, not reactive.",
  },
  {
    id: "arch",
    label: "Architects",
    title: "Architects",
    pain: "Drawings evolve across revisions, but the field keeps working from outdated versions.",
    mechanism: "Panovia tracks the current accepted revision state and connects it to related decisions and approvals.",
    result: "The right drawing, with its full context, is reachable without asking.",
  },
  {
    id: "field",
    label: "Field Teams",
    title: "Field Executors",
    pain: "The field works from outdated drawings because the latest revision never reaches the site clearly.",
    mechanism: "Panovia surfaces the current, approved version with supporting context — accessible without navigating admin systems.",
    result: "Site teams work from the right information, not the most recently downloaded file.",
  },
  {
    id: "gov",
    label: "Governance",
    title: "Governance & Compliance",
    pain: "Audit trails and evidence records are scattered across inboxes, folders and systems.",
    mechanism: "Panovia maintains a connected, verifiable record of decisions, approvals and changes.",
    result: "Evidence is available when it is needed — not reconstructed under pressure.",
  },
];

/* ═══ MAIN PAGE ═══ */
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
      if (videoRef.current.duration) {
        videoRef.current.currentTime = progress * videoRef.current.duration;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ro = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add("vis"); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".rv").forEach((el) => ro.observe(el));
    return () => ro.disconnect();
  }, []);

  const currentRole = roles.find((r) => r.id === activeRole) || roles[0];

  return (
    <>
      {/* ═══ NAV ═══ */}
      <nav className={`nav ${navScrolled ? "scrolled" : ""}`}>
        <a className="brand" href="#">
          <span className="brand-icon"><Logo size={26} /></span>
          <span className="brand-text">
            <strong>panovia</strong>
            <small>by Attimo</small>
          </span>
        </a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#product" onClick={() => setMenuOpen(false)}>Product</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#roles" onClick={() => setMenuOpen(false)}>Use Cases</a>
          <a href="#trust" onClick={() => setMenuOpen(false)}>Trust</a>
          <a href="#resources" onClick={() => setMenuOpen(false)}>Resources</a>
          <a className="nav-cta" href="#demo" onClick={() => setMenuOpen(false)}>Watch Demo</a>
        </div>
        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>

      <main>
        {/* ═══ SECTION 1 — HERO (Scroll-driven video) ═══ */}
        <div className="scroll-video-container" ref={scrollRef}>
          <div className="scroll-video-sticky">
            <video ref={videoRef} muted playsInline preload="auto" className="scroll-video">
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="scroll-overlay" />

            {/* Layer 1: Main hero */}
            <div className="scroll-text" style={{ opacity: scrollPct < 0.15 ? 1 : Math.max(0, 1 - (scrollPct - 0.15) * 8) }}>
              <span className="eyebrow-pill">
                <span className="pulse-dot" />
                Panovia — by Attimo
              </span>
              <h1>Turn scattered project<br />information into<br />reliable knowledge.</h1>
              <p className="hero-sub">
                Panovia helps AEC teams find the right context, connect the right decisions and move work forward — without forcing a new system on the team.
              </p>
              <div className="cta-row" style={{ justifyContent: "center", marginTop: 36 }}>
                <a className="btn btn-primary" href="#demo">Watch Demo →</a>
                <a className="btn btn-secondary" href="#product">See How It Works</a>
              </div>
            </div>

            {/* Layer 2: Mid-scroll statement */}
            <div className="scroll-text" style={{ opacity: scrollPct > 0.3 && scrollPct < 0.6 ? Math.min(1, (scrollPct - 0.3) * 6) : scrollPct >= 0.6 ? Math.max(0, 1 - (scrollPct - 0.6) * 6) : 0 }}>
              <p className="scroll-caption">Context instead of search.<br />Memory instead of storage.</p>
            </div>

            {/* Layer 3: End scroll */}
            <div className="scroll-text" style={{ opacity: scrollPct > 0.72 ? Math.min(1, (scrollPct - 0.72) * 5) : 0 }}>
              <p className="scroll-caption">Reliable knowledge for teams where the cost of unreliable knowledge is measurable.</p>
            </div>

            <div className="scroll-hint" style={{ opacity: scrollPct < 0.05 ? 1 : 0 }}>
              <span className="scroll-hint-label">Scroll to explore</span>
              <span className="scroll-hint-arrow">↓</span>
            </div>
          </div>
        </div>

        {/* ── Proof Strip ── */}
        <div className="proof-strip">
          {[
            "Works with your current tools",
            "Cited answers",
            "Traceable decisions",
            "Role-based context",
            "No forced migration",
          ].map((item) => (
            <div key={item} className="proof-item">
              <span className="proof-dot" />
              {item}
            </div>
          ))}
        </div>

        {/* ═══ SECTION 2 — THE REAL PROBLEM ═══ */}
        <section className="sec">
          <div className="wrap">
            <span className="sec-label rv">Not search. Reliable knowledge.</span>
            <h2 className="sec-title rv">
              <strong>Teams need more than<br />information.</strong>{" "}
              <span className="dim">They need perspective.</span>
            </h2>
            <p className="problem-body rv">
              Panovia does not list documents. It connects documents, decisions, workflows and responsibilities — so teams work with less rework, clearer follow-up and lower cognitive load. 52% of construction rework is caused by miscommunication and bad data. That is $31.3 billion in avoidable costs every year.
            </p>

            <div className="contrast-grid rv">
              <div className="contrast-card before">
                <span className="contrast-badge">Without Panovia</span>
                <ul className="contrast-list">
                  <li><span className="icon">✕</span> Drawings scattered across emails, WhatsApp and shared drives</li>
                  <li><span className="icon">✕</span> Approvals buried in multi-day email threads</li>
                  <li><span className="icon">✕</span> Field working from outdated revision — no clean way to verify</li>
                  <li><span className="icon">✕</span> Audit trail reconstructed manually under pressure</li>
                  <li><span className="icon">✕</span> 14 hours per week lost on non-productive activities</li>
                </ul>
              </div>
              <div className="contrast-card after">
                <span className="contrast-badge">With Panovia</span>
                <ul className="contrast-list">
                  <li><span className="icon">✓</span> Cited answer with linked document, version and decision context</li>
                  <li><span className="icon">✓</span> Traceable record of who approved, when and why</li>
                  <li><span className="icon">✓</span> Current accepted revision surfaced with supporting context</li>
                  <li><span className="icon">✓</span> Connected evidence record maintained automatically</li>
                  <li><span className="icon">✓</span> Right context, right moment, right hands</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 3 — BENEFITS GRID (Bento) ═══ */}
        <section id="product" className="sec">
          <div className="wrap">
            <span className="sec-label rv">What Panovia does.</span>
            <h2 className="sec-title rv">
              <strong>The right context</strong>{" "}
              <span className="dim">makes the right action possible.</span>
            </h2>

            <div className="bento-grid">
              {[
                {
                  num: "01",
                  title: "Find the right context",
                  body: "The problem is not a lack of files. It is finding the wrong one, too late, without the context around it. Panovia surfaces the right file, version, decision and related history — without making teams dig through folders or ask around.",
                },
                {
                  num: "02",
                  title: "Keep decisions traceable",
                  body: "Approvals, changes, meeting notes and rationale should not disappear across folders and messages. Panovia turns scattered records into a traceable memory of decisions — what changed, why it changed and who owns it.",
                },
                {
                  num: "03",
                  title: "Coordinate across roles",
                  body: "Projects slow down when office, site, consultants and reviewers work in different realities. Panovia makes responsibilities, next steps and supporting context visible across the full workflow.",
                },
                {
                  num: "04",
                  title: "Work with your current tools",
                  body: "Teams already run on Google Drive, Docs, Sheets, email and fragmented systems. Panovia sits on top of that setup to make it more reliable, understandable and usable — without replacing the tools your team already uses.",
                },
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

        {/* ═══ SECTION 4 — HOW PANOVIA WORKS (Proof Cards) ═══ */}
        <section className="sec">
          <div className="wrap">
            <span className="sec-label rv">How Panovia works differently.</span>
            <h2 className="sec-title rv center">
              <strong>Four principles.</strong>{" "}
              <span className="dim">No black box.</span>
            </h2>

            <div className="hiw-grid">
              {[
                { icon: "⟋", title: "How it connects", body: "Ingests existing tools without requiring clean data. WhatsApp, email, drives, portals — connected without changing how your team communicates." },
                { icon: "◎", title: "How it remembers", body: "Builds a living, traceable memory for your project. Not a folder of files. Documents, revisions, decisions and approvals in a structured graph." },
                { icon: "⊕", title: "How it filters", body: "Role-based output, not a shared document list. Architects see revision context. PMs see decision trails. Field teams see the current approved version." },
                { icon: "⟐", title: "How it monitors", body: "Proactive flagging before issues compound. When sources disagree or evidence is missing, Panovia makes it visible and operational." },
              ].map((card, i) => (
                <div key={i} className="hiw-card rv" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="hiw-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTION 5 — WORKFLOW STEPS (Full-width alternating) ═══ */}
        <section id="how-it-works" className="sec">
          <div className="wrap">
            <span className="sec-label rv">The Panovia workflow.</span>
            <h2 className="sec-title rv">
              <strong>Four steps.</strong>{" "}
              <span className="dim">Scattered inputs to reliable knowledge.</span>
            </h2>

            {/* Step 1 */}
            <div className="step-row rv">
              <div className="step-info">
                <span className="step-num">01</span>
                <span className="step-tag">Channel Capture</span>
                <h3>Collects from the tools teams already use.</h3>
                <p>WhatsApp messages, emails, voice notes, meetings and uploaded files — without changing how your team communicates.</p>
              </div>
              <div className="step-mock">
                <div className="mock-panel">
                  <div className="mock-bar">
                    <span className="dot g" /><span className="dot y" /><span className="dot r" />
                    <span className="mock-title">Channel Capture</span>
                  </div>
                  <div className="mock-body">
                    {[
                      { icon: "✉", text: "Email — Structural Rev C approval", status: "ok" },
                      { icon: "💬", text: "WhatsApp — Site photo + confirmation", status: "ok" },
                      { icon: "🎙", text: "Voice note — Subcontractor update", status: "pending" },
                    ].map((row, i) => (
                      <div key={i} className="mock-row">
                        <span className="mock-icon">{row.icon}</span>
                        <span className="mock-text">{row.text}</span>
                        <span className={`mock-status ${row.status}`}>
                          {row.status === "ok" ? "Captured" : "Processing"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step-row reverse rv">
              <div className="step-info">
                <span className="step-num">02</span>
                <span className="step-tag">Knowledge Vault</span>
                <h3>Connects records into a living project memory.</h3>
                <p>Documents, revisions, decisions and approvals in a structured graph. Not a folder. A traceable record of what happened, why and who owns it.</p>
              </div>
              <div className="step-mock">
                <div className="mock-panel">
                  <div className="mock-bar">
                    <span className="dot g" /><span className="dot y" /><span className="dot r" />
                    <span className="mock-title">Neural Map</span>
                  </div>
                  <div className="mock-body">
                    <div className="mock-nodes">
                      {["Drawing A-201", "RFI-0042", "Rev C"].map((n) => (
                        <span key={n} className="mock-node">{n}</span>
                      ))}
                      <span className="mock-node active">Approval ✓</span>
                      <span className="mock-node">Obligation</span>
                      <span className="mock-node">Handover</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="step-row rv">
              <div className="step-info">
                <span className="step-num">03</span>
                <span className="step-tag">AI Copilot</span>
                <h3>Answers with cited sources. Page, section, revision.</h3>
                <p>Grounded in project sources with citations attached. Every answer shows where it came from. Every answer cites its source.</p>
              </div>
              <div className="step-mock">
                <div className="mock-panel">
                  <div className="mock-bar">
                    <span className="dot g" /><span className="dot y" /><span className="dot r" />
                    <span className="mock-title">Cited Answer</span>
                  </div>
                  <div className="mock-body">
                    <div className="mock-q">Current approved revision for Drawing A-201?</div>
                    <div className="mock-a">
                      <strong>Revision C</strong>, approved 12 May 2026 by John Davies.
                      <div className="mock-cite">
                        <span className="cite-badge">Source</span>
                        RFI-0042 — Page 3, §2.4
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="step-row reverse rv">
              <div className="step-info">
                <span className="step-num">04</span>
                <span className="step-tag">Task Tribunal</span>
                <h3>Critical actions require explicit human approval.</h3>
                <p>Human-to-Agent-to-Human governance. Every external action requires explicit human sign-off. No unchecked automation in any workflow.</p>
              </div>
              <div className="step-mock">
                <div className="mock-panel">
                  <div className="mock-bar">
                    <span className="dot g" /><span className="dot y" /><span className="dot r" />
                    <span className="mock-title">Verification</span>
                  </div>
                  <div className="mock-body">
                    <div className="mock-approval">
                      <div className="ap-row"><span className="ap-label">Action</span>Issue drawing set to site team</div>
                      <div className="ap-row"><span className="ap-label">Source</span>RFI-0042 → Rev C</div>
                      <div className="ap-row"><span className="ap-label">Status</span><span className="ap-pending">⏳ Awaiting approval</span></div>
                      <div className="ap-actions">
                        <button className="ap-btn ok">✓ Approve</button>
                        <button className="ap-btn no">✕ Reject</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 6 — WORKFLOW OUTCOMES ═══ */}
        <section className="sec">
          <div className="wrap">
            <span className="sec-label rv">What changes when Panovia is in place.</span>
            <h2 className="sec-title rv center">
              <strong>Measurable outcomes.</strong>{" "}
              <span className="dim">Not feature descriptions.</span>
            </h2>

            <div className="outcome-grid">
              <div className="outcome-card rv">
                <span className="outcome-stat">52%</span>
                <h3>Less time finding the right information</h3>
                <p>Teams stop navigating folders, chasing email threads and asking the same questions again. The right version, with the right context, is reachable.</p>
              </div>
              <div className="outcome-card rv" style={{ transitionDelay: "0.08s" }}>
                <span className="outcome-stat">$31B</span>
                <h3>Fewer wrong-version errors and handover gaps</h3>
                <p>Rework driven by outdated drawings, missed approvals and unclear handovers is reduced. The accepted, current revision state is always visible.</p>
              </div>
              <div className="outcome-card rv" style={{ transitionDelay: "0.16s" }}>
                <span className="outcome-stat">14h</span>
                <h3>Clearer follow-up and decision traceability</h3>
                <p>Approvals do not go missing. Decisions have an evidence trail. Responsibilities are confirmed, not assumed. 14 hours per week reclaimed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 7 — ROLE-BASED USE CASES ═══ */}
        <section id="roles" className="sec">
          <div className="wrap">
            <span className="sec-label rv">Built for the realities of documentation-heavy work.</span>
            <h2 className="sec-title rv">
              <strong>The right context,</strong>{" "}
              <span className="dim">in the right hands.</span>
            </h2>
            <p className="sec-body rv" style={{ marginBottom: 32 }}>
              Different roles hit the same broken system in different ways. Panovia helps each one work with the right information, the right context and clearer follow-through.
            </p>

            <div className="role-tabs rv">
              {roles.map((r) => (
                <button
                  key={r.id}
                  className={`role-tab ${activeRole === r.id ? "active" : ""}`}
                  onClick={() => setActiveRole(r.id)}
                >
                  {r.label}
                </button>
              ))}
            </div>

            <div className="role-content rv">
              <h3>{currentRole.title}</h3>
              <div className="role-detail">
                <div className="role-detail-item">
                  <label>Pain</label>
                  <p>{currentRole.pain}</p>
                </div>
                <div className="role-detail-item">
                  <label>Mechanism</label>
                  <p>{currentRole.mechanism}</p>
                </div>
                <div className="role-detail-item">
                  <label>Result</label>
                  <p>{currentRole.result}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 8 — TRUST & CONTROL ═══ */}
        <section id="trust" className="sec">
          <div className="wrap">
            <span className="sec-label rv">Built for teams that need to trust what they use.</span>
            <h2 className="sec-title rv center">
              <strong>Control, verifiability</strong>{" "}
              <span className="dim">and security are the foundation.</span>
            </h2>
            <p className="sec-body center rv" style={{ marginBottom: 0 }}>
              Panovia is designed for teams where the cost of a wrong answer, a missed approval or a misattributed decision is real.
            </p>

            <div className="trust-grid">
              {[
                ["Human verification", "Panovia supports human sign-off at key decision points. Semi-automation does not mean unchecked automation."],
                ["Source-linked answers", "Every answer cites its source: page, section, revision. No black box in any Panovia output."],
                ["Messy data ready", "Works with fragmented repositories, legacy formats and imperfect inputs — without requiring a clean-up project first."],
                ["Works with existing tools", "Google Drive, OneDrive, WhatsApp, Gmail, Teams and more. A layer, not a forced migration."],
                ["IP protection", "Client content, brand policies and proprietary assets are not used to train models or shared beyond the scope of your workspace."],
                ["Brand and standards enforcement", "Configurable naming conventions, approval protocols and organisational policies — not a generic default."],
              ].map(([t, d], i) => (
                <div key={i} className="trust-card rv" style={{ transitionDelay: `${(i % 3) * 0.08}s` }}>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTION 9 — INTEGRATIONS ═══ */}
        <section className="sec">
          <div className="wrap center">
            <span className="sec-label rv">Integrations</span>
            <h2 className="sec-title rv center">
              Panovia works with the tools<br />your team already uses.
            </h2>

            <div className="integration-strip rv">
              {["Google Drive", "Google Docs", "Google Sheets", "OneDrive", "Gmail", "Microsoft Teams", "Google Meet", "WhatsApp"].map((tool) => (
                <span key={tool} className="int-chip">{tool}</span>
              ))}
            </div>

            <div className="format-strip rv" style={{ marginTop: 20 }}>
              {["IFC", "BIM / Revit", "DWG", "CAD", "PDF", "XLSX", "DOCX"].map((fmt) => (
                <span key={fmt} className="format-tag">{fmt}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTION 10 — RESOURCES ═══ */}
        <section id="resources" className="sec">
          <div className="wrap">
            <span className="sec-label rv">Learn how teams use Panovia.</span>
            <h2 className="sec-title rv">Resources</h2>

            <div className="resource-grid">
              <div className="resource-card rv">
                <span className="resource-tag">Playbook</span>
                <h3>The decision traceability playbook for AEC teams</h3>
                <span className="resource-link">Get the playbook →</span>
              </div>
              <div className="resource-card rv" style={{ transitionDelay: "0.08s" }}>
                <span className="resource-tag">Event</span>
                <h3>How to reduce wrong-version errors in live projects</h3>
                <span className="resource-link">Join the event →</span>
              </div>
              <div className="resource-card rv" style={{ transitionDelay: "0.16s" }}>
                <span className="resource-tag">Use Case</span>
                <h3>Approval and handover tracking for architecture firms</h3>
                <span className="resource-link">Read the use case →</span>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 11 — FAQ ═══ */}
        <section className="sec">
          <div className="wrap">
            <h2 className="sec-title rv center">Common questions.</h2>
            <div className="faq-wrap rv">
              <FAQ
                q="Does Panovia replace our current tools?"
                a="No. Panovia sits on top of the tools your team already uses — including Google Drive, OneDrive, WhatsApp, Gmail, Microsoft Teams and Google Meet. It can also work across common project and document formats such as IFC, Revit, DWG, CAD, PDF, documents and Excel files."
              />
              <FAQ
                q="How does Panovia handle AI outputs?"
                a="Every answer or recommendation Panovia generates includes a cited source. Teams can verify what the output is based on — there is no black box. Every answer cites its source: page, section, revision."
              />
              <FAQ
                q="Can Panovia work with WhatsApp and email?"
                a="Yes. Channel Capture ingests messages, emails, voice notes and field updates into structured project records — without changing how your team communicates."
              />
              <FAQ
                q="Can Panovia identify the current approved revision?"
                a="Yes. The Current Truth Engine determines what is current, superseded, draft, pending or unresolved — so teams always work from the right version."
              />
              <FAQ
                q="How does human verification work?"
                a="Human-to-Agent-to-Human governance. Every external action requires explicit human approval before it moves. Critical actions are routed to the right person for sign-off."
              />
              <FAQ
                q="Can it work with messy project data?"
                a="Yes. Panovia is built to work with fragmented, real-world inputs — not idealised clean data environments. No clean-up project required."
              />
              <FAQ
                q="How is customer data handled?"
                a="Designed for controlled project workspaces. Client content and proprietary assets are not used to train models or shared beyond the scope of your workspace. Data handling is reviewed during implementation."
              />
              <FAQ
                q="How long does implementation take?"
                a="Panovia works with existing systems without requiring cleanup first. Implementation timeline is reviewed during onboarding based on your team's existing setup."
              />
            </div>
          </div>
        </section>

        {/* ═══ SECTION 12 — FINAL CTA ═══ */}
        <section id="demo" className="final-cta">
          <div className="wrap">
            <h2 className="sec-title rv center">Ready to see Panovia<br />in action?</h2>
            <p className="sec-body center rv" style={{ marginBottom: 32 }}>
              A short demo focused on your specific coordination and documentation challenges. No generic walkthrough.
            </p>
            <div className="cta-row center rv">
              <a className="btn btn-accent" href="mailto:hello@panovia.com">Watch the Demo →</a>
              <a className="btn btn-secondary" href="#">Get the Playbook</a>
            </div>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="footer">
        <div className="wrap footer-inner">
          <span className="footer-left">
            © 2026 <a href="https://attimo.com">Panovia</a>, built by Attimo. <a href="https://attimo.com">Learn about our suite →</a>
          </span>
          <span className="footer-right">The right context, at the right moment, in the right hands.</span>
        </div>
      </footer>
    </>
  );
}
