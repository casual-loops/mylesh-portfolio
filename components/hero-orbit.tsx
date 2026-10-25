/** Crisp, resolution-independent orbital graphic. */
export function HeroOrbit(){return <svg className="hero-orbit" viewBox="0 0 900 900" role="img" aria-labelledby="orbit-title orbit-desc" xmlns="http://www.w3.org/2000/svg">
<title id="orbit-title">The Observatory</title><desc id="orbit-desc">An abstract illuminated world with thin orbital paths and scientific markers.</desc>
<defs>
<radialGradient id="glow"><stop stopColor="#DBDCE0" stopOpacity=".65"/><stop offset=".28" stopColor="#D6A34F" stopOpacity=".22"/><stop offset="1" stopColor="#304A64" stopOpacity="0"/></radialGradient>
<radialGradient id="planet" cx="19%" cy="17%" r="95%"><stop stopColor="#B6C2CC"/><stop offset=".18" stopColor="#7C8B99"/><stop offset=".43" stopColor="#38414B"/><stop offset=".73" stopColor="#171C24"/><stop offset="1" stopColor="#070708"/></radialGradient>
<linearGradient id="rim" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#D8E0E6"/><stop offset=".25" stopColor="#A6B5C4"/><stop offset="1" stopColor="#3B566D" stopOpacity=".16"/></linearGradient>
<radialGradient id="terminator" cx="27%" cy="23%" r="80%"><stop offset="0" stopColor="#121B26" stopOpacity="0"/><stop offset=".52" stopColor="#0A0C12" stopOpacity=".05"/><stop offset="1" stopColor="#010204" stopOpacity=".68"/></radialGradient>
<clipPath id="clip"><circle cx="490" cy="452" r="295"/></clipPath>
</defs>
<g fill="#C7D1DB" opacity=".55"><circle cx="121" cy="110" r="1"/><circle cx="782" cy="91" r="1"/><circle cx="70" cy="490" r="1.2"/><circle cx="835" cy="590" r="1"/><circle cx="290" cy="811" r="1"/></g>
<circle cx="332" cy="218" r="153" fill="url(#glow)"/>
<circle cx="490" cy="452" r="303" fill="none" stroke="#8299AE" strokeOpacity=".08" strokeWidth="15"/>
<g className="orbit-motion-secondary" fill="none" stroke="#8A9DAE" strokeWidth="1"><ellipse cx="490" cy="452" rx="345" ry="379" transform="rotate(25 490 452)" strokeDasharray="3 9" opacity=".3"/><circle cx="636" cy="107" r="3.5" fill="#76A9C6" stroke="none"/><circle cx="490" cy="452" r="354" strokeDasharray="2 8" opacity=".22"/></g>
<circle cx="490" cy="452" r="295" fill="url(#planet)"/><circle cx="490" cy="452" r="295" fill="url(#terminator)"/>
<g clipPath="url(#clip)" fill="none" stroke="#94A6B6" strokeOpacity=".21" strokeWidth="1">
<path d="M165 312 Q282 268 398 315 T615 344 T790 321 M178 426 Q298 394 410 434 T635 434 T792 416 M170 525 Q270 489 419 531 T648 527 T795 519 M190 626 Q330 588 466 629 T747 634"/>
<path d="M354 150 Q272 391 393 751 M473 151 Q412 408 551 753 M578 170 Q541 396 661 718" opacity=".5"/>
</g>
<circle cx="490" cy="452" r="295" fill="none" stroke="url(#rim)" strokeWidth="2"/>
<g fill="none" stroke="#8A9DAE" strokeWidth="1"><path d="M490 76 V126 M490 774 V846 M68 452 H137 M840 452 H882" opacity=".4"/></g>
<g fill="#E6E8ED" stroke="#96AABC"><circle cx="490" cy="96" r="4"/><circle cx="490" cy="809" r="5" fill="#141416"/><circle cx="780" cy="258" r="4"/><circle cx="184" cy="646" r="3"/></g>
<circle cx="182" cy="628" r="19" fill="#33302F" stroke="#D56668"/><circle cx="820" cy="267" r="12" fill="#252527" stroke="#D56668"/>
<g fill="none" stroke="#8A9AA9" opacity=".7"><path d="M238 225 H179 L156 199 H107 M778 261 H822 L845 235 H880 M184 649 L157 696 H95 M768 649 L802 690 H872"/></g>
<g fill="#CECBC4" fontFamily="monospace" fontSize="11" letterSpacing="1.5"><text x="106" y="189">01 / SYSTEMS</text><text x="747" y="224">02 / SOFTWARE</text><text x="95" y="715">03 / INFRASTRUCTURE</text><text x="771" y="708">04 / CURIOSITY</text></g>
<g fill="none" stroke="#76A9C6" opacity=".5"><circle cx="782" cy="451" r="23"/><circle cx="782" cy="451" r="7"/><path d="M752 451 H812 M782 421 V481"/></g>
</svg>}