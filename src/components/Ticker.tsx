const items = [
  "WEB DESIGN",
  "FRONT-END DEVELOPMENT",
  "UI / UX",
  "BRAND VISUALS",
  "REACT.JS",
  "DIGITAL CREATIVE",
];

const Ticker = () => {
  const row = (keyPrefix: string) => (
    <div className="flex items-center shrink-0">
      {items.map((item, i) => (
        <span key={`${keyPrefix}-${i}`} className="flex items-center">
          <span className="px-6 py-3 font-mono text-xs sm:text-sm tracking-widest">
            {item}
          </span>
          <span className="text-signal text-xs">●</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="bg-film text-film-foreground overflow-hidden border-y border-white/10">
      <div className="marquee-track">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
};

export default Ticker;
