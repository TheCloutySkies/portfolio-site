import { useEffect } from "react";

/** Instagram profile embed — loads official embed.js and processes the blockquote. */
const PERMALINK =
  "https://www.instagram.com/clouty_skies_photography/?utm_source=ig_embed&utm_campaign=loading";

function processInstagramEmbeds() {
  window.instgrm?.Embeds.process();
}

function ensureInstagramScript() {
  if (document.querySelector('script[src*="instagram.com/embed.js"]')) {
    processInstagramEmbeds();
    return;
  }
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.instagram.com/embed.js";
  s.onload = processInstagramEmbeds;
  document.body.appendChild(s);
}

export default function InstagramProfileEmbed() {
  useEffect(() => {
    ensureInstagramScript();
    const t = window.setTimeout(processInstagramEmbeds, 500);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={PERMALINK}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px auto",
        maxWidth: 540,
        minWidth: 280,
        padding: 0,
        width: "calc(100% - 2px)",
      }}
    />
  );
}
