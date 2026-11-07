"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="wrap header-inner">
        <a href="/" className="brand" aria-label="Thushar Reddy Vemula, home">
          <span className="brand-mark" aria-hidden="true">{"{t}"}</span>
          <span className="brand-name">Thushar Vemula</span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#work">/work</a>
          <a href="#journey" className="hide-sm">/journey</a>
          <a href="#stack" className="hide-sm">/stack</a>
          <a href="#education" className="hide-sm">/education</a>
          <a href="/resume.html">/resume</a>
          <a href="#contact" className="cta">say_hello()</a>
        </nav>
      </div>
    </header>
  );
}
