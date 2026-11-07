"use client";
import { useEffect, useState } from "react";

const LINES = [
  { cmd: "whoami", out: "Thushar" },
  { cmd: "focus", out: "backend · applied AI" },
  { cmd: "status", out: "M.S. CS @ ASU ’27" },
];
const LAST = "./build --what-next";

export default function Terminal() {
  // step counts typed characters across the whole script; -1 means "show everything" (no JS / reduced motion)
  const script = LINES.map((l) => l.cmd).concat(LAST);
  const total = script.reduce((n, s) => n + s.length, 0);
  const [typed, setTyped] = useState(-1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setTyped(0);
    let n = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      n += 1;
      setTyped(n);
      if (n < total) {
        // pause a little at the end of each command so its answer can land
        let acc = 0;
        let pause = false;
        for (const s of script) {
          acc += s.length;
          if (n === acc) pause = true;
        }
        timer = setTimeout(tick, pause ? 520 : 55 + Math.random() * 45);
      }
    };
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const all = typed < 0;
  let remaining = all ? Infinity : typed;
  const rows = script.map((s, i) => {
    const shown = Math.max(0, Math.min(s.length, remaining));
    const done = shown === s.length;
    const started = remaining > 0 || all;
    remaining -= s.length;
    return { text: s.slice(0, shown), done, started, i };
  });
  const activeRow = all ? script.length - 1 : rows.findIndex((r) => !r.done);
  const caretRow = activeRow === -1 ? script.length - 1 : activeRow;

  return (
    <div className="terminal" role="img" aria-label="Terminal: whoami Thushar, focus backend and applied AI, status M.S. CS at ASU 2027">
      <div className="term-bar" aria-hidden="true">
        <span className="term-dot" style={{ background: "#FF6B5A" }} />
        <span className="term-dot" style={{ background: "#FFC83D" }} />
        <span className="term-dot" style={{ background: "#D4FF3A" }} />
        <span className="term-title">thushar@asu: ~</span>
      </div>
      <div className="term-body" aria-hidden="true">
        {rows.map((r) =>
          r.started || r.i === 0 ? (
            <div key={r.i}>
              <span className="p">$</span> {r.text}
              {r.done && r.i < LINES.length && (
                <span className="out"> → {LINES[r.i].out}</span>
              )}
              {r.i === caretRow && <span className="caret p">▌</span>}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
