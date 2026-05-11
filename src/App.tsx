import { useEffect, useState } from "react";
import styles from "./App.module.css";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#landscapes", label: "Landscapes" },
  { href: "#creative", label: "Creative" },
  { href: "#about", label: "About" },
  { href: "#equipment", label: "Equipment" },
  { href: "#social", label: "Social" },
];

/** Placeholder photography — swap for your own files in `/public` when ready. */
const heroImage =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=85&auto=format&fit=crop";

const previousWorkImages = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80&auto=format&fit=crop",
];

const landscapeImages = [
  "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&q=80&auto=format&fit=crop",
];

const creativeImages = [
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518895949257-7621c3b88656?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=700&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80&auto=format&fit=crop",
];

const socialPhoto =
  "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&q=80&auto=format&fit=crop";

const aboutPortrait =
  "https://images.unsplash.com/photo-1608501821307-163a2bcf390d?w=800&q=80&auto=format&fit=crop";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <div className={styles.headerInner}>
          <a className={styles.wordmark} href="#top">
            Clouty Skies
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
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroInner}>
            <div className={styles.heroFrame}>
              <img
                src={heroImage}
                alt="Calm lake reflecting mountains — replace with your hero photograph"
                className={styles.heroImg}
                width={1600}
                height={1000}
                loading="eager"
                decoding="async"
              />
            </div>
            <div className={styles.heroTitles}>
              <div className={styles.heroTitleBlock}>
                <h1 id="hero-title" className={styles.stackedTitle}>
                  <span className={styles.titleLine}>Creative</span>
                  <span className={styles.titleLine}>
                    Portfolio
                    <sup className={styles.yearSup}>2026</sup>
                  </span>
                </h1>
              </div>
              <p className={styles.nameRight}>Lonnie Johnston</p>
            </div>
            <p className={styles.heroDomain}>portfolio.cloutyskies.org</p>
          </div>
        </section>

        <section id="work" className={styles.section}>
          <div className={styles.sectionBleed}>
            <div className={styles.collageWrap}>
              <div className={styles.prevGrid}>
                {previousWorkImages.map((src, i) => (
                  <div key={`${src}-${i}`} className={styles.prevCell}>
                    <img
                      src={src}
                      alt=""
                      className={styles.prevImg}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
              <p className={styles.collageLabel} aria-hidden>
                Previous work
              </p>
            </div>
          </div>
        </section>

        <section id="landscapes" className={styles.section}>
          <div className={styles.sectionBleed}>
            <div className={styles.landWrap}>
              <div className={styles.landGrid}>
                {landscapeImages.map((src, i) => (
                  <div key={`${src}-${i}`} className={styles.landCell}>
                    <img src={src} alt="" className={styles.landImg} loading="lazy" />
                  </div>
                ))}
              </div>
              <p className={styles.collageLabelDark} aria-hidden>
                Landscapes
              </p>
            </div>
          </div>
        </section>

        <section id="creative" className={`${styles.section} ${styles.sectionMist}`}>
          <div className={styles.sectionInner}>
            <div className={styles.creativeBoard}>
              {creativeImages.map((src, i) => (
                <div key={`${src}-${i}`} className={styles.creativeTile}>
                  <img src={src} alt="" loading="lazy" />
                </div>
              ))}
              <p className={styles.creativeWord} aria-hidden>
                Creative
              </p>
            </div>
          </div>
        </section>

        <section id="about" className={styles.sectionDark}>
          <div className={styles.sectionInner}>
            <div className={styles.resumeGrid}>
              <div className={`${styles.resumeCell} ${styles.resumeIntro}`}>
                <h2 className={styles.resumeHeading}>Thanks for considering me for your next project!</h2>
                <p className={styles.resumeProse}>
                  My name is Lonnie, and I have been passionate about video and photography since I
                  first picked up a camera. My background is rooted in nature and street photography,
                  where adaptability and creativity are essential. I focus on bringing each
                  client&apos;s vision to life while strengthening their personal and brand identity.
                  I&apos;m excited to learn more about your needs and explore how my skills can support
                  your goals.
                </p>
              </div>
              <div className={`${styles.resumeCell} ${styles.resumePhoto}`}>
                <img
                  src={aboutPortrait}
                  alt="Lonnie Johnston — photographer and videographer"
                  loading="lazy"
                />
              </div>
              <div className={`${styles.resumeCell} ${styles.resumeBrand}`}>
                <div className={styles.brandRow}>
                  <span className={styles.brandHuge}>Lonnie</span>
                  <div className={styles.brandPills}>
                    <span className={styles.pillOutline}>Photography</span>
                    <span className={styles.pillAnd}>and</span>
                    <span className={styles.pillSolid}>Video Services</span>
                  </div>
                </div>
                <div className={styles.brandRowLower}>
                  <div className={styles.credential}>
                    <span>Heartland Career Center</span>
                    <span>Industry Training in Multimedia Arts</span>
                    <span className={styles.credentialYear}>2022</span>
                  </div>
                  <span className={styles.brandHugeLower}>Johnston</span>
                </div>
                <div className={styles.brandLinks}>
                  <a
                    href="https://lonniejohnston.com"
                    className={styles.resumeLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    lonniejohnston.com
                  </a>
                  <a
                    href="https://instagram.com/clouty_skies_photography"
                    className={styles.resumeLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    @clouty_skies_photography
                  </a>
                </div>
              </div>
              <div className={`${styles.resumeCell} ${styles.resumeSkills}`}>
                <h3 className={styles.resumeH3}>Skills</h3>
                <ul className={styles.resumeList}>
                  <li>Proficient in video editing software (Adobe Premiere Pro, Capcut)</li>
                  <li>Video/audio synchronization and editing</li>
                  <li>Color correction and grading</li>
                  <li>
                    Creative flexibility for crafting your vision. I&apos;m a fast learner and faster
                    at adapting to setbacks.
                  </li>
                  <li>7+ years behind the camera and editing monitor</li>
                </ul>
              </div>
              <div className={`${styles.resumeCell} ${styles.resumeExp}`}>
                <h3 className={styles.resumeH3}>Experience / services</h3>
                <ul className={styles.resumeList}>
                  <li>YouTube and social media content / management</li>
                  <li>Aerial photo &amp; video</li>
                  <li>Senior / graduate photography</li>
                  <li>Concert / live music / music video</li>
                  <li>Short film and cinematic video creation</li>
                  <li>Individual &amp; group personal photography sessions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="equipment" className={styles.section}>
          <div className={styles.sectionInnerNarrow}>
            <h2 className={styles.h2}>Equipment / experience</h2>
            <ul className={styles.equipList}>
              <li>Canon M50 Mk II</li>
              <li>Nikon D5300</li>
              <li>Canon PowerShot SD700</li>
              <li>iPhone 15 Pro</li>
              <li>Lumix G9</li>
            </ul>
            <hr className={styles.equipRule} />
            <p className={styles.equipLabel}>Photo editing</p>
            <p className={styles.equipInline}>Photoshop, Picsart, Canva, Gimp</p>
            <p className={styles.equipLabel}>Video editing</p>
            <p className={styles.equipInline}>Capcut, Adobe Premiere Pro, iMovie, DaVinci Resolve</p>
          </div>
        </section>

        <section id="social" className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.socialGrid}>
              <h2 className={styles.socialVertical}>Social media links</h2>
              <div className={styles.socialBody}>
                <div className={styles.socialPhotoWrap}>
                  <img
                    src={socialPhoto}
                    alt=""
                    loading="lazy"
                    className={styles.socialPhoto}
                  />
                </div>
                <p className={styles.socialLine}>
                  <a
                    href="https://instagram.com/clouty_skies_photography"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.linkClassic}
                  >
                    @clouty_skies_photography on Instagram
                  </a>
                </p>
                <p className={styles.socialLine}>
                  <a
                    href="https://lonniejohnston.com"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.linkClassic}
                  >
                    lonniejohnston.com
                  </a>
                </p>
                <p className={styles.socialLine}>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.linkClassic}
                  >
                    YouTube portfolio
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()} Lonnie Johnston · Clouty Skies Photography · React on
          Cloudflare
        </p>
      </footer>
    </div>
  );
}
