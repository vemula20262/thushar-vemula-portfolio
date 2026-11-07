import type { AnimName } from "@/lib/data";

const MOTION_PATH = "M30 172C70 172 80 152 140 152S180 60 200 40S280 40 300 120L330 30";

export default function AnimVisual({ name }: { name: AnimName }) {
  switch (name) {
    case "elastic":
      return (
        <svg viewBox="0 0 520 292" style={{ background: "#0D1330" }} aria-hidden="true">
          <rect x="20" y="118" width="88" height="56" rx="10" fill="#D4FF3A" />
          <text x="64" y="151" fontFamily="Inter" fontSize="14" fontWeight="600" textAnchor="middle" fill="#0D1330">Web tier</text>
          <rect x="150" y="118" width="88" height="56" rx="10" fill="#FFFFFF" />
          <text x="194" y="151" fontFamily="Inter" fontSize="14" fontWeight="600" textAnchor="middle" fill="#0D1330">SQS</text>
          <path d="M108 146H150M238 146H286" stroke="#FFFFFF" strokeWidth="2.5" className="flow" />
          <g fill="#5B74FF">
            {[[290, 36], [356, 36], [422, 36], [290, 80], [356, 80], [422, 80], [290, 124], [356, 124]].map(([x, y], i) => (
              <rect key={i} x={x} y={y} width="56" height="34" rx="8" className={i === 5 || i === 7 ? "pulse" : undefined} />
            ))}
          </g>
          <g fill="none" stroke="#8A97D9" strokeWidth="2" strokeDasharray="5 5">
            {[[422, 124], [290, 168], [356, 168], [422, 168]].map(([x, y], i) => (
              <rect key={i} x={x} y={y} width="56" height="34" rx="8" />
            ))}
          </g>
          <text x="384" y="236" fontFamily="Inter" fontSize="13" textAnchor="middle" fill="#FFFFFF">App tier scales 0 to 15 with queue depth</text>
        </svg>
      );
    case "skillshift":
      return (
        <svg viewBox="0 0 520 292" style={{ background: "#EEF1FF" }} aria-hidden="true">
          <text x="30" y="34" fontFamily="JetBrains Mono" fontSize="13" fill="#3A4166">feedback from past attempts</text>
          <g fill="#FF6B5A">
            {[0, 1, 2, 3, 4].map((i) => (
              <circle key={i} cx="60" cy={80 + i * 24} r="9" className="collapse" style={{ ["--d" as string]: `${-i * 24}px` }} />
            ))}
          </g>
          <text x="60" y="214" fontFamily="JetBrains Mono" fontSize="12" textAnchor="middle" fill="#0D1330">1 workbook</text>
          <circle cx="150" cy="80" r="9" fill="#FF6B5A" />
          <text x="150" y="214" fontFamily="JetBrains Mono" fontSize="12" textAnchor="middle" fill="#0D1330">task B</text>
          <circle cx="230" cy="80" r="9" fill="#FF6B5A" />
          <text x="230" y="214" fontFamily="JetBrains Mono" fontSize="12" textAnchor="middle" fill="#0D1330">task C</text>
          <path d="M270 120H330" stroke="#2340FF" strokeWidth="3" className="flow" />
          <rect x="340" y="70" width="150" height="110" rx="14" fill="#0D1330" />
          <text x="415" y="102" fontFamily="JetBrains Mono" fontSize="12" textAnchor="middle" fill="#D4FF3A">source-balanced</text>
          <g fill="#FF6B5A"><circle cx="385" cy="138" r="9" /><circle cx="415" cy="138" r="9" /><circle cx="445" cy="138" r="9" /></g>
          <text x="260" y="262" fontFamily="Inter" fontSize="13" textAnchor="middle" fill="#0D1330">Repeats from one source count once</text>
        </svg>
      );
    case "federated":
      return (
        <svg viewBox="0 0 360 202" style={{ background: "#EEF1FF" }} aria-hidden="true">
          <g stroke="#2340FF" strokeWidth="2" className="flow">
            <path d="M180 101L70 45M180 101L290 45M180 101L70 157M180 101L290 157M180 101L180 26" />
          </g>
          <circle cx="180" cy="101" r="26" fill="#0D1330" />
          <text x="180" y="106" fontFamily="Inter" fontSize="12" fontWeight="600" fill="#D4FF3A" textAnchor="middle">FedAvg</text>
          <g fill="#FFFFFF" stroke="#0D1330" strokeWidth="2">
            <circle cx="70" cy="45" r="14" /><circle cx="290" cy="45" r="14" /><circle cx="70" cy="157" r="14" /><circle cx="290" cy="157" r="14" />
          </g>
          <circle cx="180" cy="26" r="14" fill="#FF6B5A" className="pulse" />
          <text x="206" y="30" fontFamily="Inter" fontSize="11" fill="#0D1330">Raspberry Pi</text>
        </svg>
      );
    case "compiler":
      return (
        <div className="code-vis">
          <div><span className="ln">1</span>POLY F = x^2 + 3x + 1;</div>
          <div><span className="ln">2</span>INPUT y;</div>
          <div><span className="ln">3</span>OUTPUT F(y);</div>
          <div style={{ color: "#D4FF3A" }}>✓ parsed · 0 semantic errors</div>
          <div>&gt; 13<span className="caret">▌</span></div>
        </div>
      );
    case "cache": {
      const cells: [string, string?][] = [
        ["S", "g"], ["S", "g"], ["I"], ["I"],
        ["M", "c"], ["I"], ["I"], ["I"],
        ["I"], ["E", "b"], ["I"], ["S", "g"],
      ];
      const bg: Record<string, string> = { g: "#1FBF6A", c: "#FF6B5A", b: "#2340FF" };
      return (
        <div className="cache-vis">
          {["Core 0", "Core 1", "Core 2", "Core 3"].map((c) => (
            <b key={c} style={{ background: "transparent" }}>{c}</b>
          ))}
          {cells.map(([s, k], i) => (
            <span key={i} className={k === "c" ? "pulse" : undefined} style={k ? { background: bg[k], color: "#fff" } : undefined}>{s}</span>
          ))}
        </div>
      );
    }
    case "robot":
      return (
        <svg viewBox="0 0 360 202" style={{ background: "#EEF1FF" }} aria-hidden="true">
          <g fill="#0D1330">
            <rect x="100" y="20" width="26" height="110" rx="4" />
            <rect x="210" y="72" width="26" height="120" rx="4" />
            <circle cx="300" cy="60" r="18" />
          </g>
          <path d={MOTION_PATH} fill="none" stroke="#FF6B5A" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 8" />
          <rect x="320" y="20" width="20" height="20" rx="4" fill="#1FBF6A" />
          <text x="330" y="58" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" fill="#13864C">goal</text>
          <circle r="10" fill="#2340FF" stroke="#FFFFFF" strokeWidth="2.5">
            <animateMotion dur="3.2s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;0.85;1" calcMode="linear" path={MOTION_PATH} />
          </circle>
        </svg>
      );
    case "court":
      return (
        <div className="court-vis">
          <div className="r h"><span>case_no</span><span>court</span><span>status</span></div>
          <div className="r"><span>CRL-1042</span><span>Delhi HC</span><span>Listed</span></div>
          <div className="r"><span>CIV-2210</span><span>Bombay HC</span><span>Reserved</span></div>
          <div className="r"><span>CRL-0881</span><span>Delhi HC</span><span>Disposed</span></div>
          <div className="r"><span>WP-3307</span><span>Madras HC</span><span>Listed</span></div>
          <span className="bar scan" />
        </div>
      );
    case "microbiome":
      return (
        <svg viewBox="0 0 360 202" style={{ background: "#0D1330" }} aria-hidden="true">
          <g fill="#D4FF3A"><circle cx="80" cy="70" r="7" className="pulse" /><circle cx="96" cy="58" r="6" /><circle cx="66" cy="88" r="6" /><circle cx="100" cy="84" r="7" /></g>
          <g fill="#5B74FF"><circle cx="210" cy="60" r="7" /><circle cx="228" cy="74" r="6" className="pulse" /><circle cx="196" cy="80" r="6" /><circle cx="220" cy="48" r="5" /></g>
          <g fill="#FF6B5A"><circle cx="150" cy="150" r="7" /><circle cx="168" cy="140" r="6" /><circle cx="136" cy="164" r="6" className="pulse" /><circle cx="170" cy="162" r="5" /></g>
          <g fill="none" stroke="#8A97D9" strokeWidth="1.5" strokeDasharray="4 4"><circle cx="84" cy="74" r="34" /><circle cx="212" cy="64" r="32" /><circle cx="155" cy="152" r="32" /></g>
          <text x="290" y="110" fontFamily="JetBrains Mono" fontSize="11" fill="#C9D2FF">HMMER</text>
          <text x="290" y="128" fontFamily="JetBrains Mono" fontSize="11" fill="#C9D2FF">CAZy</text>
        </svg>
      );
  }
}
