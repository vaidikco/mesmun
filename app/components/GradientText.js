// GradientText.jsx
import { useRef, useEffect } from "react";

const PRESETS = {
  sunset:
    "linear-gradient(135deg, #f5af19, #f12711, #c0392b, #833ab4, #fd1d1d, #fcb045)",
  ocean: "linear-gradient(135deg, #43cea2, #185a9d, #2193b0, #6dd5ed, #43cea2)",
  aurora:
    "linear-gradient(135deg, #a8edea, #fed6e3, #a8edea, #d299c2, #fef9d7)",
  night:
    "linear-gradient(135deg, #868f96, #596164, #0f2027, #203a43, #2c5364, #868f96)",
  candy: "linear-gradient(135deg, #f093fb, #f5576c, #4facfe, #00f2fe, #f093fb)",
  gold: "linear-gradient(135deg, #f7971e, #ffd200, #f7971e, #f5af19, #ffd200)",
};

/**
 * GradientText — animated background-gradient text like Apple's hero headings.
 *
 * Props:
 *   children    — the text content
 *   preset      — "sunset" | "ocean" | "aurora" | "night" | "candy" | "gold"  (default: "sunset")
 *   gradient    — custom CSS gradient string (overrides preset)
 *   duration    — animation duration in seconds (default: 4)
 *   angle       — gradient angle in degrees (default: 135)
 *   className   — extra class names for the span
 *   style       — extra inline styles
 *   as          — element tag to render, e.g. "h1", "h2", "p", "span" (default: "span")
 */
export default function GradientText({
  children,
  preset = "ocean",
  gradient,
  duration = 4,
  className = "",
  style = {},
  as: Tag = "span",
}) {
  const bg = gradient ?? PRESETS[preset] ?? PRESETS.sunset;

  const css = {
    backgroundImage: bg,
    backgroundSize: "300% 300%",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
    animation: `__gt-shift ${duration}s ease infinite`,
    display: "inline-block",
    ...style,
  };

  return (
    <>
      <style>{`
        @keyframes __gt-shift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <Tag className={className} style={css}>
        {children}
      </Tag>
    </>
  );
}
