import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Resume | Thushar Reddy Vemula",
  description: "Resume of Thushar Reddy Vemula, software engineer focused on backend systems and applied AI. M.S. Computer Science, Arizona State University.",
  alternates: { canonical: "/resume.html" },
};

export default function Resume() {
  return (
    <>
      <Header />
      <main id="main" className="wrap section" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div className="section-head" style={{ marginBottom: 0 }}>
          <div>
            <span className="eyebrow">/resume</span>
            <h1 className="h2">Thushar Reddy Vemula · Resume</h1>
          </div>
          <div className="row">
            <a className="btn btn-dark" href="/assets/Vemula_Thushar_Resume.pdf" download>Download PDF</a>
            <a className="btn btn-light" href="/">Back to portfolio</a>
          </div>
        </div>
        <a href="/assets/Vemula_Thushar_Resume.pdf" className="card" style={{ display: "block", overflow: "hidden", maxWidth: 900 }}>
          <img src="/assets/resume-preview.png" alt="Preview of Thushar Reddy Vemula's resume" width={1224} height={1584} />
        </a>
      </main>
    </>
  );
}
