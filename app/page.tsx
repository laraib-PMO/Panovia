"use client";
import { useEffect, useState } from "react";

function Logo({ size = 25 }: { size?: number }) {
  return (<svg viewBox="0 0 190 215" width={size} height={Math.round(size*1.13)} fill="none"><g transform="translate(0,215) scale(.1,-.1)" fill="currentColor"><path d="M905 1846c-43-19-646-375-669-395-44-38-46-59-46-481 0-429 1-442 51-486 13-11 168-106 344-210 320-189 320-189 380-189 53 0 69 5 135 44 87 51 111 71 105 81-5 8-96 62-515 308-107 63-205 125-217 139-23 24-23 28-23 303 0 190 4 287 12 304 17 39 457 296 506 296 49 0 475-249 503-294 18-29 19-50 17-303-3-317 8-285-135-368-48-27-88-55-90-61-5-14 220-144 249-144 36 0 187 91 208 126 19 30 20 52 20 450 0 398-1 421-20 451-10 18-36 43-57 56-88 56-591 351-628 368-47 22-89 23-130 5z"/><path d="M863 1143l-93-55 0-118 0-119 100-56 100-57 97 59 98 58 0 115 0 115-95 57c-52 32-99 58-105 57-5 0-52-25-102-56z"/></g></svg>);
}
function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (<div className={`faq-item ${open?"open":""}`} onClick={()=>setOpen(!open)}><div className="faq-q"><span>{q}</span><span className="faq-icon">{open?"−":"+"}</span></div><div className={`faq-a ${open?"faq-a-open":""}`}>{a}</div></div>);
}

