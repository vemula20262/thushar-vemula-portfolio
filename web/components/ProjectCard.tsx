import type { Project } from "@/lib/data";
import AnimVisual from "./Visuals";

const LABEL: Record<Project["label"], string> = { real: "[ real ]", live: "[ live ]", sim: "[ sim ]" };

function Media({ p }: { p: Project }) {
  return (
    <div className="media">
      {p.visual.kind === "image" ? (
        <img src={p.visual.src} alt={p.visual.alt} loading="lazy" width={1600} height={900} />
      ) : (
        <AnimVisual name={p.visual.name} />
      )}
    </div>
  );
}

function Links({ p }: { p: Project }) {
  return (
    <div className="plinks">
      {p.repo && (
        <a className="pill pill-dark" href={p.repo} target="_blank" rel="noopener noreferrer">
          GitHub ↗<span className="sr-only"> (opens in a new tab)</span>
        </a>
      )}
      {p.links?.map((l) => (
        <a key={l.href} className="pill" href={l.href} target="_blank" rel="noopener noreferrer">
          {l.label} ↗<span className="sr-only"> (opens in a new tab)</span>
        </a>
      ))}
    </div>
  );
}

export default function ProjectCard({ p, wide = false, small = false }: { p: Project; wide?: boolean; small?: boolean }) {
  const Title = small ? "h4" : "h3";
  if (wide) {
    return (
      <article className="card proj wide">
        <div className="media-wrap"><Media p={p} /></div>
        <div className="body">
          <span className="ptag">{LABEL[p.label]} {p.tag}</span>
          <h3 className="ptitle">{p.title}</h3>
          <p className="pblurb">{p.blurb}</p>
          <span className="pstack">{p.stack.join(" · ")}</span>
          <Links p={p} />
        </div>
      </article>
    );
  }
  return (
    <article className="card proj" style={small ? { borderRadius: 20, padding: 16 } : undefined}>
      <Media p={p} />
      <div className="body">
        <span className="ptag">{LABEL[p.label]} {p.tag}</span>
        <Title className="ptitle" style={small ? { fontSize: 22 } : undefined}>{p.title}</Title>
        <p className="pblurb" style={small ? { fontSize: 14 } : undefined}>{p.blurb}</p>
        {!small && <span className="pstack">{p.stack.join(" · ")}</span>}
        <Links p={p} />
      </div>
    </article>
  );
}
