/**
 * Global, invisible SVG <defs> holding the "roughen" filters.
 * Applied via `[filter:url(#roughen)]` to borders/lines so straight edges
 * pick up a subtle hand-drawn jitter. Displacement scale is in CSS px when
 * applied to HTML elements, so the effect stays consistent at any size.
 */
export function SketchDefs() {
  return (
    <svg
      width="0"
      height="0"
      aria-hidden="true"
      focusable="false"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        <filter id="roughen" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012"
            numOctaves={2}
            seed={7}
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={3}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <filter id="roughen-soft" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02"
            numOctaves={2}
            seed={4}
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={1.6}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
