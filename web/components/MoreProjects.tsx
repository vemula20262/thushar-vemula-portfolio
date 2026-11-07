"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { categories, more, type Category } from "@/lib/data";
import ProjectCard from "./ProjectCard";

const INITIAL = 6;

export default function MoreProjects() {
  const [cat, setCat] = useState<"all" | Category>("all");
  const [expanded, setExpanded] = useState(false);
  const list = cat === "all" ? more : more.filter((p) => p.cat === cat);
  const shown = cat === "all" && !expanded ? list.slice(0, INITIAL) : list;

  return (
    <>
      <div className="filters">
        <div className="filter-row" role="group" aria-label="Filter projects by category">
          {categories.map((c) => {
            const n = c.id === "all" ? more.length : more.filter((p) => p.cat === c.id).length;
            const on = cat === c.id;
            return (
              <button
                key={c.id}
                type="button"
                className={`fbtn${on ? " on" : ""}`}
                aria-pressed={on}
                onClick={() => {
                  setCat(c.id);
                  setExpanded(false);
                }}
              >
                {c.label} <span className="fcount">{n}</span>
              </button>
            );
          })}
        </div>
        <span className="legend" aria-live="polite">showing {shown.length} of {list.length}</span>
      </div>
      <motion.div layout className="more-grid">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "flex" }}
            >
              <ProjectCard p={p} small />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {cat === "all" && !expanded && list.length > INITIAL && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 22 }}>
          <button type="button" className="btn btn-light mono" style={{ fontSize: 14 }} onClick={() => setExpanded(true)}>
            show_all({list.length}) ↓
          </button>
        </div>
      )}
    </>
  );
}
