"use client";
import { useEffect, useState } from "react";

const SCRIPT = [
  { cmd: "whoami", out: "Thushar Reddy Vemula" },
  { cmd: "cat focus.txt", out: "backend · applied AI · agents" },
  { cmd: "status", out: "M.S. CS @ ASU, May 2027" },
  { cmd: "./build --what-next", out: "building what’s next", spin: true },
];
const SPIN = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

type Phase = "cmd" | "out" | "hold" | "erase";

export default function Terminal() {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<Phase>("hold");
  const [n, setN] = useState(SCRIPT[0].cmd.length);
  const [m, setM] = useState(SCRIPT[0].out.length);
  const [spin, setSpin] = useState(0);

  // typing state machine: type the command, type its answer, hold, erase, next
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const step = SCRIPT[i];
    let t: ReturnType<typeof setTimeout>;
    if (phase === "cmd") {
      if (n < step.cmd.length) t = setTimeout(() => setN(n + 1), 70 + Math.random() * 60);
      else t = setTimeout(() => setPhase("out"), 320);
    } else if (phase === "out") {
      if (m < step.out.length) t = setTimeout(() => setM(m + 1), 28);
      else t = setTimeout(() => setPhase("hold"), 10);
    } else if (phase === "hold") {
      t = setTimeout(() => setPhase("erase"), step.spin ? 3200 : 1800);
    } else {
      if (m > 0) t = setTimeout(() => setM(Math.max(0, m - 3)), 14);
      else if (n > 0) t = setTimeout(() => setN(n - 1), 22);
      else
        t = setTimeout(() => {
          setI((i + 1) % SCRIPT.length);
          setPhase("cmd");
        }, 200);
    }
    return () => clearTimeout(t);
  }, [i, phase, n, m]);

  useEffect(() => {
    const id = setInterval(() => setSpin((s) => (s + 1) % SPIN.length), 90);
    return () => clearInterval(id);
  }, []);

  const step = SCRIPT[i];
  const typingCmd = phase === "cmd";
  return (
    <div className="terminal" role="img" aria-label="Terminal showing: Thushar Reddy Vemula, backend and applied AI, M.S. CS at ASU, May 2027">
      <div className="term-bar" aria-hidden="true">
        <span className="term-dot" style={{ background: "#FF6B5A" }} />
        <span className="term-dot" style={{ background: "#FFC83D" }} />
        <span className="term-dot" style={{ background: "#D4FF3A" }} />
        <span className="term-title">thushar@asu: ~</span>
        <span className="term-step">{i + 1}/{SCRIPT.length}</span>
      </div>
      <div className="term-body" aria-hidden="true">
        <div>
          <span className="p">$</span> {step.cmd.slice(0, n)}
          {(typingCmd || phase === "erase") && <span className="caret p">▌</span>}
        </div>
        <div className="out">
          {m > 0 && (
            <>
              {step.spin && phase !== "erase" && <span className="p">{SPIN[spin]} </span>}
              {!step.spin && <span className="p">→ </span>}
              {step.out.slice(0, m)}
              {(phase === "out" || phase === "hold") && <span className="caret p">▌</span>}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
