import type { ReactNode } from "react";

/**
 * Full-colour brand logos for the Tools section, each in its native palette.
 */

export const FigmaLogo = () => (
  <svg viewBox="0 0 38 57" height="38" aria-hidden="true">
    {/* bottom-left */}
    <path
      d="M9.5 57c5.247 0 9.5-4.253 9.5-9.5V38H9.5a9.5 9.5 0 1 0 0 19Z"
      fill="#0ACF83"
    />
    {/* mid-left */}
    <path
      d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5Z"
      fill="#A259FF"
    />
    {/* top-left */}
    <path
      d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5Z"
      fill="#F24E1E"
    />
    {/* top-right */}
    <path d="M19 0h9.5a9.5 9.5 0 1 1 0 19H19V0Z" fill="#FF7262" />
    {/* center */}
    <path
      d="M38 28.5A9.5 9.5 0 1 1 19 28.5a9.5 9.5 0 0 1 19 0Z"
      fill="#1ABCFE"
    />
  </svg>
);

export const FramerLogo = () => (
  <svg viewBox="0 0 24 24" height="32" aria-hidden="true">
    <path d="M4 1h16v7.5h-8zM4 8.5h8l8 7.5h-8V23l-8-7.5z" fill="#0099FF" />
  </svg>
);

export const ProtoPieLogo = () => (
  <svg viewBox="0 0 24 24" height="32" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="#FF5C35" />
    <path
      d="M12 4.5V12h7.5A7.5 7.5 0 0 0 12 4.5Z"
      fill="#fff"
      fillOpacity=".92"
    />
  </svg>
);

export const AfterEffectsLogo = () => (
  <svg viewBox="0 0 40 40" height="44" aria-hidden="true">
    <rect x="1" y="1" width="38" height="38" rx="9" fill="#00005B" />
    <text
      x="20"
      y="27"
      textAnchor="middle"
      fontFamily="-apple-system, 'Helvetica Neue', Arial, sans-serif"
      fontWeight="700"
      fontSize="20"
      letterSpacing="-.5"
      fill="#9999FF"
    >
      Ae
    </text>
  </svg>
);

export const HtmlCssLogo = () => (
  <svg viewBox="0 0 24 24" height="34" aria-hidden="true">
    <path d="M3 2l1.578 17.834L11.99 22l7.432-2.166L21 2H3z" fill="#E44D26" />
    <path
      d="M12 20.418l6.007-1.749L19.371 3.354H12v17.064z"
      fill="#F16529"
    />
    <path
      d="M12 9.86H9.003l-.207-2.32H12V5.273H6.27l.054.61.558 6.27H12V9.86zm0 5.912l-.01.003-2.527-.683-.162-1.81H7.018l.317 3.567 4.654 1.293.011-.004v-2.366z"
      fill="#EBEBEB"
    />
    <path
      d="M11.992 9.86v2.293h2.789l-.263 2.93-2.526.683v2.366l4.657-1.293.034-.384.534-5.981.056-.614h-5.281zm0-4.587v2.267h5.518l.046-.512.104-1.145.054-.61h-5.722z"
      fill="#fff"
    />
  </svg>
);

export const TOOL_LOGOS: { logo: ReactNode; cap: string }[] = [
  { logo: <FigmaLogo />, cap: "Figma" },
  { logo: <FramerLogo />, cap: "Framer" },
  { logo: <ProtoPieLogo />, cap: "ProtoPie" },
  { logo: <AfterEffectsLogo />, cap: "After Effects" },
  { logo: <HtmlCssLogo />, cap: "HTML / CSS" },
];
