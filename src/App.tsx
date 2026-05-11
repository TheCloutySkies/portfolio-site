import { useEffect, useState } from "react";
import styles from "./App.module.css";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className={styles.page}>
      <div className={styles.aurora} aria-hidden />
      <div className={styles.grid} aria-hidden />

      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <div className={styles.headerInner}>
          <a className={styles.wordmark} href="#top">
            <span className={styles.wordmarkAccent}>Clouty</span> Skies
          </a>
          <nav className={styles.nav} aria-label="Primary">
            <ul className={styles.navList}>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={styles.navLink}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={styles.srOnly}>Menu</span>
            <span className={styles.menuIcon} aria-hidden />
          </button>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`${styles.mobileSheet} ${menuOpen ? styles.mobileOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile">
          <ul className={styles.mobileList}>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={styles.mobileLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <main id="top">
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Portfolio · portfolio.cloutyskies.org</p>
            <h1 className={styles.heroTitle}>
              Building sharp web experiences on the{" "}
              <em className={styles.heroEm}>edge</em>.
            </h1>
            <p className={styles.heroLead}>
              This is your launchpad—React-first, Cloudflare-backed, and ready
              for motion, 3D, and whatever &ldquo;epic&rdquo; means next.
            </p>
            <div className={styles.heroCtas}>
              <a className={styles.btnPrimary} href="#work">
                View work
              </a>
              <a className={styles.btnGhost} href="#contact">
                Say hello
              </a>
            </div>
          </div>
        </section>

        <section id="about" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>About</h2>
            <div className={styles.split}>
              <p className={styles.prose}>
                I design and ship interfaces that feel fast, intentional, and a
                little theatrical—without sacrificing clarity. This stack pairs a
                Vite + React front end with Cloudflare Workers static assets so
                the whole site is one cohesive deployment.
              </p>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Now</h3>
                <ul className={styles.list}>
                  <li>React 19 + TypeScript</li>
                  <li>Workers static assets (SPA mode)</li>
                  <li>Room to grow: animation, WebGL, data layers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>Selected work</h2>
            <p className={styles.sectionLead}>
              Placeholder cards—swap in real case studies, screenshots, and
              metrics whenever you are ready.
            </p>
            <div className={styles.cards}>
              {[
                {
                  title: "Edge-native portfolio",
                  tag: "React · Workers",
                  body: "SPA hosted on Cloudflare with custom domain routing.",
                },
                {
                  title: "Interactive lab",
                  tag: "Coming soon",
                  body: "A sandbox for shaders, motion studies, and experiments.",
                },
                {
                  title: "Product UI kit",
                  tag: "Design systems",
                  body: "Reusable patterns for dashboards and marketing pages.",
                },
              ].map((item) => (
                <article key={item.title} className={styles.project}>
                  <div className={styles.projectTop}>
                    <h3 className={styles.projectTitle}>{item.title}</h3>
                    <span className={styles.tag}>{item.tag}</span>
                  </div>
                  <p className={styles.projectBody}>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.ctaPanel}>
              <div>
                <h2 className={styles.ctaTitle}>Let&apos;s collaborate</h2>
                <p className={styles.ctaCopy}>
                  Swap this block for a form, Cal link, or socials. DNS for{" "}
                  <strong>portfolio.cloutyskies.org</strong> can point at this
                  Worker once the custom hostname is attached in Cloudflare.
                </p>
              </div>
              <a className={styles.btnPrimary} href="mailto:hello@cloutyskies.org">
                Email hello@cloutyskies.org
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()} Clouty Skies · Built with React & Cloudflare
        </p>
      </footer>
    </div>
  );
}
