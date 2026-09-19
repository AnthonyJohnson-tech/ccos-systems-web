import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anthony Johnson — Founder, CCOS",
  description: "The Founder behind Community Connection Operating Systems and its portfolio of focused ventures.",
  alternates: { canonical: "/founder" },
};

const building = [
  { name: "Ninthline", type: "Opportunity intelligence", description: "Investigates meaningful signals and turns specific, evidence-backed opportunities into practical work." },
  { name: "Forney Connected", type: "Community infrastructure", description: "Helps a growing community understand the information, people, and activity shaping local life." },
  { name: "ForneyJobs", type: "Employment infrastructure", description: "Makes verified local work easier to discover, evaluate, and pursue." },
];

export default function FounderPage() {
  return <main>
    <a className="skip-link" href="#founder-content">Skip to content</a>
    <header className="site-header"><div className="header-inner"><a className="brand" href="/" aria-label="CCOS home"><img src="/identity/CCOS_Wordmark_Primary_Light_v1.0.svg" alt="CCOS" width="174" height="45" /></a><nav aria-label="Primary navigation"><a href="/#company">Company</a><a href="/#portfolio">Portfolio</a><a href="/founder" aria-current="page">Founder</a></nav></div></header>
    <div id="founder-content">
      <section className="founder-hero" aria-labelledby="founder-title"><div className="founder-kicker"><span>Founder / CCOS</span><p>Origin · accountability · conviction · human trust</p></div><div className="founder-copy"><p className="eyebrow">Anthony Johnson</p><h1 id="founder-title">Building institutions people can understand and trust.</h1><p className="founder-lead">CCOS is the operating company behind a portfolio of focused products and ventures. Anthony sets its direction, holds final responsibility for consequential decisions, and keeps the relationship between ambition and accountability visible.</p></div><figure className="founder-portrait"><img src="/founder/anthony-johnson.png" alt="Anthony Johnson, Founder of CCOS" width="1254" height="1254" /><figcaption>Anthony Johnson<br/><span>Founder, CCOS</span></figcaption></figure></section>
      <section className="founder-principles" aria-labelledby="principles-title"><div className="section-key light"><span>01</span><p>Founder commitment</p></div><div><h2 id="principles-title">Build with conviction.<br/>Operate with restraint.</h2><p>Useful work needs a clear owner. It also needs evidence, limits, correction paths, and enough continuity to outlast a single decision or moment of attention.</p></div><div className="principle-list"><article><span>01</span><h3>Purpose before scale</h3><p>Prove that a system helps real people before expanding its reach or authority.</p></article><article><span>02</span><h3>Evidence before claims</h3><p>Separate what is known from what is inferred, proposed, or still uncertain.</p></article><article><span>03</span><h3>Accountability in view</h3><p>Make ownership and decision authority visible when the consequences matter.</p></article></div></section>
      <section className="currently-building" aria-labelledby="building-title"><div className="section-key"><span>02</span><p>Currently building</p></div><div className="building-head"><h2 id="building-title">One operating company.<br/>Three distinct expressions.</h2><p>Each venture keeps the identity and focus its audience requires. CCOS supplies the shared institutional home, governance, and continuity behind the work.</p></div><div className="building-grid">{building.map((item, index) => <article key={item.name}><span>{String(index + 1).padStart(2,"0")} / {item.type}</span><h3>{item.name}</h3><p>{item.description}</p></article>)}</div></section>
      <section className="provenance" aria-labelledby="provenance-title"><div className="section-key light"><span>03</span><p>Provenance</p></div><div><h2 id="provenance-title">The work has a name behind it.</h2><p>Anthony Johnson is the Founder of Community Connection Operating Systems LLC. He retains responsibility for company direction, reserved decisions, and the standards that connect CCOS to the ventures it operates.</p></div><dl><div><dt>Founder</dt><dd>Anthony Johnson</dd></div><div><dt>Company</dt><dd>Community Connection Operating Systems LLC</dd></div><div><dt>Operating role</dt><dd>Direction, governance, and strategic relationships</dd></div><div><dt>Public contact</dt><dd><a href="mailto:anthony@ccos.systems">anthony@ccos.systems</a></dd></div></dl></section>
    </div>
    <footer><img src="/identity/CCOS_Wordmark_White_v1.0.svg" alt="CCOS" width="150" height="39" /><div><p>Community Connection Operating Systems LLC</p><p>Products, brands, systems, and community infrastructure.</p><a href="mailto:anthony@ccos.systems">anthony@ccos.systems</a></div><p className="copyright">© {new Date().getUTCFullYear()} CCOS</p></footer>
  </main>;
}
