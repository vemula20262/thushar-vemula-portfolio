import Header from "@/components/Header";
import Portrait from "@/components/Portrait";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import MoreProjects from "@/components/MoreProjects";
import ContactForm from "@/components/ContactForm";
import { featured, roles, stackGroups, marqueeA, marqueeB, techLabel, profile } from "@/lib/data";

function Marquee({ items, dir, lime }: { items: string[]; dir: "l" | "r"; lime?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className={`track ${dir}`}>
        {loop.map((k, i) => (
          <span key={i} className={`chip${lime ? " lime" : ""}`}>
            <img src={`/assets/tech/${k}.svg`} alt="" width={20} height={20} />
            {techLabel[k]}
          </span>
        ))}
      </div>
    </div>
  );
}

// share of the ASU program completed, computed at build time
function asuProgress() {
  const start = Date.UTC(2025, 7, 15);
  const end = Date.UTC(2027, 4, 15);
  const p = (Date.now() - start) / (end - start);
  return Math.round(Math.min(1, Math.max(0, p)) * 100);
}

export default function Home() {
  const asu = asuProgress();
  return (
    <>
      <Header />
      <main id="main">
        {/* Hero */}
        <section className="hero" id="top">
          <div className="wrap hero-grid">
            <div className="card hero-main">
              <div className="hero-copy">
                <span className="eyebrow">&gt; whoami</span>
                <h1>
                  Hi, I’m Thushar.
                  <br />I turn <span style={{ color: "var(--blue)" }}>what if</span> into{" "}
                  <span className="hl">what’s next</span>
                  <span className="caret" style={{ color: "var(--blue)" }} aria-hidden="true">|</span>
                </h1>
                <p className="hero-lead">
                  I’m Thushar Reddy Vemula, a software engineer focused on backend systems and applied AI. I build the
                  interface someone touches and the pipeline that keeps it dependable.
                </p>
                <div className="row">
                  <a className="btn btn-light" href="/assets/Vemula_Thushar_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    Resume.pdf<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <a className="btn btn-blue" href="#contact">Contact me</a>
                </div>
              </div>
              <div className="portrait-stage">
                <Portrait />
              </div>
            </div>
            <Reveal className="card stat stat-blue" delay={0.05}>
              <span className="k">status</span>
              <strong>M.S. CS at ASU</strong>
              <span style={{ fontSize: 15, color: "#DDE3FF" }}>Graduating May 2027</span>
            </Reveal>
            <Reveal className="card stat" delay={0.12}>
              <span className="k" style={{ color: "var(--blue)" }}>currently</span>
              <strong style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span className="ping" aria-hidden="true" />Software Automation Aide
              </strong>
              <span style={{ fontSize: 15, color: "var(--muted)" }}>Arizona State University</span>
            </Reveal>
            <Reveal className="card stat stat-lime" delay={0.19}>
              <span className="k">focus</span>
              <strong>Agents · RAG · Cloud</strong>
              <span style={{ fontSize: 15 }}>LLM apps with real backends</span>
            </Reveal>
          </div>
        </section>

        {/* Projects */}
        <section className="section" id="work">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">01 / projects</span>
                <h2 className="h2">Featured work</h2>
              </div>
              <span className="legend">[ real ] screenshot · [ live ] deployed site · [ sim ] animated illustration</span>
            </div>
            <div className="featured-grid">
              {featured.map((p, i) => (
                <Reveal key={p.slug} style={i === 0 ? { gridColumn: "1 / -1", display: "flex" } : { display: "flex" }} delay={i === 0 ? 0 : 0.05 * (i % 2)}>
                  <div style={{ width: "100%", display: "flex" }}>
                    <ProjectCard p={p} wide={i === 0} />
                  </div>
                </Reveal>
              ))}
            </div>
            <h3 className="subhead">More projects</h3>
            <MoreProjects />
          </div>
        </section>

        {/* Journey */}
        <section className="section" id="journey">
          <div className="wrap" style={{ maxWidth: 1100 }}>
            <div className="section-head">
              <div>
                <span className="eyebrow">02 / journey</span>
                <h2 className="h2">git log --career</h2>
              </div>
            </div>
            <Reveal className="card log">
              {roles.map((r) => (
                <div className="log-row" key={r.org}>
                  <img src={r.logo} alt={`${r.org} logo`} width={52} height={52} loading="lazy" />
                  <div className="log-info">
                    <strong>{r.role}</strong>
                    <span>{r.org}{r.place ? ` · ${r.place}` : ""}</span>
                  </div>
                  <span className={`date${r.current ? " now" : ""}`}>{r.dates}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Stack */}
        <section className="section" id="stack">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">03 / stack</span>
                <h2 className="h2">Tools I ship with</h2>
              </div>
              <span className="mono" style={{ fontSize: 14, background: "var(--ink)", color: "var(--lime)", padding: "10px 14px", borderRadius: 10 }}>
                $ npm ls --depth=0 thushar<span className="caret">▌</span>
              </span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, transform: "rotate(-1deg)", margin: "8px 0" }}>
            <Marquee items={marqueeA} dir="l" />
            <Marquee items={marqueeB} dir="r" lime />
          </div>
          <div className="wrap">
            <div className="stack-grid">
              {stackGroups.map((g, gi) => (
                <Reveal key={g.title} className={`card stack-card${g.dark ? " dark" : ""}`} delay={0.05 * (gi % 2)}>
                  <div className="top">
                    <strong>{g.title}</strong>
                    <span className="mono" style={{ fontSize: 12, color: g.dark ? "var(--lime)" : "var(--blue)" }}>{g.dir}</span>
                  </div>
                  <ul className="chips" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {g.items.map((it) => (
                      <li key={it.name} className="chip">
                        {it.icon ? <img src={it.icon} alt="" width={20} height={20} /> : <span className="dot" style={{ background: it.color }} />}
                        {it.name}
                      </li>
                    ))}
                  </ul>
                  <span className="note">{g.note}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="section" id="education">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">04 / education</span>
                <h2 className="h2">Where I learned to build</h2>
              </div>
            </div>
            <div className="edu-grid">
              <Reveal className="card edu">
                <div className="edu-head">
                  <img src="/assets/asu.png" alt="Arizona State University logo" width={76} height={76} loading="lazy" />
                  <div><strong>Arizona State University</strong><span>Tempe, Arizona, USA</span></div>
                </div>
                <div>
                  <div className="degree">M.S. Computer Science</div>
                  <span className="mono" style={{ fontSize: 13, color: "var(--blue)" }}>Aug 2025 to May 2027 (expected)</span>
                </div>
                <div>
                  <div className="bar-track"><span className="bar-fill" style={{ width: `${asu}%`, background: "var(--blue)" }} /></div>
                  <div className="bar-legend"><span>Aug 2025</span><span>in progress</span><span>May 2027</span></div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span className="mono" style={{ fontSize: 12, color: "var(--muted)" }}>selected coursework</span>
                  <ul className="chips" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {["Agentic AI", "Cloud Computing", "Data Mining", "Semantic Web Mining", "Distributed Database Systems"].map((c) => (
                      <li key={c} className="chip">{c}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal className="card edu" delay={0.08}>
                <div className="edu-head">
                  <img src="/assets/iiit-delhi.png" alt="IIIT Delhi logo" width={76} height={76} loading="lazy" />
                  <div><strong>IIIT Delhi</strong><span>New Delhi, India</span></div>
                </div>
                <div>
                  <div className="degree">B.Tech. Electronics and Communication Engineering</div>
                  <span className="mono" style={{ fontSize: 13, color: "var(--blue)" }}>Aug 2020 to May 2024</span>
                </div>
                <div>
                  <div className="bar-track"><span className="bar-fill" style={{ width: "100%", background: "var(--green)" }} /></div>
                  <div className="bar-legend"><span>Aug 2020</span><span>completed ✓</span><span>May 2024</span></div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span className="mono" style={{ fontSize: 12, color: "var(--muted)" }}>highlights</span>
                  <ul className="chips" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {["NLP research, MIDAS Lab", "B.Tech thesis: Microbiome", "Computer Architecture", "Robotics"].map((c) => (
                      <li key={c} className="chip">{c}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section" id="contact" style={{ paddingBottom: 48 }}>
          <div className="wrap">
            <Reveal className="contact">
              <div className="contact-copy">
                <span className="eyebrow" style={{ color: "var(--lime)" }}>05 / contact</span>
                <h2 className="h2" style={{ fontSize: "clamp(34px, 5vw, 60px)" }}>Have a what if?<br />Let’s ship it.</h2>
                <p>Send a note about a role, a project or an idea. It lands straight in my inbox.</p>
                <div className="contact-links">
                  <a href={`mailto:${profile.email}`}><b>email</b>{profile.email}</a>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><b>linkedin</b>in/thusharvemula ↗</a>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer"><b>github</b>vemula20262 ↗</a>
                  <span><b>location</b>{profile.location}</span>
                </div>
              </div>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="wrap footer">
        <span>© 2026 Thushar Reddy Vemula · built with Next.js</span>
        <a href="#top">back to top ↑</a>
      </footer>
    </>
  );
}
