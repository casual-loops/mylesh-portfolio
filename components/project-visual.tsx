import type { ReactNode } from 'react';

/** Conceptual technical diagrams, not application screenshots or live telemetry. */
export function ProjectVisual({ slug }: { slug: string }) {
  const groups: Record<string, ReactNode> = {
    'domain-doctor': (
      <svg viewBox="0 0 460 240" className="project-diagram" aria-hidden="true">
        <defs><linearGradient id="dd-beam" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#76A9C6" stopOpacity=".45"/><stop offset="1" stopColor="#76A9C6" stopOpacity=".02"/></linearGradient></defs>
        <circle cx="170" cy="119" r="72" fill="none" stroke="#76A9C6" strokeOpacity=".27" strokeWidth="1"/>
        <circle cx="170" cy="119" r="49" fill="none" stroke="#76A9C6" strokeOpacity=".15"/>
        <ellipse cx="170" cy="119" rx="73" ry="26" fill="none" stroke="#76A9C6" strokeOpacity=".23" transform="rotate(-23 170 119)"/>
        <path d="M170 47V191 M98 119H242" stroke="#76A9C6" strokeOpacity=".12" strokeDasharray="3 5"/>
        <circle cx="170" cy="119" r="11" fill="#151C23" stroke="#76A9C6" strokeWidth="1.5"/>
        <circle cx="170" cy="119" r="3" fill="#76A9C6"/>
        <path d="M221 68H255L273 49H310 M230 157H255L271 177H310" fill="none" stroke="#9EB0BD" strokeOpacity=".48"/>
        <g fill="#AEBCCA" fontFamily="monospace" fontSize="9" letterSpacing="1.1"><text x="282" y="39">DNS</text><text x="282" y="193">TLS</text><text x="105" y="216">HTTP // HEADERS</text></g>
        <g stroke="#76A9C6" fill="none" strokeWidth="1"><circle cx="310" cy="49" r="5"/><circle cx="310" cy="177" r="5"/></g>
        <path d="M288 83H375 M288 94H356 M288 105H387 M288 116H341" stroke="#9CB0BF" strokeOpacity=".3" strokeWidth="2"/>
        <path d="M288 83H333 M288 94H316" stroke="url(#dd-beam)" strokeWidth="2"/>
      </svg>
    ),
    tapestree: (
      <svg viewBox="0 0 460 240" className="project-diagram" aria-hidden="true">
        <g fill="none" strokeWidth="1.2">
          <path d="M116 118H194 M258 118H335" stroke="#91A9B9" strokeOpacity=".58"/>
          <path d="M190 114L196 118L190 122 M331 114L337 118L331 122" stroke="#91A9B9" strokeOpacity=".58"/>
          <path d="M226 144V174H298" stroke="#D56668" strokeOpacity=".40" strokeDasharray="3 5"/>
        </g>
        <rect x="35" y="86" width="82" height="64" rx="3" fill="#171A1F" stroke="#657888"/>
        <rect x="194" y="80" width="64" height="76" rx="3" fill="#192127" stroke="#76A9C6"/>
        <rect x="336" y="86" width="89" height="64" rx="3" fill="#19221F" stroke="#76A9C6" strokeOpacity=".65"/>
        <g fill="#C6D1D9" fontFamily="monospace" fontSize="9" letterSpacing=".7" textAnchor="middle">
          <text x="76" y="111">CHANGE</text><text x="76" y="123">CAPTURE</text>
          <text x="226" y="109">REVIEW</text><text x="226" y="121">+</text><text x="226" y="133">APPROVAL</text>
          <text x="380" y="111">EVIDENCE</text><text x="380" y="123">HISTORY</text>
        </g>
        <circle cx="76" cy="151" r="3" fill="#D56668"/><circle cx="226" cy="157" r="3" fill="#D6A34F"/><circle cx="380" cy="151" r="3" fill="#76A9C6"/>
        <g stroke="#91A9B9" strokeOpacity=".22"><path d="M50 64H410 M50 175H410"/><path d="M50 60V68 M410 60V68 M50 171V179 M410 171V179"/></g>
        <text x="52" y="55" fill="#AAB5C1" fontFamily="monospace" fontSize="9" letterSpacing="1">CHANGE LIFECYCLE</text>
      </svg>
    ),
    'infrastructure-lab': (
      <svg viewBox="0 0 460 240" className="project-diagram" aria-hidden="true">
        <g fill="none" stroke="#8C9DAA" strokeOpacity=".49" strokeWidth="1.2">
          <path d="M230 104V78H130V93 M230 78H335V93 M130 137V163H230V177 M335 137V163H230" />
          <path d="M230 78V104 M230 163V177" strokeDasharray="3 5"/>
        </g>
        <rect x="191" y="101" width="78" height="62" rx="3" fill="#181E24" stroke="#76A9C6" strokeWidth="1.4"/>
        <rect x="90" y="93" width="79" height="44" rx="3" fill="#14191F" stroke="#788E9D"/>
        <rect x="296" y="93" width="79" height="44" rx="3" fill="#14191F" stroke="#788E9D"/>
        <rect x="190" y="177" width="80" height="33" rx="3" fill="#161B20" stroke="#788E9D"/>
        <g fill="#C3CED8" fontFamily="monospace" fontSize="9" letterSpacing=".5" textAnchor="middle"><text x="230" y="126">PROXMOX</text><text x="230" y="139">HOST</text><text x="129" y="119">VM / LXC</text><text x="336" y="119">NETWORK</text><text x="230" y="197">SERVICES</text></g>
        <circle cx="207" cy="152" r="2.5" fill="#D6A34F"/><circle cx="217" cy="152" r="2.5" fill="#76A9C6"/><circle cx="227" cy="152" r="2.5" fill="#D56668"/>
        <path d="M58 59H95 M365 192H400" stroke="#A0B1BF" strokeOpacity=".32"/>
        <text x="59" y="53" fill="#A9B9C4" fontFamily="monospace" fontSize="9" letterSpacing="1">LAB TOPOLOGY</text>
      </svg>
    ),
  };
  return <div className="project-visual" aria-hidden="true">{groups[slug] ?? null}</div>;
}
