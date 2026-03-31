type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-reading space-y-3 ${alignment}`}>
      {eyebrow ? (
        <p className="eyebrow">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-4xl uppercase leading-[0.95] text-foreground sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
