import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Atom,
  Check,
  CircleHelp,
  Cpu,
  Droplets,
  Factory,
  Flame,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Recycle,
  Sun,
  Wind,
  X,
} from 'lucide-react';

const steps = [
  { title: 'Segregate & prepare', body: 'Organic feedstock is collected separately, then prepared to create a more consistent input for the process.', icon: Recycle },
  { title: 'Condition the slurry', body: 'Prepared material is mixed and conditioned into a pumpable slurry before entering the digester.', icon: Droplets },
  { title: 'Digest anaerobically', body: 'In a sealed, oxygen-free environment, microorganisms break down organic matter and produce biogas.', icon: Atom },
  { title: 'Clean & store gas', body: 'Gas conditioning removes moisture and selected impurities before biogas is held for its intended use.', icon: Wind },
  { title: 'Recover useful outputs', body: 'Biogas can support cooking, heat or electricity; separated digestate can be recovered as liquid and solid organic fertilizer.', icon: Leaf },
];

const principles = [
  { title: 'Start with the material', body: 'Feedstock, site conditions and intended outputs shape the process design—not a one-size-fits-all promise.', icon: Recycle },
  { title: 'Engineer the whole loop', body: 'We look at preparation, process stages, controls and useful by-products as connected parts of a system.', icon: Cpu },
  { title: 'Make the next step clear', body: 'From early conversations to research concepts, we aim to explain what is established and what still needs testing.', icon: CircleHelp },
];

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><Leaf strokeWidth={1.8} /></span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'GEBSE | Turn your waste into clean energy';
    const description = 'GEBSE is a Delhi-based clean-energy and waste-management engineering and R&D company exploring practical systems for organic waste and solar upkeep.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
    const social = [
      ['og:title', 'GEBSE | Turn your waste into clean energy'],
      ['og:description', description],
      ['og:type', 'website'],
      ['og:image', '/media/gebse-biogas-overview.jpeg'],
      ['twitter:card', 'summary_large_image'],
      ['twitter:title', 'GEBSE | Turn your waste into clean energy'],
      ['twitter:description', description],
    ];
    social.forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"], meta[name="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(property.startsWith('og:') ? 'property' : 'name', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <div className="topline">
        <div className="container topline-inner">
          <span className="mono">Delhi · Engineering for a resource-wise future</span>
          <span><a href="mailto:info@gebse.com">info@gebse.com</a><span aria-hidden="true">　/　</span> <a href="tel:+918527005253">+91 85270 05253</a></span>
        </div>
      </div>
      <header className="header">
        <nav className="container nav" aria-label="Main navigation">
          <a href="#home" className="brand" aria-label="GEBSE home" onClick={closeMenu} data-testid="link-home">
            <BrandMark />
            <span><span className="brand-word">GEBSE</span><span className="brand-sub">Green Earth Bio Solar Energy</span></span>
          </a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} data-testid="button-menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#approach" onClick={closeMenu} data-testid="link-approach">Our approach</a>
            <a href="#process" onClick={closeMenu} data-testid="link-process">Biogas systems</a>
            <a href="#research" onClick={closeMenu} data-testid="link-research">R&D</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu} data-testid="link-contact-nav">Talk to our team <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="eyebrow mono">Resource recovery, engineered</div>
                <h1>Turn your waste into <span>clean energy.</span></h1>
                <p className="hero-desc">GEBSE works across clean energy and waste-management engineering—developing practical ways to recover value from organic waste and care for the systems that generate power.</p>
                <div className="hero-actions">
                  <a href="#process" className="button" data-testid="link-explore-systems">Explore our systems <ArrowRight aria-hidden="true" /></a>
                  <a href="#contact" className="button button-outline" data-testid="link-start-conversation">Start a conversation</a>
                </div>
                <div className="hero-note"><span className="hero-note-mark"><Check aria-hidden="true" /></span><span><b>Engineering and R&D, based in Delhi</b><br />For institutions, businesses and communities.</span></div>
              </div>
              <div className="hero-visual">
                <div className="hero-image-wrap">
                  <img className="hero-image" src="/media/gebse-biogas-overview.jpeg" alt="GEBSE biogas plant overview with process stages, solar panels and digestate recovery" data-testid="img-biogas-overview" />
                  <div className="image-index mono">01 / Organic waste to energy</div>
                  <div className="capacity-chip"><strong>500 kg/day</strong><span className="mono">Capacity stated for pictured plant</span></div>
                </div>
                <div className="side-caption mono">Illustrated plant overview / GEBSE</div>
              </div>
            </div>
            <div className="hero-bottom">
              <p>Systems thinking for cleaner, more useful resource cycles.</p>
              <a className="scroll-cue mono" href="#focus">Discover our focus <ArrowDown size={14} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <div className="ticker" id="focus" aria-label="Areas of work">
          <div className="container ticker-inner">
            <div className="ticker-item"><Recycle /> Waste valorisation</div>
            <div className="ticker-item"><Flame /> Anaerobic digestion</div>
            <div className="ticker-item"><Sun /> Solar upkeep</div>
            <div className="ticker-item"><Factory /> Engineering research</div>
          </div>
        </div>

        <section className="section process-section" id="process">
          <div className="container process-layout">
            <div className="process-copy">
              <div className="eyebrow mono">01 / Organic waste to biogas</div>
              <h2>A process that gives organic waste another job.</h2>
              <p>Modular anaerobic digestion turns segregated organic material into biogas and recoverable digestate. Each stage has a role, from preparing a consistent feed to handling gas and by-products.</p>
              <div className="process-footnote mono">Process overview · Actual configuration depends on feedstock, site and project requirements.</div>
            </div>
            <div>
              <div className="steps">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return <article className="step" key={step.title} data-testid={`step-process-${index + 1}`}>
                    <span className="step-no mono">0{index + 1}</span>
                    <div><h3>{step.title}</h3><p>{step.body}</p></div>
                    <Icon className="step-icon" aria-hidden="true" />
                  </article>;
                })}
              </div>
              <div className="outputs">
                <article className="output"><Flame aria-hidden="true" /><h4>Biogas for useful energy</h4><p>Biogas may be used for cooking, heat or electricity, subject to appropriate system design.</p></article>
                <article className="output"><Leaf aria-hidden="true" /><h4>Digestate for soil</h4><p>Liquid and solid organic fertilizer are described among the process outputs.</p></article>
              </div>
            </div>
          </div>
        </section>

        <section className="section video-section" aria-labelledby="tour-heading">
          <div className="container">
            <div className="section-head">
              <div><div className="eyebrow mono">A closer look / field walkthrough</div><h2 id="tour-heading">See the system in motion.</h2></div>
              <p className="section-intro">A short visual tour through the biogas plant and its connected process stages. Use the player controls to watch, pause or adjust the sound.</p>
            </div>
            <div className="video-frame">
              <video controls playsInline preload="metadata" poster="/media/gebse-biogas-overview.jpeg" aria-label="GEBSE biogas plant video tour" data-testid="video-biogas-tour">
                <source src="/media/gebse-biogas-tour.mp4" type="video/mp4" />
                Your browser does not support embedded video. The plant overview image above describes the process.
              </video>
            </div>
            <div className="video-label mono"><span>GEBSE / Biogas plant overview</span><span><Check aria-hidden="true" /> Native playback controls</span></div>
          </div>
        </section>

        <section className="section systems" id="research">
          <div className="container">
            <div className="section-head">
              <div><div className="eyebrow mono">02 / Systems & research</div><h2>Practical ideas, at different stages.</h2></div>
              <p className="section-intro">Some work is about operating principles; some is still a research direction. We make that distinction explicit.</p>
            </div>
            <div className="system-grid">
              <article className="system-card">
                <span className="system-number mono">DESIGN / SOLAR CARE</span>
                <span className="system-icon"><Sun aria-hidden="true" /></span>
                <h3>Keep solar surfaces ready for the sun.</h3>
                <p>The solar-panel cleaner described in GEBSE’s report is automated, water-less, edge-to-edge and solar-powered. It is intended to help maintain panel surfaces while reducing reliance on manual cleaning and water use.</p>
                <div className="tag-list"><span className="tag">Automated</span><span className="tag">Water-less concept</span><span className="tag">Solar-powered</span></div>
              </article>
              <article className="system-card study-card">
                <span className="system-number mono">03 / RESEARCH DIRECTION</span>
                <span className="system-icon"><Atom aria-hidden="true" /></span>
                <span className="research-label mono"><CircleHelp aria-hidden="true" /> Proposed research / design study</span>
                <h3>Exploring oxygen-enriched waste treatment.</h3>
                <p>A municipal and biomedical-waste incinerator concept using oxygen enrichment is presented in GEBSE materials as a research and design study.</p>
                <p className="study-note">Future testing and emissions-control work are identified. This is not presented as a validated operational product, nor as a compliance or emissions-performance claim.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section approach" id="approach">
          <div className="container approach-grid">
            <div>
              <div className="eyebrow mono">How we think</div>
              <h2>Good engineering begins with the real conditions.</h2>
              <p className="approach-lede">Waste streams are not identical, sites have constraints, and promising concepts need evidence. We bring a grounded, systems-minded approach to clean energy and resource recovery.</p>
            </div>
            <div className="principles">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return <article className="principle" key={principle.title} data-testid={`principle-${index + 1}`}>
                  <span className="principle-icon"><Icon aria-hidden="true" /></span>
                  <div><h3>{principle.title}</h3><p>{principle.body}</p></div>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container contact-grid">
            <div>
              <div className="eyebrow mono">Let’s make a useful connection</div>
              <h2>Have a resource challenge to explore?</h2>
              <p>Tell us about your site, waste stream or clean-energy question. Reach our Delhi team directly by phone or email.</p>
              <a className="button" href="mailto:info@gebse.com" data-testid="link-email-contact">Email GEBSE <ArrowUpRight aria-hidden="true" /></a>
            </div>
            <div className="contact-details">
              <a href="mailto:info@gebse.com" data-testid="link-email"><Mail aria-hidden="true" /> info@gebse.com <ArrowUpRight aria-hidden="true" /></a>
              <a href="tel:+918527005253" data-testid="link-phone-mobile"><Phone aria-hidden="true" /> +91 85270 05253 <ArrowUpRight aria-hidden="true" /></a>
              <a href="tel:+911140565253" data-testid="link-phone-office"><Phone aria-hidden="true" /> 011-40565253 <ArrowUpRight aria-hidden="true" /></a>
              <div className="address"><MapPin aria-hidden="true" /><span>PP-2, PP Block, near St. Matthew’s Church,<br />Laxmi Nagar, Delhi 110092, India</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand"><BrandMark /><b>GEBSE</b><small>Green Earth Bio Solar Energy Research &amp; Development Pvt. Ltd.</small></div>
          <div className="footer-nav"><a href="#process">Biogas systems</a><a href="#research">Research</a><a href="#contact">Contact</a></div>
          <small>© {new Date().getFullYear()} GEBSE · Delhi, India</small>
        </div>
      </footer>
    </div>
  );
}

export default App;
