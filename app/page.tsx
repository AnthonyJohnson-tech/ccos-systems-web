const portfolio = [
  {
    name: "Ninthline",
    category: "Opportunity Intelligence",
    description:
      "Surfaces useful opportunities and the relationships that can make them actionable.",
  },
  {
    name: "Forney Connected",
    category: "Local media + community infrastructure",
    description:
      "Helps a growing community see the information, people, and activity shaping local life.",
  },
  {
    name: "ForneyJobs",
    category: "Local employment infrastructure",
    description:
      "Makes verified local work easier to discover, evaluate, and pursue.",
  },
];

const connections = ["People", "Organizations", "Information", "Resources", "Communities", "Opportunity"];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CCOS home">
          <picture>
            <source media="(prefers-color-scheme: dark)" srcSet="/identity/CCOS_Wordmark_Primary_Dark_v1.0.svg" />
            <img src="/identity/CCOS_Wordmark_Primary_Light_v1.0.svg" alt="CCOS" width="174" height="45" />
          </picture>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#institution">Institution</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#founder">Accountability</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Community Connection Operating Systems</p>
          <h1 id="hero-title">Building systems that connect people, organizations, and opportunity.</h1>
          <p className="hero-intro">
            Community Connection Operating Systems develops and operates products, systems,
            and community infrastructure designed to make useful connections easier to find and act on.
          </p>
          <a className="text-link" href="#portfolio">Explore the portfolio <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <img src="/identity/CCOS_Bridge_Avatar_Light_v1.0.svg" alt="" width="520" height="520" />
        </div>
      </section>

      <section className="institution" id="institution" aria-labelledby="institution-title">
        <div className="section-lead">
          <p className="section-number">01 / Institution</p>
          <h2 id="institution-title">Connection is only useful when it helps something move.</h2>
        </div>
        <div className="institution-copy">
          <p>
            CCOS is the institutional layer behind work that connects information with action,
            communities with resources, and organizations with people who can create value together.
          </p>
          <p>
            The company provides coherent ownership and accountability while allowing every product
            to keep the identity, audience, and operating model its purpose requires.
          </p>
        </div>
        <ul className="connection-grid" aria-label="What CCOS connects">
          {connections.map((item, index) => (
            <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
          ))}
        </ul>
      </section>

      <section className="portfolio" id="portfolio" aria-labelledby="portfolio-title">
        <div className="section-lead portfolio-lead">
          <p className="section-number">02 / Portfolio</p>
          <h2 id="portfolio-title">Independent products. Shared institutional provenance.</h2>
          <p>Each product serves a distinct need and stands on its own. CCOS supplies the accountable operating layer behind it.</p>
        </div>
        <div className="portfolio-list">
          {portfolio.map((product, index) => (
            <article className="product" key={product.name}>
              <p className="product-index">0{index + 1}</p>
              <div>
                <p className="product-category">{product.category}</p>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
              <p className="attribution">A CCOS product.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="founder" id="founder" aria-labelledby="founder-title">
        <p className="section-number">03 / Accountability</p>
        <div>
          <h2 id="founder-title">An institution should make responsibility visible.</h2>
          <p className="founder-name">Anthony Johnson</p>
          <p>Founder, CCOS</p>
        </div>
      </section>

      <footer>
        <img src="/identity/CCOS_Wordmark_White_v1.0.svg" alt="CCOS" width="150" height="39" />
        <div>
          <p>Community Connection Operating Systems LLC</p>
          <p>Building useful connections with clarity, restraint, and accountability.</p>
        </div>
        <p className="copyright">© {new Date().getUTCFullYear()} CCOS</p>
      </footer>
    </main>
  );
}
