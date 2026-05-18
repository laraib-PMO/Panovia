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
      <div className="links"><a href="#product">Product</a><a href="#how">How It Works</a><a href="#use-cases">Use Cases</a><a href="#trust">Trust</a><a className="btn btn-primary" href="#demo">Watch Demo</a></div>
    </nav>

    <main>
    {/* ════ HERO ════ */}
    <section className="hero">
      <div className="hero-bg-video" aria-hidden="true"><video autoPlay muted loop playsInline preload="metadata"><source src="/hero-video.mp4" type="video/mp4"/></video></div>
      <div className="grid-overlay" aria-hidden="true"/><div className="hero-overlay" aria-hidden="true"/>
      <div className="hero-content">
        <div className="logo-large"><Logo size={60}/></div>
        <div className="eyebrow">AEC project memory layer</div>
        <h1>Turn scattered AEC project information <span className="br"/> into reliable knowledge.</h1>
        <p className="sub">Panovia connects drawings, RFIs, approvals, emails and site updates into cited answers, verified revisions and traceable action.</p>
        <div className="cta-row"><a className="btn btn-primary" href="#demo">Watch Demo</a><a className="btn btn-secondary" href="#product">See the Workflow</a></div>
        <p className="hero-trust">No migration required · Cited outputs · Human verification</p>
        <div className="proof-float rv">
          <div className="pf-header"><span className="pf-badge"><span className="pf-dot"/>Current Revision · Verified</span></div>
          <div className="pf-rows">
            <div className="pf-row"><span>Drawing</span><span>A-201 · Rev C</span></div>
            <div className="pf-row"><span>Source</span><span>RFI-0042 · Cited</span></div>
            <div className="pf-row"><span>Approved by</span><span>J. Malik</span></div>
          </div>
        </div>
        <div className="tools-section rv"><p className="tools-label">Works with your current tools</p>
          <div className="tools-list">Gmail · WhatsApp · MS Teams · Google Drive · OneDrive · Revit · AutoCAD · IFC · PDF</div>
          <div className="marquee-wrap" aria-hidden="true"><div className="marquee-track">{[...Array(2)].map((_,s)=>["Gmail","WhatsApp","MS Teams","Google Drive","OneDrive","Revit","AutoCAD","IFC","PDF"].map((t,i)=><span key={`${s}-${i}`} className="chip">{t}</span>))}</div></div>
        </div>
      </div>
    </section>

    <div className="section-breather cloud-breather" aria-hidden="true"><div className="breather-grid"/><div className="breather-cloud cloud-one"/><div className="breather-cloud cloud-two"/></div>

    {/* ════ STATEMENT + FIG GRID (Linear-style) ════ */}
    <section className="sec sec-dark">
      <div className="wrap">
        <div className="statement rv"><strong>Context instead of search.</strong> <span className="dim">Memory instead of storage. Panovia connects documents, decisions, workflows and responsibilities into a usable memory for action.</span></div>

        <div className="fig-grid">
          {[
            {fig:"Current context",title:"Find the right context",desc:"Surface the right file, version, decision and related history without digging through folders.",
              svg:(<svg viewBox="0 0 300 220" fill="none">
                {/* Isometric building elevation */}
                <path d="M150 30L250 90V190H50V90L150 30Z" stroke="var(--line2)" strokeWidth="1.5" fill="none"/>
                <path d="M50 90H250" stroke="var(--line2)" strokeWidth=".7"/>
                <path d="M100 90V190" stroke="var(--line)" strokeWidth=".5"/><path d="M200 90V190" stroke="var(--line)" strokeWidth=".5"/>
                <path d="M50 140H250" stroke="var(--line)" strokeWidth=".5"/>
                <rect x="115" y="100" width="30" height="30" rx="2" stroke="var(--soft)" strokeWidth="1.2" fill="none"/>
                <rect x="160" y="100" width="30" height="30" rx="2" stroke="var(--soft)" strokeWidth="1.2" fill="none"/>
                <rect x="115" y="148" width="30" height="35" rx="2" stroke="var(--ok)" strokeWidth="1" fill="rgba(52,211,153,.06)" className="fig-hover-move"/>
                <rect x="160" y="148" width="30" height="30" rx="2" stroke="var(--soft)" strokeWidth="1.2" fill="none"/>
                <circle cx="130" cy="165" r="2" fill="var(--ok)"/><text x="137" y="168" fill="var(--ok)" fontSize="7" fontFamily="'JetBrains Mono', monospace">CURRENT</text>
              </svg>)},
            {fig:"Linked approval",title:"Keep decisions traceable",desc:"Connect approvals, changes and meeting notes into a record of what changed, why and who owns it.",
              svg:(<svg viewBox="0 0 300 220" fill="none">
                {/* Isometric node network */}
                <rect x="60" y="40" width="60" height="40" rx="4" stroke="var(--line2)" strokeWidth="1" fill="none" transform="skewY(-10)"/>
                <rect x="180" y="40" width="60" height="40" rx="4" stroke="var(--line2)" strokeWidth="1" fill="none" transform="skewY(10)"/>
                <rect x="120" y="130" width="60" height="40" rx="4" stroke="var(--ok)" strokeWidth="1.5" fill="rgba(52,211,153,.1)" transform="skewY(-5)"/>
                <line className="draw-edge" x1="110" y1="60" x2="150" y2="130" stroke="var(--soft)" strokeWidth="1" strokeDasharray="4,3"/>
                <line className="draw-edge" x1="190" y1="60" x2="155" y2="130" stroke="var(--soft)" strokeWidth="1" strokeDasharray="4,3"/>
                <circle className="pulse-node" cx="90" cy="55" r="3" fill="var(--line2)" stroke="var(--soft)" strokeWidth="1"/>
                <circle className="pulse-node" cx="210" cy="55" r="3" fill="var(--line2)" stroke="var(--soft)" strokeWidth="1" style={{animationDelay:".6s"}}/>
                <circle cx="150" cy="148" r="4" fill="var(--deep)" stroke="var(--ok)" strokeWidth="1.5"/>
                <text x="85" y="78" fill="var(--soft)" fontSize="7" fontFamily="'JetBrains Mono', monospace">RFI-0042</text>
                <text x="190" y="78" fill="var(--soft)" fontSize="7" fontFamily="'JetBrains Mono', monospace">Approval</text>
                <text x="130" y="178" fill="var(--ok)" fontSize="7" fontFamily="'JetBrains Mono', monospace">Linked Record</text>
              </svg>)},
            {fig:"Role context",title:"Coordinate across roles",desc:"Give office, site, consultants and reviewers the same current project context.",
              svg:(<svg viewBox="0 0 300 220" fill="none">
                {/* Isometric stacked layers */}
                <path d="M60 160L150 200L240 160L150 120Z" stroke="var(--line2)" strokeWidth="1.5" fill="none"/>
                <path d="M60 130L150 170L240 130L150 90Z" stroke="var(--soft)" strokeWidth="1" fill="none"/>
                <path d="M60 100L150 140L240 100L150 60Z" stroke="var(--ok)" strokeWidth="1.5" fill="rgba(52,211,153,.08)"/>
                <text x="125" y="95" fill="var(--ok)" fontSize="8" fontFamily="'JetBrains Mono', monospace">PM</text>
                <text x="85" y="145" fill="var(--soft)" fontSize="7" fontFamily="'JetBrains Mono', monospace">DC</text>
                <text x="185" y="145" fill="var(--soft)" fontSize="7" fontFamily="'JetBrains Mono', monospace">FE</text>
                <text x="125" y="175" fill="var(--line2)" fontSize="7" fontFamily="'JetBrains Mono', monospace">SITE</text>
                {/* Dotted connection lines */}
                <line x1="150" y1="100" x2="150" y2="195" stroke="var(--line2)" strokeWidth=".5" strokeDasharray="3,4"/>
                <line x1="90" y1="133" x2="210" y2="133" stroke="var(--line2)" strokeWidth=".5" strokeDasharray="3,4"/>
              </svg>)},
          ].map((card,i) => (
            <article key={i} className={`fig-card rv rv-d${i+1}`}>
              <span className="fig-label">{card.fig}</span>
              <div className="fig-illus">{card.svg}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </article>
          ))}
        </div>

        {/* 4th card as wide strip */}
        <div className="fig-wide rv rv-d4">
          <div className="fig-wide-text">
            <span className="fig-label">Tool layer</span>
            <h3>Work with your current tools</h3>
            <p>Sit on top of drives, email, messages and project files without forcing migration.</p>
          </div>
          <div className="fig-wide-illus">
            <svg viewBox="0 0 400 120" fill="none">
              <circle cx="200" cy="60" r="22" fill="var(--deep)" stroke="var(--ok)" strokeWidth="2"/>
              <text x="190" y="64" fill="var(--ok)" fontSize="8" fontFamily="'JetBrains Mono', monospace">PAN</text>
              {[{x:60,y:30},{x:60,y:90},{x:340,y:30},{x:340,y:90},{x:130,y:15},{x:270,y:15},{x:130,y:105},{x:270,y:105}].map((n,i)=>(
                <g key={i}><line className="draw-edge" x1={n.x} y1={n.y} x2="200" y2="60" stroke="var(--soft)" strokeWidth=".7" opacity=".4"/><circle className="pulse-node" cx={n.x} cy={n.y} r="3" fill="var(--line2)" stroke="var(--soft)" strokeWidth=".8" style={{animationDelay:`${i*.25}s`}}/></g>
              ))}
            </svg>
          </div>
        </div>

        {/* Proof strip */}
        <div className="proof-strip">
          {[["Source-linked","Every answer links back to source material."],["Revision-aware","Current, superseded and unresolved states stay visible."],["Human verified","Critical actions require approval before they move forward."]].map(([n,l],i)=>(<div key={i} className={`proof-strip-item rv rv-d${i+1}`}><div className="proof-strip-title">{n}</div><div className="proof-strip-desc">{l}</div></div>))}
        </div>
      </div>
    </section>
    <div className="section-breather cloud-breather" aria-hidden="true"><div className="breather-grid"/><div className="breather-cloud cloud-one"/><div className="breather-cloud cloud-two"/></div>

    {/* ════ PRODUCT PROOF (light) ════ */}
    <section id="product" className="sec sec-light">
      <div className="wrap"><div className="sec-head rv center"><span className="tag">How it connects</span><h2><strong>From disconnected records</strong> <span className="dim-l">to connected context.</span></h2></div>
        <div className="proof-flow rv">
          <div className="proof-col">
            <h3 className="proof-col-title">Scattered inputs</h3>
            {["WhatsApp approval","Email thread","Drawing revision","Site update","Meeting note"].map((t,i)=>(<div key={i} className="proof-item left">{t}</div>))}
          </div>
          <div className="proof-mid"><div className="proof-mid-line"/><div className="proof-mid-label">Panovia<br/>connects</div><div className="proof-mid-line"/></div>
          <div className="proof-col">
            <h3 className="proof-col-title">Connected output</h3>
            {[["Current Revision","Verified"],["Cited Source","Linked"],["Decision Owner","Confirmed"],["Next Action","Traceable"],["Evidence Trail","Intact"]].map(([t,s],i)=>(<div key={i} className="proof-item right"><span>{t}</span><span className="proof-ok">{s}</span></div>))}
          </div>
        </div>
      </div>
    </section>

    <div className="section-breather cloud-breather light-breather" aria-hidden="true"><div className="breather-grid"/><div className="breather-cloud cloud-one"/><div className="breather-cloud cloud-two"/></div>

    {/* ════ HOW IT WORKS (light, sticky) ════ */}
    <section id="how" className="sec sec-light" style={{paddingTop:0}}>
      <div className="wrap"><div className="sec-head rv center"><span className="tag">How Panovia works</span><h2><strong>Four steps.</strong> <span className="dim-l">Scattered inputs to reliable knowledge.</span></h2></div>
        <div className="hiw-stack">
          {[
            {num:"01",label:"CHANNEL CAPTURE",title:"Collects from the tools teams already use.",desc:"WhatsApp messages, emails, voice notes, meetings and uploaded files.",mockTitle:"Capture",mock:(<>{[["✉","Email — Structural Rev C approval","ok"],["💬","WhatsApp — Site photo + confirmation","ok"],["🎙","Voice note — Subcontractor update","pending"]].map(([ic,tx,st],i)=>(<div key={i} className="mock-row"><span className="mock-icon">{ic}</span><span>{tx}</span><span className={`mock-status ${st}`}>{st==="ok"?"Captured":"Processing"}</span></div>))}</>)},
            {num:"02",label:"KNOWLEDGE VAULT",title:"Connects records into a living project memory.",desc:"Documents, revisions, decisions and approvals in a structured graph.",mockTitle:"Memory",mock:(<div className="mock-nodes"><div className="mock-node">Drawing A-201</div><div className="mock-node">RFI-0042</div><div className="mock-node ok">Approval</div><div className="mock-node">Rev C</div></div>)},
            {num:"03",label:"AI COPILOT",title:"Answers with cited sources. Page, section, revision.",desc:"Grounded in project sources, with citations attached.",mockTitle:"Cited answer",mock:(<div className="mock-chat"><div className="mock-q">Current approved revision for Drawing A-201?</div><div className="mock-a"><span><strong>Revision C</strong>, approved 12 May 2026 by J. Malik.</span><div className="mock-cite"><span className="mock-cite-badge">Source</span><span>RFI-0042 — Page 3, §2.4</span></div></div></div>)},
            {num:"04",label:"HUMAN VERIFICATION",title:"Critical actions require approval before they move.",desc:"Routed to the right person for explicit sign-off.",mockTitle:"Verification",mock:(<div className="mock-approval"><div className="mock-ap-row"><span className="mock-ap-label">Action</span><span>Issue drawing set to site team</span></div><div className="mock-ap-row"><span className="mock-ap-label">Source</span><span>RFI-0042 → Rev C</span></div><div className="mock-ap-row"><span className="mock-ap-label">Status</span><span className="mock-ap-pending">⏳ Awaiting approval</span></div><div className="mock-ap-actions"><span className="mock-btn-ok">✓ Approve</span><span className="mock-btn-no">✕ Reject</span></div></div>)}
          ].map((s,idx)=>(<div key={s.num} className="hiw-card" style={{top:`${100+idx*28}px`,zIndex:idx+1}}>
            <div className="hiw-num">{s.num}</div><div className="hiw-label">{s.label}</div>
            <h3>{s.title}</h3><p>{s.desc}</p>
            <div className="mock-panel"><div className="mock-bar"><span className="mock-dot g"/><span className="mock-dot y"/><span className="mock-dot d"/><span className="mock-title">{s.mockTitle}</span></div><div className="mock-body">{s.mock}</div></div>
          </div>))}
        </div>
        <div className="rv center" style={{marginTop:56}}><a className="btn btn-secondary" href="https://demo.panovia.ai/" target="_blank" rel="noopener noreferrer">Try the live demo →</a></div>
      </div>
    </section>
    {/* ════ ROLES (light) ════ */}
    <section id="use-cases" className="sec sec-light">
      <div className="wrap"><div className="sec-head rv"><span className="tag">Built for roles</span><h2><strong>The right context,</strong> <span className="dim-l">in the right hands.</span></h2></div>
        <div className="grid-3">
          {[{c:"PM",t:"Project Managers",d:"Reference decisions, approvals and changes without reconstructing the project."},{c:"DC",t:"Document Controllers",d:"Maintain a traceable record instead of rebuilding one before audits."},{c:"FE",t:"Field Executors",d:"Reach the right version without calling the office or searching admin systems."}].map((r,i)=>(<article key={r.c} className={`card-light rv rv-d${i+1}`}><div className="icon-box-light">{r.c}</div><h3>{r.t}</h3><p>{r.d}</p></article>))}
        </div>
      </div>
    </section>
    <div className="section-breather cloud-breather" aria-hidden="true"><div className="breather-grid"/><div className="breather-cloud cloud-one"/><div className="breather-cloud cloud-two"/></div>

    {/* ════ TRUST (dark) ════ */}
    <section id="trust" className="sec sec-dark">
      <div className="wrap"><div className="sec-head rv center"><span className="tag">Trust and control</span><h2><strong>Built for teams</strong> <span className="dim">that need to trust what they use.</span></h2></div>
        <div className="grid-3">
          {[["Source-linked answers","Every response includes document, page, section and revision."],["Human verification","Key decisions require explicit sign-off before action."],["Messy data ready","Works with fragmented repositories and imperfect inputs."],["Existing tools","Google Drive, OneDrive, WhatsApp, Gmail, Teams. Layer, not replacement."],["Your standards","Configurable naming conventions and approval protocols."]].map(([t,d],i)=>(<article key={i} className={`trust-card rv rv-d${(i%3)+1}`}><h3>{t}</h3><p>{d}</p></article>))}
          <article className="trust-card rv"><h3>Data handling</h3><p>Designed for controlled project workspaces. Data handling is reviewed during implementation.</p></article>
        </div>
      </div>
    </section>

    <div className="section-breather cloud-breather" aria-hidden="true"><div className="breather-grid"/><div className="breather-cloud cloud-one"/><div className="breather-cloud cloud-two"/></div>

    {/* ════ FAQ (light) ════ */}
    <section className="sec sec-light">
      <div className="wrap"><div className="sec-head rv center"><span className="tag">Common questions</span><h2>Frequently asked questions.</h2></div>
        <div className="faq-list rv">
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
    <div className="section-breather cloud-breather" aria-hidden="true"><div className="breather-grid"/><div className="breather-cloud cloud-one"/><div className="breather-cloud cloud-two"/></div>

    {/* ════ CTA ════ */}
    <section id="demo" className="sec sec-dark footer-vid-sec">
      <div className="footer-vid" aria-hidden="true"><video autoPlay muted loop playsInline preload="metadata"><source src="/footer-video.mp4" type="video/mp4"/></video></div>
      <div className="footer-vid-ov" aria-hidden="true"/><div className="footer-grid" aria-hidden="true"/>
      <div className="wrap rel">
        <div className="cta-block rv"><span className="tag">Watch Demo</span><h2>See Panovia with your workflows in mind.</h2><p className="desc center">A focused walkthrough for revision control, approvals, handovers and evidence trails.</p>
          <div className="cta-row"><a className="btn btn-primary" href="mailto:hello@panovia.com">See a revision workflow</a><a className="btn btn-secondary" href="#">Get the Playbook</a></div>
        </div>
      </div>
    </section>
    </main>

    <footer className="footer footer-vid-sec">
      <div className="footer-vid" aria-hidden="true"><video autoPlay muted loop playsInline preload="metadata"><source src="/footer-video.mp4" type="video/mp4"/></video></div>
      <div className="footer-vid-ov" aria-hidden="true"/><div className="footer-grid" aria-hidden="true"/>
      <div className="wrap rel footer-inner"><span>© 2026 Panovia by Attimo.</span><span>The right context, at the right moment, in the right hands.</span></div>
    </footer>
  </>);
}
