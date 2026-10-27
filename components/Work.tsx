"use client";

import { useRef } from "react";
import { person, projects, type Project } from "@/content/resume";
import { FocusControl } from "./FocusControl";

/** The uneven wall: each row has its own height, each tile's width follows its picture. */
const rows: number[][] = [
  [0, 1],
  [2, 3],
  [4, 5],
];

function Tile({ project, onOpen, index }: { project: Project; onOpen: () => void; index: number }) {
  const { image } = project;
  return (
    <button
      type="button"
      className="tile"
      style={{ "--r": (image.w / image.h).toFixed(3), "--i": index % 2 } as React.CSSProperties}
      data-tags={project.focus.join(" ")}
      aria-haspopup="dialog"
      onClick={onOpen}
      data-reveal
    >
      <span className="tile__frame">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image.src} width={image.w} height={image.h} alt={image.alt} loading="lazy" decoding="async" />
      </span>
      <span className="tile__cap">
        <span>
          <span className="tile__name">{project.name}</span>
          <span className="tile__what">, {project.what}</span>
        </span>
        <span className="tile__proof">{project.proof}</span>
      </span>
    </button>
  );
}

function Sheet({ project, setRef }: { project: Project; setRef: (el: HTMLDialogElement | null) => void }) {
  const { image } = project;
  const titleId = `${project.slug}-title`;
  return (
    <dialog
      ref={setRef}
      className="sheet"
      aria-labelledby={titleId}
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
    >
      <div className="sheet__in">
        <figure className="sheet__fig">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image.src} width={image.w} height={image.h} alt={image.alt} loading="lazy" decoding="async" />
          <figcaption>{image.caption}</figcaption>
        </figure>
        <div className="sheet__text">
          <h3 id={titleId} className="sheet__title">
            {project.name}
          </h3>
          <p className="sheet__what">{project.what}</p>
          <p className="sheet__proof">{project.proof}</p>
          <ul className="sheet__points">
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <form method="dialog" className="sheet__actions">
            {project.repo && (
              <a className="button" href={project.repo} target="_blank" rel="noopener noreferrer">
                Source on GitHub
              </a>
            )}
            <button className="sheet__close" type="submit">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export function Work() {
  const sheets = useRef<Record<string, HTMLDialogElement | null>>({});

  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="work__head">
        <h2 id="work-title" className="d2" data-reveal>
          Work
        </h2>
        <a className="link" href={person.github} target="_blank" rel="noopener noreferrer" data-reveal>
          All code on GitHub
        </a>
      </div>

      <FocusControl />

      <div className="wall">
        {rows.map((row, r) => (
          <div className="wall__row" key={r}>
            {row.map((i) => (
              <Tile
                key={projects[i].slug}
                project={projects[i]}
                index={i}
                onOpen={() => sheets.current[projects[i].slug]?.showModal()}
              />
            ))}
          </div>
        ))}
      </div>

      {projects.map((p) => (
        <Sheet
          key={p.slug}
          project={p}
          setRef={(el) => {
            sheets.current[p.slug] = el;
          }}
        />
      ))}
    </section>
  );
}
