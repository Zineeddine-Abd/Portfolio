"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Variant = "underline" | "circle" | "arrow";

type Shape = { viewBox: string; d: string };

// Hand-drawn paths. Each uses pathLength={1} so we can normalise the
// stroke-dash animation regardless of the real geometry length.
const SHAPES: Record<Variant, Shape> = {
  underline: {
    viewBox: "0 0 300 22",
    d: "M5 13c46-8 96 7 146 1 36-4 78 6 144-4",
  },
  circle: {
    viewBox: "0 0 260 120",
    d: "M86 16C30 22 12 74 64 98c58 26 156 12 178-20 16-24-18-58-86-64-22-2-44 0-64 6",
  },
  arrow: {
    viewBox: "0 0 130 120",
    d: "M14 14c30 38 22 70 62 86M76 100l-22-2M76 100l4-22",
  },
};

type AnnotationProps = {
  variant: Variant;
  className?: string;
  /** Stroke colour. Defaults to the ballpoint-blue accent. */
  color?: string;
  strokeWidth?: number;
  /** Delay before the stroke starts drawing, in ms. */
  delay?: number;
  /** Apply the roughen filter for extra hand-drawn jitter. */
  rough?: boolean;
  style?: CSSProperties;
};

export function Annotation({
  variant,
  className = "",
  color = "var(--color-accent)",
  strokeWidth = 3,
  delay = 0,
  rough = true,
  style,
}: AnnotationProps) {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);
  const shape = SHAPES[variant];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox={shape.viewBox}
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
      preserveAspectRatio="none"
    >
      <path
        d={shape.d}
        pathLength={1}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={rough ? "url(#roughen)" : undefined}
        style={{
          strokeDasharray: 1,
          strokeDashoffset: drawn ? 0 : 1,
          transition: "stroke-dashoffset 0.9s ease",
          transitionDelay: `${delay}ms`,
        }}
      />
    </svg>
  );
}
