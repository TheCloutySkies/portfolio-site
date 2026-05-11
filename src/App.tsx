import { useEffect, useRef, useState } from "react";
import styles from "./App.module.css";
import ClickSpark from "./components/ClickSpark.jsx";
import DomeGallery from "./components/DomeGallery.jsx";
import GradientText from "./components/GradientText.jsx";
import TextType from "./components/TextType.jsx";
import VariableProximity from "./components/VariableProximity.jsx";
import Waves from "./components/Waves.jsx";
import InstagramProfileEmbed from "./components/InstagramProfileEmbed";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#landscapes", label: "Landscapes" },
  { href: "#creative", label: "Creative" },
  { href: "#about", label: "About" },
  { href: "#equipment", label: "Equipment" },
  { href: "#social", label: "Social" },
];

/** Local gallery: files under `public/photos/` → `/photos/...` */
const PHOTO = {
  c1: "/photos/2C121658-759E-4537-AFE7-88749C851801.jpeg",
  c2: "/photos/4F1AAB13-6AF0-4BF6-8553-354434016F52.jpeg",
  dsc: "/photos/DSC_0497.jpg",
  e362: "/photos/E362C843-055A-4036-BC62-6E11B3F77F82.jpeg",
  i2165: "/photos/IMG_2165.jpeg",
  i2690: "/photos/IMG_2690.jpeg",
  i2730: "/photos/IMG_2730.jpeg",
  i2739: "/photos/IMG_2739.jpeg",
  i3720: "/photos/IMG_3720.jpeg",
  i3873: "/photos/IMG_3873.JPG",
  i4758: "/photos/IMG_4758.jpeg",
  i4763: "/photos/IMG_4763.jpeg",
  i4767: "/photos/IMG_4767.jpeg",
  i4781: "/photos/IMG_4781.jpeg",
} as const;

/** Hero dome: wide / impactful mix */
const heroDomeSources = [
  PHOTO.dsc,
  PHOTO.i4758,
  PHOTO.i4767,
  PHOTO.i2730,
  PHOTO.e362,
  PHOTO.c2,
  PHOTO.i4763,
] as const satisfies readonly string[];

/** Work section dome: remaining set */
const workDomeSources = [
  PHOTO.i2165,
  PHOTO.i2690,
  PHOTO.i2739,
  PHOTO.i3720,
  PHOTO.i3873,
  PHOTO.i4781,
  PHOTO.c1,
] as const satisfies readonly string[];

const landscapeImages = [PHOTO.dsc, PHOTO.i2739, PHOTO.i4781, PHOTO.e362] as const;

const creativeImages = [
  PHOTO.i2730,
  PHOTO.i2165,
  PHOTO.c2,
  PHOTO.i4767,
  PHOTO.i2690,
  PHOTO.i4758,
  PHOTO.i3720,
  PHOTO.i4763,
] as const;

/** About section portrait (`IMG_2690.jpeg`) — point at another `PHOTO` key if you swap the file. */
const aboutPortrait = PHOTO.i2690;

function asDomeImages(urls: readonly string[]) {
  return urls.map((src) => ({ src, alt: "" }));
}

const heroDomeImages = asDomeImages(heroDomeSources);
const workDomeImages = asDomeImages(workDomeSources);
export default function App() {
  const proximityContainerRef = useRef<HTMLDivElement>(null);
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
    <ClickSpark sparkColor="rgba(59, 130, 246, 0.85)" sparkRadius={20} sparkCount={10} duration={450}>
      <div ref={proximityContainerRef} className={styles.page}>
      <div className={styles.wavesBg} aria-hidden>
        <Waves
          lineColor="rgba(15, 23, 42, 0.07)"
          backgroundColor="transparent"
          waveSpeedX={0.01}
          waveSpeedY={0.0045}
          waveAmpX={26}
          waveAmpY={13}
          friction={0.93}
          tension={0.004}
          xGap={11}
          yGap={34}
        />
      </div>

      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <div className={styles.headerInner}>
          <a className={styles.wordmark} href="#top">
            <VariableProximity
              label="Clouty Skies"
              fromFontVariationSettings="'wght' 520"
              toFontVariationSettings="'wght' 860"
              containerRef={proximityContainerRef}
              className={styles.wordmarkVp}
              radius={140}
              falloff="gaussian"
            />
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
        <section className={styles.heroShell} aria-labelledby="hero-title">
          <div className={styles.heroDomeLayer}>
            <DomeGallery
              images={heroDomeImages}
              fit={0.52}
              minRadius={420}
              segments={28}
              overlayBlurColor="rgba(250, 250, 252, 0.82)"
              grayscale={false}
            />
          </div>
          <div className={styles.heroTextLayer}>
            <h1 id="hero-title" className={styles.heroTitleStack}>
              <GradientText
                className={styles.heroGradientText}
                colors={["#0f172a", "#2563eb", "#7c3aed", "#0f172a"]}
                animationSpeed={11}
              >
                Creative Portfolio
              </GradientText>
              <span className={styles.heroYear}>2026</span>
            </h1>
            <TextType
              as="p"
              className={styles.heroTagline}
              text={[
                "Nature, street & brand imagery — crafted with care.",
                "Cinematic video, aerial work, and social-ready edits.",
                "Let’s shape your story — frame by frame.",
              ]}
              typingSpeed={38}
              pauseDuration={2600}
              deletingSpeed={28}
              loop
              startOnVisible
            />
            <p className={styles.nameRight}>Lonnie Johnston</p>
            <p className={styles.heroDomain}>portfolio.cloutyskies.org</p>
          </div>
        </section>

        <section id="work" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.h2}>Previous work</h2>
          </div>
          <div className={styles.sectionBleed}>
            <div className={styles.sectionInner}>
              <div className={styles.domeWorkWrap}>
                <DomeGallery
                  images={workDomeImages}
                  fit={0.48}
                  minRadius={420}
                  segments={26}
                  overlayBlurColor="#121016"
                  grayscale={false}
                />
              </div>
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
                <div className={styles.aboutHeadingWrap} role="heading" aria-level={2}>
                  <GradientText
                    className={styles.gradientAbout}
                    colors={["#f8fafc", "#7dd3fc", "#d8b4fe", "#f8fafc"]}
                    animationSpeed={12}
                  >
                    Thanks for considering me for your next project!
                  </GradientText>
                </div>
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
                <div className={styles.socialEmbedWrap}>
                  <InstagramProfileEmbed />
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
                    href="https://cloutyskies.org"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.linkClassic}
                  >
                    cloutyskies.org
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
    </ClickSpark>
  );
}
