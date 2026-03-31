type ProofImagePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
  tags?: string[];
  theme?: "light" | "dark";
  className?: string;
};

export function ProofImagePlaceholder({
  eyebrow,
  title,
  description,
  tags = [],
  theme = "light",
  className = ""
}: ProofImagePlaceholderProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`proof-placeholder ${isDark ? "proof-placeholder-dark" : "proof-placeholder-light"} ${className}`.trim()}
    >
      <div className="proof-placeholder-grid" />
      <div className="proof-placeholder-focus" />
      <div className="proof-placeholder-copy">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <p className={`eyebrow ${isDark ? "text-white/55" : ""}`}>{eyebrow}</p>
            <h3 className={`font-display text-4xl uppercase leading-[0.9] ${isDark ? "text-white" : "text-navy"}`}>
              {title}
            </h3>
          </div>
          <span
            className={`rounded-pill border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] ${
              isDark ? "border-white/10 bg-white/10 text-white/70" : "border-line bg-white/80 text-navy"
            }`}
          >
            Image Placeholder
          </span>
        </div>
        <p className={`max-w-xl text-base leading-7 ${isDark ? "text-white/80" : "text-muted"}`}>{description}</p>
        {tags.length ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                className={`rounded-pill border px-3 py-1.5 text-xs font-medium ${
                  isDark ? "border-white/10 bg-white/10 text-white/80" : "border-line bg-white/90 text-navy"
                }`}
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
