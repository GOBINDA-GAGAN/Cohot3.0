import { useState, useEffect } from "react";

// ── Utility ──────────────────────────────────────────────────────────────────
function generateCode() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

// ── SVG Shapes ───────────────────────────────────────────────────────────────
const BlobYellow = ({ className = "" }) => (
  <svg viewBox="0 0 220 200" className={className} aria-hidden="true">
    <path
      d="M30,100 C25,55 55,15 100,18 C130,5 170,8 190,30 C210,50 215,85 200,115 C185,145 155,165 120,168 C85,171 45,158 30,130 C18,115 30,120 30,100 Z"
      fill="#FFD15C"
      stroke="#111318"
      strokeWidth="2"
    />
  </svg>
);

const BlobGreen = ({ className = "" }) => (
  <svg viewBox="0 0 200 180" className={className} aria-hidden="true">
    <path
      d="M25,90 C20,48 52,12 95,15 C125,3 162,10 182,38 C202,60 198,98 178,120 C158,142 125,155 90,152 C55,149 22,128 25,90 Z"
      fill="#BFF5B1"
      stroke="#111318"
      strokeWidth="2"
    />
  </svg>
);

const BlobPink = ({ className = "" }) => (
  <svg viewBox="0 0 210 190" className={className} aria-hidden="true">
    <path
      d="M35,95 C28,52 60,14 100,18 C130,6 168,8 188,34 C208,56 205,92 188,118 C170,145 135,160 100,158 C65,156 30,130 35,95 Z"
      fill="#FFB7C6"
      stroke="#111318"
      strokeWidth="2"
    />
  </svg>
);

const Star = ({ className = "" }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
    <path
      d="M16,2 L18.5,12 L28,16 L18.5,20 L16,30 L13.5,20 L4,16 L13.5,12 Z"
      fill="#FFD15C"
      stroke="#111318"
      strokeWidth="1.5"
    />
  </svg>
);

