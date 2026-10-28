import type { ReactNode } from 'react';

/** Conceptual technical diagrams, not application screenshots or live telemetry. */
// Static JSX is created once at module evaluation rather than for every card render.
const diagrams: Record<string, ReactNode> = {
    'domain-doctor': (
      <svg viewBox="0 0 460 240" className="project-diagram diagram-domain" aria-hidden="true">
        <defs><linearGradient id="dd-beam" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#76A9C6" stopOpacity=".45"/><stop offset="1" stopColor="#76A9C6" stopOpacity=".02"/></linearGradient></defs>
        <circle cx="170" cy="119" r="72" fill="none" stroke="#76A9C6" strokeOpacity=".27" strokeWidth="1"/>
        <circle cx="170" cy="119" r="49" fill="none" stroke="#76A9C6" strokeOpacity=".15"/>
        <ellipse className="diagram-scan-orbit" cx="170" cy="119" rx="73" ry="26" fill="none" stroke="#76A9C6" strokeOpacity=".23" transform="rotate(-23 170 119)"/>
        <path d="M170 47V191 M98 119H242" stroke="#76A9C6" strokeOpacity=".12" strokeDasharray="3 5"/>
        <circle className="diagram-scan-pulse" cx="170" cy="119" r="11" fill="#151C23" stroke="#76A9C6" strokeWidth="1.5"/>
        <circle cx="170" cy="119" r="3" fill="#76A9C6"/>
        <path d="M221 68H255L273 49H310 M230 157H255L271 177H310" fill="none" stroke="#9EB0BD" strokeOpacity=".48"/>
        <g fill="#AEBCCA" fontFamily="monospace" fontSize="9" letterSpacing="1.1"><text x="282" y="39">DNS</text><text x="282" y="193">TLS</text><text x="38" y="43">HTTP // HEADERS</text></g>
        <g stroke="#76A9C6" fill="none" strokeWidth="1"><circle cx="310" cy="49" r="5"/><circle cx="310" cy="177" r="5"/></g>
        <path d="M288 83H375 M288 94H356 M288 105H387 M288 116H341" stroke="#9CB0BF" strokeOpacity=".3" strokeWidth="2"/>
        <path className="diagram-readout" d="M288 83H333 M288 94H316" stroke="url(#dd-beam)" strokeWidth="2"/>
      </svg>
    ),
    tapestree: (
      <svg viewBox="0 0 460 240" className="project-diagram diagram-tapestree" aria-hidden="true">
        <g fill="none" strokeWidth="1.2">
          <path className="diagram-flow-path" d="M116 118H194 M258 118H335" stroke="#91A9B9" strokeOpacity=".58"/>
          <path d="M190 114L196 118L190 122 M331 114L337 118L331 122" stroke="#91A9B9" strokeOpacity=".58"/>
          
        </g>
        <rect x="35" y="86" width="82" height="64" rx="3" fill="#171A1F" stroke="#657888"/>
        <rect className="diagram-review" x="194" y="80" width="64" height="76" rx="3" fill="#192127" stroke="#76A9C6"/>
        <rect className="diagram-evidence" x="336" y="86" width="89" height="64" rx="3" fill="#19221F" stroke="#76A9C6" strokeOpacity=".65"/>
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
    queueforge: (
      <svg viewBox="0 0 460 240" className="project-diagram diagram-queueforge" aria-hidden="true">
        <g fill="none" stroke="#91A9B9" strokeOpacity=".55" strokeWidth="1.3">
          <path d="M125 115H179 M271 115H332 M225 149V178" />
          <path d="M174 111L180 115L174 119 M327 111L333 115L327 119 M221 173L225 179L229 173" />
        </g>
        <g fill="#141F29" stroke="#76A9C6" strokeOpacity=".8">
          <rect x="30" y="85" width="96" height="60" rx="4"/>
          <rect x="179" y="75" width="92" height="74" rx="4"/>
          <rect x="333" y="85" width="96" height="60" rx="4"/>
          <rect x="179" y="179" width="92" height="38" rx="4"/>
        </g>
        <g fontFamily="monospace" fill="#C7D6E0" fontSize="11" textAnchor="middle">
          <text x="78" y="110">API</text><text x="78" y="125">CLIENT</text>
          <text x="225" y="105">JOB</text><text x="225" y="121">SERVICE</text>
          <text x="381" y="110">POSTGRES</text><text x="381" y="125">STATE</text>
          <text x="225" y="202">WORKERS</text>
        </g>
        <g fill="#76A9C6"><circle cx="225" cy="149" r="3"/><circle cx="271" cy="115" r="3"/></g>
        <g fontFamily="monospace" fill="#9CB0BF" fontSize="9" letterSpacing="1.1"><text x="30" y="44">QUEUEFORGE // CONCEPTUAL</text><text x="30" y="57">CONCURRENCY · RELIABILITY</text></g>
      </svg>
    ),
    'the-observatory': (
      <svg viewBox="0 0 460 240" className="project-diagram diagram-observatory" aria-hidden="true">
        <g fill="none" stroke="#76A9C6" strokeOpacity=".34">
          <circle cx="230" cy="122" r="78"/>
          <circle cx="230" cy="122" r="55"/>
          <ellipse cx="230" cy="122" rx="105" ry="34" transform="rotate(-26 230 122)"/>
          <path d="M230 24V220 M126 122H334" strokeDasharray="3 6"/>
        </g>
        <circle cx="230" cy="122" r="31" fill="#142434" stroke="#76A9C6" strokeOpacity=".75"/>
        <circle cx="230" cy="122" r="5" fill="#E0B15B"/>
        <circle cx="292" cy="67" r="6" fill="#D6A34F"/>
        <circle cx="139" cy="149" r="4" fill="#76A9C6"/>
        <g fill="none" stroke="#90A9BA" strokeOpacity=".5">
          <path d="M172 77H105L80 58H49"/>
          <path d="M290 169H354L375 186H419"/>
        </g>
        <g fontFamily="monospace" fontSize="10" fill="#BDD1DF" letterSpacing="1">
          <text x="48" y="49">SYSTEMS</text>
          <text x="345" y="204">SOFTWARE</text>
          <text x="48" y="212">THE OBSERVATORY // PORTFOLIO</text>
        </g>
      </svg>
    ),
    'infrastructure-lab': (
      <svg viewBox="0 0 460 240" className="project-diagram diagram-infra" aria-hidden="true">
        <defs>
          <linearGradient id="lab-chassis" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#252D35"/><stop offset="1" stopColor="#11161B"/>
          </linearGradient>
        </defs>
        <text x="54" y="45" fill="#A9B9C4" fontFamily="monospace" fontSize="9" letterSpacing="1.5">THE HOME LAB</text>
        <path d="M54 55H118" stroke="#76A9C6" strokeOpacity=".45"/>
        <g transform="translate(164 32) scale(0.82)">
          <path d="M14 8L170 8L185 21L185 180L170 192L14 192L0 180L0 21Z" fill="#0D1115" stroke="#617587" strokeWidth="1.2"/>
          <path d="M14 8L170 8L185 21L15 21Z" fill="#26303A" opacity=".7"/>
          <rect x="15" y="26" width="155" height="157" rx="3" fill="url(#lab-chassis)" stroke="#435462"/>
          <g fill="#10161C" stroke="#647B8D" strokeOpacity=".75">
            <rect x="24" y="36" width="137" height="30" rx="2"/>
            <rect x="24" y="73" width="137" height="43" rx="2"/>
            <rect x="24" y="123" width="137" height="23" rx="2"/>
            <rect x="24" y="153" width="137" height="20" rx="2"/>
          </g>
          <g fill="none" stroke="#7D94A5" strokeOpacity=".4">
            <path d="M36 45H79 M36 51H69 M36 57H75"/>
            <path d="M37 84H87 M37 92H80 M37 100H69"/>
            <path d="M36 134H105 M36 140H85"/>
            <path d="M36 163H115"/>
          </g>
          <g fill="#76A9C6"><circle className="diagram-server-light a" cx="145" cy="46" r="2.5"/><circle className="diagram-server-light b" cx="135" cy="46" r="2.5"/></g>
          <g fill="#D6A34F"><circle className="diagram-server-light c" cx="145" cy="87" r="2.5"/></g>
          <g fill="#D56668"><circle cx="145" cy="134" r="2.5"/></g>
          <g fill="none" stroke="#6D879A" strokeOpacity=".55">
            <rect x="109" y="91" width="32" height="13" rx="2"/>
            <path d="M113 95H137 M113 99H129"/>
          </g>
        </g>
        <g fill="none" stroke="#8096A7" strokeOpacity=".38">
          <path d="M322 92H365L382 76H407"/>
          <path d="M322 158H365L382 177H407"/>
        </g>
        <g fill="#B9C9D5" fontFamily="monospace" fontSize="9" letterSpacing=".8">
          <text x="354" y="66">COMPUTE</text>
          <text x="353" y="194">NETWORK</text>
        </g>
        <circle cx="407" cy="76" r="3" fill="#76A9C6"/>
        <circle cx="407" cy="177" r="3" fill="#D6A34F"/>
      </svg>
    ),
};

export function ProjectVisual({ slug }: { slug: string }) {
  return <div className="project-visual" aria-hidden="true">{diagrams[slug] ?? null}</div>;
}