export default function Home() {
  useEffect(() => {
    const ro = new IntersectionObserver((es) => es.forEach((e) => { if(e.isIntersecting) e.target.classList.add("vis"); }), { threshold: 0.08 });
    document.querySelectorAll(".rv").forEach((el) => ro.observe(el));
    return () => ro.disconnect();
  }, []);

  return (<>
    <nav className="nav"><a className="brand" href="#"><span className="mark"><Logo size={28}/></span><span><strong>panovia</strong><span className="brand-sub">by attimo</span></span></a>
      <div className="links"><a href="#product">Product</a><a href="#how">How It Works</a><a href="#roles">Use Cases</a><a href="#trust">Trust</a><a className="btn btn-primary" href="#demo">Watch Demo</a></div>
    </nav>

    <main>
    {/* ═══ HERO — full bleed video like Endra ═══ */}
    <section className="hero">
      <div className="hero-video-wrap" aria-hidden="true"><video autoPlay muted loop playsInline preload="metadata"><source src="/hero-video.mp4" type="video/mp4"/></video></div>
      <div className="hero-fade" aria-hidden="true"/>
      <div className="hero-content">
        <div className="eyebrow rv">AEC project memory layer</div>
        <h1 className="rv">Turn scattered AEC<br/>project information into<br/>reliable knowledge.</h1>
        <p className="sub rv">Panovia connects drawings, RFIs, approvals, emails and site updates into cited answers, verified revisions and traceable action.</p>
        <div className="cta-row rv"><a className="btn btn-primary" href="#demo">Watch Demo</a><a className="btn btn-secondary" href="#product">See the Workflow</a></div>
      </div>
    </section>

    {/* ═══ PRODUCT SHOWCASE — Endra-style large cards ═══ */}
    <section id="product" className="sec">
      <div className="wrap">
        <h2 className="sec-title rv"><strong>Context instead of search.</strong><br/><span className="dim">Memory instead of storage.</span></h2>

        {/* Big 2-col showcase cards */}
        <div className="showcase-card rv">
          <div className="showcase-text">
            <span className="showcase-label">Current context</span>
            <h3>Find the right context</h3>
            <p>Surface the right file, version, decision and related history without digging through folders.</p>
          </div>
          <div className="showcase-visual">
            <div className="showcase-mock">
              <div className="pf-header"><span className="pf-badge"><span className="pf-dot"/>Current Revision · Verified</span></div>
              <div className="pf-rows">
                <div className="pf-row"><span>Drawing</span><span>A-201 · Rev C</span></div>
                <div className="pf-row"><span>Source</span><span>RFI-0042 · Cited</span></div>
                <div className="pf-row"><span>Approved by</span><span>J. Malik</span></div>
                <div className="pf-row"><span>Status</span><span className="pf-verified">Human Verified</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="showcase-card rv reverse">
          <div className="showcase-text">
            <span className="showcase-label">Linked approval</span>
            <h3>Keep decisions traceable</h3>
            <p>Connect approvals, changes and meeting notes into a record of what changed, why and who owns it.</p>
          </div>
          <div className="showcase-visual">
            <svg className="showcase-svg" viewBox="0 0 440 260" fill="none">
              <rect x="30" y="30" width="140" height="50" rx="8" stroke="var(--line2)" strokeWidth="1.5" fill="rgba(15,23,42,.5)"/>
              <text x="60" y="60" fill="var(--muted)" fontSize="12" fontFamily="'JetBrains Mono',monospace">RFI-0042</text>
              <rect x="270" y="30" width="140" height="50" rx="8" stroke="var(--line2)" strokeWidth="1.5" fill="rgba(15,23,42,.5)"/>
              <text x="295" y="60" fill="var(--muted)" fontSize="12" fontFamily="'JetBrains Mono',monospace">Approval</text>
              <rect x="150" y="160" width="140" height="50" rx="8" stroke="var(--ok)" strokeWidth="2" fill="rgba(52,211,153,.08)"/>
              <text x="170" y="190" fill="var(--ok)" fontSize="12" fontFamily="'JetBrains Mono',monospace">Linked Record</text>
              <line className="draw-edge" x1="100" y1="80" x2="220" y2="160" stroke="var(--soft)" strokeWidth="1.5" strokeDasharray="6,4"/>
              <line className="draw-edge" x1="340" y1="80" x2="220" y2="160" stroke="var(--soft)" strokeWidth="1.5" strokeDasharray="6,4"/>
              <circle className="pulse-node" cx="100" cy="55" r="4" fill="var(--line2)" stroke="var(--soft)" strokeWidth="1.5"/>
              <circle className="pulse-node" cx="340" cy="55" r="4" fill="var(--line2)" stroke="var(--soft)" strokeWidth="1.5" style={{animationDelay:".6s"}}/>
              <circle cx="220" cy="185" r="6" fill="var(--panel)" stroke="var(--ok)" strokeWidth="2"/>
            </svg>
          </div>
        </div>

        <div className="showcase-grid">
          <div className="showcase-sm rv">
            <span className="showcase-label">Role context</span>
            <h3>Coordinate across roles</h3>
            <p>Give office, site, consultants and reviewers the same current project context.</p>
            <svg className="showcase-svg-sm" viewBox="0 0 300 160" fill="none">
              <path d="M50 120L150 145L250 120L150 95Z" stroke="var(--line2)" strokeWidth="1.2" fill="none"/>
              <path d="M50 90L150 115L250 90L150 65Z" stroke="var(--soft)" strokeWidth="1.2" fill="none"/>
              <path d="M50 60L150 85L250 60L150 35Z" stroke="var(--ok)" strokeWidth="1.5" fill="rgba(52,211,153,.05)"/>
              <text x="135" y="56" fill="var(--ok)" fontSize="10" fontFamily="'JetBrains Mono',monospace">PM</text>
              <text x="80" y="100" fill="var(--soft)" fontSize="9" fontFamily="'JetBrains Mono',monospace">DC</text>
              <text x="195" y="100" fill="var(--soft)" fontSize="9" fontFamily="'JetBrains Mono',monospace">FE</text>
            </svg>
          </div>
          <div className="showcase-sm rv">
            <span className="showcase-label">Tool layer</span>
            <h3>Work with your current tools</h3>
            <p>Sit on top of drives, email, messages and project files without forcing migration.</p>
            <div className="tool-grid">
              {["Gmail","WhatsApp","Teams","Drive","OneDrive","Revit","AutoCAD","IFC","PDF"].map((t,i)=><span key={i} className="tool-chip">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ═══ HOW IT WORKS — Endra-style stacked showcase ═══ */}
    <section id="how" className="sec">
      <div className="wrap">
        <h2 className="sec-title rv center"><strong>Four steps.</strong> <span className="dim">Scattered inputs to reliable knowledge.</span></h2>

        {[
          {num:"01",label:"CHANNEL CAPTURE",title:"Collects from the tools teams already use.",mock:(
            <div className="mock-panel"><div className="mock-bar"><span className="dot g"/><span className="dot y"/><span className="dot d"/><span className="mock-t">Capture</span></div><div className="mock-body">
              {[["✉","Email — Structural Rev C approval","ok"],["💬","WhatsApp — Site photo + confirmation","ok"],["🎙","Voice note — Subcontractor update","pending"]].map(([ic,tx,st],i)=>(
                <div key={i} className="mock-row"><span className="mock-icon">{ic}</span><span>{tx}</span><span className={`mock-status ${st}`}>{st==="ok"?"Captured":"Processing"}</span></div>
              ))}
            </div></div>
          )},
          {num:"02",label:"KNOWLEDGE VAULT",title:"Connects records into a living project memory.",mock:(
            <div className="mock-panel"><div className="mock-bar"><span className="dot g"/><span className="dot y"/><span className="dot d"/><span className="mock-t">Memory</span></div><div className="mock-body">
              <div className="mock-nodes"><span className="mock-node">Drawing A-201</span><span className="mock-node">RFI-0042</span><span className="mock-node ok">Approval</span><span className="mock-node">Rev C</span></div>
            </div></div>
          )},
          {num:"03",label:"AI COPILOT",title:"Answers with cited sources. Page, section, revision.",mock:(
            <div className="mock-panel"><div className="mock-bar"><span className="dot g"/><span className="dot y"/><span className="dot d"/><span className="mock-t">Cited answer</span></div><div className="mock-body">
              <div className="mock-chat"><div className="mock-q">Current approved revision for Drawing A-201?</div><div className="mock-a"><strong>Revision C</strong>, approved 12 May 2026 by J. Malik.<div className="mock-cite"><span className="cite-badge">Source</span>RFI-0042 — Page 3, §2.4</div></div></div>
            </div></div>
          )},
          {num:"04",label:"HUMAN VERIFICATION",title:"Critical actions require approval before they move.",mock:(
            <div className="mock-panel"><div className="mock-bar"><span className="dot g"/><span className="dot y"/><span className="dot d"/><span className="mock-t">Verification</span></div><div className="mock-body">
              <div className="mock-approval"><div className="ap-row"><span className="ap-label">Action</span>Issue drawing set to site team</div><div className="ap-row"><span className="ap-label">Source</span>RFI-0042 → Rev C</div><div className="ap-row"><span className="ap-label">Status</span><span className="ap-pending">⏳ Awaiting approval</span></div><div className="ap-actions"><span className="ap-ok">✓ Approve</span><span className="ap-no">✕ Reject</span></div></div>
            </div></div>
          )}
        ].map((s,i)=>(
          <div key={s.num} className={`hiw-row rv ${i%2?"reverse":""}`}>
            <div className="hiw-text"><span className="hiw-num">{s.num}</span><span className="hiw-label">{s.label}</span><h3>{s.title}</h3></div>
            <div className="hiw-mock">{s.mock}</div>
          </div>
        ))}
      </div>
    </section>

    {/* ═══ ROLES ═══ */}
    <section id="roles" className="sec">
      <div className="wrap">
        <h2 className="sec-title rv"><strong>The right context,</strong> <span className="dim">in the right hands.</span></h2>
        <div className="role-grid">
          {[{c:"PM",t:"Project Managers",d:"Reference decisions, approvals and changes without reconstructing the project."},{c:"DC",t:"Document Controllers",d:"Maintain a traceable record instead of rebuilding one before audits."},{c:"FE",t:"Field Executors",d:"Reach the right version without calling the office or searching admin systems."}].map((r,i)=>(
            <div key={r.c} className={`role-card rv`} style={{transitionDelay:`${i*.1}s`}}><span className="role-code">{r.c}</span><h3>{r.t}</h3><p>{r.d}</p></div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ TRUST ═══ */}
    <section id="trust" className="sec">
      <div className="wrap">
        <h2 className="sec-title rv center"><strong>Built for teams</strong> <span className="dim">that need to trust what they use.</span></h2>
        <div className="trust-grid">
          {[["Source-linked answers","Every response includes document, page, section and revision."],["Human verification","Key decisions require explicit sign-off before action."],["Messy data ready","Works with fragmented repositories and imperfect inputs."],["Existing tools","Google Drive, OneDrive, WhatsApp, Gmail, Teams. Layer, not replacement."],["Your standards","Configurable naming conventions and approval protocols."],["Data handling","Designed for controlled project workspaces. Data handling is reviewed during implementation."]].map(([t,d],i)=>(
            <div key={i} className={`trust-card rv`} style={{transitionDelay:`${(i%3)*.1}s`}}><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ FAQ ═══ */}
    <section className="sec">
      <div className="wrap">
        <h2 className="sec-title rv center">Frequently asked questions.</h2>
        <div className="faq-wrap rv">
          <FAQ q="Does Panovia replace our current tools?" a="No. Panovia sits on top of the tools your team already uses." />
          <FAQ q="How does Panovia cite its answers?" a="Every answer includes the document name, page, section and revision state." />
          <FAQ q="Can it work with WhatsApp and email?" a="Yes. Channel Capture ingests messages, emails and voice notes without changing how teams communicate." />
          <FAQ q="Can Panovia identify the current approved revision?" a="Yes. It determines what is current, superseded, draft or unresolved." />
          <FAQ q="How does human verification work?" a="Critical actions are routed to the right person for explicit approval before any external action." />
          <FAQ q="Can it work with messy project data?" a="Yes. Built for fragmented, real-world inputs — not idealised clean data." />
          <FAQ q="How is customer data handled?" a="Designed for controlled project workspaces. Data handling is reviewed during implementation." />
          <FAQ q="How long does implementation take?" a="Panovia works with existing systems without requiring cleanup first. Timeline is reviewed during onboarding." />
        </div>
      </div>
    </section>

    {/* ═══ CTA ═══ */}
    <section id="demo" className="sec cta-sec">
      <div className="cta-video" aria-hidden="true"><video autoPlay muted loop playsInline preload="metadata"><source src="/footer-video.mp4" type="video/mp4"/></video></div>
      <div className="cta-fade" aria-hidden="true"/>
      <div className="wrap rel">
        <h2 className="sec-title rv center">See Panovia with your<br/>workflows in mind.</h2>
        <p className="sub rv center">A focused walkthrough for revision control, approvals, handovers and evidence trails.</p>
        <div className="cta-row rv center"><a className="btn btn-primary" href="mailto:hello@panovia.com">See a revision workflow</a><a className="btn btn-secondary" href="#">Get the Playbook</a></div>
      </div>
    </section>
    </main>

    <footer className="footer">
      <div className="wrap footer-inner"><span>© 2026 Panovia by Attimo.</span><span className="dim">The right context, at the right moment, in the right hands.</span></div>
    </footer>
  </>);
}