const Arrow = ({ className = "" }) => (
  <svg viewBox="0 0 80 60" className={className} aria-hidden="true">
    <path d="M5,15 C20,10 45,30 65,45" stroke="#111318" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M55,38 L65,45 L58,55" stroke="#111318" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Illustration (desktop only) ───────────────────────────────────────────────
const HeroIllustration = () => (
  <div className="relative w-full h-80 lg:h-96 select-none" aria-hidden="true">
    {/* Yellow planet */}
    <div
      className="absolute top-4 right-12 w-36 h-36 rounded-full border-2 border-black"
      style={{ background: "#FFD15C", boxShadow: "4px 4px 0 #111318" }}
    >
      <div className="absolute top-6 left-5 w-16 h-2 rounded-full bg-yellow-400 opacity-50 rotate-12" />
      <div className="absolute top-10 left-8 w-10 h-1.5 rounded-full bg-yellow-400 opacity-40 rotate-6" />
    </div>

    {/* Ring around planet */}
    <div
      className="absolute top-14 right-4 w-52 h-10 border-2 border-black rounded-full"
      style={{ background: "transparent", transform: "rotate(-15deg)", borderColor: "#111318" }}
    />

    {/* Astronaut / robot */}
    <div className="absolute top-28 right-28" style={{ transform: "rotate(8deg)" }}>
      <div className="w-12 h-12 rounded-full border-2 border-black bg-white flex items-center justify-center text-2xl shadow-sm">
        🤖
      </div>
      <div className="mt-1 w-10 h-8 mx-auto border-2 border-black bg-white rounded-lg" />
      <div className="flex gap-1 mt-0.5 justify-center">
        <div className="w-3 h-5 border-2 border-black bg-white rounded-sm" />
        <div className="w-3 h-5 border-2 border-black bg-white rounded-sm" />
      </div>
    </div>

    {/* Purple floating note */}
    <div
      className="absolute top-6 left-8 px-4 py-3 border-2 border-black text-sm font-mono leading-snug"
      style={{
        background: "#6947ED",
        color: "#fff",
        transform: "rotate(-6deg)",
        borderRadius: "18px 4px 18px 4px",
        boxShadow: "3px 3px 0 #111318",
      }}
    >
      short.link/<br />magic ✦
    </div>

    {/* Hand-drawn arrow */}
    <Arrow className="absolute top-44 left-16 w-20 opacity-60" style={{ transform: "rotate(25deg)" }} />

    {/* Small decorative dots */}
    <div className="absolute bottom-12 left-4 w-3 h-3 rounded-full border-2 border-black bg-pink-300" />
    <div className="absolute bottom-24 right-8 w-4 h-4 border-2 border-black rotate-45" style={{ background: "#BFF5B1" }} />
    <div className="absolute top-56 left-32 w-2.5 h-2.5 rounded-full bg-yellow-400 border border-black" />
    <Star className="absolute bottom-8 right-20 w-7" />

    {/* Green squiggle shape */}
    <div
      className="absolute bottom-16 left-12 px-3 py-2 text-xs font-mono border-2 border-black"
      style={{
        background: "#3B9F4A",
        color: "#fff",
        borderRadius: "50% 8px 50% 8px",
        transform: "rotate(4deg)",
        boxShadow: "2px 2px 0 #111318",
      }}
    >
      linky ✓
    </div>
  </div>
);

// ── Main Component ────────────────────────────────────────────────────────────
export default function Linky() {
  const [url, setUrl] = useState("");
  const [shortCode, setShortCode] = useState("");
  const [clicks, setClicks] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isShortening, setIsShortening] = useState(false);

  const shortUrl = shortCode ? `linky.in/${shortCode}` : "";

  function shortenUrl() {
    if (!url.trim()) {
      setError("Paste a URL first — even a tiny one needs a starting point.");
      return;
    }
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      setError("Add https:// to the start of your URL.");
      return;
    }
    setError("");
    setIsShortening(true);
    setTimeout(() => {
      setShortCode(generateCode());
      setClicks(Math.floor(Math.random() * 900) + 50);
      setShowResult(true);
      setIsShortening(false);
    }, 500);
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(`https://${shortUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  }

  function openLink() {
    window.open(`https://${shortUrl}`, "_blank", "noopener,noreferrer");
  }

  async function shareLink() {
    if (navigator.share) {
      try {
        await navigator.share({ title: "Linky short link", url: `https://${shortUrl}` });
        return;
      } catch {}
    }
    copyLink();
  }

  function handleKey(e) {
    if (e.key === "Enter") shortenUrl();
  }

  return (
    <div className="min-h-screen" style={{ background: "#F7F4EC", color: "#111318", fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}>

      {/* ── Google Font ─────────────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        /* Organic blob shape for main card */
        .organic-card {
          border-radius: 55% 45% 60% 40% / 45% 55% 45% 55%;
          transition: border-radius 0.4s ease;
        }
        .organic-card:hover {
          border-radius: 50% 50% 55% 45% / 50% 50% 50% 50%;
        }

        /* Wavy bottom shape */
        .wavy-box {
          border-radius: 12px 4px 18px 6px / 6px 18px 4px 12px;
        }

        /* Input organic shape */
        .input-organic {
          border-radius: 40px 8px 40px 8px / 8px 40px 8px 40px;
        }

        /* Result card */
        .result-organic {
          border-radius: 8px 50px 8px 50px / 50px 8px 50px 8px;
        }

        /* Mini blob */
        .blob-mini {
          border-radius: 60% 40% 55% 45% / 45% 60% 40% 55%;
        }

        /* Bottom tag shapes */
        .tag-yellow { border-radius: 50% 12px 50% 12px / 12px 50% 12px 50%; }
        .tag-green  { border-radius: 12px 50% 12px 50% / 50% 12px 50% 12px; }
        .tag-pink   { border-radius: 30px 6px 30px 6px; }

        /* Button organic */
        .btn-organic {
          border-radius: 50px 12px 50px 12px;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .btn-organic:hover {
          transform: translateY(-3px);
          box-shadow: 4px 6px 0 #111318;
        }
        .btn-organic:active { transform: translateY(0); box-shadow: 2px 2px 0 #111318; }

        /* Action button */
        .btn-action {
          border-radius: 12px 4px 12px 4px;
          transition: transform 0.12s ease, box-shadow 0.12s ease;
        }
        .btn-action:hover { transform: translateY(-2px); box-shadow: 3px 4px 0 #111318; }
        .btn-action:active { transform: translateY(0); box-shadow: 1px 1px 0 #111318; }

        /* Decorative bottom shapes */
        .deco-blob {
          transition: transform 0.3s ease;
        }
        .deco-blob:hover { transform: rotate(3deg) scale(1.02); }

        /* Result reveal animation */
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .reveal { animation: slideUp 0.4s cubic-bezier(.22,.68,0,1.2) forwards; }

        /* Floating note wiggle */
        @keyframes wiggle {
          0%,100% { transform: rotate(-5deg); }
          50%      { transform: rotate(-2deg); }
        }
        .wiggle { animation: wiggle 4s ease-in-out infinite; }

        /* Star spin */
        @keyframes spinSlow { to { transform: rotate(360deg); } }
        .spin-slow { animation: spinSlow 12s linear infinite; }

        /* Shrinking spinner */
        @keyframes shrink {
          0%,100% { transform: scale(1); opacity:1 }
          50%      { transform: scale(0.7); opacity:0.6 }
        }
        .shrinking { animation: shrink 0.6s ease-in-out infinite; }

        /* Nav link hover */
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content:'';
          position:absolute;
          bottom:-2px; left:0;
          width:0; height:2px;
          background:#3B9F4A;
          transition: width 0.2s ease;
        }
        .nav-link:hover::after { width:100%; }

        @media (max-width: 640px) {
          .hero-title { font-size: clamp(2.2rem, 11vw, 3.5rem) !important; }
        }
      `}</style>

      {/* ── NAVBAR ──────────────────────────────────────────────────────────── */}
      <nav
        className="w-full border-b-2 border-black px-5 md:px-10 py-4 flex items-center justify-between sticky top-0 z-50"
        style={{ background: "#F7F4EC" }}
      >
        {/* Logo */}
        <div>
          <span className="text-2xl font-extrabold tracking-tight" style={{ letterSpacing: "-0.04em" }}>
            linky
          </span>
          <span className="hidden sm:block text-xs font-mono mt-0.5" style={{ color: "#555", letterSpacing: "0.02em" }}>
            small links. bigger stories.
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["Home", "Shorten", "Stats"].map((item) => (
            <button key={item} className="nav-link pb-0.5" style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
              {item}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          className="btn-organic px-4 py-2 text-sm font-semibold border-2 border-black"
          style={{ background: "#3B9F4A", color: "#fff", boxShadow: "3px 3px 0 #111318" }}
          onClick={() => document.getElementById("shortener")?.scrollIntoView({ behavior: "smooth" })}
        >
          Start shortening →
        </button>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-5 md:px-10 pt-16 pb-10 md:pt-20 md:pb-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left copy */}
        <div className="relative">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase mb-6 px-3 py-1 border-2 border-black wavy-box" style={{ background: "#FFD15C" }}>
            LONG URL? ↘
          </div>

          {/* Headline */}
          <h1
            className="hero-title font-extrabold leading-none mb-6 relative"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", letterSpacing: "-0.04em" }}
          >
            Make it{" "}
            <span style={{ color: "#3B9F4A" }}>Tiny.</span>
            <br />
            Make it{" "}
            <span style={{ color: "#6947ED" }}>Mighty.</span>
            <Star className="inline-block w-8 ml-2 spin-slow align-top mt-2" />
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed mb-8 max-w-md" style={{ color: "#444" }}>
            Turn long, ugly URLs into clean little links. Share them anywhere. Track every click.
          </p>

          {/* Floating pink note */}
          <div
            className="wiggle inline-block px-4 py-3 border-2 border-black text-sm font-medium leading-snug mb-6"
            style={{
              background: "#FFB7C6",
              borderRadius: "18px 4px 18px 4px",
              boxShadow: "3px 3px 0 #111318",
              transform: "rotate(-5deg)",
              maxWidth: "200px",
            }}
          >
            Smaller links.<br />Bigger ideas. :)
          </div>

          {/* CTA scroll */}
          <div className="mt-4">
            <button
              className="btn-organic px-7 py-3 text-base font-bold border-2 border-black"
              style={{ background: "#111318", color: "#F7F4EC", boxShadow: "4px 4px 0 #3B9F4A" }}
              onClick={() => document.getElementById("shortener")?.scrollIntoView({ behavior: "smooth" })}
            >
              Shrink your first link ↗
            </button>
          </div>
        </div>

        {/* Right illustration (desktop only) */}
        <div className="hidden lg:block">
          <HeroIllustration />
        </div>
      </section>

      {/* ── URL SHORTENER ───────────────────────────────────────────────────── */}
      <section id="shortener" className="max-w-screen-xl mx-auto px-5 md:px-10 py-10 md:py-16">

        {/* Main organic input card */}
        <div
          className="organic-card border-2 border-black p-8 md:p-12 max-w-2xl mx-auto"
          style={{ background: "#fff", boxShadow: "6px 6px 0 #111318" }}
        >
          {/* Icon + label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl" aria-hidden="true">🔗</span>
            <span className="text-xs font-mono font-bold tracking-widest" style={{ color: "#888" }}>
              YOUR LONG URL
            </span>
          </div>

          {/* Input */}
          <div className="relative mb-4">
            <input
              type="url"
              value={url}
              onChange={(e) => { setUrl(e.target.value); setError(""); }}
              onKeyDown={handleKey}
              placeholder="https://example.com/your-long-url..."
              className="w-full border-2 border-black px-5 py-4 text-base font-medium outline-none focus:ring-2 focus:ring-offset-1"
              style={{
                borderRadius: "40px 8px 40px 8px / 8px 40px 8px 40px",
                background: "#F7F4EC",
                fontFamily: "inherit",
                focusRingColor: "#6947ED",
              }}
              aria-label="Enter your long URL"
              autoComplete="url"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-sm font-medium mb-3 px-3 py-1.5 border-2 border-black wavy-box" style={{ background: "#FFB7C6", color: "#111318" }}>
              {error}
            </p>
          )}

          {/* Button */}
          <button
            onClick={shortenUrl}
            disabled={isShortening}
            className="btn-organic w-full py-4 text-base font-bold border-2 border-black"
            style={{ background: "#6947ED", color: "#fff", boxShadow: "4px 4px 0 #111318" }}
            aria-label="Shorten URL"
          >
            {isShortening ? (
              <span className="shrinking inline-block">Shrinking…</span>
            ) : (
              "Shorten ↗"
            )}
          </button>

          {/* Sub-label */}
          <p className="text-center text-xs font-mono mt-5" style={{ color: "#aaa", letterSpacing: "0.15em" }}>
            paste · shrink · share · repeat
          </p>
        </div>

        {/* ── RESULT ──────────────────────────────────────────────────────── */}
        {showResult && (
          <div className="reveal max-w-2xl mx-auto mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              {/* Main result */}
              <div
                className="result-organic border-2 border-black p-6 sm:col-span-2"
                style={{ background: "#fff", boxShadow: "5px 5px 0 #111318" }}
              >
                {/* Success badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-sm font-bold"
                    style={{ background: "#3B9F4A", color: "#fff" }}
                    aria-label="Success"
                  >
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-bold">Your tiny link is ready</p>
                    <p className="text-xs font-mono" style={{ color: "#888" }}>Ready to travel.</p>
                  </div>
                </div>

                {/* Link display */}
                <div className="mb-5">
                  <p className="text-xs font-mono font-bold tracking-widest mb-2" style={{ color: "#888" }}>REDIRECT LINK</p>
                  <div
                    className="px-4 py-3 border-2 border-black font-mono font-bold text-lg"
                    style={{ background: "#F7F4EC", borderRadius: "8px 30px 8px 30px", color: "#111318" }}
                  >
                    {shortUrl}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={copyLink}
                    className="btn-action px-4 py-2 text-sm font-semibold border-2 border-black"
                    style={{
                      background: copied ? "#3B9F4A" : "#111318",
                      color: "#fff",
                      boxShadow: "2px 2px 0 " + (copied ? "#111318" : "#3B9F4A"),
                      transition: "background 0.2s",
                    }}
                    aria-label="Copy link"
                  >
                    {copied ? "Copied ✓" : "Copy link"}
                  </button>
                  <button
                    onClick={openLink}
                    className="btn-action px-4 py-2 text-sm font-semibold border-2 border-black"
                    style={{ background: "#fff", color: "#111318", boxShadow: "2px 2px 0 #111318" }}
                    aria-label="Open link in new tab"
                  >
                    Open ↗
                  </button>
                  <button
                    onClick={shareLink}
                    className="btn-action px-4 py-2 text-sm font-semibold border-2 border-black"
                    style={{ background: "#FFD15C", color: "#111318", boxShadow: "2px 2px 0 #111318" }}
                    aria-label="Share link"
                  >
                    Share
                  </button>
                </div>
              </div>

              {/* Click counter */}
              <div
                className="blob-mini border-2 border-black p-5 flex flex-col items-center justify-center text-center"
                style={{ background: "#FFD15C", boxShadow: "4px 4px 0 #111318" }}
              >
                <p className="text-xs font-mono font-bold tracking-widest mb-2" style={{ letterSpacing: "0.12em", color: "#555" }}>
                  TOTAL CLICKS
                </p>
                <p
                  className="font-extrabold mb-1"
                  style={{ fontSize: "3rem", lineHeight: 1, letterSpacing: "-0.04em" }}
                  aria-label={`${clicks} total clicks`}
                >
                  {clicks}
                </p>
                <p className="text-xs font-mono" style={{ color: "#555" }}>↗ tracking</p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ── BOTTOM CREATIVE ELEMENTS ────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-5 md:px-10 py-12 md:py-20">
        <div className="flex flex-wrap justify-center gap-5 md:gap-8">

          {/* Yellow tag */}
          <div
            className="deco-blob tag-yellow border-2 border-black px-7 py-6 text-sm font-semibold leading-snug"
            style={{
              background: "#FFD15C",
              boxShadow: "4px 4px 0 #111318",
              transform: "rotate(-3deg)",
              maxWidth: "170px",
              textAlign: "center",
            }}
          >
            Big ideas.<br />Tiny links.<br />Go further.
          </div>

          {/* Green tag */}
          <div
            className="deco-blob tag-green border-2 border-black px-7 py-6 text-sm font-semibold leading-snug"
            style={{
              background: "#BFF5B1",
              boxShadow: "4px 4px 0 #111318",
              transform: "rotate(2deg)",
              maxWidth: "170px",
              textAlign: "center",
            }}
          >
            Shorter.<br />Cleaner.<br />Brighter.
          </div>

          {/* Pink tag */}
          <div
            className="deco-blob tag-pink border-2 border-black px-7 py-6 text-sm font-semibold leading-snug"
            style={{
              background: "#FFB7C6",
              boxShadow: "4px 4px 0 #111318",
              transform: "rotate(-1.5deg)",
              maxWidth: "190px",
              textAlign: "center",
            }}
          >
            Share a link.<br />Not a paragraph.<br />:)
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer
        className="border-t-2 border-black px-5 md:px-10 py-8"
        style={{ background: "#111318", color: "#F7F4EC" }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-lg font-extrabold tracking-tight" style={{ letterSpacing: "-0.04em" }}>
              linky
            </span>
            <span className="ml-2 text-sm font-mono" style={{ color: "#aaa" }}>/ A smaller internet.</span>
          </div>
          <nav className="flex gap-6 text-sm font-medium" style={{ color: "#ccc" }}>
            {["About", "Privacy", "Terms"].map((item) => (
              <button
                key={item}
                className="hover:text-white transition-colors"
                style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", color: "inherit" }}
              >
                {item}
              </button>
            ))}
          </nav>
          <p className="text-xs font-mono" style={{ color: "#666" }}>Made for tiny links ✦</p>
        </div>
      </footer>
    </div>
  );
}