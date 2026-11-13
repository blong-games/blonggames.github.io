import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import logo from './assets/blong-logo-dark.png'
import symbol from './assets/blong-isotipo.svg'
import './styles.css'

const sections = ['Home', 'Games', 'About', 'Contact']
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim()

function App() {
  const [paused, setPaused] = useState(false)

  return (
    <>
      <a className="skip" href="#home">Skip to content</a>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#home">
            <img src={symbol} alt="" width="31" height="31" />
            <span>BLONG GAMES</span>
          </a>
          <nav aria-label="Main navigation">
            {sections.map((section) => (
              <a key={section} href={'#' + section.toLowerCase()}>{section}</a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero" aria-labelledby="studio-name" tabIndex={-1}>
          <div className="orbit-field" aria-hidden="true">
            <svg className={paused ? 'orbits paused' : 'orbits'} viewBox="0 0 920 440" fill="none">
              <g transform="rotate(-16 460 220)">
                <ellipse cx="460" cy="220" rx="410" ry="91" />
                <ellipse cx="460" cy="220" rx="365" ry="67" />
                <ellipse cx="460" cy="220" rx="310" ry="48" strokeDasharray="2 9" />
              </g>
              <circle className="satellite" r="3.5" />
            </svg>
          </div>
          <div className="hero-content">
            <h1 id="studio-name"><img src={logo} alt="Blong Games" width="1800" height="554" /></h1>
            <p className="tagline">Independent Game Studio</p>
            <a className="button" href="#games">Explore our games <span aria-hidden="true">↓</span></a>
          </div>
          <div className="shell hero-caption">
            <span><i className="status-dot" /> First game in development</span>
            <button type="button" className="motion" onClick={() => setPaused(!paused)}>
              {paused ? 'Play motion' : 'Pause motion'}
            </button>
          </div>
        </section>

        <div className="shell">
          <section id="games" className="section" aria-labelledby="games-title">
            <div className="eyebrow"><span>01</span> / GAMES</div>
            <h2 id="games-title">Games</h2>
            <article className="project">
              <div className="project-copy">
                <p className="badge"><i className="status-dot" /> In development</p>
                <h3>Our first game</h3>
                <p>Blong Games is developing its debut title. The game is still taking shape, and we’ll share more as development progresses.</p>
              </div>
              <div className="project-art" aria-hidden="true">
                <svg viewBox="0 0 320 210" fill="none">
                  <g transform="rotate(-24 160 105)">
                    <ellipse cx="160" cy="105" rx="122" ry="32" />
                    <ellipse cx="160" cy="105" rx="98" ry="22" strokeDasharray="2 6" />
                  </g>
                  <circle cx="160" cy="105" r="52" />
                  <circle cx="160" cy="105" r="71" strokeDasharray="1 7" />
                  <path d="M150 105h20m-10-10v20" />
                  <circle className="marker" cx="266" cy="53" r="4" />
                </svg>
              </div>
            </article>
          </section>

          <section id="about" className="section split" aria-labelledby="about-title">
            <div>
              <div className="eyebrow"><span>02</span> / ABOUT</div>
              <h2 id="about-title">About the studio</h2>
              <p>Blong Games is an independent studio founded and run by Federico Ahumada. Federico leads development and works with external collaborators.</p>
            </div>
            <aside className="founder">
              <span className="eyebrow">FOUNDER</span>
              <h3>Federico Ahumada</h3>
              <p>Independent game developer</p>
            </aside>
          </section>

          <section id="contact" className="section contact" aria-labelledby="contact-title">
            <div className="eyebrow"><span>03</span> / CONTACT</div>
            <h2 id="contact-title">Contact</h2>
            {contactEmail ? (
              <>
                <p>For studio inquiries or collaborations, get in touch by email.</p>
                <a className="button" href={'mailto:' + contactEmail}>Email the studio <span aria-hidden="true">↗</span></a>
              </>
            ) : <p>Studio contact details will be available here.</p>}
          </section>
        </div>
      </main>

      <footer>
        <div className="shell footer-inner">
          <span>© {new Date().getFullYear()} Blong Games</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
